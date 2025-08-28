// Common unit types and calculation functions

export interface UnitForm {
  readonly formId: number;
  readonly name: string;
  readonly stats: readonly number[];
  readonly animLength?: number;
}

export interface UnitRarity {
  readonly id: number;
  readonly name: string;
  readonly maxLevels: readonly [number, number];
}

export interface UnitTalent {
  readonly id: number;
  readonly name: string;
  readonly type: 'normal' | 'ultra';
  readonly data: readonly number[];
  readonly npCost: number;
  readonly isTotal: boolean;
}

export interface UnitData {
  readonly unitId: number;
  readonly sortKey?: number;
  readonly isLimited?: boolean;
  readonly isSeasonal?: boolean;
  readonly coreData: {
    readonly forms: readonly UnitForm[];
    readonly rarity: UnitRarity;
    readonly levelRates: readonly number[];
  };
  readonly auxiliaryData: {
    readonly names: readonly (string | null)[];
    readonly talents: {
      readonly hasTalents: boolean;
      readonly hasUltra: boolean;
      readonly talentList: readonly UnitTalent[];
    };
  };
}

// フォーム数を適切に決定する関数
export const getValidFormCount = (unitData: UnitData): number => {
  const maxForms = Math.min(unitData.coreData.forms.length, unitData.auxiliaryData.names.length, 4);
  
  // フォーム名が適切でない場合や、auxiliaryDataの名前が不足している場合はフォーム数を制限
  for (let i = 0; i < maxForms; i++) {
    const form = unitData.coreData.forms[i];
    const auxName = unitData.auxiliaryData.names[i];
    
    // フォーム名が仮の名前（"Form X"形式）、空文字列、またはauxiliaryDataの名前がない場合
    if (!form || 
        !form.name || 
        form.name.match(/^Form \d+$/) || 
        form.name.trim() === '' ||
        !auxName ||
        auxName.trim() === '') {
      return i;
    }
  }
  
  return maxForms;
};

export interface CalculatedStats {
  readonly hp: number;
  readonly ap: number;
  readonly dps: number;
  readonly range: number;
  readonly speed: number;
  readonly cost: number;
  readonly recharge: number;
  readonly attackType: 'single' | 'area';
  readonly multihit: boolean;
  readonly kb: number;
  readonly freq: number;
  readonly foreswing: number;
  readonly backswing: number;
  readonly tba: number;
  readonly frames: readonly number[];
  readonly atk1?: number;
  readonly atk2?: number;
  readonly atk3?: number;
}

export interface UnitAbility {
  readonly name: string | React.ReactNode;
  readonly value: string | React.ReactNode;
  readonly iconKeys?: string[];
  readonly isDynamic?: boolean;
  readonly baseAP?: number;
  readonly calculatedStats?: CalculatedStats;
  readonly enhanced?: boolean;
}

// Calculation functions
export const calcStat = (
  base: number,
  m: number = 60,
  p: number = 80,
  level: number = 30,
  treasure: number = 300
): number => {
  const mult = 1 + 0.5 * Math.floor(treasure / 100);
  if (level > p) {
    return Math.floor(Math.round(base * ((m + 4) / 5 + (p - m) / 10 + (level - p) / 20)) * mult);
  } else if (level > m) {
    return Math.floor(Math.round(base * ((m + 4) / 5 + (level - m) / 10)) * mult);
  }
  return Math.floor(Math.round(base * (4 + level) / 5) * mult);
};

export const frameToSecond = (frames: number, round: boolean = true): number => {
  const s = frames / 30;
  return round ? (Number.isInteger(s) ? s : Math.round(s * 100) / 100) : s;
};

// アニメーション長を取得する関数
const getAnimLength = (form: UnitForm): number => {
  // フォームにanimLengthが定義されている場合はそれを使用
  if (form.animLength) {
    return form.animLength;
  }
  
  // デフォルト値
  return 30;
};

// Growth rates calculation
export const getReduction = (levelRates: readonly number[], totalLevel: number): [number, number] => {
  const maxSegments = Math.floor(totalLevel / 10);
  const growth = [...levelRates.slice(0, maxSegments)];
  const redPts: number[] = [];

  while (growth.length > 0) {
    const count = growth.filter(x => x === growth[0]).length;
    redPts.push(count * 10);
    growth.splice(0, count);
  }

  if (redPts.length === 1) {
    redPts.push(totalLevel);
  } else {
    redPts[1] += redPts[0];
  }

  return [redPts[0], redPts[1]];
};

export const calculateUnitStats = (
  unitData: UnitData,
  formId: number,
  level: number,
  plusLevel: number,
  attackIntervalReductionMultiplier: number = 1
): CalculatedStats => {
  const form = unitData.coreData.forms[formId];
  if (!form) throw new Error(`Invalid form ID: ${formId}`);

  const stats = form.stats;
  const totalLevel = level + plusLevel;
  const maxLevel = unitData.coreData.rarity.maxLevels[0] + unitData.coreData.rarity.maxLevels[1];
  const [m, p] = getReduction(unitData.coreData.levelRates, maxLevel);

  // Basic stats
  const hp = Math.floor(calcStat(stats[0] || 0, m, p, totalLevel));
  const kb = stats[1] || 0;
  const speed = stats[2] || 0;
  const ap_base = stats[3] || 0;
  const tba_original = (stats[4] || 0) * 2;
  // 攻撃間隔短縮を適用
  const tba = Math.round(tba_original * attackIntervalReductionMultiplier);
  const range = stats[5] || 0;
  const cost = Math.floor((stats[6] || 0) * 1.5);
  const recharge_raw = (stats[7] || 0) * 2;
  const foreswing = stats[13] || 0;

  // Attack power calculation
  let ap = Math.floor(calcStat(ap_base, m, p, totalLevel));
  let atk1 = ap;
  let atk2 = 0;
  let atk3 = 0;

  // Multi-hit attack
  const multihit = (stats[59] || 0) > 0;
  if (multihit) {
    atk1 = Math.floor(calcStat(ap_base, m, p, totalLevel));
    atk2 = Math.floor(calcStat(stats[59] || 0, m, p, totalLevel));
    atk3 = Math.floor(calcStat(stats[60] || 0, m, p, totalLevel));
    ap = atk1 + atk2 + atk3;
  }

  // Animation length calculation
  const animLength = getAnimLength(form);
  let backswing: number;
  let frames: number[];

  // フレーム配列の計算
  if (multihit) {
    const atk2 = stats[59] || 0;
    const atk3 = stats[60] || 0;
    
    if (atk2 > 0 && atk3 === 0 && stats[61]) {
      // 2段攻撃: [pre, foreswing, f2, backswing]
      const f2 = stats[61] - foreswing;
      backswing = animLength - stats[61];
      const pre = Math.max(0, tba - backswing - 1);
      frames = [pre, foreswing, f2, backswing];
    } else if (atk2 > 0 && atk3 > 0 && stats[61] && stats[62]) {
      // 3段攻撃: [pre, foreswing, f2, f3, backswing]
      const f2 = stats[61] - foreswing;
      const f3 = stats[62] - stats[61];
      backswing = animLength - stats[62];
      const pre = Math.max(0, tba - backswing - 1);
      frames = [pre, foreswing, f2, f3, backswing];
    } else {
      // フォールバック
      backswing = animLength - foreswing;
      const pre = Math.max(0, tba - backswing - 1);
      frames = [pre, foreswing, backswing];
    }
  } else {
    // 単段攻撃: [pre, foreswing, backswing]
    backswing = animLength - foreswing;
    const pre = Math.max(0, tba - backswing - 1);
    frames = [pre, foreswing, backswing];
  }
  
  // TBA=0の場合はpreフレームを0に修正
  if (tba === 0) {
    frames[0] = 0;
  }
  
  // 攻撃頻度はフレーム配列の合計
  const freq = frames.reduce((sum, frame) => sum + frame, 0);

  // DPS calculation (stat.py参考)
  const dps = freq > 0 ? Math.round(ap / freq * 30 * 100) / 100 : 0;

  // Recharge time
  const recharge_actual = recharge_raw < 162 ? 60 : recharge_raw - 264;
  const recharge = frameToSecond(recharge_actual);

  // Attack type
  const attackType = (stats[12] || 0) === 1 ? 'area' : 'single';

  return {
    hp,
    ap,
    dps,
    range,
    speed,
    cost,
    recharge,
    attackType,
    multihit,
    kb,
    freq,
    foreswing,
    backswing,
    tba,
    frames,
    atk1: multihit ? atk1 : undefined,
    atk2: multihit && atk2 > 0 ? atk2 : undefined,
    atk3: multihit && atk3 > 0 ? atk3 : undefined
  };
};

