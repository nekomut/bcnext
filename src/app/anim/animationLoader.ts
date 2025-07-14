'use client';

export interface AnimationDataCache {
  [unitId: string]: unknown;
}

// グローバルキャッシュ（メモリ効率のため）
const animationCache: AnimationDataCache = {};

// Load animation data for a specific unit with memory optimization
export const loadAnimationData = async (unitId: string) => {
  // キャッシュチェック
  if (animationCache[unitId]) {
    return animationCache[unitId];
  }

  try {
    // Try to load JSON first (more memory efficient) - 将来の最適化用
    // これは現在利用できませんが、将来的にJSONファイルに変換する際に使用
    try {
      const response = await fetch(`/data/anim/${unitId}.json`);
      if (response.ok) {
        const data = await response.json();
        animationCache[unitId] = data;
        return data;
      }
    } catch {
      // Fallback to TSX import if JSON not available
    }
    
    // 動的インポートでアニメーションデータを読み込む（メモリ効率のため）
    const animationModule = await import(`../../data/anim/${unitId}.tsx`);
    const data = animationModule[`animationData_${unitId}`] || animationModule.default;
    
    // キャッシュに保存
    if (data) {
      animationCache[unitId] = data;
    }
    
    return data;
  } catch (error) {
    console.warn(`Failed to load animation data for unit ${unitId}:`, error);
    return null;
  }
};

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