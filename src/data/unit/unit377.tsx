// Unit 377 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit377Data: UnitData = {
  unitId: 377,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコフェンシング",
      stats: [600, 1, 10, 600, 46, 320, 550, 270, 0, 320, 0, 0, 0, 51, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 84
    },
    {
      formId: 1,
      name: "ネコ剣道",
      stats: [900, 1, 10, 900, 46, 320, 550, 270, 0, 320, 0, 0, 0, 51, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 84
    },
    {
      formId: 2,
      name: "自由のネコ",
      stats: [1050, 1, 10, 1050, 46, 320, 550, 270, 0, 320, 0, 0, 0, 21, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 52
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
    names: ["ネコフェンシング", "ネコ剣道", "自由のネコ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 8,
        name: "ふっとばす",
        type: "normal" as const,
        data: [8, 10, 5, 50, 0, 0, 0, 0, 0, 0, 75, 4, 305, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 49,
        name: "ワープ無効",
        type: "normal" as const,
        data: [49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 6, -1, 0],
        npCost: 75,
        isTotal: false
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

export default unit377Data;


