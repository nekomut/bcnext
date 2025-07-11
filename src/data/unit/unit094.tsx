// Unit 094 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit094Data: UnitData = {
  unitId: 94,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "狂乱のキモネコ",
      stats: [1440, 3, 10, 360, 60, 350, 400, 564, 0, 320, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 16
    },
    {
      formId: 1,
      name: "狂乱の美脚ネコ",
      stats: [1440, 3, 10, 360, 60, 350, 400, 564, 0, 320, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 12
    },
    {
      formId: 2,
      name: "大狂乱のムキあしネコ",
      stats: [1750, 3, 10, 360, 60, 350, 400, 564, 0, 320, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 12
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
    names: ["狂乱のキモネコ", "狂乱の美脚ネコ", "大狂乱のムキあしネコ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit094Data;


