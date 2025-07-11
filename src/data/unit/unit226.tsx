// Unit 226 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit226Data: UnitData = {
  unitId: 226,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "呪術師デスピエロ",
      stats: [6200, 2, 8, 6410, 85, 430, 4090, 2600, 0, 320, 0, 0, 1, 70, 0, 9, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
      animLength: 126
    },
    {
      formId: 1,
      name: "闇商人バビル",
      stats: [6200, 2, 8, 6410, 85, 430, 4090, 2600, 0, 320, 0, 0, 1, 70, 0, 9, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
      animLength: 126
    },
    {
      formId: 2,
      name: "奇術科学者クレイG",
      stats: [9300, 2, 8, 9615, 85, 430, 4090, 2600, 0, 320, 0, 0, 1, 70, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
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
    names: ["呪術師デスピエロ", "闇商人バビル", "奇術科学者クレイG"],
    talents: {
      hasTalents: true,
      hasUltra: true,
      talentList: [
      {
        id: 29,
        name: "古代の呪い無効",
        type: "normal" as const,
        data: [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 48,
        name: "波動ダメージ無効",
        type: "normal" as const,
        data: [48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 49,
        name: "ワープ無効",
        type: "normal" as const,
        data: [49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 9, -1, 0],
        npCost: 100,
        isTotal: false
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
        id: 41,
        name: "属性を持たない敵",
        type: "ultra" as const,
        data: [41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 10, -1, 1],
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
        id: 63,
        name: "超生命体特効",
        type: "ultra" as const,
        data: [63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 10, -1, 1],
        npCost: 150,
        isTotal: false
      }
      ]
    }
  }
} as const;

export default unit226Data;


