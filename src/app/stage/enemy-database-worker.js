// Enemy Database Worker - バックグラウンドで敵データベースを構築
// UIブロッキングを防ぐためのWeb Worker実装

// 型定義（JSDocスタイル）
/**
 * @typedef {Object} EnemyDatabaseEntry
 * @property {string} enemyId
 * @property {string} enemyName
 * @property {string} icon
 * @property {string[]} traits
 * @property {Object} baseStats
 * @property {Object} abilities
 */

/**
 * @typedef {Object} ProgressInfo
 * @property {number} current
 * @property {number} total
 * @property {number} percentage
 */

/**
 * @typedef {Object} WorkerMessage
 * @property {string} type - メッセージタイプ
 * @property {*} data - メッセージデータ
 */

class EnemyDatabaseWorker {
  constructor() {
    this.enemyMap = new Map();
    this.isBuilding = false;
    this.maxConcurrency = this.detectMaxConcurrency();
  }

  /**
   * 環境のパフォーマンス特性を検出
   * @returns {number} 最大並列度
   */
  detectMaxConcurrency() {
    // ナビゲーター情報による推定
    const cores = navigator?.hardwareConcurrency || 4;
    const connection = navigator?.connection;
    
    // ネットワーク速度による調整
    let networkMultiplier = 1.0;
    if (connection) {
      switch (connection.effectiveType) {
        case '4g': networkMultiplier = 1.5; break;
        case '3g': networkMultiplier = 0.8; break;
        case '2g': networkMultiplier = 0.4; break;
        default: networkMultiplier = 1.0;
      }
    }
    
    // 最大16並列、最小4並列
    return Math.max(4, Math.min(16, Math.floor(cores * networkMultiplier)));
  }

  /**
   * 最適なバッチサイズを計算
   * @param {number} totalItems 総アイテム数
   * @returns {number} バッチサイズ
   */
  getOptimalBatchSize(totalItems) {
    const baseSize = Math.min(this.maxConcurrency, totalItems);
    
    // アイテム数に応じた調整
    if (totalItems < 50) return Math.min(6, baseSize);
    if (totalItems < 100) return Math.min(8, baseSize);
    if (totalItems < 200) return Math.min(10, baseSize);
    return Math.min(12, baseSize);
  }

  /**
   * アイコン読み込み用の最適バッチサイズ
   * @param {number} iconCount アイコン数
   * @returns {number} バッチサイズ
   */
  getOptimalIconBatchSize(iconCount) {
    // アイコンは小さなファイルなのでより多く並列化
    const baseSize = this.maxConcurrency * 2;
    
    if (iconCount < 50) return Math.min(15, baseSize);
    if (iconCount < 200) return Math.min(20, baseSize);
    if (iconCount < 500) return Math.min(25, baseSize);
    return Math.min(30, baseSize);
  }

  /**
   * GitHub Pages環境での確実なbasePath取得
   * @returns {string} basePath
   */
  getBasePath() {
    // Worker環境でのlocation取得
    const location = self.location;
    const isGitHubPages = location.hostname === 'nekomut.github.io' || 
                         location.pathname.startsWith('/bcnext');
    return isGitHubPages ? '/bcnext' : '';
  }

  /**
   * ステージインデックスを読み込む
   * @returns {Promise<Object>} インデックスデータ
   */
  async loadStageIndex() {
    const basePath = this.getBasePath();
    
    const urlsToTry = [
      `${basePath}/data/stage/index.json`,
      `${location.origin}${basePath}/data/stage/index.json`
    ];
    
    let response = null;
    
    for (const tryUrl of urlsToTry) {
      try {
        response = await fetch(tryUrl);
        if (response.ok) {
          break;
        }
      } catch {
        // エラーを無視して次のURLを試行
        continue;
      }
    }
    
    if (!response || !response.ok) {
      throw new Error(`Failed to load stage index. Status: ${response?.status || 'network error'}`);
    }

    return await response.json();
  }

