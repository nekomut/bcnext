// Unit 027 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit027Data: UnitData = {
  unitId: 27,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコひめ",
      stats: [600, 1, 35, 450, 42, 140, 450, 350, 0, 320, 0, 0, 0, 2, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 161
    },
    {
      formId: 1,
      name: "ネコひめビューティ",
      stats: [600, 1, 35, 450, 42, 140, 450, 350, 0, 320, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 161
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [600, 1, 35, 450, 42, 140, 450, 350, 0, 320, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["ネコひめ", "ネコひめビューティ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit027Data;


