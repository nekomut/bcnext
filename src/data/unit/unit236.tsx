// Unit 236 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit236Data: UnitData = {
  unitId: 236,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "軍神オーディン",
      stats: [1370, 4, 8, 1200, 100, 425, 2800, 1250, 0, 320, 0, 0, 1, 54, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    },
    {
      formId: 1,
      name: "軍神オーディンCC",
      stats: [2390, 4, 8, 1950, 100, 425, 2800, 1250, 0, 320, 0, 0, 1, 54, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [2390, 4, 8, 1950, 100, 425, 2800, 1250, 0, 320, 0, 0, 1, 54, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["軍神オーディン", "軍神オーディンCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit236Data;


