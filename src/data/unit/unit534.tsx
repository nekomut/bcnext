// Unit 534 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit534Data: UnitData = {
  unitId: 534,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "冥界神ハデス",
      stats: [19000, 2, 8, 210, 0, 250, 2950, 2100, 0, 320, 0, 0, 1, 15, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 210, 210, 30, 45, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      animLength: 61
    },
    {
      formId: 1,
      name: "デスハーデス",
      stats: [25000, 2, 8, 280, 0, 250, 2950, 2100, 0, 320, 0, 0, 1, 15, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 280, 280, 30, 45, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      animLength: 61
    },
    {
      formId: 2,
      name: "Gデスハーデス",
      stats: [25000, 2, 8, 280, 0, 250, 2950, 2100, 0, 320, 0, 0, 1, 15, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, -1, 0, -1, 0, 280, 280, 30, 45, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      animLength: 61
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
    names: ["冥界神ハデス", "デスハーデス", "Gデスハーデス"],
    talents: {
      hasTalents: true,
      hasUltra: false,
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
        id: 3,
        name: "動きを遅くする",
        type: "normal" as const,
        data: [3, 10, 20, 20, 3, 30, 0, 0, 0, 0, 69, 12, 300, 0],
        npCost: 285,
        isTotal: true
      },
      {
        id: 1,
        name: "攻撃力ダウン",
        type: "normal" as const,
        data: [1, 10, 20, 20, 3, 30, 50, 50, 0, 0, 70, 12, 301, 0],
        npCost: 285,
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

export default unit534Data;


