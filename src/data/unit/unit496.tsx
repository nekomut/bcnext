// Unit 496 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit496Data: UnitData = {
  unitId: 496,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "成田甲斐",
      stats: [2400, 2, 5, 1200, 53, 440, 3500, 2200, 0, 320, 0, 0, 1, 54, 0, 9, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 100, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 1,
      name: "武神・成田甲斐",
      stats: [3200, 2, 5, 1500, 53, 440, 3500, 2200, 0, 320, 0, 0, 1, 54, 0, 9, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 100, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 2,
      name: "豪炎姫の武神・成田甲斐",
      stats: [6400, 2, 5, 1500, 53, 440, 3500, 2200, 0, 320, 0, 0, 1, 54, 0, 9, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 100, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 111
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
    names: ["成田甲斐", "武神・成田甲斐", "豪炎姫の武神・成田甲斐"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 1,
        name: "攻撃力ダウン",
        type: "normal" as const,
        data: [1, 10, 40, 40, 39, 120, 50, 50, 0, 0, 1, 7, -1, 0],
        npCost: 235,
        isTotal: true
      },
      {
        id: 29,
        name: "古代の呪い無効",
        type: "normal" as const,
        data: [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 25,
        name: "生産コスト割引",
        type: "normal" as const,
        data: [25, 10, 80, 800, 0, 0, 0, 0, 0, 0, 31, 8, -1, 0],
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
      }
      ]
    }
  }
} as const;

export default unit496Data;


