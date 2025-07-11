// Stage 1221 Data
import type { StageData } from '../../app/stage/types';

export const e1221Data: StageData = {
  eventId: 1221,
  eventName: "ことよろにゃ！(ΦωΦ)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 221,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "初日の出！",
      baseHp: 2020,
      width: 4000,
      enemyLimit: 16,
      requiredCost: 2,
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
          probability: "20",
          amount: "2020",
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
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "2020",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "494",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "4.7-9.3s",
            delayFrames: "140-280f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e1221Data;

