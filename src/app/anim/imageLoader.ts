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
    // 静的サイト生成環境では絶対パスを試す
    let url = `/data/anim/${unitId}`;
    
    // デプロイ環境で相対パスでの fetch が失敗する場合があるため、複数のパスを試行
    const urlsToTry = [
      `/data/anim/${unitId}`,
      `./data/anim/${unitId}`,
      `${typeof window !== 'undefined' && window.location.origin || ''}/data/anim/${unitId}`
    ].filter(Boolean);
    
    let response: Response | null = null;
    let lastError: Error | null = null;
    
    for (const tryUrl of urlsToTry) {
      try {
        response = await fetch(tryUrl);
        if (response.ok) {
          url = tryUrl; // 成功したURLを記録
          break;
        }
      } catch (fetchError) {
        lastError = fetchError as Error;
        continue;
      }
    }
    
    if (!response || !response.ok) {
      const errorMsg = `All URLs failed to load. Last status: ${response?.status || 'network error'}`;
      throw new Error(errorMsg);
    }
    
    const text = await response.text();
    const images = text.trim().split('\n').filter(line => line.length > 0);
    
    // キャッシュに保存
    imageCache[unitId] = images;
    return images;
  } catch (error) {
    return [];
  }
}

export function getFormImage(images: string[], formKey: string): string | null {
  const formIndex = ['f', 'c', 's', 'u'].indexOf(formKey);
  const result = formIndex >= 0 && formIndex < images.length ? images[formIndex] : null;
  
  return result;
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