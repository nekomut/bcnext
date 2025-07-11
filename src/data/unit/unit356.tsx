// Unit 356 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit356Data: UnitData = {
  unitId: 356,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ノラ",
      stats: [200, 3, 18, 90, 35, 200, 200, 210, 0, 320, 0, 0, 0, 23, 0, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 43
    },
    {
      formId: 1,
      name: "覚醒ノラ",
      stats: [200, 3, 18, 90, 35, 200, 200, 210, 0, 320, 0, 0, 0, 23, 0, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 43
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [200, 3, 18, 90, 35, 200, 200, 210, 0, 320, 0, 0, 0, 23, 0, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["ノラ", "覚醒ノラ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit356Data;


