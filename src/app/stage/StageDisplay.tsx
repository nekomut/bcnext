'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import type { StageData, StageInfo, EnemyStageInfo, TreasureInfo } from './types';

interface StageDisplayProps {
  stageData: StageData;
}

export function StageDisplay({ stageData }: StageDisplayProps) {
  const [selectedStageId, setSelectedStageId] = useState<number>(0);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const selectedStage = stageData.stages[selectedStageId];

  if (!selectedStage) {
    return (
      <div className="text-red-500">ステージデータが見つかりません</div>
    );
  }

  const formatNumber = (value: number | string): string => {
    const num = typeof value === 'string' ? parseInt(value) : value;
    return isNaN(num) ? '-' : num.toLocaleString();
  };

  const getTraitColor = (trait: string): string => {
    const colors: Record<string, string> = {
      '赤': 'text-red-500',
      '浮': 'text-green-500',
      '黒': 'text-gray-800',
      'メ': 'text-gray-400',
      '無': 'text-gray-600',
      '天': 'text-yellow-500',
      'エ': 'text-cyan-500',
      'ゾ': 'text-blue-500',
      '古': 'text-green-600',
      '悪': 'text-purple-500'
    };
    return colors[trait] || 'text-gray-600';
  };

  return (
    <div className="mt-3">
      {/* イベント情報 */}
      <div className="bg-white rounded-lg shadow-sm border mb-3">
        <div className="p-3 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                #{stageData.eventId} {stageData.eventName}
              </h2>
              <p className="text-xs text-gray-600">
                {stageData.typeName} ({stageData.typeId}) | マップID: {stageData.mapId} | プレフィックス: {stageData.prefix}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
              {stageData.stages.length}ステージ
            </span>
          </div>
        </div>

        {/* ステージ選択 */}
        {stageData.stages.length > 1 && (
          <div className="p-3">
            <label className="block text-xs font-medium text-gray-700 mb-2">ステージ選択:</label>
            <div className="flex flex-wrap gap-1">
              {stageData.stages.map((stage, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStageId(index)}
                  className={`px-2 py-1 text-xs font-medium rounded border transition-colors ${
                    selectedStageId === index
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  <span className="font-mono">{index + 1}</span>: {stage.stageName}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 表示オプション */}
        <div className="px-3 pb-3">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showDetail}
              onChange={(e) => setShowDetail(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-1"
            />
            <span className="text-xs font-medium text-gray-700">詳細表示（フレーム情報含む）</span>
          </label>
        </div>
      </div>

      {/* ステージ基本情報 */}
      <StageBasicInfo stage={selectedStage} />

      {/* ドロップ報酬 */}
      {selectedStage.treasures.length > 0 && (
        <TreasureDisplay treasures={selectedStage.treasures} />
      )}

      {/* 敵情報テーブル */}
      <EnemyTable 
        enemies={selectedStage.enemies} 
        showDetail={showDetail}
        getTraitColor={getTraitColor}
        formatNumber={formatNumber}
      />
    </div>
  );
}

function StageBasicInfo({ stage }: { stage: StageInfo }) {
  const formatNumber = (value: number | string): string => {
    const num = typeof value === 'string' ? parseInt(value) : value;
    return isNaN(num) ? '-' : num.toLocaleString();
  };

  const getCostLimitText = () => {
    const { lower, upper } = stage.costLimits;
    if (lower > 0 && upper > 0) {
      if (lower === upper) return `統率力制限: ${formatNumber(lower)}`;
      return `統率力制限: ${formatNumber(lower)}-${formatNumber(upper)}`;
    }
    if (lower > 0) return `統率力下限: ${formatNumber(lower)}`;
    if (upper > 0) return `統率力上限: ${formatNumber(upper)}`;
    return '';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-3">
      <div className="p-3 border-b border-gray-200">
        <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
          <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            {stage.stageId + 1}
          </span>
          {stage.stageName}
        </h3>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">必要統率力</span>
            <span className="text-sm font-semibold text-gray-900">{formatNumber(stage.requiredCost)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">城HP</span>
            <span className="text-sm font-semibold text-gray-900">{formatNumber(stage.baseHp)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">ステージ幅</span>
            <span className="text-sm font-semibold text-gray-900">{formatNumber(stage.width)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">敵最大数</span>
            <span className="text-sm font-semibold text-gray-900">{formatNumber(stage.enemyLimit)}</span>
          </div>
        </div>
        {getCostLimitText() && (
          <div className="mt-2 p-2 bg-orange-50 border border-orange-200 rounded">
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium text-orange-800">{getCostLimitText()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TreasureDisplay({ treasures }: { treasures: TreasureInfo[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-3">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-base font-semibold text-gray-900">ドロップ報酬</h4>
        </div>
      </div>
      <div className="p-3 space-y-2">
        {treasures.map((treasure, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded">
            <div className="flex items-center gap-2">
              {treasures.length > 1 && (
                <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  {index + 1}
                </span>
              )}
              <div>
                <div className="text-sm font-medium text-green-800">{treasure.treasureName}</div>
                {treasure.amount !== '0' && (
                  <div className="text-xs text-green-600">+{treasure.amount}</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                {treasure.probability}%
              </div>
              {treasure.limitText !== '-1' && (
                <div className="text-xs text-gray-600 mt-0.5">
                  制限: {treasure.limitText}回
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface EnemyTableProps {
  enemies: EnemyStageInfo[];
  showDetail: boolean;
  getTraitColor: (trait: string) => string;
  formatNumber: (value: number | string) => string;
}

function EnemyTable({ enemies, showDetail, getTraitColor, formatNumber }: EnemyTableProps) {
  if (enemies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-base font-medium text-gray-900 mb-1">敵データがありません</h3>
        <p className="text-sm text-gray-500">このステージには敵情報が設定されていません</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-base font-semibold text-gray-900">敵情報 ({enemies.length}種類)</h4>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">敵名</th>
              <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">倍率</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">体力</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">攻撃力</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">DPS</th>
              {showDetail && (
                <>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">頻度s</th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">頻度f</th>
                </>
              )}
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">射程</th>
              <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">範囲</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">速度</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">KB</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">お金</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">城連動</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">出現数</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">出現s</th>
              {showDetail && <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">出現f</th>}
              <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">間隔s</th>
              {showDetail && <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">間隔f</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {enemies.map((enemy, index) => (
              <EnemyRow 
                key={index}
                enemy={enemy}
                showDetail={showDetail}
                getTraitColor={getTraitColor}
                formatNumber={formatNumber}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface EnemyRowProps {
  enemy: EnemyStageInfo;
  showDetail: boolean;
  getTraitColor: (trait: string) => string;
  formatNumber: (value: number | string) => string;
}

function EnemyRow({ enemy, showDetail, getTraitColor, formatNumber }: EnemyRowProps) {
  const isBoss = enemy.stageStats.isBoss;
  const nameClass = isBoss ? 'text-red-600 font-bold' : 'text-blue-600';
  const displayName = isBoss ? `${enemy.enemyName}*` : enemy.enemyName;
  const magClass = enemy.stageStats.magnification !== '100%' ? 'text-yellow-600 font-semibold' : 'text-gray-600';
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-2 py-1 text-green-600 font-mono text-xs text-right font-medium">
        {enemy.enemyId}
      </td>
      <td className={`px-2 py-1 ${nameClass}`}>
        <div className="flex items-center gap-1">
          {enemy.icon && (
            <Image 
              src={`data:image/png;base64,${enemy.icon}`} 
              alt={enemy.enemyName}
              className="w-4 h-4 flex-shrink-0"
              width={16}
              height={16}
            />
          )}
          <div className="max-w-28 truncate text-xs font-medium" title={displayName}>
            {displayName}
          </div>
        </div>
      </td>
      <td className="px-2 py-1 text-center">
        {enemy.traits.length > 0 ? (
          <div className="flex flex-wrap gap-0.5 justify-center">
            {enemy.traits.map((trait, index) => (
              <span key={index} className={`${getTraitColor(trait)} inline-flex items-center px-1 py-0.5 rounded text-xs font-medium`}>
                {trait}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>
      <td className={`px-2 py-1 text-right text-xs ${magClass}`}>
        {enemy.stageStats.magnification}
      </td>
      <td className="px-2 py-1 text-right text-xs font-medium text-gray-500">
        {formatNumber(enemy.stageStats.actualHp)}
      </td>
      <td className="px-2 py-1 text-right text-xs font-medium text-gray-500">
        {formatNumber(enemy.stageStats.actualAp)}
      </td>
      <td className="px-2 py-1 text-right text-xs font-bold text-red-600">
        {formatNumber(Math.round(enemy.stageStats.actualDps))}
      </td>
      {showDetail && (
        <>
          <td className="px-2 py-1 text-right text-xs text-gray-400">
            {/* 頻度s - stg.pyから計算式を移植する必要があります */}
            -
          </td>
          <td className="px-2 py-1 text-right text-xs text-gray-400">
            {/* 頻度f */}
            -
          </td>
        </>
      )}
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.baseStats.range > 0 ? enemy.baseStats.range : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-center">
        <span className={`inline-flex items-center px-1 py-0.5 rounded text-xs font-medium ${
          enemy.baseStats.rangeType === '範囲' 
            ? 'bg-cyan-100 text-cyan-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {enemy.baseStats.rangeType}
        </span>
      </td>
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.baseStats.speed > 0 ? enemy.baseStats.speed : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.baseStats.kbLevel > 0 ? enemy.baseStats.kbLevel : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-right text-xs font-medium text-yellow-600">
        {formatNumber(enemy.baseStats.money)}
      </td>
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.stageStats.baseHpRatio}
      </td>
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.stageStats.count === '0' ? 
          <span className="text-gray-400">-</span> : 
          <span className="font-medium">{formatNumber(enemy.stageStats.count)}</span>
        }
      </td>
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.stageStats.spawnTime}
      </td>
      {showDetail && (
        <td className="px-2 py-1 text-right text-xs text-gray-600">
          {enemy.stageStats.spawnTimeFrames}
        </td>
      )}
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.stageStats.delay}
      </td>
      {showDetail && (
        <td className="px-2 py-1 text-right text-xs text-gray-600">
          {enemy.stageStats.delayFrames}
        </td>
      )}
    </tr>
  );
}