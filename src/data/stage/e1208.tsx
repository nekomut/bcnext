// Stage 1208 Data
import type { StageData } from '../../app/stage/types';

export const e1208Data: StageData = {
  eventId: 1208,
  eventName: "大乱闘狂乱ファミリーズ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 208,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "狂喜乱舞 極ムズ",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 9,
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
          enemyId: "075",
          enemyName: "狂乱のネコ",
          traits: ["無"],
          baseStats: {
            hp: 2400000,
            ap: 7880,
            dps: 13133.33,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1980,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 7880,
            actualDps: 13133.33,
            magnification: "100%",
            count: "1",
            spawnTime: "41.7s",
            spawnTimeFrames: "1,250f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "076",
          enemyName: "狂乱のタンクネコ",
          traits: ["無"],
          baseStats: {
            hp: 3200000,
            ap: 30240,
            dps: 13540.3,
            speed: 2,
            range: 390,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2370,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 3200000,
            actualAp: 30240,
            actualDps: 13540.3,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "077",
          enemyName: "狂乱のバトルネコ",
          traits: ["無"],
          baseStats: {
            hp: 2200000,
            ap: 4200,
            dps: 7875.0,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 4200,
            actualDps: 7875.0,
            magnification: "100%",
            count: "1",
            spawnTime: "65.0s",
            spawnTimeFrames: "1,950f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
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
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
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
          enemyId: "080",
          enemyName: "狂乱のネコノトリ",
          traits: ["浮"],
          baseStats: {
            hp: 1180000,
            ap: 12000,
            dps: 2130.18,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 10,
            backswing: 4,
            tba: 80
          },
          stageStats: {
            actualHp: 1180000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "100%",
            count: "1",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "25.0s",
            spawnTimeFrames: "750f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "082",
          enemyName: "狂乱のネコトカゲ",
          traits: ["無"],
          baseStats: {
            hp: 600000,
            ap: 1300,
            dps: 795.92,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 15,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 1300,
            actualDps: 795.92,
            magnification: "100%",
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
          enemyId: "083",
          enemyName: "狂乱の巨神ネコ",
          traits: ["無"],
          baseStats: {
            hp: 2560000,
            ap: 17000,
            dps: 6296.3,
            speed: 4,
            range: 320,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2125,
            freq: 81,
            foreswing: 47,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2560000,
            actualAp: 17000,
            actualDps: 6296.3,
            magnification: "100%",
            count: "1",
            spawnTime: "95.0s",
            spawnTimeFrames: "2,850f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "狂喜乱舞 超極ムズ",
      baseHp: 1500000,
      width: 5000,
      enemyLimit: 9,
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
          enemyId: "075",
          enemyName: "狂乱のネコ",
          traits: ["無"],
          baseStats: {
            hp: 2400000,
            ap: 7880,
            dps: 13133.33,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1980,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 7880,
            actualDps: 13133.33,
            magnification: "100%",
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
          enemyId: "076",
          enemyName: "狂乱のタンクネコ",
          traits: ["無"],
          baseStats: {
            hp: 3200000,
            ap: 30240,
            dps: 13540.3,
            speed: 2,
            range: 390,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2370,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 3200000,
            actualAp: 30240,
            actualDps: 13540.3,
            magnification: "100%",
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
          enemyId: "077",
          enemyName: "狂乱のバトルネコ",
          traits: ["無"],
          baseStats: {
            hp: 2200000,
            ap: 4200,
            dps: 7875.0,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 4200,
            actualDps: 7875.0,
            magnification: "100%",
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
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
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
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
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
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
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
          enemyId: "080",
          enemyName: "狂乱のネコノトリ",
          traits: ["浮"],
          baseStats: {
            hp: 1180000,
            ap: 12000,
            dps: 2130.18,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 10,
            backswing: 4,
            tba: 80
          },
          stageStats: {
            actualHp: 1180000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "100%",
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
            magnification: "100%",
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
          enemyId: "082",
          enemyName: "狂乱のネコトカゲ",
          traits: ["無"],
          baseStats: {
            hp: 600000,
            ap: 1300,
            dps: 795.92,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 15,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 1300,
            actualDps: 795.92,
            magnification: "100%",
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
          enemyId: "083",
          enemyName: "狂乱の巨神ネコ",
          traits: ["無"],
          baseStats: {
            hp: 2560000,
            ap: 17000,
            dps: 6296.3,
            speed: 4,
            range: 320,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2125,
            freq: 81,
            foreswing: 47,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2560000,
            actualAp: 17000,
            actualDps: 6296.3,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
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

export default e1208Data;

