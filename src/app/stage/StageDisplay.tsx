'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { StageData, StageInfo, EnemyStageInfo, TreasureInfo } from './types';
import { icons } from '../../data/icons';
import { loadEnemyIcon } from './iconLoader';

interface StageDisplayProps {
  stageData: StageData;
  onBackToSearch?: () => void;
}

export function StageDisplay({ stageData, onBackToSearch }: StageDisplayProps) {

  const [selectedStageId, setSelectedStageId] = useState<number>(stageData.selectedStageIndex ?? 0);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  // 星の数の状態管理（シンプル化）
  const [selectedCrown, setSelectedCrown] = useState<number>(1);

  // stageDataが変更された時に選択されたステージを更新
  useEffect(() => {
    setSelectedStageId(stageData.selectedStageIndex ?? 0);
  }, [stageData.selectedStageIndex]);

  // URLパラメータの変更を監視（一時的に無効化）
  /*
  useEffect(() => {
    const maxCrown = stageData.crownData?.crownCount || 4;
    const crownParam = searchParams.get('crown');
    const crownFromUrl = sanitizeCrownParam(crownParam, maxCrown);
    
    // URLから読み取った値が現在の値と異なる場合のみ更新
    setSelectedCrown(prevCrown => {
      if (prevCrown !== crownFromUrl) {
        return crownFromUrl;
      }
      return prevCrown;
    });
  }, [searchParams, stageData.crownData]);
  */

  // 星の数から倍率への変換ロジック
  const getEffectiveMagnification = (crown: number, currentStage: StageInfo): number => {
    if (crown < 1) return 100; // 最小値チェック
    
    // ステージ固有の星倍率データを優先
    if (currentStage.crownData) {
      if (crown > currentStage.crownData.crownCount) {
        // 最大値を超える場合は最大値の倍率を使用
        return currentStage.crownData.magnifications[currentStage.crownData.crownCount - 1] || 100;
      }
      return currentStage.crownData.magnifications[crown - 1] || 100;
    }
    
    // ステージ固有データがない場合はイベント全体の設定を使用
    if (stageData.crownData) {
      if (crown > stageData.crownData.crownCount) {
        // 最大値を超える場合は最大値の倍率を使用
        return stageData.crownData.magnifications[stageData.crownData.crownCount - 1] || 100;
      }
      return stageData.crownData.magnifications[crown - 1] || 100;
    }
    
    // フォールバック：テスト用の倍率計算
    return 100 + crown * 50;
  };

  // 正しい倍率適用計算ロジック（ステージ固有倍率 × 星倍率）
  const applyMagnificationToEnemies = (enemies: EnemyStageInfo[], crownMagnification: number): EnemyStageInfo[] => {
    try {
      return enemies.map(enemy => {
        // ベースステータスの存在確認
        if (!enemy.baseStats) {
          console.warn(`Enemy ${enemy.enemyId} has no baseStats`);
          return enemy;
        }
        
        // ステージ固有倍率を取得（stageStats.magnificationから）
        const stageMagString = enemy.stageStats.magnification || "100%";
        const stageMagnification = parseFloat(stageMagString.replace('%', ''));
        
        // 最終倍率 = ステージ固有倍率 × 星倍率
        const stageMult = stageMagnification / 100.0;  // 例: 200% → 2.0
        const crownMult = crownMagnification / 100.0;   // 例: 150% → 1.5
        const finalMultiplier = stageMult * crownMult;  // 例: 2.0 × 1.5 = 3.0
        
        // battlecatsWikiの実装に基づく正しい計算
        // 基本ステータスに最終倍率を適用
        const newHp = Math.round(enemy.baseStats.hp * finalMultiplier);
        const newAp = Math.round(enemy.baseStats.ap * finalMultiplier);
        
        // DPSは新しい攻撃力から再計算（freq > 0の場合のみ）
        const newDps = enemy.baseStats.freq > 0 
          ? Math.round(newAp / enemy.baseStats.freq * 30 * 100) / 100  // 小数点2桁
          : 0;
        
        console.log(`Enemy ${enemy.enemyId}: Stage ${stageMagnification}% × Crown ${crownMagnification}% = ${Math.round(finalMultiplier * 100)}%`);
        console.log(`  HP: ${enemy.baseStats.hp} → ${newHp}, AP: ${enemy.baseStats.ap} → ${newAp}`);
        
        return {
          ...enemy,
          stageStats: {
            ...enemy.stageStats,
            actualHp: newHp,
            actualAp: newAp,
            actualDps: newDps,
            magnification: `${Math.round(finalMultiplier * 100)}%`, // 最終倍率を表示
            // 他のステータスは元の値を維持（倍率適用なし）
          }
        };
      });
    } catch (error) {
      console.error('Error applying magnification to enemies:', error);
      return enemies; // エラー時は元のデータを返す
    }
  };

  const getStageDisplayInfo = (stage: StageInfo, crown: number): StageInfo => {
    try {
      const magnification = getEffectiveMagnification(crown, stage);
      const newBaseHp = Math.round((stage.baseHp || 0) * magnification / 100);
      
      return {
        ...stage,
        // 城HPも倍率適用
        baseHp: newBaseHp,
        // 敵データに倍率適用
        enemies: applyMagnificationToEnemies(stage.enemies || [], magnification)
      };
    } catch (error) {
      console.error('Error in getStageDisplayInfo:', error);
      return stage; // エラー時は元のステージデータを返す
    }
  };

  const selectedStage = stageData.stages[selectedStageId];

  if (!selectedStage) {
    return (
      <div className="text-red-500">ステージデータが見つかりません</div>
    );
  }

  const displayStage = getStageDisplayInfo(selectedStage, selectedCrown);

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
      '無': 'traitTraitless',
      '天': 'traitAngel',
      'エ': 'traitAlien',
      'ゾ': 'traitZombie',
      '古': 'traitRelic',
      '悪': 'traitAku',
      '使': 'traitEvaAngel',
      '魔': 'traitWitch',
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

  const getAbilityIcon = (abilityName: string): string | null => {
    const abilityIconMap: Record<string, string> = {
      'knockback': 'abilityKnockback',
      'freeze': 'abilityFreeze',
      'slow': 'abilitySlow',
      'weaken': 'abilityWeaken',
      'curse': 'abilityCurse',
      'toxic': 'abilityToxic',
      'surge': 'abilitySurge',
      'wave': 'abilityWave',
      'mini-wave': 'abilityMiniWave',
      'savage-blow': 'abilitySavageBlow',
      'critical': 'abilityCritical',
      'barrier-breaker': 'abilityBarrierBreaker',
      'shield-piercer': 'abilityShieldPiercer',
      'warp': 'abilityWarp',
      'strengthen': 'abilityStrengthen',
      'survive': 'abilitySurvive',
      'long-distance': 'abilityLongDistance',
      'omni-strike': 'abilityOmniStrike',
      'multi-hit': 'abilityMultiHit',
      'burrow': 'abilityBurrow',
      'revive': 'abilityRevive',
      'barrier': 'abilityBarrier',
      'shield': 'abilityShield',
      'aku-shield': 'abilityShield',
      'death-surge': 'abilityDeathSurge',
      'immune-surge': 'abilityImmuneSurge',
      'immune-knockback': 'abilityImmuneKnockback',
      'immune-slow': 'abilityImmuneSlow',
      'immune-freeze': 'abilityImmuneFreeze',
      'immune-waves': 'abilityImmuneWave',
      'immune-weaken': 'abilityImmuneWeaken',
      'immune-curse': 'abilityImmuneCurse',
      'counter-surge': 'abilityCounterSurge',
      'dodge-attack': 'abilityDodgeAttack',
      'immune-attacks': 'abilityDodgeAttack',
      'base-destroyer': 'abilityBaseDestroyer',
      'explosion': 'abilityExplosion',
      'behemoth': 'abilityBehemoth',
      'colossus': 'abilityColossus',
      'sage': 'abilitySage',
    };
    const iconKey = abilityIconMap[abilityName];
    return iconKey && icons[iconKey as keyof typeof icons] ? icons[iconKey as keyof typeof icons] : null;
  };

  return (
    <div className="mt-1">
      {/* 検索に戻るボタン */}
      {onBackToSearch && (
        <div className="mb-1">
          <button
            onClick={onBackToSearch}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-gray-700 bg-orange-400 border border-gray-600 rounded hover:bg-orange-500 hover:border-gray-400 transition-colors"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            検索結果に戻る
          </button>
        </div>
      )}
      
      {/* イベント情報 */}
      <div className="bg-amber-50 rounded shadow-sm border mb-1">
        <div className="p-1">
          <div className="flex items-center gap-2 mb-1">
            <div>
              <h2 className="text-[13px] font-bold text-gray-900 flex items-center gap-2">
                #{stageData.eventId} {stageData.eventName}
                <span className="inline-flex items-center px-1 py-0.5 rounded text-xs font-semibold text-orange-600">
                  {stageData.stages.length}ステージ
                </span>
              </h2>
              <p className="text-xs text-gray-600">
                {stageData.typeName} ({stageData.typeId}) | マップID: {stageData.mapId} | プレフィックス: {stageData.prefix}
              </p>
              {stageData.specialRule && stageData.specialRule !== null && (
                <div className="text-xs text-yellow-800 bg-yellow-100 rounded-md px-1 py-0.5 mt-0 whitespace-pre-line">
                  {stageData.specialRule.explanation}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ステージ選択 */}
        {stageData.stages.length > 1 && (
          <div className="px-1 pb-1">
            <div className="flex items-center gap-2">
              {stageData.eventId === 33000 ? (
                // event_id=33000の場合はプルダウン表示
                <div className="flex items-center gap-2">
                  <label className="text-xs font-medium text-gray-700">ステージ:</label>
                  <select
                    value={selectedStageId}
                    onChange={(e) => setSelectedStageId(parseInt(e.target.value))}
                    className="text-xs text-gray-500 border border-gray-300 rounded px-2 py-0.5 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {stageData.stages.map((stage, index) => (
                      <option key={index} value={index}>
                        {stage.stageId}: {stage.stageName}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                // その他のevent_idの場合は従来のボタン表示
                <div className="flex flex-wrap gap-1">
                  {stageData.stages.map((stage, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedStageId(index)}
                      className={`px-2 py-0.5 text-xs font-medium rounded border transition-colors ${
                        selectedStageId === index
                          ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      <span className="font-mono">{stage.stageId}</span>: {stage.stageName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 星倍率選択 */}
        {(stageData.crownData || selectedStage.crownData) && (
          <div className="px-1 pb-1">
            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-gray-700">難易度:</label>
              <select 
                value={selectedCrown} 
                onChange={(e) => {
                  const newCrown = parseInt(e.target.value);
                  console.log('Dropdown onChange - setting crown to:', newCrown);
                  setSelectedCrown(newCrown);
                  // 一時的にURL更新を無効化
                  // updateCrownUrl(newCrown);
                }}
                className="text-xs text-gray-500 border border-gray-300 rounded px-2 py-1 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {(() => {
                  const crownData = selectedStage.crownData || stageData.crownData;
                  
                  if (!crownData) {
                    // crownDataがない場合でもテスト用のオプションを表示（星1から開始）
                    return [1, 2, 3].map(crown => (
                      <option key={crown} value={crown}>
                        {'★'.repeat(crown)} ({100 + crown * 50}%)
                      </option>
                    ));
                  }
                  
                  return Array.from({length: crownData.crownCount}, (_, i) => i + 1).map(crown => (
                    <option key={crown} value={crown}>
                      {'★'.repeat(crown)} ({crownData.magnifications[crown - 1]}%)
                    </option>
                  ));
                })()}
              </select>
            </div>
          </div>
        )}

        {/* 倍率適用状態の表示 */}

        {/* 表示オプション */}
        <div className="px-1 pb-1">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showDetail}
              onChange={(e) => setShowDetail(e.target.checked)}
              className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 focus:ring-1"
            />
            <span className="text-xs font-medium text-gray-700">詳細表示（フレーム情報含む）</span>
          </label>
        </div>
      </div>

      {/* ステージ詳細情報 */}
      <div className="bg-amber-50 rounded shadow-sm border">
        {/* ステージ基本情報 */}
        <StageBasicInfo stage={displayStage} />

        {/* 敵情報テーブル */}
        <EnemyTable 
          enemies={displayStage.enemies} 
          showDetail={showDetail}
          getTraitColor={getTraitColor}
          getTraitIcon={getTraitIcon}
          getAbilityIcon={getAbilityIcon}
          formatNumber={formatNumber}
        />

        {/* ドロップ報酬 */}
        {displayStage.treasures.length > 0 && (
          <TreasureDisplay treasures={displayStage.treasures} />
        )}
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
        <h3 className="text-[13px] font-semibold text-gray-900 flex items-center gap-1">
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
          <div className="mt-1 p-1 bg-orange-50 border border-orange-200 rounded">
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
      <div className="overflow-x-auto mx-1">
        <table className="whitespace-nowrap mb-2" style={{fontSize: '10px'}}>
          <thead>
            <tr className="border-b border-gray-500">
              {treasures.length > 1 && (
                <th className="px-0.5 py-0 text-center font-bold text-gray-500 tracking-wider w-4 min-w-4 whitespace-nowrap">#</th>
              )}
              <th className="px-0.5 py-0 text-left font-bold text-gray-500 tracking-wider whitespace-nowrap">アイテム名</th>
              <th className="px-0.5 py-0 text-center font-bold text-gray-500 tracking-wider whitespace-nowrap">数量</th>
              <th className="px-0.5 py-0 text-center font-bold text-gray-500 tracking-wider whitespace-nowrap">確率</th>
              <th className="px-0.5 py-0 text-center font-bold text-gray-500 tracking-wider whitespace-nowrap">制限</th>
            </tr>
          </thead>
          <tbody>
            {treasures.map((treasure, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {treasures.length > 1 && (
                  <td className="px-1 py-0 text-gray-500 font-mono text-right w-4 min-w-4">
                    {index + 1}
                  </td>
                )}
                <td className="px-2 py-0 font-medium text-gray-500 whitespace-nowrap">
                  {treasure.treasureName}
                </td>
                <td className="px-2 py-0 text-right text-gray-500">
                  {treasure.amount !== '0' ? `+${treasure.amount}` : '-'}
                </td>
                <td className="px-2 py-0 text-right">
                  <span className="inline-flex items-right px-1 py-0.5 rounded text-xs font-medium text-yellow-600">
                    {treasure.probability}
                  </span>
                </td>
                <td className="px-2 py-0 text-gray-600">
                  {treasure.limitText !== '-1' ? `${treasure.limitText}` : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface EnemyTableProps {
  enemies: EnemyStageInfo[];
  showDetail: boolean;
  getTraitColor: (trait: string) => string;
  getTraitIcon: (trait: string) => string | null;
  getAbilityIcon: (abilityName: string) => string | null;
  formatNumber: (value: number | string) => string;
}

function EnemyTable({ enemies, showDetail, getTraitColor, getTraitIcon, getAbilityIcon, formatNumber }: EnemyTableProps) {
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
      
      <div className="overflow-x-scroll mx-1">
        <table className="w-full whitespace-nowrap" style={{fontSize: '10px'}}>
          <thead>
            <tr className="border-b border-gray-500">
              <th className="px-0.5 py-1 text-right font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">ID</th>
              <th className="px-0.5 py-1 text-left font-bold text-gray-500 tracking-wider min-w-32">敵名</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">数</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-8 whitespace-nowrap">属性</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-8 whitespace-nowrap">能力</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">体力</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">攻撃力</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">DPS</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">倍率</th>
              {showDetail && (
                <>
                  <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">頻度s</th>
                  <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">頻度f</th>
                </>
              )}
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">射程</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-8 whitespace-nowrap">範囲</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">速度</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">KB</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">出現s</th>
              {showDetail && <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">出現f</th>}
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">間隔s</th>
              {showDetail && <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">間隔f</th>}
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">お金</th>
              <th className="px-0.5 py-1 text-center font-bold text-gray-500 tracking-wider min-w-3 whitespace-nowrap">城連動</th>
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
                getAbilityIcon={getAbilityIcon}
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
  getAbilityIcon: (abilityName: string) => string | null;
  formatNumber: (value: number | string) => string;
}

function EnemyRow({ enemy, showDetail, getTraitColor, getTraitIcon, getAbilityIcon, formatNumber }: EnemyRowProps) {
  const [enemyIcon, setEnemyIcon] = useState<string | null>(null);
  const isBoss = enemy.stageStats.isBoss;
  const nameClass = isBoss ? 'text-red-500 font-bold' : 'text-gray-500';
  const displayName = isBoss ? `${enemy.enemyName}*` : enemy.enemyName;
  const magClass = enemy.stageStats.magnification !== '100%' ? 'text-yellow-600 font-semibold' : 'text-gray-600';
  
  useEffect(() => {
    const loadIcon = async () => {
      const iconData = await loadEnemyIcon(enemy.enemyId);
      setEnemyIcon(iconData);
    };
    loadIcon();
  }, [enemy.enemyId]);
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-1 py-1 text-gray-500 font-mono text-right w-8 min-w-8">
        {enemy.enemyId}
      </td>
      <td className={`px-2 py-1 ${nameClass}`}>
        <div className="flex items-center gap-1">
          {enemyIcon && (
            <Image 
              src={`data:image/png;base64,${enemyIcon}`} 
              alt={enemy.enemyName}
              className="w-4 h-4 flex-shrink-0"
              width={16}
              height={16}
            />
          )}
          <div className="max-w-28 font-medium whitespace-normal break-words" title={displayName}>
            {displayName}
          </div>
        </div>
      </td>
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.stageStats.count === '0' ? 
          <span className="text-gray-400">-</span> : 
          <span className="font-medium">{formatNumber(enemy.stageStats.count)}</span>
        }
      </td>
      <td className="px-2 py-1 text-center w-16 min-w-16">
        {(enemy.traits.length > 0 || Object.keys(enemy.abilities).some(ability => ['behemoth', 'colossus', 'sage'].includes(ability))) ? (
          <div className="flex flex-wrap gap-0.5 justify-center">
            {enemy.traits.map((trait, index) => {
              const iconData = getTraitIcon(trait);
              return iconData ? (
                <Image
                  key={`trait-${index}`}
                  src={`data:image/png;base64,${iconData}`}
                  alt={trait}
                  className="w-4 h-4 flex-shrink-0"
                  width={16}
                  height={16}
                  title={trait}
                />
              ) : (
                <span key={`trait-${index}`} className={`${getTraitColor(trait)} inline-flex items-center px-1 py-0.5 rounded font-medium`}>
                  {trait}
                </span>
              );
            })}
            {Object.keys(enemy.abilities)
              .filter(abilityName => ['behemoth', 'colossus', 'sage'].includes(abilityName))
              .map((abilityName, index) => {
                const iconData = getAbilityIcon(abilityName);
                return iconData ? (
                  <Image
                    key={`ability-${index}`}
                    src={`data:image/png;base64,${iconData}`}
                    alt={abilityName}
                    className="w-4 h-4 flex-shrink-0"
                    width={16}
                    height={16}
                    title={abilityName}
                  />
                ) : (
                  <span key={`ability-${index}`} className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                    {abilityName}
                  </span>
                );
              })}
          </div>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>
      <td className="px-2 py-1 text-center w-16 min-w-16">
        {Object.keys(enemy.abilities).filter(abilityName => abilityName !== 'multi-hit' && abilityName !== 'burrow' && abilityName !== 'revive' && abilityName !== 'behemoth' && abilityName !== 'colossus' && abilityName !== 'sage').length > 0 ? (
          <div className="flex flex-wrap gap-0.5 justify-center">
            {Object.keys(enemy.abilities)
              .filter(abilityName => abilityName !== 'multi-hit' && abilityName !== 'burrow' && abilityName !== 'revive' && abilityName !== 'behemoth' && abilityName !== 'colossus' && abilityName !== 'sage')
              .map((abilityName, index) => {
                const iconData = getAbilityIcon(abilityName);
                return iconData ? (
                  <Image
                    key={index}
                    src={`data:image/png;base64,${iconData}`}
                    alt={abilityName}
                    className="w-4 h-4 flex-shrink-0"
                    width={16}
                    height={16}
                    title={abilityName}
                  />
                ) : (
                  <span key={index} className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                    {abilityName}
                  </span>
                );
              })}
          </div>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>
      <td className="px-2 py-1 text-right font-medium text-gray-500">
        {formatNumber(enemy.stageStats.actualHp)}
      </td>
      <td className="px-2 py-1 text-right font-medium text-gray-500">
        {formatNumber(enemy.stageStats.actualAp)}
      </td>
      <td className="px-2 py-1 text-right font-bold text-red-600">
        {formatNumber(Math.round(enemy.stageStats.actualDps))}
      </td>
      <td className={`px-2 py-1 text-right ${magClass}`}>
        {enemy.stageStats.magnification}
      </td>
      {showDetail && (
        <>
          <td className="px-2 py-1 text-right text-gray-500">
            {enemy.baseStats.freq > 0 ? `${(enemy.baseStats.freq / 30).toFixed(2)}s` : '-'}
          </td>
          <td className="px-2 py-1 text-right text-gray-500">
            {enemy.baseStats.freq > 0 ? `${enemy.baseStats.freq}f` : '-'}
          </td>
        </>
      )}
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.baseStats.range > 0 ? enemy.baseStats.range : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-center whitespace-nowrap">
        <div className="flex justify-center items-center">
          {enemy.baseStats.rangeType === '範囲' ? (
            <Image
              src={`data:image/png;base64,${icons.abilityAreaAttack}`}
              alt="範囲攻撃"
              className="w-4 h-4"
              width={16}
              height={16}
              title="範囲攻撃"
            />
          ) : (
            <Image
              src={`data:image/png;base64,${icons.abilitySingleTarget}`}
              alt="単体攻撃"
              className="w-4 h-4"
              width={16}
              height={16}
              title="単体攻撃"
            />
          )}
        </div>
      </td>
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.baseStats.speed > 0 ? enemy.baseStats.speed : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.baseStats.kbLevel > 0 ? enemy.baseStats.kbLevel : <span className="text-gray-400">-</span>}
      </td>
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.stageStats.spawnTime}
      </td>
      {showDetail && (
        <td className="px-2 py-1 text-right text-gray-600">
          {enemy.stageStats.spawnTimeFrames}
        </td>
      )}
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.stageStats.delay}
      </td>
      {showDetail && (
        <td className="px-2 py-1 text-right text-gray-600">
          {enemy.stageStats.delayFrames}
        </td>
      )}
      <td className="px-2 py-1 text-right font-medium text-yellow-600">
        {formatNumber(enemy.baseStats.money)}
      </td>
      <td className="px-2 py-1 text-right text-gray-500">
        {enemy.stageStats.baseHpRatio}
      </td>
    </tr>
  );
}
