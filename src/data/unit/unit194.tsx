// Unit 194 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit194Data: UnitData = {
  unitId: 194,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "アキラ",
      stats: [3000, 3, 13, 1500, 25, 430, 3240, 2200, 0, 320, 0, 0, 1, 108, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 50, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 152
    },
    {
      formId: 1,
      name: "シャドウ・アキラ",
      stats: [3000, 3, 13, 1500, 25, 430, 3240, 2200, 0, 320, 0, 0, 1, 108, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 156
    },
    {
      formId: 2,
      name: "インフェルノ・アキラ",
      stats: [3000, 3, 13, 1500, 25, 430, 3240, 2200, 0, 320, 0, 0, 1, 108, 0, 9, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 152
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
    names: ["アキラ", "シャドウ・アキラ", "インフェルノ・アキラ"],
    talents: {
      hasTalents: true,
      hasUltra: true,
      talentList: [
      {
        id: 2,
        name: "動きを止める",
        type: "normal" as const,
        data: [2, 10, 40, 40, 39, 120, 0, 0, 0, 0, 2, 7, -1, 0],
        npCost: 235,
        isTotal: true
      },
      {
        id: 10,
        name: "攻撃力アップ",
        type: "normal" as const,
        data: [10, 10, 67, 67, 23, 50, 0, 0, 0, 0, 10, 7, -1, 0],
        npCost: 235,
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
      },
      {
        id: 57,
        name: "属性 悪魔",
        type: "ultra" as const,
        data: [57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 10, -1, 1],
        npCost: 150,
        isTotal: false
      },
      {
        id: 56,
        name: "裂波攻撃",
        type: "ultra" as const,
        data: [56, 10, 10, 100, 1, 1, 1720, 1720, 1400, 1400, 68, 12, -1, 1],
        npCost: 285,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit194Data;


