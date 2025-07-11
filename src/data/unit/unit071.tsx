// Unit 071 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit071Data: UnitData = {
  unitId: 71,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "真田幸村",
      stats: [850, 5, 65, 750, 0, 170, 2050, 900, 0, 320, 0, 0, 1, 1, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 75, 0, 8, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 137
    },
    {
      formId: 1,
      name: "武神・真田幸村",
      stats: [1700, 5, 65, 1500, 0, 170, 2050, 900, 0, 320, 0, 0, 1, 1, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 150, 0, 8, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 137
    },
    {
      formId: 2,
      name: "飛翔の武神・真田幸村",
      stats: [1700, 5, 75, 2250, 0, 170, 2050, 900, 0, 320, 0, 0, 1, 1, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 225, 0, 8, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 137
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
    names: ["真田幸村", "武神・真田幸村", "飛翔の武神・真田幸村"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 10,
        name: "攻撃力アップ",
        type: "normal" as const,
        data: [10, 10, 60, 60, 14, 50, 0, 0, 0, 0, 10, 7, -1, 0],
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
      }
      ]
    }
  }
} as const;

export default unit071Data;


