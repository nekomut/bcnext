// Unit 001 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit001Data: UnitData = {
  unitId: 1,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "タンクネコ",
      stats: [400, 1, 8, 2, 30, 110, 100, 120, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 1,
      name: "ネコカベ",
      stats: [400, 1, 8, 2, 30, 110, 100, 120, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 2,
      name: "ゴムネコ",
      stats: [600, 1, 8, 4, 30, 110, 100, 120, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    }
    ],
    rarity: {
      id: 0,
      name: "基本",
      maxLevels: [20, 90]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  },
  auxiliaryData: {
    names: ["タンクネコ", "ネコカベ", "ゴムネコ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit001Data;


