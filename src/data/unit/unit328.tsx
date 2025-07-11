// Unit 328 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit328Data: UnitData = {
  unitId: 328,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ハッピー100",
      stats: [400, 3, 10, 50, 0, 300, 480, 320, 0, 320, 0, 0, 1, 38, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 75
    },
    {
      formId: 1,
      name: "幸せ連鎖子ハッピー100",
      stats: [400, 3, 10, 50, 0, 300, 480, 320, 0, 320, 0, 0, 1, 38, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 75
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [400, 3, 10, 50, 0, 300, 480, 320, 0, 320, 0, 0, 1, 38, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["ハッピー100", "幸せ連鎖子ハッピー100"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit328Data;


