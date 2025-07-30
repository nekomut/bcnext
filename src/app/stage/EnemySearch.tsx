'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { buildEnemyDatabase, searchStagesByEnemies, sortEnemyStageResults, getEnemyList, searchEnemiesByName } from './enemyUtils';
import type { EnemyDatabaseEntry, EnemyStageResult, ProgressInfo } from './enemyUtils';
import { useEnemyDatabaseWorker, type WorkerProgressInfo } from './useEnemyDatabaseWorker';
import { icons } from '../../data/icons';

interface EnemySearchProps {
  onStageSelect: (eventId: number, stageId: number) => void;
}

// 属性名からアイコン名へのマッピング
const getTraitIconName = (trait: string): string | null => {
  const traitMap: Record<string, string | null> = {
    '赤': 'traitRed',
    '浮': 'traitFloating', 
    '黒': 'traitBlack',
    'メ': 'traitMetal',
    '天': 'traitAngel',
    'エ': 'traitAlien',
    'ゾ': 'traitZombie',
    '白': 'traitWhite',
    '超': 'traitRelic',
    '無': 'traitTraitless', // 無属性アイコン
  };
  return traitMap[trait] || null;
};

// 属性アイコンコンポーネント
const TraitIcon: React.FC<{ trait: string }> = ({ trait }) => {
  const iconName = getTraitIconName(trait);
  if (!iconName || !icons[iconName as keyof typeof icons]) {
    return (
      <span className="inline-flex items-center px-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
        {trait}
      </span>
    );
  }

  const iconData = icons[iconName as keyof typeof icons];
  return (
    <div className="inline-flex items-center" title={trait}>
      <Image
        src={`data:image/png;base64,${iconData}`}
        alt={trait}
        width={16}
        height={16}
        className="w-4 h-4"
      />
    </div>
  );
};

