// Common unit types and calculation functions
// Based on stat.py logic

export interface UnitForm {
  readonly formId: number;
  readonly name: string;
  readonly stats: readonly number[];
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
  readonly effect: string;
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
  readonly atk1?: number;
  readonly atk2?: number;
  readonly atk3?: number;
}

export interface UnitAbility {
  readonly name: string;
  readonly value: string;
  readonly detail: string;
}

// Calculation functions (from stat.py)
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
  const hp = calcStat(stats[0] || 0, m, p, totalLevel);
  const kb = stats[1] || 0;
  const speed = stats[2] || 0;
  const ap_base = stats[3] || 0;
  const tba = (stats[4] || 0) * 2;
  const range = stats[5] || 0;
  const cost = Math.floor((stats[6] || 0) * 1.5);
  const recharge_raw = (stats[7] || 0) * 2;
  const foreswing = stats[13] || 0;

  // Attack power calculation
  let ap = calcStat(ap_base, m, p, totalLevel);
  let atk1 = ap;
  let atk2 = 0;
  let atk3 = 0;

  // Multi-hit attack
  const multihit = (stats[59] || 0) > 0;
  if (multihit) {
    atk1 = calcStat(ap_base, m, p, totalLevel);
    atk2 = calcStat(stats[59] || 0, m, p, totalLevel);
    atk3 = calcStat(stats[60] || 0, m, p, totalLevel);
    ap = atk1 + atk2 + atk3;
  }

  // Animation length calculation (simplified)
  const animLength = 30; // Default value
  const backswing = animLength - foreswing;

  // Attack frequency calculation
  let freq: number;
  if (tba !== 0) {
    if (multihit && stats[61]) {
      // Multi-hit frequency calculation
      const f2 = (stats[61] || 0) - foreswing;
      const f3 = stats[62] ? (stats[62] - (stats[61] || 0)) : 0;
      freq = Math.max(0, tba - backswing - 1) + foreswing + f2 + f3 + backswing;
    } else {
      freq = tba + foreswing - 1;
    }
  } else {
    freq = foreswing + backswing;
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
    atk1: multihit ? atk1 : undefined,
    atk2: multihit && atk2 > 0 ? atk2 : undefined,
    atk3: multihit && atk3 > 0 ? atk3 : undefined
  };
};

