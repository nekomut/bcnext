// Unit 147 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit147Data: UnitData = {
  unitId: 147,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ブリキネコ",
      stats: [605, 3, 8, 77, 20, 295, 340, 230, 0, 320, 0, 0, 0, 25, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 76
    },
    {
      formId: 1,
      name: "プレーンネコ",
      stats: [750, 3, 15, 107, 20, 295, 340, 230, 0, 320, 0, 0, 0, 25, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 76
    },
    {
      formId: 2,
      name: "ネコロボット",
      stats: [895, 3, 10, 137, 20, 345, 340, 230, 0, 320, 0, 0, 0, 25, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 76
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
    names: ["ブリキネコ", "プレーンネコ", "ネコロボット"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 51,
        name: "攻撃無効",
        type: "normal" as const,
        data: [51, 10, 20, 20, 23, 50, 0, 0, 0, 0, 60, 1, -1, 0],
        npCost: 95,
        isTotal: true
      },
      {
        id: 47,
        name: "ふっとばし無効",
        type: "normal" as const,
        data: [47, 1, 0, 0, 0, 0, 0, 0, 0, 0, 56, 3, -1, 0],
        npCost: 50,
        isTotal: false
      },
      {
        id: 30,
        name: "古代の呪い耐性",
        type: "normal" as const,
        data: [30, 10, 16, 70, 0, 0, 0, 0, 0, 0, 26, 2, -1, 0],
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
      }
      ]
    }
  }
} as const;

export default unit147Data;