  /**
   * ステージデータを読み込む（リトライ機能付き）
   * @param {number} eventId イベントID
   * @param {number} retries 最大リトライ回数
   * @returns {Promise<Object|null>} ステージデータ
   */
  async loadStageData(eventId, retries = 2) {
    const basePath = this.getBasePath();
    
    const urlsToTry = [
      `${basePath}/data/stage/e${eventId}.json`,
      `${location.origin}${basePath}/data/stage/e${eventId}.json`
    ];
    
    for (let attempt = 0; attempt <= retries; attempt++) {
      for (const tryUrl of urlsToTry) {
        try {
          const response = await fetch(tryUrl, {
            method: 'GET',
            cache: 'default', // キャッシュ利用
            timeout: 5000 // 5秒タイムアウト
          });
          
          if (response.ok) {
            return await response.json();
          }
          
          // レスポンスが不正な場合はリトライ
          if (response.status >= 500 && attempt < retries) {
            console.warn(`Server error ${response.status} for e${eventId}, retrying...`);
            await this.delay(100 * (attempt + 1)); // 指数バックオフ
            continue;
          }
          
        } catch (error) {
          if (attempt < retries) {
            console.warn(`Network error for e${eventId}, retrying... (${error.message})`);
            await this.delay(100 * (attempt + 1));
            continue;
          }
        }
      }
    }
    
    console.warn(`Failed to load stage data e${eventId} after ${retries + 1} attempts`);
    return null;
  }

  /**
   * 遅延ユーティリティ
   * @param {number} ms ミリ秒
   */
  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 敵アイコンを読み込む
   * @param {string} enemyId 敵ID
   * @returns {Promise<string>} アイコンのbase64データ
   */
  async loadEnemyIcon(enemyId) {
    const basePath = this.getBasePath();
    
    const urlsToTry = [
      `${basePath}/data/enemy/${enemyId}`,
      `${location.origin}${basePath}/data/enemy/${enemyId}`
    ];
    
    let response = null;
    
    for (const tryUrl of urlsToTry) {
      try {
        response = await fetch(tryUrl);
        if (response.ok) {
          break;
        }
      } catch {
        // エラーを無視して次のURLを試行
        continue;
      }
    }
    
    if (!response || !response.ok) {
      return '';
    }

    const text = await response.text();
    return text.trim();
  }

