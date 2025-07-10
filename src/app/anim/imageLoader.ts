'use client';

export interface UnitImageCache {
  [unitId: string]: string[];
}

// グローバルキャッシュ
const imageCache: UnitImageCache = {};

export async function loadUnitImages(unitId: string): Promise<string[]> {
  // キャッシュチェック
  if (imageCache[unitId]) {
    return imageCache[unitId];
  }

  try {
    const response = await fetch(`/data/anim/${unitId}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const text = await response.text();
    const images = text.trim().split('\n').filter(line => line.length > 0);
    
    // キャッシュに保存
    imageCache[unitId] = images;
    return images;
  } catch (error) {
    console.error(`Failed to load images for unit ${unitId}:`, error);
    return [];
  }
}

export function getFormImage(images: string[], formKey: string): string | null {
  const formIndex = ['f', 'c', 's', 'u'].indexOf(formKey);
  return formIndex >= 0 && formIndex < images.length ? images[formIndex] : null;
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