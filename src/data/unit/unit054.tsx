// Unit 054 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit054Data: UnitData = {
  unitId: 54,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "10式戦車",
      stats: [762, 4, 6, 230, 0, 140, 942, 590, 0, 320, 0, 0, 1, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 31
    },
    {
      formId: 1,
      name: "ネコ搭乗10式戦車",
      stats: [762, 4, 6, 230, 0, 140, 942, 590, 0, 320, 0, 0, 1, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 31
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [762, 4, 6, 230, 0, 140, 942, 590, 0, 320, 0, 0, 1, 6, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["10式戦車", "ネコ搭乗10式戦車"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit054Data;


