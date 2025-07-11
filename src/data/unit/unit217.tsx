// Unit 217 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit217Data: UnitData = {
  unitId: 217,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "エリ",
      stats: [500, 3, 10, 96, 12, 170, 665, 300, 0, 320, 0, 0, 1, 6, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 21
    },
    {
      formId: 1,
      name: "エリCC",
      stats: [650, 3, 10, 140, 12, 170, 665, 300, 0, 320, 0, 0, 1, 6, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 21
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [650, 3, 10, 140, 12, 170, 665, 300, 0, 320, 0, 0, 1, 6, 0, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["エリ", "エリCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit217Data;