export function EnemySearch({ onStageSelect }: EnemySearchProps) {
  // Web Worker版を使用
  const {
    enemyDatabase: workerEnemyDatabase,
    loading: workerLoading,
    error: workerError,
    progress: workerProgress,
    supportsWorker,
    searchEnemiesByName: workerSearchEnemies,
    getEnemyList: workerGetEnemyList
  } = useEnemyDatabaseWorker();

  // フォールバック用の従来実装
  const [fallbackEnemyDatabase, setFallbackEnemyDatabase] = useState<Map<string, EnemyDatabaseEntry>>(new Map());
  const [fallbackLoading, setFallbackLoading] = useState(false);
  const [fallbackProgress, setFallbackProgress] = useState<ProgressInfo | null>(null);

  // 共通状態
  const [filteredEnemies, setFilteredEnemies] = useState<EnemyDatabaseEntry[]>([]);
  const [selectedEnemies, setSelectedEnemies] = useState<Set<string>>(new Set());
  const [searchResults, setSearchResults] = useState<EnemyStageResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // 使用する実装を決定
  const usingWorker = supportsWorker && !workerError;
  const enemyDatabase = usingWorker ? workerEnemyDatabase : fallbackEnemyDatabase;
  const loading = usingWorker ? workerLoading : fallbackLoading;
  const progress = usingWorker ? workerProgress : fallbackProgress;

  // フォールバック用の敵データベース初期化
  useEffect(() => {
    if (usingWorker) {
      return; // Web Worker を使用している場合はスキップ
    }

    const initializeFallbackDatabase = async () => {
      setFallbackLoading(true);
      setFallbackProgress(null);
      try {
        const database = await buildEnemyDatabase((progressInfo) => {
          setFallbackProgress(progressInfo);
        });
        setFallbackEnemyDatabase(database);
        setFilteredEnemies(getEnemyList(database));
      } catch (error) {
        console.error('Failed to initialize fallback enemy database:', error);
      } finally {
        setFallbackLoading(false);
        setFallbackProgress(null);
      }
    };

    initializeFallbackDatabase();
  }, [usingWorker]);

  // Web Worker版データベースが準備完了時の処理
  useEffect(() => {
    if (usingWorker && workerEnemyDatabase.size > 0) {
      setFilteredEnemies(workerGetEnemyList());
    }
  }, [usingWorker, workerEnemyDatabase, workerGetEnemyList]);

  // 敵名検索
  const handleSearch = useCallback(async (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      if (usingWorker) {
        setFilteredEnemies(workerGetEnemyList());
      } else {
        setFilteredEnemies(getEnemyList(enemyDatabase));
      }
    } else {
      try {
        if (usingWorker) {
          const results = await workerSearchEnemies(term);
          setFilteredEnemies(results);
        } else {
          const results = searchEnemiesByName(enemyDatabase, term);
          setFilteredEnemies(results);
        }
      } catch (error) {
        console.error('Search failed:', error);
        // エラー時はフォールバック検索
        const results = searchEnemiesByName(enemyDatabase, term);
        setFilteredEnemies(results);
      }
    }
  }, [usingWorker, enemyDatabase, workerSearchEnemies, workerGetEnemyList]);

  // 自動検索の実行
  const executeAutoSearch = useCallback(async (enemyIds: string[]) => {
    if (enemyIds.length === 0) return;

    setSearching(true);
    try {
      const results = await searchStagesByEnemies(enemyIds);
      const sortedResults = sortEnemyStageResults(results);
      setSearchResults(sortedResults);
      setShowResults(true);
    } catch (error) {
      console.error('Failed to search stages:', error);
    } finally {
      setSearching(false);
    }
  }, []);

  // 敵選択の切り替え
  const toggleEnemySelection = useCallback(async (enemyId: string) => {
    setSelectedEnemies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(enemyId)) {
        newSet.delete(enemyId);
      } else {
        newSet.add(enemyId);
        // 敵を選択したときに検索テキストをクリア
        setSearchTerm('');
        if (usingWorker) {
          setFilteredEnemies(workerGetEnemyList());
        } else {
          setFilteredEnemies(getEnemyList(enemyDatabase));
        }
      }
      
      // 敵が選択されている場合は自動的に検索を実行
      if (newSet.size > 0) {
        executeAutoSearch(Array.from(newSet));
      } else {
        // 敵が全て削除された場合は検索結果をクリア
        setSearchResults([]);
        setShowResults(false);
      }
      
      return newSet;
    });
  }, [usingWorker, enemyDatabase, workerGetEnemyList, executeAutoSearch]);

  // 選択をクリア
  const clearSelection = useCallback(() => {
    setSelectedEnemies(new Set());
    setSearchResults([]);
    setShowResults(false);
  }, []);

  // ステージ検索実行（手動）
  const executeStageSearch = useCallback(async () => {
    if (selectedEnemies.size === 0) return;
    await executeAutoSearch(Array.from(selectedEnemies));
  }, [selectedEnemies, executeAutoSearch]);

  // ステージ選択時の処理
  const handleStageSelect = useCallback((eventId: number, stageId: number) => {
    onStageSelect(eventId, stageId);
  }, [onStageSelect]);

  if (loading) {
    return (
      <div className="p-4 text-center">
        {progress && (
          <div className="mt-2">
            <div className="text-sm text-gray-500 mb-1">
              {usingWorker ? '敵データベースを読み込み中... ' : '敵データベースを読み込み中... (フォールバック) '}
              {workerError && (
                <div className="text-orange-600 text-xs mt-1">
                  Web Worker エラー: {workerError} - フォールバックモードに切り替えます
                </div>
              )}
              {progress.current}/{progress.total} ({progress.percentage}%)
              {(progress as WorkerProgressInfo).status && (
                <div className="text-xs text-gray-400 mt-1">
                  {(progress as WorkerProgressInfo).status}
                </div>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-1">
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">逆引き検索（レジェンドストーリー）</h3>
        
        {/* 検索フィールド */}
        <div className="mb-1">
          <input
            type="text"
            placeholder="敵名で検索..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-2 py-1 text-xs text-gray-500 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* 検索候補 */}
        {searchTerm && (
          <div className="border border-gray-200 rounded mb-1 max-h-24 overflow-y-auto">
            {filteredEnemies.length === 0 ? (
              <div className="p-2 text-xs text-gray-500 text-center">
                該当する敵が見つかりません
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-0">
                {filteredEnemies.map((enemy) => (
                  <div
                    key={enemy.enemyId}
                    onClick={() => toggleEnemySelection(enemy.enemyId)}
                    className={`flex items-center gap-2 p-1 cursor-pointer hover:bg-gray-50 ${
                      selectedEnemies.has(enemy.enemyId) ? 'bg-blue-50 border-l-2 border-blue-500' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedEnemies.has(enemy.enemyId)}
                      onChange={() => {}} // handled by div onClick
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    {enemy.icon && (
                      <Image
                        src={`data:image/png;base64,${enemy.icon}`}
                        alt={enemy.enemyName}
                        className="w-6 h-6 flex-shrink-0"
                        width={24}
                        height={24}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-gray-900 truncate">
                        {enemy.enemyName}
                      </div>
                      <div className="text-xs text-gray-500">
                        ID: {enemy.enemyId} | HP: {enemy.baseStats.hp.toLocaleString()}
                      </div>
                    </div>
                    {enemy.traits.length > 0 && (
                      <div className="flex gap-0.5">
                        {enemy.traits.slice(0, 3).map((trait, index) => (
                          <TraitIcon key={index} trait={trait} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 選択中の敵表示 */}
        {selectedEnemies.size > 0 && (
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-600">選択中の敵 ({selectedEnemies.size}体):</span>
              <div className="flex flex-wrap gap-1">
                {Array.from(selectedEnemies).map((enemyId) => {
                  const enemy = enemyDatabase.get(enemyId);
                  if (!enemy) return null;
                  return (
                    <button
                      key={enemyId}
                      onClick={() => toggleEnemySelection(enemyId)}
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 group"
                      title="クリックで選択解除"
                    >
                      {enemy.icon && (
                        <Image
                          src={`data:image/png;base64,${enemy.icon}`}
                          alt={enemy.enemyName}
                          className="w-4 h-4 flex-shrink-0"
                          width={16}
                          height={16}
                        />
                      )}
                      <span className="max-w-20 truncate">{enemy.enemyName}</span>
                      <span className="ml-1 text-blue-600 group-hover:text-blue-800">×</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={clearSelection}
                className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
              >
                全てクリア
              </button>
              <button
                onClick={executeStageSearch}
                disabled={searching}
                className="px-2 py-1 text-xs text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {searching ? '検索中...' : showResults ? '再検索' : 'レジェンドストーリー検索'}
              </button>
            </div>
          </div>
        )}

        {/* 検索結果 */}
        {showResults && (
          <div className="border border-gray-200 rounded mb-2">
            <div className="p-2 bg-gray-50 border-b border-gray-200">
              <div className="text-xs font-medium text-gray-700">
                レジェンドストーリー検索結果: {searchResults.length}ステージ
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {searchResults.length === 0 ? (
                <div className="p-2 text-xs text-gray-500 text-center">
                  該当するステージが見つかりません
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {searchResults.map((result) => {
                    // 同じステージの結果をグループ化
                    const sameStageResults = searchResults.filter(r => 
                      r.eventId === result.eventId && r.stageId === result.stageId
                    );
                    const isFirstInGroup = sameStageResults[0] === result;
                    
                    if (!isFirstInGroup) return null;

                    return (
                      <div
                        key={`${result.eventId}-${result.stageId}`}
                        onClick={() => handleStageSelect(result.eventId, result.stageId)}
                        className="p-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-gray-900 truncate">
                              {result.eventId}: <span className="font-bold">{result.eventName}</span> - {result.stageId + 1}: <span className="font-bold">{result.stageName}</span>
                            </div>
                            <div className="text-xs text-gray-600">
                              (統率力: {result.requiredCost.toLocaleString()})
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs">
                              <div className="text-blue-600 font-medium mb-1">
                                {sameStageResults.length}体出現
                              </div>
                              <div className="flex flex-wrap gap-1 justify-end">
                                {sameStageResults.map((enemy, enemyIndex) => {
                                  const enemyData = enemyDatabase.get(enemy.enemyId);
                                  return (
                                    <div
                                      key={enemyIndex}
                                      className="flex items-center gap-1 text-gray-600"
                                    >
                                      {enemyData?.icon && (
                                        <Image
                                          src={`data:image/png;base64,${enemyData.icon}`}
                                          alt={enemy.enemyName}
                                          className="w-4 h-4 flex-shrink-0"
                                          width={16}
                                          height={16}
                                        />
                                      )}
                                      <span>{enemy.enemyName}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}