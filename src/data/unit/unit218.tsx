// Unit 218 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit218Data: UnitData = {
  unitId: 218,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "フィオ",
      stats: [179, 3, 10, 60, 26, 330, 660, 300, 0, 320, 0, 0, 0, 4, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 25
    },
    {
      formId: 1,
      name: "フィオCC",
      stats: [230, 3, 10, 85, 26, 330, 660, 300, 0, 320, 0, 0, 0, 4, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 25
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [230, 3, 10, 85, 26, 330, 660, 300, 0, 320, 0, 0, 0, 4, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["フィオ", "フィオCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit218Data;


