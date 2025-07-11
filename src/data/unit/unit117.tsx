// Unit 117 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit117Data: UnitData = {
  unitId: 117,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "アウラ",
      stats: [960, 2, 7, 420, 0, 280, 1120, 720, 0, 320, 0, 0, 1, 46, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 111
    },
    {
      formId: 1,
      name: "アウラCC",
      stats: [1160, 2, 7, 670, 0, 280, 1120, 720, 0, 320, 0, 0, 1, 46, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 111
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [1160, 2, 7, 670, 0, 280, 1120, 720, 0, 320, 0, 0, 1, 46, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
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
    names: ["アウラ", "アウラCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit117Data;


