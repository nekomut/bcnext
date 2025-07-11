// Unit 145 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit145Data: UnitData = {
  unitId: 145,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ねこガンマン",
      stats: [310, 3, 9, 80, 0, 290, 430, 230, 0, 320, 0, 0, 0, 4, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    },
    {
      formId: 1,
      name: "ねこウエスタン",
      stats: [360, 3, 9, 93, 0, 290, 430, 230, 0, 320, 0, 0, 0, 4, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    },
    {
      formId: 2,
      name: "ねこロデオ",
      stats: [460, 3, 9, 106, 0, 320, 430, 230, 0, 320, 0, 0, 0, 4, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 83
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
    names: ["ねこガンマン", "ねこウエスタン", "ねこロデオ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 30,
        name: "古代の呪い耐性",
        type: "normal" as const,
        data: [30, 10, 16, 70, 0, 0, 0, 0, 0, 0, 26, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 40,
        name: "属性 古代種",
        type: "normal" as const,
        data: [40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 3, -1, 0],
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

export default unit145Data;


