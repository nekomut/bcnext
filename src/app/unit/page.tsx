'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { icons } from '@/data/icons';
import { UnitDisplay } from './UnitDisplay';
import { UnitData, getUnitData, calculateUnitStats, frameToSecond, getAbilities, getValidFormCount } from './types';
import { unitNamesData, UnitNameData } from '@/data/unit-names';
import IconManager from './IconManager';
import UnitGallery from './UnitGallery';
import { checkAbilityTypes, AbilityType } from './searchHelpers';

// 検索中アニメーション用コンポーネント
function SearchingAnimation() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span>検索中{dots}</span>;
}

// ターゲット属性の選択肢
const targetTraitOptions = [
  { key: 'red', name: '赤い敵' },
  { key: 'floating', name: '浮いてる敵' },
  { key: 'black', name: '黒い敵' },
  { key: 'metal', name: 'メタルな敵' },
  { key: 'angel', name: '天使' },
  { key: 'alien', name: 'エイリアン' },
  { key: 'zombie', name: 'ゾンビ' },
  { key: 'relic', name: '古代種' },
  { key: 'aku', name: '悪魔' },
  { key: 'traitless', name: '属性を持たない敵' },
  { key: 'evaangel', name: '使徒' },
  { key: 'witch', name: '魔女' }
];

// アドバンス検索用の型定義
interface AdvancedFilters {
  searchMode: 'OR' | 'AND';
  rarity: string[];
  formCount: string;
  hpRange: { min: string; max: string };
  attackRange: { min: string; max: string };
  costRange: { min: string; max: string };
  speedRange: { min: string; max: string };
  rangeRange: { min: string; max: string };
  dpsRange: { min: string; max: string };
  kbRange: { min: string; max: string };
  rechargeRange: { min: string; max: string };
  foreswingRange: { min: string; max: string };
  tbaRange: { min: string; max: string };
  backswingRange: { min: string; max: string };
  freqRange: { min: string; max: string };
  targetTraits: string[];
  abilityTypes: AbilityType[];
  includeInstincts: boolean;
}

interface SearchableUnit {
  unitId: string;
  displayName: string;
  formId: number;
  formName: string;
  rarity: { id: number; name: string; maxLevels: readonly [number, number] };
  unitIcon: string;
  sortKey?: number;
  baseStats: {
    hp: number;
    attack: number;
    cost: number;
    speed: number;
    range: number;
    kb: number;
    dps: number;
    rechargeSeconds: number;
    foreswingSeconds: number;
    tbaSeconds: number;
    backswingSeconds: number;
    freq: number;
  };
  abilities: string[];
}

