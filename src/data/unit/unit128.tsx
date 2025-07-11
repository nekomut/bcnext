// Unit 128 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit128Data: UnitData = {
  unitId: 128,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "うらめしにゃん",
      stats: [390, 3, 10, 98, 90, 350, 550, 180, 0, 320, 0, 0, 1, 54, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      animLength: 89
    },
    {
      formId: 1,
      name: "ハナメガにゃん",
      stats: [390, 3, 10, 98, 90, 350, 550, 180, 0, 320, 0, 0, 1, 54, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      animLength: 89
    },
    {
      formId: 2,
      name: "凧にゃん",
      stats: [390, 3, 10, 196, 90, 350, 550, 270, 0, 320, 0, 0, 1, 54, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 275, 150, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      animLength: 121
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
    names: ["うらめしにゃん", "ハナメガにゃん", "凧にゃん"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit128Data;


