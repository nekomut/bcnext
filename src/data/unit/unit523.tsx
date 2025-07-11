// Unit 523 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit523Data: UnitData = {
  unitId: 523,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコ武闘家",
      stats: [510, 1, 9, 73, 0, 120, 240, 220, 0, 320, 0, 0, 0, 10, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 73, 73, 20, 35, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 54
    },
    {
      formId: 1,
      name: "ネコ師範",
      stats: [660, 1, 9, 91, 0, 120, 240, 220, 0, 320, 0, 0, 0, 10, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, -1, 0, 91, 91, 20, 35, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 54
    },
    {
      formId: 2,
      name: "ネコマスター",
      stats: [960, 1, 9, 91, 0, 120, 240, 220, 0, 320, 0, 0, 0, 10, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, -1, 0, -1, 0, 91, 91, 20, 35, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 54
    }
    ],
    rarity: {
      id: 2,
      name: "レア",
      maxLevels: [50, 80]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["ネコ武闘家", "ネコ師範", "ネコマスター"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 1,
        name: "攻撃力ダウン",
        type: "normal" as const,
        data: [1, 10, 5, 5, 9, 90, 50, 50, 0, 0, 1, 1, -1, 0],
        npCost: 95,
        isTotal: true
      },
      {
        id: 49,
        name: "ワープ無効",
        type: "normal" as const,
        data: [49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 3, -1, 0],
        npCost: 50,
        isTotal: false
      },
      {
        id: 19,
        name: "動きを止める耐性",
        type: "normal" as const,
        data: [19, 10, 5, 50, 0, 0, 0, 0, 0, 0, 19, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 2, 20, 0, 0, 0, 0, 0, 0, 27, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 31,
        name: "基本攻撃力アップ",
        type: "normal" as const,
        data: [31, 10, 2, 20, 0, 0, 0, 0, 0, 0, 28, 2, -1, 0],
        npCost: 75,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit523Data;


