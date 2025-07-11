// Unit 185 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit185Data: UnitData = {
  unitId: 185,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ハルシュト",
      stats: [1500, 3, 8, 400, 88, 295, 1700, 1350, 0, 320, 0, 0, 0, 14, 0, 9, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 63
    },
    {
      formId: 1,
      name: "ハルシュトCC",
      stats: [2000, 3, 8, 600, 88, 295, 1700, 1350, 0, 320, 0, 0, 0, 14, 0, 9, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 63
    },
    {
      formId: 2,
      name: "革命のハルシュトCC",
      stats: [2500, 3, 12, 600, 88, 345, 1700, 1350, 0, 320, 0, 0, 0, 14, 0, 9, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 63
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
    names: ["ハルシュト", "ハルシュトCC", "革命のハルシュトCC"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 2,
        name: "動きを止める",
        type: "normal" as const,
        data: [2, 10, 40, 40, 9, 90, 0, 0, 0, 0, 2, 7, -1, 0],
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
        id: 10,
        name: "攻撃力アップ",
        type: "normal" as const,
        data: [10, 10, 67, 67, 5, 50, 0, 0, 0, 0, 10, 7, -1, 0],
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

export default unit185Data;


