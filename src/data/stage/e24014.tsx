// Stage 24014 Data
import type { StageData } from '../../app/stage/types';

export const e24014Data: StageData = {
  eventId: 24014,
  eventName: "イースター強襲！",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 14,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "エッグ Lv.1",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
      requiredCost: 30,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 225,
            actualDps: 51.6,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 500,
            actualDps: 937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 500,
            actualDps: 937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 225,
            actualDps: 192.86,
            magnification: "15%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 22500,
            actualAp: 540,
            actualDps: 395.12,
            magnification: "15%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "エッグ Lv.2",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
      requiredCost: 40,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "50000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 88560,
            actualAp: 1107,
            actualDps: 253.87,
            magnification: "7380%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 1150,
            actualAp: 115,
            actualDps: 84.16,
            magnification: "230%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 34500,
            actualAp: 1150,
            actualDps: 2156.25,
            magnification: "230%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 1150,
            actualAp: 115,
            actualDps: 84.16,
            magnification: "230%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 34500,
            actualAp: 1150,
            actualDps: 2156.25,
            magnification: "230%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 27500,
            actualAp: 1650,
            actualDps: 1414.28,
            magnification: "110%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 2160,
            actualDps: 1580.49,
            magnification: "60%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "エッグ Lv.3",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 159120,
            actualAp: 1989,
            actualDps: 456.14,
            magnification: "13260%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 180,
            actualDps: 131.72,
            magnification: "360%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "360%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 180,
            actualDps: 131.72,
            magnification: "360%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "360%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 3150,
            actualDps: 2699.99,
            magnification: "210%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 165000,
            actualAp: 3960,
            actualDps: 2897.57,
            magnification: "110%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "エッグ Lv.4",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQEDAQIHBgMKCAQRDQMSDgMdFgYeFgUrEwokGwQnGwQxIQciLRJlCSg1KgdDLAkFVANvGCtSMwhHOg6dDz9hOQxURgsXaAhYTA5sRQhiTguBSAbbEVdxXQMRjQqNTwJzXCd1XhyWWgSBahyiZwQeuBmSeEGqeANomi6+eQOdiy23gSe4igPOhwW+jDe+lwKYql7LnlPepAb1swf9ug3fvG39xTn70XD12Jj/5rH/8NT//v1v+S9BAAAAQHRSTlMAChf/8SErPUpZq2j8hJjF/+/f/9D+7////8L//v/d/////f//7f/////9/v//////////////////////////29qUwgAABJ5JREFUWIWVlwmTojwQhlddlVU8xqwyUUImcgrCcAynoP//X30NOrvjVH1r21VeVebxfTvdnfjjx7+iL81mU2nU/+eX/jd6o+nWC5PQM7ezce/55dJCC8u6yhKI0Jw9SxjNNS+rzpc6T7rYPmlDWnA/KprL5XyVkJij59avdMfPTpe/AO8pD6OtrjtRUZ9vgBAI2vgJwC+h6150OkOc8iyESJJgO8QDpqJV0JybU2wxhSiEKKoQ0ycUmB2gqSyyXBJFgWeICT4LY9PSLb9sUrJUqMoU9cNYKsoKnYXeHCyAhLxyCWGckiAuP1S6wQO2aemAhKg4pQ4jRHh+VNocD+hv7TKzoBKSqmnqssw8z08/6EZCAzSRlh7sZNgW8+VSeRYQXBmtYKjpQRmChCTJu2r2Wj8nG72PQ82yohCyECYg4QwADhKy2sRKGGoO/LoDHpKsaADg81ZCVWPLuQV4V0CSnzoA030/OdWahCqmvuYJL7SvgKoF6Az2BNqzdlF5AID9CWg9dADL96OsyDXMXACAk4TGDVCfq1DnHCRYIgw1TE/2twCAOmgBSXE6V4nFOafQlqoyw1jobX3fsW4ASMIp8aAhZEUIdYIajb1F6FBYr/sdoKmz0KLLpaJu5rih0psIlYkbIIN+yJLQYlSRcb8PdbDSuRDiagG2oYHRDpWt880v1Pr+3PH1rwDIIhA8iAVGQm9uRZl1Bzh1g11QSjASxqaf3QDODQBJSGyFcY4aCTOYZbkDAGE54Q0ASfCgN/QVpg4BUNWu2kr4BJzLJGzXU9TxNOVRdY4JEKD+21IEQN0VJsdt45RFVVNy8imhtdDkYQdANfOMeXlTW6TLgn9V0BS5Dx5wc3nGnezUdB5Agh/lNQCqIs+hqVGtNOc6JKFkSreTtg+13AKAYHFUIc0494qmjihRVQrD0MuKqhVQ5J6+wWzjnOk2DK/cgRlACGUCbERRCA9HZ5iJNmO6gDFSZO1EgDkAJ7vevu0+YjxMmQ5pBM9+OxI4bwdR19xtYDz8AoAIgZA53RrO4HxVbc8WwjAwtSwxWCSSDO421ieBkYUWQNiYWh7B7YJTYXswRGCSKpQuCVWn47lmmqhahnOJK7v9fqcq7ct+tzvA47fUG0kSqheGWqDsD9fY75aD9nq0OxzwN6TRSuyPx8PhCJ6XAwiZULI87LFH8+j3fn807CBw49QYXINwph6REnqzw8FWd2oaB6k6GPwhENucTDGnQm/rupCCXRzHqfIHMGBACII5QgQAjN3Hx96w43T5F0A5E3GKOVn7C3V3TNOPnZ2m8uCLB27EKebOP1ztj0GcugoN3MEdgNkMc0kat+vjmL69MfULQIbWll9lxLki2e/vcZoCgH5JQZtFKr/JcxzgPU2N9dq9AxBoC2ogsiiZHSB27zahAxi2jbhjjc3OAlvT+DtABlWP/7xdAe767dX+BmCD11fXfZjGUQew129rW74HcGiqNH3YES3g/d1VCfO+A5TYcFPtkQfpCjAIMwbfAbA18cNinDqwPjDAArkDUKgkSMzDJIwmq41pmpuXl5efdyFv5J/y+kU1J99W/Aej9eS6UjM1jwAAAABJRU5ErkJggg==",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 229680,
            actualAp: 2871,
            actualDps: 658.42,
            magnification: "19140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 2450,
            actualAp: 245,
            actualDps: 179.29,
            magnification: "490%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 73500,
            actualAp: 2450,
            actualDps: 4593.75,
            magnification: "490%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 2450,
            actualAp: 245,
            actualDps: 179.29,
            magnification: "490%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEDAAADAAADAQAEAQEEAQAEAQAEAQAFAQEFAQEHAgEHAwAJAwAKAwAKAwEKAwEMBAEPBQAPBgERBQAVBgAXBwAhCwAnDQApDAApDQArDgEsDwAuDwA6EwA9FAA/FQBHGABJGABKGAFPGgBSHQBXHQBhIABhIQBiIQBuJQBvJQB4KQCDLACOMACRMQGZMwCiNwCzPAG+QADMRQDZSQDkTQDuUAD3UwH/VADUXjutAAAAQHRSTlMABQocKxcRJDlAzzFPVuNFX2hx2IF5pP6StIjDqrrSZczw/tyr1fvo/8Hhlf/w0f//+P/+/ub+/v7/////////IzJmTQAABOZJREFUWIWdl+l6okoQhoOKS9Qoifs2BCZCciA0y0Dv3P9dTTUaI44oJ/0jT0T7pbrqq6UfHu6tRqvb0e7+6sb+wWa9GDV+DujM/NRfD9s/BvS3mWShaeg/tmCTSsHi3bRZe0ujMxqMWl+nbi9Ckec8sSd1CY3B7O3jbWN024XvG5OQy1yK1H6ueYr+NsQMx852NdABoU19nue55MluWCsW2tAh6o009c3VSNe08QfL1eLhrFMLMPqk6vdS8sw3J/324K34nOeZ2a11hOZ/5LAhlyx1tuMRxLH4SD9GtRSp/fojjoRc0NBerENxBAzqSXr0yb4A4LvUefJ48T+rC+j8xlKeECK1rIMTmDOulxKNszOADSKy0oLH/WnNjOi/k/zbhJy4SEhFClc1Afoi5CUTPAZAKeNZs54TtJGZnh0iJ14igMNjc9zTayHaz3bK5bcJsYtZhpC3t9eLXq1jNKc7PyX0CJE0cD0XZYSSxF8btYzQh4ut+REmmMlCT0lMeOFIGr9N66VEuzUyFkswpEB8C4Pjj0nNvNYaemsw2frkTFaKldXM66Mh3dUHy0sAHm5atQGA6L4flPxtBnGM/1HmdaOoByAkzkRBEWRfr7Q8aLCa05d9YQHPAi/hKhCZO3/s1dgNxXk47Bl24BUWYGs+tzLwJ93P50/ju9v13nRj2vZ6FxIPKwVkAJirrCLW3Ho17uxv9xamE2OM05iwIBZKjR4AXAgIc63gHkA3TD/japsUkIyBiqMkgevGXNVajO8AmlM7YWdRK86gosAPOSqJc9MHbeMtO68HPI5YXhIjtoe39o/N7LwaQCqhhOe1AY2hmYjS+yCEQXKSsxSCp/agGtDahOXXFQQP0SOUxihwX0bVBhgOlpeAXCjC0YHICmK72omdTXg8gDzPH0ECIByKC5zHn1Tt1wZvx84IEhBnDEGj6HAKESW8GtBe+QcPcBxFUUK+S2vOEpQxNaxEiHxWRqGzPHQhmXlBhDwvIqeIQpsMggSTdP/6/quyqPVMfPQVZkIwSOEzTQgSBwFC++WourSfponjW1nknndakDNjybKqomlt/dkpF8CcIY+Wn+R4WzGp6IMVDBOXKiJeelGV8bZ/ff/zzvetSJT3S4EiXn4Qb65WxPZ4l3BVPC50KGPES4+YM7nqw9YsZDlHdwEyXfeuNsfuOlLV5/IIBaBkgF8xZvSX4D8A8H8sCE4A+EokZvd6d9YnDvnndbmSfvHooE/OYGSuUJHWXYaEIvcy6jxIZM6oGnFgyAis6yFQC+42tmO/kgsAcUHcGWIqi1wU7xfVvb3RH44NMyv7QMQB2ITVHwgRF8ns1rVB0/SFX9KyxK5KT4awUlAqZLq83Ve1sY3Ief6hmBWeBIzMYg4j+3UdnwAD24vYV8hovHcTTLnAe6VnCjBiX5fR14KKRFkhRsFxCs3Mg4WQs4YxBa49RN4bmPtflwMAZCkmlFGcRdbL828QiSQJE/H2lglwvznpAPqqLKYzaKfOavVHqrtbzEiVlIvVmJwFodhMqeSYxRvjk1HOMi+Ko+2NEUuDvkahajFVujCMptCHKAlw9j5+z4IsQZ5loV3lvUNrdoez18JvQeC5MNLsPddCyPK8l9nL3nL3czXnPE16reunaHSfV7Pl+vHx8UWtp/IqnsF36+ViOvzW81+i5pL/7tImxQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 73500,
            actualAp: 2450,
            actualDps: 4593.75,
            magnification: "490%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 77500,
            actualAp: 4650,
            actualDps: 3985.7,
            magnification: "310%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 5760,
            actualDps: 4214.64,
            magnification: "160%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "エッグ Lv.5",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3750,
            actualDps: 860.0,
            magnification: "25000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 5142.84,
            magnification: "400%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 5142.84,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 7200,
            actualDps: 5268.3,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "エッグ Lv.6",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 348000,
            actualAp: 4350,
            actualDps: 997.6,
            magnification: "29000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 4200,
            actualAp: 420,
            actualDps: 307.36,
            magnification: "840%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 4200,
            actualDps: 7875.0,
            magnification: "840%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 4200,
            actualAp: 420,
            actualDps: 307.36,
            magnification: "840%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 4200,
            actualDps: 7875.0,
            magnification: "840%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEHBgcICAcJCQkKCgoMDAwRERESExIUFBQUFhIhIh8jJiApJSYnKCUtLS02NjY3OjM2PDBGOUBARTtJVT5gRlhVVVVeWFFcXVl/V21qamlscGpqd1+iXIuJdoF7im+3Z5x7mmGPj4+Qj4/IcKqdnZ2VqIbceruLuGqpqqnugsiWyXO0tLT/itS+vr6k2n39odzNzMz9vuXa2dm7/ZLi4eH81OvP/bLs6Orh+8708vL1+vD8/Pz////91CYyAAAAQHRSTlMACYITHbD/zzQo8ERcgm5K8+R7jLebqf+ZyOz/t8/+/P/V//3l/v7/7P/7/v/9///8///+////////////////GkbqbgAABShJREFUWIWdVwl3qjwQLcXXp9ViiwsKLiBGsGgEI6ZAlv//r74JtHY5n0LfnKrtKfdmljsz8e6uzjS91dJqn7qK7vQmM2/a/Ue43p94MS2y194/wmdhWkgpsr2h/T4IrT0Jz+dzJoUskpE56f+SQjc9WigCLniW2CENTf03+M4kZlIohnMGL5dIEU9+wdCekUwIyc+VFRGBVMRm4yjacwIooTzIlAOcYCAQYb8pQXetYApbCA4snAZcSMm8TkMCzQgr3zMhBVdUKJdg6aRREFqn2x1EpQdAILnyxockANe8UR5783A9twOqcpDxEn/eB0IxrJvEoI1TKRgJEM4vVSjOfhlD2IygfFbkEcLveCE4ilUdvFb5xO1MaCMqSwZBAz9RpeDwe4I4pGOmK42Pnm6nwiSyMsEJIpCDQknKT6XMoQp6b+4PbxN0QyE/jCJcqWnvICGJcdcarPd146E1YxcCyQKViMR3Nm4q4353/JrMaxvTjOWnD7mfKPjusEEsHMyT2vPBOt4XF0RkKfjhsFsGCz95Hbdr8XfagHwSyNRRcEWw2Cf+oFE7tOfpJQaQwEbBN66f7O2aAl6sO8V5SaHe0uW2hCf+Ao2b9mPLnK1jkjMgEAxZixIe5IKMG48lvd0bjOchIZHvv5Zwysux1JQAFN/qGkNboffvcNl8qLS6PXM89cJ9krz6Cx/TKqnwTpq58AQng4Xe1A5iygXFcV4JE9U0wrt1R+PRwDT6nbanXCfWw4MFTSrQw8PfViMXNK3ses2wlSrxAxgMJQZEL00rWXIYa5SqpgTgg8MVwWLdQMtgrb45Gj0ZHsOR0kJsPT+7sKsiRMMmu16DxUzSNI5SmbpqQAmW57yqQxMCmBrvZYdWCBD/0lowmetD6Ixj/mUgIMzlRQZS1CupNY7F1zMpit7ng6ApodO6Muqj73gY8KjabJK5z1ZcJyTYi9/xCoggk2rLUTdg6+7tkdiZ5z/gIo1cy62WRRwIPBwaN5zQBvHP84m72u5WLlGOEcSC1XY5uOUAuyQcFlIZ+FaNxI0TkJwiy3XgT/s6gRFXcMFzWkmHVkN1t11ajmNZG0W3vIrXx1WsNEKu68JiAx04m9KB5crZ7nbOarm65UHHKyUkYpzmjBGlABEpF7ZLcACIHGezOmxGVwn64ff6BdBKzF2pCHZbR712B1hS15MIKRAX2QqlofQjixC55VrLMh/TqwQmYae3qgKs3AxQ+NzdvRPgvAznKoHWN4fkeDgoBvF2PL6BMzliHFUebNxcxsMlxLB8+n+8ERL3qB49CXaCj2OuVJxKstzsoIqw3/kaJv30mhLbHhMBnAvY07F8HXN2UtdkomoaAF060u/01jUh9yCBoLYsK09/K3JgOB6W5Q2RMZXb3Ls5TAx4NCJZkRUnOLvIMmA4HF0iP8YJ9Xo3G1HdjTDmcLUs3vKs4EX2djylPhVK0TwngX0bf6dPYoph+As4HL5nwB23YFnisxyDB3iB4tpp2DKHQzsHJRVFKWgORAEGMTGlBy5x7XVf0/Un/GUe8QIDmCNosBRmc2zUEYC1p/gyENRtVy3EIFZ6oJI2ue23PZxWBJxGjuUiTOkC7pgiwJLN6hezZpKqE3iKURCnFD5sQ02pFLEmO0X/uKVCLyntqIZc90ap2lABI5Pa1a573/ZYjhmN6awXCQbFiNLodhrhe3p7Smj6acTFZEHm9zYNaIAXbjS6+UW+fX//5+/Ly8vzpz2qn8fHR9sObRv+9ee+9yOR/wE4CF7gQLwzzgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 7500,
            actualDps: 6428.55,
            magnification: "500%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 7500,
            actualDps: 6428.55,
            magnification: "500%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 10800,
            actualDps: 7902.45,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "エッグ Lv.7",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 396000,
            actualAp: 4950,
            actualDps: 1135.2,
            magnification: "33000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 540,
            actualDps: 395.17,
            magnification: "1080%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 162000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "1080%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 540,
            actualDps: 395.17,
            magnification: "1080%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAACAQEEAQAHAwANAQAJBAEKAwEQBgIRCAMVBwEUCAMXCQMcDAQeDAMoDgAtEgYwEgU0EgE6EwE/FQBBFAA/FgA8GAc7HAJFGAF0AAFMGgJQGQBRGwBUGwBdIANiIQBkIwI4ODhuKAF3KQF9JwB7KQF9LAODKwBYPTBGRUSPMQGWMAD/AACiNwC0PQFoWlTCQgDCQQG4TgHUSAHkTQCAcWvuUQD2UwD8VQCRj460tLPV1dXq6ur+/v7///9WSDj+AAAAQHRSTlMA2rwVLAnrNk5tIV6SfdMTneyxv4Y2Zv4JzgLfIXJW8v/qvA7/J4v0Rf7f/wwB///8/0kE/////////fv///8AZ6Q1BQAABPtJREFUWIXtVmtz2jgUdQMEG/N2Esd1CHKi1A2iEmqkSOa1//9f7b0yNoakbHf22041g8YSukf3ea68v/7j8P4A/AH4A/C/Abg4Om0/8Hudy4cuiQ+SLM+i4OEeFj0/CPyHr/9CfhRGuTLWyHk0CMNBlOV5On758dvyvX4mjC1gaJHnOZPGWjW/ef5d+e44V04chzUGsGAp08fl78m3p7l2ojWGkvBt2fgB//5Hv47GuVPfFtocUBTjGoxI/a/e8jboXZbvhJkuL9aUSgdhNY8JY5z0R8tZMgku69COxEFzRQih4EzFCAVxRuOhP0s5G48uyd8PSgNQA8IVJ0wQilEAb8o8TbkRFwF+3Cai9h1j1igaM10HhBNp8sElE55vagWKQlCNnmDmGFJGedL1On731wrIoj6uiHSzsPa4NfQ7rfAq/AXAqKkA2EA12O4Uqbb4tNcdL4aowcfM7vj99KgA3kcp14WRDVCVDp7W63ELzT2X7w3SnNuiObSgRBhz3DD8dbXZvYfuujP5NlSA0acAcDuhqgEgXje7/fapjeevzuSnzJxJOzNk0wDD1vv9fo2B7AwmJ+G7HeefyRfWHpWCb7rZ77cLdKG/WDe817uL5voTcRiSm7oulWLv290aU7H9tNk0vB9lvGQAW5ypYRmRVVEWiiu2Wr1e9bxWf72rAe79hFd6WntuB49jqCiHAKnMlZQi/T4KVtv9AWD5cpeKSsoI9RFgvX6lqkSAxGBSzb+Fi+2+BHh+mE0nx+DLj5GQ8ft2HRNZ7mshtWKTxQaDgdc/RnNGeKW3ZfzcBVaTeAVWgA6HoSV/Rfndu+e9fU+YtpweGUCcywOfUEK5VOZYUE5+v1uAAt+QPhWp0GX9VckrBZ4Dw5uuEasdAmyfPO8F2cMaKmqA01QGEoIAKC4aOQIE+Y7y+83Ye3t0/GlZBdAsXJcSmMhnTgWGft85F4TIf2X7qZzIaTMNsIwlP0tQoBT+ukUFnnpeb3rqMyTBpq5MFRwBmmaBwYyBCttF2PG6SdNn9gMAMJqIhdWn2SmIoKv1CjnFT2v98IxxAC7jXEYjgEJqN00dkFgFNIkpNKhwoqvLodCsVIJoMBLSGSeDWWEYEYSd+AHCQKUkETTKW8eA1mjnXCOZgrOcYmXBgjlS1thZzvLTKq3IGFr1S+SS2FW8YUpDwhHgwLKu8VOXzIyKnSJoPb97g0QEEq/ov4CUEVRJGssqJDFCwb9MHqulHErI5Na1kQh7huWYwQbqjDINv8PhKq8lhSZ7muJKiMg1yOc78ILF7qWUYFQpsF+SgwpVZYEFcSxPAiFkfnNfdqIgQ6oQMTRyRolUQDn0kAxlUMGp4IyYNkMJp5KqObYGWA4SrtBWTlLQBDq6rjNGsPkE+oLGUNYJAr0u8e8rQnyIAFwOcRbJXT/NcxrzyoY4mc4GSNfYX4ATNLwTQKd0fFvLe2/f5qqQySzF+WHUDYLBsCopAe+yZXfofIKmxBm8F/NkHI4ab863n5koVOJHOOPzqXMfZCX7WJPPll7rUHHWiHTmh0HYbZ10tB8/U2510u1zACg9061KBHr5M7SwQx5anT1+9tp9i5hVSXvgZrfTq4sUjPK8ID9YZPJPnxXLm7nkw7CPc+DjCIfQ0d2QKez057pcaTpoffI8aveHk8mX4ZfryfX1l3JcT+blmLgdt8oyWF71T16ZfwOzNaVJaritSwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 162000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "1080%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 7714.26,
            magnification: "600%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 7714.26,
            magnification: "600%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 14400,
            actualDps: 10536.6,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "エッグ Lv.8",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 444000,
            actualAp: 5550,
            actualDps: 1272.8,
            magnification: "37000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 6600,
            actualAp: 660,
            actualDps: 482.99,
            magnification: "1320%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 198000,
            actualAp: 6600,
            actualDps: 12375.0,
            magnification: "1320%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 6600,
            actualAp: 660,
            actualDps: 482.99,
            magnification: "1320%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 198000,
            actualAp: 6600,
            actualDps: 12375.0,
            magnification: "1320%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 10500,
            actualDps: 8999.97,
            magnification: "700%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEHBgcICAcJCQkKCgoMDAwRERESExIUFBQUFhIhIh8jJiApJSYnKCUtLS02NjY3OjM2PDBGOUBARTtJVT5gRlhVVVVeWFFcXVl/V21qamlscGpqd1+iXIuJdoF7im+3Z5x7mmGPj4+Qj4/IcKqdnZ2VqIbceruLuGqpqqnugsiWyXO0tLT/itS+vr6k2n39odzNzMz9vuXa2dm7/ZLi4eH81OvP/bLs6Orh+8708vL1+vD8/Pz////91CYyAAAAQHRSTlMACYITHbD/zzQo8ERcgm5K8+R7jLebqf+ZyOz/t8/+/P/V//3l/v7/7P/7/v/9///8///+////////////////GkbqbgAABShJREFUWIWdVwl3qjwQLcXXp9ViiwsKLiBGsGgEI6ZAlv//r74JtHY5n0LfnKrtKfdmljsz8e6uzjS91dJqn7qK7vQmM2/a/Ue43p94MS2y194/wmdhWkgpsr2h/T4IrT0Jz+dzJoUskpE56f+SQjc9WigCLniW2CENTf03+M4kZlIohnMGL5dIEU9+wdCekUwIyc+VFRGBVMRm4yjacwIooTzIlAOcYCAQYb8pQXetYApbCA4snAZcSMm8TkMCzQgr3zMhBVdUKJdg6aRREFqn2x1EpQdAILnyxockANe8UR5783A9twOqcpDxEn/eB0IxrJvEoI1TKRgJEM4vVSjOfhlD2IygfFbkEcLveCE4ilUdvFb5xO1MaCMqSwZBAz9RpeDwe4I4pGOmK42Pnm6nwiSyMsEJIpCDQknKT6XMoQp6b+4PbxN0QyE/jCJcqWnvICGJcdcarPd146E1YxcCyQKViMR3Nm4q4353/JrMaxvTjOWnD7mfKPjusEEsHMyT2vPBOt4XF0RkKfjhsFsGCz95Hbdr8XfagHwSyNRRcEWw2Cf+oFE7tOfpJQaQwEbBN66f7O2aAl6sO8V5SaHe0uW2hCf+Ao2b9mPLnK1jkjMgEAxZixIe5IKMG48lvd0bjOchIZHvv5Zwysux1JQAFN/qGkNboffvcNl8qLS6PXM89cJ9krz6Cx/TKqnwTpq58AQng4Xe1A5iygXFcV4JE9U0wrt1R+PRwDT6nbanXCfWw4MFTSrQw8PfViMXNK3ses2wlSrxAxgMJQZEL00rWXIYa5SqpgTgg8MVwWLdQMtgrb45Gj0ZHsOR0kJsPT+7sKsiRMMmu16DxUzSNI5SmbpqQAmW57yqQxMCmBrvZYdWCBD/0lowmetD6Ixj/mUgIMzlRQZS1CupNY7F1zMpit7ng6ApodO6Muqj73gY8KjabJK5z1ZcJyTYi9/xCoggk2rLUTdg6+7tkdiZ5z/gIo1cy62WRRwIPBwaN5zQBvHP84m72u5WLlGOEcSC1XY5uOUAuyQcFlIZ+FaNxI0TkJwiy3XgT/s6gRFXcMFzWkmHVkN1t11ajmNZG0W3vIrXx1WsNEKu68JiAx04m9KB5crZ7nbOarm65UHHKyUkYpzmjBGlABEpF7ZLcACIHGezOmxGVwn64ff6BdBKzF2pCHZbR712B1hS15MIKRAX2QqlofQjixC55VrLMh/TqwQmYae3qgKs3AxQ+NzdvRPgvAznKoHWN4fkeDgoBvF2PL6BMzliHFUebNxcxsMlxLB8+n+8ERL3qB49CXaCj2OuVJxKstzsoIqw3/kaJv30mhLbHhMBnAvY07F8HXN2UtdkomoaAF060u/01jUh9yCBoLYsK09/K3JgOB6W5Q2RMZXb3Ls5TAx4NCJZkRUnOLvIMmA4HF0iP8YJ9Xo3G1HdjTDmcLUs3vKs4EX2djylPhVK0TwngX0bf6dPYoph+As4HL5nwB23YFnisxyDB3iB4tpp2DKHQzsHJRVFKWgORAEGMTGlBy5x7XVf0/Un/GUe8QIDmCNosBRmc2zUEYC1p/gyENRtVy3EIFZ6oJI2ue23PZxWBJxGjuUiTOkC7pgiwJLN6hezZpKqE3iKURCnFD5sQ02pFLEmO0X/uKVCLyntqIZc90ap2lABI5Pa1a573/ZYjhmN6awXCQbFiNLodhrhe3p7Smj6acTFZEHm9zYNaIAXbjS6+UW+fX//5+/Ly8vzpz2qn8fHR9sObRv+9ee+9yOR/wE4CF7gQLwzzgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 10500,
            actualDps: 8999.97,
            magnification: "700%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIFBQUGBgYICAgLCwsPDw8TExMUFBQbGxsiIiInJycnJycpKSkqKiotLS0+Pj9FRUVMTExNTU1NTU1VVVVZWlpmZmZqbm9pcHJ1dXWAgICEgYOChYaUjZKVlZWYmJmdnp+fn5+lpaXPjbeqqqqssLKwsLC4uLn+j9X8m9jBwcHeuNT/pt7Fysz9tOPT0NL8wujZ1978zu3i4eLl6e793PHG+vzz7/HY/v/5+Pn////EZYDmAAAAQHRSTlMACmKZsObN9IcSHzorSg9Bb/iyVm2CwJPb+ar717T8/ujJ//X/4P/A///v///////+//z////+//7/////////9DWgkQAABLRJREFUWIWdVwt7qjoQlL5OfR1sEWlRRBBpAxHkTTCG//+v7gbR26Oi0v1aW9EZdmY3ydLp3BNCfzQa9oS7vnshupK2wtgxVKn7O7zs5NvdjpCNo/2GQhg7FTyKgmTjKL3WBOKK46MoKtLtdhtqg7YJKPmOZEWSAXwHkbZl6BmUJFGU7+GQS6i1UyE6WRAc4IwV3vpbaeXkGEdJWsPLkkVJsl6O2xDIm4BUeFIUrGRZRqO10cYGZbPHJ+v1OmIljQJvvZFbNKVS5Q/ak8RbZ2UJJgTUaOEjVJGrz0BAso5ITouEUq1FBnJauVcUQRGtI8u2bYSdu1wcjGUR/oxDEgUZ1A888DaIMZJa700mDobwidCt8pOMTboSeR8kHhfPkiAqkBtDKe15g4mS4cyknmJo415HXCRZtlGFTtdIssILoIJwc2s6pWVq4uX4Ui8NjO2OGGq43fqapG28IEm423IcZYFHQ+TDTxqXzHJ9f6lK/VMdgrIpiuRbhyW3IwvE0o3nLfp8NQZrqJwVh9glJSPY9CHc5eLjhKBneODTN94ySDc2yW63JfbHSBDUOPCKFJVVYN10/YphIZ/gR8ssihIcguFQcdNl5Y6gcDaAFMIZQnGFpzpyXRchW5+I/xrZ00ybMkaxT5N14CUbPYSUsTvpdQRZGekWrQiYPdUh5h+vp70oOb71DWGa/PUbuxbCGOkfYEKn2x2sQNc+BdNaLmZy/6yOAwOkYZ6di7HP/7X0uW6r+y92jRpf5rNXqX9xP+hP5rppWSYEzxHeIOwupFrgqiZgRv8SuIrhAtkWMMAv73cMyaCPWqno1AmkchNc6AijORCgqkbYRiACLw8tK6c1gSM24EVVEgaqjfY15mW2bN86bH5djdYEq6ZlJMerkSq96/4xMJrJh1IdFVwhyPN5PJtw/S6Xb4OVk/FgrwCOhpsEUljiPPVLlmJoM/AwJoyEq/1xKq7KI0FTESBJSll5Eow4qiiODXK80mRid2icoQ8UTkz/fx9KlwkeFnNykeA00obdUHLy+wjyhkYarG5jqyBKgwcNFpwFVRtOhLFzykDoBTxrPFIE+V+GHNn5BQJYjU1nkjDGPxJ1rfBSApygcTb44WNs+edNdZMAfKxBoe7nl+8Ph0ujhI6gHjohtq1peJmgvHYuj+OjgzZuqmpTI9UmVDCKrbixK/yGtXDUwJhv4SYHuYfXRpNq36FmQ/rV1VS5NpoIChy9YADKzynSfJ/A9fGsp1UiQtM+ZYgtTsBujjaiweufWidFZP6+r8Pb0524onB+2sc24pnQ0Ha5rSy8Z8QVYf+DleCTvQhGU9dyq9uTlXzXiCxqcAgRbPHDDcNZh8KKK4fd9c7ZsKc43EqSxnGc1vWgAL9/QhckDZMfHrC89aNSV56jMK+Mo6k9U1rcvQ5paU8Uzfj6+ppN9fdfPC5KtqsIQvfv37/DhduwD1+N4dKtl+1ggVo9ntTRXx5gg5k9+oWE/uIAk5Zopiqjodi/9xFDAO0wc1YwaTicYD6w6Z+fHw/wyU1w/+H18enp5eXzAPvzBgPbdDr9/Hx7eXp6fH24vpyFh0dAPz8/v805isP+HAKuvrw8vZ7PF/8BMepzR1wkM8UAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 18000,
            actualDps: 13170.75,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "エッグ Lv.9",
      baseHp: 300000,
      width: 5200,
      enemyLimit: 8,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 492000,
            actualAp: 6150,
            actualDps: 1410.4,
            magnification: "41000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 7800,
            actualAp: 780,
            actualDps: 570.8,
            magnification: "1560%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 234000,
            actualAp: 7800,
            actualDps: 14625.0,
            magnification: "1560%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 7800,
            actualAp: 780,
            actualDps: 570.8,
            magnification: "1560%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 234000,
            actualAp: 7800,
            actualDps: 14625.0,
            magnification: "1560%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 12000,
            actualDps: 10285.68,
            magnification: "800%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 12000,
            actualDps: 10285.68,
            magnification: "800%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 21600,
            actualDps: 15804.9,
            magnification: "600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "エッグ Lv.10",
      baseHp: 540000,
      width: 5200,
      enemyLimit: 8,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 6750,
            actualDps: 1548.0,
            magnification: "45000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 900,
            actualDps: 658.62,
            magnification: "1800%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "1800%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 900,
            actualDps: 658.62,
            magnification: "1800%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 900,
            actualDps: 658.62,
            magnification: "1800%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "1800%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 13500,
            actualDps: 11571.39,
            magnification: "900%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 13500,
            actualDps: 11571.39,
            magnification: "900%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1050000,
            actualAp: 25200,
            actualDps: 18439.05,
            magnification: "700%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 10,
      stageName: "エッグ Lv.11",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          treasureId: "57",
          treasureName: "ネコビタンC",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 552000,
            actualAp: 6900,
            actualDps: 1582.4,
            magnification: "46000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 32500,
            actualAp: 3875,
            actualDps: 2835.38,
            magnification: "250%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 237500,
            actualAp: 14250,
            actualDps: 12214.25,
            magnification: "950%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 32500,
            actualAp: 3875,
            actualDps: 2835.38,
            magnification: "250%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 32500,
            actualAp: 3875,
            actualDps: 2835.38,
            magnification: "250%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 237500,
            actualAp: 14250,
            actualDps: 12214.25,
            magnification: "950%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 363000,
            actualAp: 2247,
            actualDps: 4494.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1125000,
            actualAp: 27000,
            actualDps: 19756.12,
            magnification: "750%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 11,
      stageName: "エッグ Lv.12",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 597360,
            actualAp: 7467,
            actualDps: 1712.43,
            magnification: "49780%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 40300,
            actualAp: 4805,
            actualDps: 3515.86,
            magnification: "310%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 15000,
            actualDps: 12857.1,
            magnification: "1000%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 40300,
            actualAp: 4805,
            actualDps: 3515.86,
            magnification: "310%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 40300,
            actualAp: 4805,
            actualDps: 3515.86,
            magnification: "310%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 15000,
            actualDps: 12857.1,
            magnification: "1000%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 508200,
            actualAp: 3145,
            actualDps: 6291.6,
            magnification: "140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 28800,
            actualDps: 21073.2,
            magnification: "800%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 12,
      stageName: "エッグ Lv.13",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 642720,
            actualAp: 8034,
            actualDps: 1842.46,
            magnification: "53560%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 48100,
            actualAp: 5735,
            actualDps: 4196.36,
            magnification: "370%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 262500,
            actualAp: 15750,
            actualDps: 13499.95,
            magnification: "1050%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 48100,
            actualAp: 5735,
            actualDps: 4196.36,
            magnification: "370%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 48100,
            actualAp: 5735,
            actualDps: 4196.36,
            magnification: "370%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 262500,
            actualAp: 15750,
            actualDps: 13499.95,
            magnification: "1050%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 653400,
            actualAp: 4044,
            actualDps: 8089.2,
            magnification: "180%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1275000,
            actualAp: 30600,
            actualDps: 22390.28,
            magnification: "850%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 13,
      stageName: "エッグ Lv.14",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          treasureId: "169",
          treasureName: "蒼獣石",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 688080,
            actualAp: 8601,
            actualDps: 1972.5,
            magnification: "57340%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 55900,
            actualAp: 6665,
            actualDps: 4876.85,
            magnification: "430%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 16500,
            actualDps: 14142.81,
            magnification: "1100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 55900,
            actualAp: 6665,
            actualDps: 4876.85,
            magnification: "430%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 55900,
            actualAp: 6665,
            actualDps: 4876.85,
            magnification: "430%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 16500,
            actualDps: 14142.81,
            magnification: "1100%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 798600,
            actualAp: 4943,
            actualDps: 9886.8,
            magnification: "220%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1350000,
            actualAp: 32400,
            actualDps: 23707.35,
            magnification: "900%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 14,
      stageName: "エッグ Lv.15",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "750000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 733440,
            actualAp: 9168,
            actualDps: 2102.53,
            magnification: "61120%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 287500,
            actualAp: 17250,
            actualDps: 14785.67,
            magnification: "1150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 287500,
            actualAp: 17250,
            actualDps: 14785.67,
            magnification: "1150%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 907500,
            actualAp: 5617,
            actualDps: 11235.0,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1425000,
            actualAp: 34200,
            actualDps: 25024.42,
            magnification: "950%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 15,
      stageName: "エッグ Lv.16",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 778800,
            actualAp: 9735,
            actualDps: 2232.56,
            magnification: "64900%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 70200,
            actualAp: 8370,
            actualDps: 6124.41,
            magnification: "540%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 18000,
            actualDps: 15428.52,
            magnification: "1200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 70200,
            actualAp: 8370,
            actualDps: 6124.41,
            magnification: "540%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 70200,
            actualAp: 8370,
            actualDps: 6124.41,
            magnification: "540%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEHBgcICAcJCQkKCgoMDAwRERESExIUFBQUFhIhIh8jJiApJSYnKCUtLS02NjY3OjM2PDBGOUBARTtJVT5gRlhVVVVeWFFcXVl/V21qamlscGpqd1+iXIuJdoF7im+3Z5x7mmGPj4+Qj4/IcKqdnZ2VqIbceruLuGqpqqnugsiWyXO0tLT/itS+vr6k2n39odzNzMz9vuXa2dm7/ZLi4eH81OvP/bLs6Orh+8708vL1+vD8/Pz////91CYyAAAAQHRSTlMACYITHbD/zzQo8ERcgm5K8+R7jLebqf+ZyOz/t8/+/P/V//3l/v7/7P/7/v/9///8///+////////////////GkbqbgAABShJREFUWIWdVwl3qjwQLcXXp9ViiwsKLiBGsGgEI6ZAlv//r74JtHY5n0LfnKrtKfdmljsz8e6uzjS91dJqn7qK7vQmM2/a/Ue43p94MS2y194/wmdhWkgpsr2h/T4IrT0Jz+dzJoUskpE56f+SQjc9WigCLniW2CENTf03+M4kZlIohnMGL5dIEU9+wdCekUwIyc+VFRGBVMRm4yjacwIooTzIlAOcYCAQYb8pQXetYApbCA4snAZcSMm8TkMCzQgr3zMhBVdUKJdg6aRREFqn2x1EpQdAILnyxockANe8UR5783A9twOqcpDxEn/eB0IxrJvEoI1TKRgJEM4vVSjOfhlD2IygfFbkEcLveCE4ilUdvFb5xO1MaCMqSwZBAz9RpeDwe4I4pGOmK42Pnm6nwiSyMsEJIpCDQknKT6XMoQp6b+4PbxN0QyE/jCJcqWnvICGJcdcarPd146E1YxcCyQKViMR3Nm4q4353/JrMaxvTjOWnD7mfKPjusEEsHMyT2vPBOt4XF0RkKfjhsFsGCz95Hbdr8XfagHwSyNRRcEWw2Cf+oFE7tOfpJQaQwEbBN66f7O2aAl6sO8V5SaHe0uW2hCf+Ao2b9mPLnK1jkjMgEAxZixIe5IKMG48lvd0bjOchIZHvv5Zwysux1JQAFN/qGkNboffvcNl8qLS6PXM89cJ9krz6Cx/TKqnwTpq58AQng4Xe1A5iygXFcV4JE9U0wrt1R+PRwDT6nbanXCfWw4MFTSrQw8PfViMXNK3ses2wlSrxAxgMJQZEL00rWXIYa5SqpgTgg8MVwWLdQMtgrb45Gj0ZHsOR0kJsPT+7sKsiRMMmu16DxUzSNI5SmbpqQAmW57yqQxMCmBrvZYdWCBD/0lowmetD6Ixj/mUgIMzlRQZS1CupNY7F1zMpit7ng6ApodO6Muqj73gY8KjabJK5z1ZcJyTYi9/xCoggk2rLUTdg6+7tkdiZ5z/gIo1cy62WRRwIPBwaN5zQBvHP84m72u5WLlGOEcSC1XY5uOUAuyQcFlIZ+FaNxI0TkJwiy3XgT/s6gRFXcMFzWkmHVkN1t11ajmNZG0W3vIrXx1WsNEKu68JiAx04m9KB5crZ7nbOarm65UHHKyUkYpzmjBGlABEpF7ZLcACIHGezOmxGVwn64ff6BdBKzF2pCHZbR712B1hS15MIKRAX2QqlofQjixC55VrLMh/TqwQmYae3qgKs3AxQ+NzdvRPgvAznKoHWN4fkeDgoBvF2PL6BMzliHFUebNxcxsMlxLB8+n+8ERL3qB49CXaCj2OuVJxKstzsoIqw3/kaJv30mhLbHhMBnAvY07F8HXN2UtdkomoaAF060u/01jUh9yCBoLYsK09/K3JgOB6W5Q2RMZXb3Ls5TAx4NCJZkRUnOLvIMmA4HF0iP8YJ9Xo3G1HdjTDmcLUs3vKs4EX2djylPhVK0TwngX0bf6dPYoph+As4HL5nwB23YFnisxyDB3iB4tpp2DKHQzsHJRVFKWgORAEGMTGlBy5x7XVf0/Un/GUe8QIDmCNosBRmc2zUEYC1p/gyENRtVy3EIFZ6oJI2ue23PZxWBJxGjuUiTOkC7pgiwJLN6hezZpKqE3iKURCnFD5sQ02pFLEmO0X/uKVCLyntqIZc90ap2lABI5Pa1a573/ZYjhmN6awXCQbFiNLodhrhe3p7Smj6acTFZEHm9zYNaIAXbjS6+UW+fX//5+/Ly8vzpz2qn8fHR9sObRv+9ee+9yOR/wE4CF7gQLwzzgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 18000,
            actualDps: 15428.52,
            magnification: "1200%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 943800,
            actualAp: 5842,
            actualDps: 11684.4,
            magnification: "260%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 36000,
            actualDps: 26341.5,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 16,
      stageName: "エッグ Lv.17",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 824160,
            actualAp: 10302,
            actualDps: 2362.59,
            magnification: "68680%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 75400,
            actualAp: 8990,
            actualDps: 6578.07,
            magnification: "580%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 312500,
            actualAp: 18750,
            actualDps: 16071.38,
            magnification: "1250%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 75400,
            actualAp: 8990,
            actualDps: 6578.07,
            magnification: "580%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 75400,
            actualAp: 8990,
            actualDps: 6578.07,
            magnification: "580%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 312500,
            actualAp: 18750,
            actualDps: 16071.38,
            magnification: "1250%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 980100,
            actualAp: 6066,
            actualDps: 12133.8,
            magnification: "270%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1575000,
            actualAp: 37800,
            actualDps: 27658.58,
            magnification: "1050%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 17,
      stageName: "エッグ Lv.18",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 869520,
            actualAp: 10869,
            actualDps: 2492.62,
            magnification: "72460%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 80600,
            actualAp: 9610,
            actualDps: 7031.73,
            magnification: "620%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 325000,
            actualAp: 19500,
            actualDps: 16714.23,
            magnification: "1300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 80600,
            actualAp: 9610,
            actualDps: 7031.73,
            magnification: "620%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 80600,
            actualAp: 9610,
            actualDps: 7031.73,
            magnification: "620%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 325000,
            actualAp: 19500,
            actualDps: 16714.23,
            magnification: "1300%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEFBQUGBgYICAgJCQkKCgoKCgoLCwsODg4QEBAUFBQYGBgnJycpKSkxMTEyMjI3Nzc5OTlISEhKSkqLOwZXV1daWlpoaGilXhinagV3d3eycSh+fn66cSeCgoK+eSiNjY2/iDmYmJjMnhLMmkjYmivWmy+hoaHRqA/ToT3XqzOtra3ZrmDjvEO/v7/lxVHjwm3qz27Pz8/t1YPw2oTc3Nzy35Pz5Jr//wHn5+f08ez6+vr////////j/zl2AAAAQHRSTlMABxEcJsj/MqTcRFWHZb56j9ye/K7GDf7Z/yAI/z3of/+W/1n+KGLMsP8RkEf+w2T+gNum/urD//TeAf/+/wD/DWsFhwAABU1JREFUWIXtV1tb3DgMJRcSmjBXT0gMnqwxZouhpoaauq3t5v//q5UzF2aGaUl3X1cP+TIhOj6SjqRw8vM/2sn/AD9PhtqPq3uw27WF+6vBvmBX97efPj/cfdzY3cPT50/398P9P335/vL8eHd9/Vew6+u7j88vL1+fbn8MBFg+e/d4s7y8urq4Wtnl8uHFu4eLgQCXj9+c+/71y9PT596enr58/e7cy/VQgIvLm4fH55dvOwYRPSyH+geIi4vL5fLm5u/ebm6Wy8uLP3B/tR/B/pXnSVJErz/Wt0mZDAfIx8X2Pi7TgFIsxukfADRVuT44nVY5HD9pxTT6vdOuxQvVTpIoiuJ8oWQZ5Qtp23y4/0k0UU4spvPJoiJazyet8epPCERx0VoviVbGSEJrYTvbDM9AnE8WDRLeMdWBqVr5zovRUAJRMW8ZqTFRnaLed51kcDWLeKB7Pm21oYwYTa3lFhho5jvXFu/7BksnjXJecCY7r23ngIBRVCs5H0YgVAvoEk2NCYeDeU6pIuh8SAaiooJ0QdBUYcs1OBtrDMWAh84GMIjKxvRnMiZrXQsnFWWUSw71aAfUIB61ptsAII64rjEmNXUOMqEn7wIkU5DOKmxJZV0TQplQiq9IufY9GUH63Op8UA6WhEge9NOtMTv9eyHH5Sp9wawmmNZMOQP62Tx8RwhA32ze7ASjApGa6EDHbxH0ESVAtwZecT4Vbl10qBxnQiKMMAf9cczWzLw7bKYoKaeL+bRMR+MZd37t7jQmAEAQqiXwplmG1tz8/jiI0knFtdGqqVrcJytAWCkoqoVyimAm4JGleJMbM9tlkIwqqWUQa5B98FcGrnA8qWsDzaCoIK5nvsmB2tEizEdhDe0Dl5jaXjwK8BSqqVQhdis51d2uqa2UgH2rvQ8qgaAZ6ZvGEhgbVmBiAqrh3lAYA0cBYmAPLzmGEYcwCORIay9qiQSDJ72TlpA/Rc0uwEbM6bw1RsNrTtVQKxhcxmJuCOaE4FqvDgWATkIXvVLwGymmC6E5lhbe9NZqjbUl0DkQMZcwhdYeWvgQFNlSAEHZKuyl9GzWQJ14LXyPIZlViGIGM8c4a7dqZg6mqIA+Ds5WS84Ya4pedMUZaqsZzGsCatdEM4Jq0JvbS5gP08TAIIJprsBZSKg2WcUQFaMiHzcNwnUNRDRCiOhadfumAwVJKZSCK4iPUMpZtd2tUZqXZ5Pz8XSmZdCst/4AwGJYRY4hROForox1kIU9LUdxlKRpIyjw0AfekHI1H1Vcwh+x0Jvo/NvdWCIMyXeH/kCgyaHXzmdo2wk9wOFEiKaA/4Z9sNUejYqx2v2rPJyLcWWOnN4XoVxTbHcB3my3vD12elDNJtp4vlueN0ko+VF/SMG2YDlsik0OQwz7KTiXvwDQ823njtrNhgtbcrHnX84O5bPN1ug1T5O2nyuKQGO4Zs+/wW8EsIl1p17xVEC3K5RlzL8CxEU5alhtBgBAGmBmyCzLCCR382zRUjSbN/ZXALvZTirLuSVZ/RpCsuCaj4u0cb8o494GSCpjiLEi9Ge1elSMx+NJegIAq+r0Tb9dQeFzaPeTFgphaJhNTrfr5MZpkkQrHYXN3Tt75/s70ObhtwAM0WrMjWoXo30lAgDMUuYto9Kb1TJ0WAHRg2/qKEmS82peHO7GwMAgDCgZdl6GOsFv0dljH3RR8vZhALAA0Kmsv2Q0XIFRNfCLMF0zAK/adToAeAa3b9bwcYvzUaNgosEmlBkSimdZrXWdIanq87J4/18LGDhnUM7T01kz+7Cx2YfT09Px2dn5KD/+QfMPL2DDNr7DIBAAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1016400,
            actualAp: 6291,
            actualDps: 12583.2,
            magnification: "280%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1650000,
            actualAp: 39600,
            actualDps: 28975.65,
            magnification: "1100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 18,
      stageName: "エッグ Lv.19",
      baseHp: 552000,
      width: 3200,
      enemyLimit: 8,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 914880,
            actualAp: 11436,
            actualDps: 2622.66,
            magnification: "76240%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 85800,
            actualAp: 10230,
            actualDps: 7485.39,
            magnification: "660%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 337500,
            actualAp: 20250,
            actualDps: 17357.08,
            magnification: "1350%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 85800,
            actualAp: 10230,
            actualDps: 7485.39,
            magnification: "660%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 85800,
            actualAp: 10230,
            actualDps: 7485.39,
            magnification: "660%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEHBgcICAcJCQkKCgoMDAwRERESExIUFBQUFhIhIh8jJiApJSYnKCUtLS02NjY3OjM2PDBGOUBARTtJVT5gRlhVVVVeWFFcXVl/V21qamlscGpqd1+iXIuJdoF7im+3Z5x7mmGPj4+Qj4/IcKqdnZ2VqIbceruLuGqpqqnugsiWyXO0tLT/itS+vr6k2n39odzNzMz9vuXa2dm7/ZLi4eH81OvP/bLs6Orh+8708vL1+vD8/Pz////91CYyAAAAQHRSTlMACYITHbD/zzQo8ERcgm5K8+R7jLebqf+ZyOz/t8/+/P/V//3l/v7/7P/7/v/9///8///+////////////////GkbqbgAABShJREFUWIWdVwl3qjwQLcXXp9ViiwsKLiBGsGgEI6ZAlv//r74JtHY5n0LfnKrtKfdmljsz8e6uzjS91dJqn7qK7vQmM2/a/Ue43p94MS2y194/wmdhWkgpsr2h/T4IrT0Jz+dzJoUskpE56f+SQjc9WigCLniW2CENTf03+M4kZlIohnMGL5dIEU9+wdCekUwIyc+VFRGBVMRm4yjacwIooTzIlAOcYCAQYb8pQXetYApbCA4snAZcSMm8TkMCzQgr3zMhBVdUKJdg6aRREFqn2x1EpQdAILnyxockANe8UR5783A9twOqcpDxEn/eB0IxrJvEoI1TKRgJEM4vVSjOfhlD2IygfFbkEcLveCE4ilUdvFb5xO1MaCMqSwZBAz9RpeDwe4I4pGOmK42Pnm6nwiSyMsEJIpCDQknKT6XMoQp6b+4PbxN0QyE/jCJcqWnvICGJcdcarPd146E1YxcCyQKViMR3Nm4q4353/JrMaxvTjOWnD7mfKPjusEEsHMyT2vPBOt4XF0RkKfjhsFsGCz95Hbdr8XfagHwSyNRRcEWw2Cf+oFE7tOfpJQaQwEbBN66f7O2aAl6sO8V5SaHe0uW2hCf+Ao2b9mPLnK1jkjMgEAxZixIe5IKMG48lvd0bjOchIZHvv5Zwysux1JQAFN/qGkNboffvcNl8qLS6PXM89cJ9krz6Cx/TKqnwTpq58AQng4Xe1A5iygXFcV4JE9U0wrt1R+PRwDT6nbanXCfWw4MFTSrQw8PfViMXNK3ses2wlSrxAxgMJQZEL00rWXIYa5SqpgTgg8MVwWLdQMtgrb45Gj0ZHsOR0kJsPT+7sKsiRMMmu16DxUzSNI5SmbpqQAmW57yqQxMCmBrvZYdWCBD/0lowmetD6Ixj/mUgIMzlRQZS1CupNY7F1zMpit7ng6ApodO6Muqj73gY8KjabJK5z1ZcJyTYi9/xCoggk2rLUTdg6+7tkdiZ5z/gIo1cy62WRRwIPBwaN5zQBvHP84m72u5WLlGOEcSC1XY5uOUAuyQcFlIZ+FaNxI0TkJwiy3XgT/s6gRFXcMFzWkmHVkN1t11ajmNZG0W3vIrXx1WsNEKu68JiAx04m9KB5crZ7nbOarm65UHHKyUkYpzmjBGlABEpF7ZLcACIHGezOmxGVwn64ff6BdBKzF2pCHZbR712B1hS15MIKRAX2QqlofQjixC55VrLMh/TqwQmYae3qgKs3AxQ+NzdvRPgvAznKoHWN4fkeDgoBvF2PL6BMzliHFUebNxcxsMlxLB8+n+8ERL3qB49CXaCj2OuVJxKstzsoIqw3/kaJv30mhLbHhMBnAvY07F8HXN2UtdkomoaAF060u/01jUh9yCBoLYsK09/K3JgOB6W5Q2RMZXb3Ls5TAx4NCJZkRUnOLvIMmA4HF0iP8YJ9Xo3G1HdjTDmcLUs3vKs4EX2djylPhVK0TwngX0bf6dPYoph+As4HL5nwB23YFnisxyDB3iB4tpp2DKHQzsHJRVFKWgORAEGMTGlBy5x7XVf0/Un/GUe8QIDmCNosBRmc2zUEYC1p/gyENRtVy3EIFZ6oJI2ue23PZxWBJxGjuUiTOkC7pgiwJLN6hezZpKqE3iKURCnFD5sQ02pFLEmO0X/uKVCLyntqIZc90ap2lABI5Pa1a573/ZYjhmN6awXCQbFiNLodhrhe3p7Smj6acTFZEHm9zYNaIAXbjS6+UW+fX//5+/Ly8vzpz2qn8fHR9sObRv+9ee+9yOR/wE4CF7gQLwzzgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 337500,
            actualAp: 20250,
            actualDps: 17357.08,
            magnification: "1350%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEFBQUGBgYICAgJCQkKCgoKCgoLCwsODg4QEBAUFBQYGBgnJycpKSkxMTEyMjI3Nzc5OTlISEhKSkqLOwZXV1daWlpoaGilXhinagV3d3eycSh+fn66cSeCgoK+eSiNjY2/iDmYmJjMnhLMmkjYmivWmy+hoaHRqA/ToT3XqzOtra3ZrmDjvEO/v7/lxVHjwm3qz27Pz8/t1YPw2oTc3Nzy35Pz5Jr//wHn5+f08ez6+vr////////j/zl2AAAAQHRSTlMABxEcJsj/MqTcRFWHZb56j9ye/K7GDf7Z/yAI/z3of/+W/1n+KGLMsP8RkEf+w2T+gNum/urD//TeAf/+/wD/DWsFhwAABU1JREFUWIXtV1tb3DgMJRcSmjBXT0gMnqwxZouhpoaauq3t5v//q5UzF2aGaUl3X1cP+TIhOj6SjqRw8vM/2sn/AD9PhtqPq3uw27WF+6vBvmBX97efPj/cfdzY3cPT50/398P9P335/vL8eHd9/Vew6+u7j88vL1+fbn8MBFg+e/d4s7y8urq4Wtnl8uHFu4eLgQCXj9+c+/71y9PT596enr58/e7cy/VQgIvLm4fH55dvOwYRPSyH+geIi4vL5fLm5u/ebm6Wy8uLP3B/tR/B/pXnSVJErz/Wt0mZDAfIx8X2Pi7TgFIsxukfADRVuT44nVY5HD9pxTT6vdOuxQvVTpIoiuJ8oWQZ5Qtp23y4/0k0UU4spvPJoiJazyet8epPCERx0VoviVbGSEJrYTvbDM9AnE8WDRLeMdWBqVr5zovRUAJRMW8ZqTFRnaLed51kcDWLeKB7Pm21oYwYTa3lFhho5jvXFu/7BksnjXJecCY7r23ngIBRVCs5H0YgVAvoEk2NCYeDeU6pIuh8SAaiooJ0QdBUYcs1OBtrDMWAh84GMIjKxvRnMiZrXQsnFWWUSw71aAfUIB61ptsAII64rjEmNXUOMqEn7wIkU5DOKmxJZV0TQplQiq9IufY9GUH63Op8UA6WhEge9NOtMTv9eyHH5Sp9wawmmNZMOQP62Tx8RwhA32ze7ASjApGa6EDHbxH0ESVAtwZecT4Vbl10qBxnQiKMMAf9cczWzLw7bKYoKaeL+bRMR+MZd37t7jQmAEAQqiXwplmG1tz8/jiI0knFtdGqqVrcJytAWCkoqoVyimAm4JGleJMbM9tlkIwqqWUQa5B98FcGrnA8qWsDzaCoIK5nvsmB2tEizEdhDe0Dl5jaXjwK8BSqqVQhdis51d2uqa2UgH2rvQ8qgaAZ6ZvGEhgbVmBiAqrh3lAYA0cBYmAPLzmGEYcwCORIay9qiQSDJ72TlpA/Rc0uwEbM6bw1RsNrTtVQKxhcxmJuCOaE4FqvDgWATkIXvVLwGymmC6E5lhbe9NZqjbUl0DkQMZcwhdYeWvgQFNlSAEHZKuyl9GzWQJ14LXyPIZlViGIGM8c4a7dqZg6mqIA+Ds5WS84Ya4pedMUZaqsZzGsCatdEM4Jq0JvbS5gP08TAIIJprsBZSKg2WcUQFaMiHzcNwnUNRDRCiOhadfumAwVJKZSCK4iPUMpZtd2tUZqXZ5Pz8XSmZdCst/4AwGJYRY4hROForox1kIU9LUdxlKRpIyjw0AfekHI1H1Vcwh+x0Jvo/NvdWCIMyXeH/kCgyaHXzmdo2wk9wOFEiKaA/4Z9sNUejYqx2v2rPJyLcWWOnN4XoVxTbHcB3my3vD12elDNJtp4vlueN0ko+VF/SMG2YDlsik0OQwz7KTiXvwDQ823njtrNhgtbcrHnX84O5bPN1ug1T5O2nyuKQGO4Zs+/wW8EsIl1p17xVEC3K5RlzL8CxEU5alhtBgBAGmBmyCzLCCR382zRUjSbN/ZXALvZTirLuSVZ/RpCsuCaj4u0cb8o494GSCpjiLEi9Ge1elSMx+NJegIAq+r0Tb9dQeFzaPeTFgphaJhNTrfr5MZpkkQrHYXN3Tt75/s70ObhtwAM0WrMjWoXo30lAgDMUuYto9Kb1TJ0WAHRg2/qKEmS82peHO7GwMAgDCgZdl6GOsFv0dljH3RR8vZhALAA0Kmsv2Q0XIFRNfCLMF0zAK/adToAeAa3b9bwcYvzUaNgosEmlBkSimdZrXWdIanq87J4/18LGDhnUM7T01kz+7Cx2YfT09Px2dn5KD/+QfMPL2DDNr7DIBAAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1052700,
            actualAp: 6516,
            actualDps: 13032.6,
            magnification: "290%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1725000,
            actualAp: 41400,
            actualDps: 30292.72,
            magnification: "1150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 19,
      stageName: "エッグ Lv.20",
      baseHp: 960000,
      width: 3200,
      enemyLimit: 8,
      requiredCost: 150,
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
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 960000,
            actualAp: 12000,
            actualDps: 2752.0,
            magnification: "80000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 91000,
            actualAp: 10850,
            actualDps: 7939.05,
            magnification: "700%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 21000,
            actualDps: 17999.94,
            magnification: "1400%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 91000,
            actualAp: 10850,
            actualDps: 7939.05,
            magnification: "700%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 91000,
            actualAp: 10850,
            actualDps: 7939.05,
            magnification: "700%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 155,
            actualDps: 113.42,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 21000,
            actualDps: 17999.94,
            magnification: "1400%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1089000,
            actualAp: 6741,
            actualDps: 13482.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 43200,
            actualDps: 31609.8,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    }
  ]
} as const;

export default e24014Data;

