// Stage 1382 Data
import type { StageData } from '../../app/stage/types';

export const e1382Data: StageData = {
  eventId: 1382,
  eventName: "ジャングルサバイバル",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 382,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "食料を求めて",
      baseHp: 1500,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5700",
          treasureName: "キャラクタードロップ(5700)",
          probability: "50000",
          amount: "216",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 11.54,
            magnification: "5%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 11.54,
            magnification: "5%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 11.54,
            magnification: "5%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "3",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ネコの川流れ",
      baseHp: 60000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7400",
          treasureName: "キャラクタードロップ(7400)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5600",
          treasureName: "キャラクタードロップ(5600)",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 500,
            actualDps: 176.47,
            magnification: "100%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 500,
            actualDps: 176.47,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "2",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "5",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "砕けぬ岩 砕けそうな心",
      baseHp: 180000,
      width: 3500,
      enemyLimit: 30,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "0",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 750,
            actualDps: 1730.75,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 750,
            actualDps: 1730.75,
            magnification: "500%",
            count: "3",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "激流ニモ負ケズ",
      baseHp: 540000,
      width: 6000,
      enemyLimit: 40,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "216",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "5",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "5",
            spawnTime: "30.7s",
            spawnTimeFrames: "920f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "5",
            spawnTime: "31.3s",
            spawnTimeFrames: "940f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "15",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "15",
            spawnTime: "60.7s",
            spawnTimeFrames: "1,820f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "15",
            spawnTime: "61.3s",
            spawnTimeFrames: "1,840f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "15",
            spawnTime: "62.0s",
            spawnTimeFrames: "1,860f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "15",
            spawnTime: "62.7s",
            spawnTimeFrames: "1,880f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    }
  ]
} as const;

export default e1382Data;