  /**
   * 敵データベースを構築する（並列化版）
   * @returns {Promise<Map>} 敵データベース
   */
  async buildEnemyDatabase() {
    if (this.isBuilding) {
      throw new Error('Database is already being built');
    }

    this.isBuilding = true;
    this.enemyMap.clear();

    try {
      // 進捗報告
      self.postMessage({
        type: 'progress',
        data: { current: 0, total: 0, percentage: 0, status: 'ステージインデックスを読み込み中...' }
      });

      // ステージインデックスデータを読み込み
      const stageIndexData = await this.loadStageIndex();
      
      // レジェンドストーリー（タイプID 0）のみに絞り込み
      const legendEvents = stageIndexData.events.filter(event => event.typeId === 0);
      const totalEvents = legendEvents.length;
      
      self.postMessage({
        type: 'progress', 
        data: { current: 0, total: totalEvents, percentage: 0, status: `レジェンドストーリー ${totalEvents}イベントを並列処理中...` }
      });

      // **並列化実装**: バッチ処理で大幅高速化
      // 環境に応じた動的バッチサイズ調整
      const batchSize = this.getOptimalBatchSize(legendEvents.length);
      const batches = [];
      
      // イベントをバッチに分割
      for (let i = 0; i < legendEvents.length; i += batchSize) {
        batches.push(legendEvents.slice(i, i + batchSize));
      }
      
      let processedCount = 0;
      const uniqueEnemyIds = new Set(); // 重複除去用
      
      // バッチごとに並列処理
      for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
        const batch = batches[batchIndex];
        
        // バッチ内のイベントを並列で読み込み
        const stageDataPromises = batch.map(async (event) => {
          try {
            const stageData = await this.loadStageData(event.eventId);
            return { event, stageData };
          } catch (error) {
            console.warn(`Failed to load stage data for event ${event.eventId}:`, error);
            return { event, stageData: null };
          }
        });
        
        // バッチ全体を並列で待機
        const batchResults = await Promise.all(stageDataPromises);
        
        // バッチ結果を処理
        for (const { event, stageData } of batchResults) {
          processedCount++;
          
          if (!stageData) {
            // 進捗報告（スキップしたイベント）
            const percentage = Math.round((processedCount / totalEvents) * 100);
            self.postMessage({
              type: 'progress',
              data: { 
                current: processedCount, 
                total: totalEvents, 
                percentage, 
                status: `スキップ: ${event.eventName} (${processedCount}/${totalEvents})` 
              }
            });
            continue;
          }
          
          // 各ステージの敵データを処理
          for (const stage of stageData.stages) {
            for (const enemy of stage.enemies) {
              if (!this.enemyMap.has(enemy.enemyId)) {
                uniqueEnemyIds.add(enemy.enemyId);
                
                // 敵データを一時的に追加（アイコン無し）
                this.enemyMap.set(enemy.enemyId, {
                  enemyId: enemy.enemyId,
                  enemyName: enemy.enemyName,
                  icon: '', // 後で並列で取得
                  traits: enemy.traits,
                  baseStats: enemy.baseStats,
                  abilities: enemy.abilities
                });
              }
            }
          }
          
          // 進捗報告
          const percentage = Math.round((processedCount / totalEvents) * 100);
          self.postMessage({
            type: 'progress',
            data: { 
              current: processedCount, 
              total: totalEvents, 
              percentage, 
              status: `処理完了: ${event.eventName} (${processedCount}/${totalEvents})` 
            }
          });
        }
      }

      // **アイコン並列読み込み**: 敵データ構築完了後にアイコンを並列取得
      self.postMessage({
        type: 'progress',
        data: { 
          current: totalEvents, 
          total: totalEvents, 
          percentage: 100, 
          status: `アイコンを並列読み込み中... (${uniqueEnemyIds.size}体)` 
        }
      });
      
      await this.loadIconsInParallel(Array.from(uniqueEnemyIds));

      // 完了報告
      self.postMessage({
        type: 'progress',
        data: { 
          current: totalEvents, 
          total: totalEvents, 
          percentage: 100, 
          status: `完了: ${this.enemyMap.size}体の敵を登録（並列処理による高速化）` 
        }
      });

      return this.enemyMap;

    } catch (error) {
      self.postMessage({
        type: 'error',
        data: { message: 'Failed to build enemy database', error: error.message }
      });
      throw error;
    } finally {
      this.isBuilding = false;
    }
  }

  /**
   * アイコンを並列で読み込む
   * @param {string[]} enemyIds 敵IDの配列
   */
  async loadIconsInParallel(enemyIds) {
    const iconBatchSize = this.getOptimalIconBatchSize(enemyIds.length);
    const iconBatches = [];
    
    // 敵IDをバッチに分割
    for (let i = 0; i < enemyIds.length; i += iconBatchSize) {
      iconBatches.push(enemyIds.slice(i, i + iconBatchSize));
    }
    
    // バッチごとにアイコンを並列取得
    for (const iconBatch of iconBatches) {
      const iconPromises = iconBatch.map(async (enemyId) => {
        try {
          const iconBase64 = await this.loadEnemyIcon(enemyId);
          return { enemyId, iconBase64 };
        } catch {
          return { enemyId, iconBase64: '' }; // エラー時は空文字
        }
      });
      
      // バッチのアイコンを並列で待機
      const iconResults = await Promise.all(iconPromises);
      
      // アイコンデータを敵情報に反映
      iconResults.forEach(({ enemyId, iconBase64 }) => {
        const enemy = this.enemyMap.get(enemyId);
        if (enemy) {
          enemy.icon = iconBase64;
        }
      });
    }
  }

  /**
   * 敵リストを取得（ソート済み）
   * @returns {Array} 敵リスト
   */
  getEnemyList() {
    return Array.from(this.enemyMap.values()).sort((a, b) => {
      const aId = parseInt(a.enemyId);
      const bId = parseInt(b.enemyId);
      return aId - bId;
    });
  }

  /**
   * 敵名で検索
   * @param {string} searchName 検索名
   * @returns {Array} 検索結果
   */
  searchEnemiesByName(searchName) {
    const searchLower = searchName.toLowerCase();
    return this.getEnemyList().filter(enemy => 
      enemy.enemyName.toLowerCase().includes(searchLower)
    );
  }
}

// Worker インスタンス
const worker = new EnemyDatabaseWorker();

// メッセージハンドラー
self.addEventListener('message', async (event) => {
  const { type, data } = event.data;

  try {
    switch (type) {
      case 'buildDatabase':
        const database = await worker.buildEnemyDatabase();
        // Mapをオブジェクトに変換して送信
        const databaseObj = Object.fromEntries(database);
        self.postMessage({
          type: 'databaseReady',
          data: { database: databaseObj }
        });
        break;

      case 'getEnemyList':
        const enemyList = worker.getEnemyList();
        self.postMessage({
          type: 'enemyListReady',
          data: { enemyList }
        });
        break;

      case 'searchEnemiesByName':
        const searchResults = worker.searchEnemiesByName(data.searchName);
        self.postMessage({
          type: 'searchResults',
          data: { searchResults }
        });
        break;

      default:
        console.warn('Unknown message type:', type);
    }
  } catch (error) {
    self.postMessage({
      type: 'error',
      data: { message: `Error handling ${type}`, error: error.message }
    });
  }
});

// Worker の初期化完了を通知
self.postMessage({
  type: 'ready',
  data: { message: 'Enemy Database Worker is ready' }
});