// Unit 056 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit056Data: UnitData = {
  unitId: 56,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコアーチャー",
      stats: [180, 3, 10, 98, 15, 340, 820, 300, 0, 320, 0, 0, 0, 43, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 56
    },
    {
      formId: 1,
      name: "ネコキューピット",
      stats: [240, 3, 10, 98, 15, 340, 820, 300, 0, 320, 0, 0, 0, 43, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 56
    },
    {
      formId: 2,
      name: "ネコいて座",
      stats: [360, 3, 16, 147, 15, 390, 820, 300, 0, 320, 0, 0, 0, 43, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 56
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
    names: ["ネコアーチャー", "ネコキューピット", "ネコいて座"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 14,
        name: "ゾンビキラー",
        type: "normal" as const,
        data: [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 3, -1, 0],
        npCost: 50,
        isTotal: false
      },
      {
        id: 39,
        name: "属性 ゾンビ",
        type: "normal" as const,
        data: [39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 3, -1, 0],
        npCost: 50,
        isTotal: false
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
        id: 26,
        name: "生産スピードアップ",
        type: "normal" as const,
        data: [26, 10, 15, 60, 0, 0, 0, 0, 0, 0, 32, 2, -1, 0],
        npCost: 75,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit056Data;


