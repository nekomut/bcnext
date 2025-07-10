'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { icons } from '@/data/icons';
import { UnitDisplay } from './UnitDisplay';
import { UnitData, getUnitData } from './types';
import { unitNamesData, UnitNameData } from '@/data/unit-names';

function UnitPageContent() {
  const [unitId, setUnitId] = useState<string>('');
  const [level, setLevel] = useState<number>(30);
  const [plusLevel, setPlusLevel] = useState<number>(0);
  const [formId, setFormId] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  // ユニット名プルダウン用のstate
  const [selectedUnitName, setSelectedUnitName] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string>('');
  
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

    if (unitParam) {
      setUnitId(unitParam);
      // ユニット名も同期
      const paddedId = unitParam.padStart(3, '0');
      const matchingUnit = unitNamesData.find(unit => unit.unitId === paddedId);
      if (matchingUnit) {
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
    if (formParam) {
      const form = parseInt(formParam);
      if (!isNaN(form) && form >= 0 && form <= 3) {
        setFormId(form);
      }
    }

    // URLパラメータがある場合は自動で検索
    if (unitParam) {
      handleUnitSearchWithId(parseInt(unitParam));
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnitSearch();
    }
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
        <div className="mb-1 flex gap-1 items-end flex-wrap">
          {/* 前のIDボタン - 左端 */}
          {unitId && !isNaN(parseInt(unitId)) && (
            <button
              onClick={() => {
                const currentId = parseInt(unitId);
                const prevId = Math.max(1, currentId - 1);
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
              disabled={loading || parseInt(unitId) <= 1}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 rounded text-xs disabled:opacity-50"
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
              onKeyPress={handleKeyPress}
              className="border rounded px-1 py-0.5 text-xs w-8 sm:w-24 text-gray-900 text-center"
            />
          </div>
          
          {/* ユニット名プルダウン */}
          <div className="relative">
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
                className="border rounded px-1 py-0.5 text-xs w-52 sm:w-52 text-gray-900"
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
          
          <button
            onClick={handleUnitSearch}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 rounded text-xs disabled:opacity-50 w-12"
          >
            {loading ? '読込..' : '表示'}
          </button>
          
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
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 rounded text-xs disabled:opacity-50"
            >
              ▷
            </button>
          )}
        </div>

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
              currentParams.set('form', params.formId.toString());
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
