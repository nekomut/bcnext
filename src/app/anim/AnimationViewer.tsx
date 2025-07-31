// common/util/animベースのアニメーションビューアー

'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { AnimationData, AnimationState, EPart } from './types';
import { loadUnitImage } from './animationLoader';

interface AnimationViewerProps {
  animationData: { [form: string]: AnimationData };
  selectedForm: string;
  selectedAnimation: string;
  isPlaying: boolean;
  unitId: string;
}

export default function AnimationViewer({
  animationData,
  selectedForm,
  selectedAnimation,
  isPlaying,
  unitId
}: AnimationViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  
  const [animationState, setAnimationState] = useState<AnimationState>({
    currentFrame: 0,
    isPlaying: false,
    selectedAnimation: '',
    parts: [],
    sprites: []
  });
  
  const [zoom, setZoom] = useState<number>(1);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [showRefLines, setShowRefLines] = useState<boolean>(true);

  // スプライト画像をロード
  const loadSprites = useCallback(async () => {
    const canvas = await loadUnitImage(unitId);
    if (!canvas || !animationData[selectedForm]) return;
    
    const formData = animationData[selectedForm];
    const sprites = formData.imgcut.cut(canvas);
    
    setAnimationState(prev => ({
      ...prev,
      sprites
    }));
    
    console.log(`スプライト読み込み完了: ${sprites.length}個`);
  }, [unitId, selectedForm, animationData]);

  // アニメーション状態を初期化
  const initializeAnimation = useCallback(() => {
    if (!animationData[selectedForm] || !animationData[selectedForm].maanim[selectedAnimation]) {
      return;
    }
    
    const formData = animationData[selectedForm];
    const mamodel = formData.mamodel;
    
    // パーツを初期化
    const parts: EPart[] = [];
    for (let i = 0; i < mamodel.n; i++) {
      const part = new EPart(mamodel.parts[i], mamodel.strs0[i], i);
      parts.push(part);
    }
    
    setAnimationState(prev => ({
      ...prev,
      currentFrame: 0,
      selectedAnimation,
      parts,
      isPlaying
    }));
    
    console.log(`アニメーション初期化: ${selectedAnimation}, パーツ数: ${parts.length}`);
  }, [animationData, selectedForm, selectedAnimation, isPlaying]);

  // フレーム更新処理（common/util/animベース）
  const updateAnimation = useCallback((frame: number) => {
    if (!animationData[selectedForm] || !animationData[selectedForm].maanim[selectedAnimation]) {
      return;
    }
    
    const formData = animationData[selectedForm];
    const mamodel = formData.mamodel;
    const maanim = formData.maanim[selectedAnimation];
    
    setAnimationState(prev => {
      const newParts = [...prev.parts];
      
      // 各パーツのベース値をリセット
      for (let i = 0; i < newParts.length; i++) {
        const modelPart = mamodel.parts[i];
        if (modelPart) {
          newParts[i] = new EPart(modelPart, mamodel.strs0[i], i);
        }
      }
      
      // アニメーションを適用（common/util/animのロジック）
      maanim.parts.forEach(animPart => {
        const partId = animPart.ints[0];
        if (partId >= 0 && partId < newParts.length) {
          updatePart(animPart, frame, newParts);
        }
      });
      
      return {
        ...prev,
        currentFrame: frame,
        parts: newParts
      };
    });
  }, [animationData, selectedForm, selectedAnimation]);

  // パーツ更新処理（Part.javaのupdateメソッドベース）
  const updatePart = (animPart: { ints: number[], n: number, moves: number[][] }, frame: number, parts: EPart[]) => {
    const partId = animPart.ints[0];
    const modifType = animPart.ints[1];
    
    if (animPart.n === 0) return;
    
    // キーフレーム間補間処理
    for (let i = 0; i < animPart.n; i++) {
      const currentMove = animPart.moves[i];
      const currentFrame = currentMove[0];
      const currentValue = currentMove[1];
      
      if (frame === currentFrame) {
        // 完全一致
        parts[partId].alter(modifType, currentValue);
        return;
      } else if (i < animPart.n - 1) {
        const nextMove = animPart.moves[i + 1];
        const nextFrame = nextMove[0];
        const nextValue = nextMove[1];
        
        if (frame > currentFrame && frame < nextFrame) {
          // 線形補間
          const progress = (frame - currentFrame) / (nextFrame - currentFrame);
          const interpolatedValue = Math.round(currentValue + (nextValue - currentValue) * progress);
          parts[partId].alter(modifType, interpolatedValue);
          return;
        }
      }
    }
    
    // 最後のフレームを超えた場合
    if (frame > animPart.moves[animPart.n - 1][0]) {
      const lastValue = animPart.moves[animPart.n - 1][1];
      parts[partId].alter(modifType, lastValue);
    }
  };

  // 描画順序を収集
  const collectDrawOrder = useCallback((partId: number, parts: EPart[], drawOrder: number[], visited: Set<number>) => {
    if (visited.has(partId)) return;
    visited.add(partId);
    
    drawOrder.push(partId);
    
    // 子パーツを追加
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].parentId === partId) {
        collectDrawOrder(i, parts, drawOrder, visited);
      }
    }
  }, []);

  // 親の変換を適用
  const applyParentTransforms = useCallback((partId: number, parts: EPart[], ctx: CanvasRenderingContext2D) => {
    const part = parts[partId];
    if (part.parentId === -1) return;
    
    // 再帰的に親の変換を適用
    applyParentTransforms(part.parentId, parts, ctx);
    
    const parent = parts[part.parentId];
    ctx.translate(parent.x, parent.y);
    if (parent.rotation !== 0) {
      ctx.rotate((parent.rotation * Math.PI) / 180);
    }
    ctx.scale(parent.scaleX, parent.scaleY);
  }, []);

  // パーツ描画処理（EPart階層を考慮）
  const renderParts = useCallback((ctx: CanvasRenderingContext2D, parts: EPart[], sprites: HTMLCanvasElement[]) => {
    // 描画順序: 親から子へ
    const drawOrder: number[] = [];
    const visited = new Set<number>();
    
    // ルートパーツから開始
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].parentId === -1) {
        collectDrawOrder(i, parts, drawOrder, visited);
      }
    }
    
    // 描画
    for (const partId of drawOrder) {
      const part = parts[partId];
      if (!part.visible || part.spriteId < 0 || part.spriteId >= sprites.length) continue;
      
      ctx.save();
      
      // 親の変換を適用
      applyParentTransforms(partId, parts, ctx);
      
      // 自身の変換を適用
      ctx.translate(part.x, part.y);
      if (part.rotation !== 0) {
        ctx.rotate((part.rotation * Math.PI) / 180);
      }
      ctx.scale(part.scaleX, part.scaleY);
      ctx.globalAlpha = Math.max(0, Math.min(1, part.opacity));
      
      // glowエフェクト処理
      if (part.glow) {
        ctx.globalCompositeOperation = 'screen';
      }
      
      // スプライトを描画
      const sprite = sprites[part.spriteId];
      if (sprite) {
        ctx.drawImage(sprite, -sprite.width / 2, -sprite.height / 2);
      }
      
      // glowエフェクトをリセット
      if (part.glow) {
        ctx.globalCompositeOperation = 'source-over';
      }
      
      ctx.restore();
    }
  }, [collectDrawOrder, applyParentTransforms]);

  // 描画処理
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || animationState.sprites.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // クリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 変換マトリックスを設定
    ctx.save();
    ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
    ctx.scale(zoom, zoom);
    
    // 参照線を描画
    if (showRefLines) {
      ctx.strokeStyle = '#FF0000';
      ctx.lineWidth = 1 / zoom;
      ctx.beginPath();
      ctx.moveTo(-1000, 0);
      ctx.lineTo(1000, 0);
      ctx.moveTo(0, -1000);
      ctx.lineTo(0, 1000);
      ctx.stroke();
    }
    
    // パーツを描画（common/util/animベース）
    renderParts(ctx, animationState.parts, animationState.sprites);
    
    ctx.restore();
  }, [animationState, zoom, offsetX, offsetY, showRefLines, renderParts]);

  // アニメーションループ
  const animate = useCallback(() => {
    if (!animationState.isPlaying) return;
    
    const now = performance.now();
    if (now - lastFrameTimeRef.current >= 1000 / 30) { // 30 FPS
      const formData = animationData[selectedForm];
      if (formData && formData.maanim[selectedAnimation]) {
        const maanim = formData.maanim[selectedAnimation];
        const nextFrame = (animationState.currentFrame + 1) % (maanim.max || 1);
        updateAnimation(nextFrame);
      }
      lastFrameTimeRef.current = now;
    }
    
    animationIdRef.current = requestAnimationFrame(animate);
  }, [animationState.isPlaying, animationState.currentFrame, animationData, selectedForm, selectedAnimation, updateAnimation]);

  // 初期化とクリーンアップ
  useEffect(() => {
    loadSprites();
  }, [loadSprites]);

  useEffect(() => {
    initializeAnimation();
  }, [initializeAnimation]);

  useEffect(() => {
    setAnimationState(prev => ({ ...prev, isPlaying }));
  }, [isPlaying]);

  useEffect(() => {
    render();
  }, [render]);

  useEffect(() => {
    if (isPlaying) {
      animationIdRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationIdRef.current);
    }
    
    return () => {
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [isPlaying, animate]);

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* コントロール */}
      <div className="flex items-center space-x-2 text-sm">
        <button
          onClick={() => setZoom(zoom * 1.2)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          拡大
        </button>
        <button
          onClick={() => setZoom(zoom / 1.2)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          縮小
        </button>
        <button
          onClick={() => setShowRefLines(!showRefLines)}
          className={`px-2 py-1 rounded ${showRefLines ? 'bg-red-500' : 'bg-gray-500'} text-white`}
        >
          参照線
        </button>
        <span className="text-gray-600">
          Frame: {animationState.currentFrame}
        </span>
      </div>
      
      {/* キャンバス */}
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="border border-gray-300 bg-white"
        onMouseDown={(e) => {
          const startX = e.clientX - offsetX;
          const startY = e.clientY - offsetY;
          
          const handleMouseMove = (moveE: MouseEvent) => {
            setOffsetX(moveE.clientX - startX);
            setOffsetY(moveE.clientY - startY);
          };
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      />
    </div>
  );
}