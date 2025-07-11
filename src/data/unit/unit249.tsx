// Unit 249 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit249Data: UnitData = {
  unitId: 249,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "剣士",
      stats: [100, 2, 9, 10, 18, 140, 50, 75, 0, 320, 0, 0, 0, 11, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 23
    },
    {
      formId: 1,
      name: "セーラー服剣士",
      stats: [100, 2, 9, 10, 18, 140, 50, 75, 0, 320, 0, 0, 0, 11, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 23
    },
    {
      formId: 2,
      name: "明王の剣士",
      stats: [100, 2, 9, 10, 18, 140, 50, 75, 0, 320, 0, 0, 0, 11, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 23
    }
    ],
    rarity: {
      id: 2,
      name: "レア",
      maxLevels: [50, 0]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["剣士", "セーラー服剣士", "明王の剣士"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit249Data;


