// Unit 336 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit336Data: UnitData = {
  unitId: 336,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ミイラ娘レイカ",
      stats: [2020, 4, 9, 870, 110, 450, 3320, 2000, 0, 320, 0, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 870, 0, 70, 0, 1, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 121
    },
    {
      formId: 1,
      name: "玉座のミイラ姫レイカ",
      stats: [2880, 4, 9, 1240, 110, 450, 3320, 2000, 0, 320, 0, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 1240, 0, 70, 0, 1, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 121
    },
    {
      formId: 2,
      name: "黄金のミイラ姫レイカ",
      stats: [2880, 6, 9, 1240, 68, 450, 3320, 2000, 0, 320, 0, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 1240, 0, 70, 0, 1, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 121
    }
    ],
    rarity: {
      id: 4,
      name: "超激レア",
      maxLevels: [60, 70]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["ミイラ娘レイカ", "玉座のミイラ姫レイカ", "黄金のミイラ姫レイカ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 40,
        name: "属性 古代種",
        type: "normal" as const,
        data: [40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 29,
        name: "古代の呪い無効",
        type: "normal" as const,
        data: [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 20,
        name: "動きを遅くする耐性",
        type: "normal" as const,
        data: [20, 10, 16, 70, 0, 0, 0, 0, 0, 0, 20, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 2, 20, 0, 0, 0, 0, 0, 0, 27, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 31,
        name: "基本攻撃力アップ",
        type: "normal" as const,
        data: [31, 10, 2, 20, 0, 0, 0, 0, 0, 0, 28, 8, -1, 0],
        npCost: 175,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit336Data;


