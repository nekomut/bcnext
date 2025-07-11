// Unit 062 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit062Data: UnitData = {
  unitId: 62,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコポン",
      stats: [450, 1, 8, 10, 30, 110, 100, 120, 0, 320, 0, 0, 1, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 29
    },
    {
      formId: 1,
      name: "ネコポニョン",
      stats: [450, 1, 8, 10, 30, 110, 100, 120, 0, 320, 0, 0, 1, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 29
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [450, 1, 8, 10, 30, 110, 100, 120, 0, 320, 0, 0, 1, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
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
    names: ["ネコポン", "ネコポニョン"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit062Data;


