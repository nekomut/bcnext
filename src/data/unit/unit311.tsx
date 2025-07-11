// Unit 311 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit311Data: UnitData = {
  unitId: 311,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ちびネコフィッシュ",
      stats: [280, 3, 8, 180, 22, 140, 800, 195, 0, 320, 1, 0, 0, 10, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 1,
      name: "ちびネコクジラ",
      stats: [280, 3, 8, 180, 22, 140, 800, 195, 0, 320, 1, 0, 0, 10, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 2,
      name: "ちびネコ島",
      stats: [1120, 3, 8, 360, 22, 140, 800, 255, 0, 320, 1, 0, 0, 10, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 29
    }
    ],
    rarity: {
      id: 1,
      name: "EX",
      maxLevels: [50, 60]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  },
  auxiliaryData: {
    names: ["ちびネコフィッシュ", "ちびネコクジラ", "ちびネコ島"],
    talents: {
      hasTalents: true,
      hasUltra: false,
      talentList: [
      {
        id: 57,
        name: "属性 悪魔",
        type: "normal" as const,
        data: [57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 6, -1, 0],
        npCost: 75,
        isTotal: false
      },
      {
        id: 17,
        name: "波動攻撃",
        type: "normal" as const,
        data: [17, 10, 2, 20, 2, 2, 0, 0, 0, 0, 17, 4, -1, 0],
        npCost: 165,
        isTotal: true
      },
      {
        id: 30,
        name: "古代の呪い耐性",
        type: "normal" as const,
        data: [30, 10, 16, 70, 0, 0, 0, 0, 0, 0, 26, 5, -1, 0],
        npCost: 125,
        isTotal: true
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
      }
      ]
    }
  }
} as const;

export default unit311Data;