export const getAbilities = (unitData: UnitData, formId: number): UnitAbility[] => {
  const form = unitData.coreData.forms[formId];
  if (!form) return [];

  const stats = form.stats;
  const abilities: UnitAbility[] = [];

  // 攻撃対象限定の判定
  const targets: string[] = [];
  const targetIndices = [10, 16, 17, 18, 19, 20, 21, 22, 78, 96];
  const targetNames = ['赤い敵', '浮いてる敵', '黒い敵', 'メタルな敵', '属性を持たない敵', '天使', 'エイリアン', 'ゾンビ', '古代種', '悪魔'];

  targetIndices.forEach((index, i) => {
    if (stats[index] && stats[index] !== 0 && stats[index] !== -1) {
      targets.push(targetNames[i]);
    }
  });

  if (targets.length > 0) {
    abilities.push({
      name: "攻撃ターゲット限定",
      value: targets.join(''),
      detail: ""
    });
  }

  // めっぽう強い
  if (stats[23] && stats[23] > 0) {
    abilities.push({
      name: "めっぽう強い",
      value: "1.5x~1.8x",
      detail: "対象属性への攻撃力・耐久力強化"
    });
  }

  // ふっとばす
  if (stats[24] && stats[24] > 0) {
    abilities.push({
      name: "ふっとばす",
      value: `${stats[24]}%`,
      detail: ""
    });
  }

  // 動きを止める
  if (stats[25] && stats[25] > 0) {
    const duration = frameToSecond(stats[26] || 0);
    const durationMax = frameToSecond(Math.round((stats[26] || 0) * 1.2));
    abilities.push({
      name: "動きを止める",
      value: `${duration}s~${durationMax}s`,
      detail: `${stats[25]}%`
    });
  }

  // 動きを遅くする
  if (stats[27] && stats[27] > 0) {
    const duration = frameToSecond(stats[28] || 0);
    const durationMax = frameToSecond(Math.round((stats[28] || 0) * 1.2));
    abilities.push({
      name: "動きを遅くする",
      value: `${duration}s~${durationMax}s`,
      detail: `${stats[27]}%`
    });
  }

  // 打たれ強い
  if (stats[29] && stats[29] > 0) {
    abilities.push({
      name: "打たれ強い",
      value: "0.25x~0.2x",
      detail: "対象属性からのダメージ軽減"
    });
  }

  // 超ダメージ
  if (stats[30] && stats[30] > 0) {
    abilities.push({
      name: "超ダメージ",
      value: "3x~4x",
      detail: "対象属性への攻撃力強化"
    });
  }

  // クリティカル
  if (stats[31] && stats[31] > 0) {
    abilities.push({
      name: "クリティカル",
      value: `${stats[31]}%`,
      detail: ""
    });
  }

  // 撃破時お金アップ
  if (stats[33] && stats[33] > 0) {
    abilities.push({
      name: "撃破時お金アップ",
      value: "2x",
      detail: ""
    });
  }

  // 城破壊が得意
  if (stats[34] && stats[34] > 0) {
    abilities.push({
      name: "城破壊が得意",
      value: "4x",
      detail: ""
    });
  }

  // 波動攻撃
  if (stats[35] && stats[35] > 0) {
    const waveLevel = stats[36] || 0;
    const waveRange = 332.5 + (waveLevel - 1) * 200;
    const waveType = stats[94] === 1 ? '小波動' : '波動攻撃';
    abilities.push({
      name: waveType,
      value: `Lv${waveLevel} ${waveRange}`,
      detail: `${stats[35]}%`
    });
  }

  // 攻撃力ダウン
  if (stats[37] && stats[37] > 0) {
    const duration = frameToSecond(stats[38] || 0);
    const durationMax = frameToSecond(Math.round((stats[38] || 0) * 1.2));
    abilities.push({
      name: "攻撃力ダウン",
      value: `-${stats[39]}% ${duration}s~${durationMax}s`,
      detail: `${stats[37]}%`
    });
  }

  // 攻撃力アップ
  if (stats[40] && stats[40] > 0) {
    abilities.push({
      name: "攻撃力アップ",
      value: `+${stats[41]}%`,
      detail: `HP≦${100 - stats[40]}%`
    });
  }

  // 生き残る
  if (stats[42] && stats[42] > 0) {
    abilities.push({
      name: "生き残る",
      value: `${stats[42]}%`,
      detail: ""
    });
  }

  // メタル
  if (stats[43] && stats[43] > 0) {
    abilities.push({
      name: "メタル",
      value: "",
      detail: ""
    });
  }

  // 遠方攻撃・全方位攻撃
  if (stats[44] && stats[44] !== 0) {
    const rng1 = stats[44] || 0;
    const rng2 = rng1 + (stats[45] || 0);
    const attackType = (stats[45] || 0) > 0 ? '遠方攻撃' : '全方位攻撃';
    const rangeInfo = (stats[45] || 0) > 0 ? `${rng1}~${rng2}` : `${rng2}~${rng1}`;

    abilities.push({
      name: attackType,
      value: rangeInfo,
      detail: ""
    });
  }

  // 各種無効・耐性
  const immunities = [
    { index: 46, name: "波動ダメージ無効" },
    { index: 47, name: "波動ストッパー" },
    { index: 48, name: "ふっとばす無効" },
    { index: 49, name: "動きを止める無効" },
    { index: 50, name: "動きを遅くする無効" },
    { index: 51, name: "攻撃力ダウン無効" },
    { index: 52, name: "ゾンビキラー" },
    { index: 53, name: "魔女キラー" },
    { index: 56, name: "衝撃波無効" },
    { index: 75, name: "ワープ無効" },
    { index: 77, name: "使徒キラー" },
    { index: 79, name: "呪い無効" }
  ];

  immunities.forEach(({ index, name }) => {
    if (stats[index] && stats[index] > 0) {
      abilities.push({
        name,
        value: "",
        detail: ""
      });
    }
  });

  // バリアブレイカー
  if (stats[70] && stats[70] > 0) {
    abilities.push({
      name: "バリアブレイカー",
      value: `${stats[70]}%`,
      detail: ""
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
