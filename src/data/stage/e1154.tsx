// Stage 1154 Data
import type { StageData } from '../../app/stage/types';

export const e1154Data: StageData = {
  eventId: 1154,
  eventName: "秋色シルバーウィーク",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 154,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "二位だっていいじゃない",
      baseHp: 4000,
      width: 4000,
      enemyLimit: 8,
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
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "001",
          enemyName: "にょろ",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "28.7-28.7s",
            delayFrames: "860-860f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "28.7-28.7s",
            delayFrames: "860-860f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "90%",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.7-2.7s",
            delayFrames: "80-80f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
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
      stageId: 1,
      stageName: "結婚25周年",
      baseHp: 80000,
      width: 4500,
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
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.0-8.0s",
            delayFrames: "180-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "359",
          enemyName: "はぐれケモルル",
          traits: ["メ"],
          baseStats: {
            hp: 2400,
            ap: 2400,
            dps: 947.37,
            speed: 24,
            range: 300,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 2400,
            actualDps: 947.37,
            magnification: "100%",
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
      stageId: 2,
      stageName: "はるかな道",
      baseHp: 250000,
      width: 3200,
      enemyLimit: 7,
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
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "40",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
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
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "054",
          enemyName: "超メタルカバちゃん",
          traits: ["メ"],
          baseStats: {
            hp: 8000,
            ap: 3000,
            dps: 1914.89,
            speed: 18,
            range: 170,
            rangeType: "範囲",
            kbLevel: 16,
            money: 999,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 3000,
            actualDps: 1914.89,
            magnification: "100%",
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
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "3",
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
          enemyId: "359",
          enemyName: "はぐれケモルル",
          traits: ["メ"],
          baseStats: {
            hp: 2400,
            ap: 2400,
            dps: 947.37,
            speed: 24,
            range: 300,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 4800,
            actualAp: 4800,
            actualDps: 1894.74,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
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
            count: "3",
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
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "3",
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
          enemyId: "358",
          enemyName: "メタルにょろ",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 5,
            actualAp: 30,
            actualDps: 31.03,
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
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1154Data;

