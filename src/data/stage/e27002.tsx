// Stage 27002 Data
import type { StageData } from '../../app/stage/types';

export const e27002Data: StageData = {
  eventId: 27002,
  eventName: "悪魔軍 強襲！",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 2,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "天魔界 Lv.1",
      baseHp: 30000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 80,
            actualDps: 150.0,
            magnification: "100%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 80,
            actualDps: 150.0,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 37.66,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 22222,
            actualAp: 2666,
            actualDps: 516.08,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "天魔界 Lv.2",
      baseHp: 90000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
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
            actualHp: 207,
            actualAp: 18,
            actualDps: 11.75,
            magnification: "230%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 460,
            actualAp: 46,
            actualDps: 46.0,
            magnification: "230%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 2300,
            actualAp: 184,
            actualDps: 345.0,
            magnification: "230%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 460,
            actualAp: 46,
            actualDps: 46.0,
            magnification: "230%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 2300,
            actualAp: 184,
            actualDps: 345.0,
            magnification: "230%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1200,
            actualDps: 150.62,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 88888,
            actualAp: 10665,
            actualDps: 2064.31,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "天魔界 Lv.3",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
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
            actualHp: 324,
            actualAp: 28,
            actualDps: 18.4,
            magnification: "360%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 720,
            actualAp: 72,
            actualDps: 72.0,
            magnification: "360%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 288,
            actualDps: 540.0,
            magnification: "360%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 720,
            actualAp: 72,
            actualDps: 72.0,
            magnification: "360%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 288,
            actualDps: 540.0,
            magnification: "360%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2100,
            actualDps: 263.59,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 155555,
            actualAp: 18664,
            actualDps: 3612.55,
            magnification: "140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "天魔界 Lv.4",
      baseHp: 210000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "30000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
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
            actualHp: 441,
            actualAp: 39,
            actualDps: 25.04,
            magnification: "490%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 980,
            actualAp: 98,
            actualDps: 98.0,
            magnification: "490%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 4900,
            actualAp: 392,
            actualDps: 735.0,
            magnification: "490%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 980,
            actualAp: 98,
            actualDps: 98.0,
            magnification: "490%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 4900,
            actualAp: 392,
            actualDps: 735.0,
            magnification: "490%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 3000,
            actualDps: 376.56,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 222222,
            actualAp: 26664,
            actualDps: 5160.78,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "天魔界 Lv.5",
      baseHp: 270000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 120,
            actualDps: 120.0,
            magnification: "600%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 120,
            actualDps: 120.0,
            magnification: "600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQEBAQEDAwMEAwIEBAQHAwIFBQUFBQQGBgUIBgQIBwYNBwQTCgcVCgYQDw42AwQjIB9NEw0+HA5oCQ05KBtHJhKZBg5BMSc3OD0dTTAtQFu9BhNpNx1dRjceaD1WS0Q4UHjmCxt+RyEchEpGYJBaYWCaVSZPbKJlcGwgm1ZYebV4eHi8aCkjrF98fHyMgmyCiIhiic0pvmrZeC+XnJ30hzWlrq6vu7y6x8fC1dTM4+Lw7GXe7Oz+/v7///+adIO0AAAAQHRSTlMADScXOv/YWEds6oa4yKiY/v8D4v64///M//3////p/////////////////////+wD//////////////8A//8AJPqfEAAABohJREFUWIXtVm2bojoSFRWVRoU0CEZEwEgADXanNYaXC/f//6stcGa6de7uzux+nWrk0Tw5J1WnXtKDv/9PG/wh+EPwh+BO8J9tuNZH/2XLvzNlOByOBvp6BQyz2Uz5fQKdrYcr8QamTXfr3ycYvE7HRrGaTbW1MIb/A37wblhUrvWF9SKZPvxtuGIQwuDhnRFnN/0dLPg7Xl9vSZ5crwkhJL/luTP7dYKZtVwlt97yxMcMAcPt5nf5/DUpFOt6h98SL4qi7oNhJd+tlr/kxniRfCfAkWpvXddGUedR7i9+pahm/i3/4QBS7f12a6teH9I1t8bfT9FXK2P6TxGNXtbOnSAPU8/7RhD1a9fr1bpjdF63bSPX458JlJnWnQbixx8fJ8+zbdu1PS/F5Hq7OnOrLwhNtnejPzEM9VUOO33PO50+Pj5SD4MEXpR+fESI3K4LrVNB2bWtDMMSGHbPqoysLvk4iiNw4OMELmA4H8PXOAYhrr4BMQxFy1RV5SUua/0r+vUd2Of5LYzi1IPTEYpOsQd59JB3gjWczPuuHMsG8GoVqqhdfyV4//u9KwKC4ziNcHLNExJGKZQB9RMUpWmUL+867VqkqmHHUr89Evz1OrYMry8fiBhK+EawRyuR5MQDrxLr3paaqHlW1R3B+plAUUZR7COM/ITAX56wsi6xTxLQ1bMsffTaM7x1OeBYCO1BQtBgrCgLcgs9j2UhUhEOcd2UIkNIhKpvTV//eu+1fmsrYGjeHvDT5WKuLXe7/JZACCplGVZRyOsi8zAKKUYJ0UavStcP45AWsi7Kr02uGA503ZWQJHHtOI5Q2NSOHbK6kqFtC44wlON1t7K6Q3UICXMmHgiGo/HEz3MClQNpiKSUlRRNUQs4ipWipBFyQZg+ETAtbok+fW6GZZKYrusExy5lRVNXdVPXdVbCC77S2NvYrrmAU4cERoz1U2tq4PzeDs6XAxRNLDpwZ1x276b00uhwxlvb1wZj53rN58/44e7mu3vneLkEcZrGWHwjEEX3LqEh4uDou5a/HuggVqI/4yc5SWiydYMzRJDGvAeWRVP1ITDvlKbQWUSfTQY61MdzBLPFy+JFlBmMICc6wWbeALARVJa9CDLqCEznZgxmA+iX6/rJgdFI0UXW9YhpxydgYHcN5N2ThnceRAUmkMWxkxD085zXOFbvlnYeZEAgpaAhZaWEHHRxRawJ9YG2g5AK4xk/xugbHgP+dIrgXMZDd7t3Kasa3BOoWIb6jvGsaHZPNaBMoEEhYQVVoxNMktOG1U0hS+4TzotGmHFPoIoCKrAQhdSeHFiqJm6kEEUrYIABgRfQsmKQhKqmlbSdtCPAVVuwLJNlUzxpMFVttyqpkIyxTsPTB3YCVMqyrwFuJrInyNqGUyyLrHp7vG5HE3ubdUOyZgj3BKfYdzb0WzU6diNjGFNxBINYcg4lvnx0wDD3vuwIIAaqnnoRGmIiyCBwcBsCS4HAoxB+yApelc7yqwtjc7/3qQB8IWiZIS+NT2nTJGYoeca4ydqGpVGMGHNtmSFWNtl2b31elMpku9/bsK2UgtcQYQlCUOhnHzEK5shCMg9jKRLTJiVMWOrv93vzRyIMF37aNm8LzquiovRAM8pkARMjE63kMuNZFgQBFwz6uSC5ivneXWrfXZh2eNdUq0ayshCcBufD+RgcN7ypITFUNDI4HC+H84YJuOfCPOFI2J/NOLX3vQO4LbmohfCy4/FwgWcDN6BAx6BqWr45XmAVN45rq7lfi2z12QI9fmuqZVsyITmmcFh33mXDoGr48Zy1xeZ4OJ+BsilME+VZWfHPZlzsewdAwroOBdtsDpdz/xwPQUFFTc8B29w5LwcBh5BEtqLiP7I4tCAFWwTu1nDjBuB6t/nYQc6bjYBxEBx6um45qNqKkKatZPVZyiPdss0EbglIHuy6XM7BpYugfw4wDmi3evfqjFiWZFBwsvgy0V5fRzO48aF7bYTQ5nDo472DLgFlgh+6n5CYYGPadoJC0bRi9ZVgoGBgzUw7c3ziOz7edHbslAuOAQ4hs8FmAxckQYgQYzY2uFw8EExl2+xmI6OBOuQwMQWZK+OZBjadwqPv/LCC9TypedLrPzQeJpJGizdjNFDWsizLIiQk9C39q1m+n4U+IT4L8+dx3vWCrk9HQ2PygnzYRHzfcRz10ZzvpqKX+T//36yMp5qmG/P5YjGZTF6eDJYWi/l8aejadPZwI/wL7WwBoNVk5nkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 3750,
            actualDps: 470.7,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 12500,
            actualDps: 3906.25,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 277777,
            actualAp: 33330,
            actualDps: 6450.98,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "天魔界 Lv.6",
      baseHp: 330000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1360,
            actualAp: 136,
            actualDps: 136.0,
            magnification: "680%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 52000,
            actualAp: 4059,
            actualDps: 7612.31,
            magnification: "130%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1360,
            actualAp: 136,
            actualDps: 136.0,
            magnification: "680%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 52000,
            actualAp: 4059,
            actualDps: 7612.31,
            magnification: "130%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 4200,
            actualDps: 527.18,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 162000,
            actualAp: 13500,
            actualDps: 4218.75,
            magnification: "270%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 333333,
            actualAp: 39996,
            actualDps: 7741.17,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "天魔界 Lv.7",
      baseHp: 390000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 15000,
            actualAp: 6000,
            actualDps: 4390.23,
            magnification: "300%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1520,
            actualAp: 152,
            actualDps: 152.0,
            magnification: "760%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 64000,
            actualAp: 4996,
            actualDps: 9368.99,
            magnification: "160%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1520,
            actualAp: 152,
            actualDps: 152.0,
            magnification: "760%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 64000,
            actualAp: 4996,
            actualDps: 9368.99,
            magnification: "160%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 155000,
            actualAp: 4650,
            actualDps: 583.67,
            magnification: "310%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 174000,
            actualAp: 14500,
            actualDps: 4531.25,
            magnification: "290%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 388888,
            actualAp: 46662,
            actualDps: 9031.36,
            magnification: "350%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "天魔界 Lv.8",
      baseHp: 450000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "100000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1680,
            actualAp: 168,
            actualDps: 168.0,
            magnification: "840%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 76000,
            actualAp: 5933,
            actualDps: 11125.68,
            magnification: "190%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1680,
            actualAp: 168,
            actualDps: 168.0,
            magnification: "840%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 76000,
            actualAp: 5933,
            actualDps: 11125.68,
            magnification: "190%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 5100,
            actualDps: 640.15,
            magnification: "340%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 186000,
            actualAp: 15500,
            actualDps: 4843.75,
            magnification: "310%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 444444,
            actualAp: 53328,
            actualDps: 10321.56,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "天魔界 Lv.9",
      baseHp: 510000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 25000,
            actualAp: 10000,
            actualDps: 7317.05,
            magnification: "500%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1840,
            actualAp: 184,
            actualDps: 184.0,
            magnification: "920%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 88000,
            actualAp: 6870,
            actualDps: 12882.36,
            magnification: "220%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 1840,
            actualAp: 184,
            actualDps: 184.0,
            magnification: "920%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 88000,
            actualAp: 6870,
            actualDps: 12882.36,
            magnification: "220%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 185000,
            actualAp: 5550,
            actualDps: 696.64,
            magnification: "370%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 198000,
            actualAp: 16500,
            actualDps: 5156.25,
            magnification: "330%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 499999,
            actualAp: 59994,
            actualDps: 11611.75,
            magnification: "450%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "天魔界 Lv.10",
      baseHp: 570000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 30000,
            actualAp: 12000,
            actualDps: 8780.46,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 200.0,
            magnification: "1000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 17500,
            actualDps: 5468.75,
            magnification: "350%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 200.0,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
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
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 753.12,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 17500,
            actualDps: 5468.75,
            magnification: "350%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 555555,
            actualAp: 66660,
            actualDps: 12901.95,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 10,
      stageName: "天魔界 Lv.11",
      baseHp: 630000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 36000,
            actualAp: 14400,
            actualDps: 10536.55,
            magnification: "720%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 3200,
            actualAp: 320,
            actualDps: 320.0,
            magnification: "1600%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 104000,
            actualAp: 8119,
            actualDps: 15224.61,
            magnification: "260%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 228000,
            actualAp: 19000,
            actualDps: 5937.5,
            magnification: "380%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 3200,
            actualAp: 320,
            actualDps: 320.0,
            magnification: "1600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 104000,
            actualAp: 8119,
            actualDps: 15224.61,
            magnification: "260%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 7200,
            actualDps: 903.74,
            magnification: "480%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 228000,
            actualAp: 19000,
            actualDps: 5937.5,
            magnification: "380%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 711110,
            actualAp: 85324,
            actualDps: 16514.5,
            magnification: "640%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 11,
      stageName: "天魔界 Lv.12",
      baseHp: 690000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 42000,
            actualAp: 16800,
            actualDps: 12292.64,
            magnification: "840%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 4400,
            actualAp: 440,
            actualDps: 440.0,
            magnification: "2200%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 108000,
            actualAp: 8432,
            actualDps: 15810.17,
            magnification: "270%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 246000,
            actualAp: 20500,
            actualDps: 6406.25,
            magnification: "410%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 4400,
            actualAp: 440,
            actualDps: 440.0,
            magnification: "2200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 108000,
            actualAp: 8432,
            actualDps: 15810.17,
            magnification: "270%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 8400,
            actualDps: 1054.37,
            magnification: "560%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 246000,
            actualAp: 20500,
            actualDps: 6406.25,
            magnification: "410%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 866665,
            actualAp: 103989,
            actualDps: 20127.04,
            magnification: "780%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 12,
      stageName: "天魔界 Lv.13",
      baseHp: 750000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "300000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 48000,
            actualAp: 19200,
            actualDps: 14048.74,
            magnification: "960%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 5600,
            actualAp: 560,
            actualDps: 560.0,
            magnification: "2800%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 112000,
            actualAp: 8744,
            actualDps: 16395.74,
            magnification: "280%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 264000,
            actualAp: 22000,
            actualDps: 6875.0,
            magnification: "440%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 5600,
            actualAp: 560,
            actualDps: 560.0,
            magnification: "2800%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 112000,
            actualAp: 8744,
            actualDps: 16395.74,
            magnification: "280%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQEBAQEDAwMEAwIEBAQHAwIFBQUFBQQGBgUIBgQIBwYNBwQTCgcVCgYQDw42AwQjIB9NEw0+HA5oCQ05KBtHJhKZBg5BMSc3OD0dTTAtQFu9BhNpNx1dRjceaD1WS0Q4UHjmCxt+RyEchEpGYJBaYWCaVSZPbKJlcGwgm1ZYebV4eHi8aCkjrF98fHyMgmyCiIhiic0pvmrZeC+XnJ30hzWlrq6vu7y6x8fC1dTM4+Lw7GXe7Oz+/v7///+adIO0AAAAQHRSTlMADScXOv/YWEds6oa4yKiY/v8D4v64///M//3////p/////////////////////+wD//////////////8A//8AJPqfEAAABohJREFUWIXtVm2bojoSFRWVRoU0CEZEwEgADXanNYaXC/f//6stcGa6de7uzux+nWrk0Tw5J1WnXtKDv/9PG/wh+EPwh+BO8J9tuNZH/2XLvzNlOByOBvp6BQyz2Uz5fQKdrYcr8QamTXfr3ycYvE7HRrGaTbW1MIb/A37wblhUrvWF9SKZPvxtuGIQwuDhnRFnN/0dLPg7Xl9vSZ5crwkhJL/luTP7dYKZtVwlt97yxMcMAcPt5nf5/DUpFOt6h98SL4qi7oNhJd+tlr/kxniRfCfAkWpvXddGUedR7i9+pahm/i3/4QBS7f12a6teH9I1t8bfT9FXK2P6TxGNXtbOnSAPU8/7RhD1a9fr1bpjdF63bSPX458JlJnWnQbixx8fJ8+zbdu1PS/F5Hq7OnOrLwhNtnejPzEM9VUOO33PO50+Pj5SD4MEXpR+fESI3K4LrVNB2bWtDMMSGHbPqoysLvk4iiNw4OMELmA4H8PXOAYhrr4BMQxFy1RV5SUua/0r+vUd2Of5LYzi1IPTEYpOsQd59JB3gjWczPuuHMsG8GoVqqhdfyV4//u9KwKC4ziNcHLNExJGKZQB9RMUpWmUL+867VqkqmHHUr89Evz1OrYMry8fiBhK+EawRyuR5MQDrxLr3paaqHlW1R3B+plAUUZR7COM/ITAX56wsi6xTxLQ1bMsffTaM7x1OeBYCO1BQtBgrCgLcgs9j2UhUhEOcd2UIkNIhKpvTV//eu+1fmsrYGjeHvDT5WKuLXe7/JZACCplGVZRyOsi8zAKKUYJ0UavStcP45AWsi7Kr02uGA503ZWQJHHtOI5Q2NSOHbK6kqFtC44wlON1t7K6Q3UICXMmHgiGo/HEz3MClQNpiKSUlRRNUQs4ipWipBFyQZg+ETAtbok+fW6GZZKYrusExy5lRVNXdVPXdVbCC77S2NvYrrmAU4cERoz1U2tq4PzeDs6XAxRNLDpwZ1x276b00uhwxlvb1wZj53rN58/44e7mu3vneLkEcZrGWHwjEEX3LqEh4uDou5a/HuggVqI/4yc5SWiydYMzRJDGvAeWRVP1ITDvlKbQWUSfTQY61MdzBLPFy+JFlBmMICc6wWbeALARVJa9CDLqCEznZgxmA+iX6/rJgdFI0UXW9YhpxydgYHcN5N2ThnceRAUmkMWxkxD085zXOFbvlnYeZEAgpaAhZaWEHHRxRawJ9YG2g5AK4xk/xugbHgP+dIrgXMZDd7t3Kasa3BOoWIb6jvGsaHZPNaBMoEEhYQVVoxNMktOG1U0hS+4TzotGmHFPoIoCKrAQhdSeHFiqJm6kEEUrYIABgRfQsmKQhKqmlbSdtCPAVVuwLJNlUzxpMFVttyqpkIyxTsPTB3YCVMqyrwFuJrInyNqGUyyLrHp7vG5HE3ubdUOyZgj3BKfYdzb0WzU6diNjGFNxBINYcg4lvnx0wDD3vuwIIAaqnnoRGmIiyCBwcBsCS4HAoxB+yApelc7yqwtjc7/3qQB8IWiZIS+NT2nTJGYoeca4ydqGpVGMGHNtmSFWNtl2b31elMpku9/bsK2UgtcQYQlCUOhnHzEK5shCMg9jKRLTJiVMWOrv93vzRyIMF37aNm8LzquiovRAM8pkARMjE63kMuNZFgQBFwz6uSC5ivneXWrfXZh2eNdUq0ayshCcBufD+RgcN7ypITFUNDI4HC+H84YJuOfCPOFI2J/NOLX3vQO4LbmohfCy4/FwgWcDN6BAx6BqWr45XmAVN45rq7lfi2z12QI9fmuqZVsyITmmcFh33mXDoGr48Zy1xeZ4OJ+BsilME+VZWfHPZlzsewdAwroOBdtsDpdz/xwPQUFFTc8B29w5LwcBh5BEtqLiP7I4tCAFWwTu1nDjBuB6t/nYQc6bjYBxEBx6um45qNqKkKatZPVZyiPdss0EbglIHuy6XM7BpYugfw4wDmi3evfqjFiWZFBwsvgy0V5fRzO48aF7bYTQ5nDo472DLgFlgh+6n5CYYGPadoJC0bRi9ZVgoGBgzUw7c3ziOz7edHbslAuOAQ4hs8FmAxckQYgQYzY2uFw8EExl2+xmI6OBOuQwMQWZK+OZBjadwqPv/LCC9TypedLrPzQeJpJGizdjNFDWsizLIiQk9C39q1m+n4U+IT4L8+dx3vWCrk9HQ2PygnzYRHzfcRz10ZzvpqKX+T//36yMp5qmG/P5YjGZTF6eDJYWi/l8aejadPZwI/wL7WwBoNVk5nkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 9600,
            actualDps: 1204.99,
            magnification: "640%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 264000,
            actualAp: 22000,
            actualDps: 6875.0,
            magnification: "440%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1022221,
            actualAp: 122654,
            actualDps: 23739.59,
            magnification: "920%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 13,
      stageName: "天魔界 Lv.14",
      baseHp: 810000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 54000,
            actualAp: 21600,
            actualDps: 15804.83,
            magnification: "1080%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 6800,
            actualAp: 680,
            actualDps: 680.0,
            magnification: "3400%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 116000,
            actualAp: 9056,
            actualDps: 16981.3,
            magnification: "290%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 282000,
            actualAp: 23500,
            actualDps: 7343.75,
            magnification: "470%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 6800,
            actualAp: 680,
            actualDps: 680.0,
            magnification: "3400%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 116000,
            actualAp: 9056,
            actualDps: 16981.3,
            magnification: "290%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 10800,
            actualDps: 1355.62,
            magnification: "720%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQABAQACAQACAgIEAgIDAwIGBAQHBAMHBwgLBQUSBwcUBwUKCw0fBwMyCAMxDAghFwJJDQRMDANTDAQKKjcbJi1tEwdHJRp0EwUrMyh9FAU2NDOLFAULSGRFQD5vMyEGWHuuGgWVLhEQXoBhUgPQIAdWU08HcqDjJQnwKAuBYRcIgrVlY2JCfH1zb2wImNSQhAmBfXcJq+2Liomkngaelo2+sQmmp6e+sqfZvqDl2gLIz9L+9QT44Kz////LLeC3AAAAQHRSTlMAGzFRCWNFeOn/jJ/XsMKt/QHfy/vH////2uTv//7+/v/n//////////////////////////////////////8AgxxRXQAAB/5JREFUWIXtV1tjqjwWlfsRvFWRoAKhEYlc0kBEhGo7//9fzQ7annbO5XuYl3mYtNqKYWXvtddeCaN//Zdj9H+A/wWAb0NX9dFfh6opf5+gTf8BQZlaI/0vIIpr/MMShqto6p++VEcW0Uzrl+tfo5qH2sT8E4CtzYmpLD4X0E3bljer06n1CMwkZBrO/wQwmzvp3CKPEBSbtVgd6bo+0njLpwChKEZKQpTavwYpF7CIu8tRmNlPMgZz23dias2Wy+XM2jZdvzVH6swI93uS7mC6+o0sTYMESEryLM2JMddG5vPLS0PxIkyzLE+JS4XwvLW2C920SAly4JZvYdgrxQzzDEZObA0Z+vPpdksoF5TG+31MecNiRLvJKiMAsI+Joa++MWGku0maDWMx20EpoupU4aJgXStE23UCh/l7Ox4bG4QOxf6QLZep85UCdZOTO0BKsnCmm15U4TR/L3hzuYj2pWxewjxHPxwb1ZdzXBOSk6/FNHSD5PcAshwBH/raG7skz/PD9e39HR9lQiRDxsoNL2/n+rrPiDOyPvWhzHRl9wkQWormUPHiumlKDpe3t7dzdDqdqgXCS0Li6xv8xLFrjn4KStnN1OUdIE3znISEiPbGF4sFOhwkwLisqtJnLCb1FT6/1XWBVNDk435VnWfzVX5HICSDWsYeb1sa01b4/qFm0diLErgQHIb73651urPTjfrQrG5pZKVtHlUgYRj6LAgw48B/WxwOBWNJQtsGB5TWA8CFpLZDLOND9PPJLl3BlbsQ4IX8gAbjMcaUcS4E400jKPY8RikQcKn3ZDEjxJnpHxSAhHMyHXhM0xRKGboMBzgIIZyYikZwjEjMAlbUl+sZQaVT0OckfLCopWS2Avbd9J4CCkka+r6PBmmkMacB7eKMuHAJZLzf35MNUfbRdst8Z5H8o44yjVw23QJBAMTvRej3bRuHIXLDFBh+TEpz9FFHdZnt0Od12T1wM0yPKY6x4GHcNQ3UwAW49MsqO+1uNdCX2qcOgQN4wcQ0hfQZFBMvcCeATBwgqA/knz1iAFfQhzIY5kgJfwLIMsoXULFoOJRDtAwA4hYjEFkmY5CLQNtqI2UgQZsoo1n2hQFIYR9DCqTo+33M2/fXnsVFL4BkwIYxRJAvldF88AR9FW6WbvqTgTzzW9Z2PombVxj9a9vDnzaQrH5ymCJ3s3PvrqTOoTnD9M4ANBCJMee4j4nPOOvfW9E1/SulAaI+5PYgIIR7lvcq6LZtLh8ppLKRQo83feB5ZCH6BgR96/sGvMkPA+b/LEOOgABlKIPimgr64ABSRGNGOU2ScEGb97a7Cdbe2g6HIac+KCQbFAPWOdLn03s3bHb2jzsyfEV8MFDRvL4kyKes7263XvS3W+D5qLlxFw1VktanqbPNoxnmUnh3Hcco4DAdhojciPJOtD1nzU3gMkH8dmt9tAfXg1xlNQy5GVjqyJC9McieQh+LvmvbthPRokpof+tb6MUbT07lIoZoYIIPeh7yWCnD/lEcVrblLMFICBNNwBmm0MeCedGpTALRdVz0Qrq054kO2pvRGNZaOpZ1dyTdORRiu3TBdQluhccEiI/TyEvAB5NEANZNeMeTBAgw5YwxTPJwt9lMHn7yZGwxF+B3WUgFFgH2YfNCVQlGejomrBdcBEl1OpVQHw+EcesC4ItsnA8/eoI8pgEDCOThrqfUl8Yq14ff4zERDTtKMPD1DCi+dbcmzHe2YSo/AeTJw4PqHShUjTEX3AWSHu4C8iIZ/6lEkvcF7RiGvlrukPNxFnkafHWJwErrmvGOeYEfusc7QDUsDqP05D6ThVBlxniYb74fU0xTNZYkjA9M8MCjAQhZclDdUWD9qgTUlMTngwcpMLz8z2PO05NuOEvXXUAmtIXO8cbR8RgtjpXkrypfPL+oCzD165W3mLFfzkGSySXUMpWdICAOgKD1GSGvqF9ezpf6cDhczpfL+Xzxx6zlM/U3hzErHPToCtpAEE0E6/p7VJzrgibH+nIoIAivLoLute/4VvsVYKQ6c8d2Fj6EKCCTl+To1Re0WPiudzxfrlfYVK5n+v7OcdNy4+vZDeIZPuqGZW/ADwKMBQ5EXfux3IhCv6zue9pb4fCeU8oaajwN4xG8rVjgDfpIcVareVRS7tEjLA8Z15fL3gMekwvsq5etpm9Bmn4stt+OtFb5HE2nijkcGSwoWhRBFasghnUvB4KkkpKivhZba2RQJqBh2TcSVThBlNFUfwaXNZOP8pd+WEPqsJm7R6jkMTomU5jsTGCbef0WgT5S1+Wperaej47xLNUnax+hvbz7UFzerkEJfQWkOtIETdr27bczmmJZxlouWUHznMq7eqso8FG4f6uhDIeDV0W4835MHcUydBvT+XcZqNMoKR+aPZYP9ct/I1TXi7JMkipqaVKWnr1OJo6i/Koi63i6928J4wMB/knQ3pe+4AlpSgM72989EKjWJBmYK4GrJJFnKsCRVxKEZFUC7pXDhCr5nQThrHvvf+AaQinHHsZwwgYIIG9RlaCsAN+pSdbGbwFAxuvBOKrjer0FIfKtojtJCbaQeBPYaFjLkiOEN/nzE405ddbPz1PY72yMwZ/XUF17vYZnDWsAALOTbf7HxxXZDYqpmZphzTzMW8FmjuNMp/A28cZewMBmwNInf3yw063Zj/HHwIz2YvzL8Ib3yfT3T12wvGXDkrPZBMZ2++PrkJdms9nUsS3D/BrEvwEh1uDS0E0IlgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 282000,
            actualAp: 23500,
            actualDps: 7343.75,
            magnification: "470%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1177776,
            actualAp: 141319,
            actualDps: 27352.13,
            magnification: "1060%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 14,
      stageName: "天魔界 Lv.15",
      baseHp: 870000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 25000,
            actualDps: 7812.5,
            magnification: "500%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQABAQACAQACAgIEAgIDAwIGBAQHBAMHBwgLBQUSBwcUBwUKCw0fBwMyCAMxDAghFwJJDQRMDANTDAQKKjcbJi1tEwdHJRp0EwUrMyh9FAU2NDOLFAULSGRFQD5vMyEGWHuuGgWVLhEQXoBhUgPQIAdWU08HcqDjJQnwKAuBYRcIgrVlY2JCfH1zb2wImNSQhAmBfXcJq+2Liomkngaelo2+sQmmp6e+sqfZvqDl2gLIz9L+9QT44Kz////LLeC3AAAAQHRSTlMAGzFRCWNFeOn/jJ/XsMKt/QHfy/vH////2uTv//7+/v/n//////////////////////////////////////8AgxxRXQAAB/5JREFUWIXtV1tjqjwWlfsRvFWRoAKhEYlc0kBEhGo7//9fzQ7annbO5XuYl3mYtNqKYWXvtddeCaN//Zdj9H+A/wWAb0NX9dFfh6opf5+gTf8BQZlaI/0vIIpr/MMShqto6p++VEcW0Uzrl+tfo5qH2sT8E4CtzYmpLD4X0E3bljer06n1CMwkZBrO/wQwmzvp3CKPEBSbtVgd6bo+0njLpwChKEZKQpTavwYpF7CIu8tRmNlPMgZz23dias2Wy+XM2jZdvzVH6swI93uS7mC6+o0sTYMESEryLM2JMddG5vPLS0PxIkyzLE+JS4XwvLW2C920SAly4JZvYdgrxQzzDEZObA0Z+vPpdksoF5TG+31MecNiRLvJKiMAsI+Joa++MWGku0maDWMx20EpoupU4aJgXStE23UCh/l7Ox4bG4QOxf6QLZep85UCdZOTO0BKsnCmm15U4TR/L3hzuYj2pWxewjxHPxwb1ZdzXBOSk6/FNHSD5PcAshwBH/raG7skz/PD9e39HR9lQiRDxsoNL2/n+rrPiDOyPvWhzHRl9wkQWormUPHiumlKDpe3t7dzdDqdqgXCS0Li6xv8xLFrjn4KStnN1OUdIE3znISEiPbGF4sFOhwkwLisqtJnLCb1FT6/1XWBVNDk435VnWfzVX5HICSDWsYeb1sa01b4/qFm0diLErgQHIb73651urPTjfrQrG5pZKVtHlUgYRj6LAgw48B/WxwOBWNJQtsGB5TWA8CFpLZDLOND9PPJLl3BlbsQ4IX8gAbjMcaUcS4E400jKPY8RikQcKn3ZDEjxJnpHxSAhHMyHXhM0xRKGboMBzgIIZyYikZwjEjMAlbUl+sZQaVT0OckfLCopWS2Avbd9J4CCkka+r6PBmmkMacB7eKMuHAJZLzf35MNUfbRdst8Z5H8o44yjVw23QJBAMTvRej3bRuHIXLDFBh+TEpz9FFHdZnt0Od12T1wM0yPKY6x4GHcNQ3UwAW49MsqO+1uNdCX2qcOgQN4wcQ0hfQZFBMvcCeATBwgqA/knz1iAFfQhzIY5kgJfwLIMsoXULFoOJRDtAwA4hYjEFkmY5CLQNtqI2UgQZsoo1n2hQFIYR9DCqTo+33M2/fXnsVFL4BkwIYxRJAvldF88AR9FW6WbvqTgTzzW9Z2PombVxj9a9vDnzaQrH5ymCJ3s3PvrqTOoTnD9M4ANBCJMee4j4nPOOvfW9E1/SulAaI+5PYgIIR7lvcq6LZtLh8ppLKRQo83feB5ZCH6BgR96/sGvMkPA+b/LEOOgABlKIPimgr64ABSRGNGOU2ScEGb97a7Cdbe2g6HIac+KCQbFAPWOdLn03s3bHb2jzsyfEV8MFDRvL4kyKes7263XvS3W+D5qLlxFw1VktanqbPNoxnmUnh3Hcco4DAdhojciPJOtD1nzU3gMkH8dmt9tAfXg1xlNQy5GVjqyJC9McieQh+LvmvbthPRokpof+tb6MUbT07lIoZoYIIPeh7yWCnD/lEcVrblLMFICBNNwBmm0MeCedGpTALRdVz0Qrq054kO2pvRGNZaOpZ1dyTdORRiu3TBdQluhccEiI/TyEvAB5NEANZNeMeTBAgw5YwxTPJwt9lMHn7yZGwxF+B3WUgFFgH2YfNCVQlGejomrBdcBEl1OpVQHw+EcesC4ItsnA8/eoI8pgEDCOThrqfUl8Yq14ff4zERDTtKMPD1DCi+dbcmzHe2YSo/AeTJw4PqHShUjTEX3AWSHu4C8iIZ/6lEkvcF7RiGvlrukPNxFnkafHWJwErrmvGOeYEfusc7QDUsDqP05D6ThVBlxniYb74fU0xTNZYkjA9M8MCjAQhZclDdUWD9qgTUlMTngwcpMLz8z2PO05NuOEvXXUAmtIXO8cbR8RgtjpXkrypfPL+oCzD165W3mLFfzkGSySXUMpWdICAOgKD1GSGvqF9ezpf6cDhczpfL+Xzxx6zlM/U3hzErHPToCtpAEE0E6/p7VJzrgibH+nIoIAivLoLute/4VvsVYKQ6c8d2Fj6EKCCTl+To1Re0WPiudzxfrlfYVK5n+v7OcdNy4+vZDeIZPuqGZW/ADwKMBQ5EXfux3IhCv6zue9pb4fCeU8oaajwN4xG8rVjgDfpIcVareVRS7tEjLA8Z15fL3gMekwvsq5etpm9Bmn4stt+OtFb5HE2nijkcGSwoWhRBFasghnUvB4KkkpKivhZba2RQJqBh2TcSVThBlNFUfwaXNZOP8pd+WEPqsJm7R6jkMTomU5jsTGCbef0WgT5S1+Wperaej47xLNUnax+hvbz7UFzerkEJfQWkOtIETdr27bczmmJZxlouWUHznMq7eqso8FG4f6uhDIeDV0W4835MHcUydBvT+XcZqNMoKR+aPZYP9ct/I1TXi7JMkipqaVKWnr1OJo6i/Koi63i6928J4wMB/knQ3pe+4AlpSgM72989EKjWJBmYK4GrJJFnKsCRVxKEZFUC7pXDhCr5nQThrHvvf+AaQinHHsZwwgYIIG9RlaCsAN+pSdbGbwFAxuvBOKrjer0FIfKtojtJCbaQeBPYaFjLkiOEN/nzE405ddbPz1PY72yMwZ/XUF17vYZnDWsAALOTbf7HxxXZDYqpmZphzTzMW8FmjuNMp/A28cZewMBmwNInf3yw063Zj/HHwIz2YvzL8Ib3yfT3T12wvGXDkrPZBMZ2++PrkJdms9nUsS3D/BrEvwEh1uDS0E0IlgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 25000,
            actualDps: 7812.5,
            magnification: "500%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12000,
            actualDps: 1506.24,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 25000,
            actualDps: 7812.5,
            magnification: "500%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1333332,
            actualAp: 159984,
            actualDps: 30964.68,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 15,
      stageName: "天魔界 Lv.16",
      baseHp: 930000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 62000,
            actualAp: 24800,
            actualDps: 18146.28,
            magnification: "1240%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 8800,
            actualAp: 880,
            actualDps: 880.0,
            magnification: "4400%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 318000,
            actualAp: 26500,
            actualDps: 8281.25,
            magnification: "530%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 318000,
            actualAp: 26500,
            actualDps: 8281.25,
            magnification: "530%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 8800,
            actualAp: 880,
            actualDps: 880.0,
            magnification: "4400%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 124000,
            actualAp: 9681,
            actualDps: 18152.42,
            magnification: "310%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 12600,
            actualDps: 1581.55,
            magnification: "840%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 318000,
            actualAp: 26500,
            actualDps: 8281.25,
            magnification: "530%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1399998,
            actualAp: 167983,
            actualDps: 32512.91,
            magnification: "1260%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 16,
      stageName: "天魔界 Lv.17",
      baseHp: 990000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 64000,
            actualAp: 25600,
            actualDps: 18731.65,
            magnification: "1280%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 9600,
            actualAp: 960,
            actualDps: 960.0,
            magnification: "4800%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 28000,
            actualDps: 8750.0,
            magnification: "560%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 28000,
            actualDps: 8750.0,
            magnification: "560%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 9600,
            actualAp: 960,
            actualDps: 960.0,
            magnification: "4800%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
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
            actualHp: 128000,
            actualAp: 9993,
            actualDps: 18737.98,
            magnification: "320%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 13200,
            actualDps: 1656.86,
            magnification: "880%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 28000,
            actualDps: 8750.0,
            magnification: "560%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1466665,
            actualAp: 175982,
            actualDps: 34061.15,
            magnification: "1320%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 17,
      stageName: "天魔界 Lv.18",
      baseHp: 1050000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 66000,
            actualAp: 26400,
            actualDps: 19317.01,
            magnification: "1320%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 10400,
            actualAp: 1040,
            actualDps: 1040.0,
            magnification: "5200%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 354000,
            actualAp: 29500,
            actualDps: 9218.75,
            magnification: "590%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 354000,
            actualAp: 29500,
            actualDps: 9218.75,
            magnification: "590%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 10400,
            actualAp: 1040,
            actualDps: 1040.0,
            magnification: "5200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 132000,
            actualAp: 10305,
            actualDps: 19323.55,
            magnification: "330%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 460000,
            actualAp: 13800,
            actualDps: 1732.18,
            magnification: "920%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 354000,
            actualAp: 29500,
            actualDps: 9218.75,
            magnification: "590%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1533331,
            actualAp: 183981,
            actualDps: 35609.38,
            magnification: "1380%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 18,
      stageName: "天魔界 Lv.19",
      baseHp: 1100000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 68000,
            actualAp: 27200,
            actualDps: 19902.38,
            magnification: "1360%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 11200,
            actualAp: 1120,
            actualDps: 1120.0,
            magnification: "5600%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 372000,
            actualAp: 31000,
            actualDps: 9687.5,
            magnification: "620%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 372000,
            actualAp: 31000,
            actualDps: 9687.5,
            magnification: "620%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 11200,
            actualAp: 1120,
            actualDps: 1120.0,
            magnification: "5600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 136000,
            actualAp: 10618,
            actualDps: 19909.11,
            magnification: "340%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 14400,
            actualDps: 1807.49,
            magnification: "960%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 372000,
            actualAp: 31000,
            actualDps: 9687.5,
            magnification: "620%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1599998,
            actualAp: 191980,
            actualDps: 37157.62,
            magnification: "1440%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    },
    {
      stageId: 19,
      stageName: "天魔界 Lv.20",
      baseHp: 1150000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            actualHp: 70000,
            actualAp: 28000,
            actualDps: 20487.74,
            magnification: "1400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 1200.0,
            magnification: "6000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 32500,
            actualDps: 10156.25,
            magnification: "650%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 32500,
            actualDps: 10156.25,
            magnification: "650%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 1200.0,
            magnification: "6000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
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
            actualHp: 140000,
            actualAp: 10930,
            actualDps: 20494.67,
            magnification: "350%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 15000,
            actualDps: 1882.8,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 25000,
            actualDps: 7812.5,
            magnification: "500%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.7-26.7s",
            delayFrames: "680-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "455",
          enemyName: "魔肖ネロ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQECAgICAgICAgIGBgYIBwUHCAcGCQcJCgcKDQgMDQoMDwoKEhAHIj5vCQ4eMxgYNSUjMRw7JxwJPmgpShlWJ2UnQ1NZNhO5CBN9LBkMUolAVCdiPzzuCBoOYaRYVxo3aiNjWRJ3UQ2QPj8ubYM6fS51W2RrbxmnTysLg8GSaAWtcgt4iSfBW1aNcm8/l7oJqezfZWS+iAbkchaLoEf8fEHaoAaft0NMxvTtsge2z1b/vwP39PX///+/dvWxAAAAQHRSTlMAADUTRWp6V5zqvqr9itn+///pyf///////////////////9////7//////////////v////////////////8AjmsDoAAAB3RJREFUWIXtl22TqjoSgFUUEBAMhkhGQOAEMUBQMTo4yNz//6+2cTx37z3j2aqt/bZ1m6qxSOgnnU6/ZEZ//I8y+gfwD+D/BDD+70UzVeXPl98AlOnk1fDoS3G6WynK7D8BJrbnmT+nJqsnTNEdVx0r8CxOi/Fq8XvA1InjOHBhjclMG+muoU00bTw2vTj2jIUynZofJ3W3m/4OAPqB5wWxp49HK3t1/QGyMsc6jHhx4E+nu9PHICvlNWAC6wcBIGLPBNoPuVAXtx+TmRd4MBrs9MXHx2kHgJOqvQIodvwlASynT10T1XXNDRvB+zDoOT4oH/cfp4/T6hVAfXz3QHiBQ4sichziOBh5X4NBsPvY746XfQSbeAH404ABYPm+HxWC+b4ofCd4Wuac9pfL+/vl9GG+AEy85/LDl18/oF0wGHwSPP90Eu8D4AQB9Q0wtb2n+qAQ+KEPfwsRxL7/E3j62F+K4nLZnfzJKx/8NGA4BiErWXmDP0NZhV9e8PzdRSBC34vfOHHufgGc2JOVZVkigUMNmGUx/2GcQ9CFhYwABWLtxTEqevA8RS5Y11W48njt4ap7mjDHBBMSEooTPH0ZiTPDfuwgkLLvZMKof70jymSXACDwdDdNyToiYRrqr0NZGaIWAGHb9VLyvmJBiKUUbQVQYzG16TrL9lm0Dl8d44NgOI7nBLzv25bzvpW+V3Ut74TnzEFB3awvBb1kEZ2+BGi6UQal53hV30tOeN+JVopeIi4gx1VTN6xoDRJFc91UvwNmQRPHTYMgeLpeBB+7qhV9L9qk3IEFmpHnOeKcQ4IQkuf291B2m7Ipy7J4fz/DGWBvF+xoBY70nUocDqaR78qAYM4T5Je7F4CpkzAfEMUhez9UvSAMoeX5nlk04Yfz+YdmktwPEUkRPMTQvgEWqJItC5rwXJzfC8llL5fb7ednJjtyPmSRMR6ZlpXXaY0sc/LdiVPCk5xLEZTFGXZRUPDD23Z7/jyLPgKmH8y1sUoe8iiKvwBGdohpWKdSxLvzAQiZeAC220LI8+FwCJrGVRQ3sayQTL4DlFWapjVnaVihAB8ONDscqmEL2+2SHYrsPRr8q40XeV2n+vg7QEukYCnBFcNYSHbOwmtxPtDl29syOxz9c1GWCSrN8QQRYk2+A5QfnRQbODQmuop2Lc3un/7+fAbbz4fo806DoOpZ4Crqeo2tF31BlR2zMGRNy2TPqoLizyO+X4/H4ng8otung9u+Z3Gs2xatpDB/BUwsySzWC8rEnldZsinQHczP9rfj/mjh6DMCNUnigLGq6/t+9Qtg5JYU47aTRUSLCL/taYaic0TfBllah2gfsTBJUem1gomq7d2/NxbFbhpvTduKLbNkmQmW0Qjj7H0fHq/FcV9kGLOEJ6kV+JDggwVy9leAYpQDYN1C8lE5uJBJ7EQ4Oh/24IHDAa8xIyHCGGFR0Up0faU9ABNVG0wx66YpnfWa9UMV6MGRou2ZtV/jAo7hXIDfaZiSCra4Xh6o7PrO+PKBNk+hf6vx7dRA7cRgKCUJg0hYwnbwek0QphQjAjNDmnTvMlpvGNCF+nTiyM5d02tu18aJy8CDYuRZb0/PbSLEaUgIihIUlx7rLt17G+0xlk8DALBwSViHQVP3Aa9jiNQytpYQ/gNhu7QI2yUJjuIojOOQUcw2NFyvUZi4z0ickTSH5PSbsiO7diDEuKrYZjkQqBeEA4CwPSNkI+qECQo1GUO+PUvJSNUmKqpz3DQ+jnfdUG4oL4qKkuUSbhQ+CRknKOQpFsUmkRXPBZQLck29x/1i8MEsvOY13ZcOGFp3KallEkLEQRWD2s4LGtJNRTfLY8twITZpdeuFh67g1Gc9mJDcJdecWmmKd3Fds1vfpumbGBpyGfhb0W23on3b3EMuJE+lvHYQsF1IUvsrEtX5RK/rq4XynNBd6dFrd5MkERJytwwCShNKoxRSicptkkKB7muLIE7SNB82AXEwGa/ysAb9NEXUJ117bYVI8rcllNa49BmnG8b3n3dR0LTtIR8FyYkkOSK58QxlF4EuQShPEaJdd+2hpSE4mAGwE0K+tZv955GnSPTtpa0IlOQapbntkmdztY3c1aZ2TlAaJnCjElxeEILuAoRmAx4Q2+UN4tji/Aq7vSfIqpGZulO0eAAUTSXQ6Imtk/B6B7ndrglKIbmaJmiCt039iOU0Te634alvCLd4MUu1mf7MRhUSczpXpuHtegMALHLjXvMFKNFQwmHDNrreoKMB/87xcukqhqn89Yoz1cZa/Vj+fr8m9e0LAPvwrGF1N12EMPeQawIAS5ksfq2JmpvUAhYBO27X+AsQu669Iqmru3oC5PrKE86xtcT2cJH4BTCZs65t24pTXvOHC8oAGerKtMhsYow4KCfJUEzg5kXdv5V1ZTSawCU8g55+gVshfGDBJa30LAvNjfl8bpmGbSBZtVBmBik2WfTvxjLS7bn1ECgiy4Iuz7xi1guBpaEgy7ZqNxRebePnZVsZTbWZqi503TQNkJUNMv9FhrFh0jR1fbFQZ9p0MvwD8y8YMPaLXXMiKwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 111111,
            ap: 13332,
            dps: 2580.39,
            speed: 9,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 155,
            foreswing: 51,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1666665,
            actualAp: 199980,
            actualDps: 38705.85,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4444, 4444, 4444],
                timings: [51, 90, 130]
            },
            "omni-strike": {
                standing_range: 300,
                omni_range: [-900, 300]
            }
          }
        }]
    }
  ]
} as const;

export default e27002Data;

