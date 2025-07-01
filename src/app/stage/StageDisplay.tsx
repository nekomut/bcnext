'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import type { StageData, StageInfo, EnemyStageInfo, TreasureInfo } from './types';
import { icons } from '../../data/icons';

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

  const getTraitIcon = (trait: string): string | null => {
    const traitIconMap: Record<string, string> = {
      '赤': 'traitRed',
      '浮': 'traitFloating',
      '黒': 'traitBlack',
      'メ': 'traitMetal',
      '無': 'traitNone',
      '天': 'traitAngel',
      'エ': 'traitAlien',
      'ゾ': 'traitZombie',
      '古': 'traitAncient',
      '悪': 'traitEvil'
    };
    const iconKey = traitIconMap[trait];
    return iconKey && icons[iconKey as keyof typeof icons] ? icons[iconKey as keyof typeof icons] : null;
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
            <div>
              <h2 className="text-sm font-bold text-gray-900">
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

      {/* ステージ詳細情報 */}
      <div className="bg-white rounded-lg shadow-sm border">
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
          getTraitIcon={getTraitIcon}
          formatNumber={formatNumber}
        />
      </div>
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
    <div>
      <div className="p-1">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-1">
          {stage.stageId + 1}{': '}{stage.stageName}
        </h3>
      </div>
      <div className="p-1">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-500">必要統率力:</span>
            <span className="font-semibold text-gray-900">{formatNumber(stage.requiredCost)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-500">城HP:</span>
            <span className="font-semibold text-gray-900">{formatNumber(stage.baseHp)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-500">ステージ幅:</span>
            <span className="font-semibold text-gray-900">{formatNumber(stage.width)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-500">敵最大数:</span>
            <span className="font-semibold text-gray-900">{formatNumber(stage.enemyLimit)}</span>
          </div>
        </div>
        {getCostLimitText() && (
          <div className="mt-1 p-2 bg-orange-50 border border-orange-200 rounded">
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
    <div>
      <div className="p-1">
        <div className="flex items-center gap-1">
          <h4 className="text-xs mt-1 font-semibold text-gray-900">ドロップ報酬</h4>
        </div>
      </div>
      <div className="p-1 space-y-0">
        {treasures.map((treasure, index) => (
          <div key={index} className="flex items-center gap-1.5 text-xs">
            {treasures.length > 1 && (
              <span className="inline-flex items-right px-1 py-0.5 rounded text-gray-500 text-xs font-medium flex-shrink-0">
                {index + 1}
              </span>
            )}
            <span className="font-medium text-green-800 flex-shrink-0">
              {treasure.treasureName}
            </span>
            {treasure.amount !== '0' && (
              <span className="text-green-600 flex-shrink-0">
                +{treasure.amount}
              </span>
            )}
            <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 flex-shrink-0 w-10 justify-end">
              {treasure.probability}%
            </span>
            {treasure.limitText !== '-1' && (
              <span className="text-gray-600 flex-shrink-0">
                制限: {treasure.limitText}回
              </span>
            )}
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
  getTraitIcon: (trait: string) => string | null;
  formatNumber: (value: number | string) => string;
}

function EnemyTable({ enemies, showDetail, getTraitColor, getTraitIcon, formatNumber }: EnemyTableProps) {
  if (enemies.length === 0) {
    return (
      <div>
        <div className="p-3">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-semibold text-gray-900">敵情報 (0種類)</h4>
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xs font-medium text-gray-900 mb-1">敵データがありません</h3>
          <p className="text-xs text-gray-500">このステージには敵情報が設定されていません</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-1">
        <div className="flex items-center gap-2">
          <h4 className="text-xs font-semibold text-gray-900">敵情報 ({enemies.length}種類)</h4>
        </div>
      </div>
      
      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">ID</th>
              <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">敵名</th>
              <th className="px-1 py-1 text-center text-xs font-medium text-gray-500 tracking-wider w-16 min-w-16 whitespace-nowrap">属性</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">倍率</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">体力</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">攻撃力</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">DPS</th>
              {showDetail && (
                <>
                  <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">頻度s</th>
                  <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">頻度f</th>
                </>
              )}
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">射程</th>
              <th className="px-1 py-1 text-center text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">範囲</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">速度</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">KB</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">お金</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">城連動</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">出現数</th>
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">出現s</th>
              {showDetail && <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">出現f</th>}
              <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">間隔s</th>
              {showDetail && <th className="px-1 py-1 text-right text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap">間隔f</th>}
            </tr>
          </thead>
          <tbody>
            {enemies.map((enemy, index) => (
              <EnemyRow 
                key={index}
                enemy={enemy}
                showDetail={showDetail}
                getTraitColor={getTraitColor}
                getTraitIcon={getTraitIcon}
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
  getTraitIcon: (trait: string) => string | null;
  formatNumber: (value: number | string) => string;
}

function EnemyRow({ enemy, showDetail, getTraitColor, getTraitIcon, formatNumber }: EnemyRowProps) {
  const isBoss = enemy.stageStats.isBoss;
  const nameClass = isBoss ? 'text-red-500 font-bold' : 'text-gray-500';
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
      <td className="px-2 py-1 text-center w-16 min-w-16">
        {enemy.traits.length > 0 ? (
          <div className="flex flex-wrap gap-0.5 justify-center">
            {enemy.traits.map((trait, index) => {
              const iconData = getTraitIcon(trait);
              return iconData ? (
                <Image
                  key={index}
                  src={`data:image/png;base64,${iconData}`}
                  alt={trait}
                  className="w-4 h-4 flex-shrink-0"
                  width={16}
                  height={16}
                  title={trait}
                />
              ) : (
                <span key={index} className={`${getTraitColor(trait)} inline-flex items-center px-1 py-0.5 rounded text-xs font-medium`}>
                  {trait}
                </span>
              );
            })}
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
          <td className="px-2 py-1 text-right text-xs text-gray-500">
            {enemy.baseStats.freq > 0 ? `${(enemy.baseStats.freq / 30).toFixed(2)}s` : '-'}
          </td>
          <td className="px-2 py-1 text-right text-xs text-gray-500">
            {enemy.baseStats.freq > 0 ? `${enemy.baseStats.freq}f` : '-'}
          </td>
        </>
      )}
      <td className="px-2 py-1 text-right text-xs text-gray-500">
        {enemy.baseStats.range > 0 ? enemy.baseStats.range : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-center whitespace-nowrap">
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
