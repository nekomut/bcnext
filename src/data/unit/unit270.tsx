// Unit 270 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit270Data: UnitData = {
  unitId: 270,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "狂乱のユキ",
      stats: [1150, 5, 8, 1490, 184, 420, 2880, 1700, 0, 320, 1, 0, 1, 43, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 1,
      name: "狂乱のユキ＆ネコ",
      stats: [2150, 5, 8, 2980, 184, 420, 2880, 1700, 0, 320, 1, 0, 1, 43, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 2,
      name: "狂乱のネコ耳ユキ",
      stats: [3150, 5, 16, 3725, 184, 420, 2880, 1700, 0, 320, 1, 0, 1, 43, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
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
    names: ["狂乱のユキ", "狂乱のユキ＆ネコ", "狂乱のネコ耳ユキ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 27,
        name: "移動速度アップ",
        type: "normal" as const,
        data: [27, 10, 2, 20, 0, 0, 0, 0, 0, 0, 29, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 22,
        name: "波動ダメージ耐性",
        type: "normal" as const,
        data: [22, 10, 5, 50, 0, 0, 0, 0, 0, 0, 22, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 11,
        name: "生き残る",
        type: "normal" as const,
        data: [11, 10, 28, 100, 0, 0, 0, 0, 0, 0, 11, 7, -1, 0],
        npCost: 235,
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

export default unit270Data;


