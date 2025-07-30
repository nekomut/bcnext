// Web Worker用カスタムフック
'use client'

import { useState, useEffect, useCallback, useRef } from 'react';
import type { EnemyDatabaseEntry, ProgressInfo } from './enemyUtils';

export interface WorkerProgressInfo extends ProgressInfo {
  status?: string;
}

interface UseEnemyDatabaseWorkerReturn {
  enemyDatabase: Map<string, EnemyDatabaseEntry>;
  loading: boolean;
  error: string | null;
  progress: WorkerProgressInfo | null;
  supportsWorker: boolean;
  searchEnemiesByName: (searchName: string) => Promise<EnemyDatabaseEntry[]>;
  getEnemyList: () => EnemyDatabaseEntry[];
}

export function useEnemyDatabaseWorker(): UseEnemyDatabaseWorkerReturn {
  const [enemyDatabase, setEnemyDatabase] = useState<Map<string, EnemyDatabaseEntry>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<WorkerProgressInfo | null>(null);
  const [supportsWorker, setSupportsWorker] = useState(false);
  
  const workerRef = useRef<Worker | null>(null);
  const databaseReadyRef = useRef(false);

  // Web Worker サポート確認
  useEffect(() => {
    const hasWorkerSupport = typeof Worker !== 'undefined';
    setSupportsWorker(hasWorkerSupport);
    
    if (!hasWorkerSupport) {
      setError('Web Worker is not supported in this environment');
      setLoading(false);
      return;
    }

    // Web Worker の初期化
    const initializeWorker = async () => {
      try {
        // seek/worker.jsと同じ方法でWorkerを読み込み
        workerRef.current = new Worker(
          new URL("./enemy-database-worker.js", import.meta.url)
        );

        // Worker メッセージハンドラー
        workerRef.current.onmessage = (event) => {
          const { type, data } = event.data;

          switch (type) {
            case 'ready':
              console.log('Enemy Database Worker is ready');
              // データベース構築を開始
              workerRef.current?.postMessage({ type: 'buildDatabase' });
              break;

            case 'progress':
              setProgress(data);
              break;

            case 'databaseReady':
              try {
                // オブジェクトをMapに変換（型安全性を確保）
                const databaseMap = new Map<string, EnemyDatabaseEntry>();
                Object.entries(data.database).forEach(([key, value]) => {
                  databaseMap.set(key, value as EnemyDatabaseEntry);
                });
                setEnemyDatabase(databaseMap);
                databaseReadyRef.current = true;
                setLoading(false);
                setProgress(null);
                console.log(`Enemy database loaded with ${databaseMap.size} enemies`);
              } catch (err) {
                console.error('Failed to process database:', err);
                setError('Failed to process enemy database');
                setLoading(false);
              }
              break;

            case 'error':
              console.error('Worker error:', data);
              setError(data.message || 'Unknown worker error');
              setLoading(false);
              setProgress(null);
              break;

            default:
              console.warn('Unknown worker message type:', type);
          }
        };

        // Worker エラーハンドラー
        workerRef.current.onerror = (event) => {
          console.error('Worker error:', event);
          setError('Worker failed to load or execute');
          setLoading(false);
          setProgress(null);
        };

        // Worker終了ハンドラー
        workerRef.current.onmessageerror = (event) => {
          console.error('Worker message error:', event);
          setError('Worker communication error');
          setLoading(false);
          setProgress(null);
        };

      } catch (err) {
        console.error('Failed to initialize worker:', err);
        setError(`Failed to initialize Web Worker: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setLoading(false);
      }
    };

    initializeWorker();

    // クリーンアップ
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  // 敵名検索（非同期）
  const searchEnemiesByName = useCallback(async (searchName: string): Promise<EnemyDatabaseEntry[]> => {
    if (!workerRef.current || !databaseReadyRef.current) {
      // Worker が利用できない場合はローカル検索
      const searchLower = searchName.toLowerCase();
      return Array.from(enemyDatabase.values())
        .filter(enemy => enemy.enemyName.toLowerCase().includes(searchLower))
        .sort((a, b) => parseInt(a.enemyId) - parseInt(b.enemyId));
    }

    return new Promise((resolve, reject) => {
      if (!workerRef.current) {
        reject(new Error('Worker not available'));
        return;
      }

      const handleMessage = (event: MessageEvent) => {
        const { type, data } = event.data;
        if (type === 'searchResults') {
          workerRef.current?.removeEventListener('message', handleMessage);
          resolve(data.searchResults);
        } else if (type === 'error') {
          workerRef.current?.removeEventListener('message', handleMessage);
          reject(new Error(data.message));
        }
      };

      workerRef.current.addEventListener('message', handleMessage);
      workerRef.current.postMessage({
        type: 'searchEnemiesByName',
        data: { searchName }
      });

      // タイムアウト設定
      setTimeout(() => {
        workerRef.current?.removeEventListener('message', handleMessage);
        reject(new Error('Search timeout'));
      }, 5000);
    });
  }, [enemyDatabase]);

  // 敵リスト取得
  const getEnemyList = useCallback((): EnemyDatabaseEntry[] => {
    return Array.from(enemyDatabase.values()).sort((a, b) => {
      const aId = parseInt(a.enemyId);
      const bId = parseInt(b.enemyId);
      return aId - bId;
    });
  }, [enemyDatabase]);

  return {
    enemyDatabase,
    loading,
    error,
    progress,
    supportsWorker,
    searchEnemiesByName,
    getEnemyList
  };
}