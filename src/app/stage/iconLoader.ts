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
    // 拡張子なしでアクセス
    const response = await fetch(`/data/enemy/${paddedId}`);
    if (response.ok) {
      const base64Data = await response.text();
      const trimmedData = base64Data.trim();
      
      // キャッシュに保存
      iconCache.set(paddedId, trimmedData);
      return trimmedData;
    }
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