// Stage 1296 Data
import type { StageData } from '../../app/stage/types';

export const e1296Data: StageData = {
  eventId: 1296,
  eventName: "絶・奈落門",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 296,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "獄楽穢土 超極ムズ",
      baseHp: 1200000,
      width: 5800,
      enemyLimit: 8,
      requiredCost: 200,
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
          probability: "100",
          amount: "1000000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "491",
          enemyName: "阿亀我王",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 2600000,
            ap: 24000,
            dps: 11428.57,
            speed: 3,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 63,
            foreswing: 24,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 2600000,
            actualAp: 24000,
            actualDps: 11428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 800,
                omni_range: [-200, 800]
            },
            "knockback": {
                chance: 100
            },
            "immune-freeze": {
                enabled: true
            }
          }
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "29.3-32.0s",
            delayFrames: "880-960f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "58.7-60.0s",
            delayFrames: "1,760-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "3",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "1.0-3.3s",
            delayFrames: "30-100f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "3",
            spawnTime: "193.3s",
            spawnTimeFrames: "5,800f",
            delay: "3.3-6.0s",
            delayFrames: "100-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "5",
            spawnTime: "253.3s",
            spawnTimeFrames: "7,600f",
            delay: "6.7-9.3s",
            delayFrames: "200-280f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "冥土喫茶OKAME 超極ムズ",
      baseHp: 1500000,
      width: 6200,
      enemyLimit: 30,
      requiredCost: 200,
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
          treasureId: "10522",
          treasureName: "ネコナーガへの進化権(ネコメデューサの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "491",
          enemyName: "阿亀我王",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 2600000,
            ap: 24000,
            dps: 11428.57,
            speed: 3,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 63,
            foreswing: 24,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 2600000,
            actualAp: 24000,
            actualDps: 11428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 800,
                omni_range: [-200, 800]
            },
            "knockback": {
                chance: 100
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "53.7s",
            spawnTimeFrames: "1,610f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "80.3s",
            spawnTimeFrames: "2,410f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "80.7s",
            spawnTimeFrames: "2,420f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "4",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "4",
            spawnTime: "110.3s",
            spawnTimeFrames: "3,310f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "4",
            spawnTime: "110.7s",
            spawnTimeFrames: "3,320f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "5",
            spawnTime: "143.3s",
            spawnTimeFrames: "4,300f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "5",
            spawnTime: "143.7s",
            spawnTimeFrames: "4,310f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "5",
            spawnTime: "144.0s",
            spawnTimeFrames: "4,320f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "0",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        }]
    }
  ]
} as const;

export default e1296Data;

