// Unit 168 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit168Data: UnitData = {
  unitId: 168,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "アシルガ",
      stats: [500, 5, 5, 150, 35, 140, 3000, 500, 0, 320, 0, 0, 0, 13, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 17
    },
    {
      formId: 1,
      name: "アシランパサラン",
      stats: [1100, 1, 4, 333, 110, 750, 3000, 5000, 0, 320, 1, 0, 1, 151, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 100, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 251
    },
    {
      formId: 2,
      name: "アタタタアシラン",
      stats: [1100, 1, 4, 333, 110, 1250, 3000, 5000, 0, 320, 1, 0, 1, 151, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 100, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 251
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
    names: ["アシルガ", "アシランパサラン", "アタタタアシラン"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 3,
        name: "動きを遅くする",
        type: "normal" as const,
        data: [3, 10, 0, 0, 12, 30, 0, 0, 0, 0, 44, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 11,
        name: "生き残る",
        type: "normal" as const,
        data: [11, 10, 28, 100, 0, 0, 0, 0, 0, 0, 11, 7, -1, 0],
        npCost: 235,
        isTotal: true
      },
      {
        id: 51,
        name: "攻撃無効",
        type: "normal" as const,
        data: [51, 10, 30, 30, 23, 50, 0, 0, 0, 0, 60, 7, -1, 0],
        npCost: 235,
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
        id: 25,
        name: "生産コスト割引",
        type: "normal" as const,
        data: [25, 10, 40, 400, 0, 0, 0, 0, 0, 0, 31, 8, -1, 0],
        npCost: 175,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit168Data;


