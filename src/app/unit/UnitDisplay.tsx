// Common unit display component
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UnitData, CalculatedStats, UnitAbility, UnitTalent, calculateUnitStats, getAbilities, frameToSecond, getValidFormCount, calculateTalentEffect } from './types';
import { icons } from '@/data/icons';

interface UnitDisplayProps {
  unitData: UnitData;
  initialLevel?: number;
  initialPlusLevel?: number;
  initialFormId?: number;
  className?: string;
  onParamsChange?: (params: { level: number; plusLevel: number; formId: number }) => void;
}

export function UnitDisplay({
  unitData,
  initialLevel = 50,
  initialPlusLevel = 0,
  initialFormId = 0,
  className = "",
  onParamsChange
}: UnitDisplayProps) {
  const [level, setLevel] = useState(initialLevel);
  const [plusLevel, setPlusLevel] = useState(initialPlusLevel);
  const [currentForm, setCurrentForm] = useState(initialFormId);
  
  // 入力用の文字列state
  const [levelInput, setLevelInput] = useState(initialLevel.toString());
  const [plusLevelInput, setPlusLevelInput] = useState(initialPlusLevel.toString());

  const validFormCount = getValidFormCount(unitData);
  const actualCurrentForm = Math.min(currentForm, validFormCount - 1);
  
  const stats = calculateUnitStats(unitData, actualCurrentForm, level, plusLevel);
  const abilities = getAbilities(unitData, actualCurrentForm, level, plusLevel);
  const currentFormData = unitData.coreData.forms[actualCurrentForm];

  if (!currentFormData) {
    return <div className="text-red-500">Invalid form ID: {actualCurrentForm}</div>;
  }

  const maxLevel = unitData.coreData.rarity.maxLevels[0];
  const maxPlusLevel = unitData.coreData.rarity.maxLevels[1];

  return (
    <div className={`bg-white rounded-lg shadow-lg p-3 ${className}`}>
      {/* Header */}
      <div className="mb-3 flex items-center gap-2 sm:gap-3">
        {/* Unit Icon and Rarity */}
        {currentFormData.icon && (
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-16 h-12 rounded-lg border-2 border-gray-200 overflow-hidden">
              <Image 
                src={`data:image/png;base64,${currentFormData.icon}`}
                alt={currentFormData.name || 'Unit Icon'}
                width={64}
                height={64}
                className="object-cover object-center w-full h-full"
              />
            </div>
            {(() => {
              const rarityName = unitData.coreData.rarity.name;
              const rarityIconMap: { [key: string]: string } = {
                '基本': 'rarityBasic',
                'EX': 'rarityEx', 
                'レア': 'rarityRare',
                '激レア': 'raritySuperRare',
                '超激レア': 'rarityUberRare',
                '伝説レア': 'rarityLegendRare'
              };
              
              const iconKey = rarityIconMap[rarityName];
              
              return iconKey ? (
                <Image
                  src={`data:image/png;base64,${icons[iconKey as keyof typeof icons]}`}
                  alt={rarityName}
                  width={48}
                  height={24}
                  className="align-top"
                />
              ) : null;
            })()}
          </div>
        )}
        
        {/* Unit Info */}
        <div className="flex-1 min-w-0">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 break-words">
            <span className="text-xs sm:text-sm text-gray-600 font-normal">{unitData.unitId.toString().padStart(3, '0')}-{currentForm + 1}</span> {currentFormData.name || `Unit ${unitData.unitId.toString().padStart(3, '0')}`}
          </h2>
          <div className="text-xs sm:text-sm text-gray-600 break-words flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1">
              <span>Lv</span>
              <input
                type="text"
                value={levelInput}
                onChange={(e) => {
                  const value = e.target.value;
                  // 数値または空文字列のみ許可
                  if (value === '' || /^\d+$/.test(value)) {
                    setLevelInput(value);
                    const numValue = value === '' ? 1 : Math.max(1, Math.min(maxLevel, parseInt(value) || 1));
                    setLevel(numValue);
                    onParamsChange?.({ level: numValue, plusLevel, formId: actualCurrentForm });
                  }
                }}
                onBlur={(e) => {
                  const value = e.target.value.trim();
                  if (value && !isNaN(Number(value))) {
                    const numValue = Math.max(1, Math.min(maxLevel, Number(value)));
                    setLevel(numValue);
                    setLevelInput(numValue.toString());
                    onParamsChange?.({ level: numValue, plusLevel, formId: actualCurrentForm });
                  } else if (value === '') {
                    setLevel(1);
                    setLevelInput('1');
                    onParamsChange?.({ level: 1, plusLevel, formId: actualCurrentForm });
                  }
                }}
                className="border rounded px-1 sm:px-2 py-1 w-6 sm:w-16 text-right text-xs sm:text-sm text-gray-900"
              />
              <span>+</span>
              <input
                type="text"
                value={plusLevelInput}
                onChange={(e) => {
                  const value = e.target.value;
                  // 数値または空文字列のみ許可
                  if (value === '' || /^\d+$/.test(value)) {
                    setPlusLevelInput(value);
                    const numValue = value === '' ? 0 : Math.max(0, Math.min(maxPlusLevel, parseInt(value) || 0));
                    setPlusLevel(numValue);
                    onParamsChange?.({ level, plusLevel: numValue, formId: actualCurrentForm });
                  }
                }}
                onBlur={(e) => {
                  const value = e.target.value.trim();
                  if (value && !isNaN(Number(value))) {
                    const numValue = Math.max(0, Math.min(maxPlusLevel, Number(value)));
                    setPlusLevel(numValue);
                    setPlusLevelInput(numValue.toString());
                    onParamsChange?.({ level, plusLevel: numValue, formId: actualCurrentForm });
                  } else if (value === '') {
                    setPlusLevel(0);
                    setPlusLevelInput('0');
                    onParamsChange?.({ level, plusLevel: 0, formId: actualCurrentForm });
                  }
                }}
                className="border rounded px-1 sm:px-2 py-1 w-6 sm:w-16 text-right text-xs sm:text-sm text-gray-900"
              />
            </div>
            <span className="text-xs text-gray-500">/ <small><b>{maxLevel} + {maxPlusLevel}</b></small></span>
            <button
              onClick={() => { 
                setLevel(maxLevel); 
                setPlusLevel(maxPlusLevel);
                setLevelInput(maxLevel.toString());
                setPlusLevelInput(maxPlusLevel.toString());
                onParamsChange?.({ level: maxLevel, plusLevel: maxPlusLevel, formId: actualCurrentForm });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs sm:text-sm"
            >
              Max
            </button>
          </div>
        </div>
      </div>


      {/* Form Tabs */}
      {validFormCount > 1 && (
        <div className="flex mb-3 gap-1 flex-wrap">
          {unitData.coreData.forms.slice(0, validFormCount).map((form, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentForm(index);
                onParamsChange?.({ level, plusLevel, formId: index });
              }}
              className={`flex items-center gap-1 px-1 sm:px-2 py-1 rounded text-xs sm:text-sm transition-colors ${
                actualCurrentForm === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {/* Form Icon */}
              {form.icon && (
                <Image 
                  src={`data:image/png;base64,${form.icon}`}
                  alt={form.name || 'Form Icon'}
                  width={24}
                  height={24}
                  className="rounded object-cover"
                />
              )}
              <span className="truncate max-w-[80px] sm:max-w-none">{form.name || `Form ${index + 1}`}</span>
            </button>
          ))}
        </div>
      )}

      {/* Stats Table */}
      <StatsTable stats={stats} />

      {/* Abilities */}
      {abilities.length > 0 && <AbilitiesList abilities={abilities} />}

      {/* Talents */}
      {unitData.auxiliaryData.talents.hasTalents && (
        <TalentsList talents={unitData.auxiliaryData.talents.talentList} />
      )}
    </div>
  );
}

function StatsTable({ stats }: { stats: CalculatedStats }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">基本ステータス</h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
        <StatItem label="体力" value={stats.hp.toLocaleString()} labelClassName="text-blue-500" />

        {stats.multihit ? (
          <StatItem
            label={<>攻撃力<Image
                src={`data:image/png;base64,${icons[stats.attackType === 'area' ? 'abilityAreaAttack' : 'abilitySingleTarget']}`}
                alt={stats.attackType === 'area' ? '範囲攻撃' : '単体攻撃'}
                width={16}
                height={16}
                className="inline ml-1 align-top"
              />
            </>}
            value={
              <>
                {stats.ap.toLocaleString()}
                <br />
                <small>{`[${[stats.atk1, stats.atk2, stats.atk3].filter(Boolean).map(x => x?.toLocaleString()).join(' / ')}]`}</small>
              </>
            }
            labelClassName="text-red-500"
          />
        ) : (
          <StatItem
            label={<>攻撃力<Image
                src={`data:image/png;base64,${icons[stats.attackType === 'area' ? 'abilityAreaAttack' : 'abilitySingleTarget']}`}
                alt={stats.attackType === 'area' ? '範囲攻撃' : '単体攻撃'}
                width={16}
                height={16}
                className="inline ml-1 align-top"
              />
            </>}
            value={stats.ap.toLocaleString()}
            labelClassName="text-red-500"
          />
        )}

        <StatItem
          label="DPS"
          value={Math.round(stats.dps).toLocaleString()}
          labelClassName="text-fuchsia-600"
          className="text-fuchsia-600 font-bold"
        />
        <StatItem label="射程" value={stats.range.toString()} />
        <StatItem label="KB" value={stats.kb.toString()} />
        <StatItem label="速度" value={stats.speed.toString()} />
        <StatItem label="コスト" value={stats.cost.toLocaleString()} />
        <StatItem
          label="再生産"
          value={`${stats.recharge.toFixed(2)}s`}
          detail={<small>({Math.round(stats.recharge * 30).toLocaleString()}f)</small>}
        />
        <StatItem
          label="攻撃発生"
          value={`${frameToSecond(stats.foreswing).toFixed(2)}s`}
          detail={<small>({stats.foreswing.toLocaleString()}f)</small>}
        />
        <StatItem
          label="攻撃間隔"
          value={`${frameToSecond(stats.tba).toFixed(2)}s`}
          detail={<small>({stats.tba.toLocaleString()}f)</small>}
        />
        <StatItem
          label="攻撃後硬直"
          value={`${frameToSecond(stats.backswing).toFixed(2)}s`}
          detail={<small>({stats.backswing.toLocaleString()}f)</small>}
        />
        <StatItem
          label="攻撃頻度"
          value={`${frameToSecond(stats.freq).toFixed(2)}s`}
          detail={
            <>
              {<small>({stats.freq.toLocaleString()}f)</small>}
              <br />
              <small>[ {stats.frames.join(' ')} ]</small>
            </>
          }
        />
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  detail,
  className = "",
  labelClassName = ""
}: {
  label: string | React.ReactNode;
  value: string | React.ReactNode;
  detail?: string | React.ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div className="flex justify-between items-center py-0.5 border-b border-gray-100">
      <span className={`${labelClassName || 'text-gray-600'} truncate pr-2 text-xs font-bold`}>{label}</span>
      <div className="text-right flex-shrink-0">
        <span className={className || 'text-gray-900'}>{value}</span>
        {detail && <span className="text-xs text-gray-500 ml-1">{detail}</span>}
      </div>
    </div>
  );
}

function DynamicSuperDamage({ ability }: { ability: UnitAbility }) {
  const [multiplier, setMultiplier] = useState(4);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (mult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.floor(stats.atk1 * mult) : 0;
      const hit2 = stats.atk2 ? Math.floor(stats.atk2 * mult) : 0;
      const hit3 = stats.atk3 ? Math.floor(stats.atk3 * mult) : 0;
      
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => v.toLocaleString());
      return `[ ${values.join(' / ')} ]`;
    } else {
      const damage = Math.floor(stats.ap * mult);
      return damage.toLocaleString();
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityMassiveDamage}`}
            alt="超ダメージ"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          超ダメージ <span className="text-red-500"><small>攻撃力
          <input
            type="number"
            value={multiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 3 && value <= 4) {
                setMultiplier(value);
              }
            }}
            className="w-7 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="3"
            max="4"
            step="0.1"
          />倍 </small></span><small>(3~4)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            {calculateDamage(multiplier)}
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicExtremeDamage({ ability }: { ability: UnitAbility }) {
  const [multiplier, setMultiplier] = useState(6);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (mult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.floor(stats.atk1 * mult) : 0;
      const hit2 = stats.atk2 ? Math.floor(stats.atk2 * mult) : 0;
      const hit3 = stats.atk3 ? Math.floor(stats.atk3 * mult) : 0;
      
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => v.toLocaleString());
      return `[ ${values.join(' / ')} ]`;
    } else {
      const damage = Math.floor(stats.ap * mult);
      return damage.toLocaleString();
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityInsaneDamage}`}
            alt="極ダメージ"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          極ダメージ <span className="text-red-500"><small>攻撃力
          <input
            type="number"
            value={multiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 5 && value <= 6) {
                setMultiplier(value);
              }
            }}
            className="w-7 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="5"
            max="6"
            step="0.1"
          />倍 </small></span><small>(5~6)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            {calculateDamage(multiplier)}
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicToughness({ ability }: { ability: UnitAbility }) {
  const [damageMultiplier, setDamageMultiplier] = useState(0.2);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateEquivalentHP = (damageMult: number) => {
    const stats = ability.calculatedStats!;
    const hpMultiplier = 1 / damageMult; // 0.2 -> 5倍, 0.25 -> 4倍
    const equivalentHP = Math.floor(stats.hp * hpMultiplier);
    return equivalentHP.toLocaleString();
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityResistant}`}
            alt="打たれ強い"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          打たれ強い <span className="text-blue-500"><small>被ダメ
          <input
            type="number"
            value={damageMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0.2 && value <= 0.25) {
                setDamageMultiplier(value);
              }
            }}
            className="w-9 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.2"
            max="0.25"
            step="0.01"
          />倍 </small></span><small>(0.25~0.2)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <span className='text-blue-500'><small>体力(換算値)</small></span> {calculateEquivalentHP(damageMultiplier)}
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicSuperToughness({ ability }: { ability: UnitAbility }) {
  const [damageMultiplier, setDamageMultiplier] = useState(0.143);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateEquivalentHP = (damageMult: number) => {
    const stats = ability.calculatedStats!;
    const hpMultiplier = 1 / damageMult; // 0.143 -> 約7倍, 0.167 -> 約6倍
    const equivalentHP = Math.floor(stats.hp * hpMultiplier);
    return equivalentHP.toLocaleString();
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityInsanelyTough}`}
            alt="超打たれ強い"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          超打たれ強い <span className="text-red-500"><small>被ダメ
          <input
            type="number"
            value={damageMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0.143 && value <= 0.167) {
                setDamageMultiplier(value);
              }
            }}
            className="w-10 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.143"
            max="0.167"
            step="0.001"
          />倍 </small></span><small>(0.167~0.143)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <small className="text-blue-500">体力(換算値)</small> {calculateEquivalentHP(damageMultiplier)}
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicMighty({ ability }: { ability: UnitAbility }) {
  const [apMultiplier, setApMultiplier] = useState(1.8);
  const [dmgMultiplier, setDmgMultiplier] = useState(0.4);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (apMult: number, dmgMult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.floor(stats.atk1 * apMult) : 0;
      const hit2 = stats.atk2 ? Math.floor(stats.atk2 * apMult) : 0;
      const hit3 = stats.atk3 ? Math.floor(stats.atk3 * apMult) : 0;
      
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => v.toLocaleString());
      const apDisplay = `[ ${values.join(' ')} ]`;
      
      // HP相当計算
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> {apDisplay}
          <br />
          <span className="text-blue-500"><small>体力(換算値)</small></span> {equivalentHP.toLocaleString()}
        </>
      );
    } else {
      const damage = Math.floor(stats.ap * apMult);
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> {damage.toLocaleString()}
          <br />
          <span className="text-blue-500"><small>体力(換算値)</small></span> {equivalentHP.toLocaleString()}
        </>
      );
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityStrongAgainst}`}
            alt="めっぽう強い"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          めっぽう強い<br /> <span className="text-red-500"><small>攻撃力
          <input
            type="number"
            value={apMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1.5 && value <= 1.8) {
                setApMultiplier(value);
                // AP倍率に対応するダメージ倍率を設定 (1.5倍->0.5倍, 1.8倍->0.4倍)
                const newDmgMult = 1.9 - value;
                setDmgMultiplier(newDmgMult);
              }
            }}
            className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="1.5"
            max="1.8"
            step="0.1"
          />倍 </small></span><small>(1.5~1.8)</small>
          <br />
          <span className="text-blue-500"><small>被ダメ
          <input
            type="number"
            value={dmgMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0.4 && value <= 0.5) {
                setDmgMultiplier(value);
                // ダメージ倍率に対応するAP倍率を設定
                const newApMult = 1.9 - value;
                setApMultiplier(newApMult);
              }
            }}
            className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.4"
            max="0.5"
            step="0.1"
          />倍 </small></span><small>(0.5~0.4)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <br />
            {calculateDamage(apMultiplier, dmgMultiplier)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AbilitiesList({ abilities }: { abilities: UnitAbility[] }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">能力・効果</h3>
      <div className="space-y-0.5">
        {abilities.map((ability, index) => (
          ability.isDynamic && ability.name === "超ダメージ" ? (
            <DynamicSuperDamage key={index} ability={ability} />
          ) : ability.isDynamic && ability.name === "極ダメージ" ? (
            <DynamicExtremeDamage key={index} ability={ability} />
          ) : ability.isDynamic && ability.name === "打たれ強い" ? (
            <DynamicToughness key={index} ability={ability} />
          ) : ability.isDynamic && ability.name === "超打たれ強い" ? (
            <DynamicSuperToughness key={index} ability={ability} />
          ) : ability.isDynamic && ability.name === "めっぽう強い" ? (
            <DynamicMighty key={index} ability={ability} />
          ) : (
            <div key={index} className="bg-gray-50 p-2 rounded">
              <div className="flex justify-between items-center gap-2">
                <div className="font-bold text-xs text-gray-600">
                  {ability.name === 'abilityLongDistance' ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityLongDistance}`}
                        alt="遠方攻撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      遠方攻撃
                    </>
                  ) : ability.name === '全方位攻撃' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityOmniStrike}`}
                        alt="全方位攻撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      全方位攻撃
                    </>
                  ) : ability.name === '攻撃力ダウン無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneWeaken}`}
                        alt="攻撃力ダウン無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      攻撃力ダウン無効
                    </>
                  ) : ability.name === 'クリティカル' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityCritical}`}
                        alt="クリティカル"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      クリティカル
                    </>
                  ) : ability.name === '動きを止める' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityFreeze}`}
                        alt="動きを止める"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      動きを止める
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('小波動') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityMiniWave}`}
                        alt="小波動"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('波動攻撃') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityWave}`}
                        alt="波動攻撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : ability.name === '波動ダメージ無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneWave}`}
                        alt="波動ダメージ無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      波動ダメージ無効
                    </>
                  ) : ability.name === 'ふっとばす無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneKnockback}`}
                        alt="ふっとばす無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      ふっとばす無効
                    </>
                  ) : ability.name === '動きを止める無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneFreeze}`}
                        alt="動きを止める無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      動きを止める無効
                    </>
                  ) : ability.name === '動きを遅くする無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneSlow}`}
                        alt="動きを遅くする無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      動きを遅くする無効
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('ふっとばす') && !ability.name.includes('無効') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityKnockback}`}
                        alt="ふっとばす"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('動きを遅くする') && !ability.name.includes('無効') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySlow}`}
                        alt="動きを遅くする"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('攻撃力ダウン') && !ability.name.includes('無効') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityWeaken}`}
                        alt="攻撃力ダウン"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : ability.name === '古代の呪い無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneCurse}`}
                        alt="古代の呪い無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      古代の呪い無効
                    </>
                  ) : ability.name === 'ワープ無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneWarp}`}
                        alt="ワープ無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      ワープ無効
                    </>
                  ) : (typeof ability.name === 'object' && React.isValidElement(ability.name) && ability.iconKeys?.includes('abilityBerserk')) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityBerserk}`}
                        alt="渾身の一撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : ability.name === '攻撃力アップ' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityStrengthen}`}
                        alt="攻撃力アップ"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      攻撃力アップ
                    </>
                  ) : ability.name === '生き残る' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySurvive}`}
                        alt="生き残る"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      生き残る
                    </>
                  ) : ability.name === '召喚' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySummon}`}
                        alt="召喚"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      召喚
                    </>
                  ) : ability.name === '波動ストッパー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityWaveShield}`}
                        alt="波動ストッパー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      波動ストッパー
                    </>
                  ) : ability.name === '城破壊が得意' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityBaseDestroyer}`}
                        alt="城破壊が得意"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      城破壊が得意
                    </>
                  ) : ability.name === '撃破時お金アップ' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityExtraMoney}`}
                        alt="撃破時お金アップ"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      撃破時お金アップ
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('小裂波') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityMiniSurge}`}
                        alt="小裂波"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : (typeof ability.name === 'string' && ability.name.includes('裂波攻撃') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySurge}`}
                        alt="裂波攻撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      {ability.name}
                    </>
                  ) : ability.name === '裂波ダメージ無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneSurge}`}
                        alt="裂波ダメージ無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      裂波ダメージ無効
                    </>
                  ) : ability.name === '呪い' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityCurse}`}
                        alt="呪い"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      呪い
                    </>
                  ) : ability.name === '爆波攻撃' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityExplosion}`}
                        alt="爆波攻撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      爆波攻撃
                    </>
                  ) : ability.name === '爆波ダメージ無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityImmuneExplosion}`}
                        alt="爆波ダメージ無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      爆波ダメージ無効
                    </>
                  ) : ability.name === 'ゾンビキラー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityZombieKiller}`}
                        alt="ゾンビキラー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      ゾンビキラー
                    </>
                  ) : ability.name === 'バリアブレイカー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityBarrierBreaker}`}
                        alt="バリアブレイカー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      バリアブレイカー
                    </>
                  ) : ability.name === '魂攻撃' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySoulStrike}`}
                        alt="魂攻撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      魂攻撃
                    </>
                  ) : ability.name === 'シールドブレイカー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityShieldPiercing}`}
                        alt="シールドブレイカー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      シールドブレイカー
                    </>
                  ) : ability.name === 'メタル' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityMetal}`}
                        alt="メタル"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      メタル
                    </>
                  ) : ability.name === '使徒キラー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityEvaAngelKiller}`}
                        alt="使徒キラー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      使徒キラー
                    </>
                  ) : ability.name === '魔女キラー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityWitchKiller}`}
                        alt="魔女キラー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      魔女キラー
                    </>
                  ) : ability.name === '裂波カウンター' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityCounterSurge}`}
                        alt="裂波カウンター"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      裂波カウンター
                    </>
                  ) : ability.name === '攻撃ターゲット限定' ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityAttacksOnly}`}
                        alt="攻撃ターゲット限定"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      <span className="text-red-500">攻撃ターゲット限定</span>
                    </>
                  ) : (
                    ability.name
                  )}
                </div>
                <div className="text-right flex-shrink-0 max-w-[50%]">
                  {(ability.name === "ターゲット属性" || ability.name === "攻撃ターゲット限定") && ability.iconKeys ? (
                    <div className="flex gap-1 flex-wrap justify-end">
                      {ability.iconKeys.map((iconKey, i) => (
                        <Image
                          key={i}
                          src={`data:image/png;base64,${icons[iconKey as keyof typeof icons]}`}
                          alt={`trait-${iconKey}`}
                          width={20}
                          height={20}
                          className="rounded"
                        />
                      ))}
                    </div>
                  ) : ability.value ? (
                    <div className="text-gray-600 font-medium break-words">
                      {ability.name === '多段攻撃' && typeof ability.value === 'string' ? (
                        <span dangerouslySetInnerHTML={{
                          __html: ability.value.replace(/\((\d+)f\)/g, '<small>($1f)</small>')
                        }} />
                      ) : (
                        ability.value
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

function TalentsList({ talents }: { talents: readonly UnitTalent[] }) {
  if (talents.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">本能・超本能</h3>
      <div className="space-y-0.5">
        {talents.map((talent, index) => (
          <div key={index} className={`p-2 rounded ${talent.type === 'ultra' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'}`}>
            <div className="flex justify-between items-center gap-2">
              <div className={`font-bold text-xs ${talent.type === 'ultra' ? 'text-red-600' : 'text-yellow-600'}`}>
                {talent.name} ({talent.id})
                {talent.type === 'ultra' && <span className="text-xs ml-1 px-1 bg-red-100 rounded">超</span>}
                {talent.npCost > 0 && (
                  <span className="text-[10px] text-gray-600 font-medium ml-1">
                    [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                  </span>
                )}
              </div>
              {talent.data && (
                <div className="text-gray-700 text-right break-words flex-shrink-0 max-w-[50%]">{calculateTalentEffect(talent)}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnitDisplay;
