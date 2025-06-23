// Common unit display component
'use client';

import React, { useState } from 'react';
import { UnitData, CalculatedStats, UnitAbility, UnitTalent, calculateUnitStats, getAbilities, frameToSecond } from './types';

interface UnitDisplayProps {
  unitData: UnitData;
  initialLevel?: number;
  initialPlusLevel?: number;
  initialFormId?: number;
  className?: string;
}

export function UnitDisplay({
  unitData,
  initialLevel = 30,
  initialPlusLevel = 0,
  initialFormId = 0,
  className = ""
}: UnitDisplayProps) {
  const [level, setLevel] = useState(initialLevel);
  const [plusLevel, setPlusLevel] = useState(initialPlusLevel);
  const [currentForm, setCurrentForm] = useState(initialFormId);

  const stats = calculateUnitStats(unitData, currentForm, level, plusLevel);
  const abilities = getAbilities(unitData, currentForm);
  const currentFormData = unitData.coreData.forms[currentForm];

  if (!currentFormData) {
    return <div className="text-red-500">Invalid form ID: {currentForm}</div>;
  }

  const maxLevel = unitData.coreData.rarity.maxLevels[0];
  const maxPlusLevel = unitData.coreData.rarity.maxLevels[1];

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="mb-4 flex items-start gap-4">
        {/* Unit Icon */}
        {currentFormData.icon && (
          <div className="flex-shrink-0">
            <img 
              src={`data:image/png;base64,${currentFormData.icon}`}
              alt={currentFormData.name}
              className="w-20 h-20 rounded-lg border-2 border-gray-200 object-cover"
            />
          </div>
        )}
        
        {/* Unit Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {currentFormData.name || `Unit ${unitData.unitId.toString().padStart(3, '0')}`}
          </h2>
          <p className="text-gray-600">
            {unitData.coreData.rarity.name} | Lv{level}+{plusLevel} / MaxLv{maxLevel}+{maxPlusLevel}
          </p>
          <p className="text-sm text-gray-500">
            Unit ID: {unitData.unitId.toString().padStart(3, '0')}-{currentForm + 1}
          </p>
        </div>
      </div>

      {/* Level Controls */}
      <div className="mb-4 flex gap-2 items-end">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Level</label>
          <input
            type="number"
            value={level}
            onChange={(e) => setLevel(Math.max(1, Math.min(maxLevel, parseInt(e.target.value) || 1)))}
            min="1"
            max={maxLevel}
            className="border rounded px-2 py-1 w-20 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">+Level</label>
          <input
            type="number"
            value={plusLevel}
            onChange={(e) => setPlusLevel(Math.max(0, Math.min(maxPlusLevel, parseInt(e.target.value) || 0)))}
            min="0"
            max={maxPlusLevel}
            className="border rounded px-2 py-1 w-20 text-sm"
          />
        </div>
        <div className="ml-2">
          <button
            onClick={() => { setLevel(maxLevel); setPlusLevel(maxPlusLevel); }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            Max
          </button>
        </div>
      </div>

      {/* Form Tabs */}
      {unitData.coreData.forms.length > 1 && (
        <div className="flex mb-4 space-x-2 flex-wrap">
          {unitData.coreData.forms.map((form, index) => (
            <button
              key={index}
              onClick={() => setCurrentForm(index)}
              className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
                currentForm === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {/* Form Icon */}
              {form.icon && (
                <img 
                  src={`data:image/png;base64,${form.icon}`}
                  alt={form.name}
                  className="w-8 h-8 rounded object-cover"
                />
              )}
              <span>{form.name || `Form ${index + 1}`}</span>
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
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">基本ステータス</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <StatItem label="体力" value={stats.hp.toLocaleString()} />

        {stats.multihit ? (
          <StatItem
            label={`攻撃力(${stats.attackType === 'area' ? '範囲' : '単体'})`}
            value={stats.ap.toLocaleString()}
            detail={`[${[stats.atk1, stats.atk2, stats.atk3].filter(Boolean).map(x => x?.toLocaleString()).join(' ')}]`}
          />
        ) : (
          <StatItem
            label={`攻撃力(${stats.attackType === 'area' ? '範囲' : '単体'})`}
            value={stats.ap.toLocaleString()}
          />
        )}

        <StatItem
          label="DPS"
          value={stats.dps.toLocaleString()}
          className="text-purple-600 font-medium"
        />
        <StatItem label="射程" value={stats.range.toString()} />
        <StatItem label="KB" value={stats.kb.toString()} />
        <StatItem label="速度" value={stats.speed.toString()} />
        <StatItem label="コスト[円]" value={stats.cost.toLocaleString()} />
        <StatItem
          label="再生産"
          value={`${stats.recharge}s`}
          detail={`(${Math.round(stats.recharge * 30)}f)`}
        />
        <StatItem
          label="攻撃頻度"
          value={`${frameToSecond(stats.freq)}s`}
          detail={`(${stats.freq}f)`}
        />
        <StatItem
          label="攻撃発生"
          value={`${frameToSecond(stats.foreswing)}s`}
          detail={`(${stats.foreswing}f)`}
        />
        <StatItem
          label="攻撃後硬直"
          value={`${frameToSecond(stats.backswing)}s`}
          detail={`(${stats.backswing}f)`}
        />
        <StatItem
          label="攻撃間隔"
          value={`${frameToSecond(stats.tba)}s`}
          detail={`(${stats.tba}f)`}
        />
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  detail,
  className = ""
}: {
  label: string;
  value: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div className="flex justify-between py-1 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <div className="text-right">
        <span className={`text-gray-900 ${className}`}>{value}</span>
        {detail && <div className="text-xs text-gray-500">{detail}</div>}
      </div>
    </div>
  );
}

function AbilitiesList({ abilities }: { abilities: UnitAbility[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">能力・効果</h3>
      <div className="space-y-2">
        {abilities.map((ability, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded">
            <div className="flex justify-between items-start">
              <div className="font-medium text-gray-800">{ability.name}</div>
              {ability.value && (
                <div className="text-sm text-blue-600 font-medium">{ability.value}</div>
              )}
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
      <h3 className="text-lg font-semibold mb-3 text-gray-800">本能・超本能</h3>
      <div className="space-y-2">
        {talents.map((talent, index) => (
          <div key={index} className={`p-3 rounded ${talent.type === 'ultra' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'}`}>
            <div className="flex justify-between items-start">
              <div className={`font-medium ${talent.type === 'ultra' ? 'text-red-600' : 'text-yellow-600'}`}>
                {talent.name} ({talent.id})
                {talent.type === 'ultra' && <span className="text-xs ml-1 px-1 bg-red-100 rounded">超</span>}
              </div>
              {talent.npCost > 0 && (
                <div className="text-sm text-gray-600 font-medium">
                  {talent.isTotal ? '合計' : ''}{talent.npCost}NP
                </div>
              )}
            </div>
            {talent.effect && (
              <div className="text-sm text-gray-700 mt-1">{talent.effect}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnitDisplay;
