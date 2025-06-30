'use client'

import React, { useState, useEffect } from 'react';
import type { StageSearchParams } from './types';

interface StageSearchProps {
  onSearch: (params: StageSearchParams) => void;
  initialParams: StageSearchParams;
  loading: boolean;
}

export function StageSearch({ onSearch, initialParams, loading }: StageSearchProps) {
  const [eventId, setEventId] = useState<string>('');
  const [stageName, setStageName] = useState<string>('');
  const [typeId, setTypeId] = useState<string>('');
  const [sortBy, setSortBy] = useState<'id' | 'type' | 'name' | 'stages'>('id');

  // 初期パラメータを設定
  useEffect(() => {
    if (initialParams.eventId) setEventId(initialParams.eventId.toString());
    if (initialParams.stageName) setStageName(initialParams.stageName);
    if (initialParams.typeId !== undefined) setTypeId(initialParams.typeId.toString());
    if (initialParams.sortBy) setSortBy(initialParams.sortBy);
  }, [initialParams]);

  const handleSearch = () => {
    const params: StageSearchParams = {};
    
    if (eventId && !isNaN(Number(eventId))) {
      params.eventId = Number(eventId);
    }
    if (stageName.trim()) {
      params.stageName = stageName.trim();
    }
    if (typeId && !isNaN(Number(typeId))) {
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
    setTypeId('');
    setSortBy('id');
    onSearch({ sortBy: 'id' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-3 mb-3">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-base font-semibold text-gray-900">ステージ検索</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">イベントID</label>
          <input
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="例: 1001"
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">ステージ名</label>
          <input
            type="text"
            value={stageName}
            onChange={(e) => setStageName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="例: ドラゴン"
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">ステージタイプ</label>
          <select
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
          >
            <option value="">すべてのタイプ</option>
            <option value="0">レジェンドストーリー</option>
            <option value="1">イベントステージ</option>
            <option value="2">コラボステージ</option>
            <option value="3">メインステージ</option>
            <option value="4">EXステージ</option>
            <option value="6">ランキング道場</option>
            <option value="7">にゃんこ塔</option>
            <option value="11">ランキング道場</option>
            <option value="12">チャレンジバトル</option>
            <option value="13">真レジェンドストーリー</option>
            <option value="14">ネコビタン</option>
            <option value="16">レジェンドクエスト</option>
            <option value="24">強襲ステージ</option>
            <option value="25">発掘ステージ</option>
            <option value="27">コラボ強襲ステージ</option>
            <option value="31">超獣討伐</option>
            <option value="33">地底迷宮</option>
            <option value="34">レジェンドストーリー0</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">並び順</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'id' | 'type' | 'name' | 'stages')}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
          >
            <option value="id">ID順</option>
            <option value="type">タイプ順</option>
            <option value="name">名前順</option>
            <option value="stages">ステージ数順</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleSearch}
          disabled={loading}
          className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500"
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
        
        <button
          onClick={handleClear}
          disabled={loading}
          className="inline-flex items-center gap-1 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          クリア
        </button>
      </div>
    </div>
  );
}