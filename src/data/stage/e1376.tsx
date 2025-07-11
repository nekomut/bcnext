// Stage 1376 Data
import type { StageData } from '../../app/stage/types';

export const e1376Data: StageData = {
  eventId: 1376,
  eventName: "大乱闘極悪ファミリーズ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 376,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "悪逆無道 神ムズ",
      baseHp: 3000000,
      width: 5000,
      enemyLimit: 20,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
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
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "667",
          enemyName: "極悪なネコキングドラゴン",
          traits: ["悪"],
          baseStats: {
            hp: 700000,
            ap: 4850,
            dps: 2969.39,
            speed: 7,
            range: 785,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 5,
            tba: 20
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 4850,
            actualDps: 2969.39,
            magnification: "100%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 70000
            },
            "counter-surge": {
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "661",
          enemyName: "極悪なゴムネコ",
          traits: ["悪"],
          baseStats: {
            hp: 5500000,
            ap: 20000,
            dps: 5607.48,
            speed: 2,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 5500000,
            actualAp: 20000,
            actualDps: 5607.48,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 550,
                level: 2
            }
          }
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
            actualHp: 160000,
            actualAp: 12492,
            actualDps: 23422.48,
            magnification: "400%",
            count: "0",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "3",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
        },
        {
          enemyId: "667",
          enemyName: "極悪なネコキングドラゴン",
          traits: ["悪"],
          baseStats: {
            hp: 700000,
            ap: 4850,
            dps: 2969.39,
            speed: 7,
            range: 785,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 5,
            tba: 20
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 4850,
            actualDps: 2969.39,
            magnification: "100%",
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "93.3-93.3s",
            delayFrames: "2,800-2,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 70000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 481851,
            actualAp: 16851,
            actualDps: 31595.62,
            magnification: "150%",
            count: "3",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "5",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "4",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "極悪非道 神ムズ",
      baseHp: 3000000,
      width: 5500,
      enemyLimit: 6,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "2",
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
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 7826.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "660",
          enemyName: "極悪なネコモヒカン",
          traits: ["悪"],
          baseStats: {
            hp: 3600000,
            ap: 18000,
            dps: 33750.0,
            speed: 25,
            range: 240,
            rangeType: "範囲",
            kbLevel: 30,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 18000,
            actualDps: 33750.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
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
            "shield": {
                hp: 48000
            },
            "counter-surge": {
                enabled: true
            }
          }
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
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-46.7s",
            delayFrames: "600-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "665",
          enemyName: "極悪な天空のネコ",
          traits: ["悪"],
          baseStats: {
            hp: 1820000,
            ap: 53000,
            dps: 9408.28,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1999,
            freq: 169,
            foreswing: 20,
            backswing: 6,
            tba: 75
          },
          stageStats: {
            actualHp: 1820000,
            actualAp: 53000,
            actualDps: 9408.28,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 50,
                level: 2
            },
            "shield": {
                hp: 1340000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "12",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "662",
          enemyName: "極悪な暗黒ネコ",
          traits: ["悪"],
          baseStats: {
            hp: 2100000,
            ap: 8750,
            dps: 16406.25,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2100000,
            actualAp: 8750,
            actualDps: 16406.25,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 34,
                power: 100
            },
            "shield": {
                hp: 700000
            },
            "counter-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "668",
          enemyName: "極悪なネコジャラミ",
          traits: ["悪"],
          baseStats: {
            hp: 2500000,
            ap: 33000,
            dps: 30937.5,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2125,
            freq: 32,
            foreswing: 18,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2500000,
            actualAp: 33000,
            actualDps: 30937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "213.3s",
            spawnTimeFrames: "6,400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 320,
                omni_range: [-320, 320]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            },
            "shield": {
                hp: 500000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "260.0s",
            spawnTimeFrames: "7,800f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "0",
            spawnTime: "366.7s",
            spawnTimeFrames: "11,000f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e1376Data;

