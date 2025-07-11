// Enemy Icon Loader for Stage Display
// Dynamically loads enemy icons from /data/enemy/{enemyId} files

const iconCache = new Map<string, string>();

/**
 * 敵アイコンを動的に読み込む
 * @param enemyId 敵ID（例: "001", "045"）
 * @returns base64エンコードされたアイコンデータ、またはnull
 */
export async function loadEnemyIcon(enemyId: string): Promise<string | null> {
  const paddedId = enemyId.padStart(3, '0');
  
  // キャッシュから取得
  if (iconCache.has(paddedId)) {
    return iconCache.get(paddedId)!;
  }
  
  try {
    // デプロイ環境で相対パスでの fetch が失敗する場合があるため、複数のパスを試行
    const urlsToTry = [
      `/data/enemy/${paddedId}`,
      `./data/enemy/${paddedId}`,
      `${typeof window !== 'undefined' && window.location.origin || ''}/data/enemy/${paddedId}`
    ].filter(Boolean);
    
    let response: Response | null = null;
    
    for (const tryUrl of urlsToTry) {
      try {
        response = await fetch(tryUrl);
        if (response.ok) {
          break;
        }
      } catch {
        continue;
      }
    }
    
    if (!response || !response.ok) {
      const errorMsg = `All URLs failed to load enemy icon ${paddedId}. Last status: ${response?.status || 'network error'}`;
      console.warn(errorMsg);
      return null;
    }
    
    const base64Data = await response.text();
    const trimmedData = base64Data.trim();
    
    // キャッシュに保存
    iconCache.set(paddedId, trimmedData);
    return trimmedData;
  } catch (error) {
    console.warn(`Failed to load icon for enemy ${enemyId}:`, error);
  }
  
  return null;
}

/**
 * 複数の敵アイコンを事前に読み込む（パフォーマンス最適化用）
 * @param enemyIds 敵IDの配列
 */
export async function preloadEnemyIcons(enemyIds: string[]): Promise<void> {
  const promises = enemyIds.map(id => loadEnemyIcon(id));
  await Promise.allSettled(promises);
}

/**
 * アイコンキャッシュをクリアする
 */
export function clearIconCache(): void {
  iconCache.clear();
}

/**
 * キャッシュサイズを取得する（デバッグ用）
 */
export function getIconCacheSize(): number {
  return iconCache.size;
}

/**
 * キャッシュ情報を取得する（デバッグ用）
 */
export function getIconCacheInfo(): { iconCount: number, cachedIds: string[] } {
  const cachedIds = Array.from(iconCache.keys());
  return { iconCount: iconCache.size, cachedIds };
}

export class EnemyIconLoadError extends Error {
  constructor(
    message: string,
    public enemyId: string,
    public cause?: Error
  ) {
    super(message);
    this.name = 'EnemyIconLoadError';
  }
}

// デバッグ用のコンソール出力（開発環境のみ）
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as Window & { enemyIconDebug?: object }).enemyIconDebug = {
    getIconCache: () => iconCache,
    getCacheInfo: getIconCacheInfo,
    clearCache: clearIconCache,
    loadIcon: loadEnemyIcon,
    preloadIcons: preloadEnemyIcons
  };
}