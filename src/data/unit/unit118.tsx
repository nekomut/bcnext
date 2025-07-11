// Unit 118 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit118Data: UnitData = {
  unitId: 118,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "レイ",
      stats: [1400, 3, 14, 410, 0, 194, 1030, 860, 0, 320, 0, 0, 1, 24, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 63
    },
    {
      formId: 1,
      name: "レイCC",
      stats: [2100, 3, 14, 630, 0, 194, 1030, 860, 0, 320, 0, 0, 1, 24, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 63
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [2100, 3, 14, 630, 0, 194, 1030, 860, 0, 320, 0, 0, 1, 24, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
    }
    ],
    rarity: {
      id: 3,
      name: "激レア",
      maxLevels: [50, 70]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["レイ", "レイCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit118Data;


