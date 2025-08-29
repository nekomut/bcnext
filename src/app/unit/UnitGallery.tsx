'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { unitNamesData } from '@/data/unit-names';
import { icons } from '@/data/icons';
import IconManager from './IconManager';
import { getUnitData, getValidFormCount } from './types';

interface UnitGalleryProps {
  onUnitSelect: (unitId: number, formId: number) => void;
  currentUnitId?: number;
  currentFormId?: number;
}

interface UnitGalleryItem {
  unitId: string;
  displayName: string;
  sortKey: number;
  formIcons: string[];
  validFormCount: number;
  talentIcons: string[];
  talentTypes: ('normal' | 'ultra')[];
  isLimited: boolean;
  isSeasonal: boolean;
}

// 本能・超本能IDからアイコンキーへのマッピング（UnitDisplayと完全一致）
const getTalentIconKey = (talentId: number): string | null => {
  const talentIconMap: { [key: number]: string } = {
    // UnitDisplayから抽出したアイコンマッピング
    1: 'abilityWeaken',          // 攻撃力ダウン
    2: 'abilityFreeze',          // 動きを止める
    3: 'abilitySlow',            // 動きを遅くする
    5: 'abilityStrongAgainst',   // めっぽう強い
    6: 'abilityResistant',       // 打たれ強い
    7: 'abilityMassiveDamage',   // 超ダメージ
    8: 'abilityKnockback',       // ふっとばす
    10: 'abilityStrengthen',     // 攻撃力UP
    11: 'abilitySurvive',        // 生き残る
    13: 'abilityCritical',       // クリティカル
    14: 'abilityZombieKiller',   // ゾンビキラー
    15: 'abilityBarrierBreaker', // バリア破壊
    16: 'abilityExtraMoney',     // 撃破時お金アップ
    17: 'abilityWave',           // 波動攻撃
    18: 'abilityResistWeaken',   // 攻撃力ダウン耐性
    19: 'abilityResistFreeze',   // 動きを止める耐性
    20: 'abilityResistSlow',     // 動きを遅くする耐性
    21: 'abilityResistKnockback',// ふっとばし耐性
    22: 'abilityResistWave',     // 波動ダメージ耐性
    25: 'abilityCostDown',       // コストダウン
    26: 'abilityRecoverSpeedUp', // 再生産時間短縮
    27: 'abilityMoveSpeedUp',    // 移動速度UP
    29: 'abilityImmuneCurse',    // 古代の呪い無効
    30: 'abilityResistCurse',    // 古代の呪い耐性
    31: 'abilityAttackBuff',     // 基本攻撃力UP
    32: 'abilityDefenseBuff',    // 基本体力UP
    44: 'abilityImmuneWeaken',   // 攻撃力ダウン無効
    45: 'abilityImmuneFreeze',   // 動きを止める無効
    46: 'abilityImmuneSlow',     // 動きを遅くする無効
    47: 'abilityImmuneKnockback',// ふっとばす無効
    48: 'abilityImmuneWave',     // 波動ダメージ無効
    49: 'abilityImmuneWarp',     // ワープ無効
    50: 'abilitySavageBlow',     // 渾身の一撃
    51: 'abilityDodgeAttack',    // 攻撃無効
    52: 'abilityResistToxic',    // 毒耐性
    53: 'abilityImmuneToxic',    // 毒無効
    54: 'abilityResistSurge',    // 裂波ダメージ耐性
    55: 'abilityImmuneSurge',    // 裂波ダメージ無効
    56: 'abilitySurge',          // 裂波攻撃
    58: 'abilityShieldPiercing', // シールドブレイカー
    59: 'abilitySoulStrike',     // 魂攻撃
    60: 'abilityCurse',          // 呪い
    61: 'abilityAttackFrequencyUp', // 攻撃間隔短縮
    62: 'abilityMiniWave',       // 小波動
    63: 'abilityColossus',       // 超生命体
    64: 'abilityBehemoth',       // 超獣
    65: 'abilityMiniSurge',      // 小裂波
    66: 'abilitySage',           // 超賢者
    67: 'abilityExplosion',      // 爆波攻撃
    
    // 追加：属性系才能（UnitDisplayから抽出）
    33: 'traitRed',              // 赤い敵属性
    34: 'traitFloating',         // 浮いてる敵属性
    35: 'traitBlack',            // 黒い敵属性
    36: 'traitMetal',            // メタル属性
    37: 'traitAngel',            // 天使属性
    38: 'traitAlien',            // エイリアン属性
    39: 'traitZombie',           // ゾンビ属性
    40: 'traitRelic',            // 古代種属性
    41: 'traitTraitless',        // 属性を持たない敵属性
    43: 'traitTraitless',        // 属性を持たない敵属性（追加ID）
    57: 'traitAku',              // 悪魔属性
  };
  
  return talentIconMap[talentId] || 'abilityStrengthen'; // デフォルトアイコン
};

