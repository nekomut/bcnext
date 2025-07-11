// Unit 266 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit266Data: UnitData = {
  unitId: 266,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ねば～る君",
      stats: [610, 3, 9, 310, 53, 225, 600, 320, 0, 320, 0, 0, 1, 28, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 1,
      name: "ねば～る君とにゃんこ",
      stats: [820, 3, 9, 420, 53, 225, 600, 320, 0, 320, 0, 0, 1, 28, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 101
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [820, 3, 9, 420, 53, 225, 600, 320, 0, 320, 0, 0, 1, 28, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["ねば～る君", "ねば～る君とにゃんこ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit266Data;


