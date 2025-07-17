'use client';

export interface AnimationDataCache {
  [unitId: string]: unknown;
}

// グローバルキャッシュ
const animationCache: AnimationDataCache = {};

export const loadAnimationData = async (unitId: string) => {
  // キャッシュチェック
  if (animationCache[unitId]) {
    return animationCache[unitId];
  }

  try {
    // Next.jsのbasePathを考慮したパスを生成
    const basePath = process.env.NODE_ENV === 'production' ? '/bcnext' : '';
    
    // JSON専用読み込み（複数URLフォールバック）
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
      throw new AnimationLoadError(
        `All URLs failed to load animation data for unit ${unitId}. Last error: ${lastError?.message || 'unknown'}`,
        unitId,
        lastError || undefined
      );
    }
    
    const data = await response.json();
    
    // データ検証
    if (!data || typeof data !== 'object') {
      throw new AnimationLoadError(
        `Invalid animation data format for unit ${unitId}`,
        unitId
      );
    }
    
    // キャッシュに保存
    animationCache[unitId] = data;
    return data;
    
  } catch (error) {
    if (error instanceof AnimationLoadError) {
      throw error;
    }
    
    const loadError = new AnimationLoadError(
      `Failed to load animation data for unit ${unitId}: ${(error as Error).message}`,
      unitId,
      error as Error
    );
    
    console.error(loadError.message, loadError);
    throw loadError;
  }
};

export class AnimationLoadError extends Error {
  constructor(
    message: string,
    public unitId: string,
    public cause?: Error
  ) {
    super(message);
    this.name = 'AnimationLoadError';
  }
}

// メモリ管理のためのキャッシュクリア機能
export const clearAnimationCache = (unitId?: string): void => {
  if (unitId) {
    delete animationCache[unitId];
  } else {
    // 全てのキャッシュをクリア
    Object.keys(animationCache).forEach(key => delete animationCache[key]);
  }
};

// キャッシュ情報の取得（デバッグ用）
export const getAnimationCacheInfo = (): { unitCount: number } => {
  return { unitCount: Object.keys(animationCache).length };
};

// デバッグ用のコンソール出力（開発環境のみ）
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as Window & { animDataDebug?: object }).animDataDebug = {
    getCache: () => animationCache,
    getCacheInfo: getAnimationCacheInfo,
    clearCache: clearAnimationCache,
    loadUnit: loadAnimationData
  };
}