const UnitGallery: React.FC<UnitGalleryProps> = ({ onUnitSelect, currentUnitId, currentFormId }) => {
  const [units, setUnits] = useState<UnitGalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'pokedex' | 'id'>('pokedex');
  const [showTalentsOnly, setShowTalentsOnly] = useState(true);
  const [includeSeasonal, setIncludeSeasonal] = useState(false);
  const [includeLimited, setIncludeLimited] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(200);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const loadUnitsData = async () => {
      setLoading(true);
      const unitsData: UnitGalleryItem[] = [];

      // バッチ処理で効率的に読み込み
      const BATCH_SIZE = 20;
      for (let i = 0; i < unitNamesData.length; i += BATCH_SIZE) {
        const batch = unitNamesData.slice(i, i + BATCH_SIZE);
        
        const batchResults = await Promise.allSettled(
          batch.map(async (unitName) => {
            try {
              const unitData = await getUnitData(parseInt(unitName.unitId));
              if (!unitData || unitData.sortKey === -1) {
                return null;
              }

              const validFormCount = getValidFormCount(unitData);
              const formIcons: string[] = [];

              // 各形態のアイコンを取得（最大4形態）
              for (let formId = 0; formId < Math.min(4, validFormCount); formId++) {
                try {
                  const icon = await IconManager.getFormIcon(unitName.unitId, formId);
                  formIcons.push(icon);
                } catch {
                  formIcons.push('');
                }
              }

              // 本能・超本能のアイコンを取得
              const talentIcons: string[] = [];
              const talentTypes: ('normal' | 'ultra')[] = [];
              if (unitData.auxiliaryData.talents.hasTalents || unitData.auxiliaryData.talents.hasUltra) {
                const talents = unitData.auxiliaryData.talents.talentList;
                
                // デバッグ情報を出力（開発時のみ）
                if (process.env.NODE_ENV === 'development' && talents.length > 0) {
                  console.log(`Unit ${unitName.unitId}: hasTalents=${unitData.auxiliaryData.talents.hasTalents}, hasUltra=${unitData.auxiliaryData.talents.hasUltra}, talentCount=${talents.length}`);
                  console.log('Talents:', talents.map(t => ({ id: t.id, name: t.name, type: t.type })));
                }
                
                for (const talent of talents.slice(0, 12)) { // 最大12個まで表示（本能・超本能両方対応）
                  const iconKey = getTalentIconKey(talent.id);
                  if (iconKey) {
                    talentIcons.push(iconKey);
                    talentTypes.push(talent.type);
                  }
                }
              }

              return {
                unitId: unitName.unitId,
                displayName: unitName.displayName,
                sortKey: unitData.sortKey,
                formIcons,
                validFormCount,
                talentIcons,
                talentTypes,
                isLimited: unitData.isLimited || false,
                isSeasonal: unitData.isSeasonal || false
              };
            } catch {
              return null;
            }
          })
        );

        // 成功した結果のみを追加
        for (const result of batchResults) {
          if (result.status === 'fulfilled' && result.value) {
            unitsData.push(result.value);
          }
        }

        // UI更新のため少し待機
        await new Promise(resolve => setTimeout(resolve, 10));
      }

      setUnits(unitsData);
      setLoading(false);
    };

    loadUnitsData();
  }, []);

  // フィルタリング・ソート処理
  const filteredAndSortedUnits = React.useMemo(() => {
    let filtered = [...units];
    
    // 季節キャラフィルター（デフォルトは通常ユニットのみ、チェックONで季節キャラも含める）
    if (!includeSeasonal) {
      filtered = filtered.filter(unit => !unit.isSeasonal);
    }
    
    // 限定キャラフィルター（デフォルトは通常ユニットのみ、チェックONで限定キャラも含める）
    if (!includeLimited) {
      filtered = filtered.filter(unit => !unit.isLimited);
    }
    
    // 本能・超本能を持つユニットのみフィルター
    if (showTalentsOnly) {
      filtered = filtered.filter(unit => unit.talentIcons.length > 0);
    }
    
    // ソート処理
    if (sortOrder === 'pokedex') {
      filtered.sort((a, b) => a.sortKey - b.sortKey);
    } else {
      filtered.sort((a, b) => parseInt(a.unitId) - parseInt(b.unitId));
    }
    return filtered;
  }, [units, sortOrder, showTalentsOnly, includeSeasonal, includeLimited]);

  // ページネーション
  const totalPages = Math.ceil(filteredAndSortedUnits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUnits = filteredAndSortedUnits.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="mt-2 p-2 border border-gray-600 rounded bg-gray-50">
        <h3 className="text-[12px] font-semibold text-gray-600">ユニット一覧</h3>
        <div className="text-center text-gray-600">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="mt-2 p-2 border border-gray-600 rounded bg-gray-50">
      {/* ヘッダー、ソート順、表示件数 */}
      <div className="flex justify-between items-center mb-1">
        <h3 
          className="text-[12px] font-semibold text-gray-600 cursor-pointer flex items-center gap-1"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span>{isCollapsed ? '▶' : '▼'}</span>
          ユニット一覧 ({filteredAndSortedUnits.length}体)
        </h3>
        
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-500"></span>
              <input
                type="number"
                value={itemsPerPage}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value > 0 && value <= 1000) {
                    setItemsPerPage(value);
                    setCurrentPage(1);
                  }
                }}
                className="w-12 border rounded px-1 py-0.5 text-[10px] text-gray-600 text-right"
                min="1"
                max="1000"
              />
              <span className="text-[10px] text-gray-500">件</span>
            </div>
            
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'pokedex' | 'id')}
              className="border rounded px-2 py-0.5 text-[10px] text-gray-600"
            >
              <option value="pokedex">図鑑順</option>
              <option value="id">ID順</option>
            </select>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <>
          {/* チェックボックスとページネーション */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1">
              <label className="flex items-center text-[10px] text-gray-600">
                <input
                  type="checkbox"
                  checked={showTalentsOnly}
                  onChange={(e) => {
                    setShowTalentsOnly(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="mr-1 scale-75"
                />
                本能実装済のみ
              </label>
              
              <label className="flex items-center text-[10px] text-gray-600">
                <input
                  type="checkbox"
                  checked={includeSeasonal}
                  onChange={(e) => {
                    setIncludeSeasonal(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="mr-1 scale-75"
                />
                季節
              </label>
              
              <label className="flex items-center text-[10px] text-gray-600">
                <input
                  type="checkbox"
                  checked={includeLimited}
                  onChange={(e) => {
                    setIncludeLimited(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="mr-1 scale-75"
                />
                限定
              </label>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border border-gray-300 rounded text-[10px] text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  前
                </button>
                
                <span className="px-1 py-1 text-[10px] text-gray-500">
                  {currentPage} / {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 border border-gray-300 rounded text-[10px] text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  次
                </button>
              </div>
            )}
          </div>

          {/* ユニットリスト */}
          <div className="space-y-0 mb-0">
        {currentUnits.map((unit) => (
          <div
            key={unit.unitId}
            className="flex items-center p-0.5 border border-gray-100 rounded bg-white hover:bg-gray-100 cursor-pointer"
            title={`${unit.unitId}: ${unit.displayName}`}
          >
            {/* ユニットID（クリック可能） */}
            <div 
              className="w-4 pl-1 text-xxs text-gray-500 font-mono flex-shrink-0 cursor-pointer hover:text-blue-600 hover:bg-blue-50 rounded"
              onClick={(e) => {
                e.stopPropagation();
                onUnitSelect(parseInt(unit.unitId), 0); // 第1形態（formId=0）を選択
              }}
              title={`Unit ${unit.unitId} 第1形態を表示`}
            >
              {unit.unitId}
            </div>
            
            {/* 形態アイコン（1-4形態） */}
            <div className="flex gap-0 ml-3 mr-1">
              {Array.from({ length: 4 }, (_, formIndex) => {
                const isCurrentForm = currentUnitId === parseInt(unit.unitId) && currentFormId === formIndex;
                return (
                  <div
                    key={formIndex}
                    className={`w-8 h-7 border-1 rounded-xs flex items-center justify-center ${
                      isCurrentForm 
                        ? 'border-blue-500 bg-white border-2' 
                        : formIndex < unit.formIcons.length 
                        ? 'border-gray-300 bg-white hover:bg-blue-50 cursor-pointer hover:border-blue-400' 
                        : 'border-gray-300 bg-white'
                    } ${formIndex < unit.formIcons.length ? 'cursor-pointer' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (formIndex < unit.formIcons.length) {
                        onUnitSelect(parseInt(unit.unitId), formIndex);
                      }
                    }}
                    title={formIndex < unit.formIcons.length ? `${unit.displayName} 第${formIndex + 1}形態を表示` : '形態なし'}
                  >
                    {formIndex < unit.formIcons.length && unit.formIcons[formIndex] ? (
                      <Image 
                        src={`data:image/png;base64,${unit.formIcons[formIndex]}`} 
                        alt={`${unit.displayName} 第${formIndex + 1}形態`} 
                        width={32} 
                        height={28} 
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-xs text-gray-400"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 本能・超本能アイコン */}
            <div className="flex gap-0">
              {unit.talentIcons.map((iconKey, index) => {
                const talentType = unit.talentTypes[index];
                const borderColor = talentType === 'ultra' ? 'border-red-300' : 'border-amber-200';
                const bgColor = talentType === 'ultra' ? 'bg-red-300' : 'bg-amber-200';
                return (
                  <div 
                    key={index}
                    className={`w-6 h-6 flex items-center justify-center rounded-[5px] border-2 ${borderColor} ${bgColor}`}
                    title={`${talentType === 'ultra' ? '超本能' : '本能'}: ${iconKey}`}
                  >
                    <Image 
                      src={`data:image/png;base64,${icons[iconKey as keyof typeof icons]}`} 
                      alt={iconKey} 
                      width={20} 
                      height={20} 
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UnitGallery;