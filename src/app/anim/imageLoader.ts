'use client';

export interface UnitImageCache {
  [unitId: string]: string[];
}

// グローバルキャッシュ
const imageCache: UnitImageCache = {};

export async function loadUnitImages(unitId: string): Promise<string[]> {
  if (imageCache[unitId]) {
    return imageCache[unitId];
  }

  try {
    // Next.jsのbasePathを考慮したパスを生成
    // GitHub Pagesデプロイ環境ではhostname判定を使用
    const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'nekomut.github.io';
    const basePath = isGitHubPages ? '/bcnext' : '';
    
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
      throw new ImageLoadError(
        `All URLs failed to load images for unit ${unitId}. Last error: ${lastError?.message || 'unknown'}`,
        unitId,
        lastError || undefined
      );
    }
    
    const text = await response.text();
    
    if (!text || text.trim().length === 0) {
      throw new ImageLoadError(
        `Empty image data for unit ${unitId}`,
        unitId
      );
    }
    
    const images = text.trim().split('\n').filter(line => {
      return line.length > 0 && (line.startsWith('data:image/') || line.length > 100);
    });
    
    if (images.length === 0) {
      throw new ImageLoadError(
        `No valid image data found for unit ${unitId}`,
        unitId
      );
    }
    
    imageCache[unitId] = images;
    return images;
    
  } catch (error) {
    if (error instanceof ImageLoadError) {
      throw error;
    }
    
    const loadError = new ImageLoadError(
      `Failed to load images for unit ${unitId}: ${(error as Error).message}`,
      unitId,
      error as Error
    );
    
    console.error(loadError.message, loadError);
    throw loadError;
  }
}

export function getFormImage(images: string[], formKey: string): string | null {
  const formIndex = ['f', 'c', 's', 'u'].indexOf(formKey);
  
  if (formIndex < 0) {
    return null;
  }
  
  if (formIndex >= images.length) {
    return null;
  }
  
  const imageData = images[formIndex];
  
  if (!imageData || (!imageData.startsWith('data:image/') && imageData.length < 100)) {
    return null;
  }
  
  return imageData;
}

export function clearImageCache(unitId?: string): void {
  if (unitId) {
    delete imageCache[unitId];
  } else {
    Object.keys(imageCache).forEach(key => delete imageCache[key]);
  }
}

// デバッグ用
export function getImageCacheInfo(): { unitCount: number, totalImages: number } {
  const unitCount = Object.keys(imageCache).length;
  const totalImages = Object.values(imageCache).reduce((sum, images) => sum + images.length, 0);
  return { unitCount, totalImages };
}

export class ImageLoadError extends Error {
  constructor(
    message: string,
    public unitId: string,
    public cause?: Error
  ) {
    super(message);
    this.name = 'ImageLoadError';
  }
}

// デバッグ用のコンソール出力（開発環境のみ）
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as Window & { animDebug?: object }).animDebug = {
    getImageCache: () => imageCache,
    getCacheInfo: getImageCacheInfo,
    clearCache: clearImageCache,
    loadUnit: loadUnitImages
  };
}