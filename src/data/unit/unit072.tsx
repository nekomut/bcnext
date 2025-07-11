// Unit 072 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit072Data: UnitData = {
  unitId: 72,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "前田慶次",
      stats: [1500, 2, 8, 650, 90, 250, 2390, 1150, 0, 320, 0, 0, 1, 11, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 61
    },
    {
      formId: 1,
      name: "武神・前田慶次",
      stats: [3800, 2, 8, 1300, 90, 250, 2390, 1150, 0, 320, 0, 0, 1, 11, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 100, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 61
    },
    {
      formId: 2,
      name: "憤怒の武神・前田慶次",
      stats: [5800, 2, 8, 1300, 50, 320, 2390, 1150, 0, 320, 0, 0, 1, 11, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 100, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 61
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
    names: ["前田慶次", "武神・前田慶次", "憤怒の武神・前田慶次"],
    talents: {
      hasTalents: true,
      hasUltra: true,
      talentList: [
      {
        id: 10,
        name: "攻撃力アップ",
        type: "normal" as const,
        data: [10, 10, 0, 0, 23, 50, 0, 0, 0, 0, 46, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 18,
        name: "攻撃力ダウン耐性",
        type: "normal" as const,
        data: [18, 10, 16, 70, 0, 0, 0, 0, 0, 0, 18, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 25,
        name: "生産コスト割引",
        type: "normal" as const,
        data: [25, 10, 30, 300, 0, 0, 0, 0, 0, 0, 31, 8, -1, 0],
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
      },
      {
        id: 34,
        name: "属性 浮いてる敵",
        type: "ultra" as const,
        data: [34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 10, -1, 1],
        npCost: 150,
        isTotal: false
      },
      {
        id: 17,
        name: "波動攻撃",
        type: "ultra" as const,
        data: [17, 10, 2, 20, 3, 3, 0, 0, 0, 0, 17, 12, -1, 1],
        npCost: 285,
        isTotal: true
      },
      {
        id: 45,
        name: "動きを止める無効",
        type: "ultra" as const,
        data: [45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 10, -1, 1],
        npCost: 150,
        isTotal: false
      }
      ]
    }
  }
} as const;

export default unit072Data;


