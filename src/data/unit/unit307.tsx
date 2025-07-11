// Unit 307 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit307Data: UnitData = {
  unitId: 307,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコジャンパー",
      stats: [450, 3, 14, 400, 0, 350, 700, 450, 0, 320, 0, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 50, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 300, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 161
    },
    {
      formId: 1,
      name: "ネコボールター",
      stats: [600, 3, 14, 550, 0, 350, 700, 450, 0, 320, 0, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 50, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 300, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 161
    },
    {
      formId: 2,
      name: "ネコ奥様",
      stats: [750, 3, 20, 550, 0, 350, 700, 450, 0, 320, 0, 0, 1, 40, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 300, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 161
    }
    ],
    rarity: {
      id: 3,
      name: "激レア",
      maxLevels: [50, 70]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["ネコジャンパー", "ネコボールター", "ネコ奥様"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 50,
        name: "渾身の一撃",
        type: "normal" as const,
        data: [50, 10, 3, 30, 200, 200, 0, 0, 0, 0, 59, 4, -1, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 18,
        name: "攻撃力ダウン耐性",
        type: "normal" as const,
        data: [18, 10, 16, 70, 0, 0, 0, 0, 0, 0, 18, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 30,
        name: "古代の呪い耐性",
        type: "normal" as const,
        data: [30, 10, 16, 70, 0, 0, 0, 0, 0, 0, 26, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 2, 20, 0, 0, 0, 0, 0, 0, 27, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 31,
        name: "基本攻撃力アップ",
        type: "normal" as const,
        data: [31, 10, 2, 20, 0, 0, 0, 0, 0, 0, 28, 5, -1, 0],
        npCost: 125,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit307Data;