function UnitPageContent() {
  const [unitId, setUnitId] = useState<string>('731');
  const [level, setLevel] = useState<number>(50);
  const [plusLevel, setPlusLevel] = useState<number>(0);
  const [formId, setFormId] = useState<number>(1);
  const [currentUnit, setCurrentUnit] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  // ユニット名プルダウン用のstate
  const [selectedUnitName, setSelectedUnitName] = useState<string>('暁光のイザナギ');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string>('');
  
  // アドバンス検索用のstate
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<SearchableUnit[]>([]);
  // const [searchResultsExecuted, setSearchResultsExecuted] = useState<boolean>(false);
  const [currentResultPage, setCurrentResultPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<string>('pokedex');
  const [isStatsCollapsed, setIsStatsCollapsed] = useState<boolean>(true);
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    searchMode: 'AND',
    rarity: [],
    formCount: 'all',
    hpRange: { min: '', max: '' },
    attackRange: { min: '', max: '' },
    costRange: { min: '', max: '' },
    speedRange: { min: '', max: '' },
    rangeRange: { min: '', max: '' },
    dpsRange: { min: '', max: '' },
    kbRange: { min: '', max: '' },
    rechargeRange: { min: '', max: '' },
    foreswingRange: { min: '', max: '' },
    tbaRange: { min: '', max: '' },
    backswingRange: { min: '', max: '' },
    freqRange: { min: '', max: '' },
    targetTraits: [],
    abilityTypes: [],
    includeInstincts: true,
  });
  
  const searchParams = useSearchParams();
  const router = useRouter();

  // フィルタリングされたユニット名リスト
  const filteredUnits = unitNamesData.filter(unit =>
    unit.displayName.toLowerCase().includes(nameFilter.toLowerCase()) ||
    unit.forms.some(form => form.toLowerCase().includes(nameFilter.toLowerCase()))
  );

  // ユニット名選択時の処理
  const handleUnitNameSelect = (unit: UnitNameData) => {
    setSelectedUnitName(unit.displayName);
    setUnitId(unit.unitId);
    setNameFilter('');
    setIsDropdownOpen(false);
    
    // IDを数値に変換して検索実行
    const numericId = parseInt(unit.unitId);
    router.push(`/unit?unit=${numericId}`);
    handleUnitSearchWithId(numericId);
  };

  const handleUnitSearchWithId = async (id: number) => {
    if (isNaN(id) || id < 0) {
      setError('Invalid unit ID');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const unitData = await getUnitData(id);
      if (unitData) {
        setCurrentUnit(unitData);
      } else {
        setError(`Unit ${id.toString().padStart(3, '0')} not found`);
        setCurrentUnit(null);
      }
    } catch {
      setError(`Unit ${id.toString().padStart(3, '0')} not found`);
      setCurrentUnit(null);
    } finally {
      setLoading(false);
    }
  };

  // URLパラメータを読み込む
  useEffect(() => {
    const unitParam = searchParams.get('unit');
    const levelParam = searchParams.get('level');
    const plusParam = searchParams.get('plus');
    const formParam = searchParams.get('form');

    // 最初にフォームパラメータを処理
    let formIndex = 0; // デフォルトは第1形態
    if (formParam) {
      // 短縮形 f,c,s,u を数値に変換
      const formMap: { [key: string]: number } = { 'f': 0, 'c': 1, 's': 2, 'u': 3 };
      const mappedFormIndex = formMap[formParam];
      if (mappedFormIndex !== undefined) {
        formIndex = mappedFormIndex;
      }
    }

    // フォームIDを設定
    setFormId(formIndex);

    if (unitParam) {
      setUnitId(unitParam);
      
      // ユニット名を形態に合わせて同期（フォームインデックス確定後）
      const paddedId = unitParam.padStart(3, '0');
      const matchingUnit = unitNamesData.find(unit => unit.unitId === paddedId);
      if (matchingUnit && matchingUnit.forms[formIndex]) {
        setSelectedUnitName(matchingUnit.forms[formIndex]);
      } else if (matchingUnit) {
        setSelectedUnitName(matchingUnit.displayName);
      }
    }
    
    if (levelParam) {
      const lvl = parseInt(levelParam);
      if (!isNaN(lvl) && lvl > 0) {
        setLevel(lvl);
      }
    }
    if (plusParam) {
      const plus = parseInt(plusParam);
      if (!isNaN(plus) && plus >= 0) {
        setPlusLevel(plus);
      }
    }

    // URLパラメータがある場合は自動で検索
    if (unitParam) {
      handleUnitSearchWithId(parseInt(unitParam));
    } else {
      // 初期表示時（URLパラメータがない場合）はUnit 731を自動表示
      handleUnitSearchWithId(731);
    }
  }, [searchParams]);

  const handleUnitSearch = async () => {
    const id = parseInt(unitId);
    if (isNaN(id) || id < 0) {
      setError('Invalid unit ID');
      return;
    }

    // ユニット名も同期
    const paddedId = id.toString().padStart(3, '0');
    const matchingUnit = unitNamesData.find(unit => unit.unitId === paddedId);
    if (matchingUnit) {
      setSelectedUnitName(matchingUnit.displayName);
    }

    // URLを更新（Unit IDのみ）
    router.push(`/unit?unit=${id}`);

    await handleUnitSearchWithId(id);
  };


  // アドバンス検索実行
  const handleAdvancedSearch = async () => {
    setLoading(true);
    setError('');
    // setSearchResultsExecuted(false);

    try {
      // 検索可能なユニットリストを生成
      const searchableUnits: SearchableUnit[] = [];
      
      // バッチサイズを小さくして並列処理
      const BATCH_SIZE = 20;
      const totalUnits = unitNamesData.length;
      let processedUnits = 0;
      
      for (let i = 0; i < totalUnits; i += BATCH_SIZE) {
        const batch = unitNamesData.slice(i, i + BATCH_SIZE);
        
        // バッチ内は並列処理
        const batchResults = await Promise.allSettled(
          batch.map(async (unitName) => {
            try {
              const unitData = await getUnitData(parseInt(unitName.unitId));
              if (!unitData) return [];

              // ソートキー -1 のユニットを除外
              if (unitData.sortKey === -1) {
                return [];
              }

              // レアリティフィルタ
              if (advancedFilters.rarity.length > 0 && !advancedFilters.rarity.includes(unitData.coreData.rarity.name)) {
                return [];
              }

              // 形態数フィルタ
              if (advancedFilters.formCount !== 'all') {
                const formCount = unitData.coreData.forms.length;
                if (formCount.toString() !== advancedFilters.formCount) {
                  return [];
                }
              }

              const unitResults: SearchableUnit[] = [];

              // 有効な形態数を取得
              const validFormCount = getValidFormCount(unitData);

              // 形態ごとにSearchableUnitを作成（有効な形態のみ）
              for (let formIndex = 0; formIndex < validFormCount; formIndex++) {
                const form = unitData.coreData.forms[formIndex];
                const stats = calculateUnitStats(unitData, formIndex, 50, 0);
                
                // 各ステータス範囲をチェック
                const filterChecks = [
                  { range: advancedFilters.hpRange, value: stats.hp },
                  { range: advancedFilters.attackRange, value: stats.ap },
                  { range: advancedFilters.costRange, value: stats.cost },
                  { range: advancedFilters.speedRange, value: stats.speed },
                  { range: advancedFilters.rangeRange, value: stats.range },
                  { range: advancedFilters.dpsRange, value: stats.dps },
                  { range: advancedFilters.kbRange, value: stats.kb },
                  { range: advancedFilters.rechargeRange, value: stats.recharge },
                  { range: advancedFilters.foreswingRange, value: frameToSecond(stats.foreswing) },
                  { range: advancedFilters.tbaRange, value: frameToSecond(stats.tba) },
                  { range: advancedFilters.backswingRange, value: frameToSecond(stats.backswing) },
                  { range: advancedFilters.freqRange, value: frameToSecond(stats.freq) }
                ];

                let passesFilters = true;
                for (const check of filterChecks) {
                  if (check.range.min && check.value < parseFloat(check.range.min)) {
                    passesFilters = false;
                    break;
                  }
                  if (check.range.max && check.value > parseFloat(check.range.max)) {
                    passesFilters = false;
                    break;
                  }
                }

                if (!passesFilters) continue;

                // ターゲット属性フィルタ（独立して判定）
                let hasMatchingTargetTrait = true;
                if (advancedFilters.targetTraits.length > 0) {
                  // 本能・超本能によるボーナス値を計算（第三形態以上のみ適用）
                  const calculateTalentBonus = (talentId: number) => {
                    const talent = unitData.auxiliaryData.talents.talentList.find(t => t.id === talentId);
                    return (talent && formIndex >= 2) ? (talent.data[3] || 0) : 0;
                  };
                  
                  const talentFreezeBonus = { 
                    chance: calculateTalentBonus(2), 
                    duration: unitData.auxiliaryData.talents.talentList.find(t => t.id === 2)?.data[5] || 0 
                  };
                  const talentWeakenBonus = { 
                    chance: calculateTalentBonus(1), 
                    duration: unitData.auxiliaryData.talents.talentList.find(t => t.id === 1)?.data[5] || 0 
                  };
                  const talentSlowBonus = { 
                    chance: calculateTalentBonus(3), 
                    duration: unitData.auxiliaryData.talents.talentList.find(t => t.id === 3)?.data[5] || 0 
                  };
                  const talentKnockbackBonus = { chance: calculateTalentBonus(8) };
                  const talentBarrierBreakerBonus = { chance: calculateTalentBonus(9) };
                  
                  const abilities = getAbilities(unitData, formIndex, 50, 0, 1, 1, 0, talentFreezeBonus, talentWeakenBonus, talentSlowBonus, talentKnockbackBonus, talentBarrierBreakerBonus, undefined, advancedFilters.includeInstincts);
                  
                  // キーから日本語名への変換
                  const traitNames = advancedFilters.targetTraits.map(traitKey => {
                    const traitOption = targetTraitOptions.find(option => option.key === traitKey);
                    return traitOption ? traitOption.name : traitKey;
                  });
                  
                  hasMatchingTargetTrait = abilities.some(ability => 
                    traitNames.some(traitName => {
                      const abilityText = typeof ability.name === 'string' ? ability.name : '';
                      const valueText = typeof ability.value === 'string' ? ability.value : '';
                      
                      // 特別な属性マッピング: 「使徒」の場合は「使徒キラー」も含めて検索
                      if (traitName === '使徒') {
                        return abilityText.includes('使徒') || valueText.includes('使徒') ||
                               abilityText.includes('使徒キラー') || valueText.includes('使徒キラー');
                      }
                      
                      return abilityText.includes(traitName) || valueText.includes(traitName);
                    })
                  );
                }

                if (!hasMatchingTargetTrait) continue;

                // 能力タイプフィルタ（アイコン形式）
                let hasMatchingAbilityType = true;
                if (advancedFilters.abilityTypes.length > 0) {
                  // 本能・超本能によるボーナス値を計算（第三形態以上のみ適用）
                  const calculateTalentBonus = (talentId: number) => {
                    const talent = unitData.auxiliaryData.talents.talentList.find(t => t.id === talentId);
                    return (talent && formIndex >= 2) ? (talent.data[3] || 0) : 0;
                  };
                  
                  const talentFreezeBonus = { 
                    chance: calculateTalentBonus(2), 
                    duration: unitData.auxiliaryData.talents.talentList.find(t => t.id === 2)?.data[5] || 0 
                  };
                  const talentWeakenBonus = { 
                    chance: calculateTalentBonus(1), 
                    duration: unitData.auxiliaryData.talents.talentList.find(t => t.id === 1)?.data[5] || 0 
                  };
                  const talentSlowBonus = { 
                    chance: calculateTalentBonus(3), 
                    duration: unitData.auxiliaryData.talents.talentList.find(t => t.id === 3)?.data[5] || 0 
                  };
                  const talentKnockbackBonus = { chance: calculateTalentBonus(8) };
                  const talentBarrierBreakerBonus = { chance: calculateTalentBonus(9) };
                  
                  const abilities = getAbilities(unitData, formIndex, 50, 0, 1, 1, 0, talentFreezeBonus, talentWeakenBonus, talentSlowBonus, talentKnockbackBonus, talentBarrierBreakerBonus, undefined, advancedFilters.includeInstincts);
                  
                  // 新しいヘルパー関数を使用してチェック
                  hasMatchingAbilityType = checkAbilityTypes(abilities, advancedFilters.abilityTypes, advancedFilters.searchMode);
                }

                if (!hasMatchingAbilityType) continue;



                // ユニットアイコンを取得
                const unitIconData = await IconManager.getFormIcon(unitName.unitId, formIndex);
                
                // SearchableUnitオブジェクトを作成（この形態用）
                const searchableUnit: SearchableUnit = {
                  unitId: unitName.unitId,
                  displayName: unitName.displayName,
                  formId: formIndex,
                  formName: form.name,
                  rarity: unitData.coreData.rarity,
                  unitIcon: unitIconData,
                  sortKey: unitData.sortKey,
                  baseStats: {
                    hp: stats.hp,
                    attack: stats.ap,
                    cost: stats.cost,
                    speed: stats.speed,
                    range: stats.range,
                    kb: stats.kb,
                    dps: stats.dps,
                    rechargeSeconds: stats.recharge,
                    foreswingSeconds: frameToSecond(stats.foreswing),
                    tbaSeconds: frameToSecond(stats.tba),
                    backswingSeconds: frameToSecond(stats.backswing),
                    freq: frameToSecond(stats.freq)
                  },
                  abilities: []
                };

                unitResults.push(searchableUnit);
              }

              return unitResults;
            } catch (error) {
              console.warn(`Failed to process unit ${unitName.unitId}:`, error);
              return [];
            }
          })
        );
        
        // バッチ結果をマージ
        for (const result of batchResults) {
          if (result.status === 'fulfilled') {
            searchableUnits.push(...result.value);
          }
        }
        
        processedUnits += batch.length;
        
        // 進捗を表示（デバッグ用）
        if (process.env.NODE_ENV === 'development') {
          console.log(`Search progress: ${processedUnits}/${totalUnits} units processed`);
        }
        
        // UIをブロックしないよう短時間待機
        await new Promise(resolve => setTimeout(resolve, 10));
      }

      // ソート
      searchableUnits.sort((a, b) => {
        switch (sortOption) {
          case 'id':
            const unitIdCompare = parseInt(a.unitId) - parseInt(b.unitId);
            if (unitIdCompare !== 0) return unitIdCompare;
            return a.formId - b.formId; // 同じユニットなら形態順
          case 'name':
            const nameCompare = a.displayName.localeCompare(b.displayName);
            if (nameCompare !== 0) return nameCompare;
            return a.formId - b.formId; // 同じユニットなら形態順
          case 'rarity':
            const rarityCompare = a.rarity.id - b.rarity.id;
            if (rarityCompare !== 0) return rarityCompare;
            const unitIdCompare2 = parseInt(a.unitId) - parseInt(b.unitId);
            if (unitIdCompare2 !== 0) return unitIdCompare2;
            return a.formId - b.formId; // 最後に形態順
          case 'pokedex':
            // 図鑑順ソート: sortKeyを使用
            const sortKeyCompare = (a.sortKey || 0) - (b.sortKey || 0);
            if (sortKeyCompare !== 0) return sortKeyCompare;
            return a.formId - b.formId; // 同じユニットなら形態順
          default:
            return 0;
        }
      });

      setSearchResults(searchableUnits);
      // setSearchResultsExecuted(true);
      setCurrentResultPage(1);
    } catch (error) {
      console.error('Advanced search error:', error);
      setError('検索中にエラーが発生しました。条件を見直してお試しください。');
    } finally {
      setLoading(false);
    }
  };

  // アドバンス検索フィルタリセット
  const resetAdvancedFilters = () => {
    setAdvancedFilters({
      searchMode: 'AND',
      rarity: [],
      formCount: 'all',
      hpRange: { min: '', max: '' },
      attackRange: { min: '', max: '' },
      costRange: { min: '', max: '' },
      speedRange: { min: '', max: '' },
      rangeRange: { min: '', max: '' },
      dpsRange: { min: '', max: '' },
      kbRange: { min: '', max: '' },
      rechargeRange: { min: '', max: '' },
      foreswingRange: { min: '', max: '' },
      tbaRange: { min: '', max: '' },
      backswingRange: { min: '', max: '' },
      freqRange: { min: '', max: '' },
      targetTraits: [],
      abilityTypes: [],
      includeInstincts: true,
    });
    setSearchResults([]);
    // setSearchResultsExecuted(false);
    setCurrentResultPage(1);
  };

  // 検索結果選択
  const handleSearchResultSelect = async (unit: SearchableUnit) => {
    const numericId = parseInt(unit.unitId);
    const formParam = ['f', 'c', 's', 'u'][unit.formId] || 'f';
    
    console.log(`Selecting unit: ${unit.unitId}-${unit.formId + 1} (${unit.formName}), formParam: ${formParam}`);
    
    // URLを更新 - useEffectでパラメータ処理される
    router.push(`/unit?unit=${numericId}&form=${formParam}`);
    
    // アドバンス検索パネルは開いたままにする（結果リストを維持）
    // setIsAdvancedSearchOpen(false);
  };

  return (
    <>
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/stage" className="hover:text-green-600 px-1">Stage</Link>|
      <Link href="/unit" className="text-green-500 hover:text-green-600 px-1">Unit</Link>|
      <Link href="/anim" className="hover:text-green-600 px-1">Anim</Link>|
      <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link>|
      <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link>|
      <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link>|
      <Link href="/event" className="hover:text-green-600 px-1">Event</Link>|
      <hr />
      
      <div className='flex-wrap hidden'>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityWeaken}`} alt="abilityWeaken" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityFreeze}`} alt="abilityFreeze" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySlow}`} alt="abilitySlow" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityAttacksOnly}`} alt="abilityAttacksOnly" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityStrongAgainst}`} alt="abilityStrongAgainst" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistant}`} alt="abilityTough" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityInsanelyTough}`} alt="abilityInsanelyTough" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityMassiveDamage}`} alt="abilityMassiveDamage" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityInsaneDamage}`} alt="abilityInsaneDamage" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityKnockback}`} alt="abilityKnockback" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityWarp}`} alt="abilityWarp" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityCurse}`} alt="abilityCurse" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityDodgeAttack}`} alt="abilityDodgeAttack" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityStrengthen}`} alt="abilityStrengthen" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySurvive}`} alt="abilitySurvive" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityBaseDestroyer}`} alt="abilityBaseDestroyer" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityCritical}`} alt="abilityCritical" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityMetalKiller}`} alt="abilityMetalKiller" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityZombieKiller}`} alt="abilityZombieKiller" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySoulStrike}`} alt="abilitySoulStrike" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityBarrierBreaker}`} alt="abilityBarrierBreaker" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityShieldPiercing}`} alt="abilityShieldPiercing" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySavageBlow}`} alt="abilitySavageBlow" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityExtraMoney}`} alt="abilityExtraMoney" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityMetal}`} alt="abilityMetal" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityMiniWave}`} alt="abilityMiniWave" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityWave}`} alt="abilityWave" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityMiniSurge}`} alt="abilityMiniSurge" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySurge}`} alt="abilitySurge" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityExplosion}`} alt="abilityExplosion" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityCounterSurge}`} alt="abilityCounterSurge" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityWaveShield}`} alt="abilityWaveShield" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySummon}`} alt="abilitySummon" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilitySingleTarget}`} alt="abilitySingleTarget" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityAreaAttack}`} alt="abilityAreaAttack" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityLongDistance}`} alt="abilityLongDistance" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityOmniStrike}`} alt="abilityOmniStrike" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityColossusSlayer}`} alt="abilityColossusSlayer" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityBehemothSlayer}`} alt="abilityBehemothSlayer" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySageSlayer}`} alt="abilitySageSlayer" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityImmuneWeaken}`} alt="abilityImmuneWeaken" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneFreeze}`} alt="abilityImmuneFreeze" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneSlow}`} alt="abilityImmuneSlow" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneKnockback}`} alt="abilityImmuneKnockback" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneWave}`} alt="abilityImmuneWave" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneSurge}`} alt="abilityImmuneSurge" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneExplosion}`} alt="abilityImmuneExplosion" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneWarp}`} alt="abilityImmuneWarp" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneCurse}`} alt="abilityImmuneCurse" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImmuneToxic}`} alt="abilityImmuneToxic" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityResistWeaken}`} alt="abilityResistWeaken" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistFreeze}`} alt="abilityResistFreeze" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistSlow}`} alt="abilityResistSlow" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistKnockback}`} alt="abilityResistKnockback" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistWave}`} alt="abilityResistWave" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistSurge}`} alt="abilityResistSurge" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistWarp}`} alt="abilityResistWarp" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistCurse}`} alt="abilityResistCurse" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityResistToxic}`} alt="abilityResistToxic" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityDefenseBuff}`} alt="abilityDefenseBuff" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityAttackBuff}`} alt="abilityAttackBuff" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityMoveSpeedUp}`} alt="abilityMoveSpeedUp" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityImprovedKnockback}`} alt="abilityMoveSpeedUp" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityCostDown}`} alt="abilityCostDown" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityRecoverSpeedUp}`} alt="abilityRecoverSpeedUp" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityAttackFrequencyUp}`} alt="abilityAttackFrequencyUp" width={20} height={0} />
        </div>
        <div className='flex'>
          <Image src= {`data:image/png;base64,${icons.abilityWitchKiller}`} alt="abilityWitchKiller" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityEvaAngelKiller}`} alt="abilityEvaAngelKiller" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.traitWitch}`} alt="traitWitch" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.traitEvaAngel}`} alt="traitEvaAngel" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityColossus}`} alt="abilityColossus" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityBehemoth}`} alt="abilityBehemoth" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilitySage}`} alt="abilitySage" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityBarrier}`} alt="abilityBarrier" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityShield}`} alt="abilityShield" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityDeathSurge}`} alt="abilityDeathSurge" width={20} height={0} />
          <Image src= {`data:image/png;base64,${icons.abilityToxic}`} alt="abilityToxic" width={20} height={0} />
        </div>
      </div>

      {/* ユニット検索UI */}
      <div className="p-2">
        <div className="mb-1 flex gap-1 items-end">
          {/* 前のIDボタン - 左端 */}
          {unitId && !isNaN(parseInt(unitId)) && (
            <button
              onClick={() => {
                const currentId = parseInt(unitId);
                const prevId = Math.max(0, currentId - 1);
                setUnitId(prevId.toString());
                
                // ユニット名も同期
                const paddedId = prevId.toString().padStart(3, '0');
                const matchingUnit = unitNamesData.find(unit => unit.unitId === paddedId);
                if (matchingUnit) {
                  setSelectedUnitName(matchingUnit.displayName);
                }
                
                router.push(`/unit?unit=${prevId}`);
                handleUnitSearchWithId(prevId);
              }}
              disabled={loading || parseInt(unitId) <= 0}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-0.5 rounded text-xs disabled:opacity-50 w-12"
            >
              ◁
            </button>
          )}
          
          <div className="flex items-center gap-1">
            <label className="text-xs text-white-600">Unit ID</label>
            <input
              type="text"
              value={unitId}
              onChange={(e) => setUnitId(e.target.value)}
              onBlur={(e) => {
                const value = e.target.value.trim();
                if (value && !isNaN(Number(value))) {
                  setUnitId(Number(value).toString());
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleUnitSearch();
                }
              }}
              className="border rounded px-1 py-0.5 text-xs w-8 sm:w-24 text-gray-900 text-center"
            />
          </div>
          
          {/* ユニット名プルダウン */}
          <div className="relative flex-1">
            <div className="relative">
              <input
                type="text"
                value={isDropdownOpen ? nameFilter : selectedUnitName}
                onChange={(e) => {
                  setNameFilter(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => {
                  setIsDropdownOpen(true);
                  setNameFilter('');
                }}
                onBlur={() => {
                  // 少し遅延させてドロップダウンのクリックを可能にする
                  setTimeout(() => setIsDropdownOpen(false), 200);
                }}
                placeholder="ユニット名で選択..."
                className="border rounded px-1 py-0.5 text-xs w-full text-gray-900"
              />
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                  {filteredUnits.slice(0, 50).map((unit) => (
                    <div
                      key={unit.unitId}
                      className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-xs text-gray-900"
                      onMouseDown={(e) => {
                        e.preventDefault(); // onBlurより先に実行されるように
                        handleUnitNameSelect(unit);
                      }}
                    >
                      {unit.displayName}
                    </div>
                  ))}
                  
                  {filteredUnits.length > 50 && (
                    <div className="px-2 py-1 text-xs text-gray-500 italic">
                      検索結果が多すぎます。キーワードを絞ってください。
                    </div>
                  )}
                  
                  {filteredUnits.length === 0 && nameFilter && (
                    <div className="px-2 py-1 text-xs text-gray-500 italic">
                      該当するユニットが見つかりません。
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          
          {/* 次のIDボタン - 右端 */}
          {unitId && !isNaN(parseInt(unitId)) && (
            <button
              onClick={() => {
                const currentId = parseInt(unitId);
                const nextId = currentId + 1;
                setUnitId(nextId.toString());
                
                // ユニット名も同期
                const paddedId = nextId.toString().padStart(3, '0');
                const matchingUnit = unitNamesData.find(unit => unit.unitId === paddedId);
                if (matchingUnit) {
                  setSelectedUnitName(matchingUnit.displayName);
                }
                
                router.push(`/unit?unit=${nextId}`);
                handleUnitSearchWithId(nextId);
              }}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-0.5 rounded text-xs disabled:opacity-50 w-12"
            >
              ▷
            </button>
          )}
        </div>

        {/* アドバンス検索トグル */}
        <div className="mb-1">
          <button
            onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
            className="text-xs text-white hover:text-gray-300 flex items-center gap-1"
          >
            {isAdvancedSearchOpen ? '▼' : '▶'} アドバンス検索
          </button>
        </div>

        {/* アドバンス検索パネル */}
        {isAdvancedSearchOpen && (
          <div className="border border-gray-300 rounded p-2 mb-1 bg-gray-50">

            {/* OR/AND検索モード選択 */}
            <div className="mb-1 border-gray-200">
              <div className="flex gap-2">
                <label className="flex items-center font-bold text-[9px] text-gray-600">
                  <input
                    type="radio"
                    name="searchMode"
                    value="AND"
                    checked={advancedFilters.searchMode === 'AND'}
                    onChange={(e) => setAdvancedFilters({
                      ...advancedFilters, 
                      searchMode: e.target.value as 'OR' | 'AND'
                    })}
                    className="mr-1 scale-75"
                  />
                  <span>AND</span>
                </label>
                <label className="flex items-center font-bold text-[9px] text-gray-600">
                  <input
                    type="radio"
                    name="searchMode"
                    value="OR"
                    checked={advancedFilters.searchMode === 'OR'}
                    onChange={(e) => setAdvancedFilters({
                      ...advancedFilters, 
                      searchMode: e.target.value as 'OR' | 'AND'
                    })}
                    className="mr-1 scale-75"
                  />
                  <span>OR</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
              
              {/* 基本情報 + ターゲット属性 */}
              <div>
                {/* レアリティ選択 */}
                <div className="mb-1">
                  <div className="mb-1">
                    <label className="font-bold text-[11px] text-gray-600">レア度・ターゲット</label>
                    <div className="flex gap-0.5 mt-1">
                      {[
                        { key: '基本', icon: icons.rarityBasic },
                        { key: 'EX', icon: icons.rarityEx },
                        { key: 'レア', icon: icons.rarityRare },
                        { key: '激レア', icon: icons.raritySuperRare },
                        { key: '超激レア', icon: icons.rarityUberRare },
                        { key: '伝説レア', icon: icons.rarityLegendRare }
                      ].map(rarity => (
                        <label key={rarity.key} className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={advancedFilters.rarity.includes(rarity.key)}
                            onChange={(e) => {
                              const newRarities = e.target.checked
                                ? [...advancedFilters.rarity, rarity.key]
                                : advancedFilters.rarity.filter(r => r !== rarity.key);
                              setAdvancedFilters({...advancedFilters, rarity: newRarities});
                            }}
                            className="sr-only"
                          />
                          <div className={`w-14 h-6 border-2 rounded flex items-center justify-center my-0 py-0 ${
                            advancedFilters.rarity.includes(rarity.key) 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 bg-white hover:border-gray-400'
                          }`}>
                            <Image 
                              src={`data:image/png;base64,${rarity.icon}`} 
                              alt={rarity.key} 
                              width={48} 
                              height={32} 
                              className="object-contain"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ターゲット属性 */}
                <div>
                  <div className="flex items-center gap-2 mb-0">
                    <div className="flex flex-wrap gap-1">
                      {[
                        { key: 'red', name: '赤い敵', icon: icons.traitRed },
                        { key: 'floating', name: '浮いてる敵', icon: icons.traitFloating },
                        { key: 'black', name: '黒い敵', icon: icons.traitBlack },
                        { key: 'metal', name: 'メタル敵', icon: icons.traitMetal },
                        { key: 'angel', name: '天使', icon: icons.traitAngel },
                        { key: 'alien', name: 'エイリアン', icon: icons.traitAlien },
                        { key: 'zombie', name: 'ゾンビ', icon: icons.traitZombie },
                        { key: 'relic', name: '古代種', icon: icons.traitRelic },
                        { key: 'aku', name: '悪魔', icon: icons.traitAku },
                        { key: 'traitless', name: '属性を持たない敵', icon: icons.traitTraitless },
                        { key: 'evaangel', name: '使徒', icon: icons.traitEvaAngel },
                        { key: 'witch', name: '魔女', icon: icons.traitWitch }
                      ].map(trait => (
                        <label key={trait.key} className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={advancedFilters.targetTraits.includes(trait.key)}
                            onChange={(e) => {
                              const newTraits = e.target.checked
                                ? [...advancedFilters.targetTraits, trait.key]
                                : advancedFilters.targetTraits.filter(t => t !== trait.key);
                              setAdvancedFilters({...advancedFilters, targetTraits: newTraits});
                            }}
                            className="sr-only"
                          />
                          <div 
                            className={`border-2 rounded-[7px] flex items-center justify-center my-0 py-0 ${
                              advancedFilters.targetTraits.includes(trait.key) 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 bg-white hover:border-gray-400'
                            }`}
                            style={{ width: '24px', height: '24px' }}
                          >
                            <Image 
                              src={`data:image/png;base64,${trait.icon}`} 
                              alt={trait.name} 
                              width={24} 
                              height={24} 
                              className="object-contain"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 能力・効果 + 本能・超本能 */}
              {/* 
                新しい能力ボタンを追加する場合のテンプレート：
                1. 2次元配列の適切な行に新しいオブジェクトを追加 { key: 'newAbility', name: '新しい能力名', icon: icons.abilityXXX }
                2. 新しい行を作る場合は新しい配列を追加 [{ key: 'newAbility', ... }]
                3. searchHelpers.ts でAbilityType型と設定を追加
                4. types.tsx での実装も忘れずに
              */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-600 text-[11px]">能力・効果</h4>
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.includeInstincts}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        includeInstincts: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    本能・超本能を含める
                  </label>
                </div>
                
                {/* 能力タイプ（アイコン形式） */}
                <div className="mb-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex flex-wrap gap-1">
                      {[
                        [
                          { key: 'weaken', name: '攻撃力ダウン', icon: icons.abilityWeaken },
                          { key: 'freeze', name: '動きを止める', icon: icons.abilityFreeze },
                          { key: 'slow', name: '動きを遅くする', icon: icons.abilitySlow },
                          { key: 'attacksOnly', name: '攻撃ターゲット限定', icon: icons.abilityAttacksOnly },
                          { key: 'strongAgainst', name: 'めっぽう強い', icon: icons.abilityStrongAgainst },
                          { key: 'resistant', name: '打たれ強い', icon: icons.abilityResistant },
                          { key: 'insanelyTough', name: '超打たれ強い', icon: icons.abilityInsanelyTough },
                          { key: 'massiveDamage', name: '超ダメージ', icon: icons.abilityMassiveDamage },
                          { key: 'insaneDamage', name: '極ダメージ', icon: icons.abilityInsaneDamage },
                          { key: 'knockback', name: 'ふっとばす', icon: icons.abilityKnockback }
                        ],
                        [
                          { key: 'warp', name: 'ワープ', icon: icons.abilityWarp },
                          { key: 'curse', name: '呪い', icon: icons.abilityCurse },
                          { key: 'dodgeAttack', name: '攻撃無効', icon: icons.abilityDodgeAttack }
                        ],
                        [
                          { key: 'strengthen', name: '攻撃力アップ', icon: icons.abilityStrengthen },
                          { key: 'survive', name: '生き残る', icon: icons.abilitySurvive },
                          { key: 'baseDestroyer', name: '城破壊が得意', icon: icons.abilityBaseDestroyer },
                          { key: 'critical', name: 'クリティカル', icon: icons.abilityCritical },
                          { key: 'metalKiller', name: 'メタルキラー', icon: icons.abilityMetalKiller },
                          { key: 'zombieKiller', name: 'ゾンビキラー', icon: icons.abilityZombieKiller }
                        ]
                      ].map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                          {rowIndex > 0 && <div className="w-full"></div>}
                          {row.map(ability => (
                            <label key={ability.key} className="cursor-pointer">
                              <input
                                type="checkbox"
                                checked={advancedFilters.abilityTypes.includes(ability.key as AbilityType)}
                                onChange={(e) => {
                                  const newAbilities = e.target.checked
                                    ? [...advancedFilters.abilityTypes, ability.key as AbilityType]
                                    : advancedFilters.abilityTypes.filter(a => a !== ability.key);
                                  setAdvancedFilters({...advancedFilters, abilityTypes: newAbilities});
                                }}
                                className="sr-only"
                              />
                              <div 
                                className={`border-2 rounded-[5px] flex items-center justify-center my-0 py-0 ${
                                  advancedFilters.abilityTypes.includes(ability.key as AbilityType) 
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200 bg-white hover:border-gray-400'
                                }`}
                                style={{ width: '24px', height: '24px' }}
                              >
                                <Image 
                                  src={`data:image/png;base64,${ability.icon}`} 
                                  alt={ability.name} 
                                  width={20} 
                                  height={20} 
                                  className="object-contain"
                                />
                              </div>
                            </label>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>

              {/* ステータス範囲 */}
              <div>
                <div 
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsStatsCollapsed(!isStatsCollapsed)}
                >
                  <h4 className="font-semibold mb-1 text-gray-600 text-[11px]">{isStatsCollapsed ? '▶' : '▼'} ステータス<small>(Lv50)</small></h4>
                </div>
                
                {!isStatsCollapsed && (
                <div>
                
                {/* HP・攻撃力範囲 */}
                <div className="mb-1">
                  <div className="flex gap-1">
                    {/* HP範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">HP</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.hpRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          hpRange: {...advancedFilters.hpRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.hpRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          hpRange: {...advancedFilters.hpRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                    
                    {/* 攻撃力範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">攻撃</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.attackRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          attackRange: {...advancedFilters.attackRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.attackRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          attackRange: {...advancedFilters.attackRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                  </div>
                </div>
                
                {/* DPS・射程範囲 */}
                <div className="mb-1">
                  <div className="flex gap-1">
                    {/* DPS範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">DPS</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.dpsRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          dpsRange: {...advancedFilters.dpsRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.dpsRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          dpsRange: {...advancedFilters.dpsRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                    
                    {/* 射程範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">射程</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.rangeRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          rangeRange: {...advancedFilters.rangeRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.rangeRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          rangeRange: {...advancedFilters.rangeRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                  </div>
                </div>
                
                {/* KB・速度範囲 */}
                <div className="mb-1">
                  <div className="flex gap-1">
                    {/* KB範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">KB</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.kbRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          kbRange: {...advancedFilters.kbRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.kbRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          kbRange: {...advancedFilters.kbRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                    
                    {/* 速度範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">速度</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.speedRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          speedRange: {...advancedFilters.speedRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.speedRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          speedRange: {...advancedFilters.speedRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                  </div>
                </div>
                
                {/* コスト・再生産範囲 */}
                <div className="mb-1">
                  <div className="flex gap-1">
                    {/* コスト範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">コスト</label>
                      <input
                        type="number"
                        placeholder="最小"
                        value={advancedFilters.costRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          costRange: {...advancedFilters.costRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        placeholder="最大"
                        value={advancedFilters.costRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          costRange: {...advancedFilters.costRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                    
                    {/* 再生産範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">再生産</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最小"
                        value={advancedFilters.rechargeRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          rechargeRange: {...advancedFilters.rechargeRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最大"
                        value={advancedFilters.rechargeRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          rechargeRange: {...advancedFilters.rechargeRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                  </div>
                </div>
                
                {/* 攻撃発生・攻撃間隔範囲 */}
                <div className="mb-1">
                  <div className="flex gap-1">
                    {/* 攻撃発生範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">攻撃発生</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最小"
                        value={advancedFilters.foreswingRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          foreswingRange: {...advancedFilters.foreswingRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最大"
                        value={advancedFilters.foreswingRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          foreswingRange: {...advancedFilters.foreswingRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                    
                    {/* 攻撃間隔範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">攻撃間隔</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最小"
                        value={advancedFilters.tbaRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          tbaRange: {...advancedFilters.tbaRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最大"
                        value={advancedFilters.tbaRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          tbaRange: {...advancedFilters.tbaRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                  </div>
                </div>
                
                {/* 攻撃後硬直・攻撃頻度範囲 */}
                <div className="mb-1">
                  <div className="flex gap-1">
                    {/* 攻撃後硬直範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">攻撃後硬直</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最小"
                        value={advancedFilters.backswingRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          backswingRange: {...advancedFilters.backswingRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        step="0.1"
                        placeholder="最大"
                        value={advancedFilters.backswingRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          backswingRange: {...advancedFilters.backswingRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                    
                    {/* 攻撃頻度範囲 */}
                    <div className="flex items-center gap-1 w-1/2">
                      <label className="text-[10px] text-gray-600 w-[60px]">攻撃頻度</label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="最小"
                        value={advancedFilters.freqRange.min}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          freqRange: {...advancedFilters.freqRange, min: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                      ~
                      <input
                        type="number"
                        step="0.01"
                        placeholder="最大"
                        value={advancedFilters.freqRange.max}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          freqRange: {...advancedFilters.freqRange, max: e.target.value}
                        })}
                        className="w-[50px] border rounded px-1 py-0.5 text-[10px] text-right text-gray-600"
                      />
                    </div>
                  </div>
                </div>
                </div>
                )}
              </div>
              
            </div>
            
            {/* 検索実行・リセットボタン */}
            <div className="flex gap-2 mt-1">
              <button 
                onClick={handleAdvancedSearch}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed w-20 flex items-center justify-center"
              >
{loading ? <SearchingAnimation /> : '検索実行'}
              </button>
              <button 
                onClick={resetAdvancedFilters}
                disabled={loading}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50 w-18"
              >
                条件リセット
              </button>
            </div>
          </div>
        )}

        {/* 検索結果表示エリア */}
        {isAdvancedSearchOpen && searchResults.length >= 0 && (
          <div className="mb-2">
            {/* 検索結果ヘッダー */}
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-xs font-semibold text-cyan-500">
                検索結果: {searchResults.length}件
                <button
                  onClick={() => setSearchResults([])}
                  className="text-xxs text-red-500 hover:text-red-700 mx-2"
                >
                  結果をクリア
                </button>
              </h4>
              
              <div className="flex items-center gap-2">
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border rounded px-1 py-0.5 text-xs text-gray-600"
                >
                  <option value="id">ID順</option>
                  <option value="rarity">レアリティ順</option>
                  <option value="name">名前順</option>
                  <option value="pokedex">図鑑順</option>
                </select>
              </div>
            </div>
            
            {/* 検索結果グリッド（横6個×縦4個の24個表示） */}
            <div className="border border-gray-800 rounded bg-cyan-500 p-0">
              <div className="grid grid-cols-6 grid-rows-4 gap-0">
                {searchResults.slice((currentResultPage - 1) * 24, currentResultPage * 24).map((unit) => {
                  return (
                    <div
                      key={`${unit.unitId}-${unit.formId}`}
                      className="relative flex items-center justify-center cursor-pointer hover:bg-cyan-500 px-1 py-0 rounded"
                      onClick={() => handleSearchResultSelect(unit)}
                      title={`${unit.unitId}-${unit.formId + 1}: ${unit.formName}`}
                    >
                      {/* ユニットアイコン */}
                      <div className="w-12 h-10 flex items-center justify-center bg-cyan-500 rounded">
                        {unit.unitIcon ? (
                          <Image 
                            src={`data:image/png;base64,${unit.unitIcon}`} 
                            alt={unit.formName} 
                            width={48} 
                            height={48} 
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-12 h-10 bg-cyan-500 rounded"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* ページネーション（結果が多い場合） */}
            {searchResults.length > 24 && (
              <div className="flex justify-center mt-2">
                <div className="flex gap-1 text-xs">
                  <button 
                    onClick={() => setCurrentResultPage(Math.max(1, currentResultPage - 1))}
                    disabled={currentResultPage === 1}
                    className="px-2 py-1 border rounded hover:bg-gray-700 disabled:opacity-50"
                  >
                    前
                  </button>
                  <span className="px-2 py-1">
                    {currentResultPage} / {Math.ceil(searchResults.length / 24)}
                  </span>
                  <button 
                    onClick={() => setCurrentResultPage(Math.min(Math.ceil(searchResults.length / 24), currentResultPage + 1))}
                    disabled={currentResultPage === Math.ceil(searchResults.length / 24)}
                    className="px-2 py-1 border rounded hover:bg-gray-700 disabled:opacity-50"
                  >
                    次
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* エラーメッセージ */}
        {error && (
          <div className="text-red-500 mb-1 text-xs">{error}</div>
        )}

        {/* ユニット表示 */}
        {currentUnit && (
          <UnitDisplay
            unitData={currentUnit}
            initialLevel={level}
            initialPlusLevel={plusLevel}
            initialFormId={formId}
            onParamsChange={(params) => {
              setLevel(params.level);
              setPlusLevel(params.plusLevel);
              setFormId(params.formId);
              
              // URLを更新
              const currentParams = new URLSearchParams(searchParams);
              currentParams.set('level', params.level.toString());
              currentParams.set('plus', params.plusLevel.toString());
              
              // 数値を短縮形に変換
              const formMap = ['f', 'c', 's', 'u'];
              const formKey = formMap[params.formId] || 'f';
              currentParams.set('form', formKey);
              
              router.push(`/unit?${currentParams.toString()}`);
            }}
          />
        )}

        {/* ユニット一覧セクション */}
        <UnitGallery 
          onUnitSelect={(unitId: number, formId: number) => {
            const formParam = ['f', 'c', 's', 'u'][formId] || 'f';
            router.push(`/unit?unit=${unitId}&form=${formParam}`);
          }}
          currentUnitId={currentUnit?.unitId}
          currentFormId={formId}
        />
      </div>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnitPageContent />
    </Suspense>
  );
}
