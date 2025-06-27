// Common unit types and calculation functions

export interface UnitForm {
  readonly formId: number;
  readonly name: string;
  readonly stats: readonly number[];
  readonly icon: string;
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
    return Math.round(base * ((m + 4) / 5 + (p - m) / 10 + (level - p) / 20)) * mult;
  } else if (level > m) {
    return Math.round(base * ((m + 4) / 5 + (level - m) / 10)) * mult;
  }
  return Math.round(base * (4 + level) / 5) * mult;
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
export const getReduction = (levelRates: readonly number[]): [number, number] => {
  const growth = [...levelRates.slice(0, 8)];
  const redPts: number[] = [];

  while (growth.length > 0) {
    const count = growth.filter(x => x === growth[0]).length;
    redPts.push(count * 10);
    growth.splice(0, count);
  }

  if (redPts.length === 1) {
    redPts.push(80);
  } else {
    redPts[1] += redPts[0];
  }

  return [redPts[0], redPts[1]];
};

export const calculateUnitStats = (
  unitData: UnitData,
  formId: number,
  level: number,
  plusLevel: number
): CalculatedStats => {
  const form = unitData.coreData.forms[formId];
  if (!form) throw new Error(`Invalid form ID: ${formId}`);

  const stats = form.stats;
  const totalLevel = level + plusLevel;
  const [m, p] = getReduction(unitData.coreData.levelRates);

  // Basic stats
  const hp = Math.floor(calcStat(stats[0] || 0, m, p, totalLevel));
  const kb = stats[1] || 0;
  const speed = stats[2] || 0;
  const ap_base = stats[3] || 0;
  const tba = (stats[4] || 0) * 2;
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
  let freq: number;
  let frames: number[];

  // 正確な計算
  if (multihit) {
    const atk2 = stats[59] || 0;
    const atk3 = stats[60] || 0;
    
    if (atk2 > 0 && atk3 === 0 && stats[61]) {
      // 2段攻撃: [pre, foreswing, f2, backswing]
      const f2 = stats[61] - foreswing;
      backswing = animLength - stats[61];
      const pre = Math.max(0, tba - backswing - 1);
      frames = [pre, foreswing, f2, backswing];
      freq = pre + foreswing + f2 + backswing;
    } else if (atk2 > 0 && atk3 > 0 && stats[61] && stats[62]) {
      // 3段攻撃: [pre, foreswing, f2, f3, backswing]
      const f2 = stats[61] - foreswing;
      const f3 = stats[62] - stats[61];
      backswing = animLength - stats[62];
      const pre = Math.max(0, tba - backswing - 1);
      frames = [pre, foreswing, f2, f3, backswing];
      freq = pre + foreswing + f2 + f3 + backswing;
    } else {
      // フォールバック
      backswing = animLength - foreswing;
      const pre = Math.max(0, tba - backswing - 1);
      frames = [pre, foreswing, backswing];
      freq = tba !== 0 ? tba + foreswing - 1 : foreswing + backswing;
    }
  } else {
    // 単段攻撃: [pre, foreswing, backswing]
    backswing = animLength - foreswing;
    const pre = Math.max(0, tba - backswing - 1);
    frames = [pre, foreswing, backswing];
    if (tba !== 0) {
      freq = tba + foreswing - 1;
    } else {
      freq = foreswing + backswing;
    }
  }

  // DPS calculation
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

export const getAbilities = (unitData: UnitData, formId: number, level: number = 30, plusLevel: number = 0, attackUpMultiplier: number = 1): UnitAbility[] => {
  const form = unitData.coreData.forms[formId];
  if (!form) return [];

  const stats = form.stats;
  const abilities: UnitAbility[] = [];
  
  // レベル補正済みの計算ステータスを取得
  const calculatedStats = calculateUnitStats(unitData, formId, level, plusLevel);

  // 攻撃対象限定の判定
  const targets: Array<{name: string, iconKey: string}> = [];
  const targetIndices = [10, 16, 17, 18, 19, 20, 21, 22, 78, 96];
  const targetData = [
    {name: '赤い敵', iconKey: 'traitRed'},
    {name: '浮いてる敵', iconKey: 'traitFloating'},
    {name: '黒い敵', iconKey: 'traitBlack'},
    {name: 'メタルな敵', iconKey: 'traitMetal'},
    {name: '属性を持たない敵', iconKey: 'traitNone'},
    {name: '天使', iconKey: 'traitAngel'},
    {name: 'エイリアン', iconKey: 'traitAlien'},
    {name: 'ゾンビ', iconKey: 'traitZombie'},
    {name: '古代種', iconKey: 'traitRelic'},
    {name: '悪魔', iconKey: 'traitAku'}
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
    
    const timings = [`${frameToSecond(hit1_time).toFixed(2)}s (${hit1_time}f)`];
    
    if (hit2_ap > 0) {
      timings.push(`/ ${frameToSecond(hit2_time).toFixed(2)}s (${hit2_time}f)`);
    }
    
    if (hit3_ap > 0) {
      timings.push(`/ ${frameToSecond(hit3_time).toFixed(2)}s (${hit3_time}f)`);
    }
    
    const timeInfo = `${timings.join(' ')}`;
    
    abilities.push({
      name: "多段攻撃",
      value: timeInfo
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
      value: rangeInfo,
      iconKeys: attackType === '遠方攻撃' ? ['abilityLongDistance'] : attackType === '全方位攻撃' ? ['abilityOmniStrike'] : undefined
    });
  }

  // 超ダメージ
  if (stats[30] && stats[30] > 0) {
    abilities.push({
      name: "超ダメージ",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: calculatedStats
    });
  }

  // 極ダメージ
  if (stats[81] && stats[81] > 0) {
    abilities.push({
      name: "極ダメージ",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: calculatedStats
    });
  }

  // めっぽう強い
  if (stats[23] && stats[23] > 0) {
    abilities.push({
      name: "めっぽう強い",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: calculatedStats
    });
  }

  // 渾身の一撃
  if (stats[82] && stats[82] > 0) {
    const chance = stats[82];
    
    // 基本APの3倍値を計算（攻撃力アップを適用）
    let savageValues: React.ReactNode;
    if (calculatedStats.multihit) {
      const hit1_3x = calculatedStats.atk1 ? Math.floor(calculatedStats.atk1 * attackUpMultiplier * 3) : 0;
      const hit2_3x = calculatedStats.atk2 ? Math.floor(calculatedStats.atk2 * attackUpMultiplier * 3) : 0;
      const hit3_3x = calculatedStats.atk3 ? Math.floor(calculatedStats.atk3 * attackUpMultiplier * 3) : 0;
      
      const isEnhanced = attackUpMultiplier > 1;
      const colorClass = isEnhanced ? 'color: red;' : '';
      const values = [hit1_3x, hit2_3x, hit3_3x].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
      savageValues = <span dangerouslySetInnerHTML={{ __html: `${values.join(' / ')} ~` }} />;
    } else {
      const savageAP = Math.floor(calculatedStats.ap * attackUpMultiplier * 3);
      const isEnhanced = attackUpMultiplier > 1;
      savageValues = <b className={isEnhanced ? "text-red-500" : ""}>{savageAP.toLocaleString()}</b>;
    }
    
    // 超ダメージ・極ダメージがある場合の追加表示
    let additionalValues: React.ReactNode = null;
    
    // 超ダメージがある場合（3倍~4倍の4倍 * 3 = 12倍）
    if (stats[30] && stats[30] > 0) {
      if (calculatedStats.multihit) {
        const hit1_12x = calculatedStats.atk1 ? Math.floor(calculatedStats.atk1 * attackUpMultiplier * 12) : 0;
        const hit2_12x = calculatedStats.atk2 ? Math.floor(calculatedStats.atk2 * attackUpMultiplier * 12) : 0;
        const hit3_12x = calculatedStats.atk3 ? Math.floor(calculatedStats.atk3 * attackUpMultiplier * 12) : 0;
        
        const isEnhanced = attackUpMultiplier > 1;
        const colorClass = isEnhanced ? 'color: red;' : '';
        const superValues = [hit1_12x, hit2_12x, hit3_12x].filter(v => v > 0).map(v => `<b style="${colorClass}">${v.toLocaleString()}</b>`);
        additionalValues = (
          <>
            <br />
            <span dangerouslySetInnerHTML={{ __html: superValues.join(' / ') }} />
          </>
        );
      } else {
        const superAP = Math.floor(calculatedStats.ap * attackUpMultiplier * 12);
        const isEnhanced = attackUpMultiplier > 1;
        additionalValues = (
          <>
            <br />
            <b className={isEnhanced ? "text-red-500" : ""}>{superAP.toLocaleString()}</b>
          </>
        );
      }
    }
    
    // 極ダメージがある場合（5倍~6倍の6倍 * 3 = 18倍）
    if (stats[81] && stats[81] > 0) {
      if (calculatedStats.multihit) {
        const hit1_18x = calculatedStats.atk1 ? Math.floor(calculatedStats.atk1 * attackUpMultiplier * 18) : 0;
        const hit2_18x = calculatedStats.atk2 ? Math.floor(calculatedStats.atk2 * attackUpMultiplier * 18) : 0;
        const hit3_18x = calculatedStats.atk3 ? Math.floor(calculatedStats.atk3 * attackUpMultiplier * 18) : 0;
        
        const isEnhanced = attackUpMultiplier > 1;
        const extremeValues = [hit1_18x, hit2_18x, hit3_18x].filter(v => v > 0).map(v => v.toLocaleString());
        additionalValues = (
          <>
            <br />
            <span className={isEnhanced ? "text-red-500" : ""}>{extremeValues.join(' / ')}</span>
          </>
        );
      } else {
        const extremeAP = Math.floor(calculatedStats.ap * attackUpMultiplier * 18);
        const isEnhanced = attackUpMultiplier > 1;
        additionalValues = (
          <>
            <br />
            <span className={isEnhanced ? "text-red-500" : ""}>{extremeAP.toLocaleString()}</span>
          </>
        );
      }
    }
    
    abilities.push({
      name: "渾身の一撃",
      value: (
        <>
          <span className="text-red-500"><small><b>攻撃力</b></small></span><b>+200</b><small><b>%</b></small> <small><b>確率</b></small><b>{chance}</b><small><b>%</b></small> {savageValues}
          {additionalValues}
        </>
      ),
      iconKeys: ["abilityBerserk"]
    });
  }

  // 打たれ強い
  if (stats[29] && stats[29] > 0) {
    abilities.push({
      name: "打たれ強い",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: calculatedStats
    });
  }

  // 超打たれ強い
  if (stats[80] && stats[80] > 0) {
    abilities.push({
      name: "超打たれ強い",
      value: "",
      isDynamic: true,
      baseAP: calculatedStats.ap,
      calculatedStats: calculatedStats
    });
  }

  // ふっとばす
  if (stats[24] && stats[24] > 0) {
    abilities.push({
      name: "ふっとばす",
      value: `${stats[24]}%`,
      iconKeys: ["abilityKnockback"]
    });
  }

  // 動きを止める
  if (stats[25] && stats[25] > 0) {
    const duration = frameToSecond(stats[26] || 0);
    const durationMax = frameToSecond(Math.round((stats[26] || 0) * 1.2));
    const durationFrames = stats[26] || 0;
    const durationMaxFrames = Math.round(durationFrames * 1.2);
    abilities.push({
      name: "動きを止める",
      value: `${stats[25]}% ${duration.toFixed(1)}s(${durationFrames}f)~${durationMax.toFixed(1)}s(${durationMaxFrames}f)`,
      iconKeys: ["abilityFreeze"]
    });
  }

  // 動きを遅くする
  if (stats[27] && stats[27] > 0) {
    const duration = frameToSecond(stats[28] || 0);
    const durationMax = frameToSecond(Math.round((stats[28] || 0) * 1.2));
    const durationFrames = stats[28] || 0;
    const durationMaxFrames = Math.round(durationFrames * 1.2);
    abilities.push({
      name: "動きを遅くする",
      value: `${stats[27]}% ${duration.toFixed(1)}s(${durationFrames}f)~${durationMax.toFixed(1)}s(${durationMaxFrames}f)`,
      iconKeys: ["abilitySlow"]
    });
  }

  // 攻撃力アップ
  if (stats[40] && stats[40] > 0) {
    abilities.push({
      name: "攻撃力アップ",
      value: `攻撃力+${stats[41]}% 体力≦${100 - stats[40]}%`,
      iconKeys: ["abilityStrengthen"]
    });
  }

  // 生き残る
  if (stats[42] && stats[42] > 0) {
    abilities.push({
      name: `生き残る ${stats[42]}%`,
      value: "",
      iconKeys: ["abilitySurvive"]
    });
  }

  // 城破壊が得意
  if (stats[34] && stats[34] > 0) {
    abilities.push({
      name: "城破壊が得意",
      value: "4倍",
      iconKeys: ["abilityBaseDestroyer"]
    });
  }

  // クリティカル
  if (stats[31] && stats[31] > 0) {
    abilities.push({
      name: "クリティカル",
      value: `${stats[31]}%`,
      iconKeys: ["abilityCritical"]
    });
  }

  // 撃破時お金アップ
  if (stats[33] && stats[33] > 0) {
    abilities.push({
      name: "撃破時お金アップ",
      value: "+100%",
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
      value: `${stats[112]}%`
    });
  }

  // 波動攻撃
  if (stats[35] && stats[35] > 0) {
    const waveLevel = stats[36] || 0;
    const waveRange = 332.5 + (waveLevel - 1) * 200;
    const waveType = stats[94] === 1 ? '小波動' : '波動攻撃';
    abilities.push({
      name: waveType,
      value: `Lv${waveLevel} ${stats[35]}% ${waveRange}`,
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
      value: `Lv${waveLevel} ${stats[86]}% ${range1}~${range2}`,
      iconKeys: ["abilitySurge"]
    });
  }

  // 爆波攻撃
  if (stats[113] && stats[113] > 0) {
    const range = Math.floor((stats[114] || 0) / 4);
    abilities.push({
      name: "爆波攻撃",
      value: `${range} ${stats[113]}%`,
      iconKeys: ["abilityExplosion"]
    });
  }

  // 攻撃力ダウン
  if (stats[37] && stats[37] > 0) {
    const duration = frameToSecond(stats[38] || 0);
    const durationMax = frameToSecond(Math.round((stats[38] || 0) * 1.2));
    const durationFrames = stats[38] || 0;
    const durationMaxFrames = Math.round(durationFrames * 1.2);
    abilities.push({
      name: "攻撃力ダウン",
      value: `${stats[37]}% 敵攻撃力-${stats[39]}%<br/>${duration.toFixed(1)}s(${durationFrames}f)~${durationMax.toFixed(1)}s(${durationMaxFrames}f)`,
      iconKeys: ["abilityWeaken"]
    });
  }

  // バリアブレイカー
  if (stats[70] && stats[70] > 0) {
    abilities.push({
      name: "バリアブレイカー",
      value: `${stats[70]}%`,
      iconKeys: ["abilityBarrierBreaker"]
    });
  }

  // シールドブレイカー
  if (stats[95] && stats[95] > 0) {
    abilities.push({
      name: "シールドブレイカー",
      value: `${stats[95]}%`,
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
      value: `${durationBaseS.toFixed(2)}s~${durationMaxS.toFixed(2)}s (${durationBase}f~${durationMax}f) ${stats[92]}%`,
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
  if (stats[63] && stats[63] > 0) {
    const dodge_chance = 30; // デフォルト確率
    const dodge_duration = 60; // デフォルト持続時間（フレーム）
    const dodge_duration_s = (dodge_duration / 30).toFixed(1);
    abilities.push({
      name: "攻撃無効",
      value: `${dodge_chance}% ${dodge_duration_s}s(${dodge_duration}f)`,
      iconKeys: ["abilityDodgeAttack"]
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
    { index: 53, name: "魔女キラー", iconKey: "abilityWitchKiller" },
    { index: 56, name: "衝撃波無効" },
    { index: 75, name: "ワープ無効", iconKey: "abilityImmuneWarp" },
    { index: 77, name: "使徒キラー", iconKey: "abilityEvaAngelKiller" },
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

  // 召喚
  if (stats[110] && stats[110] > 0) {
    const summonedUnitId = stats[110];
    abilities.push({
      name: "召喚",
      value: `Unit ${summonedUnitId.toString().padStart(3, '0')}`,
      iconKeys: ["abilitySummon"]
    });
  }

  return abilities;
};

// Helper function to get unit data by ID
export const getUnitData = async (unitId: number): Promise<UnitData | null> => {
  try {
    const unitModule = await import(`../../data/unit/unit${unitId.toString().padStart(3, '0')}`);
    return unitModule.default;
  } catch {
    return null;
  }
};

// 本能・超本能の効果を計算する関数
export const calculateTalentEffect = (talent: UnitTalent): string => {
  const data = talent.data;
  
  switch (talent.id) {
    case 67: // 爆波攻撃
      const initial_chance = data[2] || 0;
      const chance_max = data[3] || 0;
      const max_lv = data[1] || 1;
      
      if (max_lv > 1 && chance_max > initial_chance) {
        const chance_per_level = Math.floor((chance_max - initial_chance) / (max_lv - 1));
        if (chance_per_level > 0) {
          return `+${initial_chance}% +${chance_per_level}%/Lv Max${chance_max}%`;
        }
      }
      
      return `+${initial_chance}%/Lv Max${chance_max}%`;
      
    case 27: // 移動速度アップ
      const speed_per_level = data[2] || 0;
      const speed_max = data[3] || 0;
      return `+${speed_per_level}/Lv Max+${speed_max}`;
      
    case 51: // 攻撃無効
      const dodge_chance = data[2] || 0;
      const dodge_initial_duration = data[4] || 0;
      const dodge_max_duration = data[5] || 0;
      const dodge_max_lv = data[1] || 1;
      
      // 持続時間の計算（フレームを秒に変換）
      const dodge_duration_per_level = dodge_max_lv > 1 ? Math.floor((dodge_max_duration - dodge_initial_duration) / (dodge_max_lv - 1)) : 0;
      const dodge_initial_duration_s = (dodge_initial_duration / 30).toFixed(1);
      const dodge_max_duration_s = (dodge_max_duration / 30).toFixed(1);
      
      if (dodge_max_lv > 1 && dodge_duration_per_level > 0) {
        return `${dodge_chance}% ${dodge_initial_duration_s}s(${dodge_initial_duration}f)~${dodge_max_duration_s}s(${dodge_max_duration}f)`;
      }
      
      return `${dodge_chance}% ${dodge_initial_duration_s}s(${dodge_initial_duration}f)`;
      
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
    case 57: // 属性 悪魔
      return "";
      
    default:
      // その他の本能は基本形式
      const per_level = data[2] || 0;
      const max_value = data[3] || 0;
      if (per_level === max_value) {
        return `${per_level}%`;
      } else {
        return `+${per_level}%/Lv Max${max_value}%`;
      }
  }
};
