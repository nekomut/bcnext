// Stage 25064 Data
import type { StageData } from '../../app/stage/types';

export const e25064Data: StageData = {
  eventId: 25064,
  eventName: "悪しき本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 64,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "頂の祠 超極ムズ",
      baseHp: 650000,
      width: 4800,
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
          treasureId: "30166",
          treasureName: "ユニット20166への進化権",
          probability: "8",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30167",
          treasureName: "ユニット20167への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30171",
          treasureName: "ユニット20171への進化権",
          probability: "8",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30172",
          treasureName: "ユニット20172への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30176",
          treasureName: "ユニット20176への進化権",
          probability: "8",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30177",
          treasureName: "ユニット20177への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30156",
          treasureName: "ユニット20156への進化権",
          probability: "4",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30157",
          treasureName: "ユニット20157への進化権",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30161",
          treasureName: "ユニット20161への進化権",
          probability: "4",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30162",
          treasureName: "ユニット20162への進化権",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 7500,
            actualDps: 4326.93,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 24600,
            actualAp: 8400,
            actualDps: 6810.81,
            magnification: "300%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 13736,
            actualDps: 25755.0,
            magnification: "200%",
            count: "8",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
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
            actualHp: 900,
            actualAp: 3750,
            actualDps: 4017.87,
            magnification: "300%",
            count: "3",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
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
            actualHp: 900,
            actualAp: 3750,
            actualDps: 4017.87,
            magnification: "300%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
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
            actualHp: 900,
            actualAp: 3750,
            actualDps: 4017.87,
            magnification: "300%",
            count: "3",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
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
            actualHp: 900,
            actualAp: 3750,
            actualDps: 4017.87,
            magnification: "300%",
            count: "3",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
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
            actualHp: 900,
            actualAp: 3750,
            actualDps: 4017.87,
            magnification: "300%",
            count: "3",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
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
          enemyId: "557",
          enemyName: "悪魔ベヒモッス",
          traits: ["悪"],
          baseStats: {
            hp: 380000,
            ap: 13600,
            dps: 2205.41,
            speed: 5,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 185,
            foreswing: 6,
            backswing: 10,
            tba: 90
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 13600,
            actualDps: 2205.41,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 410,
                omni_range: [-100, 410]
            },
            "shield": {
                hp: 800000
            }
          }
        },
        {
          enemyId: "559",
          enemyName: "魔我王",
          traits: ["悪"],
          baseStats: {
            hp: 452000,
            ap: 10200,
            dps: 1900.62,
            speed: 2,
            range: 460,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2300,
            freq: 161,
            foreswing: 32,
            backswing: 11,
            tba: 65
          },
          stageStats: {
            actualHp: 452000,
            actualAp: 10200,
            actualDps: 1900.62,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "shield": {
                hp: 322000
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
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e25064Data;

