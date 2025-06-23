// Common unit display component
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UnitData, CalculatedStats, UnitAbility, UnitTalent, calculateUnitStats, getAbilities, frameToSecond, getValidFormCount } from './types';
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
          detail={`(${Math.round(stats.recharge * 30)}f)`}
        />
        <StatItem
          label="攻撃発生"
          value={`${frameToSecond(stats.foreswing).toFixed(2)}s`}
          detail={`(${stats.foreswing}f)`}
        />
        <StatItem
          label="攻撃間隔"
          value={`${frameToSecond(stats.tba).toFixed(2)}s`}
          detail={`(${stats.tba}f)`}
        />
        <StatItem
          label="攻撃後硬直"
          value={`${frameToSecond(stats.backswing).toFixed(2)}s`}
          detail={`(${stats.backswing}f)`}
        />
        <StatItem
          label="攻撃頻度"
          value={`${frameToSecond(stats.freq).toFixed(2)}s`}
          detail={
            <>
              {`(${stats.freq}f)`}
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
      <span className={`text-gray-600 truncate pr-2 text-xs font-bold ${labelClassName}`}>{label}</span>
      <div className="text-right flex-shrink-0">
        <span className={`text-gray-900 ${className}`}>{value}</span>
        {detail && <span className="text-xs text-gray-500 ml-1">{detail}</span>}
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
              {talent.effect && (
                <div className="text-gray-700 text-right break-words flex-shrink-0 max-w-[50%]">{talent.effect}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnitDisplay;
