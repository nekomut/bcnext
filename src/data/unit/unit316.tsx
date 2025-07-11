// Unit 316 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit316Data: UnitData = {
  unitId: 316,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "海王神ポセイドン",
      stats: [2250, 5, 30, 1850, 0, 350, 2600, 1400, 0, 320, 0, 0, 1, 53, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 221
    },
    {
      formId: 1,
      name: "ポセイドラグーン",
      stats: [3000, 5, 30, 2500, 0, 350, 2600, 1400, 0, 320, 0, 0, 1, 53, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 221
    },
    {
      formId: 2,
      name: "Gポセイドラグーン",
      stats: [3300, 5, 36, 2750, 0, 350, 2600, 1400, 0, 320, 0, 0, 1, 53, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 223
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
    names: ["海王神ポセイドン", "ポセイドラグーン", "Gポセイドラグーン"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 51,
        name: "攻撃無効",
        type: "normal" as const,
        data: [51, 10, 20, 20, 23, 50, 0, 0, 0, 0, 60, 7, -1, 0],
        npCost: 235,
        isTotal: true
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
        id: 50,
        name: "渾身の一撃",
        type: "normal" as const,
        data: [50, 10, 3, 30, 200, 200, 0, 0, 0, 0, 59, 7, -1, 0],
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

export default unit316Data;


