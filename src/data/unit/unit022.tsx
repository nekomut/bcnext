// Unit 022 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit022Data: UnitData = {
  unitId: 22,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコフィーバー",
      stats: [200, 3, 6, 20, 15, 140, 50, 120, 0, 320, 0, 0, 0, 14, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 32
    },
    {
      formId: 1,
      name: "ネコカーニバル",
      stats: [200, 3, 6, 20, 15, 140, 50, 120, 0, 320, 0, 0, 0, 14, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 32
    },
    {
      formId: 2,
      name: "ネコアミーゴ",
      stats: [200, 3, 6, 20, 15, 140, 50, 120, 0, 320, 1, 0, 0, 14, 0, 9, 1, 1, 0, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 32
    }
    ],
    rarity: {
      id: 1,
      name: "EX",
      maxLevels: [50, 0]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  },
  auxiliaryData: {
    names: ["ネコフィーバー", "ネコカーニバル", "ネコアミーゴ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 8,
        name: "ふっとばす",
        type: "normal" as const,
        data: [8, 10, 5, 15, 0, 0, 0, 0, 0, 0, 45, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 55,
        name: "裂波ダメージ無効",
        type: "normal" as const,
        data: [55, 1, 0, 0, 0, 0, 0, 0, 0, 0, 67, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 19,
        name: "動きを止める耐性",
        type: "normal" as const,
        data: [19, 10, 16, 70, 0, 0, 0, 0, 0, 0, 19, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 20,
        name: "動きを遅くする耐性",
        type: "normal" as const,
        data: [20, 10, 16, 70, 0, 0, 0, 0, 0, 0, 20, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 8, 80, 0, 0, 0, 0, 0, 0, 27, 5, -1, 0],
        npCost: 125,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit022Data;


