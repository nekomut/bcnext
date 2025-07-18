// Icon management utility for unit icons
// Handles dynamic loading of unit icons from public/data/unit/ directory

export class IconManager {
  private static iconCache = new Map<string, string[]>();
  private static loadingPromises = new Map<string, Promise<string[]>>();

  /**
   * ユニットのアイコンデータを動的に読み込む
   * @param unitId ユニットID（000形式）
   * @returns アイコンのbase64データ配列（1つの要素につき1フォーム）
   */
  static async loadUnitIcons(unitId: string): Promise<string[]> {
    // 既にキャッシュされている場合はそれを返す
    if (this.iconCache.has(unitId)) {
      return this.iconCache.get(unitId)!;
    }

    // 既に読み込み処理中の場合はその Promise を返す
    if (this.loadingPromises.has(unitId)) {
      return this.loadingPromises.get(unitId)!;
    }

    // 新しい読み込み処理を開始
    const loadingPromise = this.fetchUnitIcons(unitId);
    this.loadingPromises.set(unitId, loadingPromise);

    try {
      const icons = await loadingPromise;
      this.iconCache.set(unitId, icons);
      return icons;
    } finally {
      this.loadingPromises.delete(unitId);
    }
  }

  /**
   * 特定フォームのアイコンを取得
   * @param unitId ユニットID（000形式）
   * @param formId フォームID（0ベース）
   * @returns アイコンのbase64データ
   */
  static async getFormIcon(unitId: string, formId: number): Promise<string> {
    const icons = await this.loadUnitIcons(unitId);
    return icons[formId] || '';
  }

  /**
   * ユニットアイコンデータをサーバーから取得
   * @param unitId ユニットID（000形式）
   * @returns アイコンのbase64データ配列
   */
  private static async fetchUnitIcons(unitId: string): Promise<string[]> {
    try {
      // Next.jsのbasePathを考慮したパスを生成
      // GitHub Pagesデプロイ環境ではhostname判定を使用
      const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'nekomut.github.io';
      const basePath = isGitHubPages ? '/bcnext' : '';
      
      // デプロイ環境で相対パスでの fetch が失敗する場合があるため、複数のパスを試行
      const urlsToTry = [
        `${basePath}/data/unit/${unitId}`,
        `./data/unit/${unitId}`,
        `${typeof window !== 'undefined' && window.location.origin || ''}${basePath}/data/unit/${unitId}`
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
        const errorMsg = `All URLs failed to load unit icons ${unitId}. Last status: ${response?.status || 'network error'}`;
        console.warn(errorMsg);
        return [];
      }

      const text = await response.text();
      // 1行1アイコンの形式で分割（空行も含める）
      const lines = text.split('\n');
      
      // 最後の行が空の場合は除去
      if (lines.length > 0 && lines[lines.length - 1] === '') {
        lines.pop();
      }

      return lines;
    } catch (error) {
      console.error(`Error loading icons for unit ${unitId}:`, error);
      return [];
    }
  }

  /**
   * キャッシュをクリア（開発時やメモリ節約のため）
   */
  static clearCache(): void {
    this.iconCache.clear();
    this.loadingPromises.clear();
  }

  /**
   * キャッシュされているユニット数を取得（デバッグ用）
   */
  static getCacheSize(): number {
    return this.iconCache.size;
  }

  /**
   * ユニットIDを000形式にフォーマット
   * @param unitId ユニットID（数値または文字列）
   * @returns 000形式のユニットID
   */
  static formatUnitId(unitId: number | string): string {
    return unitId.toString().padStart(3, '0');
  }

  /**
   * キャッシュ情報を取得する（デバッグ用）
   */
  static getCacheInfo(): { unitCount: number, cachedUnits: string[] } {
    const cachedUnits = Array.from(this.iconCache.keys());
    return { unitCount: this.iconCache.size, cachedUnits };
  }
}

// デバッグ用のコンソール出力（開発環境のみ）
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as Window & { unitIconDebug?: object }).unitIconDebug = {
    getIconCache: () => IconManager['iconCache'],
    getCacheInfo: () => IconManager.getCacheInfo(),
    clearCache: () => IconManager.clearCache(),
    loadUnit: (unitId: string) => IconManager.loadUnitIcons(unitId),
    getFormIcon: (unitId: string, formId: number) => IconManager.getFormIcon(unitId, formId)
  };
}

export default IconManager;