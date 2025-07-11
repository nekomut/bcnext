// Stage 1127 Data
import type { StageData } from '../../app/stage/types';

export const e1127Data: StageData = {
  eventId: 1127,
  eventName: "２２２ ～猫の日～(旧)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 127,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 130, 150],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "蘇る野生の血",
      baseHp: 3000,
      width: 5000,
      enemyLimit: 2,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 130, 150],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 100,
            actualDps: 3.99,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 20
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
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 120,
            actualDps: 97.3,
            magnification: "50%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "血に染まった爪",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 130, 150],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 79.8,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 20
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
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "77.3s",
            spawnTimeFrames: "2,320f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "78.0s",
            spawnTimeFrames: "2,340f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "222事件",
      baseHp: 600000,
      width: 3000,
      enemyLimit: 40,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 130, 150],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 20000,
            actualDps: 798.0,
            magnification: "20000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 20
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
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "120.0-120.0s",
            delayFrames: "3,600-3,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "45",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.3-2.0s",
            delayFrames: "40-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "30",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1127Data;

