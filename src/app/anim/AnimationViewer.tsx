'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import AnimationRenderer from './AnimationRenderer';
import { loadUnitImages, getFormImage } from './imageLoader';
import { AnimationViewerProps } from './types';

interface SpritePart {
  id: number;
  spriteId: number;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  opacity: number;
  renderOrder: number;
  srcX: number;
  srcY: number;
  srcW: number;
  srcH: number;
  pivotX?: number;
  pivotY?: number;
  scaledWidth?: number;
  scaledHeight?: number;
  flipX?: number;
  flipY?: number;
  hFlip?: number;
  vFlip?: number;
  matrix?: {
    m0: number;
    m1: number;
    m3: number;
    m4: number;
  };
  scW?: number;
  scH?: number;
  glowEffect?: boolean; // tbcml glow処理（黒い部分透明化）
}

export default function AnimationViewer({
  animationData,
  selectedForm,
  selectedAnimation,
  isPlaying,
  onStop,
  unitId,
  showBoundaries,
  onShowBoundariesChange
}: AnimationViewerProps) {
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [spriteImage, setSpriteImage] = useState<HTMLImageElement | null>(null);
  const [spriteParts, setSpriteParts] = useState<SpritePart[]>([]);
  const [maxFrame, setMaxFrame] = useState(0);
  const [zoom, setZoom] = useState(0.5);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(150);
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 0 });
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [hiddenParts, setHiddenParts] = useState<Set<number>>(new Set());
  const [hiddenSprites, setHiddenSprites] = useState<Set<number>>(new Set());
  const [showPartPoints, setShowPartPoints] = useState<Set<number>>(new Set());
  const [showSpritePoints, setShowSpritePoints] = useState<Set<number>>(new Set());
  const [hideInactiveParts, setHideInactiveParts] = useState(true);
  const [frameRate, setFrameRate] = useState(30);

  const formData = animationData?.[selectedForm] as Record<string, unknown> | undefined;
  const animData = formData?.[selectedAnimation] as unknown[] | undefined;
  const imgCutData = formData?.imgcut as unknown[] | undefined;
  const maModelData = formData?.mamodel as unknown[] | undefined;

  // Load sprite image from external file
  useEffect(() => {
    if (!unitId) return;

    let isMounted = true;
    setImageLoading(true);
    setImageError(null);

    (async () => {
      try {
        // JSON専用のimageLoader使用
        const images = await loadUnitImages(unitId);
        if (!isMounted) return;
        
        const base64Data = getFormImage(images, selectedForm);
        if (!base64Data) {
          setImageError(`指定されたフォーム（${selectedForm}）の画像が見つかりません`);
          setImageLoading(false);
          return;
        }

        const img = new Image();
        img.onload = () => {
          if (isMounted) {
            setSpriteImage(img);
            setImageLoading(false);
          }
        };
        
        img.onerror = () => {
          if (isMounted) {
            setImageError(`画像の読み込みに失敗しました（ユニット${unitId}、フォーム${selectedForm}）`);
            setImageLoading(false);
          }
        };
        
        img.src = base64Data.startsWith('data:') ? base64Data : `data:image/png;base64,${base64Data}`;
        
      } catch (error) {
        if (isMounted) {
          const errorMessage = error instanceof Error
            ? `画像データの取得に失敗しました: ${error.message}`
            : `予期しないエラーが発生しました: ${String(error)}`;
          setImageError(errorMessage);
          setImageLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [unitId, selectedForm]);

  // Calculate shadow offset for centering automatically
  useEffect(() => {
    if (!maModelData || !Array.isArray(maModelData)) {
      setShadowOffset({ x: 0, y: 0 });
      return;
    }

    // Find shadow parts in mamodel data
    const shadowParts: { baseX: number, baseY: number }[] = [];
    
    for (let i = 3; i < maModelData.length; i++) {
      const row = maModelData[i];
      
      if (Array.isArray(row) && row.length >= 14) {
        const partName = (row[13] as string) || '';
        if (typeof partName === 'string' && partName.includes('影')) {
          const baseX = row[4] as number;
          const baseY = row[5] as number;
          shadowParts.push({ baseX, baseY });
        }
      } else if (Array.isArray(row) && row.length === 3) {
        break; // Units row
      }
    }

    if (shadowParts.length === 0) {
      setShadowOffset({ x: 0, y: 0 });
      return;
    }

    // Calculate average position of all shadow parts
    let totalX = 0;
    let totalY = 0;
    
    shadowParts.forEach(shadow => {
      totalX += shadow.baseX;
      totalY += shadow.baseY;
    });
    
    const avgX = totalX / shadowParts.length;
    const avgY = totalY / shadowParts.length;
    
    // Set offset to center shadows at origin
    setShadowOffset({ x: -avgX, y: -avgY });
  }, [maModelData]);

  // IMPROVED FRAME CALCULATION: Calculate max frame from metadata (tbcml get_end_frame style)
  // Enhanced for Unit 003 complex animation patterns
  useEffect(() => {
    if (!animData || !Array.isArray(animData)) return;

    let maxEndFrame = 0;
    let hasInfiniteLoop = false;
    let mainChannelEndFrame = 0;
    
    // Parse maanim data structure:
    // Row 0: ["[modelanim:animation]"]
    // Row 1: [version]
    // Row 2: [total_keyframe_groups]
    // Row 3+: Keyframe group headers and keyframes
    
    let currentRow = 3;
    while (currentRow < animData.length) {
      const row = animData[currentRow];
      if (Array.isArray(row) && row.length >= 6) {
        // This is a keyframe group header: [model_id, modification_type, loop, min_value, max_value, name]
        const modelId = row[0] as number;
        const modificationType = row[1] as number;
        const loopValue = row[2] as number;
        currentRow++;
        
        // Next row should be the keyframe count
        if (currentRow < animData.length && Array.isArray(animData[currentRow])) {
          const keyframeCount = (animData[currentRow] as number[])[0] || 0;
          currentRow++;
          
          // Find last keyframe in this group
          let lastFrameTime = 0;
          let hasValidKeyframes = false;
          
          for (let i = 0; i < keyframeCount && currentRow < animData.length; i++) {
            const keyframe = animData[currentRow];
            if (Array.isArray(keyframe) && keyframe.length >= 4) {
              const frameTime = (keyframe as number[])[0];
              if (frameTime > lastFrameTime) {
                lastFrameTime = frameTime;
                hasValidKeyframes = true;
              }
            }
            currentRow++;
          }
          
          // Keep all modification type 12 (opacity control) for processing
          // Static control channels are important for part visibility control
          
          if (hasValidKeyframes) {
            // For infinite loop channels, use their end frame as the cycle length
            if (loopValue === -1) {
              hasInfiniteLoop = true;
              // Track main channel (usually modelId 1, modificationType 2)
              if (modelId === 1 && modificationType === 2) {
                mainChannelEndFrame = lastFrameTime;
              }
              // Use the highest frame time from any infinite loop channel
              if (lastFrameTime > maxEndFrame) {
                maxEndFrame = lastFrameTime;
              }
            } else if (loopValue > 0) {
              // FINITE LOOP: For specified loop count, use frame time as-is
              if (lastFrameTime > maxEndFrame) {
                maxEndFrame = lastFrameTime;
              }
            } else if (loopValue === 0) {
              // ONE-SHOT: For one-shot animations (attack animations), use end frame
              // Track main channel for one-shot animations (modelId varies)
              if (modificationType === 1 || modificationType === 2) {
                mainChannelEndFrame = lastFrameTime;
              }
              if (lastFrameTime > maxEndFrame) {
                maxEndFrame = lastFrameTime;
              }
            } else {
              // No loop: use last frame directly
              if (lastFrameTime > maxEndFrame) {
                maxEndFrame = lastFrameTime;
              }
            }
          }
        }
      } else {
        currentRow++;
      }
    }
    
    // ACCURATE FRAME RANGE: For infinite loops, use the main channel's cycle length
    if (hasInfiniteLoop && mainChannelEndFrame > 0) {
      // Use the main channel's cycle length for accurate looping
      setMaxFrame(mainChannelEndFrame);
    } else if (maxEndFrame > 0) {
      // Use the calculated max frame
      setMaxFrame(maxEndFrame);
    } else {
      // Default fallback
      setMaxFrame(30);
    }
  }, [animData]);

  // Animation constants matching tbcml implementation
  const DEFAULT_SCALE_UNIT = 1000;
  const DEFAULT_ANGLE_UNIT = 360; // 360 degrees (not 3600)
  const DEFAULT_ALPHA_UNIT = 1000;

  // ENHANCED EASING: Easing function from tbcml - exact implementation with type 12 support
  const ease = (mode: number, progress: number): number => {
    // Clamp progress to valid range
    const p = Math.max(0, Math.min(1, progress));
    
    switch (mode) {
      case 0: // Linear
        return p;
      case 1: // Instant - returns current keyframe value without interpolation
        return 1; // Always return 1 to use startValue (current keyframe)
      case 2: // Exponential (quadratic ease-in)
        return p * p;
      case 3: // Polynomial (smooth step)
        return p * p * (3 - 2 * p);
      case 12: // High-quality interpolation (cubic ease-in-out)
        // Cubic bezier curve for smooth animation
        if (p < 0.5) {
          return 4 * p * p * p;
        } else {
          const f = (2 * p) - 2;
          return 1 + (f * f * f) / 2;
        }
      case 4: // Ease-in-out (alternative)
        return p < 0.5 
          ? 2 * p * p 
          : 1 - Math.pow(-2 * p + 2, 2) / 2;
      case 5: // Bounce (simplified)
        return 1 - Math.pow(1 - p, 3);
      default:
        // Unknown mode, use linear as fallback
        return p;
    }
  };

  // Get interpolated value for current frame - exact tbcml implementation with static control support
  const getChangeInValue = useCallback((keyframes: unknown[], currentFrame: number, loopValue?: number, modificationType?: number): number | null => {
    if (!keyframes || keyframes.length === 0) return null;

    // STATIC CONTROL: Enhanced handling for modification type 12 (opacity control)
    if (keyframes.length === 1) {
      const singleKf = keyframes[0] as number[];
      const kfFrame = singleKf[0];
      const kfValue = singleKf[1];
      
      // Special handling for modification type 12 (opacity control)
      if (modificationType === 12) {
        // Static opacity control: apply value immediately when at or past keyframe
        if (currentFrame >= kfFrame) {
          return kfValue;
        }
        return null; // Before keyframe start
      }
      
      // Standard static control keyframes (0,0,0,0) should always return 0
      if (kfFrame === 0 && kfValue === 0) {
        return 0;
      }
      
      // For other single keyframes, return value if we're at or past the frame
      if (currentFrame >= kfFrame) {
        return kfValue;
      }
      return null;
    }

    const frameCounter = currentFrame;
    const startKf = keyframes[0] as number[];
    const endKf = keyframes[keyframes.length - 1] as number[];

    const startChange = startKf[1];
    const endChange = endKf[1];
    const startFrame = startKf[0];
    const endFrame = endKf[0];

    // tbcml early return condition
    if (frameCounter < startFrame) {
      return null;
    }

    const frameProgress = frameCounter - startFrame;
    const totalFrames = endFrame - startFrame;

    let localFrame: number;

    // IMPROVED LOOP LOGIC: Handle single frame and proper modulo
    if (totalFrames === 0 || startFrame === endFrame) {
      // Single frame case or zero duration
      return startChange;
    } else if (frameCounter <= endFrame) {
      localFrame = frameCounter;
    } else if (loopValue === -1) {
      // Infinite loop: exact tbcml modulo calculation
      const cycleProgress = frameProgress % totalFrames;
      localFrame = cycleProgress + startFrame;
    } else if (loopValue && loopValue >= 1) {
      // FINITE LOOP WITH BROWSER LOOPING: Handle finite loops properly
      // For browser display, allow the animation to loop back for continuous viewing
      localFrame = (frameProgress % totalFrames) + startFrame;
    } else if (loopValue === 0) {
      // ONE-SHOT ANIMATION: Play once for actual data, but loop for browser viewing
      // Attack animations with loop=0 should play once and hold, but we loop for viewing
      localFrame = (frameProgress % totalFrames) + startFrame;
    } else {
      // No loop: hold at end frame
      localFrame = endFrame;
    }

    // tbcml boundary conditions
    if (localFrame === endFrame) return endChange;
    if (localFrame === startFrame) return startChange;

    // tbcml keyframe interpolation search
    for (let i = 0; i < keyframes.length - 1; i++) {
      const currentKf = keyframes[i] as number[];
      const nextKf = keyframes[i + 1] as number[];

      const cFrame = currentKf[0];
      const nFrame = nextKf[0];
      const cEaseMode = currentKf[2];
      const cChange = currentKf[1];
      const nChange = nextKf[1];

      // tbcml range check
      if (localFrame < cFrame || localFrame >= nFrame) {
        continue;
      }

      // IMPROVED INTERPOLATION: tbcml ease calculation
      if (cEaseMode === 1) {
        // Instant mode - always return current value
        return cChange;
      } else if (cFrame === nFrame) {
        // SAME FRAME: If current and next keyframes are at the same frame, return current value
        return cChange;
      } else if (cEaseMode === 0 || cEaseMode === 2) {
        // Linear interpolation (type 0 or 2)
        const frameDiff = nFrame - cFrame;
        if (frameDiff === 0) return cChange; // Avoid division by zero
        const lerp = (localFrame - cFrame) / frameDiff;
        return Math.round(cChange + (nChange - cChange) * lerp);
      } else {
        // Other ease modes (including type 12 - high quality interpolation)
        const frameDiff = nFrame - cFrame;
        if (frameDiff === 0) return cChange; // Avoid division by zero
        const lerp = (localFrame - cFrame) / frameDiff;
        const easedProgress = ease(cEaseMode, Math.max(0, Math.min(1, lerp)));
        return Math.round(cChange + (nChange - cChange) * easedProgress);
      }
    }

    // Final fallback
    return startChange;
  }, []);


  // get_base_size function like tbcml - MUST be defined first
  const getBaseSize = useCallback((part: Record<string, unknown>, parent: boolean, intPartId: number, scaleUnit: number, modelParts: Record<string, unknown>[]): [number, number] => {
    if (!part) {
      return [0, 0];
    }
    
    if (typeof part.animScaleX !== 'number' || typeof part.animScaleY !== 'number' || 
        typeof part.animX !== 'number' || typeof part.animY !== 'number') {
      return [0, 0];
    }
    
    const signumX = (part.animScaleX as number) >= 0 ? 1 : -1;
    const signumY = (part.animScaleY as number) >= 0 ? 1 : -1;
    
    if (parent) {
      if (part.parent) {
        const [sizeX, sizeY] = getBaseSize(part.parent as Record<string, unknown>, true, intPartId, scaleUnit, modelParts);
        return [sizeX * signumX, sizeY * signumY];
      }
      return [signumX, signumY];
    }
    
    if (intPartId === -1 || intPartId === (part.id as number)) {
      return [(part.animX as number) / scaleUnit, (part.animY as number) / scaleUnit];
    }
    
    const part2 = modelParts.find(p => (p.id as number) === intPartId);
    if (!part2) {
      return [(part.animX as number) / scaleUnit, (part.animY as number) / scaleUnit];
    }
    
    const [sizeX, sizeY] = getBaseSize(part2, true, intPartId, scaleUnit, modelParts);
    const resultX = sizeX * ((part.animX as number) / scaleUnit);
    const resultY = sizeY * ((part.animY as number) / scaleUnit);
    
    return [resultX * signumX, resultY * signumY];
  }, []);

  // Get recursive scale calculation like tbcml
  const getRecursiveScale: (part: Record<string, unknown>, currentScale: [number, number]) => [number, number] = useCallback((part, currentScale) => {
    if (!part) return currentScale;
    
    // CRITICAL FIX: realScaleX/Y are already normalized by scale_unit in tbcml
    // So we use them directly without further division
    const scaleX = currentScale[0] * (part.realScaleX as number);
    const scaleY = currentScale[1] * (part.realScaleY as number);
    
    if (part.parent) {
      return getRecursiveScale(part.parent as Record<string, unknown>, [scaleX, scaleY]);
    }
    
    return [scaleX, scaleY];
  }, []);

  // Transform calculation based on exact tbcml implementation
  const transformPart = useCallback((
    part: Record<string, unknown>,
    matrix: number[],
    sizerX: number,
    sizerY: number,
    scaleUnit: number,
    angleUnit: number,
    intsData: unknown[] = [],
    modelParts: Record<string, unknown>[] = []
  ): [number[], number, number] => {
    let sizX = sizerX;
    let sizY = sizerY;
    let currentMatrix = [...matrix];
    
    if (!part) return [currentMatrix, sizX, sizY];
    
    // Get recursive scale for this part
    const [partScaleX, partScaleY] = getRecursiveScale(part, [1, 1]);
    
    // Apply parent transform first if parent exists (like tbcml)
    if (part.parent) {
      const [parentMatrix] = transformPart(part.parent as Record<string, unknown>, matrix, sizerX, sizerY, scaleUnit, angleUnit, intsData, modelParts);
      currentMatrix = parentMatrix;
      
      // Update sizer values based on scale like tbcml
      let scaleX = 0;
      let scaleY = 0;
      
      // FIX: Use pre-calculated real scales to avoid double normalization
      if ((part.realScaleX as number) !== 0) {
        scaleX = partScaleX / (part.realScaleX as number);
      }
      if ((part.realScaleY as number) !== 0) {
        scaleY = partScaleY / (part.realScaleY as number);
      }
      
      sizX = scaleX * sizerX;
      sizY = scaleY * sizerY;
    }

    let [m0, m1, m2, m3, m4, m5] = currentMatrix;

    // Apply position transformation exactly like tbcml
    if ((part.id as number) !== 0) {
      const tPosX = (part.animX as number) * sizX;
      const tPosY = (part.animY as number) * sizY;
      m2 += (m0 * tPosX) + (m1 * tPosY);
      m5 += (m3 * tPosX) + (m4 * tPosY);
    } else {
      // Root part positioning
      if (intsData.length > 0) {
        const ints = intsData[0];
        if (Array.isArray(ints) && ints.length >= 3) {
          const intPartId = ints[0] as number;
          const intX = ints[1] as number;
          const intY = ints[2] as number;
          
          if (typeof intPartId === 'number' && typeof intX === 'number' && typeof intY === 'number') {
            const [p0X, p0Y] = getBaseSize(part, false, intPartId, scaleUnit, modelParts);
            
            const shiX = intX * p0X;
            const shiY = intY * p0Y;
            const p3X = shiX * sizerX;
            const p3Y = shiY * sizerY;
            
            const px = (part.pivotX as number) * partScaleX * sizerX;
            const py = (part.pivotY as number) * partScaleY * sizerY;
            
            const x = px - p3X;
            const y = py - p3Y;
            
            if (isFinite(x) && isFinite(y)) {
              m2 += (m0 * x) + (m1 * y);
              m5 += (m3 * x) + (m4 * y);
            }
          }
        }
      }
    }

    // Apply rotation transformation
    if ((part.animRotation as number) !== 0) {
      const degrees = ((part.animRotation as number) / angleUnit) * 360;
      const radians = degrees * (Math.PI / 180);
      const sin = Math.sin(radians);
      const cos = Math.cos(radians);

      const f = (m0 * cos) + (m1 * sin);
      const f2 = (m0 * -sin) + (m1 * cos);
      const f3 = (m3 * cos) + (m4 * sin);
      const f4 = (m3 * -sin) + (m4 * cos);
      
      m0 = f;
      m1 = f2;
      m3 = f3;
      m4 = f4;
    }

    return [[m0, m1, m2, m3, m4, m5], partScaleX, partScaleY];
  }, [getRecursiveScale, getBaseSize]);
  

  // Update sprite parts based on current frame
  useEffect(() => {
    if (!maModelData || !imgCutData || !animData) {
      setSpriteParts([]);
      return;
    }

    const parts: SpritePart[] = [];

    // Parse mamodel data structure according to tbcml:
    // Row 0: ["[modelanim:model]"]
    // Row 1: [version]
    // Row 2: [total_parts_count]
    // Row 3+: Part definitions
    // After parts: [scale_unit, angle_unit, alpha_unit]
    // Then: [total_ints]
    // Then: Ints definitions
    
    const totalPartsCount = Array.isArray(maModelData[2]) ? (maModelData[2] as number[])[0] : 0;
    
    // DYNAMIC UNIT DETECTION: Get units from mamodel data - they come after the parts
    const unitsRowIndex = 3 + totalPartsCount;
    let scaleUnit = DEFAULT_SCALE_UNIT;
    let angleUnit = DEFAULT_ANGLE_UNIT;
    let alphaUnit = DEFAULT_ALPHA_UNIT;
    
    if (unitsRowIndex < maModelData.length) {
      const unitsRow = maModelData[unitsRowIndex];
      if (Array.isArray(unitsRow) && unitsRow.length >= 3) {
        const detectedScaleUnit = (unitsRow as number[])[0];
        const detectedAngleUnit = (unitsRow as number[])[1];
        const detectedAlphaUnit = (unitsRow as number[])[2];
        
        // Apply detected units only if they are valid values
        if (detectedScaleUnit && detectedScaleUnit > 0) {
          scaleUnit = detectedScaleUnit;
        }
        if (detectedAngleUnit && detectedAngleUnit > 0) {
          angleUnit = detectedAngleUnit;
        }
        if (detectedAlphaUnit && detectedAlphaUnit > 0) {
          alphaUnit = detectedAlphaUnit;
        }
      }
    }
    
    // COMPATIBILITY: For backward compatibility, check actual parts scale as fallback
    if (scaleUnit === DEFAULT_SCALE_UNIT && totalPartsCount > 0) {
      // Scan through actual parts (skip dummy parent at index 3)
      // Look for the most common scale values to determine scaleUnit
      const scaleValues: number[] = [];
      
      for (let i = 0; i < totalPartsCount; i++) {
        const partIndex = 3 + i;
        if (partIndex < maModelData.length) {
          const partData = maModelData[partIndex];
          if (Array.isArray(partData) && partData.length >= 10) {
            const partScaleX = partData[8] as number;
            const partScaleY = partData[9] as number;
            
            if (partScaleX && partScaleX > 0) {
              scaleValues.push(partScaleX);
            }
            if (partScaleY && partScaleY > 0 && partScaleY !== partScaleX) {
              scaleValues.push(partScaleY);
            }
          }
        }
      }
      
      // Analyze scale values to determine appropriate scaleUnit
      if (scaleValues.length > 0) {
        const maxScale = Math.max(...scaleValues);
        const avgScale = scaleValues.reduce((a, b) => a + b, 0) / scaleValues.length;
        
        // TBCML COMPATIBILITY: Most units use 1000-based scaling
        // Only use 100-based for very small scale values
        if (maxScale >= 1000 || avgScale >= 500) {
          scaleUnit = 1000; // High precision scale (1000-based) - tbcml default
        } else if (maxScale >= 100 || avgScale >= 50) {
          scaleUnit = 100; // Standard scale (100-based)
        }
      }
    }
    
    
    // Parse ints data after units
    const intsCountRowIndex = unitsRowIndex + 1;
    const intsData: unknown[] = [];
    
    if (intsCountRowIndex < maModelData.length) {
      const intsCountRow = maModelData[intsCountRowIndex];
      if (Array.isArray(intsCountRow)) {
        const intsCount = (intsCountRow as number[])[0] || 0;
        
        // Read ints data
        for (let i = 0; i < intsCount && (intsCountRowIndex + 1 + i) < maModelData.length; i++) {
          const intRow = maModelData[intsCountRowIndex + 1 + i];
          if (Array.isArray(intRow)) {
            (intsData as unknown[]).push(intRow);
          }
        }
      }
    }
    
    
    const modelParts: Record<string, unknown>[] = [];
    
    // Parse part definitions starting from row 3 - proper tbcml initialization
    for (let i = 0; i < totalPartsCount && (i + 3) < maModelData.length; i++) {
      const partData = maModelData[i + 3];
      
      if (Array.isArray(partData) && partData.length >= 13) {
        const baseScaleX = partData[8] as number;
        const baseScaleY = partData[9] as number;
        
        const part = {
          id: i, // 0-based part ID
          parentId: partData[0] as number,
          unitId: partData[1] as number,
          cutId: partData[2] as number,
          zDepth: partData[3] as number,
          baseX: partData[4] as number,
          baseY: partData[5] as number,
          pivotX: partData[6] as number,
          pivotY: partData[7] as number,
          baseScaleX: baseScaleX,
          baseScaleY: baseScaleY,
          baseRotation: partData[10] as number,
          baseOpacity: partData[11] as number,
          glow: partData[12] as number,
          name: (partData[13] as string) || `Part ${i}`,
          // PRECISE SCALE CALCULATION: Pre-calculate real scale values like tbcml
          // For form=s: 1790/1000=1.79, for form=f: 179/100=1.79
          realScaleX: baseScaleX !== 0 ? baseScaleX / scaleUnit : 0,
          realScaleY: baseScaleY !== 0 ? baseScaleY / scaleUnit : 0
        };
        
        modelParts.push(part);
      }
    }


    // Create parent lookup
    const partLookup: { [id: number]: Record<string, unknown> } = {};
    modelParts.forEach(part => {
      partLookup[part.id as number] = part;
      // Set parent reference
      if ((part.parentId as number) >= 0 && partLookup[part.parentId as number]) {
        part.parent = partLookup[part.parentId as number];
      }
    });


    // IMPROVED INITIALIZATION: Initialize animation values for each part (like tbcml set_part_vals)
    modelParts.forEach(part => {
      // Start with base model values as integers like tbcml
      part.animX = part.baseX;
      part.animY = part.baseY;
      part.animRotation = part.baseRotation;
      part.animOpacity = part.baseOpacity;
      part.animScaleX = part.baseScaleX;
      part.animScaleY = part.baseScaleY;
      part.animCutId = part.cutId;
      
      // PRECISE REAL SCALE: Real scales are already calculated during part creation
      // but update them for animation values as well
      part.realScaleX = (part.animScaleX as number) !== 0 ? (part.animScaleX as number) / scaleUnit : 0;
      part.realScaleY = (part.animScaleY as number) !== 0 ? (part.animScaleY as number) / scaleUnit : 0;
      
      // Initialize animation properties
      part.hFlip = 1;   // 水平反転フラグ（1=通常、-1=反転）
      part.vFlip = 1;   // 垂直反転フラグ（1=通常、-1=反転）
      
      // Initialize parent reference
      if ((part.parentId as number) >= 0 && partLookup[part.parentId as number]) {
        part.parent = partLookup[part.parentId as number];
      }
    });

    // Apply animation changes for the current frame
    if (Array.isArray(animData) && animData.length > 3) {
      let currentRow = 3;
      
      // Parse keyframe groups
      while (currentRow < animData.length) {
        const groupHeader = animData[currentRow];
        if (Array.isArray(groupHeader) && groupHeader.length >= 5) {
          const [modelId, modificationType, loopValue] = groupHeader;
          currentRow++;
          
          // Get keyframe count
          const keyframeCountRow = animData[currentRow];
          if (Array.isArray(keyframeCountRow)) {
            const keyframeCount = (keyframeCountRow as number[])[0] || 0;
            currentRow++;
            
            // Check if this keyframe group targets a valid part
            if ((modelId as number) >= 0 && (modelId as number) < modelParts.length) {
              const part = modelParts[modelId as number];
              
              // Skip animation processing for parts not referenced in current animation
              // This optimization improves performance by only processing parts that have animation data
              
              // Collect all keyframes for this group
              const keyframes: unknown[] = [];
              for (let i = 0; i < keyframeCount && currentRow + i < animData.length; i++) {
                const keyframe = animData[currentRow + i];
                if (Array.isArray(keyframe) && keyframe.length >= 4) {
                  keyframes.push(keyframe);
                }
              }
              
              // Get interpolated value for current frame with loop support
              const changeValue = getChangeInValue(keyframes, currentFrame, loopValue as number, modificationType as number);
              
              
              // Apply the animation change based on modification type (tbcml apply_change logic)
              if (changeValue !== null && changeValue !== undefined) {
                switch (modificationType as number) {
                  case 0: // PARENT - 親パーツ関係の動的変更
                    // 親パーツIDの動的変更（範囲チェック付き）
                    if (changeValue >= 0 && changeValue < modelParts.length) {
                      part.parentId = changeValue;
                      part.parent = partLookup[changeValue] || null;
                    }
                    break;
                  case 1: // ID - ユニットIDの動的変更
                    part.unitId = changeValue;
                    break;
                  case 2: // SPRITE
                    part.animCutId = changeValue;
                    break;
                  case 3: // Z_ORDER - 描画順序の動的変更
                    part.zDepth = changeValue;
                    break;
                  case 4: // POS_X
                    part.animX = (part.baseX as number) + changeValue;
                    break;
                  case 5: // POS_Y
                    part.animY = (part.baseY as number) + changeValue;
                    break;
                  case 6: // PIVOT_X - X軸ピボット点
                    part.pivotX = (part.pivotX as number) + changeValue;
                    break;
                  case 7: // PIVOT_Y - Y軸ピボット点
                    part.pivotY = (part.pivotY as number) + changeValue;
                    break;
                  case 8: // SCALE_UNIT - 統合スケール（X/Y同時）
                    // TBCML EXACT: change_scaled = change / self.scale_unit
                    // part.anim.scale_x = int((part.scale_x or 0) * change_scaled)
                    const changeScaledUnit = changeValue / scaleUnit;
                    part.animScaleX = Math.round((part.baseScaleX as number) * changeScaledUnit);
                    part.animScaleY = Math.round((part.baseScaleY as number) * changeScaledUnit);
                    
                    part.realScaleX = (part.animScaleX as number) / scaleUnit;
                    part.realScaleY = (part.animScaleY as number) / scaleUnit;
                    break;
                  case 9: // SCALE_X
                    // TBCML EXACT: change_scaled = change / self.scale_unit
                    // part.anim.scale_x = int(change_scaled * (part.scale_x or 0))
                    const changeScaledX = changeValue / scaleUnit;
                    part.animScaleX = Math.round(changeScaledX * (part.baseScaleX as number));
                    part.realScaleX = (part.animScaleX as number) / scaleUnit;
                    break;
                  case 10: // SCALE_Y
                    // TBCML EXACT: change_scaled = change / self.scale_unit
                    // part.anim.scale_y = int(change_scaled * (part.scale_y or 0))
                    const changeScaledY = changeValue / scaleUnit;
                    part.animScaleY = Math.round(changeScaledY * (part.baseScaleY as number));
                    part.realScaleY = (part.animScaleY as number) / scaleUnit;
                    break;
                  case 11: // ANGLE
                    part.animRotation = (part.baseRotation as number) + changeValue;
                    break;
                  case 12: // OPACITY
                    // Apply opacity change based on animation value
                    const changeAlpha = changeValue / alphaUnit;
                    part.animOpacity = Math.round(changeAlpha * (part.baseOpacity as number));
                    break;
                  case 13: // H_FLIP - 水平反転
                    part.hFlip = changeValue !== 0 ? -1 : 1;
                    break;
                  case 14: // V_FLIP - 垂直反転
                    part.vFlip = changeValue !== 0 ? -1 : 1;
                    break;
                  default:
                    // 未知の変更タイプは警告出力
                    break;
                }
              }
            }
            
            currentRow += keyframeCount;
          } else {
            currentRow++;
          }
        } else {
          currentRow++;
        }
      }
    }

    // Process parts like tbcml draw_frame -> draw_part pattern
    // Enhanced for Unit 003 dual structure (normal/attack parts)
    modelParts.forEach(part => {
      // Check tbcml drawing conditions: skip if parent_id < 0 or unit_id < 0
      // BUT: unitId >= 0 is valid (unitId 44 is normal for Unit044)
      if ((part.parentId as number) < 0 && (part.unitId as number) < 0) {
        return;
      }
      
      // Also skip if no sprite to render (cutId < 0) - structural parts only
      if ((part.animCutId as number) < 0) {
        return;
      }
      
      // Apply maanim visibility rules: parts with opacity = 0 should not be rendered
      if ((part.animOpacity as number) <= 0) {
        return; // Skip rendering of transparent parts
      }
      
      // Check parent opacity inheritance: if any parent is transparent, child should not be visible
      const isParentTransparent = (() => {
        let currentPart = part.parent as Record<string, unknown> | null;
        while (currentPart) {
          if ((currentPart.animOpacity as number) <= 0) {
            return true; // Parent is transparent
          }
          currentPart = currentPart.parent as Record<string, unknown> | null;
        }
        return false; // No transparent parents
      })();
      
      if (isParentTransparent) {
        return; // Skip rendering if any parent is transparent
      }
      
      // All part visibility is controlled by maanim opacity and default mamodel rules

      // Skip if part is hidden by user
      if (hiddenParts.has(part.id as number)) {
        return;
      }

      // Skip if sprite is hidden by user
      if (hiddenSprites.has(part.animCutId as number)) {
        return;
      }
      
      // Debug log for sprite duplication issue  
      if ((part.animCutId as number) === 0 && selectedAnimation === 'maanim03') {
        // デバッグ用チェックのみ
      }
      
      // Check if part should be rendered based on maanim rules
      const shouldRenderPart = (() => {
        // Check if part has animation control
        const hasAnimationControl = (() => {
          if (!animData || !Array.isArray(animData) || animData.length <= 3) return false;
          
          let currentRow = 3;
          while (currentRow < animData.length) {
            const groupHeader = animData[currentRow];
            if (Array.isArray(groupHeader) && groupHeader.length >= 2) {
              const [modelId] = groupHeader;
              if ((modelId as number) === (part.id as number)) {
                return true; // This part has animation control
              }
              currentRow++;
              
              // Skip keyframe data
              const keyframeCountRow = animData[currentRow];
              if (Array.isArray(keyframeCountRow)) {
                const keyframeCount = (keyframeCountRow as number[])[0] || 0;
                currentRow += 1 + keyframeCount;
              } else {
                currentRow++;
              }
            } else {
              currentRow++;
            }
          }
          return false;
        })();
        
        // Debug log for problematic parts
        if ((selectedAnimation === 'maanim03' && [2, 6, 7].includes(part.id as number)) || 
            (unitId === '000' && part.id === 2)) { // Unit 000の影パーツもログ出力
        }
        
        // If part has animation control, check if it's made transparent
        if (hasAnimationControl) {
          // Already handled by opacity check above
          return true;
        }
        
        // If no animation control, apply mamodel default visibility rules
        const shouldShowByDefault = (() => {
          // mamodel rule: Parts with valid cutId and unitId should be visible by default
          // unless explicitly hidden by maanim
          
          // Check if part has valid sprite and unit definitions in mamodel
          const hasValidSprite = (part.animCutId as number) >= 0;
          const hasValidUnit = (part.unitId as number) >= 0;
          
          // Basic structural parts (defined in mamodel) should be visible
          if (hasValidSprite && hasValidUnit) {
            return true; // Show parts that are properly defined in mamodel
          }
          
          // Structural-only parts (parent nodes without sprites) are not visible
          if ((part.animCutId as number) < 0) {
            return false; // Hide structural parts without sprites
          }
          
          return false; // Default: hide undefined parts
        })();
        
        if ((selectedAnimation === 'maanim03' && [2, 6, 7].includes(part.id as number)) ||
            (unitId === '000' && part.id === 2)) {
        }
        
        return shouldShowByDefault;
      })();
      
      if (!shouldRenderPart) {
        return; // Skip rendering parts that shouldn't be visible
      }
      
      // Check for valid sprites
      const totalRectangles = Array.isArray(imgCutData[3]) ? (imgCutData[3] as number[])[0] : 0;
      if ((part.animCutId as number) >= 0 && ((part.animCutId as number) >= totalRectangles || ((part.animCutId as number) + 4) >= imgCutData.length)) {
        return;
      }
      
      // Handle sprite info - use default values for invisible parts (cutId -1)
      let srcX, srcY, srcW, srcH;
      
      if ((part.animCutId as number) >= 0) {
        const spriteInfo = imgCutData[(part.animCutId as number) + 4];
        if (!spriteInfo || !Array.isArray(spriteInfo) || spriteInfo.length < 4) {
          return;
        }
        [srcX, srcY, srcW, srcH] = spriteInfo as number[];
      } else {
        // Use default values for invisible/structural parts
        srcX = 0;
        srcY = 0;
        srcW = 1;
        srcH = 1;
      }

      // Transform part exactly like tbcml draw_part: each part independently
      const initialMatrix = [0.1, 0.0, 0.0, 0.0, 0.1, 0.0];
      const baseX = 10.0;
      const baseY = 10.0;
      
      // Call transform independently for each part like tbcml
      const [matrix, scaleX, scaleY] = transformPart(part, initialMatrix, baseX, baseY, scaleUnit, angleUnit, intsData, modelParts);
      
      // Calculate scx_bx and scy_by like tbcml
      const scxBx = scaleX * baseX;
      const scyBy = scaleY * baseY;
      
      // Flip calculation with animation flip flags
      const flipX = (scaleX < 0 ? -1 : 1) * (part.hFlip as number);
      const flipY = (scaleY < 0 ? -1 : 1) * (part.vFlip as number);
      
      // Calculate pivot offset like tbcml
      const tPivX = (part.pivotX as number) * scxBx * flipX;
      const tPivY = (part.pivotY as number) * scyBy * flipY;
      
      // Matrix elements with flip applied like tbcml
      const m0 = matrix[0] * flipX;
      const m3 = matrix[3] * flipX;
      const m1 = matrix[1] * flipY;
      const m4 = matrix[4] * flipY;
      
      // Final position from matrix (m2, m5)
      const finalX = matrix[2];
      const finalY = matrix[5];
      
      // Sprite size calculation like tbcml
      const scW = srcW * scxBx;
      const scH = srcH * scyBy;
      
      // Validate values
      if (!isFinite(finalX) || !isFinite(finalY) || 
          !isFinite(srcX) || !isFinite(srcY) || !isFinite(srcW) || !isFinite(srcH) ||
          !isFinite(scW) || !isFinite(scH)) {
        return;
      }

      parts.push({
        id: part.id as number,
        spriteId: part.animCutId as number,
        x: finalX,
        y: finalY,
        scaleX: Math.abs(scxBx),
        scaleY: Math.abs(scyBy),
        rotation: ((part.animRotation as number) / angleUnit) * (Math.PI / 180),
        opacity: Math.max(0, Math.min(1, (part.animOpacity as number) / alphaUnit)),
        renderOrder: part.zDepth as number,
        srcX,
        srcY,
        srcW,
        srcH,
        pivotX: tPivX,
        pivotY: tPivY,
        flipX,
        flipY,
        hFlip: part.hFlip as number,
        vFlip: part.vFlip as number,
        matrix: { m0, m1, m3, m4 },
        scW,
        scH,
        glowEffect: (part.glow as number) === 1 // tbcml glow処理（黒い部分透明化）
      });
    });

    // Sort by render order (z-depth)
    parts.sort((a, b) => a.renderOrder - b.renderOrder);
    
    setSpriteParts(parts);

  }, [currentFrame, maModelData, imgCutData, animData, maxFrame, getChangeInValue, transformPart, getBaseSize, getRecursiveScale, hiddenParts, hiddenSprites, selectedAnimation, selectedForm, unitId]);


  // Animation playback
  useEffect(() => {
    if (!isPlaying || !animData || maxFrame === 0) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawFrame = Math.floor(elapsed / (1000 / frameRate));
      
      // BROWSER LOOP: All animations loop infinitely for better viewing experience
      const totalFrames = maxFrame + 1; // 0からmaxFrameまでの総フレーム数
      const currentAnimFrame = rawFrame % totalFrames;
      
      setCurrentFrame(currentAnimFrame);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, animData, maxFrame, onStop, frameRate, selectedAnimation]);

  // Reset frame when animation changes
  useEffect(() => {
    setCurrentFrame(0);
    startTimeRef.current = undefined;
  }, [selectedAnimation]);

  // エラー表示やローディング表示
  if (imageLoading) {
    return (
      <div className="space-y-2">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-1 font-mono flex items-center justify-center gap-2">
            <span className="text-xs text-blue-500">
              {unitId}-{['f', 'c', 's', 'u'].indexOf(selectedForm) + 1}
            </span>
            <span className="text-blue-500">
              {(formData?.name as string) || 'Unknown'}
            </span>
          </h3>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg font-mono">画像を読み込み中...</div>
        </div>
      </div>
    );
  }

  if (imageError) {
    return (
      <div className="space-y-2">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-1 font-mono flex items-center justify-center gap-2">
            <span className="text-xs text-blue-500">
              {unitId}-{['f', 'c', 's', 'u'].indexOf(selectedForm) + 1}
            </span>
            <span className="text-blue-500">
              {(formData?.name as string) || 'Unknown'}
            </span>
          </h3>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg font-mono text-red-500">{imageError}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1 font-mono flex items-center justify-center gap-2">
          <span className="text-xs text-blue-500">
            {unitId}-{['f', 'c', 's', 'u'].indexOf(selectedForm) + 1}
          </span>
          <span className="text-blue-500">
            {(formData?.name as string) || 'Unknown'}
          </span>
        </h3>
      </div>

      <div className="flex justify-center">
        {spriteImage ? (
          <AnimationRenderer
            spriteImage={spriteImage}
            spriteParts={spriteParts}
            canvasWidth={440}
            canvasHeight={500}
            backgroundColor="#22d3ee"
            viewScale={1.0}
            zoom={zoom}
            offsetX={offsetX}
            offsetY={offsetY}
            unitOffsetX={shadowOffset.x}
            unitOffsetY={shadowOffset.y}
            showBoundaries={showBoundaries || false}
            showPartPoints={showPartPoints}
            showSpritePoints={showSpritePoints}
            maModelData={maModelData}
          />
        ) : (
          <div className="w-[324px] h-[244px] border border-gray-300 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-600 font-mono">画像を読み込み中...</span>
          </div>
        )}
      </div>

      {/* View Controls */}
      <div className="bg-gray-50 p-2 rounded">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap font-mono">
              Zoom
            </label>
            <input
              type="number"
              step="0.1"
              value={zoom}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setZoom(value);
                }
              }}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 font-mono"
              placeholder="0.5"
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap font-mono">
              X
            </label>
            <input
              type="number"
              step="1"
              value={offsetX}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  setOffsetX(value);
                }
              }}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 font-mono"
              placeholder="0"
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap font-mono">
              Y
            </label>
            <input
              type="number"
              step="1"
              value={offsetY}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  setOffsetY(value);
                }
              }}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 font-mono"
              placeholder="150"
            />
          </div>
          <button
            onClick={() => {
              setZoom(0.5);
              setOffsetX(0);
              setOffsetY(150);
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 font-mono"
          >
            Reset
          </button>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1 text-sm font-medium text-gray-600 font-mono">
            <input
              type="checkbox"
              checked={showBoundaries || false}
              onChange={(e) => onShowBoundariesChange && onShowBoundariesChange(e.target.checked)}
              className="w-4 h-4"
            />
            Bounds
          </label>
        </div>
      </div>

      {/* Frame Control */}
      <div className="bg-gray-50 p-2 rounded">
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm font-medium text-gray-600 font-mono">
            Frame {String(currentFrame).padStart(3, '0')} / {String(maxFrame).padStart(3, '0')}
          </label>
          <div className="flex items-center gap-1">
            <label className="text-xs font-medium text-gray-600 font-mono">FPS</label>
            <select
              value={frameRate}
              onChange={(e) => setFrameRate(parseInt(e.target.value))}
              className="px-1 py-0 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600 font-mono"
            >
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
          max={maxFrame}
          value={currentFrame}
          onChange={(e) => setCurrentFrame(parseInt(e.target.value))}
          className="w-full"
          disabled={isPlaying}
        />
        
        {/* Parts List */}
        <div className="mt-2">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm font-medium text-gray-600 font-mono">
              Parts({(() => {
                const totalPartsCount = Array.isArray(maModelData?.[2]) ? maModelData[2][0] : 0;
                return totalPartsCount;
              })()}) | Sprites({(() => {
                const totalSpritesCount = (() => {
                  if (imgCutData && Array.isArray(imgCutData) && imgCutData.length > 3) {
                    return Array.isArray(imgCutData[3]) ? imgCutData[3][0] : 0;
                  }
                  return 0;
                })();
                return totalSpritesCount;
              })()})
            </label>
            <div className="flex gap-1">
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
                  const totalPartsCount = Array.isArray(maModelData?.[2]) ? maModelData[2][0] : 0;
                  // Part#000を除外してallPartIdsを作成
                  const allPartIds = Array.from({length: totalPartsCount}, (_, i) => i).filter(id => id !== 0);
                  const allSpriteIds = new Set<number>();
                  
                  // 全スプライトIDを収集
                  if (imgCutData && Array.isArray(imgCutData) && imgCutData.length > 3) {
                    const totalRectangles = Array.isArray(imgCutData[3]) ? imgCutData[3][0] : 0;
                    for (let i = 0; i < totalRectangles; i++) {
                      allSpriteIds.add(i);
                    }
                  }
                  
                  setHiddenParts(new Set(allPartIds));
                  setHiddenSprites(allSpriteIds);
                }}
                className="px-2 py-0 bg-gray-200 text-gray-700 rounded text-xxs hover:bg-gray-300 font-mono"
              >
                全解除
              </button>
              <label className="flex items-center gap-1 text-xs font-medium text-gray-600 font-mono">
                <input
                  type="checkbox"
                  checked={hideInactiveParts}
                  onChange={(e) => setHideInactiveParts(e.target.checked)}
                  className="w-3 h-3"
                />
                非アクティブパーツ非表示
              </label>
            </div>
          </div>
          <div className="text-xxxs text-gray-600 font-mono">
            {(() => {
              // すべてのパーツID（0からmodelPartsの最大まで）を取得
              const totalPartsCount = Array.isArray(maModelData?.[2]) ? maModelData[2][0] : 0;
              const allPartIds = Array.from({length: totalPartsCount}, (_, i) => i);
              
              // 座標フォーマット共通関数
              const formatCoordinate = (value: number): string => {
                const num = Math.round(value);
                return num.toString().padStart(4, ' ');
              };
              
              // mamodelからパーツごとのスプライトIDを取得
              const getPartSprites = (partId: number) => {
                // Part#0には絶対にスプライトをぶら下げない
                if (partId === 0) {
                  return [];
                }
                
                const sprites = new Set<number>();
                
                // そのパーツに関連するすべてのスプライトを取得
                // アニメーションデータから過去に使用されたすべてのスプライトを収集
                if (animData && Array.isArray(animData) && animData.length > 3) {
                  let currentRow = 3;
                  
                  while (currentRow < animData.length) {
                    const groupHeader = animData[currentRow];
                    if (Array.isArray(groupHeader) && groupHeader.length >= 5) {
                      const [modelId, modificationType] = groupHeader;
                      currentRow++;
                      
                      const keyframeCountRow = animData[currentRow];
                      if (Array.isArray(keyframeCountRow)) {
                        const keyframeCount = (keyframeCountRow as number[])[0] || 0;
                        currentRow++;
                        
                        // SPRITE modification (type 2) をチェック
                        if ((modelId as number) === partId && (modificationType as number) === 2) {
                          for (let i = 0; i < keyframeCount && currentRow + i < animData.length; i++) {
                            const keyframe = animData[currentRow + i];
                            if (Array.isArray(keyframe) && keyframe.length >= 4) {
                              const spriteId = (keyframe as number[])[1];
                              if (spriteId >= 0) {
                                sprites.add(spriteId);
                              }
                            }
                          }
                        }
                        
                        currentRow += keyframeCount;
                      } else {
                        currentRow++;
                      }
                    } else {
                      currentRow++;
                    }
                  }
                }
                
                // 現在表示中のスプライト
                const displayedSprite = spriteParts.find(sprite => sprite.id === partId);
                if (displayedSprite && displayedSprite.spriteId >= 0) {
                  sprites.add(displayedSprite.spriteId);
                }
                
                // mamodelからベーススプライトIDを取得（Part#0は除外）
                if (partId > 0 && maModelData && Array.isArray(maModelData) && maModelData.length > 3 + partId) {
                  const partData = maModelData[3 + partId];
                  if (Array.isArray(partData) && partData.length > 2) {
                    const baseCutId = partData[2] as number;
                    if (baseCutId >= 0) {
                      sprites.add(baseCutId);
                    }
                  }
                }
                
                return Array.from(sprites).sort((a, b) => a - b);
              };
              
              const handlePartToggle = (partId: number, checked: boolean) => {
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
                    newHiddenSprites.delete(singleSpriteId);
                    setHiddenSprites(newHiddenSprites);
                  }
                } else {
                  // チェックが外された場合、非表示リストに追加（隠す）
                  newHiddenParts.add(partId);
                  
                  // 子Spriteが一つだけの場合、自動でチェックを外す
                  const partSpriteIds = getPartSprites(partId);
                  if (partSpriteIds.length === 1) {
                    const singleSpriteId = partSpriteIds[0];
                    newHiddenSprites.add(singleSpriteId);
                    setHiddenSprites(newHiddenSprites);
                  }
                }
                setHiddenParts(newHiddenParts);
              };

              // 特定のSpriteがどの親Partに属しているかを逆引きする関数
              const getParentPartsForSprite = (spriteId: number): number[] => {
                const parentParts: number[] = [];
                const totalPartsCount = Array.isArray(maModelData?.[2]) ? maModelData[2][0] : 0;
                
                for (let partId = 0; partId < totalPartsCount; partId++) {
                  const partSpriteIds = getPartSprites(partId);
                  if (partSpriteIds.includes(spriteId)) {
                    parentParts.push(partId);
                  }
                }
                
                return parentParts;
              };

              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const handleSpriteToggle = (spriteId: number, checked: boolean, partId: number) => {
                const newHiddenSprites = new Set(hiddenSprites);
                const newHiddenParts = new Set(hiddenParts);
                
                if (checked) {
                  // チェックされた場合、非表示リストから削除（表示する）
                  newHiddenSprites.delete(spriteId);
                  
                  // このSpriteが属するすべての親Partをチェック
                  const parentParts = getParentPartsForSprite(spriteId);
                  parentParts.forEach(parentPartId => {
                    // 親Partが非表示の場合、自動的に表示する
                    if (hiddenParts.has(parentPartId)) {
                      newHiddenParts.delete(parentPartId);
                    }
                  });
                  
                  setHiddenParts(newHiddenParts);
                } else {
                  // チェックが外された場合、非表示リストに追加（隠す）
                  newHiddenSprites.add(spriteId);
                  
                  // このSpriteが属するすべての親Partをチェック
                  const parentParts = getParentPartsForSprite(spriteId);
                  parentParts.forEach(parentPartId => {
                    // 親Partの子Spriteがすべて非表示になったかチェック
                    const partSpriteIds = getPartSprites(parentPartId);
                    const allSpritesHidden = partSpriteIds.every(id => newHiddenSprites.has(id));
                    
                    // すべての子Spriteが非表示になった場合、親Partも非表示にする
                    if (allSpritesHidden && partSpriteIds.length > 0) {
                      newHiddenParts.add(parentPartId);
                    }
                  });
                  
                  setHiddenParts(newHiddenParts);
                }
                setHiddenSprites(newHiddenSprites);
              };

              const handlePointToggle = (partId: number, checked: boolean) => {
                const newShowPartPoints = new Set(showPartPoints);
                if (checked) {
                  newShowPartPoints.add(partId);
                } else {
                  newShowPartPoints.delete(partId);
                }
                setShowPartPoints(newShowPartPoints);
              };

              const handleSpritePointToggle = (partId: number, checked: boolean) => {
                const newShowSpritePoints = new Set(showSpritePoints);
                if (checked) {
                  newShowSpritePoints.add(partId);
                } else {
                  newShowSpritePoints.delete(partId);
                }
                setShowSpritePoints(newShowSpritePoints);
              };

              // Build hierarchical structure
              const buildPartHierarchy = () => {
                const rootParts: number[] = [];
                const childrenMap: { [parentId: number]: number[] } = {};
                
                // Build parent-child mapping
                allPartIds.forEach(partId => {
                  if (maModelData && Array.isArray(maModelData) && maModelData.length > 3 + partId) {
                    const partData = maModelData[3 + partId];
                    if (Array.isArray(partData) && partData.length > 0) {
                      const parentId = partData[0] as number;
                      if (parentId < 0) {
                        rootParts.push(partId);
                      } else {
                        if (!childrenMap[parentId]) {
                          childrenMap[parentId] = [];
                        }
                        childrenMap[parentId].push(partId);
                      }
                    }
                  }
                });
                
                return { rootParts, childrenMap };
              };
              
              const { rootParts, childrenMap } = buildPartHierarchy();
              
              // Render parts recursively with hierarchy
              const renderPartWithChildren = (partId: number, depth: number): React.ReactElement[] => {
                const partSpriteIds = getPartSprites(partId);
                const displayedSprite = spriteParts.find(sprite => sprite.id === partId);
                
                // Check if part is active (visible) based on rendering logic
                const isPartActive = (() => {
                  // Check if part meets basic rendering requirements
                  if (!maModelData || !Array.isArray(maModelData) || maModelData.length <= 3 + partId) {
                    return false;
                  }
                  
                  const partData = maModelData[3 + partId];
                  if (!Array.isArray(partData) || partData.length < 3) {
                    return false;
                  }
                  
                  const parentId = partData[0] as number;
                  const unitId = partData[1] as number;
                  const cutId = partData[2] as number;
                  
                  // Skip if parent_id < 0 and unit_id < 0 (tbcml rule)
                  if (parentId < 0 && unitId < 0) {
                    return false;
                  }
                  
                  // Skip if no sprite to render (cutId < 0) - structural parts only
                  if (cutId < 0) {
                    return false;
                  }
                  
                  // Check if this part or any parent is transparent
                  const isEffectivelyTransparent = (() => {
                    // Check transparency up the parent chain
                    let currentPartId = partId;
                    while (currentPartId >= 0) {
                      // Check if current part is made transparent by animation
                      const isCurrentTransparent = (() => {
                        if (!animData || !Array.isArray(animData) || animData.length <= 3) return false;
                        
                        let currentRow = 3;
                        while (currentRow < animData.length) {
                          const groupHeader = animData[currentRow];
                          if (Array.isArray(groupHeader) && groupHeader.length >= 2) {
                            const [modelId, modificationType] = groupHeader;
                            if ((modelId as number) === currentPartId && (modificationType as number) === 12) {
                              // This part has opacity control, check if it's set to 0
                              currentRow++;
                              const keyframeCountRow = animData[currentRow];
                              if (Array.isArray(keyframeCountRow)) {
                                const keyframeCount = (keyframeCountRow as number[])[0] || 0;
                                currentRow++;
                                
                                // Check keyframes for opacity 0
                                for (let i = 0; i < keyframeCount && currentRow + i < animData.length; i++) {
                                  const keyframe = animData[currentRow + i];
                                  if (Array.isArray(keyframe) && keyframe.length >= 2) {
                                    const opacityValue = (keyframe as number[])[1];
                                    if (opacityValue === 0) {
                                      return true; // Made transparent
                                    }
                                  }
                                }
                                return false;
                              }
                            }
                            currentRow++;
                            
                            // Skip keyframe data
                            const keyframeCountRow = animData[currentRow];
                            if (Array.isArray(keyframeCountRow)) {
                              const keyframeCount = (keyframeCountRow as number[])[0] || 0;
                              currentRow += 1 + keyframeCount;
                            } else {
                              currentRow++;
                            }
                          } else {
                            currentRow++;
                          }
                        }
                        return false;
                      })();
                      
                      if (isCurrentTransparent) {
                        return true;
                      }
                      
                      // Move to parent
                      if (currentPartId >= 0 && (3 + currentPartId) < maModelData.length) {
                        const currentPartData = maModelData[3 + currentPartId];
                        if (Array.isArray(currentPartData) && currentPartData.length > 0) {
                          const nextParentId = currentPartData[0] as number;
                          currentPartId = nextParentId >= 0 ? nextParentId : -1;
                        } else {
                          break;
                        }
                      } else {
                        break;
                      }
                    }
                    return false;
                  })();
                  
                  // Part is not active if it's effectively transparent
                  if (isEffectivelyTransparent) {
                    return false;
                  }
                  
                  // Check if it has valid sprite and unit for rendering
                  if (cutId >= 0 && unitId >= 0) {
                    return true;
                  }
                  
                  return false;
                })();
                
                // パーツの座標情報を取得（mamodelで定義された座標）
                const partCoordinates = (() => {
                  // 常にmamodelから基本座標を取得（X, Y, Z）
                  if (maModelData && Array.isArray(maModelData) && maModelData.length > 3 + partId) {
                    const partData = maModelData[3 + partId];
                    if (Array.isArray(partData) && partData.length > 5) {
                      const baseX = formatCoordinate(partData[4] as number);
                      const baseY = formatCoordinate(partData[5] as number);
                      const baseZ = formatCoordinate(partData[3] as number); // zDepth
                      return `(${baseX}, ${baseY}, ${baseZ})`;
                    }
                  }
                  return '(   ?,    ?,    ?)';
                })();
                
                // Get parent info for hierarchy display
                const getParentInfo = () => {
                  if (!maModelData || !Array.isArray(maModelData) || maModelData.length <= 3 + partId) {
                    return { parentId: -1, parentName: '' };
                  }
                  const partData = maModelData[3 + partId];
                  if (!Array.isArray(partData) || partData.length < 14) {
                    return { parentId: -1, parentName: '' };
                  }
                  const parentId = partData[0] as number;
                  // TYPE SAFETY: Ensure partName is always a string
                  const partNameRaw = partData[13];
                  const partName = typeof partNameRaw === 'string' ? partNameRaw : '';
                  return { parentId, parentName: partName };
                };
                
                const { parentName } = getParentInfo();
                
                // インデント計算
                const indentLevel = depth * 16; // 16pxずつインデント
                
                const results: React.ReactElement[] = [];
                
                // 非アクティブパーツ非表示設定が有効で、かつパーツが非アクティブの場合はスキップ
                // ただし、Part#000は常に表示
                if (hideInactiveParts && !isPartActive && partId !== 0) {
                  return results;
                }
                
                // Render current part
                const currentPartElement = (
                  <div key={`part-${partId}`} className={`py-0 my-0 ${!isPartActive ? 'opacity-50' : ''}`} style={{ paddingLeft: `${indentLevel}px` }}>
                    {/* パーツ（親） */}
                    <div className="py-0 my-0 flex items-center gap-1 font-mono text-xs">
                      <input
                        type="checkbox"
                        className="w-3 h-3"
                        checked={partId === 0 ? true : !hiddenParts.has(partId)}
                        onChange={(e) => handlePartToggle(partId, e.target.checked)}
                        disabled={partId === 0 || !isPartActive}
                      />
                      <span className="font-mono text-xs">
                        Part#{partId.toString().padStart(3, '0')} {parentName && typeof parentName === 'string' && !parentName.startsWith('"') && parentName}
                      </span>
                      <input
                        type="checkbox"
                        className="w-2 h-2"
                        checked={showPartPoints.has(partId)}
                        onChange={(e) => handlePointToggle(partId, e.target.checked)}
                        disabled={!isPartActive}
                      />
                      <span className="font-mono text-[10px] text-red-500">{partCoordinates}</span>
                    </div>
                    
                    {/* このパーツに関連するすべてのスプライト */}
                    {partSpriteIds.length > 0 && partSpriteIds.map((spriteId, spriteIndex) => {
                      const isDisplayed = displayedSprite && displayedSprite.spriteId === spriteId;
                      
                      // Simplified sprite usage check
                      const isSpriteUsed = isPartActive && (isDisplayed || (() => {
                        // Check if this is the base sprite defined in mamodel
                        if (maModelData && Array.isArray(maModelData) && maModelData.length > 3 + partId) {
                          const partData = maModelData[3 + partId];
                          if (Array.isArray(partData) && partData.length > 2) {
                            const baseCutId = partData[2] as number;
                            return baseCutId === spriteId;
                          }
                        }
                        return false;
                      })());
                      
                      return (
                        <div key={`sprite-${partId}-${spriteIndex}`} 
                             className={`py-0 my-0 flex items-center gap-1 font-mono text-xs ${isDisplayed ? 'text-blue-500' : ''} ${!isSpriteUsed ? 'opacity-30' : ''}`}
                             style={{ paddingLeft: `${indentLevel + 16}px` }}>
                          <input
                            type="checkbox"
                            className="w-3 h-3"
                            checked={!hiddenSprites.has(spriteId)}
                            onChange={(e) => handleSpriteToggle(spriteId, e.target.checked, partId)}
                            disabled={!isSpriteUsed}
                          />
                          <span className="font-mono text-xs">Sprite#{spriteId.toString().padStart(3, '0')}{isDisplayed ? ' ●' : ' ○'}</span>
                          <input
                            type="checkbox"
                            className="w-2 h-2"
                            checked={showSpritePoints.has(partId)}
                            onChange={(e) => handleSpritePointToggle(partId, e.target.checked)}
                            disabled={!isSpriteUsed || !isDisplayed}
                          />
                          {isDisplayed && displayedSprite && (
                            <span className="font-mono text-[10px] text-amber-500">
                              ({formatCoordinate(displayedSprite.x)}, {formatCoordinate(displayedSprite.y)}, {formatCoordinate(displayedSprite.renderOrder)})
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
                
                results.push(currentPartElement);
                
                // Render children recursively
                const children = childrenMap[partId] || [];
                children.forEach(childId => {
                  results.push(...renderPartWithChildren(childId, depth + 1));
                });
                
                return results;
              };
              
              // Render all root parts and their children
              return rootParts.flatMap(rootPartId => renderPartWithChildren(rootPartId, 0));
            })()}
          </div>
        </div>
      </div>

      {/* Debug Section */}
      <div className="bg-gray-50 p-2 rounded">
        <label className="block text-sm font-medium text-gray-600 mb-1 font-mono">
          Debug
        </label>
        <div className="text-xxs text-gray-600 font-mono space-y-2">
          <details>
            <summary className="cursor-pointer"><strong>imgcut</strong></summary>
            <div className="mt-1 p-0">
              <pre className="whitespace-pre-wrap text-xxxs">{imgCutData ? (() => {
                // データをクリーンアップしてからJSON化
                const cleanData = JSON.parse(JSON.stringify(imgCutData, (_, value) => {
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
          </details>
          <details>
            <summary className="cursor-pointer"><strong>mamodel</strong></summary>
            <div className="mt-1 p-0">
              <pre className="whitespace-pre-wrap text-xxxs">{maModelData ? (() => {
                // データをクリーンアップしてからJSON化
                const cleanData = JSON.parse(JSON.stringify(maModelData, (_, value) => {
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
          </details>
          <details>
            <summary className="cursor-pointer"><strong>maanim</strong></summary>
            <div className="mt-1 p-0">
              <pre className="whitespace-pre-wrap text-xxxs">{animData ? (() => {
                // データをクリーンアップしてからJSON化
                const cleanData = JSON.parse(JSON.stringify(animData, (_, value) => {
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
          </details>
        </div>
      </div>

    </div>
  );
}