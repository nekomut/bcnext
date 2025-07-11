// Unit 038 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit038Data: UnitData = {
  unitId: 38,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコ車輪",
      stats: [600, 2, 9, 220, 20, 170, 700, 300, 0, 320, 0, 0, 1, 29, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 41
    },
    {
      formId: 1,
      name: "ネコ太陽",
      stats: [800, 2, 9, 320, 20, 170, 700, 300, 0, 320, 0, 0, 1, 29, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 41
    },
    {
      formId: 2,
      name: "ネコクール",
      stats: [800, 2, 9, 420, 20, 200, 700, 200, 0, 320, 0, 0, 1, 29, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 41
    }
    ],
    rarity: {
      id: 2,
      name: "レア",
      maxLevels: [50, 80]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["ネコ車輪", "ネコ太陽", "ネコクール"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 8,
        name: "ふっとばす",
        type: "normal" as const,
        data: [8, 10, 13, 40, 0, 0, 0, 0, 0, 0, 8, 1, -1, 0],
        npCost: 95,
        isTotal: true
      },
      {
        id: 18,
        name: "攻撃力ダウン耐性",
        type: "normal" as const,
        data: [18, 10, 16, 70, 0, 0, 0, 0, 0, 0, 18, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 2, 20, 0, 0, 0, 0, 0, 0, 27, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 31,
        name: "基本攻撃力アップ",
        type: "normal" as const,
        data: [31, 10, 2, 20, 0, 0, 0, 0, 0, 0, 28, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 25,
        name: "生産コスト割引",
        type: "normal" as const,
        data: [25, 10, 20, 200, 0, 0, 0, 0, 0, 0, 31, 2, -1, 0],
        npCost: 75,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit038Data;


