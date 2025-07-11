// Stage 1058 Data
import type { StageData } from '../../app/stage/types';

export const e1058Data: StageData = {
  eventId: 1058,
  eventName: "開眼のスカート襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 58,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "スカート進化への道 超上級",
      baseHp: 770000,
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
          treasureId: "10024",
          treasureName: "ねこななふんへの進化権(ネコスカートの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
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
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
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
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "70%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "スカート進化への道 超激ムズ",
      baseHp: 1770000,
      width: 4600,
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
          treasureId: "10024",
          treasureName: "ねこななふんへの進化権(ネコスカートの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
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
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
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
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "70%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.7s",
            delayFrames: "60-200f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1058Data;