export const getAbilities = (
  unitData: UnitData, 
  formId: number, 
  level: number = 30, 
  plusLevel: number = 0, 
  attackUpMultiplier: number = 1, 
  hpUpMultiplier: number = 1, 
  talentCriticalBonus: number = 0, 
  talentFreezeBonus: { chance: number; duration: number } = { chance: 0, duration: 0 }, 
  talentWeakenBonus: { chance: number; duration: number } = { chance: 0, duration: 0 }, 
  talentSlowBonus: { chance: number; duration: number } = { chance: 0, duration: 0 }, 
  talentKnockbackBonus: { chance: number } = { chance: 0 }, 
  talentBarrierBreakerBonus: { chance: number } = { chance: 0 },
  dynamicMultipliers?: {
    mightyAp?: number;
    massiveDamage?: number;
    extremeDamage?: number;
  },
  includeInstincts: boolean = false
): UnitAbility[] => {
  const form = unitData.coreData.forms[formId];
  if (!form) return [];

  const stats = form.stats;
  const abilities: UnitAbility[] = [];
  
  // レベル補正済みの計算ステータスを取得
  const calculatedStats = calculateUnitStats(unitData, formId, level, plusLevel);
  const enhancedStats = {
    ...calculatedStats,
    hp: Math.floor(calculatedStats.hp * hpUpMultiplier)
  };

  // 攻撃対象限定の判定
  const targets: Array<{name: string, iconKey: string}> = [];
  const targetIndices = [10, 16, 17, 18, 20, 21, 22, 78, 96, 19];
  const targetData = [
    {name: '赤い敵', iconKey: 'traitRed'},
    {name: '浮いてる敵', iconKey: 'traitFloating'},
    {name: '黒い敵', iconKey: 'traitBlack'},
    {name: 'メタルな敵', iconKey: 'traitMetal'},
    {name: '天使', iconKey: 'traitAngel'},
    {name: 'エイリアン', iconKey: 'traitAlien'},
    {name: 'ゾンビ', iconKey: 'traitZombie'},
    {name: '古代種', iconKey: 'traitRelic'},
    {name: '悪魔', iconKey: 'traitAku'},
    {name: '属性を持たない敵', iconKey: 'traitTraitless'}
  ];

  targetIndices.forEach((index, i) => {
    if (stats[index] && stats[index] !== 0 && stats[index] !== -1) {
      targets.push(targetData[i]);
    }
  });

  // 攻撃ターゲット限定がない場合のみターゲット属性を表示
  if (targets.length > 0 && !(stats[32] && stats[32] > 0)) {
    abilities.push({
      name: "ターゲット属性",
      value: targets.map(t => t.name).join(' '),
      iconKeys: targets.map(t => t.iconKey)
    });
  }

  // 攻撃ターゲット限定
  if (stats[32] && stats[32] > 0) {
    abilities.push({
      name: "攻撃ターゲット限定",
      value: targets.map(t => t.name).join(' '),
      iconKeys: targets.map(t => t.iconKey)
    });
  }

  // 多段攻撃
  const multihit = (stats[59] || 0) > 0;
  if (multihit) {
    const hit1_time = stats[13] || 0; // 第一攻撃: foreswing
    const hit2_time = stats[61] || 0; // 第二攻撃の絶対時間
    const hit3_time = stats[62] || 0; // 第三攻撃の絶対時間
    
    const hit2_ap = stats[59] || 0; // 第二攻撃力
    const hit3_ap = stats[60] || 0; // 第三攻撃力
    
    const timings = [
      <>
        <b className="text-gray-500">{frameToSecond(hit1_time).toFixed(2)}s <small className="text-gray-400"><b>({hit1_time}f)</b></small></b>
      </>
    ];
    
    if (hit2_ap > 0) {
      timings.push(
        <>
          <b className="text-gray-500"> / {frameToSecond(hit2_time).toFixed(2)}s <small className="text-gray-400"><b>({hit2_time}f)</b></small></b>
        </>
      );
    }
    
    if (hit3_ap > 0) {
      timings.push(
        <>
          <b className="text-gray-500"> / {frameToSecond(hit3_time).toFixed(2)}s <small className="text-gray-400"><b>({hit3_time}f)</b></small></b>
        </>
      );
    }
    
    abilities.push({
      name: "多段攻撃",
      value: (
        <>
          {timings.map((timing, index) => (
            <span key={index}>{timing}</span>
          ))}
        </>
      )
    });
  }

  // 遠方攻撃・全方位攻撃
  if (stats[44] && stats[44] !== 0) {
    const ranges: string[] = [];
    
    // 多段攻撃で複数の範囲がある場合
    if (multihit && stats.length > 100 && stats[100]) {
      // 1段目の範囲
      const rng1_1 = stats[44] || 0;
      const rng1_2 = rng1_1 + (stats[45] || 0);
      if ((stats[45] || 0) > 0) {
        ranges.push(`${rng1_1}~${rng1_2}`);
      } else {
        ranges.push(`${rng1_2}~${rng1_1}`);
      }
      
      // 2段目の範囲
      const rng2_1 = stats[100] || 0;
      const rng2_2 = rng2_1 + (stats[101] || 0);
      if ((stats[101] || 0) > 0) {
        ranges.push(`/ ${rng2_1}~${rng2_2}`);
      } else {
        ranges.push(`/ ${rng2_2}~${rng2_1}`);
      }
      
      // 3段目の範囲（存在する場合）
      if (stats.length > 104 && stats[103]) {
        const rng3_1 = stats[103] || 0;
        const rng3_2 = rng3_1 + (stats[104] || 0);
        if ((stats[104] || 0) > 0) {
          ranges.push(`/ ${rng3_1}~${rng3_2}`);
        } else {
          ranges.push(`/ ${rng3_2}~${rng3_1}`);
        }
      }
    } else {
      // 単段攻撃または多段攻撃でも範囲が1つの場合
      const rng1 = stats[44] || 0;
      const rng2 = rng1 + (stats[45] || 0);
      if ((stats[45] || 0) > 0) {
        ranges.push(`${rng1}~${rng2}`);
      } else {
        ranges.push(`${rng2}~${rng1}`);
      }
    }
    
    const attackType = (stats[45] || 0) > 0 ? '遠方攻撃' : '全方位攻撃';
    const rangeInfo = ranges.length > 1 ? `${ranges.join(' ')}` : ranges.join(' ');

    abilities.push({
      name: attackType,
      value: <b className="text-gray-500">{rangeInfo}</b>,
      iconKeys: attackType === '遠方攻撃' ? ['abilityLongDistance'] : attackType === '全方位攻撃' ? ['abilityOmniStrike'] : undefined
    });
  }

  // 超ダメージ
  if (stats[30] && stats[30] > 0) {
    abilities.push({
      name: "超ダメージ",
      value: targets.map(t => t.name).join(' '),
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: targets.map(t => t.iconKey)
    });
  }

  // 極ダメージ
  if (stats[81] && stats[81] > 0) {
    const extremeDamageTargets: Array<{name: string, iconKey: string}> = [];
    
    // Check for red targeting (stats[10])
    if (stats[10] && stats[10] !== 0 && stats[10] !== -1) {
      extremeDamageTargets.push({name: '赤い敵', iconKey: 'traitRed'});
    }
    
    // Check for floating targeting (stats[16])
    if (stats[16] && stats[16] !== 0 && stats[16] !== -1) {
      extremeDamageTargets.push({name: '浮いてる敵', iconKey: 'traitFloating'});
    }
    
    // Check for black targeting (stats[17])
    if (stats[17] && stats[17] !== 0 && stats[17] !== -1) {
      extremeDamageTargets.push({name: '黒い敵', iconKey: 'traitBlack'});
    }
    
    // Check for metal targeting (stats[18])
    if (stats[18] && stats[18] !== 0 && stats[18] !== -1) {
      extremeDamageTargets.push({name: 'メタル', iconKey: 'traitMetal'});
    }
    
    // Check for angel targeting (stats[20])
    if (stats[20] && stats[20] !== 0 && stats[20] !== -1) {
      extremeDamageTargets.push({name: '天使', iconKey: 'traitAngel'});
    }
    
    // Check for alien targeting (stats[21])
    if (stats[21] && stats[21] !== 0 && stats[21] !== -1) {
      extremeDamageTargets.push({name: 'エイリアン', iconKey: 'traitAlien'});
    }
    
    // Check for zombie targeting (stats[22])
    if (stats[22] && stats[22] !== 0 && stats[22] !== -1) {
      extremeDamageTargets.push({name: 'ゾンビ', iconKey: 'traitZombie'});
    }
    
    // Check for traitless targeting (stats[19])
    if (stats[19] && stats[19] !== 0 && stats[19] !== -1) {
      extremeDamageTargets.push({name: '属性を持たない敵', iconKey: 'traitTraitless'});
    }
    
    // Check for relic targeting (stats[78])
    if (stats[78] && stats[78] !== 0 && stats[78] !== -1) {
      extremeDamageTargets.push({name: '古代種', iconKey: 'traitRelic'});
    }
    
    // Check for aku targeting (stats[96])
    if (stats[96] && stats[96] !== 0 && stats[96] !== -1) {
      extremeDamageTargets.push({name: '悪魔', iconKey: 'traitAku'});
    }
    
    // Check for behemoth targeting (stats[105]) - 超獣は判定対象から除外
    // if (stats[105] && stats[105] !== 0 && stats[105] !== -1) {
    //   extremeDamageTargets.push({name: '超獣', iconKey: 'traitBehemoth'});
    // }
    
    abilities.push({
      name: "極ダメージ",
      value: extremeDamageTargets.map(t => t.name).join(' '),
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: extremeDamageTargets.map(t => t.iconKey)
    });
  }

  // めっぽう強い
  if (stats[23] && stats[23] > 0) {
    
    const mightyTargets: Array<{name: string, iconKey: string}> = [];
    
    // Check for red targeting (stats[10])
    if (stats[10] && stats[10] !== 0 && stats[10] !== -1) {
      mightyTargets.push({name: '赤い敵', iconKey: 'traitRed'});
    }
    
    // Check for floating targeting (stats[16])
    if (stats[16] && stats[16] !== 0 && stats[16] !== -1) {
      mightyTargets.push({name: '浮いてる敵', iconKey: 'traitFloating'});
    }
    
    // Check for black targeting (stats[17])
    if (stats[17] && stats[17] !== 0 && stats[17] !== -1) {
      mightyTargets.push({name: '黒い敵', iconKey: 'traitBlack'});
    }
    
    // Check for metal targeting (stats[18])
    if (stats[18] && stats[18] !== 0 && stats[18] !== -1) {
      mightyTargets.push({name: 'メタル', iconKey: 'traitMetal'});
    }
    
    // Check for traitless targeting (stats[19])
    if (stats[19] && stats[19] !== 0 && stats[19] !== -1) {
      mightyTargets.push({name: '属性を持たない敵', iconKey: 'traitTraitless'});
    }
    
    // Check for angel targeting (stats[20])
    if (stats[20] && stats[20] !== 0 && stats[20] !== -1) {
      mightyTargets.push({name: '天使', iconKey: 'traitAngel'});
    }
    
    // Check for alien targeting (stats[21])
    if (stats[21] && stats[21] !== 0 && stats[21] !== -1) {
      mightyTargets.push({name: 'エイリアン', iconKey: 'traitAlien'});
    }
    
    // Check for zombie targeting (stats[22])
    if (stats[22] && stats[22] !== 0 && stats[22] !== -1) {
      mightyTargets.push({name: 'ゾンビ', iconKey: 'traitZombie'});
    }
    
    // Check for ancient targeting (stats[78])
    if (stats[78] && stats[78] !== 0 && stats[78] !== -1) {
      mightyTargets.push({name: '古代種', iconKey: 'traitRelic'});
    }
    
    // Check for demon targeting (stats[96])
    if (stats[96] && stats[96] !== 0 && stats[96] !== -1) {
      mightyTargets.push({name: '悪魔', iconKey: 'traitAku'});
    }
    
    // Check for behemoth targeting (stats[105]) - 超獣は判定対象から除外
    // if (stats[105] && stats[105] !== 0 && stats[105] !== -1) {
    //   mightyTargets.push({name: '超獣', iconKey: 'traitBehemoth'});
    // }
    
    
    abilities.push({
      name: "めっぽう強い",
      value: mightyTargets.map(t => t.name).join(' '),
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: mightyTargets.map(t => t.iconKey)
    });
  }

  // 渾身の一撃
  if (stats[82] && stats[82] > 0) {
    const chance = stats[82];
    
    // ターゲット属性が「古のみ」「悪のみ」「属性を持たない敵のみ」「古と悪のみ」「古と属性を持たない敵のみ」「悪と属性を持たない敵のみ」「古と悪と属性を持たない敵のみ」の場合の判定
    const isRelicAkuTraitlessOnly = (() => {
      if (targets.length === 0) return false;
      
      const hasRelicIcon = targets.some(target => target.iconKey === 'traitRelic');
      const hasAkuIcon = targets.some(target => target.iconKey === 'traitAku');
      const hasTraitlessIcon = targets.some(target => target.iconKey === 'traitTraitless');
      const hasOtherTraitIcons = targets.some(target => 
        target.iconKey !== 'traitRelic' && target.iconKey !== 'traitAku' && target.iconKey !== 'traitTraitless' && target.iconKey !== 'traitBehemoth'
      );
      
      // 古・悪・属性を持たない敵以外の属性が一つでもあれば、false を返す
      if (hasOtherTraitIcons) {
        return false;
      } else {
        // 古のみ、悪のみ、属性を持たない敵のみ、または古と悪と属性を持たない敵の組み合わせの場合のみtrue
        return (hasRelicIcon || hasAkuIcon || hasTraitlessIcon);
      }
    })();
    
    // 基本APの3倍値を計算（攻撃力アップを適用）
    let savageValues: React.ReactNode;
    
    // めっぽう強い・超ダメージ・極ダメージがあるかチェック
    const hasMighty = stats[23] && stats[23] > 0;
    const hasAdditionalDamage = (stats[30] && stats[30] > 0) || (stats[81] && stats[81] > 0);
    
    // めっぽう強いの倍率を決定
    let mightyMultiplier = 1;
    if (hasMighty) {
      mightyMultiplier = isRelicAkuTraitlessOnly ? 1.5 : (dynamicMultipliers?.mightyAp ?? 1.8);
    }
    
    if (calculatedStats.multihit) {
      const hit1_3x = calculatedStats.atk1 ? Math.round(calculatedStats.atk1 * attackUpMultiplier * 3 * mightyMultiplier) : 0;
      const hit2_3x = calculatedStats.atk2 ? Math.round(calculatedStats.atk2 * attackUpMultiplier * 3 * mightyMultiplier) : 0;
      const hit3_3x = calculatedStats.atk3 ? Math.round(calculatedStats.atk3 * attackUpMultiplier * 3 * mightyMultiplier) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
      const values = [hit1_3x, hit2_3x, hit3_3x].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
      const tilde = hasAdditionalDamage ? ' ~' : '';
      savageValues = <span dangerouslySetInnerHTML={{ __html: `${values.join(' / ')}${tilde}` }} />;
    } else {
      const savageAP = Math.round(calculatedStats.ap * attackUpMultiplier * 3 * mightyMultiplier);
      const isEnhanced = attackUpMultiplier > 1;
      const tilde = hasAdditionalDamage ? ' ~' : '';
      savageValues = (
        <>
          <b className={isEnhanced ? "text-red-500" : "text-gray-500"}>{savageAP.toLocaleString()}</b>
          {tilde}
        </>
      );
    }
    
    // 超ダメージ・極ダメージがある場合の追加表示
    let additionalValues: React.ReactNode = null;
    
    // 超ダメージがある場合
    if (stats[30] && stats[30] > 0) {
      // 古悪限定の場合は3倍、通常はdynamicMultipliersまたは4倍を適用
      const massiveMultiplier = isRelicAkuTraitlessOnly ? 3 : (dynamicMultipliers?.massiveDamage ?? 4);
      const totalMultiplier = 3 * massiveMultiplier * mightyMultiplier; // 基本3倍 × 超ダメージ倍率 × めっぽう強い倍率
      
      if (calculatedStats.multihit) {
        const hit1_max = calculatedStats.atk1 ? Math.round(calculatedStats.atk1 * attackUpMultiplier * totalMultiplier) : 0;
        const hit2_max = calculatedStats.atk2 ? Math.round(calculatedStats.atk2 * attackUpMultiplier * totalMultiplier) : 0;
        const hit3_max = calculatedStats.atk3 ? Math.round(calculatedStats.atk3 * attackUpMultiplier * totalMultiplier) : 0;
        
        const isEnhanced = attackUpMultiplier > 1;
        const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
        const superValues = [hit1_max, hit2_max, hit3_max].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
        additionalValues = (
          <>
            <br />
            <span dangerouslySetInnerHTML={{ __html: superValues.join(' / ') }} />
          </>
        );
      } else {
        const superAP = Math.round(calculatedStats.ap * attackUpMultiplier * totalMultiplier);
        const isEnhanced = attackUpMultiplier > 1;
        additionalValues = (
          <>
            <br />
            <b className={isEnhanced ? "text-red-500" : "text-gray-500"}>{superAP.toLocaleString()}</b>
          </>
        );
      }
    }
    
    // 極ダメージがある場合
    if (stats[81] && stats[81] > 0) {
      // 古悪限定の場合は5倍、通常はdynamicMultipliersまたは6倍を適用
      const extremeMultiplier = isRelicAkuTraitlessOnly ? 5 : (dynamicMultipliers?.extremeDamage ?? 6);
      const totalMultiplier = 3 * extremeMultiplier * mightyMultiplier; // 基本3倍 × 極ダメージ倍率 × めっぽう強い倍率
      
      if (calculatedStats.multihit) {
        const hit1_max = calculatedStats.atk1 ? Math.round(calculatedStats.atk1 * attackUpMultiplier * totalMultiplier) : 0;
        const hit2_max = calculatedStats.atk2 ? Math.round(calculatedStats.atk2 * attackUpMultiplier * totalMultiplier) : 0;
        const hit3_max = calculatedStats.atk3 ? Math.round(calculatedStats.atk3 * attackUpMultiplier * totalMultiplier) : 0;
        
        const isEnhanced = attackUpMultiplier > 1;
        const colorClass = isEnhanced ? 'color: red;' : 'color: rgb(107, 114, 128);';
        const extremeValues = [hit1_max, hit2_max, hit3_max].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
        additionalValues = (
          <>
            <br />
            <span dangerouslySetInnerHTML={{ __html: extremeValues.join(' / ') }} />
          </>
        );
      } else {
        const extremeAP = Math.round(calculatedStats.ap * attackUpMultiplier * totalMultiplier);
        const isEnhanced = attackUpMultiplier > 1;
        additionalValues = (
          <>
            <br />
            <b className={isEnhanced ? "text-red-500" : "text-gray-500"}>{extremeAP.toLocaleString()}</b>
          </>
        );
      }
    }
    
    abilities.push({
      name: "渾身の一撃",
      value: (
        <>
          <span className="text-red-500"><b className="text-gray-500">{chance}</b><small><b className="text-gray-500">%</b></small> <small><b>攻撃力</b></small></span><b className="text-gray-500">+200</b><small><b className="text-gray-500">%</b></small> {calculatedStats.multihit ? <br /> : ' '}{savageValues}
          {additionalValues}
        </>
      ),
      iconKeys: ["abilitySavageBlow"]
    });
  }

  // 打たれ強い
  if (stats[29] && stats[29] > 0) {
    abilities.push({
      name: "打たれ強い",
      value: targets.map(t => t.name).join(' '),
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: targets.map(t => t.iconKey)
    });
  }

  // 超打たれ強い
  if (stats[80] && stats[80] > 0) {
    abilities.push({
      name: "超打たれ強い",
      value: targets.map(t => t.name).join(' '),
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: targets.map(t => t.iconKey)
    });
  }

  // ふっとばす
  if (stats[24] && stats[24] > 0) {
    const baseChance = stats[24];
    
    // 本能によるボーナスを加算
    const totalChance = baseChance + talentKnockbackBonus.chance;
    
    // 確率が強化されているかチェック
    const chanceEnhanced = talentKnockbackBonus.chance > 0;
    
    // 確率の色を設定
    const chanceColor = chanceEnhanced ? "text-orange-600" : "text-gray-500";
    
    abilities.push({
      name: "ふっとばす",
      value: (<b className={chanceColor}>{totalChance}<small>%</small></b>),
      iconKeys: ["abilityKnockback"],
      enhanced: chanceEnhanced
    });
  }

  // 動きを止める
  if (stats[25] && stats[25] > 0) {
    const baseChance = stats[25];
    const baseDuration = stats[26] || 0;
    
    // 本能によるボーナスを加算
    const totalChance = baseChance + talentFreezeBonus.chance;
    const totalDuration = baseDuration + talentFreezeBonus.duration;
    
    // 最大持続時間は基本値の1.2倍に本能ボーナスを加算
    const baseDurationMax = Math.round(baseDuration * 1.2);
    const totalDurationMax = baseDurationMax + talentFreezeBonus.duration;
    
    const duration = frameToSecond(totalDuration);
    const durationMax = frameToSecond(totalDurationMax);
    
    // 確率と持続時間それぞれ個別に強化判定
    const chanceEnhanced = talentFreezeBonus.chance > 0;
    const durationEnhanced = talentFreezeBonus.duration > 0;
    const isEnhanced = chanceEnhanced || durationEnhanced;
    
    // 確率と持続時間の色を個別に設定
    const chanceColor = chanceEnhanced ? "text-orange-600" : "text-gray-500";
    const durationColor = durationEnhanced ? "text-orange-600" : "text-gray-500";
    
    abilities.push({
      name: "動きを止める",
      value: (
        <>
          <b className={chanceColor}>{totalChance}<small>%</small></b>{' '}
          <b className={durationColor}>{duration.toFixed(1)}s~{durationMax.toFixed(1)}s</b>{' '}
          <b><small className="text-gray-400">({totalDuration}f~{totalDurationMax}f)</small></b>
        </>
      ),
      iconKeys: ["abilityFreeze"],
      enhanced: isEnhanced
    });
  }

  // 動きを遅くする
  if (stats[27] && stats[27] > 0) {
    const baseChance = stats[27];
    const baseDuration = stats[28] || 0;
    
    // 本能によるボーナスを加算
    const totalChance = baseChance + talentSlowBonus.chance;
    const totalDuration = baseDuration + talentSlowBonus.duration;
    
    // 最大持続時間は基本値の1.2倍に本能ボーナスを加算
    const baseDurationMax = Math.round(baseDuration * 1.2);
    const totalDurationMax = baseDurationMax + talentSlowBonus.duration;
    
    const duration = frameToSecond(totalDuration);
    const durationMax = frameToSecond(totalDurationMax);
    
    // 確率と持続時間それぞれ個別に強化判定
    const chanceEnhanced = talentSlowBonus.chance > 0;
    const durationEnhanced = talentSlowBonus.duration > 0;
    const isEnhanced = chanceEnhanced || durationEnhanced;
    
    abilities.push({
      name: "動きを遅くする",
      value: (<b>{totalChance}% {duration.toFixed(1)}s~{durationMax.toFixed(1)}s <small className="text-gray-400">({totalDuration}f~{totalDurationMax}f)</small></b>),
      iconKeys: ["abilitySlow"],
      enhanced: isEnhanced
    });
  }

  // 攻撃力アップ
  if (stats[40] && stats[40] > 0) {
    abilities.push({
      name: "攻撃力アップ",
      value: (<b className="text-gray-500"><small className="text-blue-500">体力</small><small>≦</small>{100 - stats[40]}<small>%</small> <small className="text-red-500">攻撃力</small><small>+</small>{stats[41]}<small>%</small></b>),
      iconKeys: ["abilityStrengthen"]
    });
  }

  // 生き残る
  if (stats[42] && stats[42] > 0) {
    abilities.push({
      name: "生き残る",
      value: (<b className="text-gray-500">{stats[42]}<small>%</small></b>),
      iconKeys: ["abilitySurvive"]
    });
  }

  // 城破壊が得意
  if (stats[34] && stats[34] > 0) {
    abilities.push({
      name: "城破壊が得意",
      value: (<b className="text-gray-500">4倍</b>),
      iconKeys: ["abilityBaseDestroyer"]
    });
  }

  // クリティカル
  if ((stats[31] && stats[31] > 0) || talentCriticalBonus > 0) {
    const baseCritical = stats[31] || 0;
    const totalCritical = baseCritical + talentCriticalBonus;
    
    abilities.push({
      name: "クリティカル",
      value: (<b className="text-gray-500">{totalCritical}<small>%</small></b>),
      iconKeys: ["abilityCritical"],
      enhanced: talentCriticalBonus > 0
    });
  }

  // 撃破時お金アップ
  if (stats[33] && stats[33] > 0) {
    abilities.push({
      name: "撃破時お金アップ",
      value: (<b className="text-gray-500">+100<small>%</small></b>),
      iconKeys: ["abilityExtraMoney"]
    });
  }

  // メタル
  if (stats[43] && stats[43] > 0) {
    abilities.push({
      name: "メタル",
      value: "",
      iconKeys: ["abilityMetal"]
    });
  }

  // メタルキラー
  if (stats[112] && stats[112] > 0) {
    abilities.push({
      name: "メタルキラー",
      value: (<b className="text-gray-500"><small className="text-blue-500">敵体力</small>-{stats[112]}<small>%</small></b>),
      iconKeys: ["abilityMetalKiller"]
    });
  }

  // 波動攻撃
  if (stats[35] && stats[35] > 0) {
    const waveLevel = stats[36] || 0;
    const waveRange = 332.5 + (waveLevel - 1) * 200;
    const waveType = stats[94] === 1 ? '小波動' : '波動攻撃';
    abilities.push({
      name: waveType,
      value: (<b className="text-gray-500">Lv{waveLevel} {stats[35]}<small>%</small> {waveRange}</b>),
      iconKeys: ["abilityWave"]
    });
  }

  // 裂波攻撃
  if (stats[86] && stats[86] > 0) {
    const waveType = (stats.length >= 109 && stats[108] === 1) ? '小裂波' : '裂波攻撃';
    const waveLevel = stats[89] || 0;
    const range1 = Math.floor((stats[87] || 0) / 4);
    const range2 = range1 + Math.floor((stats[88] || 0) / 4);
    abilities.push({
      name: waveType,
      value: (<b className="text-gray-500">Lv{waveLevel} {stats[86]}<small>%</small> {range1}~{range2}</b>),
      iconKeys: ["abilitySurge"]
    });
  }

  // 爆波攻撃
  if (stats[113] && stats[113] > 0) {
    const range = Math.floor((stats[114] || 0) / 4);
    abilities.push({
      name: "爆波攻撃",
      value: (<b className="text-gray-500">{stats[113]}<small>% </small>{range}</b>),
      iconKeys: ["abilityExplosion"]
    });
  }

  // 攻撃力ダウン
  if (stats[37] && stats[37] > 0) {
    const baseChance = stats[37];
    const baseDuration = stats[38] || 0;
    const weakenPower = stats[39] || 0;
    
    // 本能によるボーナスを加算
    const totalChance = baseChance + talentWeakenBonus.chance;
    const totalDuration = baseDuration + talentWeakenBonus.duration;
    
    // 最大持続時間は基本値の1.2倍に本能ボーナスを加算
    const baseDurationMax = Math.round(baseDuration * 1.2);
    const totalDurationMax = baseDurationMax + talentWeakenBonus.duration;
    
    const duration = frameToSecond(totalDuration);
    const durationMax = frameToSecond(totalDurationMax);
    
    // 確率と持続時間それぞれ個別に強化判定
    const chanceEnhanced = talentWeakenBonus.chance > 0;
    const durationEnhanced = talentWeakenBonus.duration > 0;
    const isEnhanced = chanceEnhanced || durationEnhanced;
    
    // 確率と持続時間の色を個別に設定
    const chanceColor = chanceEnhanced ? "text-orange-600" : "text-gray-500";
    const durationColor = durationEnhanced ? "text-orange-600" : "text-gray-500";
    
    abilities.push({
      name: "攻撃力ダウン",
      value: (
        <span>
          <b className={chanceColor}>{totalChance}<small>%</small></b>{' '}
          <b><small className="text-red-500">敵攻撃力</small>-{weakenPower}<small>%</small>{' '}</b>
          <b className={durationColor}>{duration.toFixed(1)}s~{durationMax.toFixed(1)}s</b>{' '}
          <b><small className="text-gray-400">({totalDuration}f~{totalDurationMax}f)</small></b>
        </span>
      ),
      iconKeys: ["abilityWeaken"],
      enhanced: isEnhanced
    });
  }

  // バリアブレイカー
  if (stats[70] && stats[70] > 0) {
    const baseChance = stats[70];
    
    // 本能によるボーナスを加算
    const totalChance = baseChance + talentBarrierBreakerBonus.chance;
    
    // 本能によるボーナスがあるかチェック
    const isEnhanced = talentBarrierBreakerBonus.chance > 0;
    const chanceColor = isEnhanced ? "text-orange-600" : "text-gray-500";
    
    abilities.push({
      name: "バリアブレイカー",
      value: (<b className={chanceColor}>{totalChance}<small>%</small></b>),
      iconKeys: ["abilityBarrierBreaker"],
      enhanced: isEnhanced
    });
  }

  // シールドブレイカー
  if (stats[95] && stats[95] > 0) {
    abilities.push({
      name: "シールドブレイカー",
      value: (<b className="text-gray-500">{stats[95]}<small>%</small></b>),
      iconKeys: ["abilityShieldPiercing"]
    });
  }

  // 呪い
  if (stats[92] && stats[92] > 0) {
    const durationBase = stats[93] || 0;
    const durationMax = Math.round(durationBase * 1.2);
    const durationBaseS = frameToSecond(durationBase);
    const durationMaxS = frameToSecond(durationMax);
    abilities.push({
      name: "呪い",
      value: (<b className="text-gray-500">{stats[92]}<small>%</small> {durationBaseS.toFixed(1)}s~{durationMaxS.toFixed(1)}s <small className="text-gray-400">({durationBase}f~{durationMax}f)</small></b>),
      iconKeys: ["abilityCurse"]
    });
  }

  // 魂攻撃
  if (stats[98] && stats[98] > 0) {
    abilities.push({
      name: "魂攻撃",
      value: "",
      iconKeys: ["abilitySoulStrike"]
    });
  }

  // 裂波カウンター
  if (stats[109] && stats[109] > 0) {
    abilities.push({
      name: "裂波カウンター",
      value: "",
      iconKeys: ["abilityCounterSurge"]
    });
  }

  // 攻撃無効
  if (stats[63] && stats[63] > 0 && stats[84] && stats[85]) {
    const dodge_chance = stats[84]; // 攻撃無効確率
    const dodge_duration = stats[85]; // 攻撃無効持続時間（フレーム）
    const dodge_duration_s = (dodge_duration / 30).toFixed(1);
    abilities.push({
      name: "攻撃無効",
      value: (<b className="text-gray-500">{dodge_chance}<small>%</small> {dodge_duration_s}s <small className="text-gray-400">({dodge_duration}f)</small></b>),
      iconKeys: ["abilityDodgeAttack"]
    });
  }

  // 使徒キラー（動的）
  if (stats[77] && stats[77] > 0) {
    abilities.push({
      name: "使徒キラー",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats
    });
  }

  // 魔女キラー（動的）
  if (stats[53] && stats[53] > 0) {
    abilities.push({
      name: "魔女キラー",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats
    });
  }

  // 各種無効・耐性
  const immunities = [
    { index: 46, name: "波動ダメージ無効", iconKey: "abilityImmuneWave" },
    { index: 47, name: "波動ストッパー", iconKey: "abilityWaveShield" },
    { index: 48, name: "ふっとばす無効", iconKey: "abilityImmuneKnockback" },
    { index: 49, name: "動きを止める無効", iconKey: "abilityImmuneFreeze" },
    { index: 50, name: "動きを遅くする無効", iconKey: "abilityImmuneSlow" },
    { index: 51, name: "攻撃力ダウン無効", iconKey: "abilityImmuneWeaken" },
    { index: 52, name: "ゾンビキラー", iconKey: "abilityZombieKiller" },
    { index: 56, name: "衝撃波無効" },
    { index: 75, name: "ワープ無効", iconKey: "abilityImmuneWarp" },
    { index: 79, name: "古代の呪い無効", iconKey: "abilityImmuneCurse" }
  ];

  immunities.forEach(({ index, name, iconKey }) => {
    if (stats[index] && stats[index] > 0) {
      abilities.push({
        name,
        value: "",
        iconKeys: iconKey ? [iconKey] : undefined
      });
    }
  });

  // 裂波ダメージ無効
  if (stats[91] && stats[91] > 0) {
    abilities.push({
      name: "裂波ダメージ無効",
      value: "",
      iconKeys: ["abilityImmuneSurge"]
    });
  }

  // 爆波ダメージ無効
  if (stats[116] && stats[116] > 0) {
    abilities.push({
      name: "爆波ダメージ無効",
      value: "",
      iconKeys: ["abilityImmuneExplosion"]
    });
  }

  // 超生命体特効
  if (stats[97] && stats[97] > 0) {
    abilities.push({
      name: "超生命体特効",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: ["abilityColossusSlayer"]
    });
  }

  // 超獣特効
  if (stats[105] && stats[105] > 0) {
    abilities.push({
      name: "超獣特効",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: ["abilityBehemothSlayer"]
    });
  }

  // 超賢者特効
  if (stats[111] && stats[111] > 0) {
    abilities.push({
      name: "超賢者特効",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: enhancedStats,
      iconKeys: ["abilitySageSlayer"]
    });
  }

  // 召喚
  if (stats[110] && stats[110] > 0) {
    const summonedUnitId = stats[110];
    abilities.push({
      name: "召喚",
      value: (<b className="text-gray-500"><small>Unit</small> {summonedUnitId.toString().padStart(3, '0')}</b>),
      iconKeys: ["abilitySummon"]
    });
  }

  // 本能・超本能の処理
  if (includeInstincts && unitData.auxiliaryData.talents.hasTalents) {
    unitData.auxiliaryData.talents.talentList.forEach(talent => {
      // 形態固有の本能発動チェック
      // ユーザー指摘により、本能・超本能は第3形態以上のみで実装される
      // すべての本能・超本能は第3形態以上（formId >= 2）でのみ発動
      const isActivatedInThisForm = (formId >= 2);
      
      // この形態で本能が有効な場合のみ追加
      if (isActivatedInThisForm) {
        switch (talent.id) {
          case 1: // 攻撃力ダウン
            abilities.push({
              name: "攻撃力ダウン",
              value: `本能による攻撃力ダウン効果`,
              iconKeys: ["abilityWeaken"]
            });
            break;
          case 2: // 動きを止める
            abilities.push({
              name: "動きを止める",
              value: `本能による動きを止める効果`,
              iconKeys: ["abilityFreeze"]
            });
            break;
          case 3: // 動きを遅くする
            abilities.push({
              name: "動きを遅くする",
              value: `本能による動きを遅くする効果`,
              iconKeys: ["abilitySlow"]
            });
            break;
          case 5: // めっぽう強い
            abilities.push({
              name: "めっぽう強い",
              value: `本能によるめっぽう強い効果`,
              iconKeys: ["abilityStrongAgainst"]
            });
            break;
          case 6: // 打たれ強い
            abilities.push({
              name: "打たれ強い",
              value: `本能による打たれ強い効果`,
              iconKeys: ["abilityResistant"]
            });
            break;
          case 7: // 超ダメージ
            abilities.push({
              name: "超ダメージ",
              value: `本能による超ダメージ効果`,
              iconKeys: ["abilityMassiveDamage"]
            });
            break;
        }
      }
    });
  }

  return abilities;
};

