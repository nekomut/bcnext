'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { unitNamesData } from '@/data/unit-names';
import { icons } from '@/data/icons';
// import IconManager from './IconManager'; // LazyUnitIcon で使用するため一時的にコメントアウト
import { getUnitData, getValidFormCount } from './types';
import UnitGalleryProgressBar, { UnitGalleryProgressInfo, ErrorProgressBar } from './components/UnitGalleryProgressBar';
import LazyUnitIcon from './components/LazyUnitIcon';

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
  isMystic: boolean;
  isFestival: boolean;
  rarity: string;
}

// 本能・超本能IDからアイコンキーへのマッピング（UnitDisplayと完全一致）
// sortKeyから幻・祭フラグを計算
const isMysticUnit = (sortKey: number): boolean => {
  const sortGroup = Math.floor(sortKey / 1000);
  return sortGroup === 4805 || sortGroup === 5990;
};

const isFestivalUnit = (sortKey: number): boolean => {
  const sortGroup = Math.floor(sortKey / 1000);
  return sortGroup === 4802 || sortGroup === 4804 || sortGroup === 5950;
};

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
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<UnitGalleryProgressInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'pokedex' | 'id'>('pokedex');
  const [showTalentsOnly, setShowTalentsOnly] = useState(true);
  const [includeRegular, setIncludeRegular] = useState(true);
  const [includeMystic, setIncludeMystic] = useState(false);
  const [includeFestival, setIncludeFestival] = useState(false);
  const [includeSeasonal, setIncludeSeasonal] = useState(false);
  const [includeLimited, setIncludeLimited] = useState(false);
  const [selectedRarities, setSelectedRarities] = useState<string[]>(['超激レア']);
  const [itemsPerPage, setItemsPerPage] = useState(400);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // デバウンス用の検索語
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // デバウンス処理（300ms）
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 段階的読み込み関数
  const loadUnitsIncrementally = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setProgress({
        current: 0,
        total: unitNamesData.length,
        percentage: 0,
        status: 'ユニットデータの読み込みを開始...'
      });

      const unitsData: UnitGalleryItem[] = [];
      const BATCH_SIZE = 20;
      const totalBatches = Math.ceil(unitNamesData.length / BATCH_SIZE);

      for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
        const startIndex = batchIndex * BATCH_SIZE;
        const endIndex = Math.min(startIndex + BATCH_SIZE, unitNamesData.length);
        const batch = unitNamesData.slice(startIndex, endIndex);
        
        setProgress({
          current: startIndex,
          total: unitNamesData.length,
          percentage: Math.round((startIndex / unitNamesData.length) * 100),
          status: `${startIndex}/${unitNamesData.length} ユニットを読み込み中...`
        });

        const batchResults = await Promise.allSettled(
          batch.map(async (unitName) => {
            try {
              const unitData = await getUnitData(parseInt(unitName.unitId));
              if (!unitData || unitData.sortKey === -1 || unitData.isVisible === false) {
                return null;
              }

              const validFormCount = getValidFormCount(unitData);
              
              // アイコンは遅延読み込みに変更（後でLazyUnitIconが読み込む）
              const formIcons: string[] = new Array(Math.min(4, validFormCount)).fill('');

              // 本能・超本能のアイコンを取得
              const talentIcons: string[] = [];
              const talentTypes: ('normal' | 'ultra')[] = [];
              if (unitData.auxiliaryData.talents.hasTalents || unitData.auxiliaryData.talents.hasUltra) {
                const talents = unitData.auxiliaryData.talents.talentList;
                
                for (const talent of talents.slice(0, 12)) {
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
                isSeasonal: unitData.isSeasonal || false,
                isMystic: isMysticUnit(unitData.sortKey),
                isFestival: isFestivalUnit(unitData.sortKey),
                rarity: unitData.coreData.rarity.name
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

        // 読み込み済みユニットを即座に表示
        setUnits([...unitsData]);
        
        // UI更新のための短時間待機
        await new Promise(resolve => setTimeout(resolve, 16));
      }

      // 完了報告
      setProgress({
        current: unitNamesData.length,
        total: unitNamesData.length,
        percentage: 100,
        status: `完了: ${unitsData.length}体のユニットを登録`
      });

      // 少し待ってからプログレスバーを非表示
      setTimeout(() => {
        setLoading(false);
        setProgress(null);
      }, 1000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'ユニットデータの読み込みに失敗しました');
      setLoading(false);
      setProgress(null);
    }
  }, []);

  useEffect(() => {
    loadUnitsIncrementally();
  }, [loadUnitsIncrementally]);

  // 最適化されたフィルタリング・ソート処理
  const filteredAndSortedUnits = useMemo(() => {
    let filtered = units;
    
    // 検索フィルター（デバウンス済み）
    if (debouncedSearchTerm) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(unit => 
        unit.displayName.toLowerCase().includes(searchLower) ||
        unit.unitId.includes(debouncedSearchTerm)
      );
    }
    
    // ユニットタイプによるフィルタリング
    // 選択されたタイプのユニットのみを含める
    const selectedTypes = [];
    if (includeRegular) selectedTypes.push('regular');
    if (includeMystic) selectedTypes.push('mystic');
    if (includeFestival) selectedTypes.push('festival');
    if (includeSeasonal) selectedTypes.push('seasonal');
    if (includeLimited) selectedTypes.push('limited');
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(unit => {
        if (unit.isMystic && selectedTypes.includes('mystic')) return true;
        if (unit.isFestival && selectedTypes.includes('festival')) return true;
        if (unit.isSeasonal && selectedTypes.includes('seasonal')) return true;
        if (unit.isLimited && selectedTypes.includes('limited')) return true;
        // 恒常ユニット（幻・祭・季節・限定のいずれでもない）
        if (!unit.isMystic && !unit.isFestival && !unit.isSeasonal && !unit.isLimited && selectedTypes.includes('regular')) return true;
        return false;
      });
    }
    
    // 本能・超本能を持つユニットのみフィルター
    // ONの場合：選択されたタイプの中で本能・超本能を持つユニットのみ
    if (showTalentsOnly) {
      filtered = filtered.filter(unit => unit.talentIcons.length > 0);
    }
    
    // レア度フィルター
    if (selectedRarities.length > 0) {
      filtered = filtered.filter(unit => selectedRarities.includes(unit.rarity));
    }
    
    // ソート処理
    if (sortOrder === 'pokedex') {
      filtered.sort((a, b) => a.sortKey - b.sortKey);
    } else {
      filtered.sort((a, b) => parseInt(a.unitId) - parseInt(b.unitId));
    }
    
    return filtered;
  }, [units, debouncedSearchTerm, sortOrder, showTalentsOnly, includeRegular, includeMystic, includeFestival, includeSeasonal, includeLimited, selectedRarities]);

  // ページネーション
  const totalPages = Math.ceil(filteredAndSortedUnits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUnits = filteredAndSortedUnits.slice(startIndex, endIndex);

  // エラー表示
  if (error) {
    return (
      <ErrorProgressBar 
        error={error} 
        onRetry={loadUnitsIncrementally}
      />
    );
  }

  // プログレスバー表示
  if (loading && progress) {
    return (
      <UnitGalleryProgressBar 
        progress={progress}
      />
    );
  }

  return (
    <div className="mt-2 p-2 border border-gray-600 rounded bg-amber-50">
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
                className="w-12 border border-gray-400 rounded px-1 py-0.5 text-[10px] text-gray-600 text-right"
                min="1"
                max="1000"
              />
              <span className="text-[10px] text-gray-500">件</span>
            </div>
            
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'pokedex' | 'id')}
              className="border border-gray-400 rounded px-2 py-0.5 text-[10px] text-gray-600"
            >
              <option value="pokedex">図鑑順</option>
              <option value="id">ID順</option>
            </select>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <>
          {/* 検索フィールドとページネーション */}
          <div className="flex justify-between items-center gap-2 mb-2">
            <input
              type="text"
              placeholder="ユニット名またはIDで検索..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 px-2 py-1 text-xs border border-gray-400 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border border-gray-400 rounded bg-amber-100 text-[10px] text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  前
                </button>
                
                <span className="px-1 py-1 text-[10px] text-gray-500">
                  {currentPage} / {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 border border-gray-400 rounded bg-amber-100 text-[10px] text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  次
                </button>
              </div>
            )}
          </div>

          {/* チェックボックス */}
          <div className="mb-2">
            <div className="flex items-center gap-1 flex-wrap">
              <label className="flex items-center text-[10px] text-gray-600">
                <input
                  type="checkbox"
                  checked={includeRegular}
                  onChange={(e) => {
                    setIncludeRegular(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="mr-1 scale-75"
                />
                恒常
              </label>
              
              <label className="flex items-center text-[10px] text-gray-600">
                <input
                  type="checkbox"
                  checked={includeMystic}
                  onChange={(e) => {
                    setIncludeMystic(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="mr-1 scale-75"
                />
                幻
              </label>
              
              <label className="flex items-center text-[10px] text-gray-600">
                <input
                  type="checkbox"
                  checked={includeFestival}
                  onChange={(e) => {
                    setIncludeFestival(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="mr-1 scale-75"
                />
                祭
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
              
              <span className="text-gray-400 mx-1">|</span>
              
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
            </div>
          </div>

          {/* レア度フィルター */}
          <div className="flex items-center gap-1 flex-wrap mb-1">
            {[
              { key: '基本', icon: icons.rarityNormal },
              { key: 'EX', icon: icons.rarityEx },
              { key: 'レア', icon: icons.rarityRare },
              { key: '激レア', icon: icons.raritySuperRare },
              { key: '超激レア', icon: icons.rarityUberRare },
              { key: '伝説レア', icon: icons.rarityLegendaryRare }
            ].map(rarity => (
              <label key={rarity.key} className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRarities.includes(rarity.key)}
                  onChange={(e) => {
                    const newRarities = e.target.checked
                      ? [...selectedRarities, rarity.key]
                      : selectedRarities.filter(r => r !== rarity.key);
                    setSelectedRarities(newRarities);
                    setCurrentPage(1);
                  }}
                  className="sr-only"
                />
                <div className={`${['基本', 'EX', 'レア'].includes(rarity.key) ? 'w-13' : 'w-14'} h-6 border-2 rounded flex items-center justify-center my-0 py-0 ${
                  selectedRarities.includes(rarity.key) 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-500 bg-amber-300'
                }`}>
                  <Image 
                    src={`data:image/png;base64,${rarity.icon}`} 
                    alt={rarity.key} 
                    width={45} 
                    height={42} 
                    className="object-contain"
                  />
                </div>
              </label>
            ))}
          </div>

          {/* ユニットリスト */}
          <div className="space-y-0 m-0 p-0">
        {currentUnits.map((unit) => (
          <div
            key={unit.unitId}
            className="flex items-center my-0 pt-0.5 bg-amber-50 cursor-pointer"
            title={`${unit.unitId}: ${unit.displayName}`}
          >
            {/* ユニットID（クリック可能） */}
            <div 
              className="w-4 pl-1.5 text-xxs text-gray-500 font-mono flex-shrink-0 cursor-pointer hover:text-blue-600 hover:bg-blue-50 rounded"
              onClick={(e) => {
                e.stopPropagation();
                onUnitSelect(parseInt(unit.unitId), 0); // 第1形態（formId=0）を選択
              }}
              title={`Unit ${unit.unitId} 第1形態を表示`}
            >
              {unit.unitId}
            </div>
            
            {/* 形態アイコン（1-4形態） */}
            <div className="flex gap-0 ml-3 mr-1 p-0">
              {Array.from({ length: 4 }, (_, formIndex) => {
                const isCurrentForm = currentUnitId === parseInt(unit.unitId) && currentFormId === formIndex;
                return (
                  <div
                    key={formIndex}
                    className={`w-8 h-7 border-1 rounded-xs flex items-center justify-center ${
                      isCurrentForm 
                        ? 'border-blue-500 bg-amber-50 border-2' 
                        : formIndex < unit.validFormCount 
                        ? 'border-gray-300 bg-amber-50 hover:bg-blue-50 cursor-pointer hover:border-blue-400' 
                        : 'border-gray-300 bg-amber-50'
                    } ${formIndex < unit.validFormCount ? 'cursor-pointer' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (formIndex < unit.validFormCount) {
                        onUnitSelect(parseInt(unit.unitId), formIndex);
                      }
                    }}
                    title={formIndex < unit.validFormCount ? `${unit.displayName} 第${formIndex + 1}形態を表示` : '形態なし'}
                  >
                    {formIndex < unit.validFormCount ? (
                      <LazyUnitIcon
                        unitId={unit.unitId}
                        formId={formIndex}
                        displayName={unit.displayName}
                        width={32}
                        height={28}
                        className="object-contain"
                        priority={startIndex <= 20} // 最初の20体は優先読み込み
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