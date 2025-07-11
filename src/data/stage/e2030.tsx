// Stage 2030 Data
import type { StageData } from '../../app/stage/types';

export const e2030Data: StageData = {
  eventId: 2030,
  eventName: "ふてたネコあらわる",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 30,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ふてすぎたネコ",
      baseHp: 2000,
      width: 4000,
      enemyLimit: 5,
      requiredCost: 20,
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
          treasureId: "1133",
          treasureName: "ふてニャン(281)",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "269",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 700,
            ap: 130,
            dps: 33.62,
            speed: 6,
            range: 135,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 116,
            foreswing: 27,
            backswing: 39,
            tba: 45
          },
          stageStats: {
            actualHp: 700,
            actualAp: 130,
            actualDps: 33.62,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
            count: "15",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            count: "15",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "さらにふてるネコ",
      baseHp: 2500,
      width: 3500,
      enemyLimit: 7,
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
          treasureId: "1133",
          treasureName: "ふてニャン(281)",
          probability: "50",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "269",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 700,
            ap: 130,
            dps: 33.62,
            speed: 6,
            range: 135,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 116,
            foreswing: 27,
            backswing: 39,
            tba: 45
          },
          stageStats: {
            actualHp: 700,
            actualAp: 130,
            actualDps: 33.62,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "269",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 700,
            ap: 130,
            dps: 33.62,
            speed: 6,
            range: 135,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 116,
            foreswing: 27,
            backswing: 39,
            tba: 45
          },
          stageStats: {
            actualHp: 700,
            actualAp: 130,
            actualDps: 33.62,
            magnification: "100%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
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
            count: "15",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "18.7-23.3s",
            delayFrames: "560-700f",
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
            count: "15",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "18.7-23.3s",
            delayFrames: "560-700f",
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
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: true
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
            count: "15",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2030Data;

