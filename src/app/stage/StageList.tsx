'use client'

import React, { useState, useEffect, useCallback } from 'react';
import type { EventInfo } from './types';
import StageDataManager from './StageDataManager';

interface SpecialRule {
  name: string;
  explanation: string;
  ruleTypes: Record<string, { Parameters: number[] }>;
  contentsType: number;
}

interface StageListProps {
  events: EventInfo[];
  searchTerm?: string;
  onStageSelect: (eventId: number) => void;
  onSpecificStageSelect?: (eventId: number, stageId: number) => void;
}

export function StageList({ events, searchTerm, onStageSelect, onSpecificStageSelect }: StageListProps) {
  const [specialRules, setSpecialRules] = useState<Record<number, SpecialRule | null>>({});
  const [loadingRules, setLoadingRules] = useState<Record<number, boolean>>({});

  // 特別ルール情報を取得する関数
  const loadSpecialRule = useCallback(async (eventId: number) => {
    if (specialRules[eventId] !== undefined || loadingRules[eventId]) {
      return; // 既に読み込み済みまたは読み込み中
    }

    setLoadingRules(prev => ({ ...prev, [eventId]: true }));
    
    try {
      const stageData = await StageDataManager.loadStageData(eventId);
      if (stageData?.specialRule) {
        setSpecialRules(prev => ({ ...prev, [eventId]: stageData.specialRule }));
      } else {
        setSpecialRules(prev => ({ ...prev, [eventId]: null }));
      }
    } catch (error) {
      console.error(`Failed to load special rule for event ${eventId}:`, error);
      setSpecialRules(prev => ({ ...prev, [eventId]: null }));
    } finally {
      setLoadingRules(prev => ({ ...prev, [eventId]: false }));
    }
  }, [specialRules, loadingRules]);

  // コンポーネントマウント時に全イベントの特別ルール情報を取得
  useEffect(() => {
    events.forEach(event => {
      loadSpecialRule(event.eventId);
    });
  }, [events, loadSpecialRule]);

  if (events.length === 0) {
    return (
      <div className="bg-amber-50 rounded shadow-sm border p-4 text-center">
        <h3 className="text-[12px] font-medium text-gray-900 mb-1">ステージが見つかりませんでした</h3>
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
    <div className="bg-amber-50 rounded shadow-sm border">
      <div className="p-1 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[12px] font-semibold text-gray-900">
            検索結果 <small>({events.length}件のイベント)</small>
          </h3>
        </div>
        <p className="text-xxs text-gray-600">
          総ステージ数: {events.reduce((sum, event) => sum + event.stageCount, 0)}
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-amber-200 border-b border-gray-200">
              <th className="px-0.5 py-0 text-right text-xxs font-semibold text-gray-500 tracking-wider">
                ID
              </th>
              <th className="px-0.5 py-0 text-left text-xxs font-semibold text-gray-500 tracking-wider">
                イベント
              </th>
              <th className="px-3.5 py-0 text-left text-xxs font-semibold text-gray-500 tracking-wider">
                ステージ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.eventId} className="hover:bg-amber-100 transition-colors">
                <td className="px-0.5 py-0 align-top text-right">
                  <button
                    onClick={() => onStageSelect(event.eventId)}
                    className="inline-flex items-right px-0.5 py-0.5 text-xs font-mono font-medium text-gray-600 hover:text-orange-800 hover:bg-amber-50 rounded transition-colors"
                  >
                    <small>{event.eventId}</small>
                  </button>
                </td>
                <td className="px-0.5 py-0 align-top">
                  <div className="flex flex-col">
                    <button
                      onClick={() => onStageSelect(event.eventId)}
                      className="text-left w-full font-semibold text-xs text-gray-600 hover:text-orange-800 hover:underline"
                    >
                      <small>{highlightText(event.eventName, searchTerm)}</small>
                    </button>
                    
                    {/* 特別ルール情報を表示 */}
                    {specialRules[event.eventId] && (
                      <div className="mt-0 px-0 py-0 font-semibold text-xxs text-orange-600">
                        <div className="font-medium">
                          特別ルール: {specialRules[event.eventId]!.name || '特別ルール'}
                        </div>
                        {/*specialRules[event.eventId]!.explanation && (
                          <div className="text-xxxs leading-tight mt-0.5 whitespace-pre-line">
                            {specialRules[event.eventId]!.explanation}
                          </div>
                        )*/}
                      </div>
                    )}
                    
                    {/* 読み込み中の表示 */}
                    {loadingRules[event.eventId] && (
                      <div className="mt-1 px-1 py-0.5 bg-gray-50 border border-gray-200 rounded text-xxs text-gray-500">
                        特別ルール確認中...
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-0.5 py-0 align-top">
                  <div className="space-y-0">
                    {event.stageIds.map((stageId) => {
                      const stageName = event.stageInfo[stageId] || `ステージ${stageId}`;
                      const isMatch = searchTerm && stageName.toLowerCase().includes(searchTerm.toLowerCase());
                      
                      return (
                        <div key={stageId} className="text-xs flex items-start gap-1">
                          <small>
                            <span className="font-mono text-right px-1 py-0 text-gray-500 w-6 inline-block">{stageId}</span>
                            <button
                              onClick={() => {
                                if (onSpecificStageSelect) {
                                  onSpecificStageSelect(event.eventId, stageId);
                                } else {
                                  onStageSelect(event.eventId);
                                }
                              }}
                              className={`flex-1 text-left text-xxs hover:underline transition-colors ${
                                isMatch ? 'text-orange-600 font-semibold hover:text-orange-800' : 'text-gray-600 hover:text-orange-800'
                              }`}
                            >
                              {highlightText(stageName, searchTerm)}
                            </button>
                          </small>
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