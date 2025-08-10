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
      style={{
        maxHeight: spriteImage ? `${spriteImage.width * 3.232}px` : 'auto'
      }}
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
  const [showBounds, setShowBounds] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(30);
  const canvasWidth = 440; // 固定値
  const canvasHeight = Math.round(canvasWidth * 1.3); // 幅の1.3倍
  
  // Sprite Preview用の状態変数
  const [selectedSpriteId, setSelectedSpriteId] = useState<number>(0);
  const [spriteImage, setSpriteImage] = useState<HTMLImageElement | null>(null);
  
  // アニメーションシステム
  const [eAnimD, setEAnimD] = useState<EAnimD | null>(null);
  
  // Data折りたたみ用の状態変数
  const [dataExpanded, setDataExpanded] = useState({
    imgcut: false,
    mamodel: false,
    maanim: false
  });

  // Original JSON折りたたみ用の状態変数
  const [originalJsonExpanded, setOriginalJsonExpanded] = useState({
    imgcut: false,
    mamodel: false,
    maanim: false
  });
  
  // 元のJSONデータを保存する状態
  const [rawJsonData, setRawJsonData] = useState<Record<string, unknown> | null>(null);


  // Sprite Preview折り畳み用の状態変数
  const [spritePreviewExpanded, setSpritePreviewExpanded] = useState<boolean>(true);

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


  // パーツごとのスプライトIDを取得する関数（アニメーションで使用される全スプライトを返す）
  const getPartSprites = useCallback((partId: number): number[] => {
    const formData = animationData[selectedForm];
    
    // 重要: mamodel.nでパーツ数をチェックし、範囲外アクセスを防ぐ
    if (!formData?.mamodel || partId >= (formData.mamodel.n || 0)) {
      return []; // 範囲外の場合は空配列を返す
    }
    
    // まず基本cutIdを取得
    let baseSpriteId = -1;
    if (formData.mamodel.parts && Array.isArray(formData.mamodel.parts) && partId < formData.mamodel.parts.length) {
      const partData = formData.mamodel.parts[partId];
      if (Array.isArray(partData) && partData.length > 2) {
        baseSpriteId = partData[2]; // cutId
      }
    }
    
    // 選択されたアニメーションでSPRITE_CHANGE (type 2)を使用するスプライトを収集
    const usedSprites = new Set<number>();
    if (baseSpriteId >= 0) {
      usedSprites.add(baseSpriteId); // 基本スプライトは常に含める
    }
    
    // 選択されたアニメーションからSPRITE_CHANGE修正を検索
    const maanim = formData.maanim?.[selectedAnimation];
    if (maanim && maanim.parts) {
      maanim.parts.forEach(animPart => {
        if (!animPart || !animPart.ints || animPart.ints.length < 2) return;
        
        const animPartId = animPart.ints[0];
        const modifType = animPart.ints[1];
        
        // 対象パーツのSPRITE_CHANGE (type 2) を探す
        if (animPartId === partId && modifType === 2) {
          if (animPart.moves) {
            animPart.moves.forEach(move => {
              if (move && move.length >= 2) {
                const spriteId = move[1]; // キーフレームの値 = スプライトID
                if (spriteId >= 0) {
                  usedSprites.add(spriteId);
                }
              }
            });
          }
        }
      });
    }
    
    const result = Array.from(usedSprites).sort((a, b) => a - b);
    
    // Unit 000 デバッグ
    if (unitId === '000' && partId === 1) {
      console.log(`Unit 000 getPartSprites Part ${partId}: base cutId=${baseSpriteId}, all sprites=[${result.join(', ')}]`);
    }
    
    return result;
  }, [animationData, selectedForm, selectedAnimation, unitId]);

  // パーツが現在のフレームでopacity=0かどうかを判定する関数
  const isPartOpacityZero = useCallback((partId: number): boolean => {
    const maanim = animationData[selectedForm]?.maanim?.[selectedAnimation];
    if (!maanim || !eAnimD) return false;
    
    // EAnimDから現在のフレームと実際のパーツ透明度を取得
    const currentFrame = eAnimD.f;
    const part = eAnimD.ent?.[partId];
    
    if (!part) return true; // パーツが存在しない場合は透明扱い
    
    // 現在のフレームでの透明度を計算
    let currentFrameOpacity = null;
    
    if (maanim.parts) {
      maanim.parts.forEach(animPart => {
        if (!animPart || !animPart.ints || animPart.ints.length < 2) {
          return;
        }
        const animPartId = animPart.ints[0];
        const modifType = animPart.ints[1];
        
        if (animPartId === partId && modifType === 12) {
          // OPACITY modification (type 12) で現在フレームでの値を取得
          // 最新の適用可能なmoveを探す
          let latestMove = null;
          if (animPart.moves) {
            animPart.moves.forEach(move => {
              if (!move || move.length < 2) {
                return;
              }
              const moveFrame = move[0];
              if (moveFrame <= currentFrame) {
                latestMove = move;
              }
            });
          }
        
          if (latestMove) {
            currentFrameOpacity = latestMove[1];
          }
        }
      });
    }
    
    // currentFrameOpacityが設定されている場合はそれを使用、そうでなければパーツの実際の透明度を使用
    if (currentFrameOpacity !== null) {
      return currentFrameOpacity === 0;
    }
    
    // フォールバック: パーツの実際の透明度をチェック
    return part.opa() <= 0;
  }, [animationData, selectedForm, selectedAnimation, eAnimD]);


  const handlePartToggle = useCallback((partId: number, checked: boolean) => {
    // Part 0の操作を無視
    if (partId === 0) {
      return;
    }
    
    console.log(`Part ${partId} toggle: ${checked ? 'checked' : 'unchecked'}`);
    
    setHiddenParts(prevHiddenParts => {
      const newHiddenParts = new Set(prevHiddenParts);
      
      if (checked) {
        // チェックされた場合、非表示リストから削除（表示する）
        newHiddenParts.delete(partId);
        console.log(`Part ${partId} now visible, hiddenParts:`, Array.from(newHiddenParts));
      } else {
        // チェックが外された場合、非表示リストに追加（隠す）
        newHiddenParts.add(partId);
        console.log(`Part ${partId} now hidden, hiddenParts:`, Array.from(newHiddenParts));
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
    console.log(`Sprite ${partSpriteKey} toggle: ${checked ? 'checked' : 'unchecked'}`);
    
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
      // Next.jsのbasePathを考慮したパスを生成（loadSpritesと同じ方式）
      const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'nekomut.github.io';
      const basePath = isGitHubPages ? '/bcnext' : '';
      
      // JSONデータ読み込み（複数URLフォールバック）
      const urlsToTry = [
        `${basePath}/data/anim/${unitId}.json`,
        `./data/anim/${unitId}.json`,
        `${typeof window !== 'undefined' && window.location.origin || ''}${basePath}/data/anim/${unitId}.json`
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
        console.warn(`All URLs failed to load JSON data for unit ${unitId}. Last error: ${lastError?.message || 'unknown'}`);
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
      formData.imgcut.cut(canvas);
      
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
      
      // MaModel作成（../common/util/anim準拠のconfs配列実装）
      console.log('Creating MaModel with data:', {
        n: formData.mamodel.n,
        partsLength: formData.mamodel.parts?.length,
        partsType: typeof formData.mamodel.parts,
        firstPart: formData.mamodel.parts?.[0]
      });
      
      const maModel = new MaModel({
        n: formData.mamodel.n,
        m: formData.mamodel.m || 2,
        ints: formData.mamodel.ints || [1000, 3600, 1000],
        parts: formData.mamodel.parts,
        // 実際のJSONデータからconfs配列を取得（Java版と同じ動作）
        confs: formData.mamodel.confs || [
          [0, 0, 0, 0, 1000, 1000], // config0: デフォルト
          [0, 0, 0, 0, 1000, 1000]  // config1: デフォルト
        ],
        strs0: formData.mamodel.strs0 || [],
        strs1: formData.mamodel.strs1 || ['default', 'default']
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

  // アニメーション描画処理（../common/util/anim準拠の位置統一システム）
  const renderAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !eAnimD) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    return AnimationPerformanceMonitor.measure('animation_render', () => {
      // クリア
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 共通基準点システム実装（../common/util/anim準拠）
      ctx.save();
      
      // 1. ../common/util/anim準拠の統一位置システム
      // canvas中心座標を(canvas.width / 2, canvas.height * 0.95)に調整（中心をより下側に移動）
      // confs[0][2], confs[0][3]は各パーツ描画時にEPart側で適用される
      const commonOriginX = canvas.width / 2; // X方向は中央
      const commonOriginY = canvas.height * 0.95; // Y方向：中心をより下側に移動
      
      // 2. ユーザー操作によるオフセット追加
      ctx.translate(commonOriginX + offsetX, commonOriginY + offsetY);
      ctx.scale(zoom, zoom);
      
      
      // グリッド補助線描画（25px間隔）
      if (showRefLines) {
        const gridSpacing = 25;
        
        // ズームレベルに応じて描画範囲を動的に調整
        const drawRange = Math.max(2000, Math.ceil(2000 / zoom));
        
        // グリッド線（薄いグレー）
        ctx.strokeStyle = '#e5e7eb'; // Tailwind gray-200
        ctx.lineWidth = 0.2 / zoom;
        ctx.beginPath();
        
        // 垂直グリッド線
        for (let x = gridSpacing; x < drawRange; x += gridSpacing) {
          ctx.moveTo(x, -drawRange);
          ctx.lineTo(x, drawRange);
          ctx.moveTo(-x, -drawRange);
          ctx.lineTo(-x, drawRange);
        }
        
        // 水平グリッド線
        for (let y = gridSpacing; y < drawRange; y += gridSpacing) {
          ctx.moveTo(-drawRange, y);
          ctx.lineTo(drawRange, y);
          ctx.moveTo(-drawRange, -y);
          ctx.lineTo(drawRange, -y);
        }
        ctx.stroke();
        
        // 中心軸線（青色）
        ctx.strokeStyle = '#dbeafe'; // Tailwind blue-200
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.moveTo(-drawRange, 0);
        ctx.lineTo(drawRange, 0);
        ctx.moveTo(0, -drawRange);
        ctx.lineTo(0, drawRange);
        ctx.stroke();
      }
      
      // hidden状態をEAnimDに反映
      if (eAnimD.ent && eAnimD.ent.length > 0) {
        for (let partId = 0; partId < eAnimD.ent.length; partId++) {
          const part = eAnimD.ent[partId];
          if (part) {
            // パーツレベルでの表示制御
            const partShouldBeVisible = !hiddenParts.has(partId);
            
            // mamodelのpartsチェックボックス状態による表示制御は、hiddenPartsで統一管理されるため不要
            
            // スプライトレベルでの表示制御
            let spriteShouldBeVisible = true;
            if (partShouldBeVisible && part.img !== undefined && part.img >= 0) {
              const partSpriteKey = `${partId}-${part.img}`;
              spriteShouldBeVisible = !hiddenSprites.has(partSpriteKey);
            }
            
            // opacity=0のパーツでもチェックボックスで強制表示可能
            const isOpacityZero = isPartOpacityZero(partId);
            
            // 最終的な表示状態 = パーツ表示 AND スプライト表示
            // opacity=0でもユーザーがチェックボックスで表示を選択している場合は表示する
            const finalVisibility = partShouldBeVisible && spriteShouldBeVisible;
            
            
            // デバッグ情報（Unit 000のみ）
            if (unitId === '000' && hiddenParts.size > 0 && partId >= 1 && partId <= 4) {
              console.log(`Unit 000 Part ${partId}: partShouldBeVisible=${partShouldBeVisible}, spriteShouldBeVisible=${spriteShouldBeVisible}, isOpacityZero=${isOpacityZero}, finalVisibility=${finalVisibility}`);
            }
            
            // 描画前に毎回visible状態を強制設定（アニメーション更新による上書きを防ぐ）
            part.visible = finalVisibility;
          }
        }
      }
      
      // 統一位置システムによるアニメーション描画（../common/util/anim準拠）
      // 共通基準点をoriginとして設定し、統一サイズでの描画
      const unifiedOrigin = P.newP(0, 0, 0);
      const unifiedSize = 1.0;
      
      // デバッグ情報（Unit 000のみ）
      if (unitId === '000' && hiddenParts.size > 0) {
        console.log('Unit 000 Drawing with hiddenParts:', Array.from(hiddenParts));
      }
      
      // カスタム描画：各パーツの表示状態をチェックしながら描画
      const visibleParts: { x: number; y: number; width: number; height: number; partId: number }[] = [];
      
      if (eAnimD.order) {
        for (const part of eAnimD.order) {
          const partId = part.ind;
          
          // チェックボックス状態に基づく表示判定
          const partShouldBeVisible = !hiddenParts.has(partId);
          let spriteShouldBeVisible = true;
          if (partShouldBeVisible && part.img !== undefined && part.img >= 0) {
            const partSpriteKey = `${partId}-${part.img}`;
            spriteShouldBeVisible = !hiddenSprites.has(partSpriteKey);
          }
          const shouldDraw = partShouldBeVisible && spriteShouldBeVisible;
          
          // 表示すべきパーツのみ描画
          if (shouldDraw) {
            ctx.save();
            try {
              const sizer = P.newP(unifiedSize, unifiedSize, 1);
              part.transform(ctx, sizer);
              
              // 境界線表示用の座標を記録（part.transform()とpart.drawPart()と完全に同じ計算）
              if (showBounds) {
                try {
                  if (part.opa() > 0.1) {
                    // drawPart()と全く同じ条件チェック
                    const deadOpaThreshold = 10 * 0.01 + 1e-5;
                    if (part.visible && part.img >= 0 && part.id >= 0 && part.opa() >= deadOpaThreshold && 
                        eAnimD.spriteImage && eAnimD.imgcut) {
                      
                      // drawPart()と同じスプライトデータ取得
                      if (eAnimD.imgcut.cuts && part.img < eAnimD.imgcut.cuts.length) {
                        const spriteData = eAnimD.imgcut.cuts[part.img];
                        if (spriteData && spriteData.length >= 4) {
                          const [, , sw, sh] = spriteData;
                          if (sw > 0 && sh > 0) {
                            
                            // drawPart()と完全に同じピボット・スケール計算
                            const p0 = part.getSize();
                            const tpiv = P.newP(part.piv).times(p0).times(sizer);
                            const sc = P.newP(sw, sh).times(p0).times(sizer);
                            
                            // drawPart()と同じ反転・スケール値チェック
                            const isFlipX = sc.x < 0;
                            const isFlipY = sc.y < 0;
                            const absScX = Math.abs(sc.x);
                            const absScY = Math.abs(sc.y);
                            
                            if (isFinite(sc.x) && isFinite(sc.y) && absScX > 0 && absScY > 0) {
                              // 現在のCanvas変換状態を取得（part.transform()適用後）
                              const currentTransform = ctx.getTransform();
                              
                              // drawPart()と完全に同じ描画位置計算（反転考慮）
                              let drawX, drawY, drawWidth, drawHeight;
                              
                              if (isFlipX || isFlipY) {
                                // 反転時: EPart.drawPart()と同じ計算（ピボット基準）
                                drawX = 0; // ピボット基準での描画位置
                                drawY = 0;
                                drawWidth = absScX;
                                drawHeight = absScY;
                                
                                // 反転マトリックスを手動で適用
                                const flipMatrix = {
                                  a: isFlipX ? -1 : 1,
                                  b: 0,
                                  c: 0,
                                  d: isFlipY ? -1 : 1,
                                  e: -tpiv.x,
                                  f: -tpiv.y
                                };
                                
                                // 合成マトリックス計算（currentTransform * flipMatrix）
                                const combinedTransform = {
                                  a: currentTransform.a * flipMatrix.a + currentTransform.c * flipMatrix.b,
                                  b: currentTransform.b * flipMatrix.a + currentTransform.d * flipMatrix.b,
                                  c: currentTransform.a * flipMatrix.c + currentTransform.c * flipMatrix.d,
                                  d: currentTransform.b * flipMatrix.c + currentTransform.d * flipMatrix.d,
                                  e: currentTransform.a * flipMatrix.e + currentTransform.c * flipMatrix.f + currentTransform.e,
                                  f: currentTransform.b * flipMatrix.e + currentTransform.d * flipMatrix.f + currentTransform.f
                                };
                                
                                // 反転後の変換マトリックスを使用
                                const corners = [
                                  { x: drawX, y: drawY },
                                  { x: drawX + drawWidth, y: drawY },
                                  { x: drawX + drawWidth, y: drawY + drawHeight },
                                  { x: drawX, y: drawY + drawHeight }
                                ];
                                
                                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                                
                                corners.forEach(corner => {
                                  // 反転を考慮したCanvas変換を適用
                                  const screenX = combinedTransform.a * corner.x + combinedTransform.c * corner.y + combinedTransform.e;
                                  const screenY = combinedTransform.b * corner.x + combinedTransform.d * corner.y + combinedTransform.f;
                                  
                                  minX = Math.min(minX, screenX);
                                  minY = Math.min(minY, screenY);
                                  maxX = Math.max(maxX, screenX);
                                  maxY = Math.max(maxY, screenY);
                                });
                                
                                const bounds = {
                                  x: minX,
                                  y: minY,
                                  width: maxX - minX,
                                  height: maxY - minY,
                                  partId: partId
                                };
                                
                                if (isFinite(bounds.x) && isFinite(bounds.y) && 
                                    isFinite(bounds.width) && isFinite(bounds.height) &&
                                    bounds.width > 0 && bounds.height > 0) {
                                  visibleParts.push(bounds);
                                }
                              } else {
                                // 通常時: 従来の計算
                                drawX = -tpiv.x;
                                drawY = -tpiv.y;
                                drawWidth = absScX;
                                drawHeight = absScY;
                                
                                // Canvas変換マトリックスを使用して画面座標に変換
                                const corners = [
                                  { x: drawX, y: drawY },
                                  { x: drawX + drawWidth, y: drawY },
                                  { x: drawX + drawWidth, y: drawY + drawHeight },
                                  { x: drawX, y: drawY + drawHeight }
                                ];
                                
                                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                                
                                corners.forEach(corner => {
                                  // 現在のCanvas変換を適用
                                  const screenX = currentTransform.a * corner.x + currentTransform.c * corner.y + currentTransform.e;
                                  const screenY = currentTransform.b * corner.x + currentTransform.d * corner.y + currentTransform.f;
                                  
                                  minX = Math.min(minX, screenX);
                                  minY = Math.min(minY, screenY);
                                  maxX = Math.max(maxX, screenX);
                                  maxY = Math.max(maxY, screenY);
                                });
                                
                                const bounds = {
                                  x: minX,
                                  y: minY,
                                  width: maxX - minX,
                                  height: maxY - minY,
                                  partId: partId
                                };
                                
                                if (isFinite(bounds.x) && isFinite(bounds.y) && 
                                    isFinite(bounds.width) && isFinite(bounds.height) &&
                                    bounds.width > 0 && bounds.height > 0) {
                                  visibleParts.push(bounds);
                                }
                              }
                            }
                            
                            // メモリ解放
                            P.delete(p0);
                            P.delete(tpiv);
                            P.delete(sc);
                          }
                        }
                      }
                    }
                  }
                } catch (boundsError) {
                  console.warn(`Bounds calculation error for part ${partId}:`, boundsError);
                }
              }
              
              // 一時的にvisibleを強制的にtrueに設定して描画
              const originalVisible = part.visible;
              part.visible = true;
              part.drawPart(ctx, unifiedOrigin, sizer, eAnimD.spriteImage, eAnimD.imgcut);
              part.visible = originalVisible; // 元に戻す
            } catch (error) {
              console.warn(`Custom draw error for part ${part.id}:`, error);
            } finally {
              ctx.restore();
            }
          }
        }
      }
      
      ctx.restore();
      
      // 境界線の描画（showBoundsが有効時）- 座標変換の外で描画
      if (showBounds && visibleParts.length > 0) {
        console.log(`Drawing bounds for ${visibleParts.length} visible parts:`, visibleParts);
        try {
          // 境界線描画（既に画面座標系に変換済み）
          ctx.strokeStyle = '#ef4444'; // red-500
          ctx.lineWidth = Math.min(0.5 / zoom, 1.0); // ズームに応じて線幅を調整（より細く、最大1.0px）
          ctx.setLineDash([]);
          
          // 個別パーツの境界線を画面座標で描画
          visibleParts.forEach(({ x, y, width, height, partId }) => {
            console.log(`Drawing boundary for part ${partId}: (${x}, ${y}, ${width}, ${height})`);
            if (isFinite(x) && isFinite(y) && isFinite(width) && isFinite(height)) {
              ctx.strokeRect(x, y, width, height);
              console.log(`Successfully drew boundary for part ${partId}`);
            } else {
              console.log(`Failed to draw boundary for part ${partId}: invalid values`);
            }
          });
          
          // 全体のバウンディングボックス（琥珀色）
          if (visibleParts.length > 1) {
            const xs = visibleParts.map(p => p.x).filter(isFinite);
            const ys = visibleParts.map(p => p.y).filter(isFinite);
            const maxXs = visibleParts.map(p => p.x + p.width).filter(isFinite);
            const maxYs = visibleParts.map(p => p.y + p.height).filter(isFinite);
            
            if (xs.length > 0 && ys.length > 0 && maxXs.length > 0 && maxYs.length > 0) {
              const minX = Math.min(...xs);
              const minY = Math.min(...ys);
              const maxX = Math.max(...maxXs);
              const maxY = Math.max(...maxYs);
              
              ctx.strokeStyle = '#f59e0b'; // amber-500
              ctx.lineWidth = Math.min(0.5 / zoom, 1.0); // ズームに応じて線幅を調整（より細く、最大1.0px）
              ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
            }
          }
        } catch (drawError) {
          console.warn('Bounds drawing error:', drawError);
        }
      }
    });
  }, [eAnimD, offsetX, offsetY, zoom, showRefLines, showBounds, hiddenParts, hiddenSprites, isPartOpacityZero, unitId]);

  // 描画処理
  const render = useCallback(() => {
    renderAnimation();
  }, [renderAnimation]);


  // パーツ表示状態変更時の再描画
  useEffect(() => {
    if (eAnimD && !isPlaying) {
      if (unitId === '000') {
        console.log('Unit 000 Hidden parts changed:', Array.from(hiddenParts));
        console.log('Unit 000 Hidden sprites changed:', Array.from(hiddenSprites));
      }
      render();
    }
  }, [hiddenParts, hiddenSprites, eAnimD, isPlaying, render, unitId]);

  // アニメーションループ
  const animate = useCallback(() => {
    // 再生中でない場合は即座に停止
    if (!isPlaying || !eAnimD) {
      return;
    }
    
    const now = performance.now();
    if (now - lastFrameTimeRef.current >= 1000 / fps) { // 設定されたFPS
      
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
  }, [isPlaying, eAnimD, render, fps]);

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

  // デバッグ情報をwindowに公開
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as typeof window & { animDebugInfo?: Record<string, unknown> }).animDebugInfo = {
        eAnimD,
        selectedForm,
        selectedAnimation,
        currentFrame,
        animationData: animationData[selectedForm]
      };
    }
  }, [eAnimD, selectedForm, selectedAnimation, currentFrame, animationData]);

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
    <div className="space-y-2">


      {/* メインアニメーション表示 */}
      <div className="flex flex-col items-center animation-container">
      
        {/* キャンバス */}
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="border border-gray-300 bg-cyan-400 w-full max-w-full"
          style={{ 
            width: '100%',
            height: 'auto',
            aspectRatio: `${canvasWidth} / ${canvasHeight}`
          }}
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
      <div className="bg-gray-50 p-1 rounded mt-1">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-600 font-mono">
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
          <div className="flex items-center gap-1">
            <label className="text-xs font-medium text-gray-600 font-mono">FPS</label>
            <select
              value={fps}
              onChange={(e) => setFps(parseInt(e.target.value))}
              className="px-1 py-0 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 font-mono"
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={24}>24</option>
              <option value={30}>30</option>
              <option value={60}>60</option>
            </select>
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
        
        {/* コントロールボタン */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs mt-2">
          <span className="text-gray-600 font-mono text-xxs">
            {zoom.toFixed(2)}x ({offsetX}, {offsetY})
          </span>
          <button
            onClick={() => setZoom(zoom * 1.2)}
            className="px-2 py-1 bg-blue-500 text-white rounded font-mono"
          >
            +
          </button>
          <button
            onClick={() => setZoom(zoom / 1.2)}
            className="px-2 py-1 bg-blue-500 text-white rounded font-mono"
          >
            -
          </button>
          <button
            onClick={() => setOffsetY(offsetY - 20)}
            className="px-2 py-1 bg-green-500 text-white rounded font-mono"
          >
            ↑
          </button>
          <button
            onClick={() => setOffsetY(offsetY + 20)}
            className="px-2 py-1 bg-green-500 text-white rounded font-mono"
          >
            ↓
          </button>
          <button
            onClick={() => setOffsetX(offsetX - 20)}
            className="px-2 py-1 bg-green-500 text-white rounded font-mono"
          >
            ←
          </button>
          <button
            onClick={() => setOffsetX(offsetX + 20)}
            className="px-2 py-1 bg-green-500 text-white rounded font-mono"
          >
            →
          </button>
          <button
            onClick={() => setShowRefLines(!showRefLines)}
            className={`px-2 py-1 rounded ${showRefLines ? 'bg-red-500' : 'bg-gray-500'} text-white font-mono text-xxs`}
          >
            Grid
          </button>
          <button
            onClick={() => setShowBounds(!showBounds)}
            className={`px-2 py-1 rounded ${showBounds ? 'bg-purple-500' : 'bg-gray-500'} text-white font-mono text-xxs`}
          >
            Bound
          </button>
        </div>
      </div>

      {/* Parts List Section */}
      <div className="bg-gray-50 p-1 rounded mt-1">
        <div className="mt-2">
          {/* Parts/Sprites カウントラベル */}
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-600 font-mono">
              Parts({animationData[selectedForm] && animationData[selectedForm].mamodel ? animationData[selectedForm].mamodel.n || 0 : 0})|Sprites({animationData[selectedForm] && animationData[selectedForm].imgcut ? animationData[selectedForm].imgcut.n || 0 : 0})
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
            <label className="flex items-center gap-1 text-xxs font-medium text-gray-600 font-mono">
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
                
                if (!mamodel.parts || !Array.isArray(mamodel.parts)) {
                  return <div className="text-xs text-red-500">Invalid mamodel data</div>;
                }

                // パーツの親子関係を構築
                const childrenMap: { [key: number]: number[] } = {};
                const rootParts: number[] = [];
                
                // mamodel.nを正確に使用してパーツ範囲を制限
                const actualPartCount = Math.min(mamodel.n || 0, mamodel.parts.length);
                for (let i = 0; i < actualPartCount; i++) {
                  const modelPart = mamodel.parts[i];
                  if (!modelPart || !Array.isArray(modelPart) || modelPart.length === 0) {
                    continue;
                  }
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
                  
                  // パーツがアクティブかどうかを判定（実際の表示状態とチェックボックス状態を総合判定）
                  const isPartActive = (() => {
                    // Part 0は例外として常にアクティブとして扱う
                    if (partId === 0) return true;
                    
                    // チェックボックスで非表示に設定されている場合は非アクティブ
                    if (hiddenParts.has(partId)) return false;
                    
                    // EAnimDから実際のパーツの状態を取得
                    const actualPart = eAnimD?.ent?.find(p => p && p.ind === partId);
                    if (actualPart) {
                      // 実際に表示中（visible=true かつ opacity > 0）の場合はアクティブ
                      if (actualPart.visible && actualPart.opa() > 0.1) {
                        return true;
                      }
                      // opacity=0 または visible=false の場合は非アクティブ
                      if (!actualPart.visible || actualPart.opa() <= 0.1) {
                        return false;
                      }
                    }
                    
                    // パーツにスプライトがある場合は潜在的にアクティブ
                    return partSpriteIds.length > 0;
                  })();
                  
                  // パーツ名を取得
                  const partName = mamodel.strs0[partId] || '';
                  
                  // パーツの座標情報を取得（mamodelで定義された座標）
                  const partCoordinates = (() => {
                    // 常にmamodelから基本座標を取得（X, Y, Z）
                    if (mamodel.parts[partId] && Array.isArray(mamodel.parts[partId]) && mamodel.parts[partId].length >= 6) {
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
                      <div className={`py-0 my-0 flex items-center gap-1 font-mono text-xxs ${!isPartActive ? 'opacity-40' : ''}`}>
                        {/* 折り畳みボタン */}
                        {hasChildren ? (
                          <button
                            onClick={() => togglePartExpansion(partId)}
                            className="w-3 h-3 flex items-center justify-center text-xxs text-gray-600 hover:text-gray-800 cursor-pointer"
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
                        <span className="font-mono text-xxs">
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
                      
                      {/* このパーツに関連するスプライト（基本スプライトIDに基づく） */}
                      {isExpanded && partSpriteIds.length > 0 && partSpriteIds.map((spriteId, spriteIndex) => {
                        const partSpriteKey = `${partId}-${spriteId}`;
                        
                        // 実際に表示されているスプライトかの判定（EAnimDから取得）
                        const isDisplayed = (() => {
                          // EAnimDから実際のパーツを取得
                          const actualPart = eAnimD?.ent?.find(p => p && p.ind === partId);
                          if (actualPart) {
                            // 現在のスプライトIDが基本スプライトIDと一致し、かつ表示中
                            return actualPart.img === spriteId && actualPart.visible && !hiddenParts.has(partId) && !hiddenSprites.has(partSpriteKey);
                          }
                          return false;
                        })();
                        
                        // デバッグ: 表示判定の詳細（Unit 000のみ、Part 1のみでログ出力）
                        if (unitId === '000' && partId === 1) {
                          const actualPart = eAnimD?.ent?.find(p => p && p.ind === partId);
                          console.log(`Unit 000 Sprite ${partSpriteKey} display check:`, {
                            actualPartImg: actualPart?.img,
                            spriteId,
                            imgMatch: actualPart?.img === spriteId,
                            partVisible: actualPart?.visible,
                            partNotHidden: !hiddenParts.has(partId),
                            spriteNotHidden: !hiddenSprites.has(partSpriteKey),
                            isDisplayed,
                            currentFrame: eAnimD?.f
                          });
                        }
                        
                        // opacity=0のパーツかチェック
                        const isOpacityZero = isPartOpacityZero(partId);
                        
                        // スプライト使用状況の判定（チェックボックス状態を直接反映、opacity=0は色判定で処理）
                        const isSpriteUsed = (() => {
                          if (partId === 0) return false; // Part 0は常に非アクティブ
                          
                          // チェックボックスが外されている場合は非アクティブ
                          if (hiddenParts.has(partId) || hiddenSprites.has(partSpriteKey)) {
                            if (unitId === '000' && partId === 1) console.log(`Unit 000 Sprite ${partSpriteKey} hidden by checkbox`);
                            return false;
                          }
                          
                          // opacity=0でもチェックボックスがチェックされていればアクティブとして扱う
                          // （色はspriteTextColorで別途opacity=0として判定）
                          if (unitId === '000' && partId === 1) console.log(`Unit 000 Sprite ${partSpriteKey} active by checkbox (opacity independent)`);
                          return true;
                        })();
                        
                        // スプライトの表示色を決定（opacity=0を優先チェック）
                        const spriteTextColor = (() => {
                          // opacity=0のスプライトは薄い赤文字（最優先）
                          if (isOpacityZero) {
                            if (unitId === '000' && partId === 1) console.log(`Unit 000 Sprite ${partSpriteKey} color: red (opacity=0)`);
                            return 'text-red-400';
                          }
                          // アクティブ（実際に表示中）なスプライトは緑色
                          if (isDisplayed) {
                            if (unitId === '000' && partId === 1) console.log(`Unit 000 Sprite ${partSpriteKey} color: green (active)`);
                            return 'text-green-500';
                          }
                          // それ以外は薄いグレー
                          if (unitId === '000' && partId === 1) console.log(`Unit 000 Sprite ${partSpriteKey} color: gray (inactive)`);
                          return 'text-gray-400';
                        })();

                        // チェックボックスの表示スタイルを決定
                        const checkboxStyle = (() => {
                          if (partId === 0) {
                            return 'opacity-50 cursor-not-allowed'; // Part 0は無効化
                          }
                          if (isOpacityZero) {
                            if (unitId === '000' && partId >= 1 && partId <= 2) console.log(`Unit 000 Sprite ${partSpriteKey} checkbox: dim (opacity=0)`);
                            return 'opacity-60'; // opacity=0スプライトは薄く
                          }
                          if (!isSpriteUsed) {
                            if (unitId === '000' && partId >= 1 && partId <= 2) console.log(`Unit 000 Sprite ${partSpriteKey} checkbox: very dim (inactive)`);
                            return 'opacity-40'; // 非アクティブスプライトはさらに薄く
                          }
                          if (unitId === '000' && partId >= 1 && partId <= 2) console.log(`Unit 000 Sprite ${partSpriteKey} checkbox: normal (active)`);
                          return 'opacity-100'; // アクティブは通常
                        })();

                        return (
                          <div key={`sprite-${partId}-${spriteIndex}`} 
                               className={`py-0 my-0 flex items-center gap-1 font-mono text-xxs ${spriteTextColor}`}
                               style={{ paddingLeft: '28px' }}>
                            <input
                              type="checkbox"
                              className={`w-3 h-3 accent-green-500 ${checkboxStyle}`}
                              checked={!hiddenSprites.has(partSpriteKey)}
                              onChange={(e) => handleSpriteToggle(spriteId, e.target.checked, partId)}
                              disabled={partId === 0}
                            />
                            <span className="font-mono text-xxs">
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
      <div className="bg-blue-50 p-2 rounded mt-1">
        <button
          onClick={() => setSpritePreviewExpanded(!spritePreviewExpanded)}
          className="flex items-center justify-between w-full text-left text-xs font-medium text-gray-600 mb-1 font-mono hover:text-gray-800"
        >
          Sprite Preview
          <span className="text-gray-400">{spritePreviewExpanded ? '▼' : '▶'}</span>
        </button>
        {spritePreviewExpanded && (
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
        )}
      </div>

      {/* Data Section - anim0と同様の実装 */}
      <div className="bg-gray-50 p-2 rounded mt-1">
        <label className="block text-xs font-medium text-gray-600 mb-2 font-mono">
          Data
        </label>
        
        {/* imgcut データ */}
        <div className="bg-white p-2 rounded mb-1">
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
                <button
                  onClick={() => setOriginalJsonExpanded(prev => ({ ...prev, imgcut: !prev.imgcut }))}
                  className="flex items-center justify-between w-full text-left text-xxs font-medium text-gray-400 mb-1 font-mono hover:text-gray-600"
                >
                  Original JSON
                  <span className="text-gray-400">{originalJsonExpanded.imgcut ? '▼' : '▶'}</span>
                </button>
                {originalJsonExpanded.imgcut && (
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
                )}
              </div>
              
              {/* 変換後のanimationData */}
              <div className="bg-blue-50 p-2 rounded">
                <label className="block text-xxs font-medium text-blue-600 mb-1 font-mono">Converted animationData</label>
                <pre className="whitespace-pre-wrap text-xxxs text-blue-600">{(() => {
                  if (!animationData[selectedForm]?.imgcut) return 'No data';
                  
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
                })()}</pre>
              </div>
            </div>
          )}
        </div>

        {/* mamodel データ */}
        <div className="bg-white p-2 rounded mb-1">
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
                <button
                  onClick={() => setOriginalJsonExpanded(prev => ({ ...prev, mamodel: !prev.mamodel }))}
                  className="flex items-center justify-between w-full text-left text-xxs font-medium text-gray-400 mb-1 font-mono hover:text-gray-600"
                >
                  Original JSON
                  <span className="text-gray-400">{originalJsonExpanded.mamodel ? '▼' : '▶'}</span>
                </button>
                {originalJsonExpanded.mamodel && (
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
                )}
              </div>
              
              {/* 変換後のanimationData */}
              <div className="bg-blue-50 p-2 rounded">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xxs font-medium text-blue-600 font-mono">Converted animationData</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        // Parts|Spritesセクションの全選択ボタンと同じ処理
                        setHiddenParts(new Set());
                        setHiddenSprites(new Set());
                      }}
                      className="px-2 py-0 bg-blue-200 text-blue-700 rounded text-xxs hover:bg-blue-300 font-mono"
                    >
                      全選択
                    </button>
                    <button
                      onClick={() => {
                        // Parts|Spritesセクションの全解除ボタンと同じ処理
                        const mamodel = animationData[selectedForm]?.mamodel;
                        if (!mamodel) return;
                        
                        const allPartIds = Array.from({length: mamodel.n}, (_, i) => i).filter(id => id !== 0);
                        const allPartSpriteKeys = new Set<string>();
                        
                        const imgcut = animationData[selectedForm]?.imgcut;
                        if (imgcut) {
                          for (let partId = 1; partId < mamodel.n; partId++) {
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
                  </div>
                </div>
                
                
                <div className="space-y-1">{animationData[selectedForm]?.mamodel ? (() => {
                  const originalData = animationData[selectedForm].mamodel;
                  
                  // プロパティを順序通りに表示（parts配列はintsとconfsの間）
                  const { parts, ints, confs, ...otherProps } = originalData;
                  
                  return (
                    <div>
                      {/* n, m などの基本プロパティ */}
                      <pre className="whitespace-pre-wrap text-xxxs text-blue-600">
                        {`{
  "n": ${originalData.n || 0},
  "m": ${originalData.m || 2},`}
                      </pre>
                      
                      {/* ints配列 */}
                      <pre className="whitespace-pre-wrap text-xxxs text-blue-600">
                        {`  "ints": [${(ints || []).join(', ')}],`}
                      </pre>
                      
                      {/* parts配列の表示 */}
                      <div className="space-y-1">
                        <pre className="whitespace-pre-wrap text-xxxs text-blue-600">  &quot;parts&quot;: [</pre>
                        {parts && Array.isArray(parts) && parts.map((part, partIndex) => {
                          // Parts|Spritesセクションと同じロジックを使用（hiddenPartsベース）
                          const isVisible = !hiddenParts.has(partIndex);
                          const partJson = `[${part.join(', ')}]${partIndex < parts.length - 1 ? ',' : ''}`;
                          
                          return (
                            <div key={partIndex} className="flex items-start gap-2 ml-6">
                              <span className="text-xxxs font-mono text-gray-400 mt-0.5 flex-shrink-0 w-6 text-right">
                                {partIndex.toString().padStart(2, '0')}:
                              </span>
                              <input
                                type="checkbox"
                                checked={isVisible}
                                onChange={(e) => {
                                  // handlePartToggleを直接使用して一貫性を保つ
                                  handlePartToggle(partIndex, e.target.checked);
                                }}
                                className="w-3 h-3 mt-0.5 flex-shrink-0"
                              />
                              <span 
                                className={`text-xxxs font-mono break-all ${
                                  isVisible ? 'text-blue-600' : 'text-gray-300'
                                }`}
                              >
                                {partJson}
                              </span>
                            </div>
                          );
                        })}
                        <pre className="whitespace-pre-wrap text-xxxs text-blue-600">  ],</pre>
                      </div>
                      
                      {/* confs配列 */}
                      <div className="space-y-1">
                        <pre className="whitespace-pre-wrap text-xxxs text-blue-600">  &quot;confs&quot;: [</pre>
                        {confs && Array.isArray(confs) && confs.map((conf, confIndex) => {
                          const confJson = `[${conf.join(', ')}]${confIndex < confs.length - 1 ? ',' : ''}`;
                          return (
                            <div key={confIndex} className="ml-6">
                              <span className="text-xxxs font-mono text-blue-600">
                                {confJson}
                              </span>
                            </div>
                          );
                        })}
                        <pre className="whitespace-pre-wrap text-xxxs text-blue-600">  ],</pre>
                      </div>
                      
                      {/* その他のプロパティ */}
                      {Object.entries(otherProps).map(([key, value]) => (
                        <pre key={key} className="whitespace-pre-wrap text-xxxs text-blue-600">
                          {`  "${key}": ${JSON.stringify(value)},`}
                        </pre>
                      ))}
                      
                      {/* 閉じ括弧 */}
                      <pre className="whitespace-pre-wrap text-xxxs text-blue-600">{"}"}</pre>
                    </div>
                  );
                })() : <span className="text-xxxs text-gray-500">No data</span>}</div>
              </div>
            </div>
          )}
        </div>

        {/* maanim データ */}
        <div className="bg-white p-2 rounded mb-1">
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
                <button
                  onClick={() => setOriginalJsonExpanded(prev => ({ ...prev, maanim: !prev.maanim }))}
                  className="flex items-center justify-between w-full text-left text-xxs font-medium text-gray-400 mb-1 font-mono hover:text-gray-600"
                >
                  Original JSON
                  <span className="text-gray-400">{originalJsonExpanded.maanim ? '▼' : '▶'}</span>
                </button>
                {originalJsonExpanded.maanim && (
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
                )}
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