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
   * ステージデータを読み込む
   * @param {number} eventId イベントID
   * @returns {Promise<Object|null>} ステージデータ
   */
  async loadStageData(eventId) {
    const basePath = this.getBasePath();
    
    const urlsToTry = [
      `${basePath}/data/stage/e${eventId}.json`,
      `${location.origin}${basePath}/data/stage/e${eventId}.json`
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
      console.warn(`Failed to load stage data e${eventId}. Status: ${response?.status || 'network error'}`);
      return null;
    }

    return await response.json();
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
   * 敵データベースを構築する
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
        data: { current: 0, total: totalEvents, percentage: 0, status: `レジェンドストーリー ${totalEvents}イベントを処理中...` }
      });

      // 並列処理のためのチャンク設定
      const chunkSize = 3; // 同時に処理するイベント数
      
      for (let i = 0; i < legendEvents.length; i += chunkSize) {
        const chunk = legendEvents.slice(i, i + chunkSize);
        
        // チャンク内のイベントを並列処理
        const chunkPromises = chunk.map(async (event, chunkIndex) => {
          const actualIndex = i + chunkIndex;
          
          try {
            const stageData = await this.loadStageData(event.eventId);
            if (!stageData) {
              return;
            }
            
            // 各ステージの敵データを処理
            for (const stage of stageData.stages) {
              for (const enemy of stage.enemies) {
                if (!this.enemyMap.has(enemy.enemyId)) {
                  // アイコンデータを取得（エラーは無視）
                  let iconBase64 = '';
                  try {
                    iconBase64 = await this.loadEnemyIcon(enemy.enemyId);
                  } catch {
                    // アイコン読み込みエラーは無視
                  }
                  
                  // 新しい敵をデータベースに追加
                  this.enemyMap.set(enemy.enemyId, {
                    enemyId: enemy.enemyId,
                    enemyName: enemy.enemyName,
                    icon: iconBase64,
                    traits: enemy.traits,
                    baseStats: enemy.baseStats,
                    abilities: enemy.abilities
                  });
                }
              }
            }
            
            // 進捗を報告
            const current = actualIndex + 1;
            const percentage = Math.round((current / totalEvents) * 100);
            self.postMessage({
              type: 'progress',
              data: { 
                current, 
                total: totalEvents, 
                percentage, 
                status: `${event.eventName} (${current}/${totalEvents})` 
              }
            });
            
          } catch (error) {
            console.warn(`Failed to load stage data for event ${event.eventId}:`, error);
          }
        });
        
        // チャンクの完了を待つ
        await Promise.all(chunkPromises);
      }

      // 完了報告
      self.postMessage({
        type: 'progress',
        data: { 
          current: totalEvents, 
          total: totalEvents, 
          percentage: 100, 
          status: `完了: ${this.enemyMap.size}体の敵を登録` 
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