'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import AnimationRenderer from './AnimationRenderer';

interface AnimationViewerProps {
  animationData: Record<string, unknown>;
  selectedForm: string;
  selectedAnimation: string;
  isPlaying: boolean;
  onStop: () => void;
}

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
  // Additional tbcml-style rendering data
  pivotX?: number;
  pivotY?: number;
  scaledWidth?: number;
  scaledHeight?: number;
  flipX?: number;
  flipY?: number;
  matrix?: {
    m0: number;
    m1: number;
    m3: number;
    m4: number;
  };
  scW?: number;
  scH?: number;
}

export default function AnimationViewer({
  animationData,
  selectedForm,
  selectedAnimation,
  isPlaying,
  onStop
}: AnimationViewerProps) {
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [debugInfo, setDebugInfo] = useState<Record<string, unknown> | null>(null);
  const [spriteImage, setSpriteImage] = useState<HTMLImageElement | null>(null);
  const [spriteParts, setSpriteParts] = useState<SpritePart[]>([]);
  const [maxFrame, setMaxFrame] = useState(0);
  const [zoom, setZoom] = useState(0.6);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(150);

  const formData = animationData?.[selectedForm] as Record<string, unknown> | undefined;
  const animData = formData?.[selectedAnimation] as unknown[] | undefined;
  const imgCutData = formData?.imgcut as unknown[] | undefined;
  const maModelData = formData?.mamodel as unknown[] | undefined;
  const imageBase64 = formData?.image_base64 as string | undefined;

  // Load sprite image
  useEffect(() => {
    if (!imageBase64) return;

    const img = new Image();
    img.onload = () => {
      setSpriteImage(img);
    };
    img.src = `data:image/png;base64,${imageBase64}`;
  }, [imageBase64]);

  // Calculate max frame from metadata
  useEffect(() => {
    if (!animData || !Array.isArray(animData)) return;

    let maxFrameTime = 20; // Default fallback
    
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
        currentRow++;
        
        // Next row should be the keyframe count
        if (currentRow < animData.length && Array.isArray(animData[currentRow])) {
          const keyframeCount = (animData[currentRow] as number[])[0] || 0;
          currentRow++;
          
          // Read keyframes: [frame, change_in_value, ease_mode, ease_power]
          for (let i = 0; i < keyframeCount && currentRow < animData.length; i++) {
            const keyframe = animData[currentRow];
            if (Array.isArray(keyframe) && keyframe.length >= 4) {
              const frameTime = (keyframe as number[])[0];
              if (frameTime > maxFrameTime) {
                maxFrameTime = frameTime;
              }
            }
            currentRow++;
          }
        }
      } else {
        currentRow++;
      }
    }
    
    setMaxFrame(maxFrameTime);
  }, [animData]);

  // Animation constants matching tbcml implementation
  const DEFAULT_SCALE_UNIT = 1000;
  const DEFAULT_ANGLE_UNIT = 360; // 360 degrees (not 3600)
  const DEFAULT_ALPHA_UNIT = 1000;

  // Easing function from tbcml
  const ease = (mode: number, progress: number): number => {
    switch (mode) {
      case 0: // Linear
        return progress;
      case 1: // Instant
        return progress >= 1 ? 1 : 0;
      case 2: // Exponential
        return progress * progress;
      case 3: // Polynomial (simplified)
        return progress * progress * (3 - 2 * progress);
      default:
        return progress;
    }
  };

  // Get interpolated value for current frame from tbcml
  const getChangeInValue = useCallback((keyframes: unknown[], currentFrame: number): number => {
    if (!keyframes || keyframes.length === 0) return 0;

    // Find surrounding keyframes
    let prevFrame: unknown = null;
    let nextFrame: unknown = null;

    for (const kf of keyframes) {
      const frameTime = (kf as number[])[0];
      if (frameTime <= currentFrame) {
        prevFrame = kf;
      } else if (frameTime > currentFrame && !nextFrame) {
        nextFrame = kf;
        break;
      }
    }

    if (!prevFrame) return 0;
    if (!nextFrame) return (prevFrame as number[])[1] || 0;

    // Calculate interpolation
    const startTime = (prevFrame as number[])[0];
    const endTime = (nextFrame as number[])[0];
    const startValue = (prevFrame as number[])[1] || 0;
    const endValue = (nextFrame as number[])[1] || 0;
    const easingMode = (prevFrame as number[])[2] || 0;

    if (startTime === endTime) return startValue;

    const progress = (currentFrame - startTime) / (endTime - startTime);
    const easedProgress = ease(easingMode, Math.max(0, Math.min(1, progress)));
    
    return startValue + (endValue - startValue) * easedProgress;
  }, []);

  // get_base_size function like tbcml - MUST be defined first
  const getBaseSize = useCallback((part: Record<string, unknown>, parent: boolean, intPartId: number, scaleUnit: number, modelParts: Record<string, unknown>[]): [number, number] => {
    if (!part) {
      throw new Error('Part cannot be null');
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
    
    // Find the referenced part
    const part2 = modelParts.find(p => (p.id as number) === intPartId);
    if (!part2) {
      return [part.animX as number, part.animY as number]; // Already normalized
    }
    
    const [sizeX, sizeY] = getBaseSize(part2, true, intPartId, scaleUnit, modelParts);
    const resultX = sizeX * ((part.animX as number) / scaleUnit);
    const resultY = sizeY * ((part.animY as number) / scaleUnit);
    
    return [resultX * signumX, resultY * signumY];
  }, []);

  // Get recursive scale calculation like tbcml
  const getRecursiveScale: (part: Record<string, unknown>, currentScale: [number, number]) => [number, number] = useCallback((part, currentScale) => {
    if (!part) return currentScale;
    
    // FIX: Use pre-calculated real scales to avoid double normalization
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
      // tbcml uses raw coordinates directly: t_pos_x = part.anim.x * siz_x
      const tPosX = (part.animX as number) * sizX;
      const tPosY = (part.animY as number) * sizY;
      m2 += (m0 * tPosX) + (m1 * tPosY);
      m5 += (m3 * tPosX) + (m4 * tPosY);
    } else {
      // Root part positioning - special tbcml logic for part_id == 0
      if (intsData.length > 0) {
        const ints = intsData[0];
        if (Array.isArray(ints) && ints.length >= 3) {
          const intPartId = ints[0] as number;
          const intX = ints[1] as number;
          const intY = ints[2] as number;
          
          const [p0X, p0Y] = getBaseSize(part, false, intPartId, scaleUnit, modelParts);
          const shiX = intX * p0X;
          const shiY = intY * p0Y;
          const p3X = shiX * sizerX;
          const p3Y = shiY * sizerY;
          
          const px = (part.pivotX as number) * partScaleX * sizerX;
          const py = (part.pivotY as number) * partScaleY * sizerY;
          const x = px - p3X;
          const y = py - p3Y;
          
          m2 += (m0 * x) + (m1 * y);
          m5 += (m3 * x) + (m4 * y);
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
    console.log(`Total parts count from data: ${totalPartsCount}, maModelData length: ${maModelData.length}`);
    
    // Get units from mamodel data - they come after the parts
    const unitsRowIndex = 3 + totalPartsCount;
    let scaleUnit = DEFAULT_SCALE_UNIT;
    let angleUnit = DEFAULT_ANGLE_UNIT;
    let alphaUnit = DEFAULT_ALPHA_UNIT;
    
    if (unitsRowIndex < maModelData.length) {
      const unitsRow = maModelData[unitsRowIndex];
      if (Array.isArray(unitsRow) && unitsRow.length >= 3) {
        scaleUnit = (unitsRow as number[])[0] || DEFAULT_SCALE_UNIT;
        angleUnit = (unitsRow as number[])[1] || DEFAULT_ANGLE_UNIT;
        alphaUnit = (unitsRow as number[])[2] || DEFAULT_ALPHA_UNIT;
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
    console.log(`Processing ${totalPartsCount} parts from maModelData`);
    for (let i = 0; i < totalPartsCount && (i + 3) < maModelData.length; i++) {
      const partData = maModelData[i + 3];
      
      if (Array.isArray(partData) && partData.length >= 13) {
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
          baseScaleX: partData[8] as number,
          baseScaleY: partData[9] as number,
          baseRotation: partData[10] as number,
          baseOpacity: partData[11] as number,
          glow: partData[12] as number,
          name: (partData[13] as string) || `Part ${i}`,
          // Pre-calculate real scale values like tbcml
          realScaleX: (partData[8] as number) !== 0 ? (partData[8] as number) / scaleUnit : 0,
          realScaleY: (partData[9] as number) !== 0 ? (partData[9] as number) / scaleUnit : 0
        };
        
        modelParts.push(part);
      } else {
        console.log(`Part ${i} skipped: invalid data format, length=${Array.isArray(partData) ? partData.length : 'unknown'}`);
      }
    }
    console.log(`Successfully parsed ${modelParts.length} of ${totalPartsCount} parts`);


    // Create parent lookup
    const partLookup: { [id: number]: Record<string, unknown> } = {};
    modelParts.forEach(part => {
      partLookup[part.id as number] = part;
      // Set parent reference
      if ((part.parentId as number) >= 0 && partLookup[part.parentId as number]) {
        part.parent = partLookup[part.parentId as number];
      }
    });


    // Initialize animation values for each part (like tbcml set_part_vals)
    modelParts.forEach(part => {
      // Start with base model values as integers like tbcml
      part.animX = part.baseX;
      part.animY = part.baseY;
      part.animRotation = part.baseRotation;
      part.animOpacity = part.baseOpacity;
      part.animScaleX = part.baseScaleX;
      part.animScaleY = part.baseScaleY;
      part.animCutId = part.cutId;
      // CRITICAL FIX: Pre-calculate real scales like tbcml
      part.realScaleX = (part.animScaleX as number) !== 0 ? (part.animScaleX as number) / scaleUnit : 0;
      part.realScaleY = (part.animScaleY as number) !== 0 ? (part.animScaleY as number) / scaleUnit : 0;
      // Real scale calculation happens during transform
      
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
          const [modelId, modificationType] = groupHeader;
          currentRow++;
          
          // Get keyframe count
          const keyframeCountRow = animData[currentRow];
          if (Array.isArray(keyframeCountRow)) {
            const keyframeCount = (keyframeCountRow as number[])[0] || 0;
            currentRow++;
            
            // Check if this keyframe group targets a valid part
            if ((modelId as number) >= 0 && (modelId as number) < modelParts.length) {
              const part = modelParts[modelId as number];
              
              // Collect all keyframes for this group
              const keyframes: unknown[] = [];
              for (let i = 0; i < keyframeCount && currentRow + i < animData.length; i++) {
                const keyframe = animData[currentRow + i];
                if (Array.isArray(keyframe) && keyframe.length >= 4) {
                  keyframes.push(keyframe);
                }
              }
              
              // Get interpolated value for current frame
              const changeValue = getChangeInValue(keyframes, currentFrame);
              
              // Apply the animation change based on modification type (tbcml apply_change logic)
              if (changeValue !== null) {
                switch (modificationType as number) {
                  case 2: // SPRITE
                    part.animCutId = changeValue;
                    break;
                  case 4: // POS_X
                    part.animX = (part.baseX as number) + changeValue;
                    break;
                  case 5: // POS_Y
                    part.animY = (part.baseY as number) + changeValue;
                    break;
                  case 9: // SCALE_X
                    const changeScaledX = changeValue / scaleUnit;
                    part.animScaleX = Math.round(changeScaledX * (part.baseScaleX as number));
                    // Update real scale after animation change
                    part.realScaleX = (part.animScaleX as number) !== 0 ? (part.animScaleX as number) / scaleUnit : 0;
                    break;
                  case 10: // SCALE_Y
                    const changeScaledY = changeValue / scaleUnit;
                    part.animScaleY = Math.round(changeScaledY * (part.baseScaleY as number));
                    // Update real scale after animation change
                    part.realScaleY = (part.animScaleY as number) !== 0 ? (part.animScaleY as number) / scaleUnit : 0;
                    break;
                  case 11: // ANGLE
                    part.animRotation = (part.baseRotation as number) + changeValue;
                    break;
                  case 12: // OPACITY
                    const changeAlpha = changeValue / alphaUnit;
                    part.animOpacity = Math.round(changeAlpha * (part.baseOpacity as number));
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
    console.log('=== ANIMATION PROCESSING START ===');
    console.log('Processing', modelParts.length, 'parts');
    console.log('Scale/Angle/Alpha units:', { scaleUnit, angleUnit, alphaUnit });
    
    const coordinateLog: {
      partId: unknown;
      name: unknown;
      basePos: { x: unknown; y: unknown };
      animPos: { x: unknown; y: unknown };
      normalizedPos: { x: unknown; y: unknown };
      finalPos: { x: unknown; y: unknown };
      matrix: unknown;
      scales: { scaleX: unknown; scaleY: unknown };
      pivot: { x: unknown; y: unknown };
      parentId: unknown;
    }[] = [];
    modelParts.forEach(part => {
      // Check tbcml drawing conditions: skip if parent_id < 0 or unit_id < 0
      // BUT: unitId >= 0 is valid (unitId 44 is normal for Unit044)
      if ((part.parentId as number) < 0 && (part.unitId as number) < 0) {
        if ((part.id as number) < 5) console.log(`Part ${part.id} (${part.name}) skipped: parentId=${part.parentId}, unitId=${part.unitId}`);
        return;
      }
      
      // Also skip if no sprite to render (cutId < 0) - structural parts only
      if ((part.animCutId as number) < 0) {
        if ((part.id as number) < 5) console.log(`Part ${part.id} (${part.name}) skipped: no sprite (cutId=${part.animCutId})`);
        return;
      }
      
      // Check for valid sprites
      const totalRectangles = Array.isArray(imgCutData[3]) ? (imgCutData[3] as number[])[0] : 0;
      if ((part.animCutId as number) >= 0 && ((part.animCutId as number) >= totalRectangles || ((part.animCutId as number) + 4) >= imgCutData.length)) {
        if ((part.id as number) < 10) console.log(`Part ${part.id} (${part.name}) skipped: invalid cutId ${part.animCutId}, total=${totalRectangles}`);
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
      
      // Debug logging for first few parts
      if ((part.id as number) < 3) {
        console.log(`Processing part ${part.id}: animX=${part.animX}, animY=${part.animY}, scaleUnit=${scaleUnit}`);
      }
      
      // Call transform independently for each part like tbcml
      const [matrix, scaleX, scaleY] = transformPart(part, initialMatrix, baseX, baseY, scaleUnit, angleUnit, intsData, modelParts);
      
      // Calculate scx_bx and scy_by like tbcml
      const scxBx = scaleX * baseX;
      const scyBy = scaleY * baseY;
      
      // Flip calculation
      const flipX = scaleX < 0 ? -1 : 1;
      const flipY = scaleY < 0 ? -1 : 1;
      
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
      
      // Record coordinates for all visible parts
      coordinateLog.push({
        partId: part.id,
        name: part.name || `Part ${part.id}`,
        basePos: { x: part.baseX, y: part.baseY },
        animPos: { x: part.animX, y: part.animY },
        normalizedPos: { x: (part.animX as number) / scaleUnit, y: (part.animY as number) / scaleUnit },
        finalPos: { x: finalX, y: finalY },
        matrix: matrix,
        scales: { scaleX, scaleY },
        pivot: { x: part.pivotX, y: part.pivotY },
        parentId: part.parentId
      });
      
      if ((part.id as number) < 10) {
        console.log(`Part ${part.id} (${part.name}) transform:`, {
          basePos: { x: part.baseX, y: part.baseY },
          animPos: { x: part.animX, y: part.animY },
          normalizedPos: { x: (part.animX as number) / scaleUnit, y: (part.animY as number) / scaleUnit },
          finalPos: { x: finalX, y: finalY },
          matrix: matrix,
          scales: { scaleX, scaleY },
          parent: part.parentId
        });
      }
      
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
        matrix: { m0, m1, m3, m4 },
        scW,
        scH
      });
    });

    // Sort by render order (z-depth)
    parts.sort((a, b) => a.renderOrder - b.renderOrder);
    
    // Calculate coordinate spread for comparison
    if (coordinateLog.length > 0) {
      const xCoords = coordinateLog.map(p => p.finalPos.x as number);
      const yCoords = coordinateLog.map(p => p.finalPos.y as number);
      
      const minX = Math.min(...xCoords);
      const maxX = Math.max(...xCoords);
      const minY = Math.min(...yCoords);
      const maxY = Math.max(...yCoords);
      
      const spreadX = maxX - minX;
      const spreadY = maxY - minY;
      const totalSpread = Math.sqrt(spreadX * spreadX + spreadY * spreadY);
      
      console.log('=== COORDINATE ANALYSIS ===');
      console.log('X range:', { min: minX, max: maxX, spread: spreadX });
      console.log('Y range:', { min: minY, max: maxY, spread: spreadY });
      console.log('Total spread:', totalSpread);
      console.log('Visible parts:', coordinateLog.length);
      console.log('All coordinates:', coordinateLog);
      console.log('=== END ANALYSIS ===');
    }
    
    setSpriteParts(parts);

    // Update debug info
    setDebugInfo({
      frame: currentFrame,
      totalParts: parts.length,
      modelPartsCount: totalPartsCount,
      spriteRectangles: Array.isArray(imgCutData[3]) ? imgCutData[3][0] : 0,
      maxFrame,
      scaleUnit,
      angleUnit,
      alphaUnit
    });
  }, [currentFrame, maModelData, imgCutData, animData, maxFrame, getChangeInValue, transformPart, getBaseSize, getRecursiveScale]);


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
      const frameRate = 30; // 30 FPS
      const currentAnimFrame = Math.floor(elapsed / (1000 / frameRate));
      
      if (currentAnimFrame <= maxFrame) {
        setCurrentFrame(currentAnimFrame);
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation finished - loop back to beginning
        startTimeRef.current = timestamp; // Reset start time for seamless loop
        setCurrentFrame(0);
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, animData, maxFrame, onStop]);

  // Reset frame when animation changes
  useEffect(() => {
    setCurrentFrame(0);
    startTimeRef.current = undefined;
  }, [selectedAnimation]);

  return (
    <div className="space-y-2">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1 text-blue-500 font-mono">
          {(formData?.name as string) || 'Unknown'}
        </h3>
        {debugInfo && (
          <div className="text-sm text-gray-600 font-mono">
            Frame={debugInfo.frame as number}/{debugInfo.maxFrame as number} Parts={debugInfo.totalParts as number}
            <br />
            Scale={debugInfo.scaleUnit as number} Angle={debugInfo.angleUnit as number} Alpha={debugInfo.alphaUnit as number}
            <br />
            Zoom={zoom.toFixed(2)} Offset=({offsetX}, {offsetY})
          </div>
        )}
      </div>

      <div className="flex justify-center">
        {spriteImage ? (
          <AnimationRenderer
            spriteImage={spriteImage}
            spriteParts={spriteParts}
            canvasWidth={390}
            canvasHeight={480}
            viewScale={1.0}
            zoom={zoom}
            offsetX={offsetX}
            offsetY={offsetY}
          />
        ) : (
          <div className="w-[324px] h-[244px] border border-gray-300 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-600 font-mono">画像を読み込み中...</span>
          </div>
        )}
      </div>

      {/* View Controls */}
      <div className="bg-gray-50 p-2 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1 font-mono">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-mono"
              placeholder="0.6"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1 font-mono">
              X Offset
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-mono"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1 font-mono">
              Y Offset
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-mono"
              placeholder="150"
            />
          </div>
        </div>
        <div className="mt-1">
          <button
            onClick={() => {
              setZoom(0.6);
              setOffsetX(0);
              setOffsetY(150);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-mono"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Frame Control */}
      <div className="bg-gray-50 p-2 rounded">
        <label className="block text-sm font-medium text-gray-600 mb-1 font-mono">
          Frame {currentFrame} / {maxFrame}
        </label>
        <input
          type="range"
          min="0"
          max={maxFrame}
          value={currentFrame}
          onChange={(e) => setCurrentFrame(parseInt(e.target.value))}
          className="w-full"
          disabled={isPlaying}
        />
      </div>


      {/* Debug Panel */}
      <details className="bg-gray-50 p-2 rounded">
        <summary className="cursor-pointer font-medium text-gray-600 font-mono">Debug Info</summary>
        <div className="mt-1 space-y-1 text-gray-600 font-mono">
          <div>
            <strong>Form </strong> {selectedForm} ({(formData?.name as string) || 'Unknown'})
          </div>
          <div>
            <strong>Animation </strong> {selectedAnimation}
          </div>
          <div>
            <strong>Sprites Count</strong> {(debugInfo?.spriteRectangles as number) || 0}
          </div>
          <div>
            <strong>Parts Count</strong> {(debugInfo?.modelPartsCount as number) || 0}
          </div>
          <div>
            <strong>Displays Count</strong> {(debugInfo?.totalParts as number) || 0}
          </div>
          <div>
            <strong>Max Frames</strong> {maxFrame}
          </div>
          <div>
            <strong>Image Exists?</strong> {imageBase64 ? 'Y' : 'N'}
          </div>
        </div>
      </details>
    </div>
  );
}