// Unit 357 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit357Data: UnitData = {
  unitId: 357,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "狼娘ディル",
      stats: [1750, 5, 12, 411, 38, 415, 3080, 1900, 0, 320, 0, 0, 1, 30, 0, 9, 0, 0, 0, 0, 1, 1, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 411, 411, 60, 90, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 121
    },
    {
      formId: 1,
      name: "虚飾の狼姫ディル",
      stats: [2500, 5, 12, 588, 38, 415, 3080, 1900, 0, 320, 0, 0, 1, 30, 0, 9, 0, 0, 0, 0, 1, 1, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 588, 588, 60, 90, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 121
    },
    {
      formId: 2,
      name: "道化の狼姫ディル",
      stats: [2500, 5, 12, 588, 0, 415, 3080, 1900, 0, 320, 0, 0, 1, 30, 0, 9, 0, 0, 0, 0, 1, 1, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 588, 588, 60, 90, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 121
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
    names: ["狼娘ディル", "虚飾の狼姫ディル", "道化の狼姫ディル"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 8,
        name: "ふっとばす",
        type: "normal" as const,
        data: [8, 10, 2, 20, 0, 0, 0, 0, 0, 0, 45, 8, -1, 0],
        npCost: 175,
        isTotal: true
      },
      {
        id: 48,
        name: "波動ダメージ無効",
        type: "normal" as const,
        data: [48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 9, -1, 0],
        npCost: 100,
        isTotal: false
      },
      {
        id: 44,
        name: "攻撃力ダウン無効",
        type: "normal" as const,
        data: [44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 9, -1, 0],
        npCost: 100,
        isTotal: false
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

export default unit357Data;


