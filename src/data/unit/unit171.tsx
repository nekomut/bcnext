// Unit 171 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit171Data: UnitData = {
  unitId: 171,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "バララガ",
      stats: [500, 5, 3, 150, 35, 140, 3000, 500, 0, 320, 0, 0, 0, 13, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 26
    },
    {
      formId: 1,
      name: "バラランパサラン",
      stats: [1200, 1, 4, 11, 200, 940, 3000, 5000, 0, 320, 1, 0, 1, 94, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 100, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 166
    },
    {
      formId: 2,
      name: "ピカランバララン",
      stats: [1200, 1, 4, 11, 200, 940, 3000, 5000, 0, 320, 1, 0, 1, 94, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 100, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 180, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 166
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
    names: ["バララガ", "バラランパサラン", "ピカランバララン"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 11,
        name: "生き残る",
        type: "normal" as const,
        data: [11, 10, 14, 50, 0, 0, 0, 0, 0, 0, 11, 7, -1, 0],
        npCost: 235,
        isTotal: true
      },
      {
        id: 1,
        name: "攻撃力ダウン",
        type: "normal" as const,
        data: [1, 10, 0, 0, 3, 30, 0, 0, 0, 0, 42, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 22,
        name: "波動ダメージ耐性",
        type: "normal" as const,
        data: [22, 10, 5, 50, 0, 0, 0, 0, 0, 0, 22, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 54,
        name: "裂波ダメージ耐性",
        type: "normal" as const,
        data: [54, 10, 5, 50, 0, 0, 0, 0, 0, 0, 66, 8, -1, 0],
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
      }
      ]
    }
  }
} as const;

export default unit171Data;


