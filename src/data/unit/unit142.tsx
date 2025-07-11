// Unit 142 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit142Data: UnitData = {
  unitId: 142,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコチュートリアル",
      stats: [240, 1, 7, 30, 0, 160, 360, 290, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 38
    },
    {
      formId: 1,
      name: "裏チュートリアル",
      stats: [240, 1, 7, 30, 0, 160, 360, 290, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 38
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [240, 1, 7, 30, 0, 160, 360, 290, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["ネコチュートリアル", "裏チュートリアル"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit142Data;


