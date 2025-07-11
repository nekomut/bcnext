// Stage 24051 Data
import type { StageData } from '../../app/stage/types';

export const e24051Data: StageData = {
  eventId: 24051,
  eventName: "続・5月強襲！",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 51,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "アゲイン Lv.11",
      baseHp: 275000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 27000,
            actualDps: 28928.58,
            magnification: "200%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 27000,
            actualDps: 28928.58,
            magnification: "200%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 137500,
            actualAp: 4500,
            actualDps: 5000.0,
            magnification: "250%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 7848,
            actualDps: 1259.04,
            magnification: "1200%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageName: "アゲイン Lv.12",
      baseHp: 300000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 33280,
            actualAp: 3968,
            actualDps: 2903.42,
            magnification: "256%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 27810,
            actualDps: 29796.44,
            magnification: "206%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 33280,
            actualAp: 3968,
            actualDps: 2903.42,
            magnification: "256%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 33280,
            actualAp: 3968,
            actualDps: 2903.42,
            magnification: "256%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 33280,
            actualAp: 3968,
            actualDps: 2903.42,
            magnification: "256%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 27810,
            actualDps: 29796.44,
            magnification: "206%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 140800,
            actualAp: 4608,
            actualDps: 5120.0,
            magnification: "256%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 60440,
            actualAp: 9881,
            actualDps: 1585.34,
            magnification: "1511%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageName: "アゲイン Lv.13",
      baseHp: 325000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34060,
            actualAp: 4061,
            actualDps: 2971.47,
            magnification: "262%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 31,
            actualAp: 28620,
            actualDps: 30664.29,
            magnification: "212%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34060,
            actualAp: 4061,
            actualDps: 2971.47,
            magnification: "262%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34060,
            actualAp: 4061,
            actualDps: 2971.47,
            magnification: "262%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34060,
            actualAp: 4061,
            actualDps: 2971.47,
            magnification: "262%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 31,
            actualAp: 28620,
            actualDps: 30664.29,
            magnification: "212%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 144100,
            actualAp: 4716,
            actualDps: 5240.0,
            magnification: "262%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 72880,
            actualAp: 11915,
            actualDps: 1911.64,
            magnification: "1822%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageName: "アゲイン Lv.14",
      baseHp: 350000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34840,
            actualAp: 4154,
            actualDps: 3039.52,
            magnification: "268%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 32,
            actualAp: 29430,
            actualDps: 31532.15,
            magnification: "218%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34840,
            actualAp: 4154,
            actualDps: 3039.52,
            magnification: "268%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34840,
            actualAp: 4154,
            actualDps: 3039.52,
            magnification: "268%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 34840,
            actualAp: 4154,
            actualDps: 3039.52,
            magnification: "268%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 32,
            actualAp: 29430,
            actualDps: 31532.15,
            magnification: "218%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 147400,
            actualAp: 4824,
            actualDps: 5360.0,
            magnification: "268%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 85320,
            actualAp: 13949,
            actualDps: 2237.94,
            magnification: "2133%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageName: "アゲイン Lv.15",
      baseHp: 375000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "157",
          treasureName: "プラチナチケットの欠片",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 35620,
            actualAp: 4247,
            actualDps: 3107.57,
            magnification: "274%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 33,
            actualAp: 30240,
            actualDps: 32400.01,
            magnification: "224%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 35620,
            actualAp: 4247,
            actualDps: 3107.57,
            magnification: "274%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 35620,
            actualAp: 4247,
            actualDps: 3107.57,
            magnification: "274%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 35620,
            actualAp: 4247,
            actualDps: 3107.57,
            magnification: "274%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 33,
            actualAp: 30240,
            actualDps: 32400.01,
            magnification: "224%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 150700,
            actualAp: 4932,
            actualDps: 5480.0,
            magnification: "274%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 97760,
            actualAp: 15983,
            actualDps: 2564.24,
            magnification: "2444%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageId: 5,
      stageName: "アゲイン Lv.16",
      baseHp: 400000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 36400,
            actualAp: 4340,
            actualDps: 3175.62,
            magnification: "280%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 34,
            actualAp: 31050,
            actualDps: 33267.87,
            magnification: "230%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 36400,
            actualAp: 4340,
            actualDps: 3175.62,
            magnification: "280%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 36400,
            actualAp: 4340,
            actualDps: 3175.62,
            magnification: "280%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 36400,
            actualAp: 4340,
            actualDps: 3175.62,
            magnification: "280%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 34,
            actualAp: 31050,
            actualDps: 33267.87,
            magnification: "230%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 154000,
            actualAp: 5040,
            actualDps: 5600.0,
            magnification: "280%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 110200,
            actualAp: 18017,
            actualDps: 2890.55,
            magnification: "2755%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageId: 6,
      stageName: "アゲイン Lv.17",
      baseHp: 425000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37180,
            actualAp: 4433,
            actualDps: 3243.67,
            magnification: "286%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 35,
            actualAp: 31860,
            actualDps: 34135.72,
            magnification: "236%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37180,
            actualAp: 4433,
            actualDps: 3243.67,
            magnification: "286%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37180,
            actualAp: 4433,
            actualDps: 3243.67,
            magnification: "286%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37180,
            actualAp: 4433,
            actualDps: 3243.67,
            magnification: "286%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 35,
            actualAp: 31860,
            actualDps: 34135.72,
            magnification: "236%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 157300,
            actualAp: 5148,
            actualDps: 5720.0,
            magnification: "286%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 122640,
            actualAp: 20051,
            actualDps: 3216.85,
            magnification: "3066%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageId: 7,
      stageName: "アゲイン Lv.18",
      baseHp: 450000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "57",
          treasureName: "ネコビタンC",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37960,
            actualAp: 4526,
            actualDps: 3311.72,
            magnification: "292%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36,
            actualAp: 32670,
            actualDps: 35003.58,
            magnification: "242%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37960,
            actualAp: 4526,
            actualDps: 3311.72,
            magnification: "292%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37960,
            actualAp: 4526,
            actualDps: 3311.72,
            magnification: "292%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 37960,
            actualAp: 4526,
            actualDps: 3311.72,
            magnification: "292%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36,
            actualAp: 32670,
            actualDps: 35003.58,
            magnification: "242%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 160600,
            actualAp: 5256,
            actualDps: 5840.0,
            magnification: "292%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 135080,
            actualAp: 22085,
            actualDps: 3543.15,
            magnification: "3377%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageId: 8,
      stageName: "アゲイン Lv.19",
      baseHp: 480000,
      width: 4800,
      enemyLimit: 50,
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
          treasureId: "160",
          treasureName: "悪マタタビの種",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 38740,
            actualAp: 4619,
            actualDps: 3379.77,
            magnification: "298%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37,
            actualAp: 33480,
            actualDps: 35871.44,
            magnification: "248%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 38740,
            actualAp: 4619,
            actualDps: 3379.77,
            magnification: "298%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 38740,
            actualAp: 4619,
            actualDps: 3379.77,
            magnification: "298%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 38740,
            actualAp: 4619,
            actualDps: 3379.77,
            magnification: "298%",
            count: "0",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37,
            actualAp: 33480,
            actualDps: 35871.44,
            magnification: "248%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 163900,
            actualAp: 5364,
            actualDps: 5960.0,
            magnification: "298%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 147520,
            actualAp: 24119,
            actualDps: 3869.45,
            magnification: "3688%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
      stageId: 9,
      stageName: "アゲイン Lv.MAX",
      baseHp: 500000,
      width: 4800,
      enemyLimit: 50,
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
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37,
            actualAp: 33750,
            actualDps: 36160.72,
            magnification: "250%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "25.3-28.7s",
            delayFrames: "760-860f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "8.7-15.3s",
            delayFrames: "260-460f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37,
            actualAp: 33750,
            actualDps: 36160.72,
            magnification: "250%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 165000,
            actualAp: 5400,
            actualDps: 6000.0,
            magnification: "300%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 26160,
            actualDps: 4196.8,
            magnification: "4000%",
            count: "1",
            spawnTime: "90.7s",
            spawnTimeFrames: "2,720f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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

export default e24051Data;

