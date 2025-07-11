// Stage 2089 Data
import type { StageData } from '../../app/stage/types';

export const e2089Data: StageData = {
  eventId: 2089,
  eventName: "３億匹の仲間はみな死んだ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 89,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 200, 300, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "兄弟全滅",
      baseHp: 3000,
      width: 4500,
      enemyLimit: 3,
      requiredCost: 80,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "10000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "50000",
          amount: "3",
          times: "-1",
          limitText: "-1"
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
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 55,
            actualDps: 4.66,
            magnification: "1%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "魚生ハードモード",
      baseHp: 30000,
      width: 6000,
      enemyLimit: 50,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "75000",
          amount: "2",
          times: "-1",
          limitText: "-1"
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
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 360,
            actualAp: 72,
            actualDps: 43.2,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "4.3s",
            spawnTimeFrames: "130f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "5.7s",
            spawnTimeFrames: "170f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "7.3s",
            spawnTimeFrames: "220f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "9.3s",
            spawnTimeFrames: "280f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "1.3-2.0s",
            delayFrames: "40-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "いわしの骨",
      baseHp: 90000,
      width: 3000,
      enemyLimit: 30,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "50000",
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
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "100000",
          amount: "4",
          times: "-1",
          limitText: "-1"
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
          enemyId: "150",
          enemyName: "工房マンボウ",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 360,
            dps: 108.0,
            speed: 5,
            range: 350,
            rangeType: "単体",
            kbLevel: 1,
            money: 30,
            freq: 100,
            foreswing: 11,
            backswing: 80,
            tba: 45
          },
          stageStats: {
            actualHp: 6,
            actualAp: 2160,
            actualDps: 648.0,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 720,
            actualAp: 180,
            actualDps: 91.5,
            magnification: "600%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "18.3-20.0s",
            delayFrames: "550-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "0",
            spawnTime: "22.0s",
            spawnTimeFrames: "660f",
            delay: "18.3-20.0s",
            delayFrames: "550-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "0",
            spawnTime: "25.0s",
            spawnTimeFrames: "750f",
            delay: "18.3-20.0s",
            delayFrames: "550-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "150",
          enemyName: "工房マンボウ",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 360,
            dps: 108.0,
            speed: 5,
            range: 350,
            rangeType: "単体",
            kbLevel: 1,
            money: 30,
            freq: 100,
            foreswing: 11,
            backswing: 80,
            tba: 45
          },
          stageStats: {
            actualHp: 6,
            actualAp: 2160,
            actualDps: 648.0,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 720,
            actualAp: 180,
            actualDps: 91.5,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.3-10.0s",
            delayFrames: "250-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 720,
            actualAp: 180,
            actualDps: 91.5,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-8.3s",
            delayFrames: "200-250f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 2499,
            actualDps: 209.47,
            magnification: "45%",
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
      stageName: "突然の死",
      baseHp: 160000,
      width: 4000,
      enemyLimit: 30,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "100000",
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
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "150000",
          amount: "5",
          times: "-1",
          limitText: "-1"
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
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "25.0-30.0s",
            delayFrames: "750-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.3-11.7s",
            delayFrames: "250-350f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "9",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "13",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 250,
            actualAp: 25,
            actualDps: 16.3,
            magnification: "10%",
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
      stageId: 4,
      stageName: "天国に一番近い生き物",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 40,
      requiredCost: 200,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "150000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "250000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 8332,
            actualDps: 698.25,
            magnification: "150%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 8332,
            actualDps: 698.25,
            magnification: "150%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "17.7s",
            spawnTimeFrames: "530f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "19.0s",
            spawnTimeFrames: "570f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "20.7s",
            spawnTimeFrames: "620f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "22.7s",
            spawnTimeFrames: "680f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "36.0s",
            spawnTimeFrames: "1,080f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "37.3s",
            spawnTimeFrames: "1,120f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "39.3s",
            spawnTimeFrames: "1,180f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "52.7s",
            spawnTimeFrames: "1,580f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "53.7s",
            spawnTimeFrames: "1,610f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "55.0s",
            spawnTimeFrames: "1,650f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "58.7s",
            spawnTimeFrames: "1,760f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "61.0s",
            spawnTimeFrames: "1,830f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "63.7s",
            spawnTimeFrames: "1,910f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 1350,
            actualAp: 270,
            actualDps: 162.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 1350,
            actualAp: 270,
            actualDps: 162.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 1350,
            actualAp: 270,
            actualDps: 162.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 2445.6,
            magnification: "1500%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2089Data;

