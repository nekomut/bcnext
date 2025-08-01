// common/util/animベースのアニメーションビューアー
// Phase 3: 新システム統合対応

'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { AnimationData } from './types';
import { AnimationPerformanceMonitor } from './FeatureFlags';
import { EAnimD, P } from './EAnimD';
import { MaModel } from './MaModel';
import { MaAnim } from './MaAnim';
import { Part } from './Part';
import type { AnimI } from './EAnimI';

interface AnimationViewerProps {
  animationData: { [form: string]: AnimationData };
  selectedForm: string;
  selectedAnimation: string;
  isPlaying: boolean;
  unitId: string;
  currentFrame?: number;
  onFrameChange?: (frame: number) => void;
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
      className="w-full object-contain"
    />
  );
}

export default function AnimationViewer({
  animationData,
  selectedForm,
  selectedAnimation,
  isPlaying,
  unitId,
  currentFrame: externalCurrentFrame,
  onFrameChange
}: AnimationViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const isInternalUpdateRef = useRef<boolean>(false); // 内部フレーム更新フラグ
  
  const [currentFrame, setCurrentFrame] = useState<number>(externalCurrentFrame || 0);
  const [zoom, setZoom] = useState<number>(1);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [showRefLines, setShowRefLines] = useState<boolean>(true);
  
  // Sprite Preview用の状態変数
  const [selectedSpriteId, setSelectedSpriteId] = useState<number>(0);
  const [spriteImage, setSpriteImage] = useState<HTMLImageElement | null>(null);
  
  // アニメーションシステム
  const [eAnimD, setEAnimD] = useState<EAnimD | null>(null);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  
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

  // パーツごとのスプライトIDを取得する関数
  const getPartSprites = useCallback((partId: number): number[] => {
    
    const sprites = new Set<number>();
    let isUsedInAnimation = false;
    
    // 1. アニメーションデータから使用されるスプライトを収集
    const maanim = animationData[selectedForm]?.maanim?.[selectedAnimation];
    if (maanim) {
      maanim.parts.forEach(animPart => {
        const animPartId = animPart.ints[0];
        const modifType = animPart.ints[1];
        
        if (animPartId === partId) {
          isUsedInAnimation = true;
          
          // SPRITE modification (type 2) をチェック
          if (modifType === 2) {
            animPart.moves.forEach(move => {
              const spriteId = move[1];
              if (spriteId >= 0) {
                sprites.add(spriteId);
              }
            });
          }
        }
      });
    }
    
    // 2. EAnimDから現在のパーツ状態を取得
    if (eAnimD && eAnimD.ent && eAnimD.ent[partId]) {
      const currentPart = eAnimD.ent[partId];
      if (currentPart && currentPart.img >= 0) {
        sprites.add(currentPart.img);
      }
    }
    
    // 3. すべてのパーツでベーススプライトをチェック（汎用化）
    if (sprites.size === 0) {
      const mamodel = animationData[selectedForm]?.mamodel;
      if (mamodel?.parts[partId]) {
        const baseCutId = mamodel.parts[partId][2];
        if (baseCutId >= 0) {
          sprites.add(baseCutId);
        }
      }
    }
    
    // 4. ベーススプライトも存在せず、アニメーションでも使用されない場合は非表示
    if (sprites.size === 0 && !isUsedInAnimation) {
      return [];
    }
    
    return Array.from(sprites).sort((a, b) => a - b);
  }, [animationData, selectedForm, selectedAnimation, eAnimD]);

  // パーツがopacity=0かどうかを判定する関数
  const isPartOpacityZero = useCallback((partId: number): boolean => {
    const maanim = animationData[selectedForm]?.maanim?.[selectedAnimation];
    if (!maanim) return false;
    
    let hasOpacityZero = false;
    maanim.parts.forEach(animPart => {
      const animPartId = animPart.ints[0];
      const modifType = animPart.ints[1];
      
      if (animPartId === partId && modifType === 12) {
        // OPACITY modification (type 12) をチェック
        animPart.moves.forEach(move => {
          if (move[1] === 0) {
            hasOpacityZero = true;
          }
        });
      }
    });
    
    return hasOpacityZero;
  }, [animationData, selectedForm, selectedAnimation]);

  // パーツにぶら下がっているスプライトがすべて非アクティブかどうかを判定する関数
  const areAllPartSpritesInactive = useCallback((partId: number): boolean => {
    const partSpriteIds = getPartSprites(partId);
    
    // スプライトが存在しない場合は非アクティブとみなす
    if (partSpriteIds.length === 0) {
      return true;
    }
    
    // 現在のフレームで表示されているかチェック
    if (eAnimD && eAnimD.ent) {
      const part = eAnimD.ent[partId];
      if (!part || !part.visible || part.img < 0) {
        return true; // パーツが非表示またはスプライトが無効
      }
      
      // opacity=0のパーツかチェック
      if (isPartOpacityZero(partId)) {
        return true; // opacity=0なら非アクティブ
      }
      
      // パーツが非表示設定されているかチェック
      if (hiddenParts.has(partId)) {
        return true;
      }
      
      // 関連スプライトがすべて非表示設定されているかチェック
      const allSpritesHidden = partSpriteIds.every(spriteId => 
        hiddenSprites.has(`${partId}-${spriteId}`)
      );
      
      return allSpritesHidden;
    }
    
    return true; // eAnimDが存在しない場合は非アクティブ
  }, [getPartSprites, eAnimD, isPartOpacityZero, hiddenParts, hiddenSprites]);

  const handlePartToggle = useCallback((partId: number, checked: boolean) => {
    // Part 0の操作を無視
    if (partId === 0) {
      return;
    }
    
    setHiddenParts(prevHiddenParts => {
      const newHiddenParts = new Set(prevHiddenParts);
      
      if (checked) {
        // チェックされた場合、非表示リストから削除（表示する）
        newHiddenParts.delete(partId);
      } else {
        // チェックが外された場合、非表示リストに追加（隠す）
        newHiddenParts.add(partId);
      }
      
      return newHiddenParts;
    });

    // 子Spriteの状態も同期
    setHiddenSprites(prevHiddenSprites => {
      const newHiddenSprites = new Set(prevHiddenSprites);
      const partSpriteIds = getPartSprites(partId);
      
      if (partSpriteIds.length === 1) {
        const singleSpriteId = partSpriteIds[0];
        const partSpriteKey = `${partId}-${singleSpriteId}`;
        
        if (checked) {
          newHiddenSprites.delete(partSpriteKey);
        } else {
          newHiddenSprites.add(partSpriteKey);
        }
      }
      
      return newHiddenSprites;
    });
  }, [getPartSprites]);

  const handleSpriteToggle = useCallback((spriteId: number, checked: boolean, partId: number) => {
    // Part 0のスプライト操作を無視
    if (partId === 0) {
      return;
    }
    
    // Part-Sprite pair key for individual control
    const partSpriteKey = `${partId}-${spriteId}`;
    
    setHiddenSprites(prevHiddenSprites => {
      const newHiddenSprites = new Set(prevHiddenSprites);
      
      if (checked) {
        // チェックされた場合、非表示リストから削除（表示する）
        newHiddenSprites.delete(partSpriteKey);
      } else {
        // チェックが外された場合、非表示リストに追加（隠す）
        newHiddenSprites.add(partSpriteKey);
      }
      
      return newHiddenSprites;
    });

    setHiddenParts(prevHiddenParts => {
      const newHiddenParts = new Set(prevHiddenParts);
      
      if (checked) {
        // 親Partが非表示の場合、自動的に表示する
        if (prevHiddenParts.has(partId)) {
          newHiddenParts.delete(partId);
        }
      } else {
        // 親Partの子Spriteがすべて非表示になったかチェック
        const partSpriteIds = getPartSprites(partId);
        const allSpritesHidden = partSpriteIds.every(id => {
          const key = `${partId}-${id}`;
          // 現在変更中のスプライトは新しい状態を使用
          if (key === partSpriteKey) {
            return true; // 現在非表示にしようとしている
          }
          // 他のスプライトの既存の隠れ状態をチェック
          return hiddenSprites.has(key);
        });
        
        // すべての子Spriteが非表示になった場合、親Partも非表示にする
        if (allSpritesHidden && partSpriteIds.length > 0) {
          newHiddenParts.add(partId);
        }
      }
      
      return newHiddenParts;
    });
  }, [getPartSprites, hiddenSprites]);

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
    if (!animationData[selectedForm]) {
      return;
    }
    
    try {
      // Next.jsのbasePathを考慮したパスを生成（anim0と同じ方式）
      const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'nekomut.github.io';
      const basePath = isGitHubPages ? '/bcnext' : '';
      
      // 画像データ読み込み（複数URLフォールバック）
      const urlsToTry = [
        `${basePath}/data/anim/${unitId}`,
        `./data/anim/${unitId}`,
        `${typeof window !== 'undefined' && window.location.origin || ''}${basePath}/data/anim/${unitId}`
      ].filter(Boolean);
      
      let response: Response | null = null;
      let lastError: Error | null = null;
      
      for (const tryUrl of urlsToTry) {
        try {
          response = await fetch(tryUrl);
          if (response.ok) {
            break;
          } else {
            lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
        } catch (error) {
          lastError = error as Error;
          continue;
        }
      }
      
      if (!response || !response.ok) {
        console.warn(`All URLs failed to load sprite image for unit ${unitId}. Last error: ${lastError?.message || 'unknown'}`);
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _sprites = formData.imgcut.cut(canvas);
      
      // Sprite Preview用のHTMLImageElementを設定
      setSpriteImage(img);
      
    } catch (error) {
      console.error(`スプライト読み込みエラー (${unitId}, ${selectedForm}):`, error);
    }
  }, [unitId, selectedForm, animationData]);


  // アニメーションシステム初期化処理
  const initializeAnimation = useCallback(() => {
    if (!animationData[selectedForm] || !animationData[selectedForm].maanim[selectedAnimation]) {
      return;
    }

    const formData = animationData[selectedForm];
    
    try {
      // MaModel・MaAnimインスタンス作成
      
      // AnimationLoader側で既に正しく変換されているため、そのまま使用
      
      const maModel = new MaModel({
        n: formData.mamodel.n,
        m: formData.mamodel.m || 1,
        ints: formData.mamodel.ints || [1000, 3600, 1000],
        parts: formData.mamodel.parts,
        confs: formData.mamodel.confs || [[0, 0, 0, 0, 0, 0]],
        strs0: formData.mamodel.strs0 || [],
        strs1: formData.mamodel.strs1 || ['default']
      });

      // MaAnim初期化時にPartオブジェクト配列を作成
      const rawAnimData = formData.maanim[selectedAnimation];
      const parts = rawAnimData.parts ? rawAnimData.parts.map((partData: unknown) => {
        return new Part(partData as { ints: number[], n: number, moves: number[][], max: number, off: number, fir: number });
      }) : [];
      
      const maAnim = new MaAnim({
        n: rawAnimData.n || parts.length,
        parts: parts,
        max: rawAnimData.max || 1,
        len: rawAnimData.len || 1
      });
      
      // フレーム数の再計算を実行
      maAnim.validate();

      // AnimI実装
      const animInterface: AnimI = {
        name: selectedAnimation,
        id: parseInt(unitId) || 0
      };

      // EAnimD作成
      const newEAnimD = new EAnimD(animInterface, maModel, maAnim);
      
      // スプライト画像設定
      if (spriteImage) {
        newEAnimD.setSpriteImage(spriteImage);
        newEAnimD.setImgCut(formData.imgcut);
      }

      // 初期フレームを0に設定して初期状態を表示
      newEAnimD.setTime(0);
      newEAnimD.update(false);
      isInternalUpdateRef.current = true;
      setCurrentFrame(0);

      setEAnimD(newEAnimD);
      
      // 初期描画を実行
      setTimeout(() => {
        if (newEAnimD) {
          const canvas = canvasRef.current;
          if (canvas && canvas.getContext('2d')) {
            newEAnimD.draw(canvas.getContext('2d')!, P.newP(0, 0, 0), 1);
          }
        }
      }, 0);
    } catch (error) {
      console.error('アニメーション初期化エラー:', error);
      setEAnimD(null);
    }
  }, [animationData, selectedForm, selectedAnimation, unitId, spriteImage]);

  // アニメーション初期化の実行
  useEffect(() => {
    if (spriteImage) {
      initializeAnimation();
    }
  }, [initializeAnimation, spriteImage]);

  // アニメーション描画処理
  const renderAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !eAnimD) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    return AnimationPerformanceMonitor.measure('animation_render', () => {
      // クリア
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 変換マトリックス設定
      ctx.save();
      ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
      ctx.scale(zoom, zoom);
      
      // 参照線描画
      if (showRefLines) {
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.moveTo(-1000, 0);
        ctx.lineTo(1000, 0);
        ctx.moveTo(0, -1000);
        ctx.lineTo(0, 1000);
        ctx.stroke();
      }
      
      // hidden状態をEAnimDに反映
      if (eAnimD.ent && eAnimD.ent.length > 0) {
        for (let partId = 0; partId < eAnimD.ent.length; partId++) {
          const part = eAnimD.ent[partId];
          if (part) {
            // パーツレベルでの表示制御
            const partShouldBeVisible = !hiddenParts.has(partId);
            
            // スプライトレベルでの表示制御
            let spriteShouldBeVisible = true;
            if (partShouldBeVisible && part.img !== undefined && part.img >= 0) {
              const partSpriteKey = `${partId}-${part.img}`;
              spriteShouldBeVisible = !hiddenSprites.has(partSpriteKey);
            }
            
            // opacity=0のパーツは表示しない（../common/util/anim と同じ動作）
            const isOpacityZero = isPartOpacityZero(partId);
            
            // 最終的な表示状態 = パーツ表示 AND スプライト表示 AND opacity非ゼロ
            const finalVisibility = partShouldBeVisible && spriteShouldBeVisible && !isOpacityZero;
            part.setVisibleRecursive(finalVisibility);
          }
        }
      }
      
      // アニメーション描画
      const origin = P.newP(0, 0, 0);
      eAnimD.draw(ctx, origin, 1);
      
      ctx.restore();
    });
  }, [eAnimD, offsetX, offsetY, zoom, showRefLines, hiddenParts, hiddenSprites, isPartOpacityZero]);

  // 描画処理
  const render = useCallback(() => {
    renderAnimation();
  }, [renderAnimation]);

  // アニメーションループ
  const animate = useCallback(() => {
    // 再生中でない場合は即座に停止
    if (!isPlaying || !eAnimD) {
      return;
    }
    
    const now = performance.now();
    if (now - lastFrameTimeRef.current >= 1000 / 30) { // 30 FPS
      
      AnimationPerformanceMonitor.measure('animation_loop', () => {
        eAnimD.update(false);
        
        // ループ処理
        if (eAnimD.isComplete()) {
          eAnimD.setTime(0); // ループ再生
        }
        
        // UI状態更新（内部更新フラグを設定）
        isInternalUpdateRef.current = true;
        setCurrentFrame(eAnimD.f);
        
        // 描画実行
        render();
        
      });
      
      lastFrameTimeRef.current = now;
    }
    
    // 再生中の場合のみ次のフレームをリクエスト（二重チェック）
    if (isPlaying) {
      animationIdRef.current = requestAnimationFrame(animate);
    }
  }, [isPlaying, eAnimD, render]);

  // 初期化とクリーンアップ
  useEffect(() => {
    loadSprites();
    loadRawJsonData();
  }, [loadSprites, loadRawJsonData]);

  // フォーム変更時にスプライト画像をリセット・再読み込み
  useEffect(() => {
    setSpriteImage(null);
    setSelectedSpriteId(0);
    loadSprites();
  }, [selectedForm, loadSprites]);

  // 外部currentFrameとの同期（アニメーション停止時のみ、ボタンクリック時は無視）
  useEffect(() => {
    const now = Date.now();
    
    // ボタンクリックによる即座更新中は外部同期をスキップ
    if (immediateUpdateRef.current) {
      return;
    }
    
    // 外部同期がブロックされている期間はスキップ
    if (now < externalSyncBlockedUntilRef.current) {
      return;
    }
    
    if (!isPlaying && externalCurrentFrame !== undefined && externalCurrentFrame !== currentFrame) {
      isInternalUpdateRef.current = true; // 内部更新フラグを設定して循環を防ぐ
      setCurrentFrame(externalCurrentFrame);
    }
  }, [externalCurrentFrame, currentFrame, isPlaying]);

  // currentFrameの変更を親に通知のみ（EAnimD同期は別の場所で処理）
  useEffect(() => {
    // 内部更新の場合はスキップ
    if (isInternalUpdateRef.current) {
      isInternalUpdateRef.current = false;
      return;
    }
    
    if (onFrameChange) {
      onFrameChange(currentFrame);
    }
  }, [currentFrame, onFrameChange, isPlaying]);

  // EAnimDフレーム同期（停止時のみ、デバウンス付き）
  const frameUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const immediateUpdateRef = useRef<boolean>(false); // 即座更新フラグ
  const externalSyncBlockedUntilRef = useRef<number>(0); // 外部同期ブロック期限
  
  useEffect(() => {
    if (!isPlaying && eAnimD && eAnimD.f !== currentFrame) {
      // 即座更新フラグがある場合はデバウンスをスキップ
      if (immediateUpdateRef.current) {
        eAnimD.setTimeAndUpdate(currentFrame, false, `${unitId}-immediate`);
        renderAnimation();
        immediateUpdateRef.current = false;
        return;
      }
      
      // デバウンス処理でチャタリングを防ぐ
      if (frameUpdateTimeoutRef.current) {
        clearTimeout(frameUpdateTimeoutRef.current);
      }
      
      frameUpdateTimeoutRef.current = setTimeout(() => {
        if (eAnimD && eAnimD.f !== currentFrame) {
          eAnimD.setTimeAndUpdate(currentFrame, false, `${unitId}-stopped`);
          renderAnimation();
        }
        frameUpdateTimeoutRef.current = null;
      }, 16); // 16ms（60FPS相当）でデバウンス
    }
    
    return () => {
      if (frameUpdateTimeoutRef.current) {
        clearTimeout(frameUpdateTimeoutRef.current);
        frameUpdateTimeoutRef.current = null;
      }
    };
  }, [currentFrame, isPlaying, eAnimD, unitId, renderAnimation]);

  // 初期描画のみ
  useEffect(() => {
    if (eAnimD && !isPlaying) {
      render();
    }
  }, [eAnimD, isPlaying, render]);



  useEffect(() => {
    if (isPlaying) {
      animationIdRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = 0; // リセット
    }
    
    return () => {
      if (animationIdRef.current !== 0) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = 0;
      }
    };
  }, [isPlaying, animate]);

  // アニメーションシステムのクリーンアップ
  useEffect(() => {
    return () => {
      if (eAnimD) {
        eAnimD.dispose();
      }
    };
  }, [eAnimD]);

  // Part 0のスプライトを初期状態で非表示にする
  useEffect(() => {
    if (animationData[selectedForm] && animationData[selectedForm].mamodel) {
      const part0Sprites = getPartSprites(0);
      if (part0Sprites.length > 0) {
        setHiddenSprites(prevHiddenSprites => {
          const newHiddenSprites = new Set(prevHiddenSprites);
          part0Sprites.forEach(spriteId => {
            const partSpriteKey = `0-${spriteId}`;
            newHiddenSprites.add(partSpriteKey);
          });
          return newHiddenSprites;
        });
      }
    }
  }, [animationData, selectedForm, selectedAnimation, getPartSprites]);

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
        <button
          onClick={() => setSettingsVisible(!settingsVisible)}
          className={`px-2 py-1 rounded ${settingsVisible ? 'bg-green-500' : 'bg-gray-500'} text-white`}
        >
          設定
        </button>
      </div>

      {/* アニメーション設定パネル */}
      {settingsVisible && (
        <div className="bg-gray-100 p-3 rounded border">
          <h3 className="text-sm font-bold mb-2">アニメーション設定</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                if (eAnimD) eAnimD.setPerformanceMode(true);
              }}
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              パフォーマンスモード
            </button>
            <button
              onClick={() => {
                if (eAnimD) eAnimD.setPerformanceMode(false);
              }}
              className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              標準モード
            </button>
            <button
              onClick={() => {
                const stats = AnimationPerformanceMonitor.getStats();
                console.log('Performance Stats:', stats);
                alert('パフォーマンス統計をコンソールに出力しました');
              }}
              className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              統計表示
            </button>
            <button
              onClick={() => {
                if (eAnimD) {
                  eAnimD.reset();
                  setCurrentFrame(0);
                }
              }}
              className="px-2 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              リセット
            </button>
          </div>
          
          {/* 現在の状態表示 */}
          <div className="mt-2 text-xs text-gray-600">
            {eAnimD && (
              <div>アニメーション: Frame {eAnimD.f}/{eAnimD.len()}, パフォーマンス: {eAnimD.isPerformanceMode() ? 'ON' : 'OFF'}</div>
            )}
          </div>
        </div>
      )}

      {/* メインアニメーション表示 */}
      <div className="flex flex-col items-center">
      
        {/* キャンバス */}
        <canvas
          ref={canvasRef}
          width={440}
          height={500}
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

      {/* Frame Control */}
      <div className="bg-gray-50 p-1 rounded">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-600 font-mono">
              Frame {String(currentFrame).padStart(3, '0')}/{String(eAnimD ? eAnimD.len() : 0).padStart(3, '0')}
            </label>
            <button
              onClick={() => {
                if (!eAnimD) return;
                const maxFrame = eAnimD.len();
                const newFrame = currentFrame > 0 ? currentFrame - 1 : maxFrame;
                
                // 外部同期を200msブロック
                externalSyncBlockedUntilRef.current = Date.now() + 200;
                immediateUpdateRef.current = true; // 即座更新フラグを設定
                setCurrentFrame(newFrame);
              }}
              className="text-sm text-gray-600 hover:text-gray-800 font-mono"
              disabled={isPlaying}
            >
              ◁
            </button>
            <button
              onClick={() => {
                if (!eAnimD) return;
                const maxFrame = eAnimD.len();
                const newFrame = currentFrame < maxFrame ? currentFrame + 1 : 0;
                
                // 外部同期を200msブロック
                externalSyncBlockedUntilRef.current = Date.now() + 200;
                immediateUpdateRef.current = true; // 即座更新フラグを設定
                setCurrentFrame(newFrame);
              }}
              className="text-sm text-gray-600 hover:text-gray-800 font-mono"
              disabled={isPlaying}
            >
              ▷
            </button>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max={eAnimD ? eAnimD.len() : 0}
          value={currentFrame}
          onChange={(e) => {
            const newFrame = parseInt(e.target.value);
            
            // 外部同期を200msブロック
            externalSyncBlockedUntilRef.current = Date.now() + 200;
            immediateUpdateRef.current = true; // 即座更新フラグを設定
            setCurrentFrame(newFrame);
          }}
          className="w-full"
          disabled={isPlaying}
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
            <div className="bg-white border rounded p-2">
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
                  // EAnimDからパーツ情報を取得
                  const part = eAnimD?.ent?.[partId];
                  if (!part) return [];
                  
                  const partSpriteIds = getPartSprites(partId);
                  
                  // パーツがアクティブかどうかを汎用的に判定（新しいロジックを使用）
                  // Part 0は例外として常にアクティブとして扱う
                  const isPartActive = partId === 0 ? true : !areAllPartSpritesInactive(partId);
                  
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
                  if (!showInactiveParts && !isPartActive) {
                    return results;
                  }
                  
                  // 子要素の存在確認
                  const hasChildren = (childrenMap[partId] || []).length > 0 || partSpriteIds.length > 0;
                  const isExpanded = expandedParts.has(partId);
                  
                  // 現在のパーツを描画
                  const currentPartElement = (
                    <div key={`part-${partId}`} className="py-0 my-0" style={{ paddingLeft: `${indentLevel}px` }}>
                      {/* パーツ（親） */}
                      <div className={`py-0 my-0 flex items-center gap-1 font-mono text-xs ${!isPartActive ? 'opacity-40' : ''}`}>
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
                          className={`w-3 h-3 ${partId === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                          checked={!hiddenParts.has(partId)}
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
                        const isDisplayed = part.img === spriteId && part.visible && !hiddenParts.has(partId) && !hiddenSprites.has(partSpriteKey);
                        
                        // opacity=0のパーツかチェック
                        const isOpacityZero = isPartOpacityZero(partId);
                        
                        // スプライト使用状況の判定
                        // Part 0のスプライトは常に非アクティブ表示
                        // maanimで実際に表示されていないスプライトも非アクティブ表示
                        const isSpriteUsed = partId === 0 ? false : isPartActive && isDisplayed;
                        
                        return (
                          <div key={`sprite-${partId}-${spriteIndex}`} 
                               className={`py-0 my-0 flex items-center gap-1 font-mono text-xs ${isDisplayed && !isOpacityZero ? 'text-green-500' : ''} ${isOpacityZero ? 'text-red-400' : ''} ${!isSpriteUsed ? 'opacity-30' : ''}`}
                               style={{ paddingLeft: '28px' }}>
                            <input
                              type="checkbox"
                              className={`w-3 h-3 accent-green-500 ${partId === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                              checked={!hiddenSprites.has(partSpriteKey)}
                              onChange={(e) => handleSpriteToggle(spriteId, e.target.checked, partId)}
                              disabled={partId === 0}
                            />
                            <span className="font-mono text-xs">
                              Sprite#{spriteId.toString().padStart(3, '0')}
                              {isOpacityZero ? ' ✕' : (isDisplayed ? ' ●' : ' ○')}
                              {isOpacityZero ? ' (opacity=0)' : ''}
                            </span>
                            {isDisplayed && (
                              <span className="font-mono text-[10px] text-amber-500">
                                ({formatCoordinate(part.pos?.x)}, {formatCoordinate(part.pos?.y)}, {formatCoordinate(part.img)})
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
                  result = result.replace(/("ints":\s*)\[\s*\n([\s\S]*?)\n\s*\]/g, (_, intsLabel, content) => {
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
                  result = result.replace(/("ints":\s*)\[\s*\n([\s\S]*?)\n\s*\]/g, (_, intsLabel, content) => {
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