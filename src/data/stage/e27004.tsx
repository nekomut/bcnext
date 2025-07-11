// Stage 27004 Data
import type { StageData } from '../../app/stage/types';

export const e27004Data: StageData = {
  eventId: 27004,
  eventName: "強襲のメルクストーリア",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 4,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "癒術士と仲間たち Lv.1",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 1500,
            actualAp: 300,
            actualDps: 157.92,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 3900,
            actualAp: 900,
            actualDps: 402.96,
            magnification: "600%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 9600,
            actualAp: 960,
            actualDps: 323.6,
            magnification: "400%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            count: "4",
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
            actualHp: 190000,
            actualAp: 3277,
            actualDps: 262.9,
            magnification: "50%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "癒術士と仲間たち Lv.2",
      baseHp: 300000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "35",
          treasureName: "紫マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
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
            actualHp: 2250,
            actualAp: 450,
            actualDps: 236.88,
            magnification: "900%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 5850,
            actualAp: 1350,
            actualDps: 604.44,
            magnification: "900%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 14400,
            actualAp: 1440,
            actualDps: 485.4,
            magnification: "600%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 19200,
            actualAp: 2580,
            actualDps: 1887.78,
            magnification: "600%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 22800,
            actualAp: 4680,
            actualDps: 1055.64,
            magnification: "600%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 134750,
            actualAp: 6221,
            actualDps: 1681.42,
            magnification: "175%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 70000,
            actualAp: 3715,
            actualDps: 1769.16,
            magnification: "175%",
            count: "4",
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
            actualHp: 285000,
            actualAp: 4916,
            actualDps: 394.35,
            magnification: "75%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 524998,
            actualAp: 5687,
            actualDps: 3709.25,
            magnification: "175%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "癒術士と仲間たち Lv.3",
      baseHp: 350000,
      width: 5000,
      enemyLimit: 12,
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
          amount: "500000",
          times: "-3",
          limitText: "-3"
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
            actualHp: 3000,
            actualAp: 600,
            actualDps: 315.84,
            magnification: "1200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 7800,
            actualAp: 1800,
            actualDps: 805.92,
            magnification: "1200%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 19200,
            actualAp: 1920,
            actualDps: 647.2,
            magnification: "800%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 25600,
            actualAp: 3440,
            actualDps: 2517.04,
            magnification: "800%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 30400,
            actualAp: 6240,
            actualDps: 1407.52,
            magnification: "800%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 192500,
            actualAp: 8887,
            actualDps: 2402.03,
            magnification: "250%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 100000,
            actualAp: 5307,
            actualDps: 2527.38,
            magnification: "250%",
            count: "4",
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 749997,
            actualAp: 8125,
            actualDps: 5298.93,
            magnification: "250%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "癒術士と仲間たち Lv.4",
      baseHp: 400000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 3750,
            actualAp: 750,
            actualDps: 394.8,
            magnification: "1500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 9750,
            actualAp: 2250,
            actualDps: 1007.4,
            magnification: "1500%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 24000,
            actualAp: 2400,
            actualDps: 809.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 32000,
            actualAp: 4300,
            actualDps: 3146.3,
            magnification: "1000%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 38000,
            actualAp: 7800,
            actualDps: 1759.4,
            magnification: "1000%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 250250,
            actualAp: 11553,
            actualDps: 3122.63,
            magnification: "325%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 130000,
            actualAp: 6899,
            actualDps: 3285.59,
            magnification: "325%",
            count: "4",
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
            actualHp: 475000,
            actualAp: 8193,
            actualDps: 657.25,
            magnification: "125%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 974996,
            actualAp: 10562,
            actualDps: 6888.6,
            magnification: "325%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "癒術士と仲間たち Lv.5",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
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
            actualHp: 4500,
            actualAp: 900,
            actualDps: 473.76,
            magnification: "1800%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 11700,
            actualAp: 2700,
            actualDps: 1208.88,
            magnification: "1800%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 28800,
            actualAp: 2880,
            actualDps: 970.8,
            magnification: "1200%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 38400,
            actualAp: 5160,
            actualDps: 3775.56,
            magnification: "1200%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 45600,
            actualAp: 9360,
            actualDps: 2111.28,
            magnification: "1200%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 308000,
            actualAp: 14220,
            actualDps: 3843.24,
            magnification: "400%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
            count: "4",
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
            actualHp: 570000,
            actualAp: 9832,
            actualDps: 788.7,
            magnification: "150%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 1199996,
            actualAp: 13000,
            actualDps: 8478.28,
            magnification: "400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "癒術士と仲間たち Lv.6",
      baseHp: 500000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "36",
          treasureName: "赤マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
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
            actualHp: 5100,
            actualAp: 1020,
            actualDps: 536.93,
            magnification: "2040%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 13260,
            actualAp: 3060,
            actualDps: 1370.06,
            magnification: "2040%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 32640,
            actualAp: 3264,
            actualDps: 1100.24,
            magnification: "1360%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 43520,
            actualAp: 5848,
            actualDps: 4278.97,
            magnification: "1360%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 51680,
            actualAp: 10608,
            actualDps: 2392.78,
            magnification: "1360%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 369600,
            actualAp: 17064,
            actualDps: 4611.89,
            magnification: "480%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 192000,
            actualAp: 10190,
            actualDps: 4852.56,
            magnification: "480%",
            count: "4",
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
            actualHp: 608000,
            actualAp: 10488,
            actualDps: 841.28,
            magnification: "160%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 1439995,
            actualAp: 15600,
            actualDps: 10173.94,
            magnification: "480%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "癒術士と仲間たち Lv.7",
      baseHp: 550000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "750000",
          times: "-3",
          limitText: "-3"
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
            actualHp: 5700,
            actualAp: 1140,
            actualDps: 600.1,
            magnification: "2280%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 14820,
            actualAp: 3420,
            actualDps: 1531.25,
            magnification: "2280%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 36480,
            actualAp: 3648,
            actualDps: 1229.68,
            magnification: "1520%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 48640,
            actualAp: 6536,
            actualDps: 4782.38,
            magnification: "1520%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 57760,
            actualAp: 11856,
            actualDps: 2674.29,
            magnification: "1520%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 431200,
            actualAp: 19908,
            actualDps: 5380.54,
            magnification: "560%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 224000,
            actualAp: 11888,
            actualDps: 5661.32,
            magnification: "560%",
            count: "4",
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
            actualHp: 646000,
            actualAp: 11143,
            actualDps: 893.86,
            magnification: "170%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 1679994,
            actualAp: 18200,
            actualDps: 11869.59,
            magnification: "560%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "癒術士と仲間たち Lv.8",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
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
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 663.26,
            magnification: "2520%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 16380,
            actualAp: 3780,
            actualDps: 1692.43,
            magnification: "2520%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 40320,
            actualAp: 4032,
            actualDps: 1359.12,
            magnification: "1680%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 53760,
            actualAp: 7224,
            actualDps: 5285.78,
            magnification: "1680%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 63840,
            actualAp: 13104,
            actualDps: 2955.79,
            magnification: "1680%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 492800,
            actualAp: 22752,
            actualDps: 6149.18,
            magnification: "640%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 256000,
            actualAp: 13587,
            actualDps: 6470.08,
            magnification: "640%",
            count: "4",
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
            actualHp: 684000,
            actualAp: 11799,
            actualDps: 946.44,
            magnification: "180%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 1919993,
            actualAp: 20800,
            actualDps: 13565.25,
            magnification: "640%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "癒術士と仲間たち Lv.9",
      baseHp: 650000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 6900,
            actualAp: 1380,
            actualDps: 726.43,
            magnification: "2760%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 17940,
            actualAp: 4140,
            actualDps: 1853.62,
            magnification: "2760%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 44160,
            actualAp: 4416,
            actualDps: 1488.56,
            magnification: "1840%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 58880,
            actualAp: 7912,
            actualDps: 5789.19,
            magnification: "1840%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 69920,
            actualAp: 14352,
            actualDps: 3237.3,
            magnification: "1840%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 554400,
            actualAp: 25596,
            actualDps: 6917.83,
            magnification: "720%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 288000,
            actualAp: 15285,
            actualDps: 7278.84,
            magnification: "720%",
            count: "4",
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
            actualHp: 722000,
            actualAp: 12454,
            actualDps: 999.02,
            magnification: "190%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 2159992,
            actualAp: 23400,
            actualDps: 15260.9,
            magnification: "720%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "癒術士と仲間たち Lv.10",
      baseHp: 700000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
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
            actualHp: 7500,
            actualAp: 1500,
            actualDps: 789.6,
            magnification: "3000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 19500,
            actualAp: 4500,
            actualDps: 2014.8,
            magnification: "3000%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 48000,
            actualAp: 4800,
            actualDps: 1618.0,
            magnification: "2000%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
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
            actualHp: 64000,
            actualAp: 8600,
            actualDps: 6292.6,
            magnification: "2000%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 76000,
            actualAp: 15600,
            actualDps: 3518.8,
            magnification: "2000%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 616000,
            actualAp: 28440,
            actualDps: 7686.48,
            magnification: "800%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 320000,
            actualAp: 16984,
            actualDps: 8087.6,
            magnification: "800%",
            count: "4",
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
            actualHp: 760000,
            actualAp: 13110,
            actualDps: 1051.6,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
            actualHp: 2399992,
            actualAp: 26000,
            actualDps: 16956.56,
            magnification: "800%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 10,
      stageName: "癒術士と仲間たち Lv.11",
      baseHp: 750000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "37",
          treasureName: "青マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 92000,
            actualAp: 6000,
            actualDps: 3673.5,
            magnification: "1000%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 4500,
            actualDps: 2500.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 4000,
            actualDps: 1791.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 180000,
            actualAp: 11652,
            actualDps: 5548.56,
            magnification: "600%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 599994,
            actualAp: 5400,
            actualDps: 1065.78,
            magnification: "600%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 12000,
            actualDps: 1184.22,
            magnification: "600%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 22500,
            actualDps: 6683.18,
            magnification: "150%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 20000,
            actualDps: 5607.48,
            magnification: "250%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2459991,
            actualAp: 26650,
            actualDps: 17380.47,
            magnification: "820%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 11,
      stageName: "癒術士と仲間たち Lv.12",
      baseHp: 800000,
      width: 5000,
      enemyLimit: 10,
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
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 101200,
            actualAp: 6600,
            actualDps: 4040.85,
            magnification: "1100%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 4950,
            actualDps: 2750.0,
            magnification: "1100%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 52800,
            actualAp: 4400,
            actualDps: 1970.1,
            magnification: "1100%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 202500,
            actualAp: 13108,
            actualDps: 6242.13,
            magnification: "675%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 674993,
            actualAp: 6075,
            actualDps: 1199.0,
            magnification: "675%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 13500,
            actualDps: 1332.25,
            magnification: "675%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 733500,
            actualAp: 24450,
            actualDps: 7262.38,
            magnification: "163%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 860800,
            actualAp: 21520,
            actualDps: 6033.64,
            magnification: "269%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2519991,
            actualAp: 27300,
            actualDps: 17804.39,
            magnification: "840%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 12,
      stageName: "癒術士と仲間たち Lv.13",
      baseHp: 850000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 110400,
            actualAp: 7200,
            actualDps: 4408.2,
            magnification: "1200%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 5400,
            actualDps: 3000.0,
            magnification: "1200%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 57600,
            actualAp: 4800,
            actualDps: 2149.2,
            magnification: "1200%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 225000,
            actualAp: 14565,
            actualDps: 6935.7,
            magnification: "750%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 749992,
            actualAp: 6750,
            actualDps: 1332.22,
            magnification: "750%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 15000,
            actualDps: 1480.28,
            magnification: "750%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 792000,
            actualAp: 26400,
            actualDps: 7841.59,
            magnification: "176%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 921600,
            actualAp: 23040,
            actualDps: 6459.81,
            magnification: "288%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2579991,
            actualAp: 27950,
            actualDps: 18228.3,
            magnification: "860%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 13,
      stageName: "癒術士と仲間たち Lv.14",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "38",
          treasureName: "緑マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 119600,
            actualAp: 7800,
            actualDps: 4775.55,
            magnification: "1300%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 5850,
            actualDps: 3250.0,
            magnification: "1300%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 62400,
            actualAp: 5200,
            actualDps: 2328.3,
            magnification: "1300%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 247500,
            actualAp: 16021,
            actualDps: 7629.27,
            magnification: "825%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 824991,
            actualAp: 7425,
            actualDps: 1465.45,
            magnification: "825%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 330000,
            actualAp: 16500,
            actualDps: 1628.3,
            magnification: "825%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 850500,
            actualAp: 28350,
            actualDps: 8420.8,
            magnification: "189%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 982400,
            actualAp: 24560,
            actualDps: 6885.98,
            magnification: "307%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2639991,
            actualAp: 28600,
            actualDps: 18652.22,
            magnification: "880%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 14,
      stageName: "癒術士と仲間たち Lv.15",
      baseHp: 950000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "57",
          treasureName: "ネコビタンC",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 128800,
            actualAp: 8400,
            actualDps: 5142.9,
            magnification: "1400%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 6300,
            actualDps: 3500.0,
            magnification: "1400%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 67200,
            actualAp: 5600,
            actualDps: 2507.4,
            magnification: "1400%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 270000,
            actualAp: 17478,
            actualDps: 8322.84,
            magnification: "900%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 899991,
            actualAp: 8100,
            actualDps: 1598.67,
            magnification: "900%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 18000,
            actualDps: 1776.33,
            magnification: "900%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 30000,
            actualDps: 8910.9,
            magnification: "200%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 1040000,
            actualAp: 26000,
            actualDps: 7289.72,
            magnification: "325%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2699991,
            actualAp: 29250,
            actualDps: 19076.13,
            magnification: "900%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 15,
      stageName: "癒術士と仲間たち Lv.16",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 10,
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
            actualHp: 132480,
            actualAp: 8640,
            actualDps: 5289.84,
            magnification: "1440%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 6480,
            actualDps: 3600.0,
            magnification: "1440%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 69120,
            actualAp: 5760,
            actualDps: 2579.04,
            magnification: "1440%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 288000,
            actualAp: 18643,
            actualDps: 8877.7,
            magnification: "960%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 959990,
            actualAp: 8640,
            actualDps: 1705.25,
            magnification: "960%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 384000,
            actualAp: 19200,
            actualDps: 1894.75,
            magnification: "960%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 945000,
            actualAp: 31500,
            actualDps: 9356.44,
            magnification: "210%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 1088000,
            actualAp: 27200,
            actualDps: 7626.17,
            magnification: "340%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2759990,
            actualAp: 29900,
            actualDps: 19500.04,
            magnification: "920%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 16,
      stageName: "癒術士と仲間たち Lv.17",
      baseHp: 1050000,
      width: 5000,
      enemyLimit: 10,
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
            actualHp: 136160,
            actualAp: 8880,
            actualDps: 5436.78,
            magnification: "1480%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 74000,
            actualAp: 6660,
            actualDps: 3700.0,
            magnification: "1480%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 71040,
            actualAp: 5920,
            actualDps: 2650.68,
            magnification: "1480%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 306000,
            actualAp: 19808,
            actualDps: 9432.55,
            magnification: "1020%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 1019989,
            actualAp: 9180,
            actualDps: 1811.83,
            magnification: "1020%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 408000,
            actualAp: 20400,
            actualDps: 2013.17,
            magnification: "1020%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 33000,
            actualDps: 9801.99,
            magnification: "220%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 1136000,
            actualAp: 28400,
            actualDps: 7962.61,
            magnification: "355%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2819990,
            actualAp: 30550,
            actualDps: 19923.96,
            magnification: "940%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 17,
      stageName: "癒術士と仲間たち Lv.18",
      baseHp: 1100000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 139840,
            actualAp: 9120,
            actualDps: 5583.72,
            magnification: "1520%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 76000,
            actualAp: 6840,
            actualDps: 3800.0,
            magnification: "1520%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 72960,
            actualAp: 6080,
            actualDps: 2722.32,
            magnification: "1520%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 324000,
            actualAp: 20973,
            actualDps: 9987.41,
            magnification: "1080%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 1079989,
            actualAp: 9720,
            actualDps: 1918.4,
            magnification: "1080%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 432000,
            actualAp: 21600,
            actualDps: 2131.6,
            magnification: "1080%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 1035000,
            actualAp: 34500,
            actualDps: 10247.53,
            magnification: "230%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 1184000,
            actualAp: 29600,
            actualDps: 8299.06,
            magnification: "370%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2879990,
            actualAp: 31200,
            actualDps: 20347.87,
            magnification: "960%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 18,
      stageName: "癒術士と仲間たち Lv.19",
      baseHp: 1150000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "40",
          treasureName: "虹マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 143520,
            actualAp: 9360,
            actualDps: 5730.66,
            magnification: "1560%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 78000,
            actualAp: 7020,
            actualDps: 3900.0,
            magnification: "1560%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 74880,
            actualAp: 6240,
            actualDps: 2793.96,
            magnification: "1560%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 342000,
            actualAp: 22138,
            actualDps: 10542.26,
            magnification: "1140%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 1139988,
            actualAp: 10260,
            actualDps: 2024.98,
            magnification: "1140%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 456000,
            actualAp: 22800,
            actualDps: 2250.02,
            magnification: "1140%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 36000,
            actualDps: 10693.08,
            magnification: "240%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 1232000,
            actualAp: 30800,
            actualDps: 8635.51,
            magnification: "385%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2939990,
            actualAp: 31850,
            actualDps: 20771.79,
            magnification: "980%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 19,
      stageName: "癒術士と仲間たち Lv.20",
      baseHp: 1200000,
      width: 5000,
      enemyLimit: 10,
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
            actualHp: 147200,
            actualAp: 9600,
            actualDps: 5877.6,
            magnification: "1600%",
            count: "5",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 7200,
            actualDps: 4000.0,
            magnification: "1600%",
            count: "5",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 76800,
            actualAp: 6400,
            actualDps: 2865.6,
            magnification: "1600%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 360000,
            actualAp: 23304,
            actualDps: 11097.12,
            magnification: "1200%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 1199988,
            actualAp: 10800,
            actualDps: 2131.56,
            magnification: "1200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 24000,
            actualDps: 2368.44,
            magnification: "1200%",
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
          enemyId: "163",
          enemyName: "ハルシュト",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 1125000,
            actualAp: 37500,
            actualDps: 11138.62,
            magnification: "250%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 1280000,
            actualAp: 32000,
            actualDps: 8971.96,
            magnification: "400%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
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
            actualHp: 2999990,
            actualAp: 32500,
            actualDps: 21195.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
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

export default e27004Data;

