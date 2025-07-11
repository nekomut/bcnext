// Unit 115 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit115Data: UnitData = {
  unitId: 115,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "セラム",
      stats: [305, 6, 16, 120, 45, 250, 340, 220, 0, 320, 0, 0, 0, 17, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 49
    },
    {
      formId: 1,
      name: "セラムCC",
      stats: [350, 6, 16, 155, 45, 250, 340, 220, 0, 320, 0, 0, 0, 17, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 49
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [350, 6, 16, 155, 45, 250, 340, 220, 0, 320, 0, 0, 0, 17, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
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
    names: ["セラム", "セラムCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit115Data;


