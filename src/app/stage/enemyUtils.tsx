// Enemy Database Utils
import StageDataManager from './StageDataManager';
import type { StageData } from './types';

export interface EnemyDatabaseEntry {
  enemyId: string;
  enemyName: string;
  icon: string;
  traits: string[];
  baseStats: {
    hp: number;
    ap: number;
    dps: number;
    speed: number;
    range: number;
    rangeType: string;
    kbLevel: number;
    money: number;
    freq: number;
    foreswing: number;
    backswing: number;
    tba: number;
  };
  abilities: Record<string, unknown>;
}

export interface EnemyStageResult {
  enemyId: string;
  enemyName: string;
  eventId: number;
  eventName: string;
  typeName: string;
  stageId: number;
  stageName: string;
  requiredCost: number;
  appearances: number; // 同じステージ内での出現回数
}

export interface ProgressInfo {
  current: number;        // 処理済みイベント数
  total: number;          // 総イベント数
  percentage: number;     // 進捗率
}

/**
 * レジェンドストーリーのステージファイルから敵データベースを構築する
 * （敵検索機能専用 - レジェンドストーリーのみに絞って軽量化）
 */
export async function buildEnemyDatabase(
  onProgress?: (progress: ProgressInfo) => void
): Promise<Map<string, EnemyDatabaseEntry>> {
  const enemyMap = new Map<string, EnemyDatabaseEntry>();
  
  try {
    // ステージインデックスデータを読み込み
    const stageIndexData = await StageDataManager.loadStageIndex();
    
    // レジェンドストーリー（タイプID 0）のみに絞り込み
    const legendEvents = stageIndexData.events.filter(event => event.typeId === 0);
    const totalEvents = legendEvents.length;
    
    // レジェンドストーリーの各イベントのステージデータを処理
    for (let i = 0; i < legendEvents.length; i++) {
      const event = legendEvents[i];
      
      // 進捗を報告
      const current = i + 1;
      const percentage = Math.round((current / totalEvents) * 100);
      onProgress?.({
        current,
        total: totalEvents,
        percentage
      });
      
      try {
        // 動的にステージデータを読み込み
        const stageData: StageData = await StageDataManager.loadStageData(event.eventId);
        if (!stageData) {
          continue; // スキップして次のイベントへ
        }
        
        // 各ステージの敵データを処理
        for (const stage of stageData.stages) {
          for (const enemy of stage.enemies) {
            if (!enemyMap.has(enemy.enemyId)) {
              // アイコンデータを取得
              let iconBase64 = '';
              try {
                iconBase64 = await StageDataManager.loadEnemyIcon(enemy.enemyId);
              } catch (error) {
                console.warn(`Failed to load icon for enemy ${enemy.enemyId}:`, error);
              }
              
              // 新しい敵をデータベースに追加
              enemyMap.set(enemy.enemyId, {
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
      } catch (error) {
        console.warn(`Failed to load stage data for event ${event.eventId}:`, error);
      }
    }
  } catch (error) {
    console.error('Failed to build enemy database:', error);
  }
  
  return enemyMap;
}

/**
 * 指定された敵IDのリストに基づいてレジェンドストーリーのステージを検索する
 */
export async function searchStagesByEnemies(
  enemyIds: string[]
): Promise<EnemyStageResult[]> {
  const results: EnemyStageResult[] = [];
  
  try {
    // ステージインデックスデータを読み込み
    const stageIndexData = await StageDataManager.loadStageIndex();
    
    // レジェンドストーリー（タイプID 0）のみを対象とする
    const legendEvents = stageIndexData.events.filter(event => event.typeId === 0);
    
    // 各イベントのステージデータを処理
    for (const event of legendEvents) {
      try {
        // 動的にステージデータを読み込み
        const stageData: StageData = await StageDataManager.loadStageData(event.eventId);
        if (!stageData) {
          continue; // スキップして次のイベントへ
        }
        
        // 各ステージを検索
        for (let stageIndex = 0; stageIndex < stageData.stages.length; stageIndex++) {
          const stage = stageData.stages[stageIndex];
          
          // このステージで指定された敵が出現するかチェック
          const stageEnemyOccurrences = new Map<string, number>();
          
          for (const enemy of stage.enemies) {
            if (enemyIds.includes(enemy.enemyId)) {
              const currentCount = stageEnemyOccurrences.get(enemy.enemyId) || 0;
              stageEnemyOccurrences.set(enemy.enemyId, currentCount + 1);
            }
          }
          
          // 出現した敵の結果を追加
          for (const [enemyId, appearances] of stageEnemyOccurrences) {
            const enemy = stage.enemies.find(e => e.enemyId === enemyId);
            if (enemy) {
              results.push({
                enemyId,
                enemyName: enemy.enemyName,
                eventId: stageData.eventId,
                eventName: stageData.eventName,
                typeName: stageData.typeName,
                stageId: stageIndex,
                stageName: stage.stageName,
                requiredCost: stage.requiredCost,
                appearances
              });
            }
          }
        }
      } catch (error) {
        console.warn(`Failed to load stage data for event ${event.eventId}:`, error);
      }
    }
  } catch (error) {
    console.error('Failed to search stages by enemies:', error);
  }
  
  return results;
}

/**
 * 検索結果をソートする（ヒット数が多い順、必要統率力が少ない順）
 */
export function sortEnemyStageResults(results: EnemyStageResult[]): EnemyStageResult[] {
  // ステージごとのヒットした敵の種類数を効率的に計算
  const stageEnemyCounts = new Map<string, number>();
  
  // ステージごとにユニークな敵IDのセットを作成
  const stageEnemyIds = new Map<string, Set<string>>();
  results.forEach(result => {
    const stageKey = `${result.eventId}-${result.stageId}`;
    if (!stageEnemyIds.has(stageKey)) {
      stageEnemyIds.set(stageKey, new Set());
    }
    stageEnemyIds.get(stageKey)!.add(result.enemyId);
  });
  
  // 各ステージの敵種類数をカウント
  stageEnemyIds.forEach((enemySet, stageKey) => {
    stageEnemyCounts.set(stageKey, enemySet.size);
  });

  return results.sort((a, b) => {
    // 同じステージの場合、出現回数が多い方を優先
    if (a.eventId === b.eventId && a.stageId === b.stageId) {
      return b.appearances - a.appearances;
    }
    
    // 異なるステージの場合、まずヒットした敵の種類数が多い順
    const stageKeyA = `${a.eventId}-${a.stageId}`;
    const stageKeyB = `${b.eventId}-${b.stageId}`;
    const enemyCountA = stageEnemyCounts.get(stageKeyA) || 0;
    const enemyCountB = stageEnemyCounts.get(stageKeyB) || 0;
    
    if (enemyCountA !== enemyCountB) {
      return enemyCountB - enemyCountA;
    }
    
    // 敵の種類数が同じ場合、統率力の少ない順
    const costDiff = a.requiredCost - b.requiredCost;
    if (costDiff !== 0) {
      return costDiff;
    }
    
    // 最後はイベントID、ステージIDの順でソート
    const eventDiff = a.eventId - b.eventId;
    if (eventDiff !== 0) {
      return eventDiff;
    }
    
    return a.stageId - b.stageId;
  });
}

/**
 * 敵データベースから敵リストを取得（ソート済み）
 */
export function getEnemyList(enemyDatabase: Map<string, EnemyDatabaseEntry>): EnemyDatabaseEntry[] {
  return Array.from(enemyDatabase.values()).sort((a, b) => {
    const aId = parseInt(a.enemyId);
    const bId = parseInt(b.enemyId);
    return aId - bId;
  });
}

/**
 * 敵名で検索
 */
export function searchEnemiesByName(
  enemyDatabase: Map<string, EnemyDatabaseEntry>,
  searchName: string
): EnemyDatabaseEntry[] {
  const searchLower = searchName.toLowerCase();
  return getEnemyList(enemyDatabase).filter(enemy => 
    enemy.enemyName.toLowerCase().includes(searchLower)
  );
}

/**
 * 属性で検索
 */
export function searchEnemiesByTrait(
  enemyDatabase: Map<string, EnemyDatabaseEntry>,
  trait: string
): EnemyDatabaseEntry[] {
  return getEnemyList(enemyDatabase).filter(enemy => 
    enemy.traits.includes(trait)
  );
}