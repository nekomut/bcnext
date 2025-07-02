// Stage 1188 Data
import type { StageData } from '../../app/stage/types';

export const e1188Data: StageData = {
  eventId: 1188,
  eventName: "ことよろにゃ！(ΦωΦ)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 188,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "初日の出！",
      baseHp: 2019,
      width: 4000,
      enemyLimit: 16,
      requiredCost: 31,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "2019",
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
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "2019",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "2019",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "439",
          enemyName: "ちびイノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 120,
            ap: 8,
            dps: 21.82,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 210,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 120,
            actualAp: 8,
            actualDps: 21.82,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "439",
          enemyName: "ちびイノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 120,
            ap: 8,
            dps: 21.82,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 210,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 120,
            actualAp: 8,
            actualDps: 21.82,
            magnification: "100%",
            count: "8",
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
          enemyId: "439",
          enemyName: "ちびイノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 120,
            ap: 8,
            dps: 21.82,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 210,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 120,
            actualAp: 8,
            actualDps: 21.82,
            magnification: "100%",
            count: "8",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "439",
          enemyName: "ちびイノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 120,
            ap: 8,
            dps: 21.82,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 210,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 120,
            actualAp: 8,
            actualDps: 21.82,
            magnification: "100%",
            count: "8",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
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
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
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

export default e1188Data;