// LRU Cache implementation for unit data
class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private readonly maxSize: number;

  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // LRU: Move accessed item to end (most recently used)
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // Remove least recently used item (first item)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

// Cache instance for unit data
const unitDataCache = new LRUCache<number, UnitData>(100);

// フォールバック用のURL試行機能（Animの実装を参考にしたデプロイ環境対応）

// Basic validation for unit data structure
function validateUnitData(data: unknown): data is UnitData {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  
  const obj = data as Record<string, unknown>;
  
  return (
    typeof obj.unitId === 'number' &&
    obj.coreData &&
    typeof obj.coreData === 'object' &&
    obj.coreData !== null &&
    Array.isArray((obj.coreData as Record<string, unknown>).forms) &&
    (obj.coreData as Record<string, unknown>).rarity &&
    typeof (obj.coreData as Record<string, unknown>).rarity === 'object' &&
    Array.isArray((obj.coreData as Record<string, unknown>).levelRates) &&
    obj.auxiliaryData &&
    typeof obj.auxiliaryData === 'object' &&
    obj.auxiliaryData !== null &&
    Array.isArray((obj.auxiliaryData as Record<string, unknown>).names) &&
    (obj.auxiliaryData as Record<string, unknown>).talents &&
    typeof (obj.auxiliaryData as Record<string, unknown>).talents === 'object'
  );
}

