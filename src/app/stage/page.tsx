'use client'

import Link from 'next/link';
import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { StageSearch } from './StageSearch';
import { StageDisplay } from './StageDisplay';
import { StageList } from './StageList';
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
      const stageModule = await import(`../../data/stage/e${eventId.toString().padStart(3, '0')}.tsx`);
      return stageModule.default;
    } catch {
      return null;
    }
  };

  const searchStages = async (params: StageSearchParams): Promise<EventInfo[]> => {
    try {
      const { stageIndexData } = await import('../../data/stage/index');
      let results = stageIndexData.events;
      
      // フィルタリング
      if (params.typeId !== undefined) {
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
          case 'type':
            results.sort((a: EventInfo, b: EventInfo) => a.typeId - b.typeId || a.eventId - b.eventId);
            break;
          case 'name':
            results.sort((a: EventInfo, b: EventInfo) => a.eventName.localeCompare(b.eventName));
            break;
          case 'stages':
            results.sort((a: EventInfo, b: EventInfo) => b.stageCount - a.stageCount || a.eventId - b.eventId);
            break;
          default:
            results.sort((a: EventInfo, b: EventInfo) => a.eventId - b.eventId);
        }
      }
      
      return results;
    } catch {
      return [];
    }
  };

  const updateURL = useCallback((params: StageSearchParams) => {
    const searchParams = new URLSearchParams();
    if (params.eventId) searchParams.set('event', params.eventId.toString());
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
      // イベントIDが指定されている場合は詳細表示
      if (params.eventId) {
        const stageData = await loadStageData(params.eventId);
        if (stageData) {
          setSelectedStage(stageData);
          setSearchResults([]);
        } else {
          setError(`イベント ${params.eventId} のデータが見つかりません`);
          setSearchResults([]);
        }
      } else {
        // 検索条件による一覧表示
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

  // URL パラメータの初期化
  useEffect(() => {
    const eventIdParam = urlSearchParams.get('event');
    const stageNameParam = urlSearchParams.get('name');
    const typeIdParam = urlSearchParams.get('type');
    
    const params: StageSearchParams = {};
    if (eventIdParam) params.eventId = parseInt(eventIdParam);
    if (stageNameParam) params.stageName = stageNameParam;
    if (typeIdParam) params.typeId = parseInt(typeIdParam);
    
    setSearchParams(params);
    
    // 初期検索実行
    if (params.eventId || params.stageName || params.typeId) {
      handleSearch(params);
    }
  }, [urlSearchParams, handleSearch]);

  const handleStageSelect = async (eventId: number) => {
    const params = { ...searchParams, eventId };
    await handleSearch(params);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center text-sm sm:text-base">
        <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link><span>|</span>
        <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link><span>|</span>
        <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link><span>|</span>
        <Link href="/event" className="hover:text-green-600 px-1">Event</Link><span>|</span>
        <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link><span>|</span>
        <Link href="/unit" className="hover:text-green-600 px-1">Unit</Link><span>|</span>
        <Link href="/stage" className="text-green-500 hover:text-green-600 px-1">Stage</Link><span>|</span>
      </div>
      <hr />

      <div className="p-2">
        <StageSearch 
          onSearch={handleSearch}
          initialParams={searchParams}
          loading={loading}
        />

        {error && (
          <div className="text-red-500 mb-2 text-xs">{error}</div>
        )}

        {searchResults.length > 0 && (
          <StageList 
            events={searchResults}
            searchTerm={searchParams.stageName}
            onStageSelect={handleStageSelect}
          />
        )}

        {selectedStage && (
          <StageDisplay 
            stageData={selectedStage}
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