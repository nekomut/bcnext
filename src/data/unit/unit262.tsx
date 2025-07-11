// Unit 262 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit262Data: UnitData = {
  unitId: 262,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ニャームス",
      stats: [520, 3, 8, 240, 50, 300, 560, 300, 0, 320, 1, 0, 1, 50, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 76
    },
    {
      formId: 1,
      name: "ネコニャームス",
      stats: [700, 3, 8, 320, 50, 300, 560, 300, 0, 320, 1, 0, 1, 50, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 76
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [700, 3, 8, 320, 50, 300, 560, 300, 0, 320, 1, 0, 1, 50, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
    }
    ],
    rarity: {
      id: 1,
      name: "EX",
      maxLevels: [50, 10]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  },
  auxiliaryData: {
    names: ["ニャームス", "ネコニャームス"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit262Data;


