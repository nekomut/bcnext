'use client'

import React from 'react';
import type { EventInfo } from './types';

interface StageListProps {
  events: EventInfo[];
  searchTerm?: string;
  onStageSelect: (eventId: number) => void;
}

export function StageList({ events, searchTerm, onStageSelect }: StageListProps) {
  if (events.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-base font-medium text-gray-900 mb-1">ステージが見つかりませんでした</h3>
        <p className="text-sm text-gray-500">検索条件を変更してお試しください</p>
      </div>
    );
  }

  const highlightText = (text: string, term?: string) => {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 px-1 rounded font-semibold">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900">
            検索結果 ({events.length}件のイベント)
          </h3>
        </div>
        <p className="text-xs text-gray-600">
          総ステージ数: {events.reduce((sum, event) => sum + event.stageCount, 0)}
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                イベントID
              </th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                イベント名
              </th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                タイプ
              </th>
              <th className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                ステージ数
              </th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ステージ一覧
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.eventId} className="hover:bg-gray-50 transition-colors">
                <td className="px-2 py-2">
                  <button
                    onClick={() => onStageSelect(event.eventId)}
                    className="inline-flex items-center px-1 py-0.5 text-xs font-mono font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                  >
                    {event.eventId}
                  </button>
                </td>
                <td className="px-2 py-2">
                  <button
                    onClick={() => onStageSelect(event.eventId)}
                    className="text-left w-full text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {highlightText(event.eventName, searchTerm)}
                  </button>
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {event.typeId}
                    </span>
                    <span className="ml-1 text-xs text-gray-900">{event.typeName}</span>
                  </div>
                </td>
                <td className="px-2 py-2 text-center">
                  <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    {event.stageCount}
                  </span>
                </td>
                <td className="px-2 py-2">
                  <div className="max-h-20 overflow-y-auto space-y-0.5">
                    {event.stageIds.map((stageId) => {
                      const stageName = event.stageInfo[stageId] || `ステージ${stageId}`;
                      const isMatch = searchTerm && stageName.toLowerCase().includes(searchTerm.toLowerCase());
                      
                      return (
                        <div key={stageId} className={`text-xs flex items-center gap-1 ${
                          isMatch ? 'text-green-600 font-semibold' : 'text-gray-600'
                        }`}>
                          <span className="font-mono text-xs bg-gray-100 px-0.5 rounded">{stageId}</span>
                          <span className="flex-1">{highlightText(stageName, searchTerm)}</span>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}