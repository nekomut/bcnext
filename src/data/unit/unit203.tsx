// Unit 203 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit203Data: UnitData = {
  unitId: 203,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "カチカチヤマンズ",
      stats: [600, 4, 16, 70, 0, 290, 480, 240, 0, 320, 0, 0, 1, 3, 0, 9, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 70, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
      animLength: 19
    },
    {
      formId: 1,
      name: "炎護射撃車ウーウー",
      stats: [3200, 2, 38, 1199, 55, 460, 3400, 1200, 0, 320, 0, 0, 1, 61, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 140, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
      animLength: 105
    },
    {
      formId: 2,
      name: "豪炎狙撃車ウーウー",
      stats: [3200, 2, 48, 1199, 55, 460, 3400, 1200, 0, 320, 0, 0, 1, 61, 0, 3, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 140, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
      animLength: 105
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
    names: ["カチカチヤマンズ", "炎護射撃車ウーウー", "豪炎狙撃車ウーウー"],
    talents: {
      hasTalents: true,
      hasUltra: true,
      talentList: [
      {
        id: 20,
        name: "動きを遅くする耐性",
        type: "normal" as const,
        data: [20, 10, 16, 70, 0, 0, 0, 0, 0, 0, 20, 8, -1, 0],
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
        id: 26,
        name: "生産スピードアップ",
        type: "normal" as const,
        data: [26, 10, 20, 200, 0, 0, 0, 0, 0, 0, 32, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 29,
        name: "古代の呪い無効",
        type: "ultra" as const,
        data: [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 10, -1, 1],
        npCost: 150,
        isTotal: false
      },
      {
        id: 10,
        name: "攻撃力アップ",
        type: "ultra" as const,
        data: [10, 10, 50, 50, 5, 50, 0, 0, 0, 0, 10, 12, -1, 1],
        npCost: 285,
        isTotal: true
      },
      {
        id: 3,
        name: "動きを遅くする",
        type: "ultra" as const,
        data: [3, 10, 40, 40, 41, 140, 0, 0, 0, 0, 3, 12, -1, 1],
        npCost: 285,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit203Data;


