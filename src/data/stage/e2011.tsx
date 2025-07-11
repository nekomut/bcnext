// Stage 2011 Data
import type { StageData } from '../../app/stage/types';

export const e2011Data: StageData = {
  eventId: 2011,
  eventName: "生きろ！マンボウ！(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 11,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "イカ食べ過ぎ",
      baseHp: 4000,
      width: 4000,
      enemyLimit: 12,
      requiredCost: 30,
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
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "15000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "5000",
          amount: "3",
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "5",
            spawnTime: "3.0s",
            spawnTimeFrames: "90f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
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
            actualHp: 120,
            actualAp: 30,
            actualDps: 15.25,
            magnification: "100%",
            count: "5",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
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
            actualHp: 120,
            actualAp: 30,
            actualDps: 15.25,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "33.3-50.0s",
            delayFrames: "1,000-1,500f",
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
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
            actualHp: 120,
            actualAp: 30,
            actualDps: 15.25,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
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
            actualHp: 1,
            actualAp: 360,
            actualDps: 108.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
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
            actualHp: 120,
            actualAp: 30,
            actualDps: 15.25,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "80%",
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
            actualHp: 1,
            actualAp: 360,
            actualDps: 108.0,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "80%",
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "70%",
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
            actualHp: 120,
            actualAp: 30,
            actualDps: 15.25,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "70%",
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
            actualHp: 1,
            actualAp: 360,
            actualDps: 108.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "70%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "朝日が強すぎて",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 15,
      requiredCost: 60,
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
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "150000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "50000",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "0",
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
            actualHp: 180,
            actualAp: 36,
            actualDps: 21.6,
            magnification: "200%",
            count: "10",
            spawnTime: "3.0s",
            spawnTimeFrames: "90f",
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
            actualHp: 240,
            actualAp: 60,
            actualDps: 30.5,
            magnification: "200%",
            count: "10",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            actualHp: 2,
            actualAp: 720,
            actualDps: 216.0,
            magnification: "200%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
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
            actualHp: 180,
            actualAp: 36,
            actualDps: 21.6,
            magnification: "200%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            actualHp: 240,
            actualAp: 60,
            actualDps: 30.5,
            magnification: "200%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            actualHp: 2,
            actualAp: 720,
            actualDps: 216.0,
            magnification: "200%",
            count: "0",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 2500,
            actualAp: 250,
            actualDps: 163.04,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-66.7s",
            delayFrames: "1,600-2,000f",
            baseHpRatio: "99%",
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
            actualHp: 2,
            actualAp: 720,
            actualDps: 216.0,
            magnification: "200%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "90%",
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
            actualHp: 2500,
            actualAp: 250,
            actualDps: 163.04,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "151",
          enemyName: "マンボ王",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 3000,
            actualDps: 428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "寿命を迎える",
      baseHp: 240000,
      width: 4000,
      enemyLimit: 30,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8800",
          treasureName: "キャラクタードロップ(8800)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "250000",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1",
          amount: "11",
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
            actualHp: 240000,
            actualAp: 5555,
            actualDps: 465.5,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 652.16,
            magnification: "400%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
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
            actualHp: 720,
            actualAp: 144,
            actualDps: 86.4,
            magnification: "800%",
            count: "0",
            spawnTime: "15.0s",
            spawnTimeFrames: "450f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
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
            actualHp: 960,
            actualAp: 240,
            actualDps: 122.0,
            magnification: "800%",
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "14.0-20.0s",
            delayFrames: "420-600f",
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
            actualHp: 8,
            actualAp: 2880,
            actualDps: 864.0,
            magnification: "800%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 8,
            actualAp: 2880,
            actualDps: 864.0,
            magnification: "800%",
            count: "10",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 8,
            actualAp: 2880,
            actualDps: 864.0,
            magnification: "800%",
            count: "10",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 8,
            actualAp: 2880,
            actualDps: 864.0,
            magnification: "800%",
            count: "10",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 8,
            actualAp: 2880,
            actualDps: 864.0,
            magnification: "800%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
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
            actualHp: 8,
            actualAp: 2880,
            actualDps: 864.0,
            magnification: "800%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2011Data;

