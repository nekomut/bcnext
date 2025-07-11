// Stage 2035 Data
import type { StageData } from '../../app/stage/types';

export const e2035Data: StageData = {
  eventId: 2035,
  eventName: "ワルプルギスの夜",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 35,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "舞台装置の魔女 極ムズ",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "10300",
          treasureName: "ちびアルティメットまどかへの進化権(ちびまどかの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "277",
          enemyName: "ワルプルギスの夜",
          traits: ["魔"],
          baseStats: {
            hp: 2400000,
            ap: 40000,
            dps: 7947.02,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 8000,
            freq: 151,
            foreswing: 111,
            backswing: 40,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 4000,
            actualDps: 794.7,
            magnification: "10%",
            count: "1",
            spawnTime: "7.4s",
            spawnTimeFrames: "222f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 1500,
                omni_range: [-2000, 1500]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            },
            "critical": {
                chance: 100
            },
            "base-destroyer": {
                enabled: true
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e2035Data;

