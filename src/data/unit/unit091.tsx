// Unit 091 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit091Data: UnitData = {
  unitId: 91,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "狂乱のネコ",
      stats: [360, 3, 20, 28, 15, 140, 50, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 1,
      name: "狂乱のネコビルダー",
      stats: [360, 3, 20, 28, 15, 140, 50, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 2,
      name: "大狂乱のネコモヒカン",
      stats: [440, 3, 28, 34, 15, 140, 50, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
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
    names: ["狂乱のネコ", "狂乱のネコビルダー", "大狂乱のネコモヒカン"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit091Data;


