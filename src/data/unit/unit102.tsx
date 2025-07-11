// Unit 102 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit102Data: UnitData = {
  unitId: 102,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "レッドマローン",
      stats: [100, 4, 10, 8, 10, 140, 50, 75, 0, 320, 0, 0, 0, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 35
    },
    {
      formId: 1,
      name: "レッドマローンCC",
      stats: [100, 4, 10, 8, 10, 140, 50, 75, 0, 320, 0, 0, 0, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 35
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [100, 4, 10, 8, 10, 140, 50, 75, 0, 320, 0, 0, 0, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["レッドマローン", "レッドマローンCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit102Data;


