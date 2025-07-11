// Unit 033 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit033Data: UnitData = {
  unitId: 33,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ねこタツ",
      stats: [1200, 1, 10, 100, 0, 130, 480, 280, 0, 320, 0, 0, 0, 42, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 30, 200, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 51
    },
    {
      formId: 1,
      name: "ねこＴＶ",
      stats: [1600, 1, 10, 200, 0, 130, 480, 280, 0, 320, 0, 0, 0, 42, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 30, 200, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 51
    },
    {
      formId: 2,
      name: "ねこタコつぼ",
      stats: [1600, 1, 10, 300, 0, 130, 480, 280, 0, 320, 0, 0, 0, 42, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 30, 200, 50, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 63
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
    names: ["ねこタツ", "ねこＴＶ", "ねこタコつぼ"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 1,
        name: "攻撃力ダウン",
        type: "normal" as const,
        data: [1, 10, 0, 0, 5, 50, 0, 0, 0, 0, 42, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 19,
        name: "動きを止める耐性",
        type: "normal" as const,
        data: [19, 10, 16, 70, 0, 0, 0, 0, 0, 0, 19, 5, -1, 0],
        npCost: 125,
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
        id: 29,
        name: "古代の呪い無効",
        type: "normal" as const,
        data: [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 32,
        name: "基本体力アップ",
        type: "normal" as const,
        data: [32, 10, 2, 20, 0, 0, 0, 0, 0, 0, 27, 5, -1, 0],
        npCost: 125,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit033Data;


