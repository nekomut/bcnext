'use client'

import Link from 'next/link';
import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { StageSearch } from './StageSearch';
import { StageDisplay } from './StageDisplay';
import { StageList } from './StageList';
import { EnemySearch } from './EnemySearch';
import StageDataManager from './StageDataManager';
import type { StageData, EventInfo, StageSearchParams } from './types';

function StagePageContent() {
  const [selectedStage, setSelectedStage] = useState<StageData | null>(null);
  const [searchResults, setSearchResults] = useState<EventInfo[]>([]);
  const [searchParams, setSearchParams] = useState<StageSearchParams>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const urlSearchParams = useSearchParams();
  const router = useRouter();

  const loadStageData = async (eventId: number): Promise<StageData | null> => {
    try {
      console.log(`Loading stage data for eventId: ${eventId}`);
      const stageData = await StageDataManager.loadStageData(eventId);
      console.log('Stage data loaded:', stageData);
      return stageData;
    } catch (error) {
      console.error(`Failed to load stage data for eventId ${eventId}:`, error);
      return null;
    }
  };

  const searchStages = async (params: StageSearchParams): Promise<EventInfo[]> => {
    try {
      const stageIndexData = await StageDataManager.loadStageIndex();
      let results = stageIndexData.events;
      
      // フィルタリング
      // ステージ名検索時はtypeIdフィルタを適用しない（全タイプを検索対象にする）
      if (params.typeId !== undefined && !params.stageName) {
        results = results.filter((event: EventInfo) => event.typeId === params.typeId);
      }
      
      if (params.stageName) {
        results = results.filter((event: EventInfo) => 
          Object.values(event.stageInfo).some((stageName: string) => 
            stageName.toLowerCase().includes(params.stageName!.toLowerCase())
          )
        );
      }
      
      // ソート
      if (params.sortBy) {
        switch (params.sortBy) {
          case 'id-asc':
            results.sort((a: EventInfo, b: EventInfo) => a.eventId - b.eventId);
            break;
          case 'id-desc':
          default:
            results.sort((a: EventInfo, b: EventInfo) => b.eventId - a.eventId);
        }
      } else {
        // デフォルトはID降順
        results.sort((a: EventInfo, b: EventInfo) => b.eventId - a.eventId);
      }
      
      return results;
    } catch {
      return [];
    }
  };

  const updateURL = useCallback((params: StageSearchParams) => {
    const searchParams = new URLSearchParams();
    if (params.eventId !== undefined && params.eventId !== null) searchParams.set('event', params.eventId.toString());
    if (params.stageName) searchParams.set('name', params.stageName);
    if (params.typeId !== undefined) searchParams.set('type', params.typeId.toString());
    
    const url = searchParams.toString() ? `/stage?${searchParams.toString()}` : '/stage';
    router.push(url);
  }, [router]);

  const handleSearch = useCallback(async (params: StageSearchParams) => {
    setLoading(true);
    setError('');
    setSelectedStage(null);
    
    try {
      // ステージ名検索やタイプID検索がある場合は一覧表示を優先
      // イベントIDのみが指定されている場合のみ詳細表示
      const hasStageNameOrType = params.stageName || (params.typeId !== undefined && params.typeId !== null);
      const hasEventIdOnly = (params.eventId !== undefined && params.eventId !== null) && !hasStageNameOrType;
      
      if (hasEventIdOnly) {
        // イベントIDのみが指定されている場合は詳細表示
        const stageData = await loadStageData(params.eventId!);
        if (stageData) {
          setSelectedStage(stageData);
          setSearchResults([]);
        } else {
          setError(`イベント ${params.eventId} のデータが見つかりません`);
          setSearchResults([]);
        }
      } else {
        // 検索条件による一覧表示（ステージ名、タイプID、または条件なしの場合）
        const results = await searchStages(params);
        setSearchResults(results);
        setSelectedStage(null);
      }
      
      // URL更新
      updateURL(params);
    } catch {
      setError('検索でエラーが発生しました');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, [updateURL]);

  const handleStageSelect = useCallback(async (eventId: number) => {
    // 詳細表示専用：イベントIDのみでステージデータを直接読み込み
    setLoading(true);
    setError('');
    
    try {
      const stageData = await loadStageData(eventId);
      if (stageData) {
        setSelectedStage(stageData);
        setSearchResults([]);
        
        // URLを更新（イベントIDのみ、既存パラメータを保持）
        const currentUrl = new URL(window.location.href);
        const searchParams = new URLSearchParams(currentUrl.search);
        searchParams.set('event', eventId.toString());
        // stageパラメータがある場合は削除（イベント全体表示のため）
        searchParams.delete('stage');
        const url = `/stage?${searchParams.toString()}`;
        router.push(url);
      } else {
        setError(`イベント ${eventId} のデータが見つかりません`);
      }
    } catch {
      setError('ステージデータの読み込みでエラーが発生しました');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleSpecificStageSelect = useCallback(async (eventId: number, stageId: number) => {
    // 特定のステージを指定して詳細表示
    setLoading(true);
    setError('');
    
    try {
      const stageData = await loadStageData(eventId);
      if (stageData) {
        // ステージIDからインデックスを取得
        const stageIndex = stageData.stages.findIndex(stage => stage.stageId === stageId);
        if (stageIndex >= 0) {
          setSelectedStage({ ...stageData, selectedStageIndex: stageIndex });
        } else {
          setSelectedStage(stageData);
        }
        setSearchResults([]);
        
        // URLを更新（イベントIDとステージIDの両方、既存パラメータを保持）
        const currentUrl = new URL(window.location.href);
        const searchParams = new URLSearchParams(currentUrl.search);
        searchParams.set('event', eventId.toString());
        searchParams.set('stage', stageId.toString());
        const url = `/stage?${searchParams.toString()}`;
        router.push(url);
      } else {
        setError(`イベント ${eventId} のデータが見つかりません`);
      }
    } catch {
      setError('ステージデータの読み込みでエラーが発生しました');
    } finally {
      setLoading(false);
    }
  }, [router]);

  // URL パラメータの初期化
  useEffect(() => {
    const eventIdParam = urlSearchParams.get('event');
    const stageIdParam = urlSearchParams.get('stage');
    const stageNameParam = urlSearchParams.get('name');
    const typeIdParam = urlSearchParams.get('type');
    
    const params: StageSearchParams = {};
    if (eventIdParam) params.eventId = parseInt(eventIdParam);
    if (stageNameParam) params.stageName = stageNameParam;
    if (typeIdParam) params.typeId = parseInt(typeIdParam);
    
    setSearchParams(params);
    
    // 特定のステージIDが指定されている場合
    if (eventIdParam && stageIdParam) {
      handleSpecificStageSelect(parseInt(eventIdParam), parseInt(stageIdParam));
    } else if (eventIdParam && !stageIdParam) {
      // イベントIDのみが指定されている場合は詳細表示
      handleStageSelect(parseInt(eventIdParam));
    } else if (params.stageName || (params.typeId !== undefined && params.typeId !== null)) {
      // ステージ名またはタイプIDでの検索
      handleSearch(params);
    } else {
      // デフォルト検索：レジェンドストーリー0をID降順で表示
      handleSearch({ typeId: 34, sortBy: 'id-desc' });
    }
  }, [urlSearchParams, handleSearch, handleSpecificStageSelect, handleStageSelect]);

  const handleBackToSearch = useCallback(() => {
    // 詳細表示から検索結果一覧に戻る
    setSelectedStage(null);
    
    // URLからeventパラメータを削除
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('event');
    const searchString = currentUrl.searchParams.toString();
    const newUrl = searchString ? `/stage?${searchString}` : '/stage';
    router.replace(newUrl);
  }, [router]);

  return (
    <div>
      <Link href="/" className="font-bold hover:text-orange-600 px-1">bcnext</Link>|
      <Link href="/stage" className="text-orange-500 hover:text-orange-600 px-1">Stage</Link>|
      <Link href="/unit" className="hover:text-orange-600 px-1">Unit</Link>|
      <Link href="/seek" className="hover:text-orange-600 px-1">Seek</Link>|
      <Link href="/rare" className="hover:text-orange-600 px-1">Rare</Link>|
      <Link href="/normal" className="hover:text-orange-600 px-1">Normal</Link>|
      <Link href="/event" className="hover:text-orange-600 px-1">Event</Link>|
      <hr />

      <div className="p-1">
        <StageSearch 
          onSearch={handleSearch}
          loading={loading}
        />

        <EnemySearch onStageSelect={handleSpecificStageSelect} />

        {error && (
          <div className="text-red-500 mb-2 text-xs">{error}</div>
        )}

        {searchResults.length > 0 && (
          <StageList 
            events={searchResults}
            searchTerm={searchParams.stageName}
            onStageSelect={handleStageSelect}
            onSpecificStageSelect={handleSpecificStageSelect}
          />
        )}

        {selectedStage && (
          <StageDisplay 
            stageData={selectedStage}
            onBackToSearch={handleBackToSearch}
          />
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StagePageContent />
    </Suspense>
  );
}