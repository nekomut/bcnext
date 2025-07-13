'use client';

import { useEffect, useRef } from 'react';

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

interface AnimationRendererProps {
  spriteImage: HTMLImageElement;
  spriteParts: SpritePart[];
  canvasWidth: number;
  canvasHeight: number;
  backgroundColor?: string;
  viewScale?: number;
  zoom?: number;
  offsetX?: number;
  offsetY?: number;
  showBoundaries?: boolean;
  showRefPoints?: boolean;
  showPartPoints?: Set<number>;
  maModelData?: unknown[];
}

export default function AnimationRenderer({
  spriteImage,
  spriteParts,
  canvasWidth,
  canvasHeight,
  backgroundColor = '#f0f0f0',
  viewScale = 1.0,
  zoom = 1.0,
  offsetX = 0,
  offsetY = 0,
  showBoundaries = false,
  showRefPoints = false,
  showPartPoints = new Set(),
  maModelData
}: AnimationRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw coordinate reference lines (center origin)
    
    // Draw auxiliary grid lines (100px interval, gray-500 0.2px)
    ctx.strokeStyle = '#6B7280';
    ctx.lineWidth = 0.2;
    ctx.setLineDash([]);
    
    const centerX = canvas.width / 2 + offsetX;
    const centerY = canvas.height / 2 + offsetY;
    const gridSpacing = 100; // Fixed 100px spacing regardless of zoom
    
    // Draw vertical grid lines
    ctx.beginPath();
    // Lines to the right of center
    for (let x = centerX + gridSpacing; x < canvas.width; x += gridSpacing) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    // Lines to the left of center
    for (let x = centerX - gridSpacing; x > 0; x -= gridSpacing) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    ctx.stroke();
    
    // Draw horizontal grid lines
    ctx.beginPath();
    // Lines below center
    for (let y = centerY + gridSpacing; y < canvas.height; y += gridSpacing) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    // Lines above center
    for (let y = centerY - gridSpacing; y > 0; y -= gridSpacing) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
    
    // Draw X=0 vertical line (gray-500) - center line
    ctx.strokeStyle = '#6B7280';
    ctx.lineWidth = 0.4;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();
    
    // Draw Y=0 horizontal line (gray-500) - center line
    ctx.strokeStyle = '#6B7280';
    ctx.lineWidth = 0.4;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();
    
    // Reset line style
    ctx.setLineDash([]);
    ctx.lineWidth = 1;

    // Return early if no sprite image is loaded or no parts to render
    if (!spriteImage || !spriteImage.complete || spriteParts.length === 0) return;

    // Parts are already sorted by render order in AnimationViewer
    const sortedParts = spriteParts;

    // Calculate overall bounding box for all visible parts
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const visibleParts = sortedParts.filter(part => part.spriteId >= 0 && part.opacity > 0);
    
    // Calculate each part's screen coordinates for bounding box
    visibleParts.forEach((part) => {
      if (part.matrix) {
        // Use tbcml-style matrix transformation
        const baseX = (part.x * viewScale) + (canvas.width / 2);
        const baseY = (part.y * viewScale) + (canvas.height / 2);
        const screenX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
        const screenY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
        
        const pivotX = (part.pivotX || 0) / viewScale;
        const pivotY = (part.pivotY || 0) / viewScale;
        const drawX = -pivotX;
        const drawY = -pivotY;
        const drawWidth = part.scW ? Math.abs(part.scW) / viewScale : part.srcW;
        const drawHeight = part.scH ? Math.abs(part.scH) / viewScale : part.srcH;
        
        // Transform corners to screen coordinates
        const corners = [
          { x: drawX, y: drawY },
          { x: drawX + drawWidth, y: drawY },
          { x: drawX + drawWidth, y: drawY + drawHeight },
          { x: drawX, y: drawY + drawHeight }
        ];
        
        corners.forEach(corner => {
          const transformedX = part.matrix!.m0 * viewScale * zoom * corner.x + 
                             part.matrix!.m1 * viewScale * zoom * corner.y + screenX;
          const transformedY = part.matrix!.m3 * viewScale * zoom * corner.x + 
                             part.matrix!.m4 * viewScale * zoom * corner.y + screenY;
          
          minX = Math.min(minX, transformedX);
          minY = Math.min(minY, transformedY);
          maxX = Math.max(maxX, transformedX);
          maxY = Math.max(maxY, transformedY);
        });
      } else {
        // Use simple transformation
        const baseX = (part.x * viewScale) + (canvas.width / 2);
        const baseY = (part.y * viewScale) + (canvas.height / 2);
        const displayX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
        const displayY = (baseY - canvas.height / 2) * zoom + (canvas.width / 2) + offsetY;
        
        const pivotX = part.pivotX || 0;
        const pivotY = part.pivotY || 0;
        
        const boundaryX = displayX - (pivotX * part.scaleX * viewScale * zoom);
        const boundaryY = displayY - (pivotY * part.scaleY * viewScale * zoom);
        const boundaryW = part.srcW * part.scaleX * viewScale * zoom;
        const boundaryH = part.srcH * part.scaleY * viewScale * zoom;
        
        minX = Math.min(minX, boundaryX);
        minY = Math.min(minY, boundaryY);
        maxX = Math.max(maxX, boundaryX + boundaryW);
        maxY = Math.max(maxY, boundaryY + boundaryH);
      }
    });

    // Render each sprite part using tbcml-style matrix transformation
    sortedParts.forEach((part) => {
      // Skip only completely invalid sprites, but allow structural parts (spriteId -1)
      // Structural parts may not have visible sprites but affect coordinate calculations
      if (part.spriteId < -1) return; // Skip only truly invalid sprites

      ctx.save();

      // Apply opacity
      ctx.globalAlpha = Math.max(0, Math.min(1, part.opacity));
      
      // Skip drawing invisible parts (spriteId -1) but still process for coordinate calculations
      const isVisible = part.spriteId >= 0 && part.opacity > 0;
      

      // Apply tbcml-style matrix transformation if available
      if (part.matrix) {
        // Apply the matrix transformation like tbcml: setTransform(m0, m3, m1, m4, matrix[2], matrix[5])
        // Convert position to screen coordinates (center origin), then apply zoom
        const baseX = (part.x * viewScale) + (canvas.width / 2);
        const baseY = (part.y * viewScale) + (canvas.height / 2);
        const screenX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
        const screenY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
        
        // Apply the transform matrix with view scaling and zoom
        ctx.setTransform(
          part.matrix.m0 * viewScale * zoom,  // a: horizontal scaling
          part.matrix.m3 * viewScale * zoom,  // b: horizontal skewing
          part.matrix.m1 * viewScale * zoom,  // c: vertical skewing
          part.matrix.m4 * viewScale * zoom,  // d: vertical scaling
          screenX,                            // e: horizontal translation
          screenY                             // f: vertical translation
        );
        
        // Calculate pivot offset like tbcml draw_img
        // Note: pivot values are already scaled by tbcml calculations
        const pivotX = (part.pivotX || 0) / viewScale; // Only adjust for view scale, not zoom
        const pivotY = (part.pivotY || 0) / viewScale;
        
        // Draw with pivot offset like tbcml: drawImage at (-pivot_x, -pivot_y, abs(size[0]), abs(size[1]))
        const drawX = -pivotX;
        const drawY = -pivotY;
        const drawWidth = part.scW ? Math.abs(part.scW) / viewScale : part.srcW;
        const drawHeight = part.scH ? Math.abs(part.scH) / viewScale : part.srcH;
        
        
        // Only draw if visible
        if (isVisible) {
          ctx.drawImage(
            spriteImage,
            part.srcX, part.srcY, part.srcW, part.srcH,
            drawX, drawY, drawWidth, drawHeight
          );
        }
        
        // Draw sprite boundary outside of transform context
        if (isVisible && showBoundaries) {
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity matrix
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 0.4;
          ctx.setLineDash([]);
          
          // Calculate boundary rectangle in screen coordinates
          const boundaryX = screenX + (drawX * part.matrix.m0 * viewScale * zoom);
          const boundaryY = screenY + (drawY * part.matrix.m4 * viewScale * zoom);
          const boundaryW = drawWidth * Math.abs(part.matrix.m0) * viewScale * zoom;
          const boundaryH = drawHeight * Math.abs(part.matrix.m4) * viewScale * zoom;
          
          ctx.strokeRect(boundaryX, boundaryY, boundaryW, boundaryH);
          ctx.restore();
        }
      } else {
        // Fallback to simple transformation (center origin), then apply zoom
        const baseX = (part.x * viewScale) + (canvas.width / 2);
        const baseY = (part.y * viewScale) + (canvas.height / 2);
        const displayX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
        const displayY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
        
        ctx.translate(displayX, displayY);
        ctx.scale(part.scaleX * viewScale * zoom, part.scaleY * viewScale * zoom);
        
        const pivotX = part.pivotX || 0;
        const pivotY = part.pivotY || 0;
        
        // Only draw if visible
        if (isVisible) {
          ctx.drawImage(
            spriteImage,
            part.srcX, part.srcY, part.srcW, part.srcH,
            -pivotX, -pivotY, part.srcW, part.srcH
          );
        }
        
        // Draw sprite boundary outside of transform context
        if (isVisible && showBoundaries) {
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity matrix
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 0.4;
          ctx.setLineDash([]);
          
          // Calculate boundary rectangle in screen coordinates for simple transform
          const boundaryX = displayX - (pivotX * part.scaleX * viewScale * zoom);
          const boundaryY = displayY - (pivotY * part.scaleY * viewScale * zoom);
          const boundaryW = part.srcW * part.scaleX * viewScale * zoom;
          const boundaryH = part.srcH * part.scaleY * viewScale * zoom;
          
          ctx.strokeRect(boundaryX, boundaryY, boundaryW, boundaryH);
          ctx.restore();
        }
      }

      ctx.restore();
    });

    // Draw overall bounding box for all parts (red-500 0.6px)
    if (showBoundaries && visibleParts.length > 0 && isFinite(minX) && isFinite(minY) && isFinite(maxX) && isFinite(maxY)) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity matrix
      ctx.strokeStyle = '#ef4444'; // red-500
      ctx.lineWidth = 0.6;
      ctx.setLineDash([]);
      
      const boundingWidth = maxX - minX;
      const boundingHeight = maxY - minY;
      
      ctx.strokeRect(minX, minY, boundingWidth, boundingHeight);
      ctx.restore();
    }

    // Draw reference points for all parts (red-500 3px) - global toggle
    if (showRefPoints) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity matrix
      ctx.fillStyle = '#ef4444'; // red-500
      ctx.font = '10px monospace';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      sortedParts.forEach((part) => {
        if (part.spriteId >= 0 && part.opacity > 0) {
          let referenceX, referenceY;
          
          if (part.matrix) {
            // Use tbcml-style matrix transformation
            const baseX = (part.x * viewScale) + (canvas.width / 2);
            const baseY = (part.y * viewScale) + (canvas.height / 2);
            referenceX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
            referenceY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
          } else {
            // Use simple transformation
            const baseX = (part.x * viewScale) + (canvas.width / 2);
            const baseY = (part.y * viewScale) + (canvas.height / 2);
            referenceX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
            referenceY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
          }
          
          // Draw 3px reference point
          ctx.fillRect(referenceX - 1.5, referenceY - 1.5, 3, 3);
          
          // Draw coordinate text
          const coordText = `(${Math.round(part.x)},${Math.round(part.y)})`;
          ctx.fillText(coordText, referenceX + 2, referenceY + 2);
        }
      });
      
      ctx.restore();
    }

    // Draw individual part points (blue-500 4px) - per-part toggle
    // パーツの表示・非表示に関係なく、チェックが入っていれば表示
    if (showPartPoints.size > 0) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity matrix
      ctx.fillStyle = '#3b82f6'; // blue-500
      ctx.font = '10px monospace';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      // すべてのパーツ（表示・非表示問わず）をチェック
      showPartPoints.forEach((partId) => {
        // そのパーツIDのspritePartを探す（表示されている場合）
        const part = sortedParts.find(p => p.id === partId);
        
        if (part) {
          // 表示されているパーツの場合
          let referenceX, referenceY;
          
          if (part.matrix) {
            // Use tbcml-style matrix transformation
            const baseX = (part.x * viewScale) + (canvas.width / 2);
            const baseY = (part.y * viewScale) + (canvas.height / 2);
            referenceX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
            referenceY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
          } else {
            // Use simple transformation
            const baseX = (part.x * viewScale) + (canvas.width / 2);
            const baseY = (part.y * viewScale) + (canvas.height / 2);
            referenceX = (baseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
            referenceY = (baseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
          }
          
          // Draw 4px part point (slightly larger than global points)
          ctx.fillRect(referenceX - 2, referenceY - 2, 4, 4);
          
          // Draw Part ID and coordinate text
          const partText = `P${part.id}:(${Math.round(part.x)},${Math.round(part.y)})`;
          ctx.fillText(partText, referenceX + 3, referenceY + 3);
        } else {
          // パーツが非表示の場合でも、maModelDataから基本座標を取得して表示
          let baseX = 0, baseY = 0;
          
          if (maModelData && Array.isArray(maModelData) && maModelData.length > 3 + partId) {
            const partData = maModelData[3 + partId];
            if (Array.isArray(partData) && partData.length > 5) {
              baseX = partData[4] as number;
              baseY = partData[5] as number;
            }
          }
          
          const screenBaseX = (baseX * viewScale) + (canvas.width / 2);
          const screenBaseY = (baseY * viewScale) + (canvas.height / 2);
          const referenceX = (screenBaseX - canvas.width / 2) * zoom + (canvas.width / 2) + offsetX;
          const referenceY = (screenBaseY - canvas.height / 2) * zoom + (canvas.height / 2) + offsetY;
          
          // Draw 4px part point (grayed out for hidden parts)
          ctx.fillStyle = '#9ca3af'; // gray-400 for hidden parts
          ctx.fillRect(referenceX - 2, referenceY - 2, 4, 4);
          ctx.fillStyle = '#3b82f6'; // restore blue color
          
          // Draw Part ID and coordinate text for hidden part
          const partText = `P${partId}:(${baseX},${baseY})`;
          ctx.fillText(partText, referenceX + 3, referenceY + 3);
        }
      });
      
      ctx.restore();
    }
  }, [spriteImage, spriteParts, canvasWidth, canvasHeight, backgroundColor, viewScale, zoom, offsetX, offsetY, showBoundaries, showRefPoints, showPartPoints, maModelData]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className="border border-gray-300 bg-gray-100"
    />
  );
}