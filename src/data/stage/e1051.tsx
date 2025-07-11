// Stage 1051 Data
import type { StageData } from '../../app/stage/types';

export const e1051Data: StageData = {
  eventId: 1051,
  eventName: "開眼のパンツ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
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
      stageName: "パンツ進化への道 激ムズ",
      baseHp: 500000,
      width: 4400,
      enemyLimit: 12,
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
          treasureId: "10016",
          treasureName: "ネコぺろきゃんへの進化権(ネコパンツの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
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
            actualHp: 720,
            actualAp: 64,
            actualDps: 40.88,
            magnification: "800%",
            count: "0",
            spawnTime: "3.0s",
            spawnTimeFrames: "90f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
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
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 800,
            actualDps: 358.24,
            magnification: "800%",
            count: "0",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "4",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "80.0-100.0s",
            delayFrames: "2,400-3,000f",
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
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
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
            actualHp: 55000,
            actualAp: 1800,
            actualDps: 2000.0,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "46.7-60.0s",
            delayFrames: "1,400-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 777,
            actualDps: 932.4,
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
      stageId: 1,
      stageName: "パンツ進化への道  超激ムズ",
      baseHp: 750000,
      width: 4800,
      enemyLimit: 12,
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
          treasureId: "10016",
          treasureName: "ネコぺろきゃんへの進化権(ネコパンツの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
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
            actualHp: 1080,
            actualAp: 96,
            actualDps: 61.32,
            magnification: "1200%",
            count: "0",
            spawnTime: "3.0s",
            spawnTimeFrames: "90f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
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
            actualHp: 2400,
            actualAp: 240,
            actualDps: 240.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
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
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1051Data;

