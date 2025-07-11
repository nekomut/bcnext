// Stage 1190 Data
import type { StageData } from '../../app/stage/types';

export const e1190Data: StageData = {
  eventId: 1190,
  eventName: "極ムズカーニバル3！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 190,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "暴風カーニバル3 極ムズ",
      baseHp: 900000,
      width: 5800,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "294",
          enemyName: "アンデッドサイクロン",
          traits: ["ゾ"],
          baseStats: {
            hp: 1222222,
            ap: 44444,
            dps: 266664.0,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1222222,
            actualAp: 44444,
            actualDps: 266664.0,
            magnification: "100%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "377",
          enemyName: "スーパースペースサイクロン",
          traits: ["エ"],
          baseStats: {
            hp: 666666,
            ap: 555,
            dps: 3330.0,
            speed: 6,
            range: 275,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3333,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 666666,
            actualAp: 555,
            actualDps: 3330.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 1,
                duration_s: 0.03
            }
          }
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3600,
            actualDps: 2297.88,
            magnification: "200%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 14000,
            actualAp: 1000,
            actualDps: 810.82,
            magnification: "200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "開眼カーニバル3 極ムズ",
      baseHp: 900000,
      width: 4500,
      enemyLimit: 20,
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
          enemyId: "127",
          enemyName: "ネコマッチョ",
          traits: ["浮"],
          baseStats: {
            hp: 1200000,
            ap: 5500,
            dps: 10312.5,
            speed: 24,
            range: 275,
            rangeType: "範囲",
            kbLevel: 8,
            money: 8888,
            freq: 16,
            foreswing: 7,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 5500,
            actualDps: 10312.5,
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
          enemyId: "136",
          enemyName: "ネコボーン",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 18000,
            dps: 17419.35,
            speed: 4,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 31,
            foreswing: 16,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 18000,
            actualDps: 17419.35,
            magnification: "100%",
            count: "10",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "134",
          enemyName: "イチリンリン",
          traits: ["無"],
          baseStats: {
            hp: 288000,
            ap: 5800,
            dps: 3702.13,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1200,
            freq: 47,
            foreswing: 16,
            backswing: 31,
            tba: 4
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 5800,
            actualDps: 3702.13,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "137",
          enemyName: "ネコパティシエ",
          traits: ["無"],
          baseStats: {
            hp: 1400000,
            ap: 7200,
            dps: 9000.0,
            speed: 6,
            range: 235,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1900,
            freq: 24,
            foreswing: 18,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1400000,
            actualAp: 7200,
            actualDps: 9000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 60,
                duration_s: 2.0
            }
          }
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
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1190Data;

