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
  offsetY = 0
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
    const gridSpacing = 100 * zoom;
    
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
      }

      ctx.restore();
    });
  }, [spriteImage, spriteParts, canvasWidth, canvasHeight, backgroundColor, viewScale, zoom, offsetX, offsetY]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className="border border-gray-300 bg-gray-100"
    />
  );
}