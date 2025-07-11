// Unit 189 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit189Data: UnitData = {
  unitId: 189,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "アロイス",
      stats: [500, 3, 10, 240, 50, 351, 780, 310, 0, 320, 0, 0, 1, 28, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 54
    },
    {
      formId: 1,
      name: "アロイスCC",
      stats: [600, 3, 10, 340, 50, 351, 780, 310, 0, 320, 0, 0, 1, 28, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 54
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [600, 3, 10, 340, 50, 351, 780, 310, 0, 320, 0, 0, 1, 28, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["アロイス", "アロイスCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit189Data;


