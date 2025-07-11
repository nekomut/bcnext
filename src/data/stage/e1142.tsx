// Stage 1142 Data
import type { StageData } from '../../app/stage/types';

export const e1142Data: StageData = {
  eventId: 1142,
  eventName: "じめじめなめなめ大進撃！(旧)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 142,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "雨天決行大レース！",
      baseHp: 3000,
      width: 5000,
      enemyLimit: 1,
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
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "ビニール傘争奪カップ",
      baseHp: 20000,
      width: 4200,
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
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
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
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
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
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 500,
            actualDps: 326.09,
            magnification: "40%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "雨ときどき雨ステークス",
      baseHp: 50000,
      width: 4000,
      enemyLimit: 10,
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
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 750,
            actualDps: 401.79,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1250,
            actualDps: 815.22,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 3300,
            actualDps: 1500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 750,
            actualDps: 401.79,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1250,
            actualDps: 815.22,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "スケスケパラダイス杯",
      baseHp: 200000,
      width: 4000,
      enemyLimit: 10,
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
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 2250,
            actualDps: 1205.37,
            magnification: "300%",
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
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
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
          enemyId: "343",
          enemyName: "なめ（天使）",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 8000,
            actualDps: 563.38,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "なめなめスタリオン記念",
      baseHp: 400000,
      width: 4600,
      enemyLimit: 10,
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
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "10",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "90",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 1200,
            actualAp: 120,
            actualDps: 120.0,
            magnification: "600%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
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
            actualHp: 480,
            actualAp: 180,
            actualDps: 337.5,
            magnification: "600%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
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
          enemyId: "343",
          enemyName: "なめ（天使）",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
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
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
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
          enemyId: "341",
          enemyName: "なめ（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
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
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
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
          enemyId: "342",
          enemyName: "なめ（黒）",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
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
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1142Data;

