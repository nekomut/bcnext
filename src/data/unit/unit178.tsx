// Unit 178 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit178Data: UnitData = {
  unitId: 178,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "極道にゃんこ",
      stats: [100, 1, 8, 8, 15, 140, 70, 75, 0, 320, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 18
    },
    {
      formId: 1,
      name: "ヤクザヴァンパイア",
      stats: [1030, 1, 7, 280, 27, 155, 1250, 415, 0, 320, 0, 0, 1, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 31
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [1030, 1, 7, 280, 27, 155, 1250, 415, 0, 320, 0, 0, 1, 18, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    names: ["極道にゃんこ", "ヤクザヴァンパイア"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit178Data;


