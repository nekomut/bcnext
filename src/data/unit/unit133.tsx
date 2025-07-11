// Unit 133 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit133Data: UnitData = {
  unitId: 133,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ヒカキン",
      stats: [500, 3, 10, 150, 60, 350, 444, 240, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 1,
      name: "ビキャキン",
      stats: [500, 3, 10, 150, 60, 350, 444, 240, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 2,
      name: "ムキャキン",
      stats: [500, 3, 10, 150, 60, 350, 444, 240, 0, 320, 0, 0, 1, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
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
    names: ["ヒカキン", "ビキャキン", "ムキャキン"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit133Data;


