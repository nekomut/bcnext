// Stage data management utility for stage JSON files and enemy icons
// Handles dynamic loading from public/data/stage/ and public/data/enemy/ directories

import type { StageData, StageIndexData } from './types';

export class StageDataManager {
  private static stageCache = new Map<string, StageData>();
  private static enemyIconCache = new Map<string, string>();
  private static indexCache: StageIndexData | null = null;
  private static loadingPromises = new Map<string, Promise<StageData | StageIndexData | string | null>>();

  /**
   * ステージデータを動的に読み込む
   * @param eventId イベントID（数値）
   * @returns ステージJSONデータ
   */
  static async loadStageData(eventId: number): Promise<StageData | null> {
    const key = `e${eventId}`;
    
    // 既にキャッシュされている場合はそれを返す
    if (this.stageCache.has(key)) {
      return this.stageCache.get(key)!;
    }

    // 既に読み込み処理中の場合はその Promise を返す
    if (this.loadingPromises.has(key)) {
      return this.loadingPromises.get(key)! as Promise<StageData | null>;
    }

    // 新しい読み込み処理を開始
    const loadingPromise = this.fetchStageData(eventId);
    this.loadingPromises.set(key, loadingPromise);

    try {
      const data = await loadingPromise;
      if (data) {
        this.stageCache.set(key, data);
      }
      return data;
    } finally {
      this.loadingPromises.delete(key);
    }
  }

  /**
   * ステージインデックスを読み込む
   * @returns インデックスJSONデータ
   */
  static async loadStageIndex(): Promise<StageIndexData> {
    if (this.indexCache) {
      return this.indexCache;
    }

    if (this.loadingPromises.has('index')) {
      return this.loadingPromises.get('index')! as Promise<StageIndexData>;
    }

    const loadingPromise = this.fetchStageIndex();
    this.loadingPromises.set('index', loadingPromise);

    try {
      const data = await loadingPromise;
      this.indexCache = data;
      return data;
    } finally {
      this.loadingPromises.delete('index');
    }
  }

  /**
   * 敵アイコンを動的に読み込む
   * @param enemyId 敵ID（文字列）
   * @returns アイコンのbase64データ
   */
  static async loadEnemyIcon(enemyId: string): Promise<string> {
    // 既にキャッシュされている場合はそれを返す
    if (this.enemyIconCache.has(enemyId)) {
      return this.enemyIconCache.get(enemyId)!;
    }

    // 既に読み込み処理中の場合はその Promise を返す
    const iconKey = `enemy-${enemyId}`;
    if (this.loadingPromises.has(iconKey)) {
      return this.loadingPromises.get(iconKey)! as Promise<string>;
    }

    // 新しい読み込み処理を開始
    const loadingPromise = this.fetchEnemyIcon(enemyId);
    this.loadingPromises.set(iconKey, loadingPromise);

    try {
      const icon = await loadingPromise;
      this.enemyIconCache.set(enemyId, icon);
      return icon;
    } finally {
      this.loadingPromises.delete(iconKey);
    }
  }

