// common/util/animベースのアニメーションビューアー

'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { AnimationData, AnimationState, EPart } from './types';

interface AnimationViewerProps {
  animationData: { [form: string]: AnimationData };
  selectedForm: string;
  selectedAnimation: string;
  isPlaying: boolean;
  unitId: string;
}

// Sprite Preview Canvas コンポーネント
interface SpritePreviewCanvasProps {
  spriteImage: HTMLImageElement | null;
  selectedSpriteId: number;
  selectedForm: string;
  animationData: { [form: string]: AnimationData };
}

function SpritePreviewCanvas({ spriteImage, selectedSpriteId, selectedForm, animationData }: SpritePreviewCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !spriteImage || !animationData[selectedForm]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set canvas size to match sprite image
    canvas.width = spriteImage.width;
    canvas.height = spriteImage.height;
    
    // Draw full sprite image
    ctx.drawImage(spriteImage, 0, 0);
    
    // Draw red border around selected sprite
    const formData = animationData[selectedForm];
    const imgcut = formData.imgcut;
    if (selectedSpriteId < imgcut.n && imgcut.cuts[selectedSpriteId]) {
      const [x, y, w, h] = imgcut.cuts[selectedSpriteId];
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, h);
    }
  }, [spriteImage, selectedSpriteId, selectedForm, animationData]);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full max-h-64 object-contain"
      style={{ 
        width: spriteImage ? Math.min(spriteImage.width, 600) : 'auto',
        height: spriteImage ? Math.min(spriteImage.height, 256) : 'auto'
      }}
    />
  );
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
  
  // Sprite Preview用の状態変数
  const [selectedSpriteId, setSelectedSpriteId] = useState<number>(0);
  const [spriteImage, setSpriteImage] = useState<HTMLImageElement | null>(null);
  
  // Data折りたたみ用の状態変数
  const [dataExpanded, setDataExpanded] = useState({
    imgcut: false,
    mamodel: false,
    maanim: false
  });
  
  // 元のJSONデータを保存する状態
  const [rawJsonData, setRawJsonData] = useState<Record<string, unknown> | null>(null);

  // パーツリスト表示用の状態変数
  const [expandedParts, setExpandedParts] = useState<Set<number>>(new Set([0])); // Part#000は初期展開
  const [hiddenParts, setHiddenParts] = useState<Set<number>>(new Set());
  const [showInactiveParts, setShowInactiveParts] = useState<boolean>(true);
  const [showPartPoints, setShowPartPoints] = useState<Set<number>>(new Set());
  const [hiddenSprites, setHiddenSprites] = useState<Set<string>>(new Set());
  const [showSpritePoints, setShowSpritePoints] = useState<Set<number>>(new Set());

  // パーツリスト用のヘルパー関数
  const togglePartExpansion = (partId: number) => {
    setExpandedParts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(partId)) {
        newSet.delete(partId);
      } else {
        newSet.add(partId);
      }
      return newSet;
    });
  };

  // パーツごとのスプライトIDを取得する関数（maanimベース）
  const getPartSprites = useCallback((partId: number): number[] => {
    // Part#0には絶対にスプライトをぶら下げない
    if (partId === 0) {
      return [];
    }
    
    const sprites = new Set<number>();
    let hasAnimationSprites = false;
    
    // 1. アニメーションデータから使用されるスプライトを収集
    const maanim = animationData[selectedForm]?.maanim?.[selectedAnimation];
    if (maanim) {
      maanim.parts.forEach(animPart => {
        const animPartId = animPart.ints[0];
        const modifType = animPart.ints[1];
        
        // SPRITE modification (type 2) をチェック
        if (animPartId === partId && modifType === 2) {
          hasAnimationSprites = true;
          animPart.moves.forEach(move => {
            const spriteId = move[1];
            if (spriteId >= 0) {
              sprites.add(spriteId);
            }
          });
        }
      });
    }
    
    // 2. 現在表示中のスプライト
    const currentPart = animationState.parts[partId];
    if (currentPart && currentPart.spriteId >= 0) {
      sprites.add(currentPart.spriteId);
    }
    
    // 3. mamodelのベーススプライトID（アニメーションスプライトがない場合のみ）
    if (!hasAnimationSprites) {
      const mamodel = animationData[selectedForm]?.mamodel;
      if (partId > 0 && mamodel?.parts[partId]) {
        const baseCutId = mamodel.parts[partId][2];
        if (baseCutId >= 0) {
          sprites.add(baseCutId);
        }
      }
    }
    
    return Array.from(sprites).sort((a, b) => a - b);
  }, [animationData, selectedForm, selectedAnimation, animationState.parts]);

  const handlePartToggle = useCallback((partId: number, checked: boolean) => {
    // Part#000は常に表示されるため、操作を無視
    if (partId === 0) {
      return;
    }
    
    const newHiddenParts = new Set(hiddenParts);
    const newHiddenSprites = new Set(hiddenSprites);
    
    if (checked) {
      // チェックされた場合、非表示リストから削除（表示する）
      newHiddenParts.delete(partId);
      
      // 子Spriteが一つだけの場合、自動でチェックを入れる
      const partSpriteIds = getPartSprites(partId);
      if (partSpriteIds.length === 1) {
        const singleSpriteId = partSpriteIds[0];
        const partSpriteKey = `${partId}-${singleSpriteId}`;
        newHiddenSprites.delete(partSpriteKey);
        setHiddenSprites(newHiddenSprites);
      }
    } else {
      // チェックが外された場合、非表示リストに追加（隠す）
      newHiddenParts.add(partId);
      
      // 子Spriteが一つだけの場合、自動でチェックを外す
      const partSpriteIds = getPartSprites(partId);
      if (partSpriteIds.length === 1) {
        const singleSpriteId = partSpriteIds[0];
        const partSpriteKey = `${partId}-${singleSpriteId}`;
        newHiddenSprites.add(partSpriteKey);
        setHiddenSprites(newHiddenSprites);
      }
    }
    setHiddenParts(newHiddenParts);
  }, [hiddenParts, hiddenSprites, getPartSprites]);

  const handleSpriteToggle = useCallback((spriteId: number, checked: boolean, partId: number) => {
    // Part-Sprite pair key for individual control
    const partSpriteKey = `${partId}-${spriteId}`;
    const newHiddenSprites = new Set(hiddenSprites);
    const newHiddenParts = new Set(hiddenParts);
    
    if (checked) {
      // チェックされた場合、非表示リストから削除（表示する）
      newHiddenSprites.delete(partSpriteKey);
      
      // 親Partが非表示の場合、自動的に表示する
      if (hiddenParts.has(partId)) {
        newHiddenParts.delete(partId);
      }
      
      setHiddenParts(newHiddenParts);
    } else {
      // チェックが外された場合、非表示リストに追加（隠す）
      newHiddenSprites.add(partSpriteKey);
      
      // 親Partの子Spriteがすべて非表示になったかチェック
      const partSpriteIds = getPartSprites(partId);
      const allSpritesHidden = partSpriteIds.every(id => {
        const key = `${partId}-${id}`;
        return newHiddenSprites.has(key);
      });
      
      // すべての子Spriteが非表示になった場合、親Partも非表示にする
      if (allSpritesHidden && partSpriteIds.length > 0) {
        newHiddenParts.add(partId);
      }
      
      setHiddenParts(newHiddenParts);
    }
    setHiddenSprites(newHiddenSprites);
  }, [hiddenSprites, hiddenParts, getPartSprites]);

  const handlePointToggle = (partId: number, checked: boolean) => {
    setShowPartPoints(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(partId);
      } else {
        newSet.delete(partId);
      }
      return newSet;
    });
  };

  const handleSpritePointToggle = (partId: number, checked: boolean) => {
    setShowSpritePoints(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(partId);
      } else {
        newSet.delete(partId);
      }
      return newSet;
    });
  };

  // 座標フォーマット関数
  const formatCoordinate = (coord: number | undefined): string => {
    if (coord === undefined || coord === null) return '    ?';
    return coord.toString().padStart(5, ' ');
  };

  // 全展開/全折り畳み制御
  const expandAllParts = useCallback(() => {
    if (!animationData[selectedForm] || !animationData[selectedForm].mamodel) return;
    const mamodel = animationData[selectedForm].mamodel;
    const allPartIds = Array.from({length: mamodel.n}, (_, i) => i);
    setExpandedParts(new Set(allPartIds));
  }, [animationData, selectedForm]);
  
  const collapseAllParts = useCallback(() => {
    setExpandedParts(new Set([0])); // Part#000のみ展開状態で維持
  }, []);

  // 元のJSONデータを読み込む関数
  const loadRawJsonData = useCallback(async () => {
    if (!unitId) return;
    
    try {
      const response = await fetch(`/data/anim/${unitId}.json`);
      if (!response.ok) {
        console.warn(`JSONデータが見つかりません: ${unitId}.json`);
        setRawJsonData(null);
        return;
      }
      
      const jsonData = await response.json();
      setRawJsonData(jsonData);
    } catch (error) {
      console.error(`JSONデータの読み込みに失敗しました: ${unitId}.json`, error);
      setRawJsonData(null);
    }
  }, [unitId]);

  // スプライト画像をロード（フォーム別対応）
  const loadSprites = useCallback(async () => {
    console.log(`loadSprites開始: unitId=${unitId}, selectedForm=${selectedForm}`);
    
    if (!animationData[selectedForm]) {
      console.log(`loadSprites終了: formData=${!!animationData[selectedForm]}`);
      return;
    }
    
    try {
      // フォーム別画像データを取得（anim0方式）
      const response = await fetch(`/data/anim/${unitId}`);
      if (!response.ok) {
        console.warn(`画像データが見つかりません: ${unitId}`);
        return;
      }
      
      const text = await response.text();
      const images = text.trim().split('\n').filter(line => {
        return line.length > 0 && (line.startsWith('data:image/') || line.length > 100);
      });
      
      // フォームインデックスに対応する画像を取得
      const formIndex = ['f', 'c', 's', 'u'].indexOf(selectedForm);
      if (formIndex < 0 || formIndex >= images.length) {
        console.warn(`フォーム ${selectedForm} の画像が見つかりません`);
        return;
      }
      
      let imageSrc = images[formIndex];
      if (!imageSrc.startsWith('data:image/')) {
        imageSrc = `data:image/png;base64,${imageSrc}`;
      }
      
      // フォーム別の画像からCanvasを作成
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Image load failed'));
        img.src = imageSrc;
      });
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
      }
      
      // スプライトを切り出し
      const formData = animationData[selectedForm];
      const sprites = formData.imgcut.cut(canvas);
      
      // Sprite Preview用のHTMLImageElementを設定
      console.log(`スプライト画像設定完了: ${selectedForm}`);
      setSpriteImage(img);
      
      setAnimationState(prev => ({
        ...prev,
        sprites
      }));
      
      console.log(`スプライト読み込み完了: ${sprites.length}個, form=${selectedForm}`);
      
    } catch (error) {
      console.error(`スプライト読み込みエラー (${unitId}, ${selectedForm}):`, error);
    }
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
    loadRawJsonData();
  }, [loadSprites, loadRawJsonData]);

  useEffect(() => {
    initializeAnimation();
  }, [initializeAnimation]);

  // フォーム変更時にスプライト画像をリセット・再読み込み
  useEffect(() => {
    console.log(`フォーム変更検出: ${selectedForm}`);
    setSpriteImage(null);
    setSelectedSpriteId(0);
    loadSprites();
  }, [selectedForm, loadSprites]);

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
    <div className="space-y-4">
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

      {/* メインアニメーション表示 */}
      <div className="flex flex-col items-center">
      
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

      {/* Parts List Section */}
      <div className="bg-gray-50 p-1 rounded mb-2">
        <div className="mt-2">
          {/* Parts/Sprites カウントラベル */}
          <div className="mb-2">
            <label className="text-sm font-medium text-gray-600 font-mono">
              Parts({animationData[selectedForm] && animationData[selectedForm].mamodel ? animationData[selectedForm].mamodel.n : 0})|Sprites({animationData[selectedForm] && animationData[selectedForm].imgcut ? animationData[selectedForm].imgcut.n : 0})
            </label>
          </div>
          
          {/* 制御ボタン群 */}
          <div className="flex flex-wrap items-center gap-1 mb-2">
            <button
              onClick={() => {
                setHiddenParts(new Set());
                setHiddenSprites(new Set());
              }}
              className="px-2 py-0 bg-gray-200 text-gray-700 rounded text-xxs hover:bg-gray-300 font-mono"
            >
              全選択
            </button>
            <button
              onClick={() => {
                const mamodel = animationData[selectedForm]?.mamodel;
                if (!mamodel) return;
                
                // Part#000を除外してallPartIdsを作成
                const allPartIds = Array.from({length: mamodel.n}, (_, i) => i).filter(id => id !== 0);
                const allPartSpriteKeys = new Set<string>();
                
                // 全Part-Spriteペアを収集
                const imgcut = animationData[selectedForm]?.imgcut;
                if (imgcut) {
                  for (let partId = 1; partId < mamodel.n; partId++) { // Part#000は除外
                    for (let spriteId = 0; spriteId < imgcut.n; spriteId++) {
                      allPartSpriteKeys.add(`${partId}-${spriteId}`);
                    }
                  }
                }
                
                setHiddenParts(new Set(allPartIds));
                setHiddenSprites(allPartSpriteKeys);
              }}
              className="px-2 py-0 bg-gray-200 text-gray-700 rounded text-xxs hover:bg-gray-300 font-mono"
            >
              全解除
            </button>
            <button
              onClick={expandAllParts}
              className="px-2 py-0 bg-blue-200 text-blue-700 rounded text-xxs hover:bg-blue-300 font-mono"
            >
              全展開
            </button>
            <button
              onClick={collapseAllParts}
              className="px-2 py-0 bg-green-200 text-green-700 rounded text-xxs hover:bg-green-300 font-mono"
            >
              全折畳
            </button>
            <label className="flex items-center gap-1 text-xs font-medium text-gray-600 font-mono">
              <input
                type="checkbox"
                checked={showInactiveParts}
                onChange={(e) => setShowInactiveParts(e.target.checked)}
                className="w-3 h-3"
              />
              非アクティブパーツ表示
            </label>
          </div>
          
          {/* パーツ階層表示 */}
          <div className="text-xxxs text-gray-600 font-mono">
            <div className="bg-white border rounded p-2 max-h-64 overflow-y-auto">
              {animationData[selectedForm] && animationData[selectedForm].mamodel && (() => {
                const mamodel = animationData[selectedForm].mamodel;
                

                // パーツの親子関係を構築
                const childrenMap: { [key: number]: number[] } = {};
                const rootParts: number[] = [];
                
                for (let i = 0; i < mamodel.n; i++) {
                  const modelPart = mamodel.parts[i];
                  const parentId = modelPart[0]; // parentIdは配列の最初の要素
                  
                  if (parentId === -1) {
                    rootParts.push(i);
                  } else {
                    if (!childrenMap[parentId]) {
                      childrenMap[parentId] = [];
                    }
                    childrenMap[parentId].push(i);
                  }
                }
                
                // 再帰的にパーツを描画
                const renderPartWithChildren = (partId: number, depth: number): React.ReactElement[] => {
                  const part = animationState.parts[partId];
                  if (!part) return [];
                  
                  const partSpriteIds = getPartSprites(partId);
                  
                  // パーツがアクティブかどうかを詳細判定
                  const isPartActive = (() => {
                    // Part#000 is always considered active (root part)
                    if (partId === 0) {
                      return true;
                    }
                    
                    // Check if part meets basic rendering requirements
                    if (!mamodel.parts[partId]) {
                      return false;
                    }
                    
                    const modelPart = mamodel.parts[partId];
                    const parentId = modelPart[0];
                    const unitId = modelPart[1];
                    const cutId = modelPart[2];
                    
                    // Skip if parent_id < 0 and unit_id < 0
                    if (parentId < 0 && unitId < 0) {
                      return false;
                    }
                    
                    // ENHANCED: Check if this part has any active child sprites
                    const hasActiveChildSprites = partSpriteIds.length > 0;
                    
                    // If this part has active child sprites, it should be considered active
                    if (hasActiveChildSprites) {
                      return true;
                    }
                    
                    // Traditional rendering logic for parts without active sprites
                    // Skip if no sprite to render (cutId < 0) - structural parts only
                    if (cutId < 0) {
                      return false;
                    }
                    
                    // Check if it has valid sprite and unit for rendering
                    if (cutId >= 0 && unitId >= 0) {
                      return true;
                    }
                    
                    return false;
                  })();
                  
                  // パーツ名を取得
                  const partName = mamodel.strs0[partId] || '';
                  
                  // パーツの座標情報を取得（mamodelで定義された座標）
                  const partCoordinates = (() => {
                    // 常にmamodelから基本座標を取得（X, Y, Z）
                    if (mamodel.parts[partId]) {
                      const modelPart = mamodel.parts[partId];
                      const baseX = formatCoordinate(modelPart[4]);
                      const baseY = formatCoordinate(modelPart[5]);
                      const baseZ = formatCoordinate(modelPart[3]); // zDepth
                      return `(${baseX}, ${baseY}, ${baseZ})`;
                    }
                    return '(   ?,    ?,    ?)';
                  })();
                  
                  // インデント計算
                  const indentLevel = depth * 16;
                  
                  const results: React.ReactElement[] = [];
                  
                  // 非アクティブパーツ表示設定が無効で、かつパーツが非アクティブの場合はスキップ
                  // ただし、Part#000は常に表示
                  if (!showInactiveParts && !isPartActive && partId !== 0) {
                    return results;
                  }
                  
                  // 子要素の存在確認
                  const hasChildren = (childrenMap[partId] || []).length > 0 || partSpriteIds.length > 0;
                  const isExpanded = expandedParts.has(partId);
                  
                  // 現在のパーツを描画
                  const currentPartElement = (
                    <div key={`part-${partId}`} className="py-0 my-0" style={{ paddingLeft: `${indentLevel}px` }}>
                      {/* パーツ（親） */}
                      <div className="py-0 my-0 flex items-center gap-1 font-mono text-xs">
                        {/* 折り畳みボタン */}
                        {hasChildren ? (
                          <button
                            onClick={() => togglePartExpansion(partId)}
                            className="w-3 h-3 flex items-center justify-center text-xs text-gray-600 hover:text-gray-800 cursor-pointer"
                          >
                            {isExpanded ? '▼' : '▶'}
                          </button>
                        ) : (
                          <span className="w-3 h-3"></span>
                        )}
                        <input
                          type="checkbox"
                          className="w-3 h-3"
                          checked={partId === 0 ? true : !hiddenParts.has(partId)}
                          onChange={(e) => handlePartToggle(partId, e.target.checked)}
                          disabled={partId === 0}
                        />
                        <span className="font-mono text-xs">
                          Part#{partId.toString().padStart(3, '0')} {partName && typeof partName === 'string' && !partName.startsWith('"') && partName}
                        </span>
                        <span className="font-mono text-[10px] text-red-500">{partCoordinates}</span>
                        <input
                          type="checkbox"
                          className="w-3 h-3 accent-red-500"
                          checked={showPartPoints.has(partId)}
                          onChange={(e) => handlePointToggle(partId, e.target.checked)}
                        />
                      </div>
                      
                      {/* このパーツに関連するすべてのスプライト */}
                      {isExpanded && partSpriteIds.length > 0 && partSpriteIds.map((spriteId, spriteIndex) => {
                        const partSpriteKey = `${partId}-${spriteId}`;
                        const isDisplayed = part.spriteId === spriteId && part.visible && !hiddenParts.has(partId) && !hiddenSprites.has(partSpriteKey);
                        
                        // Simplified sprite usage check - only currently displayed sprites are considered "used"
                        const isSpriteUsed = isPartActive && isDisplayed;
                        
                        return (
                          <div key={`sprite-${partId}-${spriteIndex}`} 
                               className={`py-0 my-0 flex items-center gap-1 font-mono text-xs ${isDisplayed ? 'text-green-500' : ''} ${!isSpriteUsed ? 'opacity-30' : ''}`}
                               style={{ paddingLeft: '28px' }}>
                            <input
                              type="checkbox"
                              className="w-3 h-3 accent-green-500"
                              checked={!hiddenSprites.has(partSpriteKey)}
                              onChange={(e) => handleSpriteToggle(spriteId, e.target.checked, partId)}
                            />
                            <span className="font-mono text-xs">Sprite#{spriteId.toString().padStart(3, '0')}{isDisplayed ? ' ●' : ' ○'}</span>
                            {isDisplayed && (
                              <span className="font-mono text-[10px] text-amber-500">
                                ({formatCoordinate(part.x)}, {formatCoordinate(part.y)}, {formatCoordinate(part.spriteId)})
                              </span>
                            )}
                            <input
                              type="checkbox"
                              className="w-3 h-3 accent-amber-500"
                              checked={showSpritePoints.has(partId)}
                              onChange={(e) => handleSpritePointToggle(partId, e.target.checked)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                  
                  results.push(currentPartElement);
                  
                  // 子要素を再帰的に描画（展開されている場合のみ）
                  if (isExpanded) {
                    const children = childrenMap[partId] || [];
                    children.forEach(childId => {
                      results.push(...renderPartWithChildren(childId, depth + 1));
                    });
                  }
                  
                  return results;
                };
                
                // 全てのルートパーツとその子要素を描画
                return rootParts.flatMap(rootPartId => renderPartWithChildren(rootPartId, 0));
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Sprite Preview Section */}
      <div className="bg-blue-50 p-2 rounded mb-2">
        <label className="block text-sm font-medium text-gray-600 mb-1 font-mono">
          Sprite Preview
        </label>
        <div className="space-y-2">
          {/* Sprite ID Selector */}
          <div className="flex items-center space-x-2">
            <select
              value={selectedSpriteId}
              onChange={(e) => setSelectedSpriteId(Number(e.target.value))}
              className="text-xs font-mono border rounded px-1 py-0.5 text-gray-500"
            >
              {animationData[selectedForm] && animationData[selectedForm].imgcut && (() => {
                const formData = animationData[selectedForm];
                const imgcut = formData.imgcut;
                const totalSprites = imgcut.n || 0;
                
                const options = [];
                for (let i = 0; i < totalSprites; i++) {
                  // anim0と同じ形式でスプライト名を取得
                  const spriteName = imgcut.strs && imgcut.strs[i] ? imgcut.strs[i] : '-';
                  options.push(
                    <option key={i} value={i}>
                      {i.toString().padStart(3, '0')}: {spriteName}
                    </option>
                  );
                }
                return options;
              })()}
            </select>
            
            {/* Selected Sprite Position and Size Display */}
            {animationData[selectedForm] && animationData[selectedForm].imgcut && (() => {
              const formData = animationData[selectedForm];
              const imgcut = formData.imgcut;
              if (selectedSpriteId < imgcut.n && imgcut.cuts[selectedSpriteId]) {
                const [x, y, w, h] = imgcut.cuts[selectedSpriteId];
                return (
                  <span className="text-xs font-mono text-gray-600">
                    ({x}, {y}) [{w} × {h}]
                  </span>
                );
              }
              return null;
            })()}
          </div>
          
          {/* Sprite Preview Canvas */}
          <div className="relative border border-gray-300 rounded overflow-hidden bg-gray-100">
            <SpritePreviewCanvas 
              spriteImage={spriteImage}
              selectedSpriteId={selectedSpriteId}
              selectedForm={selectedForm}
              animationData={animationData}
            />
          </div>
        </div>
      </div>

      {/* Data Section - anim0と同様の実装 */}
      <div className="bg-gray-50 p-2 rounded mt-4">
        <label className="block text-sm font-medium text-gray-600 mb-2 font-mono">
          Data
        </label>
        
        {/* imgcut データ */}
        <div className="bg-white p-2 rounded mb-2">
          <button
            onClick={() => setDataExpanded(prev => ({ ...prev, imgcut: !prev.imgcut }))}
            className="flex items-center justify-between w-full text-left text-xs font-medium text-gray-500 font-mono hover:text-gray-700"
          >
            imgcut
            <span className="text-gray-400">{dataExpanded.imgcut ? '▼' : '▶'}</span>
          </button>
          {dataExpanded.imgcut && (
            <div className="mt-2 space-y-2">
              {/* 元のJSONデータ */}
              <div className="bg-gray-50 p-2 rounded">
                <label className="block text-xxs font-medium text-gray-400 mb-1 font-mono">Original JSON</label>
                <pre className="whitespace-pre-wrap text-xxxs text-gray-500">{rawJsonData && (rawJsonData[selectedForm] as Record<string, unknown>)?.imgcut ? (() => {
                  const data = (rawJsonData[selectedForm] as Record<string, unknown>).imgcut;
                  // データをクリーンアップしてからJSON化
                  const cleanData = JSON.parse(JSON.stringify(data, (_, value) => {
                    if (typeof value === 'string') {
                      // BOM文字やその他の制御文字を除去
                      return value.replace(/[\uFEFF\u200B-\u200D\uFFFE\uFFFF]/g, '');
                    }
                    return value;
                  }));
                  
                  const jsonStr = JSON.stringify(cleanData, null, 2);
                  
                  // ネストした配列のみ1行にする
                  return jsonStr.replace(/(  )\[\s*\n([\s\S]*?)\n\s*\]/g, (match, indent, content) => {
                    // インデントが2スペース以上（ネストした配列）の場合のみ処理
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    
                    // 全ての行がプリミティブ値かチェック
                    const allPrimitive = lines.every((line: string) => {
                      const cleanLine = line.replace(/,$/, '');
                      return /^(-?\d+(\.\d+)?|".*"|true|false|null)$/.test(cleanLine);
                    });
                    
                    if (allPrimitive) {
                      const items = lines.map((line: string) => line.replace(/,$/, ''));
                      return `${indent}[${items.join(', ')}]`;
                    }
                    
                    return match;
                  });
                })() : 'No data'}</pre>
              </div>
              
              {/* 変換後のanimationData */}
              <div className="bg-blue-50 p-2 rounded">
                <label className="block text-xxs font-medium text-blue-600 mb-1 font-mono">Converted animationData</label>
                <pre className="whitespace-pre-wrap text-xxxs text-blue-600">{animationData[selectedForm]?.imgcut ? (() => {
                  const data = animationData[selectedForm].imgcut;
                  // データをクリーンアップしてからJSON化
                  const cleanData = JSON.parse(JSON.stringify(data, (_, value) => {
                    if (typeof value === 'string') {
                      // BOM文字やその他の制御文字を除去
                      return value.replace(/[\uFEFF\u200B-\u200D\uFFFE\uFFFF]/g, '');
                    }
                    return value;
                  }));
                  
                  const jsonStr = JSON.stringify(cleanData, null, 2);
                  
                  // ネストした配列のみ1行にする
                  return jsonStr.replace(/(  )\[\s*\n([\s\S]*?)\n\s*\]/g, (match, indent, content) => {
                    // インデントが2スペース以上（ネストした配列）の場合のみ処理
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    
                    // 全ての行がプリミティブ値かチェック
                    const allPrimitive = lines.every((line: string) => {
                      const cleanLine = line.replace(/,$/, '');
                      return /^(-?\d+(\.\d+)?|".*"|true|false|null)$/.test(cleanLine);
                    });
                    
                    if (allPrimitive) {
                      const items = lines.map((line: string) => line.replace(/,$/, ''));
                      return `${indent}[${items.join(', ')}]`;
                    }
                    
                    return match;
                  });
                })() : 'No data'}</pre>
              </div>
            </div>
          )}
        </div>

        {/* mamodel データ */}
        <div className="bg-white p-2 rounded mb-2">
          <button
            onClick={() => setDataExpanded(prev => ({ ...prev, mamodel: !prev.mamodel }))}
            className="flex items-center justify-between w-full text-left text-xs font-medium text-gray-500 font-mono hover:text-gray-700"
          >
            mamodel
            <span className="text-gray-400">{dataExpanded.mamodel ? '▼' : '▶'}</span>
          </button>
          {dataExpanded.mamodel && (
            <div className="mt-2 space-y-2">
              {/* 元のJSONデータ */}
              <div className="bg-gray-50 p-2 rounded">
                <label className="block text-xxs font-medium text-gray-400 mb-1 font-mono">Original JSON</label>
                <pre className="whitespace-pre-wrap text-xxxs text-gray-500">{rawJsonData && (rawJsonData[selectedForm] as Record<string, unknown>)?.mamodel ? (() => {
                  const data = (rawJsonData[selectedForm] as Record<string, unknown>).mamodel;
                  // データをクリーンアップしてからJSON化
                  const cleanData = JSON.parse(JSON.stringify(data, (_, value) => {
                    if (typeof value === 'string') {
                      // BOM文字やその他の制御文字を除去
                      return value.replace(/[\uFEFF\u200B-\u200D\uFFFE\uFFFF]/g, '');
                    }
                    return value;
                  }));
                  
                  const jsonStr = JSON.stringify(cleanData, null, 2);
                  
                  // ネストした配列のみ1行にする
                  return jsonStr.replace(/(  )\[\s*\n([\s\S]*?)\n\s*\]/g, (match, indent, content) => {
                    // インデントが2スペース以上（ネストした配列）の場合のみ処理
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    
                    // 全ての行がプリミティブ値かチェック
                    const allPrimitive = lines.every((line: string) => {
                      const cleanLine = line.replace(/,$/, '');
                      return /^(-?\d+(\.\d+)?|".*"|true|false|null)$/.test(cleanLine);
                    });
                    
                    if (allPrimitive) {
                      const items = lines.map((line: string) => line.replace(/,$/, ''));
                      return `${indent}[${items.join(', ')}]`;
                    }
                    
                    return match;
                  });
                })() : 'No data'}</pre>
              </div>
              
              {/* 変換後のanimationData */}
              <div className="bg-blue-50 p-2 rounded">
                <label className="block text-xxs font-medium text-blue-600 mb-1 font-mono">Converted animationData</label>
                <pre className="whitespace-pre-wrap text-xxxs text-blue-600">{animationData[selectedForm]?.mamodel ? (() => {
                  const data = animationData[selectedForm].mamodel;
                  // データをクリーンアップしてからJSON化
                  const cleanData = JSON.parse(JSON.stringify(data, (_, value) => {
                    if (typeof value === 'string') {
                      // BOM文字やその他の制御文字を除去
                      return value.replace(/[\uFEFF\u200B-\u200D\uFFFE\uFFFF]/g, '');
                    }
                    return value;
                  }));
                  
                  const jsonStr = JSON.stringify(cleanData, null, 2);
                  
                  // ネストした配列のみ1行にする
                  let result = jsonStr.replace(/(  )\[\s*\n([\s\S]*?)\n\s*\]/g, (match, indent, content) => {
                    // インデントが2スペース以上（ネストした配列）の場合のみ処理
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    
                    // 全ての行がプリミティブ値かチェック
                    const allPrimitive = lines.every((line: string) => {
                      const cleanLine = line.replace(/,$/, '');
                      return /^(-?\d+(\.\d+)?|".*"|true|false|null)$/.test(cleanLine);
                    });
                    
                    if (allPrimitive) {
                      const items = lines.map((line: string) => line.replace(/,$/, ''));
                      return `${indent}[${items.join(', ')}]`;
                    }
                    
                    return match;
                  });
                  
                  // ints配列を特別に1行にする
                  result = result.replace(/("ints":\s*)\[\s*\n([\s\S]*?)\n\s*\]/g, (match, intsLabel, content) => {
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    const items = lines.map((line: string) => line.replace(/,$/, ''));
                    return `${intsLabel}[${items.join(', ')}]`;
                  });
                  
                  return result;
                })() : 'No data'}</pre>
              </div>
            </div>
          )}
        </div>

        {/* maanim データ */}
        <div className="bg-white p-2 rounded mb-2">
          <button
            onClick={() => setDataExpanded(prev => ({ ...prev, maanim: !prev.maanim }))}
            className="flex items-center justify-between w-full text-left text-xs font-medium text-gray-500 font-mono hover:text-gray-700"
          >
            {selectedAnimation}
            <span className="text-gray-400">{dataExpanded.maanim ? '▼' : '▶'}</span>
          </button>
          {dataExpanded.maanim && (
            <div className="mt-2 space-y-2">
              {/* 元のJSONデータ */}
              <div className="bg-gray-50 p-2 rounded">
                <label className="block text-xxs font-medium text-gray-400 mb-1 font-mono">Original JSON</label>
                <pre className="whitespace-pre-wrap text-xxxs text-gray-500">{rawJsonData && (rawJsonData[selectedForm] as Record<string, unknown>)?.[selectedAnimation] ? (() => {
                  const data = (rawJsonData[selectedForm] as Record<string, unknown>)[selectedAnimation];
                  // データをクリーンアップしてからJSON化
                  const cleanData = JSON.parse(JSON.stringify(data, (_, value) => {
                    if (typeof value === 'string') {
                      // BOM文字やその他の制御文字を除去
                      return value.replace(/[\uFEFF\u200B-\u200D\uFFFE\uFFFF]/g, '');
                    }
                    return value;
                  }));
                  
                  const jsonStr = JSON.stringify(cleanData, null, 2);
                  
                  // ネストした配列のみ1行にする
                  return jsonStr.replace(/(  )\[\s*\n([\s\S]*?)\n\s*\]/g, (match, indent, content) => {
                    // インデントが2スペース以上（ネストした配列）の場合のみ処理
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    
                    // 全ての行がプリミティブ値かチェック
                    const allPrimitive = lines.every((line: string) => {
                      const cleanLine = line.replace(/,$/, '');
                      return /^(-?\d+(\.\d+)?|".*"|true|false|null)$/.test(cleanLine);
                    });
                    
                    if (allPrimitive) {
                      const items = lines.map((line: string) => line.replace(/,$/, ''));
                      return `${indent}[${items.join(', ')}]`;
                    }
                    
                    return match;
                  });
                })() : 'No data'}</pre>
              </div>
              
              {/* 変換後のanimationData */}
              <div className="bg-blue-50 p-2 rounded">
                <label className="block text-xxs font-medium text-blue-600 mb-1 font-mono">Converted animationData</label>
                <pre className="whitespace-pre-wrap text-xxxs text-blue-600">{animationData[selectedForm]?.maanim?.[selectedAnimation] ? (() => {
                  const data = animationData[selectedForm].maanim[selectedAnimation];
                  // データをクリーンアップしてからJSON化
                  const cleanData = JSON.parse(JSON.stringify(data, (_, value) => {
                    if (typeof value === 'string') {
                      // BOM文字やその他の制御文字を除去
                      return value.replace(/[\uFEFF\u200B-\u200D\uFFFE\uFFFF]/g, '');
                    }
                    return value;
                  }));
                  
                  const jsonStr = JSON.stringify(cleanData, null, 2);
                  
                  // ネストした配列のみ1行にする
                  let result = jsonStr.replace(/(  )\[\s*\n([\s\S]*?)\n\s*\]/g, (match, indent, content) => {
                    // インデントが2スペース以上（ネストした配列）の場合のみ処理
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    
                    // 全ての行がプリミティブ値かチェック
                    const allPrimitive = lines.every((line: string) => {
                      const cleanLine = line.replace(/,$/, '');
                      return /^(-?\d+(\.\d+)?|".*"|true|false|null)$/.test(cleanLine);
                    });
                    
                    if (allPrimitive) {
                      const items = lines.map((line: string) => line.replace(/,$/, ''));
                      return `${indent}[${items.join(', ')}]`;
                    }
                    
                    return match;
                  });
                  
                  // ints配列を特別に1行にする
                  result = result.replace(/("ints":\s*)\[\s*\n([\s\S]*?)\n\s*\]/g, (match, intsLabel, content) => {
                    const lines = content.split('\n').map((line: string) => line.trim()).filter((line: string) => line);
                    const items = lines.map((line: string) => line.replace(/,$/, ''));
                    return `${intsLabel}[${items.join(', ')}]`;
                  });
                  
                  return result;
                })() : 'No data'}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}