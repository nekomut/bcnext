// Unit 179 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit179Data: UnitData = {
  unitId: 179,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "タクヤとユキ",
      stats: [450, 2, 25, 84, 40, 190, 300, 180, 0, 320, 0, 0, 1, 22, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 61
    },
    {
      formId: 1,
      name: "タクヤとユキとネコ",
      stats: [450, 2, 25, 84, 40, 190, 300, 180, 0, 320, 0, 0, 1, 22, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 61
    },
    {
      formId: 2,
      name: "タクヤとビューティユキ",
      stats: [600, 2, 25, 84, 40, 190, 300, 180, 0, 320, 0, 0, 1, 22, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 61
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
    names: ["タクヤとユキ", "タクヤとユキとネコ", "タクヤとビューティユキ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit179Data;


