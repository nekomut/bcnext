// Unit 204 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit204Data: UnitData = {
  unitId: 204,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "アイルー",
      stats: [250, 3, 12, 55, 19, 160, 250, 150, 0, 320, 0, 0, 0, 12, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 150, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      animLength: 35
    },
    {
      formId: 1,
      name: "アイルー＆メラルー",
      stats: [250, 3, 12, 55, 19, 160, 250, 150, 0, 320, 1, 0, 0, 12, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 150, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      animLength: 35
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [250, 3, 12, 55, 19, 160, 250, 150, 0, 320, 1, 0, 0, 12, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 150, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0],
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
    names: ["アイルー", "アイルー＆メラルー"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit204Data;


