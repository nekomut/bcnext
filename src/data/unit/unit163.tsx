// Unit 163 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit163Data: UnitData = {
  unitId: 163,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "早乙女 光",
      stats: [500, 3, 7, 750, 81, 285, 1200, 650, 0, 320, 0, 0, 1, 2, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 52
    },
    {
      formId: 1,
      name: "光＆にゃんこ",
      stats: [500, 3, 7, 750, 81, 285, 1200, 650, 0, 320, 0, 0, 1, 2, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 52
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [500, 3, 7, 750, 81, 285, 1200, 650, 0, 320, 0, 0, 1, 2, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["早乙女 光", "光＆にゃんこ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit163Data;


