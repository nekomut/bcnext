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
  initialLevel = 30,
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
      <div className="mb-3 flex items-start gap-2 sm:gap-3">
        {/* Unit Icon */}
        {currentFormData.icon && (
          <div className="flex-shrink-0">
            <Image 
              src={`data:image/png;base64,${currentFormData.icon}`}
              alt={currentFormData.name || 'Unit Icon'}
              width={64}
              height={64}
              className="rounded-lg border-2 border-gray-200 object-cover"
            />
          </div>
        )}
        
        {/* Unit Info */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 break-words">
            {currentFormData.name || `Unit ${unitData.unitId.toString().padStart(3, '0')}`}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 break-words">
            {unitData.coreData.rarity.name} | Lv{level}+{plusLevel} / MaxLv{maxLevel}+{maxPlusLevel}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Unit ID: {unitData.unitId.toString().padStart(3, '0')}-{currentForm + 1}
          </p>
        </div>
      </div>

      {/* Level Controls */}
      <div className="mb-3 flex gap-1 sm:gap-2 items-center flex-wrap">
        <div className="flex items-center gap-1">
          <label className="text-sm text-gray-600">Lv</label>
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
            className="border rounded px-1 sm:px-2 py-1 w-12 sm:w-16 text-xs sm:text-sm text-gray-900"
          />
        </div>
        <div className="flex items-center gap-1">
          <label className="text-sm text-gray-600">+</label>
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
            className="border rounded px-1 sm:px-2 py-1 w-12 sm:w-16 text-xs sm:text-sm text-gray-900"
          />
        </div>
        <div className="ml-1">
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
        <StatItem label="HP" value={stats.hp.toLocaleString()} labelClassName="text-blue-500" />

        {stats.multihit ? (
          <StatItem
            label={<>AP<br className="sm:hidden" />({stats.attackType === 'area' ? '範囲' : '単体'})</>}
            value={
              <>
                {stats.ap.toLocaleString()}
                <br />
                {`[${[stats.atk1, stats.atk2, stats.atk3].filter(Boolean).map(x => x?.toLocaleString()).join(' ')}]`}
              </>
            }
            labelClassName="text-red-500"
          />
        ) : (
          <StatItem
            label={<>AP<br className="sm:hidden" />({stats.attackType === 'area' ? '範囲' : '単体'})</>}
            value={stats.ap.toLocaleString()}
            labelClassName="text-red-500"
          />
        )}

        <StatItem
          label="DPS"
          value={Math.round(stats.dps).toLocaleString()}
          className="text-purple-600 font-bold"
        />
        <StatItem label="射程" value={stats.range.toString()} />
        <StatItem label="KB" value={stats.kb.toString()} />
        <StatItem label="速度" value={stats.speed.toString()} />
        <StatItem label="コスト[円]" value={stats.cost.toLocaleString()} />
        <StatItem
          label="再生産"
          value={`${stats.recharge.toFixed(2)}s`}
          detail={`(${Math.round(stats.recharge * 30).toLocaleString()}f)`}
        />
        <StatItem
          label="攻撃発生"
          value={`${frameToSecond(stats.foreswing).toFixed(2)}s`}
          detail={`(${stats.foreswing.toLocaleString()}f)`}
        />
        <StatItem
          label="攻撃間隔"
          value={`${frameToSecond(stats.tba).toFixed(2)}s`}
          detail={`(${stats.tba.toLocaleString()}f)`}
        />
        <StatItem
          label="攻撃後硬直"
          value={`${frameToSecond(stats.backswing).toFixed(2)}s`}
          detail={`(${stats.backswing.toLocaleString()}f)`}
        />
        <StatItem
          label="攻撃頻度"
          value={`${frameToSecond(stats.freq).toFixed(2)}s`}
          detail={
            <>
              {`(${stats.freq.toLocaleString()}f)`}
              <br />
              [{stats.frames.join(' ')}]
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
    <div className="flex justify-between py-0.5 border-b border-gray-100">
      <span className={`${labelClassName || 'text-gray-600'} truncate pr-2 text-xs font-bold`}>{label}</span>
      <div className="text-right flex-shrink-0">
        <span className={`text-gray-900 ${className}`}>{value}</span>
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
      return `[${values.join(' ')}]`;
    } else {
      const damage = Math.floor(stats.ap * mult);
      return damage.toLocaleString();
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-start gap-2">
        <div className="font-bold text-xs text-gray-600">
          超ダメージ <span className="text-red-500">AP
          <input
            type="number"
            value={multiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 3 && value <= 4) {
                setMultiplier(value);
              }
            }}
            className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="3"
            max="4"
            step="0.1"
          />x</span>
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
      return `[${values.join(' ')}]`;
    } else {
      const damage = Math.floor(stats.ap * mult);
      return damage.toLocaleString();
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-start gap-2">
        <div className="font-bold text-xs text-gray-600">
          極ダメージ <span className="text-red-500">AP
          <input
            type="number"
            value={multiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 5 && value <= 6) {
                setMultiplier(value);
              }
            }}
            className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="5"
            max="6"
            step="0.1"
          />x</span>
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
      <div className="flex justify-between items-start gap-2">
        <div className="font-bold text-xs text-gray-600">
          打たれ強い <span className="text-red-500">DMG
          <input
            type="number"
            value={damageMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0.2 && value <= 0.25) {
                setDamageMultiplier(value);
              }
            }}
            className="w-12 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.2"
            max="0.25"
            step="0.01"
          />x</span>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            HP {calculateEquivalentHP(damageMultiplier)} 相当
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
      <div className="flex justify-between items-start gap-2">
        <div className="font-bold text-xs text-gray-600">
          超打たれ強い <span className="text-red-500">DMG
          <input
            type="number"
            value={damageMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0.143 && value <= 0.167) {
                setDamageMultiplier(value);
              }
            }}
            className="w-12 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.143"
            max="0.167"
            step="0.001"
          />x</span>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            HP {calculateEquivalentHP(damageMultiplier)} 相当
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
      const apDisplay = `[${values.join(' ')}]`;
      
      // HP相当計算
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500">AP</span> {apDisplay}
          <br />
          <span className="text-blue-500">HP</span> {equivalentHP.toLocaleString()} 相当
        </>
      );
    } else {
      const damage = Math.floor(stats.ap * apMult);
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500">AP</span> {damage.toLocaleString()}
          <br />
          <span className="text-blue-500">HP</span> {equivalentHP.toLocaleString()} 相当
        </>
      );
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-start gap-2">
        <div className="font-bold text-xs text-gray-600">
          めっぽう強い<small>AP1.5~1.8x DMG0.5~0.4x</small><br /> <span className="text-red-500">AP
          <input
            type="number"
            value={apMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1.5 && value <= 1.8) {
                setApMultiplier(value);
                // AP倍率に対応するDMG倍率を設定 (1.5x->0.5x, 1.8x->0.4x)
                const newDmgMult = 1.9 - value;
                setDmgMultiplier(newDmgMult);
              }
            }}
            className="w-10 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="1.5"
            max="1.8"
            step="0.1"
          />x </span>
          <span className="text-blue-500">DMG
          <input
            type="number"
            value={dmgMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0.4 && value <= 0.5) {
                setDmgMultiplier(value);
                // DMG倍率に対応するAP倍率を設定
                const newApMult = 1.9 - value;
                setApMultiplier(newApMult);
              }
            }}
            className="w-10 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.4"
            max="0.5"
            step="0.1"
          />x</span>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
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
              <div className="flex justify-between items-start gap-2">
                <div className="font-bold text-xs text-gray-600">{ability.name}</div>
                <div className="text-right flex-shrink-0 max-w-[50%]">
                  {ability.name === "ターゲット属性" && ability.iconKeys ? (
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
                    <div className="text-gray-600 font-medium break-words">{ability.value}</div>
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
            <div className="flex justify-between items-start gap-2">
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
