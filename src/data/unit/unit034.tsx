// Unit 034 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit034Data: UnitData = {
  unitId: 34,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコルガ",
      stats: [500, 5, 4, 150, 35, 140, 3000, 500, 0, 320, 0, 0, 0, 13, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 17
    },
    {
      formId: 1,
      name: "ケサランパサラン",
      stats: [1200, 1, 4, 1000, 240, 650, 3000, 5000, 0, 320, 1, 0, 1, 89, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 121
    },
    {
      formId: 2,
      name: "ウルトラケサラン",
      stats: [1200, 1, 4, 2000, 240, 650, 3000, 5000, 0, 320, 1, 0, 1, 89, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 100, 100, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
    names: ["ネコルガ", "ケサランパサラン", "ウルトラケサラン"],
    talents: {
      hasTalents: true,
      hasUltra: true,
      talentList: [
      {
        id: 2,
        name: "動きを止める",
        type: "normal" as const,
        data: [2, 10, 0, 0, 12, 30, 0, 0, 0, 0, 43, 8, -1, 0],
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
        id: 25,
        name: "生産コスト割引",
        type: "normal" as const,
        data: [25, 10, 40, 400, 0, 0, 0, 0, 0, 0, 31, 8, -1, 0],
        npCost: 175,
        isTotal: true
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
        id: 11,
        name: "生き残る",
        type: "ultra" as const,
        data: [11, 10, 28, 100, 0, 0, 0, 0, 0, 0, 11, 12, -1, 1],
        npCost: 285,
        isTotal: true
      },
      {
        id: 51,
        name: "攻撃無効",
        type: "ultra" as const,
        data: [51, 10, 5, 50, 30, 30, 0, 0, 0, 0, 88, 12, -1, 1],
        npCost: 285,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit034Data;


