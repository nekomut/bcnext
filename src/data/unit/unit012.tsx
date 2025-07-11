// Unit 012 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit012Data: UnitData = {
  unitId: 12,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "猫縛り",
      stats: [700, 1, 5, 100, 3, 120, 690, 220, 0, 320, 1, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 45
    },
    {
      formId: 1,
      name: "猫縛りNEO",
      stats: [700, 1, 5, 100, 3, 120, 690, 220, 0, 320, 1, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 45
    },
    {
      formId: 2,
      name: "猫縛り極上",
      stats: [1400, 1, 5, 100, 3, 120, 690, 220, 0, 320, 1, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 45
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
    names: ["猫縛り", "猫縛りNEO", "猫縛り極上"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 2,
        name: "動きを止める",
        type: "normal" as const,
        data: [2, 10, 30, 30, 15, 60, 0, 0, 0, 0, 2, 4, -1, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 51,
        name: "攻撃無効",
        type: "normal" as const,
        data: [51, 10, 40, 40, 12, 30, 0, 0, 0, 0, 60, 4, -1, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 46,
        name: "動きを遅くする無効",
        type: "normal" as const,
        data: [46, 1, 0, 0, 0, 0, 0, 0, 0, 0, 55, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 8, 80, 0, 0, 0, 0, 0, 0, 27, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 31,
        name: "基本攻撃力アップ",
        type: "normal" as const,
        data: [31, 10, 8, 80, 0, 0, 0, 0, 0, 0, 28, 5, -1, 0],
        npCost: 125,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit012Data;


