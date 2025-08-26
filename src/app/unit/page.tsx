'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { icons } from '@/data/icons';
import { UnitDisplay } from './UnitDisplay';
import { UnitData, getUnitData, calculateUnitStats, frameToSecond, getAbilities } from './types';
import { unitNamesData, UnitNameData } from '@/data/unit-names';
import IconManager from './IconManager';

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
  { key: 'base', name: '悪魔' },
  { key: 'white', name: '属性を持たない敵' },
  { key: 'eva', name: 'エヴァ使徒' },
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
  hasTargetAbility: boolean;
  hasResistance: boolean;
  hasStatusEffect: boolean;
  hasSpecialAttack: boolean;
  hasTalents: boolean;
  hasUltraTalents: boolean;
  includeTalentSearch: boolean;
}

interface SearchableUnit {
  unitId: string;
  displayName: string;
  formId: number;
  formName: string;
  rarity: { id: number; name: string; maxLevels: readonly [number, number] };
  unitIcon: string;
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
  talents: string[];
  ultraTalents: string[];
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
  const [searchResultsExecuted, setSearchResultsExecuted] = useState<boolean>(false);
  const [currentResultPage, setCurrentResultPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<string>('id');
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
    hasTargetAbility: false,
    hasResistance: false,
    hasStatusEffect: false,
    hasSpecialAttack: false,
    hasTalents: false,
    hasUltraTalents: false,
    includeTalentSearch: false,
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
    setSearchResultsExecuted(false);

    try {
      // 検索可能なユニットリストを生成
      const searchableUnits: SearchableUnit[] = [];
      
      for (const unitName of unitNamesData) {
        const unitData = await getUnitData(parseInt(unitName.unitId));
        if (!unitData) continue;

        // レアリティフィルタ
        if (advancedFilters.rarity.length > 0 && !advancedFilters.rarity.includes(unitData.coreData.rarity.name)) {
          continue;
        }

        // 形態数フィルタ
        if (advancedFilters.formCount !== 'all') {
          const formCount = unitData.coreData.forms.length;
          if (formCount.toString() !== advancedFilters.formCount) {
            continue;
          }
        }

        // 形態ごとにSearchableUnitを作成
        for (let formIndex = 0; formIndex < unitData.coreData.forms.length; formIndex++) {
          const form = unitData.coreData.forms[formIndex];
          const stats = calculateUnitStats(unitData, formIndex, 30, 0);
          
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
            const abilities = getAbilities(unitData, formIndex, 30, 0);
            
            // キーから日本語名への変換
            const traitNames = advancedFilters.targetTraits.map(traitKey => {
              const traitOption = targetTraitOptions.find(option => option.key === traitKey);
              return traitOption ? traitOption.name : traitKey;
            });
            
            // デバッグログ（Unit 006, 008と643の場合）
            if (parseInt(unitName.unitId) === 6 || parseInt(unitName.unitId) === 8 || parseInt(unitName.unitId) === 643) {
              console.log(`Unit ${unitName.unitId}-${formIndex}: `, {
                unitName: unitName.displayName,
                formName: form.name,
                traitNames,
                abilities: abilities.map(a => ({ name: a.name, value: a.value }))
              });
            }
            
            hasMatchingTargetTrait = abilities.some(ability => 
              traitNames.some(traitName => {
                const abilityText = typeof ability.name === 'string' ? ability.name : '';
                const valueText = typeof ability.value === 'string' ? ability.value : '';
                const match = abilityText.includes(traitName) || valueText.includes(traitName);
                
                // デバッグログ（マッチした場合）
                if (match && (parseInt(unitName.unitId) === 6 || parseInt(unitName.unitId) === 8 || parseInt(unitName.unitId) === 643)) {
                  console.log(`MATCH: Unit ${unitName.unitId}-${formIndex} has ${traitName} in ability:`, {
                    abilityText,
                    valueText
                  });
                }
                
                return match;
              })
            );
          }

          if (!hasMatchingTargetTrait) continue;

          // 能力フィルタ（この形態のみ）
          let hasMatchingAbility = true;
          if (advancedFilters.hasTargetAbility || advancedFilters.hasResistance || 
              advancedFilters.hasStatusEffect || advancedFilters.hasSpecialAttack) {
            
            const abilities = getAbilities(unitData, formIndex, 30, 0);
            const abilityChecks = [];
            
            if (advancedFilters.hasTargetAbility) {
              // キーから日本語名への変換
              const traitNames = advancedFilters.targetTraits.map(traitKey => {
                const traitOption = targetTraitOptions.find(option => option.key === traitKey);
                return traitOption ? traitOption.name : traitKey;
              });
              
              const hasTarget = abilities.some(ability => 
                traitNames.some(traitName => {
                  const abilityText = typeof ability.name === 'string' ? ability.name : '';
                  const valueText = typeof ability.value === 'string' ? ability.value : '';
                  return abilityText.includes(traitName) || valueText.includes(traitName);
                })
              );
              abilityChecks.push(hasTarget);
            }
            
            if (advancedFilters.hasResistance) {
              const hasResist = abilities.some(ability => {
                const abilityText = typeof ability.name === 'string' ? ability.name : '';
                const valueText = typeof ability.value === 'string' ? ability.value : '';
                return abilityText.includes('耐性') || abilityText.includes('無効') ||
                       valueText.includes('耐性') || valueText.includes('無効');
              });
              abilityChecks.push(hasResist);
            }
            
            if (advancedFilters.hasStatusEffect) {
              const hasStatus = abilities.some(ability => {
                const abilityText = typeof ability.name === 'string' ? ability.name : '';
                const valueText = typeof ability.value === 'string' ? ability.value : '';
                return abilityText.includes('停止') || abilityText.includes('遅く') ||
                       abilityText.includes('ふっとばす') || abilityText.includes('クリティカル') ||
                       valueText.includes('停止') || valueText.includes('遅く') ||
                       valueText.includes('ふっとばす') || valueText.includes('クリティカル');
              });
              abilityChecks.push(hasStatus);
            }
            
            if (advancedFilters.hasSpecialAttack) {
              const hasSpecial = abilities.some(ability => {
                const abilityText = typeof ability.name === 'string' ? ability.name : '';
                const valueText = typeof ability.value === 'string' ? ability.value : '';
                return abilityText.includes('範囲攻撃') || abilityText.includes('全体攻撃') ||
                       abilityText.includes('波動') || abilityText.includes('バリア') ||
                       valueText.includes('範囲攻撃') || valueText.includes('全体攻撃') ||
                       valueText.includes('波動') || valueText.includes('バリア');
              });
              abilityChecks.push(hasSpecial);
            }
            
            // OR/AND検索モードに応じた判定
            if (advancedFilters.searchMode === 'OR') {
              hasMatchingAbility = abilityChecks.some(check => check === true);
            } else { // AND
              hasMatchingAbility = abilityChecks.every(check => check === true);
            }
          }

          if (!hasMatchingAbility) continue;

          // 本能・超本能フィルタ
          if (advancedFilters.hasTalents || advancedFilters.hasUltraTalents) {
            // 実装は後で追加（現在はスキップ）
          }

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
            abilities: [],
            talents: [],
            ultraTalents: []
          };

          searchableUnits.push(searchableUnit);
        }
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
          default:
            return 0;
        }
      });

      setSearchResults(searchableUnits);
      setSearchResultsExecuted(true);
      setCurrentResultPage(1);
    } catch {
      setError('検索中にエラーが発生しました');
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
      hasTargetAbility: false,
      hasResistance: false,
      hasStatusEffect: false,
      hasSpecialAttack: false,
      hasTalents: false,
      hasUltraTalents: false,
      includeTalentSearch: false
    });
    setSearchResults([]);
    setSearchResultsExecuted(false);
    setCurrentResultPage(1);
  };

  // 検索結果選択
  const handleSearchResultSelect = async (unit: SearchableUnit) => {
    const numericId = parseInt(unit.unitId);
    const formParam = ['f', 'c', 's', 'u'][unit.formId] || 'f';
    
    console.log(`Selecting unit: ${unit.unitId}-${unit.formId + 1} (${unit.formName}), formParam: ${formParam}`);
    
    // URLを更新 - useEffectでパラメータ処理される
    router.push(`/unit?unit=${numericId}&form=${formParam}`);
    
    setIsAdvancedSearchOpen(false);
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
              <div className="flex gap-4">
                <label className="flex items-center text-[9px] text-gray-600">
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
                <label className="flex items-center text-[9px] text-gray-600">
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
            
            {/* 4列レイアウト */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
              
              {/* 列1: 基本情報 + ターゲット属性 */}
              <div>
                {/* レアリティ選択 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600 mb-1">レア度</label>
                  <div className="flex flex-wrap gap-1">
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
                        <div className={`w-12 h-6 border-2 rounded flex items-center justify-center my-0 py-0 ${
                          advancedFilters.rarity.includes(rarity.key) 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}>
                          <Image 
                            src={`data:image/png;base64,${rarity.icon}`} 
                            alt={rarity.key} 
                            width={32} 
                            height={32} 
                            className="object-contain"
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* ターゲット属性 */}
                <div>
                  <label className="block text-[10px] text-gray-600 mb-1">ターゲット属性</label>
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
                      { key: 'base', name: '悪魔', icon: icons.traitAku },
                      { key: 'white', name: '属性を持たない敵', icon: icons.traitTraitless },
                      { key: 'eva', name: 'エヴァ使徒', icon: icons.traitEvaAngel },
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
                          className={`border-2 rounded flex items-center justify-center my-0 py-0 ${
                            advancedFilters.targetTraits.includes(trait.key) 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-300 bg-white hover:border-gray-400'
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
              
              {/* 列2: 基本ステータス範囲 */}
              <div>
                <h4 className="font-semibold mb-1 text-gray-600">基本ステータス</h4>
                
                {/* HP範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">HP</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="最小"
                      value={advancedFilters.hpRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hpRange: {...advancedFilters.hpRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      placeholder="最大"
                      value={advancedFilters.hpRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hpRange: {...advancedFilters.hpRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* 攻撃力範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">攻撃力</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="最小"
                      value={advancedFilters.attackRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        attackRange: {...advancedFilters.attackRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      placeholder="最大"
                      value={advancedFilters.attackRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        attackRange: {...advancedFilters.attackRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* DPS範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">DPS</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="最小"
                      value={advancedFilters.dpsRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        dpsRange: {...advancedFilters.dpsRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      placeholder="最大"
                      value={advancedFilters.dpsRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        dpsRange: {...advancedFilters.dpsRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* コスト範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">コスト</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="最小"
                      value={advancedFilters.costRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        costRange: {...advancedFilters.costRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      placeholder="最大"
                      value={advancedFilters.costRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        costRange: {...advancedFilters.costRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* KB範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">KB</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      placeholder="最小"
                      value={advancedFilters.kbRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        kbRange: {...advancedFilters.kbRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      placeholder="最大"
                      value={advancedFilters.kbRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        kbRange: {...advancedFilters.kbRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
              </div>
              
              {/* 列3: 攻撃・時間ステータス範囲 */}
              <div>
                <h4 className="font-semibold mb-1 text-gray-600">攻撃・時間</h4>
                
                {/* 再生産範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">再生産（秒）</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最小"
                      value={advancedFilters.rechargeRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        rechargeRange: {...advancedFilters.rechargeRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最大"
                      value={advancedFilters.rechargeRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        rechargeRange: {...advancedFilters.rechargeRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* 攻撃発生範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">攻撃発生（秒）</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最小"
                      value={advancedFilters.foreswingRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        foreswingRange: {...advancedFilters.foreswingRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最大"
                      value={advancedFilters.foreswingRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        foreswingRange: {...advancedFilters.foreswingRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* 攻撃間隔範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">攻撃間隔（秒）</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最小"
                      value={advancedFilters.tbaRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        tbaRange: {...advancedFilters.tbaRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最大"
                      value={advancedFilters.tbaRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        tbaRange: {...advancedFilters.tbaRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* 攻撃後硬直範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">攻撃後硬直（秒）</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最小"
                      value={advancedFilters.backswingRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        backswingRange: {...advancedFilters.backswingRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      step="0.1"
                      placeholder="最大"
                      value={advancedFilters.backswingRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        backswingRange: {...advancedFilters.backswingRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
                
                {/* 攻撃頻度範囲 */}
                <div className="mb-2">
                  <label className="block text-[10px] text-gray-600">攻撃頻度（/秒）</label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      step="0.01"
                      placeholder="最小"
                      value={advancedFilters.freqRange.min}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        freqRange: {...advancedFilters.freqRange, min: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                    <input
                      type="number"
                      step="0.01"
                      placeholder="最大"
                      value={advancedFilters.freqRange.max}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        freqRange: {...advancedFilters.freqRange, max: e.target.value}
                      })}
                      className="w-1/2 border rounded px-1 py-0.5 text-[8px]"
                    />
                  </div>
                </div>
              </div>
              
              {/* 列4: 能力・効果 + 本能・超本能 */}
              <div>
                <h4 className="font-semibold mb-1 text-gray-600">能力・効果</h4>
                
                <div className="space-y-1 mb-3">
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.hasTargetAbility}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hasTargetAbility: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    特定対象への特殊攻撃
                  </label>
                  
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.hasResistance}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hasResistance: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    耐性能力
                  </label>
                  
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.hasStatusEffect}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hasStatusEffect: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    状態異常
                  </label>
                  
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.hasSpecialAttack}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hasSpecialAttack: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    特殊攻撃（波動・サージ等）
                  </label>
                </div>
                
                <h4 className="font-semibold mb-1 text-gray-600">本能・超本能</h4>
                
                <div className="space-y-1">
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.hasTalents}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hasTalents: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    本能あり
                  </label>
                  
                  <label className="flex items-center text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={advancedFilters.hasUltraTalents}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters, 
                        hasUltraTalents: e.target.checked
                      })}
                      className="mr-1 scale-75"
                    />
                    超本能あり
                  </label>
                  
                  <div className="border-t pt-1 mt-2">
                    <label className="flex items-center text-[10px] font-medium text-gray-600">
                      <input
                        type="checkbox"
                        checked={advancedFilters.includeTalentSearch}
                        onChange={(e) => setAdvancedFilters({
                          ...advancedFilters, 
                          includeTalentSearch: e.target.checked
                        })}
                        className="mr-1 scale-75"
                      />
                      本能・超本能を検索対象に含める
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 検索実行・リセットボタン */}
            <div className="flex gap-2 mt-2">
              <button 
                onClick={handleAdvancedSearch}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
              >
                検索実行
              </button>
              <button 
                onClick={resetAdvancedFilters}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs"
              >
                条件リセット
              </button>
            </div>
          </div>
        )}

        {/* 検索結果表示エリア */}
        {searchResults.length > 0 && (
          <div className="mb-2">
            {/* 検索結果ヘッダー */}
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-xs font-semibold text-blue-600">
                検索結果: {searchResults.length}件
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
                </select>
                
                <button
                  onClick={() => setSearchResults([])}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  結果をクリア
                </button>
              </div>
            </div>
            
            {/* 検索結果リスト */}
            <div className="border border-gray-300 rounded max-h-64 overflow-y-auto bg-white">
              {searchResults.slice((currentResultPage - 1) * 50, currentResultPage * 50).map((unit, index) => {
                // レアリティアイコンのマッピング
                const rarityIconMap: { [key: string]: string } = {
                  '基本': icons.rarityBasic,
                  'EX': icons.rarityEx,
                  'レア': icons.rarityRare,
                  '激レア': icons.raritySuperRare,
                  '超激レア': icons.rarityUberRare,
                  '伝説レア': icons.rarityLegendRare
                };
                
                const rarityIcon = rarityIconMap[unit.rarity.name] || icons.rarityBasic;
                
                return (
                  <div
                    key={`${unit.unitId}-${unit.formId}`}
                    className={`px-3 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                    onClick={() => handleSearchResultSelect(unit)}
                  >
                    <div className="flex items-center gap-2">
                      {/* ユニットID-形態 */}
                      <span className="text-xs font-semibold text-gray-800 min-w-[50px]">
                        {unit.unitId}-{unit.formId + 1}
                      </span>
                      
                      {/* レアリティアイコン */}
                      <div className="w-12 h-6 flex items-center justify-center">
                        <Image 
                          src={`data:image/png;base64,${rarityIcon}`} 
                          alt={unit.rarity.name} 
                          width={48} 
                          height={24} 
                          className="object-contain"
                        />
                      </div>
                      
                      {/* ユニットアイコン */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        {unit.unitIcon ? (
                          <Image 
                            src={`data:image/png;base64,${unit.unitIcon}`} 
                            alt={unit.displayName} 
                            width={32} 
                            height={32} 
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        )}
                      </div>
                      
                      {/* ユニット名 */}
                      <span className="text-xs text-gray-700">
                        {unit.formName}
                      </span>
                      
                      {/* 右側: 本能・超本能 */}
                      <div className="flex items-center gap-1 ml-auto">
                        {unit.talents.length > 0 && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-orange-100 text-orange-700">
                            本能
                          </span>
                        )}
                        {unit.ultraTalents.length > 0 && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-red-100 text-red-700">
                            超本能
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* ページネーション（結果が多い場合） */}
            {searchResults.length > 50 && (
              <div className="flex justify-center mt-2">
                <div className="flex gap-1 text-xs">
                  <button 
                    onClick={() => setCurrentResultPage(Math.max(1, currentResultPage - 1))}
                    disabled={currentResultPage === 1}
                    className="px-2 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
                  >
                    前
                  </button>
                  <span className="px-2 py-1">
                    {currentResultPage} / {Math.ceil(searchResults.length / 50)}
                  </span>
                  <button 
                    onClick={() => setCurrentResultPage(Math.min(Math.ceil(searchResults.length / 50), currentResultPage + 1))}
                    disabled={currentResultPage === Math.ceil(searchResults.length / 50)}
                    className="px-2 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
                  >
                    次
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 検索結果が0件の場合 */}
        {searchResultsExecuted && searchResults.length === 0 && (
          <div className="mb-2 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
            <div className="flex items-center gap-2">
              <span>⚠️</span>
              <span>指定した条件に一致するユニットが見つかりませんでした。</span>
            </div>
            <div className="mt-1 text-xs text-yellow-600">
              検索条件を緩和するか、「条件リセット」をお試しください。
            </div>
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
