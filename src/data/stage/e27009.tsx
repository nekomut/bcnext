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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEvMXZKQTFDP1r/AABMSV5KSWtNSmJISoBeUj1cWVBlZVdpY2NzaVD/AP+PZElsa450b2l5eZt9gXKMfGaPgG6Vkpz/WqYB/gGck5+fnJitp7D+gayvrLCzrK+2tra4t7a3uqbfpcCK9BK+vLy5wrfFwMSk5HXAy8LIxsjKysrpv9HPzdHE09LPztHV0tK/6KvX1da98JPX1dfa2Nrzzdzb4N7N9ani4OLs3t7//wHU/Mnu7Oz//u0+ft30AAAAQHRSTlMANFP//+cBrMeQ/P9rRuz/AdX9rOMM/1z/BAHcJbYI/JRrRiILBP8I2BMujWIXv0IP/guZF+WtFUkW/hwBD7ADuzEzmQAABN1JREFUWIXtVu12okoQ9G5ABUQMKmJElA8lgsCAwoSwyPu/1XYPms0NapL9nTqYyJGq7q7uGabT+QT19LMn7uKpStOq/idq5aVVukmrooJ/U89Lyff4Xnosit0O/hyrIk1RxvsGfQOU43HnGM4RUKBMATKbL9Lr3WZ3PDqy0Ov1ZGPnTWVDHsiDmTydfsUOL00xqiHwHMdJfF+QheGYV4bckO8NvC8UkjYpD3iJgVOGkqTBxSmSwsvFpwJTqB7Mk/uMrihAUySNXYokCcf7Cr83G8gfvDd6nISMswBeGt72IYWn2/yn30+bDRpQzIYNF6kSu6ACxKC424snaD+Elwdj7Z0AGAF2cghpbFm2Ydzi1zg9hSdDeE1p0LDPUHRNVdXJYnlLgQB9JwuPGgqwzzs2x2m6+MCgrm+sMFIcDflRupiu/KXjN3115vOCcaMVaeHAyDSm/w0u/T8+35Od9LoDbuoIbGrex76oaCojCwN5Csviaiu71IX8FU6TpBafY/yHXhz7aQ2Tdq2V3S6hA+g41w4PCQBfFNXlfh97NVh9rQbglwPpWnRsoCjqK13Xn604raDX1RUXPVJSmVc+CjS3mqir4gM/3r9ADTDrFanaArQMjX4rPitI0lkLhBdATGDYq7QtMCI0dIV29WCK3owAL5co4O9QoLW1gIdhSX/xiqpBrZp+sVLRtNV2q2MP+k5Vli9BFDhx3PbANE2XUmuhIkSAquJEgXXA37ImCmVJiB8lWZ5llvMxARQIrcl5WhHgO3JX+lmAn73EQZ5nr4js8NGBcI78N7IKdbDYkD58RDZF+yB6bZBF+1YGrmsvWPx+nxcb10XkbpMkQQF+5gfJK97oSRQ7rfU4p8aSJQq9Xq/UcyY64ycr+Dq2HSdagb3aIvBhlD4K1J6xeIBNfBa/7J8nff6soDIBaMIkPxzGQ8hKe5zhILXbMDLWA9lwPRAIrNgW+IuVIKCKk+h0yrGs4WJtwyyT9noceW5IKZn6OG7QMLnHX5LYrlYnwALkUChwjunvFr9TQyNBoSbxS0mx47E1xkpEFADaKRoiPQ8sH5bzlQ2BDQIllBzD0i992w72sRUBsuftFgUWGP1gOzvYODdXNgQmAKD+Pjrs8yzK9v4BMz/lq+0iz898ODEci921HWnkwiwDP3Si1wzHLRmPo7MAbASTIVbvkxpf9de3tLlJgB76do6zlujq2bNTpOvbRF+Cku3VFb47buyJputRGh7YsG+1pgXDCSDB2cVUDBCo4MRy4/3YNWtCnAgeX2maBrvYcPEcRcvFZJtlgQV+HBwC7UnT+vb7tTu3MnDgefn4uIgaB7CGII8CK4ABCMvSuzYD71qxjwLbdqZT6wSzezgE2Ijcek6SrL9cz0Japt69c063Yzislw68he0YYAeQ+jLJDms4Mc0oTBo8dAejERhJS4oNJcTzYAsKTsvh2nFJCIe2knr1vQo6uCoJYeMAFyW1SaixfhQMUKWYmkfM+3zIoVuHzUyGDcsYCwbehDBprmneLeCSBW6wmEET1TDCs8B89LVzM1uYQA9dVgr7gCOdr4VnZeDK8ly2vIAOqbsuGX2Vjeia06lpNgsUdMyROZ+PvsFnGqN6Pp+DxLwembVZfyf+m0YNgf+N+oMf/KDz3xm/ruLy69vjfwAH0uIPvcUWowAAAABJRU5ErkJggg==",
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
          icon: "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",
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
          icon: "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",
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

