// Unit 020 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit020Data: UnitData = {
  unitId: 20,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコざむらい",
      stats: [540, 3, 7, 130, 20, 150, 350, 150, 0, 320, 0, 0, 0, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 24
    },
    {
      formId: 1,
      name: "ネコナイト",
      stats: [540, 3, 7, 130, 20, 160, 350, 150, 0, 320, 0, 0, 0, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 24
    },
    {
      formId: 2,
      name: "ネコパティシエ",
      stats: [540, 3, 7, 130, 20, 160, 350, 150, 0, 320, 1, 0, 0, 18, 0, 9, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 10, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 24
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
    names: ["ネコざむらい", "ネコナイト", "ネコパティシエ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 15,
        name: "バリアブレイカー",
        type: "normal" as const,
        data: [15, 10, 2, 20, 0, 0, 0, 0, 0, 0, 15, 4, -1, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 1,
        name: "攻撃力ダウン",
        type: "normal" as const,
        data: [1, 10, 10, 10, 24, 60, 50, 50, 0, 0, 1, 4, -1, 0],
        npCost: 165,
        isTotal: true
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

export default unit020Data;


