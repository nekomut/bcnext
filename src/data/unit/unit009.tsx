// Unit 009 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit009Data: UnitData = {
  unitId: 9,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコ女優",
      stats: [400, 3, 10, 100, 60, 350, 600, 165, 0, 320, 0, 0, 1, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 12
    },
    {
      formId: 1,
      name: "ネコ聖母",
      stats: [400, 3, 10, 100, 60, 350, 600, 165, 0, 320, 0, 0, 1, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 2,
      name: "ネコマッチョ",
      stats: [650, 3, 10, 100, 40, 350, 600, 165, 0, 320, 0, 0, 1, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
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
    names: ["ネコ女優", "ネコ聖母", "ネコマッチョ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 10,
        name: "攻撃力アップ",
        type: "normal" as const,
        data: [10, 10, 67, 67, 5, 50, 0, 0, 0, 0, 10, 4, -1, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 55,
        name: "裂波ダメージ無効",
        type: "normal" as const,
        data: [55, 1, 0, 0, 0, 0, 0, 0, 0, 0, 67, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 20,
        name: "動きを遅くする耐性",
        type: "normal" as const,
        data: [20, 10, 16, 70, 0, 0, 0, 0, 0, 0, 20, 5, -1, 0],
        npCost: 125,
        isTotal: true
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

export default unit009Data;


