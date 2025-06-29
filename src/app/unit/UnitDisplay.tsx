// Common unit display component
'use client';

import React, { useState, useEffect } from 'react';
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
  
  // 攻撃力アップの状態
  const [attackUpEnabled, setAttackUpEnabled] = useState(false);
  
  // ユニットが基本攻撃力アップ(31)、基本体力アップ(32)を持っているかチェック
  const hasBaseAttackUp = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 31);
  const hasBaseHpUp = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 32);

  // 基本攻撃力アップの状態
  const [baseAttackUpEnabled, setBaseAttackUpEnabled] = useState(hasBaseAttackUp);
  const [baseAttackUpValue, setBaseAttackUpValue] = useState(20);
  
  // 攻撃力アップ(10)の状態
  const [talentAttackUpEnabled, setTalentAttackUpEnabled] = useState(false);
  const attackUpTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 10);
  const [talentAttackUpValue, setTalentAttackUpValue] = useState(attackUpTalent?.data[5] || 200);
  
  // ユニットが攻撃間隔短縬(61)を持っているかチェック
  const hasAttackIntervalReduction = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 61);
  
  // 攻撃間隔短縮(61)の状態
  const [attackIntervalReductionEnabled, setAttackIntervalReductionEnabled] = useState(hasAttackIntervalReduction);
  const attackIntervalReductionTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 61);
  const [attackIntervalReductionValue, setAttackIntervalReductionValue] = useState(attackIntervalReductionTalent?.data[3] || 74);
  
  // ユニットが生産コスト割引(25)を持っているかチェック
  const hasCostReduction = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 25);
  
  // 生産コスト割引(25)の状態
  const [costReductionEnabled, setCostReductionEnabled] = useState(hasCostReduction);
  const costReductionTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 25);
  const [costReductionValue, setCostReductionValue] = useState(costReductionTalent ? Math.floor(costReductionTalent.data[3] * 1.5) : 500);
  
  // ユニットが移動速度アップ(27)を持っているかチェック
  const hasMoveSpeedUp = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 27);
  
  // 移動速度アップ(27)の状態
  const [moveSpeedUpEnabled, setMoveSpeedUpEnabled] = useState(hasMoveSpeedUp);
  const moveSpeedUpTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 27);
  const [moveSpeedUpValue, setMoveSpeedUpValue] = useState(moveSpeedUpTalent?.data[3] || 20);
  
  // ユニットが生産スピードアップ(26)を持っているかチェック
  const hasRechargeSpeedUp = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 26);
  
  // 生産スピードアップ(26)の状態
  const [rechargeSpeedUpEnabled, setRechargeSpeedUpEnabled] = useState(hasRechargeSpeedUp);
  const rechargeSpeedUpTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 26);
  const [rechargeSpeedUpValue, setRechargeSpeedUpValue] = useState(rechargeSpeedUpTalent?.data[3] || 30);
  
  // 基本体力アップ(32)の状態
  const [baseHpUpEnabled, setBaseHpUpEnabled] = useState(hasBaseHpUp);
  const [baseHpUpValue, setBaseHpUpValue] = useState(20);
  
  // ユニットがクリティカル(13)を持っているかチェック
  const hasTalentCritical = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 13);
  
  // クリティカル(13)の状態
  const [talentCriticalEnabled, setTalentCriticalEnabled] = useState(hasTalentCritical);
  const talentCriticalTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 13);
  const [talentCriticalValue, setTalentCriticalValue] = useState(talentCriticalTalent?.data[3] || 20);

  // ユニットが変更されたときにフラグを再初期化
  useEffect(() => {
    const talentList = unitData.auxiliaryData.talents.talentList;
    const newHasBaseAttackUp = talentList.some(talent => talent.id === 31);
    const newHasBaseHpUp = talentList.some(talent => talent.id === 32);
    const newAttackUpTalent = talentList.find(talent => talent.id === 10);
    const newAttackIntervalReductionTalent = talentList.find(talent => talent.id === 61);
    const newHasAttackIntervalReduction = talentList.some(talent => talent.id === 61);
    const newCostReductionTalent = talentList.find(talent => talent.id === 25);
    const newHasCostReduction = talentList.some(talent => talent.id === 25);
    const newMoveSpeedUpTalent = talentList.find(talent => talent.id === 27);
    const newHasMoveSpeedUp = talentList.some(talent => talent.id === 27);
    const newRechargeSpeedUpTalent = talentList.find(talent => talent.id === 26);
    const newHasRechargeSpeedUp = talentList.some(talent => talent.id === 26);
    const newTalentCriticalTalent = talentList.find(talent => talent.id === 13);
    const newHasTalentCritical = talentList.some(talent => talent.id === 13);
    
    setBaseAttackUpEnabled(newHasBaseAttackUp);
    setBaseHpUpEnabled(newHasBaseHpUp);
    setTalentAttackUpValue(newAttackUpTalent?.data[5] || 200);
    setAttackIntervalReductionValue(newAttackIntervalReductionTalent?.data[3] || 74);
    setAttackIntervalReductionEnabled(newHasAttackIntervalReduction);
    setCostReductionValue(newCostReductionTalent ? Math.floor(newCostReductionTalent.data[3] * 1.5) : 500);
    setCostReductionEnabled(newHasCostReduction);
    setMoveSpeedUpValue(newMoveSpeedUpTalent?.data[3] || 20);
    setMoveSpeedUpEnabled(newHasMoveSpeedUp);
    setRechargeSpeedUpValue(newRechargeSpeedUpTalent?.data[3] || 30);
    setRechargeSpeedUpEnabled(newHasRechargeSpeedUp);
    setTalentCriticalValue(newTalentCriticalTalent?.data[3] || 20);
    setTalentCriticalEnabled(newHasTalentCritical);
  }, [unitData.unitId, unitData.auxiliaryData.talents.talentList]);

  const validFormCount = getValidFormCount(unitData);
  const actualCurrentForm = Math.min(currentForm, validFormCount - 1);
  
  // 攻撃間隔短縮の倍率を計算（本能を持っている場合かつ第三形態以上のみ適用）
  const attackIntervalReductionMultiplier = (hasAttackIntervalReduction && attackIntervalReductionEnabled && actualCurrentForm >= 2) ? (1 - attackIntervalReductionValue / 100) : 1;
  
  const stats = calculateUnitStats(unitData, actualCurrentForm, level, plusLevel, attackIntervalReductionMultiplier);
  const currentFormData = unitData.coreData.forms[actualCurrentForm];
  
  // 攻撃力アップのパーセンテージを取得（仮の値で初期化）
  const attackUpPercentage = currentFormData.stats[41] || 0;
  
  // 攻撃力アップが適用された統計を計算
  const attackUpMultiplier = attackUpEnabled ? (1 + attackUpPercentage / 100) : 1;
  
  // 基本攻撃力アップのマルチプライヤー（第三形態以上のみ適用）
  const baseAttackUpMultiplier = (baseAttackUpEnabled && actualCurrentForm >= 2) ? (1 + baseAttackUpValue / 100) : 1;
  
  // 攻撃力アップ(10)のマルチプライヤー（第三形態以上のみ適用）
  const talentAttackUpMultiplier = (talentAttackUpEnabled && actualCurrentForm >= 2) ? (1 + talentAttackUpValue / 100) : 1;
  
  // 基本体力アップのマルチプライヤー（第三形態以上のみ適用）
  const baseHpUpMultiplier = (baseHpUpEnabled && actualCurrentForm >= 2) ? (1 + baseHpUpValue / 100) : 1;
  
  // 総合的な攻撃力マルチプライヤー
  const totalAttackMultiplier = attackUpMultiplier * baseAttackUpMultiplier * talentAttackUpMultiplier;
  
  // コスト割引の計算（第三形態以上のみ適用）
  const costReduction = (hasCostReduction && costReductionEnabled && actualCurrentForm >= 2) ? costReductionValue : 0;
  const discountedCost = Math.max(0, stats.cost - costReduction);
  
  // 移動速度アップの計算（第三形態以上のみ適用）
  const speedUpBonus = (hasMoveSpeedUp && moveSpeedUpEnabled && actualCurrentForm >= 2) ? moveSpeedUpValue : 0;
  const enhancedSpeed = stats.speed + speedUpBonus;
  
  // 生産スピードアップの計算（第三形態以上のみ適用）
  const rechargeSpeedUpBonus = (hasRechargeSpeedUp && rechargeSpeedUpEnabled && actualCurrentForm >= 2) ? rechargeSpeedUpValue : 0;
  const enhancedRecharge = Math.max(0, stats.recharge - frameToSecond(rechargeSpeedUpBonus));
  
  // クリティカル本能の情報を計算
  const talentCriticalBonus = (hasTalentCritical && talentCriticalEnabled && actualCurrentForm >= 2) ? talentCriticalValue : 0;
  
  const abilities = getAbilities(unitData, actualCurrentForm, level, plusLevel, totalAttackMultiplier, baseHpUpMultiplier, talentCriticalBonus);
  const enhancedStats = {
    ...stats,
    hp: Math.floor(stats.hp * baseHpUpMultiplier),
    ap: Math.floor(stats.ap * totalAttackMultiplier),
    atk1: stats.atk1 ? Math.floor(stats.atk1 * totalAttackMultiplier) : stats.atk1,
    atk2: stats.atk2 ? Math.floor(stats.atk2 * totalAttackMultiplier) : stats.atk2,
    atk3: stats.atk3 ? Math.floor(stats.atk3 * totalAttackMultiplier) : stats.atk3,
    dps: stats.freq > 0 ? Math.round(Math.floor(stats.ap * totalAttackMultiplier) / stats.freq * 30 * 100) / 100 : 0,
    cost: discountedCost,
    speed: enhancedSpeed,
    recharge: enhancedRecharge
  };

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
      <StatsTable stats={enhancedStats} attackUpEnabled={totalAttackMultiplier > 1} hpUpEnabled={baseHpUpMultiplier > 1} attackIntervalReductionEnabled={attackIntervalReductionEnabled && actualCurrentForm >= 2} costReductionEnabled={costReductionEnabled && actualCurrentForm >= 2} moveSpeedUpEnabled={moveSpeedUpEnabled && actualCurrentForm >= 2} rechargeSpeedUpEnabled={rechargeSpeedUpEnabled && actualCurrentForm >= 2} />

      {/* Abilities */}
      {abilities.length > 0 && <AbilitiesList abilities={abilities} attackUpEnabled={attackUpEnabled} setAttackUpEnabled={setAttackUpEnabled} attackUpMultiplier={totalAttackMultiplier} hpUpMultiplier={baseHpUpMultiplier} />}

      {/* Talents */}
      {unitData.auxiliaryData.talents.hasTalents && actualCurrentForm >= 2 && (
        <TalentsList 
          talents={unitData.auxiliaryData.talents.talentList} 
          baseAttackUpEnabled={baseAttackUpEnabled}
          setBaseAttackUpEnabled={setBaseAttackUpEnabled}
          baseAttackUpValue={baseAttackUpValue}
          setBaseAttackUpValue={setBaseAttackUpValue}
          talentAttackUpEnabled={talentAttackUpEnabled}
          setTalentAttackUpEnabled={setTalentAttackUpEnabled}
          talentAttackUpValue={talentAttackUpValue}
          setTalentAttackUpValue={setTalentAttackUpValue}
          baseHpUpEnabled={baseHpUpEnabled}
          setBaseHpUpEnabled={setBaseHpUpEnabled}
          baseHpUpValue={baseHpUpValue}
          setBaseHpUpValue={setBaseHpUpValue}
          attackIntervalReductionEnabled={attackIntervalReductionEnabled}
          setAttackIntervalReductionEnabled={setAttackIntervalReductionEnabled}
          attackIntervalReductionValue={attackIntervalReductionValue}
          setAttackIntervalReductionValue={setAttackIntervalReductionValue}
          costReductionEnabled={costReductionEnabled}
          setCostReductionEnabled={setCostReductionEnabled}
          costReductionValue={costReductionValue}
          setCostReductionValue={setCostReductionValue}
          moveSpeedUpEnabled={moveSpeedUpEnabled}
          setMoveSpeedUpEnabled={setMoveSpeedUpEnabled}
          moveSpeedUpValue={moveSpeedUpValue}
          setMoveSpeedUpValue={setMoveSpeedUpValue}
          rechargeSpeedUpEnabled={rechargeSpeedUpEnabled}
          setRechargeSpeedUpEnabled={setRechargeSpeedUpEnabled}
          rechargeSpeedUpValue={rechargeSpeedUpValue}
          setRechargeSpeedUpValue={setRechargeSpeedUpValue}
          talentCriticalEnabled={talentCriticalEnabled}
          setTalentCriticalEnabled={setTalentCriticalEnabled}
          talentCriticalValue={talentCriticalValue}
          setTalentCriticalValue={setTalentCriticalValue}
        />
      )}
    </div>
  );
}