  /**
   * ステージデータをサーバーから取得
   * @param eventId イベントID
   * @returns ステージJSONデータ
   */
  private static async fetchStageData(eventId: number): Promise<StageData | null> {
    try {
      // GitHub Pages環境での確実なbasePath取得
      const getBasePath = (): string => {
        if (typeof window === 'undefined') return '';
        
        // GitHub Pages環境での確実な判定
        const isGitHubPages = window.location.hostname === 'nekomut.github.io' || 
                             window.location.pathname.startsWith('/bcnext');
        
        return isGitHubPages ? '/bcnext' : '';
      };
      
      const basePath = getBasePath();
      
      // GitHub Pages環境に最適化されたURL構築
      const urlsToTry = [
        `${basePath}/data/stage/e${eventId}.json`,
        `${window.location.origin}${basePath}/data/stage/e${eventId}.json`
      ];
      
      let response: Response | null = null;
      let lastError: Error | null = null;
      
      for (const tryUrl of urlsToTry) {
        try {
          console.log(`Attempting to fetch: ${tryUrl}`);
          response = await fetch(tryUrl);
          if (response.ok) {
            console.log(`Successfully loaded from: ${tryUrl}`);
            break;
          } else {
            console.warn(`Failed to load from ${tryUrl}: ${response.status}`);
          }
        } catch (error) {
          lastError = error as Error;
          console.warn(`Error fetching from ${tryUrl}:`, error);
          continue;
        }
      }
      
      if (!response || !response.ok) {
        const errorMsg = `All URLs failed to load stage data e${eventId}. Last status: ${response?.status || 'network error'}`;
        console.error(errorMsg, lastError);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(`Error loading stage data e${eventId}:`, error);
      return null;
    }
  }

  /**
   * ステージインデックスをサーバーから取得
   * @returns インデックスJSONデータ
   */
  private static async fetchStageIndex(): Promise<StageIndexData> {
    try {
      // GitHub Pages環境での確実なbasePath取得
      const getBasePath = (): string => {
        if (typeof window === 'undefined') return '';
        
        // GitHub Pages環境での確実な判定
        const isGitHubPages = window.location.hostname === 'nekomut.github.io' || 
                             window.location.pathname.startsWith('/bcnext');
        
        return isGitHubPages ? '/bcnext' : '';
      };
      
      const basePath = getBasePath();
      
      // GitHub Pages環境に最適化されたURL構築
      const urlsToTry = [
        `${basePath}/data/stage/index.json`,
        `${window.location.origin}${basePath}/data/stage/index.json`
      ];
      
      let response: Response | null = null;
      let lastError: Error | null = null;
      
      for (const tryUrl of urlsToTry) {
        try {
          console.log(`Attempting to fetch index: ${tryUrl}`);
          response = await fetch(tryUrl);
          if (response.ok) {
            console.log(`Successfully loaded index from: ${tryUrl}`);
            break;
          } else {
            console.warn(`Failed to load index from ${tryUrl}: ${response.status}`);
          }
        } catch (error) {
          lastError = error as Error;
          console.warn(`Error fetching index from ${tryUrl}:`, error);
          continue;
        }
      }
      
      if (!response || !response.ok) {
        const errorMsg = `All URLs failed to load stage index. Last status: ${response?.status || 'network error'}`;
        console.error(errorMsg, lastError);
        return { events: [], totalEvents: 0, totalStages: 0 };
      }

      return await response.json();
    } catch (error) {
      console.error('Error loading stage index:', error);
      return { events: [], totalEvents: 0, totalStages: 0 };
    }
  }

  /**
   * 敵アイコンをサーバーから取得
   * @param enemyId 敵ID
   * @returns アイコンのbase64データ
   */
  private static async fetchEnemyIcon(enemyId: string): Promise<string> {
    try {
      // GitHub Pages環境での確実なbasePath取得
      const getBasePath = (): string => {
        if (typeof window === 'undefined') return '';
        
        // GitHub Pages環境での確実な判定
        const isGitHubPages = window.location.hostname === 'nekomut.github.io' || 
                             window.location.pathname.startsWith('/bcnext');
        
        return isGitHubPages ? '/bcnext' : '';
      };
      
      const basePath = getBasePath();
      
      // GitHub Pages環境に最適化されたURL構築
      const urlsToTry = [
        `${basePath}/data/enemy/${enemyId}`,
        `${window.location.origin}${basePath}/data/enemy/${enemyId}`
      ];
      
      let response: Response | null = null;
      let lastError: Error | null = null;
      
      for (const tryUrl of urlsToTry) {
        try {
          response = await fetch(tryUrl);
          if (response.ok) {
            break;
          }
        } catch (error) {
          lastError = error as Error;
          continue;
        }
      }
      
      if (!response || !response.ok) {
        console.warn(`Failed to load enemy icon ${enemyId}. Status: ${response?.status || 'network error'}`, lastError);
        return '';
      }

      const text = await response.text();
      return text.trim(); // base64データの前後の空白を除去
    } catch (error) {
      console.error(`Error loading enemy icon ${enemyId}:`, error);
      return '';
    }
  }

  /**
   * キャッシュをクリア（開発時やメモリ節約のため）
   */
  static clearCache(): void {
    this.stageCache.clear();
    this.enemyIconCache.clear();
    this.indexCache = null;
    this.loadingPromises.clear();
  }

  /**
   * キャッシュされているデータ数を取得（デバッグ用）
   */
  static getCacheSize(): { stages: number, enemyIcons: number } {
    return {
      stages: this.stageCache.size,
      enemyIcons: this.enemyIconCache.size
    };
  }

  /**
   * キャッシュ情報を取得する（デバッグ用）
   */
  static getCacheInfo() {
    return {
      stages: Array.from(this.stageCache.keys()),
      enemyIcons: Array.from(this.enemyIconCache.keys()),
      cacheSize: this.getCacheSize()
    };
  }
}

// デバッグ用のコンソール出力（開発環境のみ）
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as Window & { stageDataDebug?: object }).stageDataDebug = {
    getCache: () => ({
      stageCache: StageDataManager['stageCache'],
      enemyIconCache: StageDataManager['enemyIconCache'],
      indexCache: StageDataManager['indexCache']
    }),
    getCacheInfo: () => StageDataManager.getCacheInfo(),
    clearCache: () => StageDataManager.clearCache(),
    loadStage: (eventId: number) => StageDataManager.loadStageData(eventId),
    loadIndex: () => StageDataManager.loadStageIndex(),
    loadEnemyIcon: (enemyId: string) => StageDataManager.loadEnemyIcon(enemyId)
  };
}

export default StageDataManager;