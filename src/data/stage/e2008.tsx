// Stage 2008 Data
import type { StageData } from '../../app/stage/types';

export const e2008Data: StageData = {
  eventId: 2008,
  eventName: "対決！メルクストーリア",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 8,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 150, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "にゃんこなのですよ",
      baseHp: 10000,
      width: 4200,
      enemyLimit: 5,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "1",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "15000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "10000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-66.7s",
            delayFrames: "1,600-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.3s",
            delayFrames: "100-160f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "090",
          enemyName: "オルガ",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 240,
            dps: 80.9,
            speed: 10,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 89,
            foreswing: 20,
            backswing: 25,
            tba: 35
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 240,
            actualDps: 80.9,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "癒術士の旅立ち",
      baseHp: 30000,
      width: 3600,
      enemyLimit: 5,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "2",
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "20000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "10000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "1.3-4.0s",
            delayFrames: "40-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "090",
          enemyName: "オルガ",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 240,
            dps: 80.9,
            speed: 10,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 89,
            foreswing: 20,
            backswing: 25,
            tba: 35
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 240,
            actualDps: 80.9,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "091",
          enemyName: "ノルン",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3200,
            actualAp: 430,
            actualDps: 314.63,
            magnification: "100%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "091",
          enemyName: "ノルン",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3200,
            actualAp: 430,
            actualDps: 314.63,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 3800,
            actualAp: 780,
            actualDps: 175.94,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "モンスター恐怖症",
      baseHp: 60000,
      width: 5200,
      enemyLimit: 6,
      requiredCost: 75,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "3",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "20000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "15000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-16.7s",
            delayFrames: "100-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 9200,
            actualAp: 600,
            actualDps: 367.35,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 3800,
            actualAp: 780,
            actualDps: 175.94,
            magnification: "100%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.0-6.7s",
            delayFrames: "90-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "5",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 9200,
            actualAp: 600,
            actualDps: 367.35,
            magnification: "100%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "094",
          enemyName: "フウ",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1942,
            actualDps: 924.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "謎のびん詰め美少女",
      baseHp: 80000,
      width: 5000,
      enemyLimit: 7,
      requiredCost: 85,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "4",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "25000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "15000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-13.3s",
            delayFrames: "90-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 9200,
            actualAp: 600,
            actualDps: 367.35,
            magnification: "100%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-13.3s",
            delayFrames: "100-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "094",
          enemyName: "フウ",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1942,
            actualDps: 924.76,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "090",
          enemyName: "オルガ",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 240,
            dps: 80.9,
            speed: 10,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 89,
            foreswing: 20,
            backswing: 25,
            tba: 35
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 720,
            actualDps: 242.7,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-16.7s",
            delayFrames: "100-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "090",
          enemyName: "オルガ",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 240,
            dps: 80.9,
            speed: 10,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 89,
            foreswing: 20,
            backswing: 25,
            tba: 35
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 720,
            actualDps: 242.7,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "091",
          enemyName: "ノルン",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 6400,
            actualAp: 860,
            actualDps: 629.26,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "095",
          enemyName: "アウラ",
          traits: ["無"],
          baseStats: {
            hp: 77000,
            ap: 3555,
            dps: 960.81,
            speed: 3,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 46,
            backswing: 65,
            tba: 30
          },
          stageStats: {
            actualHp: 77000,
            actualAp: 3555,
            actualDps: 960.81,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-20.0s",
            delayFrames: "2-600f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "ネコどもの鎮圧",
      baseHp: 110000,
      width: 4600,
      enemyLimit: 7,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "30000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "20000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "091",
          enemyName: "ノルン",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 9600,
            actualAp: 1290,
            actualDps: 943.89,
            magnification: "300%",
            count: "0",
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
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 1950,
            actualAp: 450,
            actualDps: 201.48,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "090",
          enemyName: "オルガ",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 240,
            dps: 80.9,
            speed: 10,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 89,
            foreswing: 20,
            backswing: 25,
            tba: 35
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 720,
            actualDps: 242.7,
            magnification: "300%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2123,
            actualDps: 1010.95,
            magnification: "100%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 7600,
            actualAp: 1560,
            actualDps: 351.88,
            magnification: "200%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 7600,
            actualAp: 1560,
            actualDps: 351.88,
            magnification: "200%",
            count: "0",
            spawnTime: "41.3s",
            spawnTimeFrames: "1,240f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 7600,
            actualAp: 1560,
            actualDps: 351.88,
            magnification: "200%",
            count: "0",
            spawnTime: "42.7s",
            spawnTimeFrames: "1,280f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2123,
            actualDps: 1010.95,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "095",
          enemyName: "アウラ",
          traits: ["無"],
          baseStats: {
            hp: 77000,
            ap: 3555,
            dps: 960.81,
            speed: 3,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 46,
            backswing: 65,
            tba: 30
          },
          stageStats: {
            actualHp: 77000,
            actualAp: 3555,
            actualDps: 960.81,
            magnification: "100%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "095",
          enemyName: "アウラ",
          traits: ["無"],
          baseStats: {
            hp: 77000,
            ap: 3555,
            dps: 960.81,
            speed: 3,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 46,
            backswing: 65,
            tba: 30
          },
          stageStats: {
            actualHp: 77000,
            actualAp: 3555,
            actualDps: 960.81,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "失われた記憶",
      baseHp: 180000,
      width: 3700,
      enemyLimit: 6,
      requiredCost: 105,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "6",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "35000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "25000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 200,
            actualDps: 105.28,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "089",
          enemyName: "ノノ",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 2600,
            actualAp: 600,
            actualDps: 268.64,
            magnification: "400%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 15200,
            actualAp: 3120,
            actualDps: 703.76,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 36800,
            actualAp: 2400,
            actualDps: 1469.4,
            magnification: "400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 36800,
            actualAp: 2400,
            actualDps: 1469.4,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "091",
          enemyName: "ノルン",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 12800,
            actualAp: 1720,
            actualDps: 1258.52,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "098",
          enemyName: "癒術士",
          traits: ["無"],
          baseStats: {
            hp: 299999,
            ap: 3250,
            dps: 2119.57,
            speed: 23,
            range: 310,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 46,
            foreswing: 20,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 299999,
            actualAp: 3250,
            actualDps: 2119.57,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "愛で紡ぐキズナ",
      baseHp: 250000,
      width: 5600,
      enemyLimit: 5,
      requiredCost: 115,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "7",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "40000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "25000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "094",
          enemyName: "フウ",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1942,
            actualDps: 924.76,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 200,
            actualDps: 105.28,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4246,
            actualDps: 2021.9,
            magnification: "200%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "091",
          enemyName: "ノルン",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 12800,
            actualAp: 1720,
            actualDps: 1258.52,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 27600,
            actualAp: 1800,
            actualDps: 1102.05,
            magnification: "300%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 27600,
            actualAp: 1800,
            actualDps: 1102.05,
            magnification: "300%",
            count: "0",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "097",
          enemyName: "ワイバーン",
          traits: ["浮"],
          baseStats: {
            hp: 380000,
            ap: 6555,
            dps: 525.8,
            speed: 5,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 374,
            foreswing: 55,
            backswing: 66,
            tba: 160
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 6555,
            actualDps: 525.8,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4246,
            actualDps: 2021.9,
            magnification: "200%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "ひとふり300ヤード",
      baseHp: 400000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 125,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "30000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "095",
          enemyName: "アウラ",
          traits: ["無"],
          baseStats: {
            hp: 77000,
            ap: 3555,
            dps: 960.81,
            speed: 3,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 46,
            backswing: 65,
            tba: 30
          },
          stageStats: {
            actualHp: 77000,
            actualAp: 3555,
            actualDps: 960.81,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 15200,
            actualAp: 3120,
            actualDps: 703.76,
            magnification: "400%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 15200,
            actualAp: 3120,
            actualDps: 703.76,
            magnification: "400%",
            count: "1",
            spawnTime: "34.7s",
            spawnTimeFrames: "1,040f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 27600,
            actualAp: 1800,
            actualDps: 1102.05,
            magnification: "300%",
            count: "0",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 27600,
            actualAp: 1800,
            actualDps: 1102.05,
            magnification: "300%",
            count: "1",
            spawnTime: "47.3s",
            spawnTimeFrames: "1,420f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "098",
          enemyName: "癒術士",
          traits: ["無"],
          baseStats: {
            hp: 299999,
            ap: 3250,
            dps: 2119.57,
            speed: 23,
            range: 310,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 46,
            foreswing: 20,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 299999,
            actualAp: 3250,
            actualDps: 2119.57,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "097",
          enemyName: "ワイバーン",
          traits: ["浮"],
          baseStats: {
            hp: 380000,
            ap: 6555,
            dps: 525.8,
            speed: 5,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 374,
            foreswing: 55,
            backswing: 66,
            tba: 160
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 6555,
            actualDps: 525.8,
            magnification: "100%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2008Data;