function StatsTable({ stats, attackUpEnabled, hpUpEnabled, attackIntervalReductionEnabled, costReductionEnabled, moveSpeedUpEnabled, rechargeSpeedUpEnabled }: { stats: CalculatedStats, attackUpEnabled: boolean, hpUpEnabled: boolean, attackIntervalReductionEnabled: boolean, costReductionEnabled: boolean, moveSpeedUpEnabled: boolean, rechargeSpeedUpEnabled: boolean }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">基本ステータス</h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
        <StatItem label="体力" value={<b className={hpUpEnabled ? "text-blue-500" : "text-gray-500"}>{stats.hp.toLocaleString()}</b>} labelClassName="text-blue-500" />

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
                <b className={attackUpEnabled ? "text-red-500" : "text-gray-500"}>{stats.ap.toLocaleString()}</b>
                <br />
                <small className={attackUpEnabled ? "text-red-500" : ""}>{`${[stats.atk1, stats.atk2, stats.atk3].filter(Boolean).map(x => x?.toLocaleString()).join(' / ')}`}</small>
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
            value={<b className={attackUpEnabled ? "text-red-500" : "text-gray-500"}>{stats.ap.toLocaleString()}</b>}
            labelClassName="text-red-500"
          />
        )}

        <StatItem
          label="DPS"
          value={Math.round(stats.dps).toLocaleString()}
          labelClassName="text-fuchsia-600"
          className={(attackUpEnabled || attackIntervalReductionEnabled) ? "text-red-500 font-bold" : "text-fuchsia-600 font-bold"}
        />
        <StatItem label="射程" value={<b className="text-gray-500">{stats.range.toString()}</b>} />
        <StatItem label="KB" value={<b className="text-gray-500">{stats.kb.toString()}</b>} />
        <StatItem label="速度" value={<b className={moveSpeedUpEnabled ? "text-green-500" : "text-gray-500"}>{stats.speed.toString()}</b>} />
        <StatItem label="コスト" value={<b className={costReductionEnabled ? "text-green-500" : "text-gray-500"}>{stats.cost.toLocaleString()}</b>} />
        <StatItem
          label="再生産"
          value={<span className={rechargeSpeedUpEnabled ? "text-green-500" : "text-gray-500"}><small className="text-gray-400">({Math.round(stats.recharge * 30).toLocaleString()}f)</small> <b>{stats.recharge.toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃発生"
          value={<span className="text-gray-500"><small className="text-gray-400">({stats.foreswing.toLocaleString()}f)</small> <b>{frameToSecond(stats.foreswing).toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃間隔"
          value={<span className={attackIntervalReductionEnabled ? "text-purple-500" : "text-gray-500"}><small className="text-gray-400">({stats.tba.toLocaleString()}f)</small> <b>{frameToSecond(stats.tba).toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃後硬直"
          value={<span className="text-gray-500"><small className="text-gray-400">({stats.backswing.toLocaleString()}f)</small> <b>{frameToSecond(stats.backswing).toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃頻度"
          value={<span className={attackIntervalReductionEnabled ? "text-purple-500" : "text-gray-500"}><small className="text-gray-400">({stats.freq.toLocaleString()}f)</small> <b>{frameToSecond(stats.freq).toFixed(2)}s</b><br /></span>}
          detail={<small>[ {stats.frames.join(' ')} ]</small>}
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

function DynamicSuperDamage({ ability, attackUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number }) {
  const [multiplier, setMultiplier] = useState(4);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (mult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.floor(stats.atk1 * attackUpMultiplier * mult) : 0;
      const hit2 = stats.atk2 ? Math.floor(stats.atk2 * attackUpMultiplier * mult) : 0;
      const hit3 = stats.atk3 ? Math.floor(stats.atk3 * attackUpMultiplier * mult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : '';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      return values.join(' / ');
    } else {
      const damage = Math.floor(stats.ap * attackUpMultiplier * mult);
      const isEnhanced = attackUpMultiplier > 1;
      return `<span ${isEnhanced ? 'style="color: red;"' : ''}>${damage.toLocaleString()}</span>`;
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
          />倍 </small></span><small className="text-gray-400">(3~4)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <b className="text-gray-500" dangerouslySetInnerHTML={{ __html: calculateDamage(multiplier) }}></b>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicExtremeDamage({ ability, attackUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number }) {
  const [multiplier, setMultiplier] = useState(6);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (mult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.floor(stats.atk1 * attackUpMultiplier * mult) : 0;
      const hit2 = stats.atk2 ? Math.floor(stats.atk2 * attackUpMultiplier * mult) : 0;
      const hit3 = stats.atk3 ? Math.floor(stats.atk3 * attackUpMultiplier * mult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : '';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      return values.join(' / ');
    } else {
      const damage = Math.floor(stats.ap * attackUpMultiplier * mult);
      const isEnhanced = attackUpMultiplier > 1;
      return `<span ${isEnhanced ? 'style="color: red;"' : ''}>${damage.toLocaleString()}</span>`;
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
          />倍 </small></span><small className="text-gray-400">(5~6)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <b className="text-gray-500" dangerouslySetInnerHTML={{ __html: calculateDamage(multiplier) }}></b>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicToughness({ ability, hpUpMultiplier }: { ability: UnitAbility, hpUpMultiplier: number }) {
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
          />倍 </small></span><small className="text-gray-400">(0.25~0.2)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <span className='text-blue-500'><small><b>体力(換算値)</b></small></span> <b className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{calculateEquivalentHP(damageMultiplier)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicSuperToughness({ ability, hpUpMultiplier }: { ability: UnitAbility, hpUpMultiplier: number }) {
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
          />倍 </small></span><small className="text-gray-400">(0.167~0.143)</small>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <small className="text-blue-500"><b>体力(換算値)</b></small> <b className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{calculateEquivalentHP(damageMultiplier)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicMighty({ ability, attackUpMultiplier, hpUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number, hpUpMultiplier: number }) {
  const [apMultiplier, setApMultiplier] = useState(1.8);
  const [dmgMultiplier, setDmgMultiplier] = useState(0.4);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (apMult: number, dmgMult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.floor(stats.atk1 * attackUpMultiplier * apMult) : 0;
      const hit2 = stats.atk2 ? Math.floor(stats.atk2 * attackUpMultiplier * apMult) : 0;
      const hit3 = stats.atk3 ? Math.floor(stats.atk3 * attackUpMultiplier * apMult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : '';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      const apDisplay = values.join(' ');
      
      // HP相当計算（statsは既にhpUpMultiplierが適用済みのenhancedStats）
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span dangerouslySetInnerHTML={{ __html: apDisplay }}></span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : ""}>{equivalentHP.toLocaleString()}</span>
        </>
      );
    } else {
      const damage = Math.floor(stats.ap * attackUpMultiplier * apMult);
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span className={isEnhanced ? "text-red-500" : ""}>{damage.toLocaleString()}</span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : ""}>{equivalentHP.toLocaleString()}</span>
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
            <b>{calculateDamage(apMultiplier, dmgMultiplier)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function AbilitiesList({ abilities, attackUpEnabled, setAttackUpEnabled, attackUpMultiplier, hpUpMultiplier }: { 
  abilities: UnitAbility[], 
  attackUpEnabled: boolean, 
  setAttackUpEnabled: (enabled: boolean) => void,
  attackUpMultiplier: number,
  hpUpMultiplier: number
}) {
  return (
    <div className="mb-4">
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">能力・効果</h3>
      <div className="space-y-0.5">
        {abilities.map((ability, index) => (
          ability.isDynamic && ability.name === "超ダメージ" ? (
            <DynamicSuperDamage key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} />
          ) : ability.isDynamic && ability.name === "極ダメージ" ? (
            <DynamicExtremeDamage key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} />
          ) : ability.isDynamic && ability.name === "打たれ強い" ? (
            <DynamicToughness key={index} ability={ability} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "超打たれ強い" ? (
            <DynamicSuperToughness key={index} ability={ability} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "めっぽう強い" ? (
            <DynamicMighty key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
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
                  ) : (typeof ability.name === 'string' && ability.name.includes('クリティカル') && ability.iconKeys) ? (
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
                  ) : (typeof ability.name === 'string' && ability.name.includes('動きを止める') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityFreeze}`}
                        alt="動きを止める"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(Lv\d+|\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(Lv\d+|\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <input
                        type="checkbox"
                        checked={attackUpEnabled}
                        onChange={(e) => setAttackUpEnabled(e.target.checked)}
                        className="mr-1 align-middle"
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
                  ) : (typeof ability.name === 'string' && ability.name.includes('撃破時お金アップ') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityExtraMoney}`}
                        alt="撃破時お金アップ"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+倍)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(Lv\d+|\d+%)/g, '<small>$1</small>')
                      }} />
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
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(Lv\d+|\d+%)/g, '<small>$1</small>')
                      }} />
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
                  ) : (typeof ability.name === 'string' && ability.name.includes('バリアブレイカー') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityBarrierBreaker}`}
                        alt="バリアブレイカー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+%)/g, '<small>$1</small>')
                      }} />
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
                  ) : (typeof ability.name === 'string' && ability.name.includes('シールドブレイカー') && ability.iconKeys) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityShieldPiercing}`}
                        alt="シールドブレイカー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      <span dangerouslySetInnerHTML={{
                        __html: ability.name.replace(/(\d+%)/g, '<small>$1</small>')
                      }} />
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
                  ) : ability.name === 'メタルキラー' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityMetalKiller}`}
                        alt="メタルキラー"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      メタルキラー
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
                  ) : ability.name === '攻撃無効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityDodgeAttack}`}
                        alt="攻撃無効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      攻撃無効
                    </>
                  ) : ability.name === '遠方攻撃' && ability.iconKeys ? (
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
                  ) : ability.name === '渾身の一撃' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityBerserk}`}
                        alt="渾身の一撃"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      渾身の一撃
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
                  ) : ability.name === 'クリティカル' && ability.value ? (
                    <div className={`font-medium break-words ${ability.enhanced ? 'text-orange-500' : 'text-gray-600'}`}>
                      {ability.value}
                    </div>
                  ) : ability.value ? (
                    <div className="text-gray-600 font-medium break-words">
                      {(ability.name === '多段攻撃' || ability.name === '攻撃無効' || ability.name === '動きを止める' || ability.name === '動きを遅くする' || ability.name === 'ふっとばす' || ability.name === '攻撃力ダウン' || ability.name === '撃破時お金アップ' || ability.name === 'バリアブレイカー' || ability.name === 'シールドブレイカー' || ability.name === '遠方攻撃' || ability.name === '全方位攻撃' || ability.name === '波動攻撃' || ability.name === '小波動' || ability.name === '裂波攻撃' || ability.name === '小裂波' || ability.name === '攻撃力アップ' || ability.name === '生き残る' || (typeof ability.value === 'string' && ability.value.includes('s(') && ability.value.includes('f)'))) && typeof ability.value === 'string' ? (
                        <span dangerouslySetInnerHTML={{
                          __html: (() => {
                            let text = ability.value;
                            // フレーム数を先にプレースホルダーで置換
                            const frameMatches: string[] = [];
                            text = text.replace(/\((\d+)f\)~/g, (match, frames) => {
                              const replacement = `<small class="text-gray-400"> (${frames}f)</small> ~ `;
                              frameMatches.push(replacement);
                              return `___FRAME_PLACEHOLDER_${frameMatches.length - 1}___`;
                            });
                            text = text.replace(/\((\d+)f\)/g, (match, frames) => {
                              const replacement = `<small class="text-gray-400"> (${frames}f)</small>`;
                              frameMatches.push(replacement);
                              return `___FRAME_PLACEHOLDER_${frameMatches.length - 1}___`;
                            });
                            
                            // 他の数字のスタイリング（プレースホルダーを避ける）
                            text = text
                              .replace(/Lv(\d+)/g, '<b>Lv$1</b>')
                              // 攻撃力アップの場合は体力のみ青字
                              .replace(/体力≦(\d+)%/g, (match, number) => {
                                if (ability.name === '攻撃力アップ') {
                                  return `<small class="text-blue-500"><b>体力</b></small><small><b>≦</b></small><b>${number}</b><small><b>%</b></small>`;
                                }
                                return `<small class="text-blue-500"><b>体力≦</b></small><b class="text-blue-500">${number}</b><small class="text-blue-500"><b>%</b></small>`;
                              })
                              .replace(/(\d+)%/g, '<b>$1</b><small><b>%</b></small>')
                              .replace(/(\d+\.?\d*)s/g, '<b>$1s</b>')
                              .replace(/(\d+)倍/g, '<b>$1</b><small><b>倍</b></small>')
                              .replace(/(\d+)~(\d+)/g, '<b>$1</b>~<b>$2</b>')
                              .replace(/(?!___FRAME_PLACEHOLDER_)(?![^<]*>)(\d+\.?\d*)(?!___)/g, '<b>$1</b>')
                              .replace(/敵攻撃力/g, '<small class="text-red-500"><b>敵攻撃力</b></small>')
                              .replace(/攻撃力\+/g, '<small class="text-red-500"><b>攻撃力</b></small><b>+</b>');
                            
                            // プレースホルダーを元に戻す
                            frameMatches.forEach((replacement, index) => {
                              text = text.replace(`___FRAME_PLACEHOLDER_${index}___`, replacement);
                            });
                            
                            return text;
                          })()
                        }} />
                      ) : (typeof ability.value === 'string' && ability.value.includes('敵攻撃力')) ? (
                        <span dangerouslySetInnerHTML={{
                          __html: ability.value.replace(/敵攻撃力/g, '<small>敵攻撃力</small>')
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

function TalentsList({ 
  talents, 
  baseAttackUpEnabled, 
  setBaseAttackUpEnabled, 
  baseAttackUpValue, 
  setBaseAttackUpValue,
  talentAttackUpEnabled,
  setTalentAttackUpEnabled,
  talentAttackUpValue,
  setTalentAttackUpValue,
  baseHpUpEnabled,
  setBaseHpUpEnabled,
  baseHpUpValue,
  setBaseHpUpValue,
  attackIntervalReductionEnabled,
  setAttackIntervalReductionEnabled,
  attackIntervalReductionValue,
  setAttackIntervalReductionValue,
  costReductionEnabled,
  setCostReductionEnabled,
  costReductionValue,
  setCostReductionValue,
  moveSpeedUpEnabled,
  setMoveSpeedUpEnabled,
  moveSpeedUpValue,
  setMoveSpeedUpValue,
  rechargeSpeedUpEnabled,
  setRechargeSpeedUpEnabled,
  rechargeSpeedUpValue,
  setRechargeSpeedUpValue,
  talentCriticalEnabled,
  setTalentCriticalEnabled,
  talentCriticalValue,
  setTalentCriticalValue
}: { 
  talents: readonly UnitTalent[];
  baseAttackUpEnabled: boolean;
  setBaseAttackUpEnabled: (enabled: boolean) => void;
  baseAttackUpValue: number;
  setBaseAttackUpValue: (value: number) => void;
  talentAttackUpEnabled: boolean;
  setTalentAttackUpEnabled: (enabled: boolean) => void;
  talentAttackUpValue: number;
  setTalentAttackUpValue: (value: number) => void;
  baseHpUpEnabled: boolean;
  setBaseHpUpEnabled: (enabled: boolean) => void;
  baseHpUpValue: number;
  setBaseHpUpValue: (value: number) => void;
  attackIntervalReductionEnabled: boolean;
  setAttackIntervalReductionEnabled: (enabled: boolean) => void;
  attackIntervalReductionValue: number;
  setAttackIntervalReductionValue: (value: number) => void;
  costReductionEnabled: boolean;
  setCostReductionEnabled: (enabled: boolean) => void;
  costReductionValue: number;
  setCostReductionValue: (value: number) => void;
  moveSpeedUpEnabled: boolean;
  setMoveSpeedUpEnabled: (enabled: boolean) => void;
  moveSpeedUpValue: number;
  setMoveSpeedUpValue: (value: number) => void;
  rechargeSpeedUpEnabled: boolean;
  setRechargeSpeedUpEnabled: (enabled: boolean) => void;
  rechargeSpeedUpValue: number;
  setRechargeSpeedUpValue: (value: number) => void;
  talentCriticalEnabled: boolean;
  setTalentCriticalEnabled: (enabled: boolean) => void;
  talentCriticalValue: number;
  setTalentCriticalValue: (value: number) => void;
}) {
  if (talents.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">本能・超本能</h3>
      <div className="space-y-0.5">
        {talents.map((talent, index) => (
          <div key={index} className={`p-2 rounded ${talent.type === 'ultra' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'}`}>
            <div className="flex justify-between items-center gap-2">
              <div className={`font-bold text-xs ${talent.type === 'ultra' ? 'text-red-600' : 'text-yellow-600'}`}>
                {talent.id === 67 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityExplosion}`}
                      alt="爆波攻撃"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 62 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityMiniWave}`}
                      alt="小波動"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 1 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityWeaken}`}
                      alt="攻撃力ダウン"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 2 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityFreeze}`}
                      alt="動きを止める"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 3 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilitySlow}`}
                      alt="動きを遅くする"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 8 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityKnockback}`}
                      alt="ふっとばす"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 11 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilitySurvive}`}
                      alt="生き残る"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 13 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityCritical}`}
                      alt="クリティカル"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={talentCriticalEnabled}
                      onChange={(e) => setTalentCriticalEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 17 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityWave}`}
                      alt="波動攻撃"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 15 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityBarrierBreaker}`}
                      alt="バリアブレイカー"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 20 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistSlow}`}
                      alt="動きを遅くする耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 19 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistFreeze}`}
                      alt="動きを止める耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 21 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistKnockback}`}
                      alt="ふっとばし耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 22 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistWave}`}
                      alt="波動ダメージ耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 32 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityDefenseBuff}`}
                      alt="基本体力アップ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={baseHpUpEnabled}
                      onChange={(e) => setBaseHpUpEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 31 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityAttackBuff}`}
                      alt="基本攻撃力アップ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={baseAttackUpEnabled}
                      onChange={(e) => setBaseAttackUpEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 48 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneWave}`}
                      alt="波動ダメージ無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 29 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneCurse}`}
                      alt="古代の呪い無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 53 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneToxic}`}
                      alt="毒撃ダメージ無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 54 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistSurge}`}
                      alt="裂波ダメージ耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 66 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilitySage}`}
                      alt="超賢者特効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 65 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityMiniSurge}`}
                      alt="小裂波"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 25 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityCostDown}`}
                      alt="生産コスト割引"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={costReductionEnabled}
                      onChange={(e) => setCostReductionEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 30 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistCurse}`}
                      alt="古代の呪い耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 26 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityRecoverSpeedUp}`}
                      alt="生産スピードアップ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={rechargeSpeedUpEnabled}
                      onChange={(e) => setRechargeSpeedUpEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 27 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityMoveSpeedUp}`}
                      alt="移動速度アップ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={moveSpeedUpEnabled}
                      onChange={(e) => setMoveSpeedUpEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 56 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilitySurge}`}
                      alt="裂波攻撃"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 51 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityDodgeAttack}`}
                      alt="攻撃無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 47 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneKnockback}`}
                      alt="ふっとばし無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 18 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistWeaken}`}
                      alt="攻撃力ダウン耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 14 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityZombieKiller}`}
                      alt="ゾンビキラー"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 44 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneWeaken}`}
                      alt="攻撃力ダウン無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 10 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityStrengthen}`}
                      alt="攻撃力アップ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={talentAttackUpEnabled}
                      onChange={(e) => setTalentAttackUpEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 52 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistToxic}`}
                      alt="毒撃ダメージ耐性"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 55 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneSurge}`}
                      alt="裂波ダメージ無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 49 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneWarp}`}
                      alt="ワープ無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 45 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneFreeze}`}
                      alt="動きを止める無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 46 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityImmuneSlow}`}
                      alt="動きを遅くする無効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 59 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilitySoulStrike}`}
                      alt="魂攻撃"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 63 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityCollossus}`}
                      alt="超生命体特効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 58 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityShieldPiercing}`}
                      alt="シールドブレイカー"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 60 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityCurse}`}
                      alt="呪い"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 64 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityBehemoth}`}
                      alt="超獣特効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 61 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityAttackFrequencyUp}`}
                      alt="攻撃間隔短縮"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    <input
                      type="checkbox"
                      checked={attackIntervalReductionEnabled}
                      onChange={(e) => setAttackIntervalReductionEnabled(e.target.checked)}
                      className="mr-1 align-middle"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 50 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityBerserk}`}
                      alt="渾身の一撃"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 5 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityStrongAgainst}`}
                      alt="めっぽう強い"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 6 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityResistant}`}
                      alt="打たれ強い"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : talent.id === 16 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityExtraMoney}`}
                      alt="撃破時お金アップ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                  </>
                ) : (
                  <>
                    {talent.name} ({talent.id})
                  </>
                )}
                {talent.npCost > 0 && (
                  <span className="text-[10px] text-gray-600 font-medium ml-1">
                    [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                  </span>
                )}
              </div>
              {talent.data && (
                <div className="text-gray-700 text-right break-words flex-shrink-0 max-w-[50%]">
                  {/* 基本体力アップ(32)の場合はテキストボックスを表示 */}
                  {talent.id === 32 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b>+</b>
                        <input
                          type="number"
                          value={baseHpUpValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 20) {
                              setBaseHpUpValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min="0"
                          max="20"
                          step="2"
                        />
                        <small><b>%</b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}> (0-20)</small>
                      </div>
                    </div>
                  ) : /* 基本攻撃力アップ(31)の場合はテキストボックスを表示 */
                  talent.id === 31 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b>+</b>
                        <input
                          type="number"
                          value={baseAttackUpValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 && value <= 20) {
                              setBaseAttackUpValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min="0"
                          max="20"
                          step="2"
                        />
                        <small><b>%</b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}> (0-20)</small>
                      </div>
                    </div>
                  ) : /* 攻撃力アップ(10)の場合はテキストボックスを表示 */
                  talent.id === 10 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <small className="text-blue-500"><b>体力</b></small><small><b>≦</b></small><b>{100 - (talent.data[2])}</b><small><b>% </b></small>
                        <small className="text-red-500"><b>攻撃力</b></small><b>+</b>
                        <input
                          type="number"
                          value={talentAttackUpValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            const minValue = talent.data[4];
                            const maxValue = talent.data[5];
                            if (value >= minValue && value <= maxValue) {
                              setTalentAttackUpValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[4]}
                          max={talent.data[5]}
                          step={(talent.data[5]-talent.data[4])/(talent.data[1]-1)}
                        />
                        <small><b>%</b></small>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <small className="text-gray-400" style={{fontSize: '10px'}}>({talent.data[4]}~{talent.data[5]})</small>
                      </div>
                    </div>
                  ) : /* 攻撃間隔短縮(61)の場合はテキストボックスを表示 */
                  talent.id === 61 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <small className="text-purple-500"><b>攻撃間隔</b></small><b>-</b>
                        <input
                          type="number"
                          value={attackIntervalReductionValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            const minValue = talent.data[2];
                            const maxValue = talent.data[3];
                            if (value >= minValue && value <= maxValue) {
                              setAttackIntervalReductionValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={(talent.data[3]-talent.data[2])/(talent.data[1]-1)}
                        />
                        <small><b>%</b></small>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <small className="text-gray-400" style={{fontSize: '10px'}}>({talent.data[2]}~{talent.data[3]})</small>
                      </div>
                    </div>
                  ) : talent.id === 25 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b>-</b>
                        <input
                          type="number"
                          value={costReductionValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            const minValue = Math.floor(talent.data[2] * 1.5);
                            const maxValue = Math.floor(talent.data[3] * 1.5);
                            if (value >= minValue && value <= maxValue) {
                              setCostReductionValue(value);
                            }
                          }}
                          className="w-10 px-1 text-center border border-gray-300 rounded text-xs"
                          min={Math.floor(talent.data[2] * 1.5)}
                          max={Math.floor(talent.data[3] * 1.5)}
                          step={Math.floor((talent.data[3] - talent.data[2]) * 1.5 / (talent.data[1] - 1))}
                        />
                        <small className="text-gray-400" style={{fontSize: '10px'}}> ({Math.floor(talent.data[2] * 1.5)}~{Math.floor(talent.data[3] * 1.5)})</small>
                      </div>
                    </div>
                  ) : /* 生産スピードアップ(26)の場合はテキストボックスを表示 */
                  talent.id === 26 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b>-</b>
                        <input
                          type="number"
                          value={rechargeSpeedUpValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            const minValue = talent.data[2];
                            const maxValue = talent.data[3];
                            if (value >= minValue && value <= maxValue) {
                              setRechargeSpeedUpValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={(talent.data[3]-talent.data[2])/(talent.data[1]-1)}
                        />
                        <small><b> f</b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}> ({talent.data[2]}~{talent.data[3]})</small>
                      </div>
                    </div>
                  ) : /* 移動速度アップ(27)の場合はテキストボックスを表示 */
                  talent.id === 27 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b>+</b>
                        <input
                          type="number"
                          value={moveSpeedUpValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            const minValue = talent.data[2];
                            const maxValue = talent.data[3];
                            if (value >= minValue && value <= maxValue) {
                              setMoveSpeedUpValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={(talent.data[3]-talent.data[2])/(talent.data[1]-1)}
                        />
                        <small className="text-gray-400" style={{fontSize: '10px'}}> ({talent.data[2]}~{talent.data[3]})</small>
                      </div>
                    </div>
                  ) : /* クリティカル(13)の場合はテキストボックスを表示 */
                  talent.id === 13 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b>+</b>
                        <input
                          type="number"
                          value={talentCriticalValue}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            const minValue = talent.data[2];
                            const maxValue = talent.data[3];
                            if (value >= minValue && value <= maxValue) {
                              setTalentCriticalValue(value);
                            }
                          }}
                          className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={(talent.data[3]-talent.data[2])/(talent.data[1]-1)}
                        />
                        <small><b>% </b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}>({talent.data[2]}~{talent.data[3]})</small>
                      </div>
                    </div>
                  ) : /* 属性追加の本能の場合はアイコンを表示 */
                  (talent.id >= 33 && talent.id <= 43) || talent.id === 57 ? (
                    <div className="flex justify-end">
                      <Image
                        src={`data:image/png;base64,${icons[
                          talent.id === 33 ? 'traitRed' :
                          talent.id === 34 ? 'traitFloating' :
                          talent.id === 35 ? 'traitBlack' :
                          talent.id === 36 ? 'traitMetal' :
                          talent.id === 37 ? 'traitAngel' :
                          talent.id === 38 ? 'traitNone' :
                          talent.id === 39 ? 'traitZombie' :
                          talent.id === 40 ? 'traitRelic' :
                          talent.id === 41 ? 'traitNone' :
                          talent.id === 43 ? 'traitNone' :
                          talent.id === 57 ? 'traitAku' : 'traitNone'
                        ] as keyof typeof icons}`}
                        alt={talent.name}
                        width={20}
                        height={20}
                        className="rounded"
                      />
                    </div>
                  ) : (
                    (() => {
                      const talentEffect = calculateTalentEffect(talent);
                      if (typeof talentEffect === 'string' && talentEffect.includes('s(') && talentEffect.includes('f)')) {
                        return (
                          <span dangerouslySetInnerHTML={{
                            __html: talentEffect
                              .replace(/(\d+)%/g, '<b>$1</b><small><b>%</b></small>')
                              .replace(/(\d+\.?\d*)s/g, '<b>$1s</b>')
                              .replace(/\((\d+)f\)/g, '<small>($1f)</small>')
                          }} />
                        );
                      }
                      return talentEffect;
                    })()
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnitDisplay;
