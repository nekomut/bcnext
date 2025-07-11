// Unit 186 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit186Data: UnitData = {
  unitId: 186,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "コーネリア",
      stats: [1400, 4, 27, 700, 50, 410, 2500, 1050, 0, 320, 1, 0, 1, 53, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 30, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 74
    },
    {
      formId: 1,
      name: "コーネリアCC",
      stats: [1600, 4, 27, 920, 50, 410, 2500, 1050, 0, 320, 1, 0, 1, 53, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 30, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 74
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [1600, 4, 27, 920, 50, 410, 2500, 1050, 0, 320, 1, 0, 1, 53, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 30, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      animLength: 30
    }
    ],
    rarity: {
      id: 4,
      name: "超激レア",
      maxLevels: [60, 70]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["コーネリア", "コーネリアCC"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [
      ]
    }
  }
} as const;

export default unit186Data;


