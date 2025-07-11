// Unit 037 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit037Data: UnitData = {
  unitId: 37,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコホッピング",
      stats: [300, 3, 10, 65, 15, 150, 240, 140, 0, 320, 0, 0, 0, 16, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 49
    },
    {
      formId: 1,
      name: "ネコマサイ",
      stats: [400, 3, 10, 75, 15, 150, 240, 140, 0, 320, 0, 0, 0, 16, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 49
    },
    {
      formId: 2,
      name: "ネコキョンシー",
      stats: [400, 3, 10, 105, 15, 150, 160, 140, 0, 320, 0, 0, 0, 16, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 49
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
    names: ["ネコホッピング", "ネコマサイ", "ネコキョンシー"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 20,
        name: "動きを遅くする耐性",
        type: "normal" as const,
        data: [20, 10, 16, 70, 0, 0, 0, 0, 0, 0, 20, 2, -1, 0],
        npCost: 75,
        isTotal: true
      },
      {
        id: 22,
        name: "波動ダメージ耐性",
        type: "normal" as const,
        data: [22, 10, 5, 50, 0, 0, 0, 0, 0, 0, 22, 2, -1, 0],
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
      },
      {
        id: 27,
        name: "移動速度アップ",
        type: "normal" as const,
        data: [27, 10, 1, 10, 0, 0, 0, 0, 0, 0, 29, 2, -1, 0],
        npCost: 75,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit037Data;


