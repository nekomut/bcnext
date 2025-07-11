// Unit 294 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit294Data: UnitData = {
  unitId: 294,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコまどか",
      stats: [850, 4, 9, 250, 36, 120, 420, 230, 0, 320, 0, 0, 0, 23, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 51
    },
    {
      formId: 1,
      name: "魔法少女ネコまどか",
      stats: [850, 4, 9, 250, 35, 250, 420, 230, 0, 320, 0, 0, 0, 25, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 36
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [850, 4, 9, 250, 35, 250, 420, 230, 0, 320, 0, 0, 0, 25, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
    }
    ],
    rarity: {
      id: 2,
      name: "レア",
      maxLevels: [50, 80]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["ネコまどか", "魔法少女ネコまどか"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit294Data;


