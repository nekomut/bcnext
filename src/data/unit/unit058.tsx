// Unit 058 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit058Data: UnitData = {
  unitId: 58,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコ魔剣士",
      stats: [550, 3, 11, 100, 5, 155, 420, 200, 0, 320, 1, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 33
    },
    {
      formId: 1,
      name: "双剣ネコ魔剣士",
      stats: [650, 3, 11, 110, 5, 155, 420, 200, 0, 320, 1, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 33
    },
    {
      formId: 2,
      name: "双炎舞ネコ魔剣士",
      stats: [1000, 3, 11, 200, 5, 155, 420, 200, 0, 320, 1, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 33
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
    names: ["ネコ魔剣士", "双剣ネコ魔剣士", "双炎舞ネコ魔剣士"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 18,
        name: "攻撃力ダウン耐性",
        type: "normal" as const,
        data: [18, 10, 16, 70, 0, 0, 0, 0, 0, 0, 18, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 37,
        name: "属性 天使",
        type: "normal" as const,
        data: [37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 3, -1, 0],
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
        data: [26, 10, 2, 20, 0, 0, 0, 0, 0, 0, 32, 2, -1, 0],
        npCost: 75,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit058Data;


