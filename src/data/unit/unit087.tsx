// Unit 087 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit087Data: UnitData = {
  unitId: 87,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "竜戦機ライデン",
      stats: [3000, 3, 12, 1515, 45, 385, 3280, 1980, 0, 320, 1, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 100
    },
    {
      formId: 1,
      name: "竜戦機王ライデン",
      stats: [3000, 3, 12, 1515, 45, 385, 3280, 1980, 0, 320, 1, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 100
    },
    {
      formId: 2,
      name: "竜戦機皇帝ライデン",
      stats: [4000, 3, 15, 1515, 45, 415, 3280, 1980, 0, 320, 1, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 100
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
    names: ["竜戦機ライデン", "竜戦機王ライデン", "竜戦機皇帝ライデン"],
    talents: {
      hasTalents: true,
      hasUltra: true,
      talentList: [
      {
        id: 51,
        name: "攻撃無効",
        type: "normal" as const,
        data: [51, 10, 30, 30, 24, 60, 0, 0, 0, 0, 60, 7, -1, 0],
        npCost: 235,
        isTotal: true
      },
      {
        id: 47,
        name: "ふっとばし無効",
        type: "normal" as const,
        data: [47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 19,
        name: "動きを止める耐性",
        type: "normal" as const,
        data: [19, 10, 16, 70, 0, 0, 0, 0, 0, 0, 19, 8, -1, 0],
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
      },
      {
        id: 46,
        name: "動きを遅くする無効",
        type: "ultra" as const,
        data: [46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 10, -1, 1],
        npCost: 150,
        isTotal: false
      },
      {
        id: 55,
        name: "裂波ダメージ無効",
        type: "ultra" as const,
        data: [55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 10, -1, 1],
        npCost: 150,
        isTotal: false
      },
      {
        id: 64,
        name: "超獣特効",
        type: "ultra" as const,
        data: [64, 0, 5, 5, 30, 30, 0, 0, 0, 0, 86, 10, -1, 1],
        npCost: 150,
        isTotal: false
      }
      ]
    }
  }
} as const;

export default unit087Data;


