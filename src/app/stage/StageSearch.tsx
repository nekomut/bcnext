'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { StageSearchParams } from './types';

interface StageSearchProps {
  onSearch: (params: StageSearchParams) => void;
  loading: boolean;
}

export function StageSearch({ onSearch, loading }: StageSearchProps) {
  const urlSearchParams = useSearchParams();
  const [eventId, setEventId] = useState<string>('');
  const [stageName, setStageName] = useState<string>('');
  const [typeId, setTypeId] = useState<string>('34');
  const [sortBy, setSortBy] = useState<'id-desc' | 'id-asc'>('id-desc');

  // URLパラメータから直接値を読み取り
  useEffect(() => {
    const eventParam = urlSearchParams.get('event');
    const nameParam = urlSearchParams.get('name');
    const typeParam = urlSearchParams.get('type');
    const sortParam = urlSearchParams.get('sort');

    setEventId(eventParam || '');
    setStageName(nameParam || '');
    setTypeId(typeParam || '34');
    setSortBy((sortParam as 'id-desc' | 'id-asc') || 'id-desc');
  }, [urlSearchParams]);

  const handleSearch = () => {
    const params: StageSearchParams = {};
    
    if (eventId && !isNaN(Number(eventId))) {
      params.eventId = Number(eventId);
    }
    if (stageName.trim()) {
      params.stageName = stageName.trim();
      // ステージ名で検索する場合はtypeIdを無視して全タイプを検索対象にする
    } else if (typeId && !isNaN(Number(typeId))) {
      // ステージ名が空の場合のみtypeIdを適用
      params.typeId = Number(typeId);
    }
    params.sortBy = sortBy;
    
    onSearch(params);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setEventId('');
    setStageName('');
    setTypeId('34');
    setSortBy('id-desc');
    onSearch({ typeId: 34, sortBy: 'id-desc' });
  };

  return (
    <div className="bg-white rounded shadow-sm border p-1 mb-1">
      <div className="flex items-center gap-1 mb-1">
        <h2 className="text-[12px] font-semibold text-gray-900">ステージ検索</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 mb-1">
        <div className="flex items-center gap-2">
          <label htmlFor="stage-event-id" className="text-xs font-medium text-gray-700 whitespace-nowrap" style={{flexBasis: '38.2%'}}>イベントID</label>
          <input
            id="stage-event-id"
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="1173"
            className="px-2 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent text-sm text-gray-500"
            style={{flexBasis: '61.8%'}}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="stage-name" className="text-xs font-medium text-gray-700 whitespace-nowrap" style={{flexBasis: '38.2%'}}>ステージ名</label>
          <input
            id="stage-name"
            type="text"
            value={stageName}
            onChange={(e) => setStageName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="メタル"
            className="px-2 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent text-sm text-gray-500"
            style={{flexBasis: '61.8%'}}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="stage-type" className="text-xs font-medium text-gray-700 whitespace-nowrap" style={{flexBasis: '38.2%'}}>ステージタイプ</label>
          <select
            id="stage-type"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            className="px-2 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent text-sm text-gray-500"
            style={{flexBasis: '61.8%'}}
          >
            <option value="0">レジェンドストーリー</option>
            <option value="1">イベントステージ</option>
            <option value="2">コラボステージ</option>
            <option value="3">メインストーリー</option>
            <option value="4">EXステージ</option>
            <option value="6">ネコ道場</option>
            <option value="7">にゃんこ塔</option>
            <option value="11">ランキング道場</option>
            <option value="12">チャレンジバトル</option>
            <option value="13">真レジェンドストーリー</option>
            <option value="14">ネコビタン</option>
            <option value="24">強襲ステージ</option>
            <option value="25">発掘ステージ</option>
            <option value="27">コラボ強襲ステージ</option>
            <option value="31">超獣討伐</option>
            <option value="33">グランドアビス</option>
            <option value="34">レジェンドストーリー0</option>
            <option value="36">異次元コロシアム</option>
            <option value="37">にゃんこ道検定</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="stage-sort" className="text-xs font-medium text-gray-700 whitespace-nowrap" style={{flexBasis: '38.2%'}}>並び順</label>
          <select
            id="stage-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'id-desc' | 'id-asc')}
            className="px-2 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent text-sm text-gray-500"
            style={{flexBasis: '61.8%'}}
          >
            <option value="id-desc">ID降順</option>
            <option value="id-asc">ID昇順</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 justify-end">
        <button
          id="clear-button"
          onClick={handleClear}
          disabled={loading}
          className="inline-flex items-center gap-1 border border-gray-400 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-3 py-0.5 rounded text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-gray-500"
          aria-label="検索条件をクリア"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          クリア
        </button>
        
        <button
          id="search-button"
          onClick={handleSearch}
          disabled={loading}
          className="inline-flex items-center gap-1 border border-gray-400 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-3 py-0.5 rounded text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500"
          aria-label="ステージを検索"
        >
          {loading ? (
            <>
              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              検索中...
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              検索
            </>
          )}
        </button>
      </div>
    </div>
  );
}