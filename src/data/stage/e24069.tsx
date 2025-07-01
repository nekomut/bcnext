// Stage 24069 Data
import type { StageData } from '../../app/stage/types';

export const e24069Data: StageData = {
  eventId: 24069,
  eventName: "ことよろにゃ強襲！(ΦωΦ)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 69,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "巳年 Lv.1",
      baseHp: 2025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 30,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "巳年 Lv.2",
      baseHp: 22025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 40,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "巳年 Lv.3",
      baseHp: 52025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 50,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "巳年 Lv.4",
      baseHp: 92025,
      width: 4000,
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
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "巳年 Lv.5",
      baseHp: 162025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "巳年 Lv.6",
      baseHp: 272025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 80,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 6,
      stageName: "巳年 Lv.7",
      baseHp: 402025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 7,
      stageName: "巳年 Lv.8",
      baseHp: 552025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 100,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 8,
      stageName: "巳年 Lv.9",
      baseHp: 752025,
      width: 4000,
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
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 9,
      stageName: "巳年 Lv.MAX",
      baseHp: 1002025,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 120,
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
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "711",
          enemyName: "巳わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e24069Data;

