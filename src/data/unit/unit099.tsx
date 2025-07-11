// Unit 099 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit099Data: UnitData = {
  unitId: 99,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "狂乱の巨神ネコ",
      stats: [3600, 1, 11, 1184, 0, 150, 1300, 465, 0, 320, 0, 0, 1, 47, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    },
    {
      formId: 1,
      name: "狂乱のネコダラボッチ",
      stats: [3600, 1, 11, 1184, 0, 150, 1300, 465, 0, 320, 0, 0, 1, 47, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    },
    {
      formId: 2,
      name: "大狂乱のネコジャラミ",
      stats: [4400, 1, 11, 1184, 0, 150, 1300, 465, 0, 320, 0, 0, 1, 47, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 81
    }
    ],
    rarity: {
      id: 3,
      name: "激レア",
      maxLevels: [50, 0]
    },
    levelRates: [20, 20, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["狂乱の巨神ネコ", "狂乱のネコダラボッチ", "大狂乱のネコジャラミ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit099Data;


