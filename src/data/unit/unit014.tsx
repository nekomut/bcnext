// Unit 014 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit014Data: UnitData = {
  unitId: 14,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコの箱詰め",
      stats: [800, 3, 35, 300, 0, 140, 750, 230, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 1,
      name: "ネコギャング",
      stats: [800, 3, 35, 300, 0, 140, 750, 230, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 2,
      name: "重機C・A・T",
      stats: [800, 3, 30, 300, 0, 199, 750, 230, 0, 320, 0, 0, 1, 8, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 200, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
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
    names: ["ネコの箱詰め", "ネコギャング", "重機C・A・T"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 7,
        name: "超ダメージ",
        type: "normal" as const,
        data: [7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 44,
        name: "攻撃力ダウン無効",
        type: "normal" as const,
        data: [44, 1, 0, 0, 0, 0, 0, 0, 0, 0, 53, 6, -1, 0],
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

export default unit014Data;