// TSXファイルが削除されたため、常にJSONモードで動作

// New JSON-based unit data loader
async function getUnitDataFromJSON(unitId: number): Promise<UnitData | null> {
  try {
    // Check cache first
    const cached = unitDataCache.get(unitId);
    if (cached) {
      return cached;
    }

    const unitIdStr = unitId.toString().padStart(3, '0');
    
    // Next.jsのbasePathを考慮したパスを生成
    // GitHub Pagesデプロイ環境ではhostname判定を使用
    const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'nekomut.github.io';
    const basePath = isGitHubPages ? '/bcnext' : '';
    
    // デプロイ環境対応：複数のURLパスを試行（Animの実装を参考）
    const urlsToTry = [
      `${basePath}/data/unit/${unitIdStr}.json`,
      `./data/unit/${unitIdStr}.json`,
      `${typeof window !== 'undefined' && window.location.origin || ''}${basePath}/data/unit/${unitIdStr}.json`
    ].filter(Boolean);
    
    let response: Response | null = null;
    let lastError: Error | null = null;
    
    for (const tryUrl of urlsToTry) {
      try {
        response = await fetch(tryUrl);
        if (response.ok) {
          break;
        } else {
          lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        lastError = error as Error;
        continue;
      }
    }
    
    if (!response || !response.ok) {
      throw new Error(
        `All URLs failed to load unit data for unit ${unitId}. Last error: ${lastError?.message || 'unknown'}`
      );
    }

    const jsonData = await response.json();

    // Basic validation
    if (!validateUnitData(jsonData)) {
      throw new Error(`Invalid unit data format for unit ${unitId}`);
    }

    // Cache the data
    unitDataCache.set(unitId, jsonData);
    
    return jsonData;
  } catch (error) {
    console.error(`Error loading unit ${unitId} from JSON:`, error);
    return null;
  }
}

// Main helper function to get unit data by ID
export const getUnitData = async (unitId: number): Promise<UnitData | null> => {
  // TSXファイルが削除されたため、常にJSONから読み込み
  return getUnitDataFromJSON(unitId);
};

// 本能・超本能の効果を計算する関数
export const calculateTalentEffect = (talent: UnitTalent): string | React.ReactNode => {
  const data = talent.data;
  
  switch (talent.id) {
    case 1: // 攻撃力ダウン
      const weaken_chance = data[2] || 0;
      const weaken_initial_duration = data[4] || 0;
      const weaken_max_duration = data[5] || 0;
      const weaken_max_lv = data[1] || 1;
      const weaken_power = data[3] || 0;
      
      // 持続時間の計算（フレームを秒に変換）
      const weaken_initial_duration_s = (weaken_initial_duration / 30).toFixed(1);
      const weaken_max_duration_s = (weaken_max_duration / 30).toFixed(1);
      
      if (weaken_max_lv > 1 && weaken_max_duration > weaken_initial_duration) {
        return (<><b className="text-gray-500">{weaken_chance}<small>%</small> <small className="text-red-500">敵攻撃力</small>-{weaken_power}<small>%</small> {weaken_initial_duration_s}s~{weaken_max_duration_s}s <small className="text-gray-400">({weaken_initial_duration}f~{weaken_max_duration}f)</small></b></>);
      }
      
      return (<><b className="text-gray-500">{weaken_chance}<small>%</small> <small className="text-red-500">敵攻撃力</small>-{weaken_power}<small>%</small> {weaken_initial_duration_s}s <small className="text-gray-400">({weaken_initial_duration}f)</small></b></>);
      
    case 2: // 動きを止める
      const freeze_chance = data[2] || 0;
      const freeze_initial_duration = data[4] || 0;
      const freeze_max_duration = data[5] || 0;
      const freeze_max_lv = data[1] || 1;
      
      // 持続時間の計算（フレームを秒に変換）
      const freeze_initial_duration_s = (freeze_initial_duration / 30).toFixed(1);
      const freeze_max_duration_s = (freeze_max_duration / 30).toFixed(1);
      
      if (freeze_max_lv > 1 && freeze_max_duration > freeze_initial_duration) {
        return (<b className="text-gray-500">{freeze_chance}<small>%</small> {freeze_initial_duration_s}s~{freeze_max_duration_s}s <small className="text-gray-400">({freeze_initial_duration}f~{freeze_max_duration}f)</small></b>);
      }
      
      return (<b className="text-gray-500">{freeze_chance}<small>%</small> {freeze_initial_duration_s}s <small className="text-gray-400">({freeze_initial_duration}f)</small></b>);
      
    case 3: // 動きを遅くする
      const slow_chance = data[2] || 0;
      const slow_initial_duration = data[4] || 0;
      const slow_max_duration = data[5] || 0;
      const slow_max_lv = data[1] || 1;
      
      // 持続時間の計算（フレームを秒に変換）
      const slow_initial_duration_s = (slow_initial_duration / 30).toFixed(1);
      const slow_max_duration_s = (slow_max_duration / 30).toFixed(1);
      
      if (slow_max_lv > 1 && slow_max_duration > slow_initial_duration) {
        return (<><b className="text-gray-500">{slow_chance}<small>%</small> {slow_initial_duration_s}s~{slow_max_duration_s}s <small className="text-gray-400">({slow_initial_duration}f~{slow_max_duration}f)</small></b></>);
      }
      
      return (<><b className="text-gray-500">{slow_chance}<small>%</small> {slow_initial_duration_s}s <small className="text-gray-400">({slow_initial_duration}f)</small></b></>);
      
    case 5: // めっぽう強い
      // この効果はテキストボックスで動的に計算されるため、空文字列を返す
      return "";

    case 6: // 打たれ強い
      // この効果はテキストボックスで動的に計算されるため、空文字列を返す
      return "";
      
    case 46: // 動きを遅くする無効
    case 44: // 攻撃力ダウン無効
    case 45: // 動きを止める無効
    case 47: // ふっとばし無効
    case 48: // 波動ダメージ無効
    case 49: // ワープ無効
    case 33: // 属性 赤い敵
    case 34: // 属性 浮いてる敵
    case 35: // 属性 黒い敵
    case 36: // 属性 赤い敵  
    case 37: // 属性 浮いてる敵
    case 38: // 属性 白い敵
    case 39: // 属性 メタル
    case 40: // 属性 天使
    case 41: // 属性 エイリアン
    case 42: // 属性 ゾンビ
    case 43: // 属性を持たない敵
    case 51: // 攻撃無効
      const dodge_max_lv = data[1] || 1;
      const dodge_min_chance = data[2] || 0;
      const dodge_max_chance = data[3] || data[2] || 0;
      const dodge_initial_duration = data[4] || 0;
      const dodge_max_duration = data[5] || 0;
      
      // 持続時間の計算（フレームを秒に変換）
      const dodge_duration_per_level = dodge_max_lv > 1 ? Math.floor((dodge_max_duration - dodge_initial_duration) / (dodge_max_lv - 1)) : 0;
      const dodge_initial_duration_s = (dodge_initial_duration / 30).toFixed(1);
      const dodge_max_duration_s = (dodge_max_duration / 30).toFixed(1);
      
      // 確率の変動確認
      const chance_varies = dodge_max_lv > 1 && dodge_max_chance > dodge_min_chance;
      const duration_varies = dodge_max_lv > 1 && dodge_duration_per_level > 0;
      
      // 確率表示の組み立て
      let chance_display: React.ReactNode;
      if (chance_varies) {
        const chance_per_level = ((dodge_max_chance - dodge_min_chance) / (dodge_max_lv - 1)).toFixed(0);
        chance_display = (<><b>{dodge_min_chance}~{dodge_max_chance}<small>%</small></b> <small className="text-gray-400">(+{chance_per_level}%/Lv)</small></>);
      } else {
        chance_display = (<><b>{dodge_min_chance}<small>%</small></b></>);
      }
      
      // 持続時間表示の組み立て
      let duration_display: React.ReactNode;
      if (duration_varies) {
        duration_display = (<> <b>{dodge_initial_duration_s}s~{dodge_max_duration_s}s</b> <small className="text-gray-400">({dodge_initial_duration}f~{dodge_max_duration}f)</small></>);
      } else {
        duration_display = (<> <b>{dodge_initial_duration_s}s</b> <small className="text-gray-400">({dodge_initial_duration}f)</small></>);
      }
      
      return (<>{chance_display}{duration_display}</>);
      
    case 57: // 属性 悪魔
      return "";
      
    case 60: // 呪い
      const curse_chance = data[2] || 0;
      const curse_initial_duration = data[4] || 0;
      const curse_max_duration = data[5] || 0;
      const curse_max_lv = data[1] || 1;
      
      // 持続時間の計算（フレームを秒に変換）
      const curse_initial_duration_s = (curse_initial_duration / 30).toFixed(1);
      const curse_max_duration_s = (curse_max_duration / 30).toFixed(1);
      
      if (curse_max_lv > 1 && curse_max_duration > curse_initial_duration) {
        return (<><b className="text-gray-500">{curse_chance}<small>%</small> {curse_initial_duration_s}s~{curse_max_duration_s}s <small className="text-gray-400">({curse_initial_duration}f~{curse_max_duration}f)</small></b></>);
      }
      
      return (<><b className="text-gray-500">{curse_chance}<small>%</small> {curse_initial_duration_s}s <small className="text-gray-400">({curse_initial_duration}f)</small></b></>);
      
    default:
      // その他の本能は基本形式
      const step_count = data[1];
      const min_value = data[2];
      const max_value = data[3];
      if (min_value === max_value) {
        return "";
      } else {
        return (<b className="text-gray-500"><small>+</small>{min_value}~{max_value}<small>%</small> <small className="text-gray-400">(+{((max_value - min_value) / (step_count - 1)).toFixed(0)}%/Lv)</small></b>);
      }
  }
};
