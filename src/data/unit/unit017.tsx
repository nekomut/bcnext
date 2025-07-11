// Unit 017 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit017Data: UnitData = {
  unitId: 17,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "ネコリンリン",
      stats: [400, 4, 10, 180, 20, 170, 700, 125, 0, 320, 0, 0, 1, 20, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 33
    },
    {
      formId: 1,
      name: "ネコワイルド",
      stats: [400, 4, 10, 180, 22, 170, 700, 125, 0, 320, 0, 0, 1, 16, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 47
    },
    {
      formId: 2,
      name: "イチリンリン",
      stats: [400, 4, 10, 180, 22, 170, 350, 125, 0, 320, 0, 0, 1, 16, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 47
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
    names: ["ネコリンリン", "ネコワイルド", "イチリンリン"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit017Data;


