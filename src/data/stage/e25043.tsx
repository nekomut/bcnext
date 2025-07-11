// Stage 25043 Data
import type { StageData } from '../../app/stage/types';

export const e25043Data: StageData = {
  eventId: 25043,
  eventName: "聖なる本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 43,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "043-00",
      baseHp: 450000,
      width: 4400,
      enemyLimit: 8,
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
          treasureId: "30111",
          treasureName: "ユニット20111への進化権",
          probability: "8",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30112",
          treasureName: "ユニット20112への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30116",
          treasureName: "ユニット20116への進化権",
          probability: "8",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30117",
          treasureName: "ユニット20117への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30121",
          treasureName: "ユニット20121への進化権",
          probability: "8",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30122",
          treasureName: "ユニット20122への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30036",
          treasureName: "ユニット20036への進化権",
          probability: "4",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30037",
          treasureName: "ユニット20037への進化権",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30041",
          treasureName: "ユニット20041への進化権",
          probability: "4",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30042",
          treasureName: "ユニット20042への進化権",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
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
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 363000,
            actualAp: 2247,
            actualDps: 4494.0,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "56.7-60.0s",
            delayFrames: "1,700-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 147000,
            actualAp: 8350,
            actualDps: 15657.18,
            magnification: "150%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 147000,
            actualAp: 8350,
            actualDps: 15657.18,
            magnification: "150%",
            count: "2",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e25043Data;

