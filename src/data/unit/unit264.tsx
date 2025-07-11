// Unit 264 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit264Data: UnitData = {
  unitId: 264,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "クロミ",
      stats: [420, 4, 12, 30, 11, 160, 320, 210, 0, 320, 0, 0, 0, 11, 0, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 30, 0, 19, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 31
    },
    {
      formId: 1,
      name: "クロミとにゃんこたち",
      stats: [550, 4, 12, 40, 11, 160, 320, 210, 0, 320, 0, 0, 0, 11, 0, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 40, 0, 19, 0, 1, 1, 0, -1, 0, 0, 0],
      animLength: 31
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [550, 4, 12, 72, 11, 160, 320, 210, 0, 320, 0, 0, 0, 11, 0, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0],
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
    names: ["クロミ", "クロミとにゃんこたち"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit264Data;


