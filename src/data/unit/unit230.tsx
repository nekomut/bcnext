// Unit 230 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit230Data: UnitData = {
  unitId: 230,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "デビルサンディア",
      stats: [1150, 5, 8, 1855, 154, 425, 2940, 1560, 0, 320, 0, 0, 1, 90, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 151
    },
    {
      formId: 1,
      name: "デビルサンディアβ",
      stats: [2250, 5, 8, 3255, 154, 425, 2940, 1560, 0, 320, 0, 0, 1, 90, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 151
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [2250, 5, 8, 3255, 154, 425, 2940, 1560, 0, 320, 0, 0, 1, 90, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
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
    names: ["デビルサンディア", "デビルサンディアβ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit230Data;


