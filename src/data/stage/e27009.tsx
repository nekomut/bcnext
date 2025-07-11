// Stage 27009 Data
import type { StageData } from '../../app/stage/types';

export const e27009Data: StageData = {
  eventId: 27009,
  eventName: "ワルプルギスの夜",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 9,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "舞台装置の魔女 1周目",
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "3",
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
    },
    {
      stageId: 1,
      stageName: "舞台装置の魔女 2周目",
      baseHp: 225000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 60,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 1824000,
            actualAp: 30400,
            actualDps: 6039.74,
            magnification: "76%",
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
    },
    {
      stageId: 2,
      stageName: "舞台装置の魔女 3周目",
      baseHp: 300000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 70,
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
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 3408000,
            actualAp: 56800,
            actualDps: 11284.77,
            magnification: "142%",
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
    },
    {
      stageId: 3,
      stageName: "舞台装置の魔女 4周目",
      baseHp: 375000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 80,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 4992000,
            actualAp: 83200,
            actualDps: 16529.8,
            magnification: "208%",
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
    },
    {
      stageId: 4,
      stageName: "舞台装置の魔女 5周目",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 90,
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
          treasureId: "168",
          treasureName: "紅獣石",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
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
            actualHp: 6576000,
            actualAp: 109600,
            actualDps: 21774.83,
            magnification: "274%",
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
    },
    {
      stageId: 5,
      stageName: "舞台装置の魔女 6周目",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 100,
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
          treasureId: "167",
          treasureName: "紫獣石",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
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
            actualHp: 8160000,
            actualAp: 136000,
            actualDps: 27019.87,
            magnification: "340%",
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
    },
    {
      stageId: 6,
      stageName: "舞台装置の魔女 7周目",
      baseHp: 750000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 110,
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
          treasureId: "170",
          treasureName: "翠獣石",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
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
            actualHp: 9744000,
            actualAp: 162400,
            actualDps: 32264.9,
            magnification: "406%",
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
    },
    {
      stageId: 7,
      stageName: "舞台装置の魔女 8周目",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 120,
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
          treasureId: "169",
          treasureName: "蒼獣石",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
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
            actualHp: 11328000,
            actualAp: 188800,
            actualDps: 37509.93,
            magnification: "472%",
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
    },
    {
      stageId: 8,
      stageName: "舞台装置の魔女 9周目",
      baseHp: 1050000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 130,
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
          treasureId: "171",
          treasureName: "黄獣石",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 12912000,
            actualAp: 215200,
            actualDps: 42754.97,
            magnification: "538%",
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
    },
    {
      stageId: 9,
      stageName: "舞台装置の魔女 XX周目",
      baseHp: 1200000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 140,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 14400000,
            actualAp: 240000,
            actualDps: 47682.12,
            magnification: "600%",
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

export default e27009Data;

