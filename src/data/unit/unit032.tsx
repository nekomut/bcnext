// Unit 032 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit032Data: UnitData = {
  unitId: 32,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコザイル",
      stats: [750, 5, 11, 750, 80, 220, 450, 320, 0, 320, 1, 0, 0, 36, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 46
    },
    {
      formId: 1,
      name: "ネコ裸踊り",
      stats: [1500, 5, 11, 1500, 80, 220, 450, 320, 0, 320, 1, 0, 0, 36, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 46
    },
    {
      formId: 2,
      name: "ネコカンカン",
      stats: [2250, 5, 11, 2250, 80, 220, 450, 320, 0, 320, 1, 0, 0, 36, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      animLength: 46
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
    names: ["ネコザイル", "ネコ裸踊り", "ネコカンカン"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 16,
        name: "撃破時お金アップ",
        type: "normal" as const,
        data: [16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 38,
        name: "属性 エイリアン",
        type: "normal" as const,
        data: [38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 6, -1, 0],
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
      },
      {
        id: 31,
        name: "基本攻撃力アップ",
        type: "normal" as const,
        data: [31, 10, 2, 20, 0, 0, 0, 0, 0, 0, 28, 5, -1, 0],
        npCost: 125,
        isTotal: true
      },
      {
        id: 27,
        name: "移動速度アップ",
        type: "normal" as const,
        data: [27, 10, 1, 10, 0, 0, 0, 0, 0, 0, 29, 5, -1, 0],
        npCost: 125,
        isTotal: true
      }
      ]
    }
  }
} as const;

export default unit032Data;


