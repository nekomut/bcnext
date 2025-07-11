// Stage 27024 Data
import type { StageData } from '../../app/stage/types';

export const e27024Data: StageData = {
  eventId: 27024,
  eventName: "エヴァ量産機強襲",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 24,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "殲滅 Lv.1",
      baseHp: 450000,
      width: 4900,
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
          treasureId: "38",
          treasureName: "緑マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 20000,
            actualDps: 14634.16,
            magnification: "400%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "殲滅 Lv.2",
      baseHp: 540000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "35",
          treasureName: "紫マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 42750,
            actualAp: 23750,
            actualDps: 17378.06,
            magnification: "475%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1000,
            actualDps: 638.3,
            magnification: "125%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1000,
            actualDps: 638.3,
            magnification: "125%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 37,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "125%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 37,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "125%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "殲滅 Lv.3",
      baseHp: 630000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "36",
          treasureName: "赤マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 49500,
            actualAp: 27500,
            actualDps: 20121.97,
            magnification: "550%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 45,
            actualAp: 3000,
            actualDps: 4999.99,
            magnification: "150%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 45,
            actualAp: 3000,
            actualDps: 4999.99,
            magnification: "150%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "殲滅 Lv.4",
      baseHp: 730000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "37",
          treasureName: "青マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 56250,
            actualAp: 31250,
            actualDps: 22865.88,
            magnification: "625%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1400,
            actualDps: 893.62,
            magnification: "175%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1400,
            actualDps: 893.62,
            magnification: "175%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 52,
            actualAp: 3500,
            actualDps: 5833.33,
            magnification: "175%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 52,
            actualAp: 3500,
            actualDps: 5833.33,
            magnification: "175%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "殲滅 Lv.5",
      baseHp: 820000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "39",
          treasureName: "黄マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 63000,
            actualAp: 35000,
            actualDps: 25609.78,
            magnification: "700%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 4000,
            actualDps: 6666.66,
            magnification: "200%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 4000,
            actualDps: 6666.66,
            magnification: "200%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "殲滅 Lv.6",
      baseHp: 910000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "51",
          treasureName: "キャッツアイ【レア】",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 69750,
            actualAp: 38750,
            actualDps: 28353.69,
            magnification: "775%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 11,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "225%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 11,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "225%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 67,
            actualAp: 4500,
            actualDps: 7499.99,
            magnification: "225%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 67,
            actualAp: 4500,
            actualDps: 7499.99,
            magnification: "225%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "殲滅 Lv.7",
      baseHp: 1000000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "52",
          treasureName: "キャッツアイ【激レア】",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 76500,
            actualAp: 42500,
            actualDps: 31097.59,
            magnification: "850%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 12,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "250%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 12,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "250%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 75,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "250%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 75,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "250%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "殲滅 Lv.8",
      baseHp: 1100000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "53",
          treasureName: "キャッツアイ【超激レア】",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 83250,
            actualAp: 46250,
            actualDps: 33841.5,
            magnification: "925%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 13,
            actualAp: 2200,
            actualDps: 1404.26,
            magnification: "275%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 13,
            actualAp: 2200,
            actualDps: 1404.26,
            magnification: "275%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 82,
            actualAp: 5500,
            actualDps: 9166.66,
            magnification: "275%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 82,
            actualAp: 5500,
            actualDps: 9166.66,
            magnification: "275%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "これでラストー!!",
      baseHp: 1200000,
      width: 4900,
      enemyLimit: 20,
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
          treasureId: "58",
          treasureName: "キャッツアイ【闇】",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "3",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 15,
            actualAp: 2400,
            actualDps: 1531.92,
            magnification: "300%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 15,
            actualAp: 2400,
            actualDps: 1531.92,
            magnification: "300%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 6000,
            actualDps: 9999.99,
            magnification: "300%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 6000,
            actualDps: 9999.99,
            magnification: "300%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e27024Data;

