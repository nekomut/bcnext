// Unit 082 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit082Data: UnitData = {
  unitId: 82,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコ忍者～青～",
      stats: [255, 3, 13, 15, 4, 154, 200, 105, 0, 320, 1, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 15, 0, 14, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 1,
      name: "ネコ忍者～橙～",
      stats: [255, 3, 13, 15, 4, 154, 200, 105, 0, 320, 1, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 15, 0, 14, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [255, 3, 13, 27, 8, 154, 200, 105, 0, 320, 1, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
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
    names: ["ネコ忍者～青～", "ネコ忍者～橙～"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit082Data;


