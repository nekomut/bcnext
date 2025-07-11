// Stage 2174 Data
import type { StageData } from '../../app/stage/types';

export const e2174Data: StageData = {
  eventId: 2174,
  eventName: "続・魔法少女になってよ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 174,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 200, 300, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "願い事を決めるんだ、早く",
      baseHp: 25000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 200,
            actualDps: 92.31,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "訳が分からないよ",
      baseHp: 75000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 75,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 240,
            actualDps: 98.64,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 300,
            actualDps: 391.3,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 300,
            actualDps: 391.3,
            magnification: "200%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 73.18,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 400,
            actualDps: 184.62,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "12.0-16.0s",
            delayFrames: "360-480f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 400,
            actualDps: 184.62,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
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
            actualHp: 30000,
            actualAp: 1000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "戦いを甘く考えすぎだよ",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "25",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 20.44,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 900,
            actualDps: 574.47,
            magnification: "50%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 1000,
            actualDps: 810.81,
            magnification: "50%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "292",
          enemyName: "ワニボン",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "50%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "さあ、君は何を願う？",
      baseHp: 300000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 12000,
            actualDps: 845.07,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "19.3s",
            spawnTimeFrames: "580f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1600,
            actualDps: 738.48,
            magnification: "800%",
            count: "7",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1600,
            actualDps: 738.48,
            magnification: "800%",
            count: "7",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1600,
            actualDps: 738.48,
            magnification: "800%",
            count: "7",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "君は神にでもなるつもりかい？",
      baseHp: 450000,
      width: 4500,
      enemyLimit: 25,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "75",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "16",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 300,
            actualAp: 20,
            actualDps: 9.23,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2174Data;

