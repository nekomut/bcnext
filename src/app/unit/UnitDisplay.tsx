// Common unit display component
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UnitData, CalculatedStats, UnitAbility, UnitTalent, calculateUnitStats, getAbilities, frameToSecond, getValidFormCount, calculateTalentEffect } from './types';
import { icons } from '@/data/icons';
import IconManager from './IconManager';

interface UnitDisplayProps {
  unitData: UnitData;
  formId?: number;
  level?: number;
  plusLevel?: number;
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
  initialFormId,
  className = "",
  onParamsChange
}: UnitDisplayProps) {
  // 最終形態を自動選択するロジック
  const validFormCount = getValidFormCount(unitData);
  const defaultFormId = initialFormId !== undefined ? initialFormId : Math.max(0, validFormCount - 1);
  
  const [level, setLevel] = useState(initialLevel);
  const [plusLevel, setPlusLevel] = useState(initialPlusLevel);
  const [currentForm, setCurrentForm] = useState(defaultFormId);
  
  // アイコン管理用の状態
  const [formIcons, setFormIcons] = useState<string[]>([]);
  const [iconsLoading, setIconsLoading] = useState(true);
  
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

  // ユニットが動きを止める(2)を持っているかチェック
  const hasTalentFreeze = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 2);
  
  // 動きを止める(2)の状態
  const [talentFreezeEnabled, setTalentFreezeEnabled] = useState(hasTalentFreeze);
  const talentFreezeTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 2);
  const [talentFreezeChance, setTalentFreezeChance] = useState(talentFreezeTalent?.data[2] || 0);
  const [talentFreezeDuration, setTalentFreezeDuration] = useState(talentFreezeTalent?.data[5] || 0);

  // ユニットが攻撃力ダウン(1)を持っているかチェック
  const hasTalentWeaken = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 1);
  
  // 攻撃力ダウン(1)の状態
  const [talentWeakenEnabled, setTalentWeakenEnabled] = useState(hasTalentWeaken);
  const talentWeakenTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 1);
  const [talentWeakenChance, setTalentWeakenChance] = useState(talentWeakenTalent?.data[2] || 0);
  const [talentWeakenDuration, setTalentWeakenDuration] = useState(talentWeakenTalent?.data[5] || 0);

  // ユニットが動きを遅くする(3)を持っているかチェック
  const hasTalentSlow = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 3);
  
  // 動きを遅くする(3)の状態
  const [talentSlowEnabled, setTalentSlowEnabled] = useState(hasTalentSlow);
  const talentSlowTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 3);
  const [talentSlowChance, setTalentSlowChance] = useState(talentSlowTalent?.data[3] || 0);
  const [talentSlowDuration, setTalentSlowDuration] = useState(talentSlowTalent?.data[5] || 0);

  // ユニットがふっとばす(8)を持っているかチェック
  const hasTalentKnockback = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 8);
  
  // ふっとばす(8)の状態
  const [talentKnockbackEnabled, setTalentKnockbackEnabled] = useState(hasTalentKnockback);
  const talentKnockbackTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 8);
  const [talentKnockbackChance, setTalentKnockbackChance] = useState(talentKnockbackTalent?.data[3] || 0);

  // ユニットがバリアブレイカー(15)を持っているかチェック
  const hasTalentBarrierBreaker = unitData.auxiliaryData.talents.talentList.some(talent => talent.id === 15);
  
  // バリアブレイカー(15)の状態
  const [talentBarrierBreakerEnabled, setTalentBarrierBreakerEnabled] = useState(hasTalentBarrierBreaker);
  const talentBarrierBreakerTalent = unitData.auxiliaryData.talents.talentList.find(talent => talent.id === 15);
  const [talentBarrierBreakerChance, setTalentBarrierBreakerChance] = useState(talentBarrierBreakerTalent?.data[3] || 0);
  
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

  // めっぽう強い(5)の状態
  const [talentMightyApValue, setTalentMightyApValue] = useState(1.8);
  const [talentMightyDmgValue, setTalentMightyDmgValue] = useState(0.4);
  
  // 打たれ強い(6)の状態
  const [talentToughnessValue, setTalentToughnessValue] = useState(0.2);
  
  // 超ダメージ(7)の状態
  const [talentMassiveDamageMultiplier, setTalentMassiveDamageMultiplier] = useState(4);

  // ユニットが変更されたときにフラグを再初期化
  useEffect(() => {
    // 新しいユニットに対して最終形態を自動選択
    const newValidFormCount = getValidFormCount(unitData);
    const newDefaultFormId = initialFormId !== undefined ? initialFormId : Math.max(0, newValidFormCount - 1);
    if (initialFormId === undefined) {
      setCurrentForm(newDefaultFormId);
    }
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
    const newTalentFreezeTalent = talentList.find(talent => talent.id === 2);
    const newHasTalentFreeze = talentList.some(talent => talent.id === 2);
    const newTalentWeakenTalent = talentList.find(talent => talent.id === 1);
    const newHasTalentWeaken = talentList.some(talent => talent.id === 1);
    const newTalentSlowTalent = talentList.find(talent => talent.id === 3);
    const newHasTalentSlow = talentList.some(talent => talent.id === 3);
    const newTalentKnockbackTalent = talentList.find(talent => talent.id === 8);
    const newHasTalentKnockback = talentList.some(talent => talent.id === 8);
    const newTalentBarrierBreakerTalent = talentList.find(talent => talent.id === 15);
    const newHasTalentBarrierBreaker = talentList.some(talent => talent.id === 15);
    
    
    setBaseAttackUpEnabled(newHasBaseAttackUp);
    setBaseHpUpEnabled(newHasBaseHpUp);
    setTalentAttackUpValue(newAttackUpTalent?.data[5] || 200);
    setTalentAttackUpEnabled(false); // 本能の攻撃力アップ(10)をリセット
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
    setTalentFreezeChance(newTalentFreezeTalent?.data[2] || 0);
    setTalentFreezeDuration(newTalentFreezeTalent?.data[5] || 0);
    setTalentFreezeEnabled(newHasTalentFreeze);
    setTalentWeakenChance(newTalentWeakenTalent?.data[2] || 0);
    setTalentWeakenDuration(newTalentWeakenTalent?.data[5] || 0);
    setTalentWeakenEnabled(newHasTalentWeaken);
    setTalentSlowChance(newTalentSlowTalent?.data[3] || 0);
    setTalentSlowDuration(newTalentSlowTalent?.data[5] || 0);
    setTalentSlowEnabled(newHasTalentSlow);
    setTalentKnockbackChance(newTalentKnockbackTalent?.data[3] || 0);
    setTalentKnockbackEnabled(newHasTalentKnockback);
    setTalentBarrierBreakerChance(newTalentBarrierBreakerTalent?.data[3] || 0);
    setTalentBarrierBreakerEnabled(newHasTalentBarrierBreaker);
    setTalentMightyApValue(1.8);
    setTalentMightyDmgValue(0.4);
    setTalentToughnessValue(0.2);
    setTalentMassiveDamageMultiplier(4);
    
    // 能力・効果の攻撃力アップをリセット
    setAttackUpEnabled(false);
  }, [unitData.unitId, unitData.auxiliaryData.talents.talentList, unitData.coreData.forms, initialFormId, unitData]);

  // アイコンを読み込むuseEffect
  useEffect(() => {
    const loadIcons = async () => {
      setIconsLoading(true);
      try {
        const unitIdStr = IconManager.formatUnitId(unitData.unitId);
        const icons = await IconManager.loadUnitIcons(unitIdStr);
        setFormIcons(icons);
      } catch (error) {
        console.error('Failed to load unit icons:', error);
        setFormIcons([]);
      } finally {
        setIconsLoading(false);
      }
    };

    loadIcons();
  }, [unitData.unitId]);

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
  
  // 「動きを止める」の本能によるボーナス値（第三形態以上のみ適用）
  // 加算値が0の場合は効果なしとして扱う
  const actualFreezeChance = (hasTalentFreeze && talentFreezeEnabled && actualCurrentForm >= 2) ? talentFreezeChance : 0;
  const actualFreezeDuration = (hasTalentFreeze && talentFreezeEnabled && actualCurrentForm >= 2) ? talentFreezeDuration : 0;
  const talentFreezeBonus = { 
    chance: actualFreezeChance, 
    duration: actualFreezeDuration 
  };

  // 「攻撃力ダウン」の本能によるボーナス値（第三形態以上のみ適用）
  const actualWeakenChance = (hasTalentWeaken && talentWeakenEnabled && actualCurrentForm >= 2) ? talentWeakenChance : 0;
  const actualWeakenDuration = (hasTalentWeaken && talentWeakenEnabled && actualCurrentForm >= 2) ? talentWeakenDuration : 0;
  const talentWeakenBonus = { 
    chance: actualWeakenChance, 
    duration: actualWeakenDuration 
  };

  // 「動きを遅くする」の本能によるボーナス値（第三形態以上のみ適用）
  const actualSlowChance = (hasTalentSlow && talentSlowEnabled && actualCurrentForm >= 2) ? talentSlowChance : 0;
  const actualSlowDuration = (hasTalentSlow && talentSlowEnabled && actualCurrentForm >= 2) ? talentSlowDuration : 0;
  const talentSlowBonus = { 
    chance: actualSlowChance, 
    duration: actualSlowDuration 
  };

  // 「ふっとばす」の本能によるボーナス値（第三形態以上のみ適用）
  const actualKnockbackChance = (hasTalentKnockback && talentKnockbackEnabled && actualCurrentForm >= 2) ? talentKnockbackChance : 0;
  const talentKnockbackBonus = { 
    chance: actualKnockbackChance 
  };

  // 「バリアブレイカー」の本能によるボーナス値（第三形態以上のみ適用）
  const actualBarrierBreakerChance = (hasTalentBarrierBreaker && talentBarrierBreakerEnabled && actualCurrentForm >= 2) ? talentBarrierBreakerChance : 0;
  const talentBarrierBreakerBonus = { 
    chance: actualBarrierBreakerChance 
  };

  const abilities = getAbilities(unitData, actualCurrentForm, level, plusLevel, totalAttackMultiplier, baseHpUpMultiplier, talentCriticalBonus, talentFreezeBonus, talentWeakenBonus, talentSlowBonus, talentKnockbackBonus, talentBarrierBreakerBonus);
  
  // めっぽう強いのターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合の判定
  const getMightyTargets = () => {
    const mightyAbility = abilities.find(ability => ability.name === 'めっぽう強い');
    if (mightyAbility) {
      // valueがstringの場合とReactNodeの場合を両方対応
      let valueString = '';
      if (typeof mightyAbility.value === 'string') {
        valueString = mightyAbility.value;
      } else if (React.isValidElement(mightyAbility.value)) {
        // React要素の場合、iconKeysを使用して判定
        if (mightyAbility.iconKeys) {
          const hasRelicIcon = mightyAbility.iconKeys.includes('traitRelic');
          const hasAkuIcon = mightyAbility.iconKeys.includes('traitAku');
          const hasOtherTraitIcons = mightyAbility.iconKeys.some(iconKey => 
            iconKey !== 'traitRelic' && iconKey !== 'traitAku' && iconKey !== 'traitBehemoth'
          );
          
          // 古・悪以外の属性が一つでもあれば、テキストボックス表示（false を返す）
          if (hasOtherTraitIcons) {
            return false; // テキストボックス表示
          } else {
            // 古のみ、悪のみ、または古と悪のみの場合はテキストボックス非表示
            return (hasRelicIcon && !hasAkuIcon) || (!hasRelicIcon && hasAkuIcon) || (hasRelicIcon && hasAkuIcon);
          }
        }
        return false;
      }
      
      if (valueString) {
        const hasRelic = valueString.includes('古代種');
        const hasAku = valueString.includes('悪魔');
        const hasOtherTraits = valueString.includes('白い敵') || valueString.includes('赤い敵') || 
                              valueString.includes('黒い敵') || valueString.includes('メタル') || 
                              valueString.includes('天使') || valueString.includes('エイリアン') || 
                              valueString.includes('ゾンビ') || 
                              valueString.includes('浮いてる敵');
        
        // 古・悪以外の属性が一つでもあれば、テキストボックス表示（false を返す）
        if (hasOtherTraits) {
          return false; // テキストボックス表示
        } else {
          // 古のみ、悪のみ、または古と悪のみの場合はテキストボックス非表示
          return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
        }
      }
      return false;
    }
    return false;
  };
  const hasOnlyRelicAkuTalent = getMightyTargets();
  
  // 打たれ強いのターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合の判定
  const getToughTargets = () => {
    const toughAbility = abilities.find(ability => ability.name === '打たれ強い' || ability.name === '超打たれ強い');
    if (toughAbility) {
      // valueがstringの場合とReactNodeの場合を両方対応
      let valueString = '';
      if (typeof toughAbility.value === 'string') {
        valueString = toughAbility.value;
      } else if (React.isValidElement(toughAbility.value)) {
        // React要素の場合、iconKeysを使用して判定
        if (toughAbility.iconKeys) {
          const hasRelicIcon = toughAbility.iconKeys.includes('traitRelic');
          const hasAkuIcon = toughAbility.iconKeys.includes('traitAku');
          const hasOtherTraitIcons = toughAbility.iconKeys.some(iconKey => 
            iconKey !== 'traitRelic' && iconKey !== 'traitAku' && iconKey !== 'traitBehemoth'
          );
          
          // 古のみ、悪のみ、または古と悪のみの場合のみtrue
          if (!hasOtherTraitIcons) {
            return (hasRelicIcon && !hasAkuIcon) || (!hasRelicIcon && hasAkuIcon) || (hasRelicIcon && hasAkuIcon);
          }
        }
        return false;
      }
      
      if (valueString) {
        const hasRelic = valueString.includes('古代種');
        const hasAku = valueString.includes('悪魔');
        const hasOtherTraits = valueString.includes('白い敵') || valueString.includes('赤い敵') || 
                              valueString.includes('黒い敵') || valueString.includes('メタル') || 
                              valueString.includes('天使') || valueString.includes('エイリアン') || 
                              valueString.includes('ゾンビ') || 
                              valueString.includes('浮いてる敵');
        
        // 古のみ、悪のみ、または古と悪のみの場合のみtrue
        if (!hasOtherTraits) {
          return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
        }
      }
      return false;
    }
    return false;
  };
  const hasOnlyRelicAkuTough = getToughTargets();
  
  // 超ダメージのターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合の判定
  const getMassiveDamageTargets = () => {
    const massiveDamageAbility = abilities.find(ability => ability.name === '超ダメージ');
    if (massiveDamageAbility) {
      // valueがstringの場合とReactNodeの場合を両方対応
      let valueString = '';
      if (typeof massiveDamageAbility.value === 'string') {
        valueString = massiveDamageAbility.value;
      } else if (React.isValidElement(massiveDamageAbility.value)) {
        // React要素の場合、iconKeysを使用して判定
        if (massiveDamageAbility.iconKeys) {
          const hasRelicIcon = massiveDamageAbility.iconKeys.includes('traitRelic');
          const hasAkuIcon = massiveDamageAbility.iconKeys.includes('traitAku');
          const hasOtherTraitIcons = massiveDamageAbility.iconKeys.some(iconKey => 
            iconKey !== 'traitRelic' && iconKey !== 'traitAku' && iconKey !== 'traitBehemoth'
          );
          
          // 古のみ、悪のみ、または古と悪のみの場合のみtrue
          if (!hasOtherTraitIcons) {
            return (hasRelicIcon && !hasAkuIcon) || (!hasRelicIcon && hasAkuIcon) || (hasRelicIcon && hasAkuIcon);
          }
        }
        return false;
      }
      
      if (valueString) {
        const hasRelic = valueString.includes('古代種');
        const hasAku = valueString.includes('悪魔');
        const hasOtherTraits = valueString.includes('白い敵') || valueString.includes('赤い敵') || 
                              valueString.includes('黒い敵') || valueString.includes('メタル') || 
                              valueString.includes('天使') || valueString.includes('エイリアン') || 
                              valueString.includes('ゾンビ') || 
                              valueString.includes('浮いてる敵');
        
        // 古のみ、悪のみ、または古と悪のみの場合のみtrue
        if (!hasOtherTraits) {
          return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
        }
      }
      return false;
    }
    return false;
  };
  const hasOnlyRelicAkuMassiveDamage = getMassiveDamageTargets();
  
  
  const enhancedStats = {
    ...stats,
    hp: Math.round(stats.hp * baseHpUpMultiplier),
    ap: Math.round(stats.ap * totalAttackMultiplier),
    atk1: stats.atk1 ? Math.round(stats.atk1 * totalAttackMultiplier) : stats.atk1,
    atk2: stats.atk2 ? Math.round(stats.atk2 * totalAttackMultiplier) : stats.atk2,
    atk3: stats.atk3 ? Math.round(stats.atk3 * totalAttackMultiplier) : stats.atk3,
    dps: stats.freq > 0 ? Math.round(Math.round(stats.ap * totalAttackMultiplier) / stats.freq * 30 * 100) / 100 : 0,
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
        {!iconsLoading && formIcons[actualCurrentForm] && (
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-12 h-8 border-0 border-gray-200 overflow-hidden">
              <Image 
                src={`data:image/png;base64,${formIcons[actualCurrentForm]}`}
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
                className="border rounded px-0.5 sm:px-1 py-1 w-6 sm:w-16 text-right text-xs sm:text-sm text-gray-900"
              />
            </div>
            <span className="text-xs text-gray-500">/ <small><b>{maxLevel} + {maxPlusLevel}</b></small></span>
            <button
              onClick={() => { 
                const targetLevel = Math.min(45, maxLevel);
                setLevel(targetLevel); 
                setPlusLevel(0);
                setLevelInput(targetLevel.toString());
                setPlusLevelInput('0');
                onParamsChange?.({ level: targetLevel, plusLevel: 0, formId: actualCurrentForm });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded text-xs sm:text-sm"
            >
              Lv45
            </button>
            <button
              onClick={() => { 
                const targetLevel = Math.min(50, maxLevel);
                setLevel(targetLevel); 
                setPlusLevel(0);
                setLevelInput(targetLevel.toString());
                setPlusLevelInput('0');
                onParamsChange?.({ level: targetLevel, plusLevel: 0, formId: actualCurrentForm });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded text-xs sm:text-sm"
            >
              Lv50
            </button>
            {maxLevel >= 55 && (
              <button
                onClick={() => { 
                  const targetLevel = Math.min(55, maxLevel);
                  setLevel(targetLevel); 
                  setPlusLevel(0);
                  setLevelInput(targetLevel.toString());
                  setPlusLevelInput('0');
                  onParamsChange?.({ level: targetLevel, plusLevel: 0, formId: actualCurrentForm });
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded text-xs sm:text-sm"
              >
                Lv55
              </button>
            )}
            {maxLevel >= 60 && (
              <button
                onClick={() => { 
                  const targetLevel = Math.min(60, maxLevel);
                  setLevel(targetLevel); 
                  setPlusLevel(0);
                  setLevelInput(targetLevel.toString());
                  setPlusLevelInput('0');
                  onParamsChange?.({ level: targetLevel, plusLevel: 0, formId: actualCurrentForm });
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded text-xs sm:text-sm"
              >
                Lv60
              </button>
            )}
            <button
              onClick={() => { 
                setLevel(maxLevel); 
                setPlusLevel(maxPlusLevel);
                setLevelInput(maxLevel.toString());
                setPlusLevelInput(maxPlusLevel.toString());
                onParamsChange?.({ level: maxLevel, plusLevel: maxPlusLevel, formId: actualCurrentForm });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded text-xs sm:text-sm"
            >
              Max
            </button>
          </div>
        </div>
      </div>


      {/* Form Tabs */}
      {validFormCount > 1 && (
        <div className="flex mb-2.5 gap-1 flex-wrap">
          {unitData.coreData.forms.slice(0, validFormCount).map((form, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentForm(index);
                onParamsChange?.({ level, plusLevel, formId: index });
              }}
              className={`flex items-center gap-1 px-1 sm:px-1 py-0 rounded text-xs sm:text-sm transition-colors ${
                actualCurrentForm === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {/* Form Icon */}
              {!iconsLoading && formIcons[index] && (
                <Image 
                  src={`data:image/png;base64,${formIcons[index]}`}
                  alt={form.name || 'Form Icon'}
                  width={24}
                  height={24}
                  className="rounded object-cover"
                />
              )}
              <span className="truncate max-w-[90px] sm:max-w-none">{form.name || `Form ${index + 1}`}</span>
            </button>
          ))}
        </div>
      )}

      {/* Stats Table */}
      <StatsTable stats={enhancedStats} attackUpEnabled={totalAttackMultiplier > 1} hpUpEnabled={baseHpUpMultiplier > 1} attackIntervalReductionEnabled={attackIntervalReductionEnabled && actualCurrentForm >= 2} costReductionEnabled={costReductionEnabled && actualCurrentForm >= 2} moveSpeedUpEnabled={moveSpeedUpEnabled && actualCurrentForm >= 2} rechargeSpeedUpEnabled={rechargeSpeedUpEnabled && actualCurrentForm >= 2} />

      {/* Abilities */}
      {abilities.length > 0 && <AbilitiesList abilities={abilities} attackUpMultiplier={totalAttackMultiplier} hpUpMultiplier={baseHpUpMultiplier} attackUpEnabled={attackUpEnabled} setAttackUpEnabled={setAttackUpEnabled} />}

      {/* Talents */}
      {unitData.auxiliaryData.talents.hasTalents && actualCurrentForm >= 2 && (
        <TalentsList 
          talents={unitData.auxiliaryData.talents.talentList}
          unitData={unitData}
          actualCurrentForm={actualCurrentForm}
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
          talentToughnessValue={talentToughnessValue}
          setTalentToughnessValue={setTalentToughnessValue}
          talentMightyApValue={talentMightyApValue}
          setTalentMightyApValue={setTalentMightyApValue}
          talentMightyDmgValue={talentMightyDmgValue}
          setTalentMightyDmgValue={setTalentMightyDmgValue}
          talentFreezeEnabled={talentFreezeEnabled}
          setTalentFreezeEnabled={setTalentFreezeEnabled}
          talentFreezeChance={talentFreezeChance}
          setTalentFreezeChance={setTalentFreezeChance}
          talentFreezeDuration={talentFreezeDuration}
          setTalentFreezeDuration={setTalentFreezeDuration}
          talentWeakenEnabled={talentWeakenEnabled}
          setTalentWeakenEnabled={setTalentWeakenEnabled}
          talentWeakenChance={talentWeakenChance}
          setTalentWeakenChance={setTalentWeakenChance}
          talentWeakenDuration={talentWeakenDuration}
          setTalentWeakenDuration={setTalentWeakenDuration}
          talentSlowEnabled={talentSlowEnabled}
          setTalentSlowEnabled={setTalentSlowEnabled}
          talentSlowChance={talentSlowChance}
          setTalentSlowChance={setTalentSlowChance}
          talentSlowDuration={talentSlowDuration}
          setTalentSlowDuration={setTalentSlowDuration}
          talentKnockbackEnabled={talentKnockbackEnabled}
          setTalentKnockbackEnabled={setTalentKnockbackEnabled}
          talentKnockbackChance={talentKnockbackChance}
          setTalentKnockbackChance={setTalentKnockbackChance}
          talentBarrierBreakerEnabled={talentBarrierBreakerEnabled}
          setTalentBarrierBreakerEnabled={setTalentBarrierBreakerEnabled}
          talentBarrierBreakerChance={talentBarrierBreakerChance}
          setTalentBarrierBreakerChance={setTalentBarrierBreakerChance}
          currentHp={enhancedStats.hp}
          currentAp={enhancedStats.ap}
          totalAttackMultiplier={totalAttackMultiplier}
          totalHpMultiplier={baseHpUpMultiplier}
          talentMassiveDamageMultiplier={talentMassiveDamageMultiplier}
          setTalentMassiveDamageMultiplier={setTalentMassiveDamageMultiplier}
          hasOnlyRelicAkuTalent={hasOnlyRelicAkuTalent}
          hasOnlyRelicAkuTough={hasOnlyRelicAkuTough}
          hasOnlyRelicAkuMassiveDamage={hasOnlyRelicAkuMassiveDamage}
        />
      )}
    </div>
  );
}

function StatsTable({ stats, attackUpEnabled, hpUpEnabled, attackIntervalReductionEnabled, costReductionEnabled, moveSpeedUpEnabled, rechargeSpeedUpEnabled }: { stats: CalculatedStats, attackUpEnabled: boolean, hpUpEnabled: boolean, attackIntervalReductionEnabled: boolean, costReductionEnabled: boolean, moveSpeedUpEnabled: boolean, rechargeSpeedUpEnabled: boolean }) {
  return (
    <div className="mb-2.5">
      <h3 className="text-sm sm:text-base font-semibold mb-1 text-gray-800">基本ステータス</h3>
      <div className="grid grid-cols-2 gap-1.5 sm:gap-3 text-xs sm:text-sm">
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
          value={<span className={rechargeSpeedUpEnabled ? "text-green-500" : "text-gray-500"}><small className="text-gray-400"><b>({Math.round(stats.recharge * 30).toLocaleString()}f)</b></small> <b>{stats.recharge.toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃発生"
          value={<span className="text-gray-500"><small className="text-gray-400"><b>({stats.foreswing.toLocaleString()}f)</b></small> <b>{frameToSecond(stats.foreswing).toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃間隔"
          value={<span className={attackIntervalReductionEnabled ? "text-purple-500" : "text-gray-500"}><small className="text-gray-400"><b>({stats.tba.toLocaleString()}f)</b></small> <b>{frameToSecond(stats.tba).toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃後硬直"
          value={<span className="text-gray-500"><small className="text-gray-400"><b>({stats.backswing.toLocaleString()}f)</b></small> <b>{frameToSecond(stats.backswing).toFixed(2)}s</b></span>}
          detail=""
        />
        <StatItem
          label="攻撃頻度"
          value={<span className={attackIntervalReductionEnabled ? "text-purple-500" : "text-gray-500"}><small className="text-gray-400"><b>({stats.freq.toLocaleString()}f)</b></small> <b>{frameToSecond(stats.freq).toFixed(2)}s</b><br /></span>}
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

function DynamicMassiveDamage({ ability, attackUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number }) {
  // ターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合は3倍固定
  const hasOnlyRelicAku = (() => {
    if (typeof ability.value === 'string') {
      const hasRelic = ability.value.includes('古代種');
      const hasAku = ability.value.includes('悪魔');
      const hasOtherTraits = ability.value.includes('白い敵') || ability.value.includes('赤い敵') || 
                            ability.value.includes('黒い敵') || ability.value.includes('メタル') || 
                            ability.value.includes('天使') || ability.value.includes('エイリアン') || 
                            ability.value.includes('ゾンビ') || 
                            ability.value.includes('浮いてる敵');
      
      // 古のみ、悪のみ、または古と悪のみの場合のみtrue
      if (!hasOtherTraits) {
        return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
      }
    }
    return false;
  })();
  
  const [multiplier, setMultiplier] = useState(hasOnlyRelicAku ? 3 : 4);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (mult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * mult) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * mult) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * mult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : '';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      return values.join(' / ');
    } else {
      const damage = Math.round(stats.ap * attackUpMultiplier * mult);
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
          {hasOnlyRelicAku ? (
            <span className="w-7 mx-1 px-1 text-center text-xs font-bold">3</span>
          ) : (
            <input
              type="number"
              value={multiplier}
              onChange={(e) => {
                const value = Number(e.target.value);
                // 下限値未満は3に、上限値超過は4に調整
                const clampedValue = Math.max(3, Math.min(4, value));
                setMultiplier(clampedValue);
              }}
              className="w-7 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
              min="3"
              max="4"
              step="0.1"
            />
          )}倍 </small></span>{hasOnlyRelicAku ? null : <small className="text-gray-400">(3~4)</small>}
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <b className="text-gray-500" dangerouslySetInnerHTML={{ __html: calculateDamage(hasOnlyRelicAku ? 3 : multiplier) }}></b>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicExtremeDamage({ ability, attackUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number }) {
  // ターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合は5倍固定
  const hasOnlyRelicAku = (() => {
    if (typeof ability.value === 'string') {
      const hasRelic = ability.value.includes('古代種');
      const hasAku = ability.value.includes('悪魔');
      const hasOtherTraits = ability.value.includes('白い敵') || ability.value.includes('赤い敵') || 
                            ability.value.includes('黒い敵') || ability.value.includes('メタル') || 
                            ability.value.includes('天使') || ability.value.includes('エイリアン') || 
                            ability.value.includes('ゾンビ') || 
                            ability.value.includes('浮いてる敵')  || ability.value.includes('属性を持たない敵');
      
      // 古のみ、悪のみ、または古と悪のみの場合のみtrue
      if (!hasOtherTraits) {
        return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
      }
    } else if (React.isValidElement(ability.value) && ability.iconKeys) {
      // React要素の場合、iconKeysを使用して判定
      const hasRelicIcon = ability.iconKeys.includes('traitRelic');
      const hasAkuIcon = ability.iconKeys.includes('traitAku');
      const hasOtherTraitIcons = ability.iconKeys.some(iconKey => 
        iconKey !== 'traitRelic' && iconKey !== 'traitAku' && iconKey !== 'traitBehemoth'
      );
      
      // 古のみ、悪のみ、または古と悪のみの場合のみtrue
      if (!hasOtherTraitIcons) {
        return (hasRelicIcon && !hasAkuIcon) || (!hasRelicIcon && hasAkuIcon) || (hasRelicIcon && hasAkuIcon);
      }
    }
    return false;
  })();
  
  const [multiplier, setMultiplier] = useState(hasOnlyRelicAku ? 5 : 6);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (mult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * mult) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * mult) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * mult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : '';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      return values.join(' / ');
    } else {
      const damage = Math.round(stats.ap * attackUpMultiplier * mult);
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
          {hasOnlyRelicAku ? (
            <span className="w-7 mx-1 px-1 text-center text-xs font-bold">5</span>
          ) : (
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
            />
          )}倍 </small></span>{hasOnlyRelicAku ? null : <small className="text-gray-400">(5~6)</small>}
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <b className="text-gray-500" dangerouslySetInnerHTML={{ __html: calculateDamage(hasOnlyRelicAku ? 5 : multiplier) }}></b>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicToughness({ ability, hpUpMultiplier }: { ability: UnitAbility, hpUpMultiplier: number }) {
  // ターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合は0.25倍固定
  const hasOnlyRelicAku = (() => {
    if (typeof ability.value === 'string') {
      const hasRelic = ability.value.includes('古代種');
      const hasAku = ability.value.includes('悪魔');
      const hasOtherTraits = ability.value.includes('白い敵') || ability.value.includes('赤い敵') || 
                            ability.value.includes('黒い敵') || ability.value.includes('メタル') || 
                            ability.value.includes('天使') || ability.value.includes('エイリアン') || 
                            ability.value.includes('ゾンビ') || 
                            ability.value.includes('浮いてる敵');
      
      // 古のみ、悪のみ、または古と悪のみの場合のみtrue
      if (!hasOtherTraits) {
        return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
      }
    }
    return false;
  })();
  
  const [damageMultiplier, setDamageMultiplier] = useState(hasOnlyRelicAku ? 0.25 : 0.2);
  
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
          {hasOnlyRelicAku ? (
            <span className="w-9 mx-1 px-1 text-center text-xs font-bold">0.25</span>
          ) : (
            <input
              type="number"
              value={damageMultiplier}
              onChange={(e) => {
                const value = Number(e.target.value);
                // 下限値未満は0.2に、上限値超過は0.25に調整
                const clampedValue = Math.max(0.2, Math.min(0.25, value));
                setDamageMultiplier(clampedValue);
              }}
              className="w-9 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
              min="0.2"
              max="0.25"
              step="0.01"
            />
          )}倍 </small></span>{hasOnlyRelicAku ? null : <small className="text-gray-400">(0.25~0.2)</small>}
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <span className='text-blue-500'><small><b>体力(換算値)</b></small></span> <b className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{calculateEquivalentHP(hasOnlyRelicAku ? 0.25 : damageMultiplier)}</b>
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
  // ターゲット属性が「古のみ」「悪のみ」「古と悪のみ」の場合は1.5倍/0.5倍固定
  const hasOnlyRelicAku = (() => {
    if (typeof ability.value === 'string') {
      const hasRelic = ability.value.includes('古代種');
      const hasAku = ability.value.includes('悪魔');
      const hasOtherTraits = ability.value.includes('白い敵') || ability.value.includes('赤い敵') || 
                            ability.value.includes('黒い敵') || ability.value.includes('メタル') || 
                            ability.value.includes('天使') || ability.value.includes('エイリアン') || 
                            ability.value.includes('ゾンビ') || 
                            ability.value.includes('浮いてる敵') || ability.value.includes('属性を持たない敵');
      
      // 古のみ、悪のみ、または古と悪のみの場合のみtrue
      if (!hasOtherTraits) {
        return (hasRelic && !hasAku) || (!hasRelic && hasAku) || (hasRelic && hasAku);
      }
    } else if (React.isValidElement(ability.value) && ability.iconKeys) {
      // React要素の場合、iconKeysを使用して判定
      const hasRelicIcon = ability.iconKeys.includes('traitRelic');
      const hasAkuIcon = ability.iconKeys.includes('traitAku');
      const hasOtherTraitIcons = ability.iconKeys.some(iconKey => 
        iconKey !== 'traitRelic' && iconKey !== 'traitAku' && iconKey !== 'traitBehemoth'
      );
      
      // 古のみ、悪のみ、または古と悪のみの場合のみtrue
      if (!hasOtherTraitIcons) {
        return (hasRelicIcon && !hasAkuIcon) || (!hasRelicIcon && hasAkuIcon) || (hasRelicIcon && hasAkuIcon);
      }
    }
    return false;
  })();
  
  const [apMultiplier, setApMultiplier] = useState(hasOnlyRelicAku ? 1.5 : 1.8);
  const [dmgMultiplier, setDmgMultiplier] = useState(hasOnlyRelicAku ? 0.5 : 0.4);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (apMult: number, dmgMult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * apMult) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * apMult) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * apMult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      const apDisplay = values.join(' ');
      
      // HP相当計算（statsは既にhpUpMultiplierが適用済みのenhancedStats）
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span dangerouslySetInnerHTML={{ __html: apDisplay }}></span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{equivalentHP.toLocaleString()}</span>
        </>
      );
    } else {
      const damage = Math.round(stats.ap * attackUpMultiplier * apMult);
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span className={isEnhanced ? "text-red-500" : "text-gray-500"}>{damage.toLocaleString()}</span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{equivalentHP.toLocaleString()}</span>
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
          めっぽう強い<br /> <span className="text-red-500 ml-5"><small>攻撃力
          {hasOnlyRelicAku ? (
            <span className="w-8 mx-1 px-1 text-center text-xs font-bold">1.5</span>
          ) : (
            <input
              type="number"
              value={apMultiplier}
              onChange={(e) => {
                const value = Number(e.target.value);
                // 下限値未満は1.5に、上限値超過は1.8に調整
                const clampedValue = Math.max(1.5, Math.min(1.8, value));
                setApMultiplier(clampedValue);
              }}
              className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
              min="1.5"
              max="1.8"
              step="0.1"
            />
          )}倍 </small></span>{hasOnlyRelicAku ? null : <small>(1.5~1.8)</small>}
          <br />
          <span className="text-blue-500 ml-5"><small>被ダメ
          {hasOnlyRelicAku ? (
            <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.5</span>
          ) : (
            <input
              type="number"
              value={dmgMultiplier}
              onChange={(e) => {
                const value = Number(e.target.value);
                // 下限値未満は0.4に、上限値超過は0.5に調整
                const clampedValue = Math.max(0.4, Math.min(0.5, value));
                setDmgMultiplier(clampedValue);
              }}
              className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
              min="0.4"
              max="0.5"
              step="0.1"
            />
          )}倍 </small></span>{hasOnlyRelicAku ? null : <small>(0.5~0.4)</small>}
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

function DynamicColossusSlayer({ ability, attackUpMultiplier, hpUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number, hpUpMultiplier: number }) {
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = () => {
    const stats = ability.calculatedStats!;
    const apMultiplier = 1.6;
    const dmgMultiplier = 0.7;
    
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * apMultiplier) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * apMultiplier) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * apMultiplier) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
      const apDisplay = values.join(' / ');
      
      // HP相当計算（1.43倍体力相当）
      const hpMultiplier = 1 / dmgMultiplier; // 1.43倍
      const hpEquivalent = Math.round(stats.hp * hpMultiplier);
      
      return apDisplay + '<br /><b>' + hpEquivalent.toLocaleString() + '</b>';
    } else {
      const ap = Math.round(stats.ap * attackUpMultiplier * apMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      
      // HP相当計算（1.43倍体力相当）
      const hpMultiplier = 1 / dmgMultiplier; // 1.43倍  
      const hpEquivalent = Math.round(stats.hp * hpMultiplier);
      
      return `<b style="${colorClass}">${ap.toLocaleString()}</b><br /><b>${hpEquivalent.toLocaleString()}</b>`;
    }
  };
  
  return (
    <div className="bg-gray-50 p-1.5 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityColossusSlayer}`}
            alt="超生命体特効"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          超生命体特効<br /> <span className="text-red-500 ml-5"><small>攻撃力
          <span className="w-8 mx-1 px-1 text-center text-xs font-bold">1.6</span>倍 </small></span>
          <br />
          <span className="text-blue-500 ml-5"><small>被ダメ
          <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.7</span>倍 </small></span>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <br />
            <span className="text-red-500"><small><b>攻撃力</b></small></span> <span dangerouslySetInnerHTML={{ __html: calculateDamage().split('<br />')[0] }}></span>
            <br />
            <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"} dangerouslySetInnerHTML={{ __html: calculateDamage().split('<br />')[1] }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicBehemothSlayer({ ability, attackUpMultiplier, hpUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number, hpUpMultiplier: number }) {
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = () => {
    const stats = ability.calculatedStats!;
    const apMultiplier = 2.5;
    const dmgMultiplier = 0.6;
    
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * apMultiplier) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * apMultiplier) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * apMultiplier) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
      const apDisplay = values.join(' / ');
      
      // HP相当計算（1.67倍体力相当）
      const hpMultiplier = 1 / dmgMultiplier; // 1.67倍
      const hpEquivalent = Math.round(stats.hp * hpMultiplier);
      
      return apDisplay + '<br /><b>' + hpEquivalent.toLocaleString() + '</b>';
    } else {
      const ap = Math.round(stats.ap * attackUpMultiplier * apMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      
      // HP相当計算（1.67倍体力相当）
      const hpMultiplier = 1 / dmgMultiplier; // 1.67倍  
      const hpEquivalent = Math.round(stats.hp * hpMultiplier);
      
      return `<b style="${colorClass}">${ap.toLocaleString()}</b><br /><b>${hpEquivalent.toLocaleString()}</b>`;
    }
  };
  
  return (
    <div className="bg-gray-50 p-1.5 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityBehemothSlayer}`}
            alt="超獣特効"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          超獣特効<br /> <span className="text-red-500 ml-5"><small>攻撃力
          <span className="w-8 mx-1 px-1 text-center text-xs font-bold">2.5</span>倍 </small></span>
          <br />
          <span className="text-blue-500 ml-5"><small>被ダメ
          <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.6</span>倍 </small></span>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <br />
            <span className="text-red-500"><small><b>攻撃力</b></small></span> <span dangerouslySetInnerHTML={{ __html: calculateDamage().split('<br />')[0] }}></span>
            <br />
            <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"} dangerouslySetInnerHTML={{ __html: calculateDamage().split('<br />')[1] }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicSageSlayer({ ability, attackUpMultiplier, hpUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number, hpUpMultiplier: number }) {
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = () => {
    const stats = ability.calculatedStats!;
    const apMultiplier = 1.2;
    const dmgMultiplier = 0.5;
    
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * apMultiplier) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * apMultiplier) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * apMultiplier) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
      const apDisplay = values.join(' / ');
      
      // HP相当計算（2倍体力相当）
      const hpMultiplier = 1 / dmgMultiplier; // 2倍
      const hpEquivalent = Math.round(stats.hp * hpMultiplier);
      
      return apDisplay + '<br /><b>' + hpEquivalent.toLocaleString() + '</b>';
    } else {
      const ap = Math.round(stats.ap * attackUpMultiplier * apMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      
      // HP相当計算（2倍体力相当）
      const hpMultiplier = 1 / dmgMultiplier; // 2倍  
      const hpEquivalent = Math.round(stats.hp * hpMultiplier);
      
      return `<b style="${colorClass}">${ap.toLocaleString()}</b><br /><b>${hpEquivalent.toLocaleString()}</b>`;
    }
  };
  
  return (
    <div className="bg-gray-50 p-1.5 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilitySageSlayer}`}
            alt="超賢者特効"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          超賢者特効<br /> <span className="text-red-500 ml-5"><small>攻撃力
          <span className="w-8 mx-1 px-1 text-center text-xs font-bold">1.2</span>倍 </small></span>
          <br />
          <span className="text-blue-500 ml-5"><small>被ダメ
          <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.5</span>倍 </small></span>
        </div>
        <div className="text-right flex-shrink-0 max-w-[50%]">
          <div className="text-gray-600 font-medium break-words">
            <br />
            <span className="text-red-500"><small><b>攻撃力</b></small></span> <span dangerouslySetInnerHTML={{ __html: calculateDamage().split('<br />')[0] }}></span>
            <br />
            <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"} dangerouslySetInnerHTML={{ __html: calculateDamage().split('<br />')[1] }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicEvaAngelKiller({ ability, attackUpMultiplier, hpUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number, hpUpMultiplier: number }) {
  const [apMultiplier, setApMultiplier] = useState(25);
  const [dmgMultiplier, setDmgMultiplier] = useState(0.04);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (apMult: number, dmgMult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * apMult) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * apMult) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * apMult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      const apDisplay = values.join(' ');
      
      // HP相当計算（statsは既にhpUpMultiplierが適用済みのenhancedStats）
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span dangerouslySetInnerHTML={{ __html: apDisplay }}></span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{equivalentHP.toLocaleString()}</span>
        </>
      );
    } else {
      const damage = Math.round(stats.ap * attackUpMultiplier * apMult);
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span className={isEnhanced ? "text-red-500" : "text-gray-500"}>{damage.toLocaleString()}</span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{equivalentHP.toLocaleString()}</span>
        </>
      );
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityEvaAngelKiller}`}
            alt="使徒キラー"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          使徒キラー<br /> <span className="text-red-500 ml-5"><small>攻撃力
          <input
            type="number"
            value={apMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 25) {
                setApMultiplier(25);
              } else if (value < 5) {
                setApMultiplier(5);
              } else {
                setApMultiplier(value);
              }
            }}
            className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="5"
            max="25"
            step="20"
          />
          倍 </small></span><small>(5~25)</small>
          <br />
          <span className="text-blue-500 ml-5"><small>被ダメ
          <input
            type="number"
            value={dmgMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 0.2) {
                setDmgMultiplier(0.2);
              } else if (value < 0.04) {
                setDmgMultiplier(0.04);
              } else {
                setDmgMultiplier(value);
              }
            }}
            className="w-10 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.04"
            max="0.2"
            step="0.16"
          />
          倍 </small></span><small>(0.2~0.04)</small>
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

function DynamicWitchKiller({ ability, attackUpMultiplier, hpUpMultiplier }: { ability: UnitAbility, attackUpMultiplier: number, hpUpMultiplier: number }) {
  const [apMultiplier, setApMultiplier] = useState(25);
  const [dmgMultiplier, setDmgMultiplier] = useState(0.04);
  
  if (!ability.calculatedStats || !ability.isDynamic) return null;
  
  const calculateDamage = (apMult: number, dmgMult: number) => {
    const stats = ability.calculatedStats!;
    if (stats.multihit) {
      const hit1 = stats.atk1 ? Math.round(stats.atk1 * attackUpMultiplier * apMult) : 0;
      const hit2 = stats.atk2 ? Math.round(stats.atk2 * attackUpMultiplier * apMult) : 0;
      const hit3 = stats.atk3 ? Math.round(stats.atk3 * attackUpMultiplier * apMult) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1, hit2, hit3].filter(v => v > 0).map(v => `<span style="${colorClass}">${v.toLocaleString()}</span>`);
      const apDisplay = values.join(' ');
      
      // HP相当計算（statsは既にhpUpMultiplierが適用済みのenhancedStats）
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span dangerouslySetInnerHTML={{ __html: apDisplay }}></span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{equivalentHP.toLocaleString()}</span>
        </>
      );
    } else {
      const damage = Math.round(stats.ap * attackUpMultiplier * apMult);
      const hpMultiplier = 1 / dmgMult;
      const equivalentHP = Math.floor(stats.hp * hpMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      
      return (
        <>
          <span className="text-red-500"><small>攻撃力</small></span> <span className={isEnhanced ? "text-red-500" : "text-gray-500"}>{damage.toLocaleString()}</span>
          <br />
          <span className="text-blue-500"><small><b>体力(換算値)</b></small></span> <span className={hpUpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{equivalentHP.toLocaleString()}</span>
        </>
      );
    }
  };
  
  return (
    <div className="bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center gap-2">
        <div className="font-bold text-xs text-gray-600">
          <Image
            src={`data:image/png;base64,${icons.abilityWitchKiller}`}
            alt="魔女キラー"
            width={16}
            height={16}
            className="inline mr-1 align-top"
          />
          魔女キラー<br /> <span className="text-red-500 ml-5"><small>攻撃力
          <input
            type="number"
            value={apMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 25) {
                setApMultiplier(25);
              } else if (value < 5) {
                setApMultiplier(5);
              } else {
                setApMultiplier(value);
              }
            }}
            className="w-8 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="5"
            max="25"
            step="20"
          />
          倍 </small></span><small>(5~25)</small>
          <br />
          <span className="text-blue-500 ml-5"><small>被ダメ
          <input
            type="number"
            value={dmgMultiplier}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 0.2) {
                setDmgMultiplier(0.2);
              } else if (value < 0.04) {
                setDmgMultiplier(0.04);
              } else {
                setDmgMultiplier(value);
              }
            }}
            className="w-10 mx-1 px-1 text-center border border-gray-300 rounded text-xs"
            min="0.04"
            max="0.2"
            step="0.16"
          />
          倍 </small></span><small>(0.2~0.04)</small>
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

function AbilitiesList({ abilities, attackUpMultiplier, hpUpMultiplier, attackUpEnabled, setAttackUpEnabled }: { 
  abilities: UnitAbility[], 
  attackUpMultiplier: number,
  hpUpMultiplier: number,
  attackUpEnabled: boolean,
  setAttackUpEnabled: (enabled: boolean) => void
}) {
  return (
    <div className="mb-2.5">
      <h3 className="text-sm sm:text-base font-semibold mb-0.3 text-gray-800">能力・効果</h3>
      <div className="space-y-0.5">
        {abilities.map((ability, index) => (
          ability.isDynamic && ability.name === "超ダメージ" ? (
            <DynamicMassiveDamage key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} />
          ) : ability.isDynamic && ability.name === "極ダメージ" ? (
            <DynamicExtremeDamage key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} />
          ) : ability.isDynamic && ability.name === "打たれ強い" ? (
            <DynamicToughness key={index} ability={ability} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "超打たれ強い" ? (
            <DynamicSuperToughness key={index} ability={ability} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "めっぽう強い" ? (
            <DynamicMighty key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "使徒キラー" ? (
            <DynamicEvaAngelKiller key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "魔女キラー" ? (
            <DynamicWitchKiller key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "超生命体特効" ? (
            <DynamicColossusSlayer key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "超獣特効" ? (
            <DynamicBehemothSlayer key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
          ) : ability.isDynamic && ability.name === "超賢者特効" ? (
            <DynamicSageSlayer key={index} ability={ability} attackUpMultiplier={attackUpMultiplier} hpUpMultiplier={hpUpMultiplier} />
          ) : (
            <div key={index} className="bg-gray-50 p-1.5 rounded">
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
                  ) : (typeof ability.name === 'object' && React.isValidElement(ability.name) && ability.iconKeys?.includes('abilitySavageBlow')) ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySavageBlow}`}
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
                  ) : ability.name === '超生命体特効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityColossusSlayer}`}
                        alt="超生命体特効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      超生命体特効
                    </>
                  ) : ability.name === '超獣特効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilityBehemothSlayer}`}
                        alt="超獣特効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      超獣特効
                    </>
                  ) : ability.name === '超賢者特効' && ability.iconKeys ? (
                    <>
                      <Image
                        src={`data:image/png;base64,${icons.abilitySageSlayer}`}
                        alt="超賢者特効"
                        width={16}
                        height={16}
                        className="inline mr-1 align-top"
                      />
                      超賢者特効
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
                        src={`data:image/png;base64,${icons.abilitySavageBlow}`}
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
                  ) : ability.name === '攻撃力ダウン' && ability.value ? (
                    <div className="text-gray-600 font-medium break-words">
                      {ability.value}
                    </div>
                  ) : ability.name === '動きを止める' && ability.value ? (
                    <div className="text-gray-600 font-medium break-words">
                      {ability.value}
                    </div>
                  ) : ability.value ? (
                    <div className="text-gray-600 font-medium break-words">
                      {ability.value}
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
  unitData,
  actualCurrentForm,
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
  setTalentCriticalValue,
  talentToughnessValue,
  setTalentToughnessValue,
  talentMightyApValue,
  setTalentMightyApValue,
  talentMightyDmgValue,
  setTalentMightyDmgValue,
  talentFreezeEnabled,
  setTalentFreezeEnabled,
  talentFreezeChance,
  setTalentFreezeChance,
  talentFreezeDuration,
  setTalentFreezeDuration,
  talentWeakenEnabled,
  setTalentWeakenEnabled,
  talentWeakenChance,
  setTalentWeakenChance,
  talentWeakenDuration,
  setTalentWeakenDuration,
  talentSlowEnabled,
  setTalentSlowEnabled,
  talentSlowChance,
  setTalentSlowChance,
  talentSlowDuration,
  setTalentSlowDuration,
  talentKnockbackEnabled,
  setTalentKnockbackEnabled,
  talentKnockbackChance,
  setTalentKnockbackChance,
  talentBarrierBreakerEnabled,
  setTalentBarrierBreakerEnabled,
  talentBarrierBreakerChance,
  setTalentBarrierBreakerChance,
  currentHp,
  currentAp,
  totalAttackMultiplier,
  totalHpMultiplier,
  talentMassiveDamageMultiplier,
  setTalentMassiveDamageMultiplier,
  hasOnlyRelicAkuTalent,
  hasOnlyRelicAkuTough,
  hasOnlyRelicAkuMassiveDamage
}: { 
  talents: readonly UnitTalent[];
  unitData: UnitData;
  actualCurrentForm: number;
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
  talentToughnessValue: number;
  setTalentToughnessValue: (value: number) => void;
  talentMightyApValue: number;
  setTalentMightyApValue: (value: number) => void;
  talentMightyDmgValue: number;
  setTalentMightyDmgValue: (value: number) => void;
  talentFreezeEnabled: boolean;
  setTalentFreezeEnabled: (enabled: boolean) => void;
  talentFreezeChance: number;
  setTalentFreezeChance: (value: number) => void;
  talentFreezeDuration: number;
  setTalentFreezeDuration: (value: number) => void;
  talentWeakenEnabled: boolean;
  setTalentWeakenEnabled: (enabled: boolean) => void;
  talentWeakenChance: number;
  setTalentWeakenChance: (value: number) => void;
  talentWeakenDuration: number;
  setTalentWeakenDuration: (value: number) => void;
  talentSlowEnabled: boolean;
  setTalentSlowEnabled: (enabled: boolean) => void;
  talentSlowChance: number;
  setTalentSlowChance: (value: number) => void;
  talentSlowDuration: number;
  setTalentSlowDuration: (value: number) => void;
  talentKnockbackEnabled: boolean;
  setTalentKnockbackEnabled: (enabled: boolean) => void;
  talentKnockbackChance: number;
  setTalentKnockbackChance: (value: number) => void;
  talentBarrierBreakerEnabled: boolean;
  setTalentBarrierBreakerEnabled: (enabled: boolean) => void;
  talentBarrierBreakerChance: number;
  setTalentBarrierBreakerChance: (value: number) => void;
  currentHp: number;
  currentAp: number;
  totalAttackMultiplier: number;
  totalHpMultiplier: number;
  talentMassiveDamageMultiplier: number;
  setTalentMassiveDamageMultiplier: (value: number) => void;
  hasOnlyRelicAkuTalent: boolean;
  hasOnlyRelicAkuTough: boolean;
  hasOnlyRelicAkuMassiveDamage: boolean;
}) {
  if (talents.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">本能・超本能</h3>
      <div className="space-y-0.5">
        {talents.map((talent, index) => (
          <div key={index} className={`p-1.5 rounded ${talent.type === 'ultra' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'}`}>
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
                    {/* 能力・効果に攻撃力ダウンがある場合のみチェックボックスを表示 */}
                    {(unitData.coreData.forms[actualCurrentForm]?.stats[37] && unitData.coreData.forms[actualCurrentForm]?.stats[37] > 0) ? (
                      <input
                        type="checkbox"
                        checked={talentWeakenEnabled}
                        onChange={(e) => setTalentWeakenEnabled(e.target.checked)}
                        className="mr-1 align-middle"
                      />
                    ) : null}
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
                    {/* 能力・効果に動きを止めるがある場合のみチェックボックスを表示 */}
                    {(unitData.coreData.forms[actualCurrentForm]?.stats[25] && unitData.coreData.forms[actualCurrentForm]?.stats[25] > 0) ? (
                      <input
                        type="checkbox"
                        checked={talentFreezeEnabled}
                        onChange={(e) => setTalentFreezeEnabled(e.target.checked)}
                        className="mr-1 align-middle"
                      />
                    ) : null}
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
                    <input
                      type="checkbox"
                      checked={talentSlowEnabled}
                      onChange={(e) => setTalentSlowEnabled(e.target.checked)}
                      className="mr-1 align-middle"
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
                    {/* 能力・効果にふっとばすがある場合のみチェックボックスを表示 */}
                    {(unitData.coreData.forms[actualCurrentForm]?.stats[24] && unitData.coreData.forms[actualCurrentForm]?.stats[24] > 0) ? (
                      <input
                        type="checkbox"
                        checked={talentKnockbackEnabled}
                        onChange={(e) => setTalentKnockbackEnabled(e.target.checked)}
                        className="mr-1 align-middle"
                      />
                    ) : null}
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
                    {/* 能力・効果にバリアブレイカーがある場合のみチェックボックスを表示 */}
                    {(unitData.coreData.forms[actualCurrentForm]?.stats[70] && unitData.coreData.forms[actualCurrentForm]?.stats[70] > 0) ? (
                      <input
                        type="checkbox"
                        checked={talentBarrierBreakerEnabled}
                        onChange={(e) => setTalentBarrierBreakerEnabled(e.target.checked)}
                        className="mr-1 align-middle"
                      />
                    ) : null}
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
                    {talent.npCost > 0 && (
                      <span className="text-[10px] text-gray-600 font-medium ml-1">
                        [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                      </span>
                    )}
                    <br />
                    <span className="text-red-500 ml-5"><small>攻撃力
                    <span className="w-8 mx-1 px-1 text-center text-xs font-bold">1.2</span>倍 </small></span>
                    <br />
                    <span className="text-blue-500 ml-5"><small>被ダメ
                    <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.5</span>倍 </small></span>
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
                      src={`data:image/png;base64,${icons.abilityColossus}`}
                      alt="超生命体特効"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                    <br />
                    <span className="text-red-500 ml-5"><small>攻撃力
                    <span className="w-8 mx-1 px-1 text-center text-xs font-bold">1.6</span>倍 </small></span>
                    <br />
                    <span className="text-blue-500 ml-5"><small>被ダメ
                    <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.7</span>倍 </small></span>
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
                    {talent.npCost > 0 && (
                      <span className="text-[10px] text-gray-600 font-medium ml-1">
                        [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                      </span>
                    )}
                    <br />
                    <span className="text-red-500 ml-5"><small>攻撃力
                    <span className="w-8 mx-1 px-1 text-center text-xs font-bold">2.5</span>倍 </small></span>
                    <br />
                    <span className="text-blue-500 ml-5"><small>被ダメ
                    <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.6</span>倍 </small></span>
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
                      src={`data:image/png;base64,${icons.abilitySavageBlow}`}
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
                    {talent.npCost > 0 && (
                      <span className="text-[10px] text-gray-600 font-medium ml-1">
                        [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                      </span>
                    )}<br />
                    <small className="text-red-500 ml-5"><b>攻撃力</b></small>
                    {hasOnlyRelicAkuTalent ? (
                      <span className="w-8 mx-1 px-1 text-center text-xs font-bold">1.5</span>
                    ) : (
                      <input
                        type="number"
                        value={talentMightyApValue}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          // 下限値未満は1.5に、上限値超過は1.8に調整
                          const clampedValue = Math.max(1.5, Math.min(1.8, value));
                          setTalentMightyApValue(clampedValue);
                        }}
                        className="w-8 mx-1 px-1 text-center text-gray-500 border border-gray-300 rounded text-xs"
                        min="1.5"
                        max="1.8"
                        step="0.1"
                      />
                    )}
                    <small><b className="text-gray-500">倍</b></small> {hasOnlyRelicAkuTalent ? null : <small className="text-gray-400" style={{fontSize: '10px'}}>(1.5~1.8)</small>}<br />
                    <small className="text-blue-500 ml-5"><b>被ダメ</b></small>
                    {hasOnlyRelicAkuTalent ? (
                      <span className="w-8 mx-1 px-1 text-center text-xs font-bold">0.5</span>
                    ) : (
                      <input
                        type="number"
                        value={talentMightyDmgValue}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          // 下限値未満は0.4に、上限値超過は0.5に調整
                          const clampedValue = Math.max(0.4, Math.min(0.5, value));
                          setTalentMightyDmgValue(clampedValue);
                        }}
                        className="w-8 mx-1 px-1 text-center text-gray-500 border border-gray-300 rounded text-xs"
                        min="0.4"
                        max="0.5"
                        step="0.1"
                      />
                    )}
                    <small><b className="text-gray-500">倍</b></small> {hasOnlyRelicAkuTalent ? null : <small className="text-gray-400" style={{fontSize: '10px'}}>(0.5~0.4)</small>}
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
                    {talent.npCost > 0 && (
                      <span className="text-[10px] text-gray-600 font-medium ml-1">
                        [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                      </span>
                    )}<br />
                    <small className="text-blue-500 ml-5"><b>被ダメ</b></small>
                    {hasOnlyRelicAkuTough ? (
                      <span className="w-9 mx-1 px-1 text-center text-xs font-bold">0.25</span>
                    ) : (
                      <input
                        type="number"
                        value={talentToughnessValue}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          // 下限値未満は0.2に、上限値超過は0.25に調整
                          const clampedValue = Math.max(0.2, Math.min(0.25, value));
                          setTalentToughnessValue(clampedValue);
                        }}
                        className="w-9 mx-1 px-1 text-center text-gray-500 border border-gray-300 rounded text-xs"
                        min="0.2"
                        max="0.25"
                        step="0.01"
                      />
                    )}
                    <small><b className="text-gray-500">倍</b></small> {hasOnlyRelicAkuTough ? null : <small className="text-gray-400" style={{fontSize: '10px'}}>(0.25~0.2)</small>}
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
                ) : talent.id === 7 ? (
                  <>
                    <Image
                      src={`data:image/png;base64,${icons.abilityMassiveDamage}`}
                      alt="超ダメージ"
                      width={16}
                      height={16}
                      className="inline mr-1 align-top"
                    />
                    {talent.name} ({talent.id})
                    {talent.npCost > 0 && (
                      <span className="text-[10px] text-gray-600 font-medium ml-1">
                        [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                      </span>
                    )}<br />
                    <small className="text-red-500 ml-5"><b>攻撃力</b></small>
                    {hasOnlyRelicAkuMassiveDamage ? (
                      <span className="w-7 mx-1 px-1 text-center text-xs font-bold">3</span>
                    ) : (
                      <input
                        type="number"
                        value={talentMassiveDamageMultiplier}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          // 下限値未満は3に、上限値超過は4に調整
                          const clampedValue = Math.max(3, Math.min(4, value));
                          setTalentMassiveDamageMultiplier(clampedValue);
                        }}
                        className="w-7 mx-1 px-1 text-center text-gray-500 border border-gray-300 rounded text-xs"
                        min="3"
                        max="4"
                        step="0.1"
                      />
                    )}
                    <small><b className="text-gray-500">倍</b></small> {hasOnlyRelicAkuMassiveDamage ? null : <small className="text-gray-400" style={{fontSize: '10px'}}>(3~4)</small>}
                  </>
                ) : (
                  <>
                    {talent.name} ({talent.id})
                  </>
                )}
                {talent.npCost > 0 && talent.id !== 5 && talent.id !== 6 && talent.id !== 64 && talent.id !== 66 && (
                  <span className="text-[10px] text-gray-600 font-medium ml-1">
                    [{talent.isTotal ? '合計' : ''}{talent.npCost}NP]
                  </span>
                )}
              </div>
              {talent.data && (
                <div className="text-gray-500 text-right break-words flex-shrink-0 max-w-[50%]">
                  {/* 基本体力アップ(32)の場合はテキストボックスを表示 */}
                  {talent.id === 32 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">+</b>
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
                        <small><b className="text-gray-500">%</b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}> <b>(0-20)</b></small>
                      </div>
                    </div>
                  ) : /* 基本攻撃力アップ(31)の場合はテキストボックスを表示 */
                  talent.id === 31 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">+</b>
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
                        <small><b className="text-gray-500">%</b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}> <b>(0-20)</b></small>
                      </div>
                    </div>
                  ) : /* 攻撃力アップ(10)の場合はテキストボックスを表示 */
                  talent.id === 10 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <small className="text-blue-500"><b>体力</b></small><small><b className="text-gray-500">≦</b></small><b className="text-gray-500">{100 - (talent.data[2])}</b><small><b className="text-gray-500">% </b></small>
                        <small className="text-red-500"><b>攻撃力</b></small><b className="text-gray-500">+</b>
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
                          step={Math.ceil((talent.data[5]-talent.data[4])/(talent.data[1]-1))}
                        />
                        <small><b className="text-gray-500">%</b></small>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <small className="text-gray-400" style={{fontSize: '10px'}}><b>({talent.data[4]}~{talent.data[5]})</b></small>
                      </div>
                    </div>
                  ) : /* 攻撃間隔短縮(61)の場合はテキストボックスを表示 */
                  talent.id === 61 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">-</b>
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
                          className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                        />
                        <small><b className="text-gray-500">%</b>{' '}</small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}><b>({talent.data[2]}~{talent.data[3]})</b></small>
                      </div>
                    </div>
                  ) :  /* 生産コスト割引(25)の場合はテキストボックスを表示 */ 
                  talent.id === 25 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">-</b>
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
                          className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                          min={Math.floor(talent.data[2] * 1.5)}
                          max={Math.floor(talent.data[3] * 1.5)}
                          step={Math.floor((talent.data[3] - talent.data[2]) * 1.5 / (talent.data[1] - 1))}
                        />
                        <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({Math.floor(talent.data[2] * 1.5)}~{Math.floor(talent.data[3] * 1.5)})</b></small>
                      </div>
                    </div>
                  ) : /* 生産スピードアップ(26)の場合はテキストボックスを表示 */
                  talent.id === 26 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">-</b>
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
                          className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                        />
                        <small><b className="text-gray-500"> f</b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b></small>
                      </div>
                    </div>
                  ) : /* 移動速度アップ(27)の場合はテキストボックスを表示 */
                  talent.id === 27 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">+</b>
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
                          className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                        />
                        <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b></small>
                      </div>
                    </div>
                  ) : /* 動きを止める(2)の場合はテキストボックスを表示 */
                  talent.id === 2 ? (
                    <div className="text-right">
                      {/* 能力・効果に動きを止めるがある場合のみテキストボックスを表示 */}
                      {unitData.coreData.forms[actualCurrentForm]?.stats[25] && unitData.coreData.forms[actualCurrentForm]?.stats[25] > 0 ? (
                        <>
                          {/* 確率の範囲が変動する場合のみテキストボックスを表示 */}
                          {talent.data[2] !== talent.data[3] ? (
                            <div className="text-xs mb-1">
                              <b className="text-gray-500">+</b>
                              <input
                                type="number"
                                value={talentFreezeChance}
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  const minValue = talent.data[2];
                                  const maxValue = talent.data[3];
                                  if (value >= minValue && value <= maxValue) {
                                    setTalentFreezeChance(value);
                                  }
                                }}
                                className="w-8 px-1 text-center border border-gray-300 rounded text-xs"
                                min={talent.data[2]}
                                max={talent.data[3]}
                                step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                              />
                              <small><b className="text-gray-500">%</b></small>
                              <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b></small>
                            </div>
                          ) : talent.data[2] !== 0 ? (
                            <div className="text-xs mb-1">
                              <b className="text-gray-500">+{talent.data[2]}%</b>
                            </div>
                          ) : null}
                          {/* フレーム数が0~0の場合は非表示 */}
                          {talent.data[4] !== 0 || talent.data[5] !== 0 ? (
                            <div className="text-xs mb-1">
                              <b className="text-gray-500">
                                +{(talentFreezeDuration/30).toFixed(2)}s{' '}
                                <small className="text-gray-400">( +
                                  <input
                                    type="number"
                                    value={talentFreezeDuration}
                                    onChange={(e) => {
                                      const value = Number(e.target.value);
                                      const minValue = talent.data[4];
                                      const maxValue = talent.data[5];
                                      if (value >= minValue && value <= maxValue) {
                                        setTalentFreezeDuration(value);
                                      }
                                    }}
                                    className="w-6 px-1 text-center border border-gray-300 rounded text-xs text-gray-400"
                                    min={talent.data[4]}
                                    max={talent.data[5]}
                                    step={Math.ceil((talent.data[5]-talent.data[4])/(talent.data[1]-1))}
                                  /> f )
                              </small>
                            </b>
                            <br />
                            <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[4]}~{talent.data[5]})</b></small>
                            </div>
                          ) : null}
                        </>
                      ) : (
                        /* 能力・効果に動きを止めるがない場合は従来のテキスト表示 */
                        (() => {
                          const talentEffect = calculateTalentEffect(talent);
                          return talentEffect;
                        })()
                      )}
                    </div>
                  ) : /* 攻撃力ダウン(1)の場合はテキストボックスを表示 */
                  talent.id === 1 ? (
                    <div className="text-right">
                      {/* 能力・効果に攻撃力ダウンがある場合のみテキストボックスを表示 */}
                      {unitData.coreData.forms[actualCurrentForm]?.stats[37] && unitData.coreData.forms[actualCurrentForm]?.stats[37] > 0 ? (
                        <>
                          {/* 確率の範囲が変動する場合のみテキストボックスを表示 */}
                          {talent.data[2] !== talent.data[3] ? (
                            <div className="text-xs mb-1">
                              <b className="text-gray-500">+</b>
                              <input
                                type="number"
                                value={talentWeakenChance}
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  const minValue = talent.data[2];
                                  const maxValue = talent.data[3];
                                  if (value >= minValue && value <= maxValue) {
                                    setTalentWeakenChance(value);
                                  }
                                }}
                                className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                                min={talent.data[2]}
                                max={talent.data[3]}
                                step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                              />
                              <small><b className="text-gray-500">%</b></small>
                              <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b></small>
                            </div>
                          ) : talent.data[2] !== 0 ? (
                            <div className="text-xs mb-1">
                              <b className="text-gray-500">+{talent.data[2]}%</b>
                            </div>
                          ) : null}
                          <div className="text-xs mb-1">
                            <b className="text-gray-500">
                              +{(talentWeakenDuration/30).toFixed(2)}s{' '}
                              <small className="text-gray-400">( +
                                <input
                                  type="number"
                                  value={talentWeakenDuration}
                                  onChange={(e) => {
                                    const value = Number(e.target.value);
                                    const minValue = talent.data[4];
                                    const maxValue = talent.data[5];
                                    if (value >= minValue && value <= maxValue) {
                                      setTalentWeakenDuration(value);
                                    }
                                  }}
                                  className="w-9 px-1 text-center border border-gray-300 rounded text-xs text-gray-400"
                                  min={talent.data[4]}
                                  max={talent.data[5]}
                                  step={Math.ceil((talent.data[5]-talent.data[4])/(talent.data[1]-1))}
                                /> f )
                              </small>
                            </b>
                            <br />
                            <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[4]}~{talent.data[5]})</b></small>
                          </div>
                        </>
                      ) : (
                        /* 能力・効果に攻撃力ダウンがない場合は従来のテキスト表示 */
                        (() => {
                          const talentEffect = calculateTalentEffect(talent);
                          return talentEffect;
                        })()
                      )}
                    </div>
                  ) : /* 動きを遅くする(3)の場合はテキストボックスを表示 */
                  talent.id === 3 ? (
                    <div className="text-right">
                      {/* 確率の範囲が変動する場合のみテキストボックスを表示 */}
                      {talent.data[2] !== talent.data[3] ? (
                        <span className="text-xs mb-1">
                          <b className="text-gray-500">+</b>
                          <input
                            type="number"
                            value={talentSlowChance}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              const minValue = talent.data[2];
                              const maxValue = talent.data[3];
                              if (value >= minValue && value <= maxValue) {
                                setTalentSlowChance(value);
                              }
                            }}
                            className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                            min={talent.data[2]}
                            max={talent.data[3]}
                            step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                          />
                          <small><b className="text-gray-500">%</b></small>
                          <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b>{' '}</small>
                        </span>
                      ) : talent.data[2] !== 0 ? (
                        <span className="text-xs mb-1">
                          <b className="text-gray-500">+{talent.data[2]}%{' '}</b>
                        </span>
                      ) : null}
                      {/* フレーム数が0~0の場合は非表示 */}
                      {talent.data[4] !== 0 || talent.data[5] !== 0 ? (
                        <span className="text-xs mb-1">
                          <b className="text-gray-500">
                            +{(talentSlowDuration/30).toFixed(2)}s{' '}
                            <small className="text-gray-400">( +
                              <input
                                type="number"
                                value={talentSlowDuration}
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  const minValue = talent.data[4];
                                  const maxValue = talent.data[5];
                                  if (value >= minValue && value <= maxValue) {
                                    setTalentSlowDuration(value);
                                  }
                                }}
                                className="w-9 px-1 text-center border border-gray-300 rounded text-xs text-gray-400"
                                min={talent.data[4]}
                                max={talent.data[5]}
                                step={Math.ceil((talent.data[5]-talent.data[4])/(talent.data[1]-1))}
                              /> f )
                            </small>
                          </b>
                          <br />
                          <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[4]}~{talent.data[5]})</b></small>
                        </span>
                      ) : null}
                    </div>
                  ) : /* ふっとばす(8)の場合はテキストボックスを表示 */
                  talent.id === 8 ? (
                    <div className="text-right">
                      {/* 能力・効果にふっとばすがある場合のみテキストボックスを表示 */}
                      {unitData.coreData.forms[actualCurrentForm]?.stats[24] && unitData.coreData.forms[actualCurrentForm]?.stats[24] > 0 ? (
                        /* 確率の範囲が変動する場合のみテキストボックスを表示 */
                        talent.data[2] !== talent.data[3] ? (
                          <div className="text-xs mb-1">
                            <b className="text-gray-500">+</b>
                            <input
                              type="number"
                              value={talentKnockbackChance}
                              onChange={(e) => {
                                const value = Number(e.target.value);
                                const minValue = talent.data[2];
                                const maxValue = talent.data[3];
                                if (value >= minValue && value <= maxValue) {
                                  setTalentKnockbackChance(value);
                                }
                              }}
                              className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                              min={talent.data[2]}
                              max={talent.data[3]}
                              step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                            />
                            <small><b className="text-gray-500">%</b></small>
                            <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b></small>
                          </div>
                        ) : talent.data[2] !== 0 ? (
                          <div className="text-xs mb-1">
                            <b className="text-gray-500">+{talent.data[2]}%</b>
                          </div>
                        ) : null
                      ) : (
                        /* 能力・効果にふっとばすがない場合は従来のテキスト表示 */
                        (() => {
                          const talentEffect = calculateTalentEffect(talent);
                          return talentEffect;
                        })()
                      )}
                    </div>
                  ) : /* クリティカル(13)の場合はテキストボックスを表示 */
                  talent.id === 13 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">+</b>
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
                          className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                          min={talent.data[2]}
                          max={talent.data[3]}
                          step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                        />
                        <small><b className="text-gray-500">% </b></small>
                        <small className="text-gray-400" style={{fontSize: '10px'}}>({talent.data[2]}~{talent.data[3]})</small>
                      </div>
                    </div>
                  ) : /* 打たれ強い(6)の場合は計算結果を表示 */
                  talent.id === 6 ? (
                    <div className="text-right">
                      <br />
                      <div className="text-xs">
                        <small className="text-blue-500"><b>体力(換算値)</b></small> <b className={totalHpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{Math.floor(currentHp / (hasOnlyRelicAkuTough ? 0.25 : talentToughnessValue)).toLocaleString()}</b>
                      </div>
                    </div>
                  ) : /* めっぽう強い(5)の場合は計算結果を表示 */
                  talent.id === 5 ? (
                    <div className="text-right">
                      <br />
                      <div className="text-xs">
                        <small className="text-red-500"><b>攻撃力</b></small> <b className="text-gray-500">{Math.floor(currentAp * (hasOnlyRelicAkuTalent ? 1.5 : talentMightyApValue)).toLocaleString()}</b>
                      </div>
                      <div className="text-xs">
                        <small className="text-blue-500"><b>体力(換算値)</b></small> <b className="text-gray-500">{Math.floor(currentHp / (hasOnlyRelicAkuTalent ? 0.5 : talentMightyDmgValue)).toLocaleString()}</b>
                      </div>
                    </div>
                  ) : /* 渾身の一撃(50)の場合は能力・効果と同じ表示 */
                  talent.id === 50 ? (
                    <div className="text-right">
                      <div className="text-xs mb-1">
                        <b className="text-gray-500">+{talent.data[2]}~{talent.data[3]}</b>
                        <small><b className="text-gray-500">%</b></small>
                        <small className="text-gray-400"> (+{Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}%/Lv) </small>
                        <br />
                        <span className="text-red-500"><small><b>攻撃力</b></small></span><b className="text-gray-500">+200</b><small><b className="text-gray-500">%</b> </small>
                        {(() => {
                          // 基本APの3倍値を計算（攻撃力アップを適用）
                          let savageValues: React.ReactNode;
                          if (currentAp && totalAttackMultiplier) {
                            const calculatedAp = currentAp / totalAttackMultiplier; // 元の攻撃力に戻す
                            const savageAP = Math.floor(calculatedAp * totalAttackMultiplier * 3);
                            const isEnhanced = totalAttackMultiplier > 1;
                            savageValues = <b className={isEnhanced ? "text-red-500" : "text-gray-500"}>{savageAP.toLocaleString()}</b>;
                          }
                          return savageValues;
                        })()}
                      </div>
                    </div>
                  ) : /* バリアブレイカー(15)の場合はテキストボックスを表示 */
                  talent.id === 15 ? (
                    <div className="text-right">
                      {/* 能力・効果にバリアブレイカーがある場合のみテキストボックスを表示 */}
                      {unitData.coreData.forms[actualCurrentForm]?.stats[70] && unitData.coreData.forms[actualCurrentForm]?.stats[70] > 0 ? (
                        /* 確率の範囲が変動する場合のみテキストボックスを表示 */
                        talent.data[2] !== talent.data[3] ? (
                          <div className="text-xs mb-1">
                            <b className="text-gray-500">+</b>
                            <input
                              type="number"
                              value={talentBarrierBreakerChance}
                              onChange={(e) => {
                                const value = Number(e.target.value);
                                const minValue = talent.data[2];
                                const maxValue = talent.data[3];
                                if (value >= minValue && value <= maxValue) {
                                  setTalentBarrierBreakerChance(value);
                                }
                              }}
                              className="w-9 px-1 text-center border border-gray-300 rounded text-xs"
                              min={talent.data[2]}
                              max={talent.data[3]}
                              step={Math.ceil((talent.data[3]-talent.data[2])/(talent.data[1]-1))}
                            />
                            <small><b className="text-gray-500">%</b></small>
                            <small className="text-gray-400" style={{fontSize: '10px'}}> <b>({talent.data[2]}~{talent.data[3]})</b></small>
                          </div>
                        ) : talent.data[2] !== 0 ? (
                          <div className="text-xs mb-1">
                            <b className="text-gray-500">+{talent.data[2]}%</b>
                          </div>
                        ) : null
                      ) : (
                        /* 能力・効果にバリアブレイカーがない場合は従来のテキスト表示 */
                        (() => {
                          const talentEffect = calculateTalentEffect(talent);
                          return talentEffect;
                        })()
                      )}
                    </div>
                  ) : /* 撃破時お金アップ(16)の場合は+100%を表示 */
                  talent.id === 16 ? (
                    <div className="text-right">
                      <div className="text-xs">
                        <b className="text-gray-500">+100%</b>
                      </div>
                    </div>
                  ) : /* 超ダメージ(7)の場合は計算結果を表示 */
                  talent.id === 7 ? (
                    <div className="text-right">
                      <br />
                      <div className="text-xs">
                        <small className="text-red-500"><b>攻撃力</b></small> <b className="text-gray-500">{Math.floor(currentAp * (hasOnlyRelicAkuMassiveDamage ? 3 : talentMassiveDamageMultiplier)).toLocaleString()}</b>
                      </div>
                    </div>
                  ) : /* 超生命体特効(63)の場合は計算結果を表示 */
                  talent.id === 63 ? (
                    <div className="text-right">
                      <br />
                      <div className="text-xs">
                        <small className="text-red-500"><b>攻撃力</b></small> <b className={totalAttackMultiplier > 1 ? "text-red-500" : "text-gray-500"}>{Math.floor(currentAp * 1.6).toLocaleString()}</b>
                      </div>
                      <div className="text-xs">
                        <small className="text-blue-500"><b>体力(換算値)</b></small> <b className={totalHpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{Math.floor(currentHp / 0.7).toLocaleString()}</b>
                      </div>
                    </div>
                  ) : /* 超獣特効(64)の場合は計算結果を表示 */
                  talent.id === 64 ? (
                    <div className="text-right">
                      <br />
                      <div className="text-xs">
                        <small className="text-red-500"><b>攻撃力</b></small> <b className={totalAttackMultiplier > 1 ? "text-red-500" : "text-gray-500"}>{Math.floor(currentAp * 2.5).toLocaleString()}</b>
                      </div>
                      <div className="text-xs">
                        <small className="text-blue-500"><b>体力(換算値)</b></small> <b className={totalHpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{Math.floor(currentHp / 0.6).toLocaleString()}</b>
                      </div>
                    </div>
                  ) : /* 超賢者特効(66)の場合は計算結果を表示 */
                  talent.id === 66 ? (
                    <div className="text-right">
                      <br />
                      <div className="text-xs">
                        <small className="text-red-500"><b>攻撃力</b></small> <b className={totalAttackMultiplier > 1 ? "text-red-500" : "text-gray-500"}>{Math.floor(currentAp * 1.2).toLocaleString()}</b>
                      </div>
                      <div className="text-xs">
                        <small className="text-blue-500"><b>体力(換算値)</b></small> <b className={totalHpMultiplier > 1 ? "text-blue-500" : "text-gray-500"}>{Math.floor(currentHp / 0.5).toLocaleString()}</b>
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
                          talent.id === 38 ? 'traitTraitless' :
                          talent.id === 39 ? 'traitZombie' :
                          talent.id === 40 ? 'traitRelic' :
                          talent.id === 41 ? 'traitTraitless' :
                          talent.id === 43 ? 'traitTraitless' :
                          talent.id === 57 ? 'traitAku' : 'traitTraitless'
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
