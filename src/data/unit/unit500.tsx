// Unit 500 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit500Data: UnitData = {
  unitId: 500,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "501_1",
      stats: [100, 3, 10, 8, 15, 140, 50, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 1,
      name: "501_2",
      stats: [100, 3, 10, 8, 15, 140, 50, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 2,
      name: "501_3",
      stats: [200, 3, 10, 16, 15, 140, 50, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["501_1", "501_2", "501_3"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit500Data;


