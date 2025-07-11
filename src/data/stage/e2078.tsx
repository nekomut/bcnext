// Stage 2078 Data
import type { StageData } from '../../app/stage/types';

export const e2078Data: StageData = {
  eventId: 2078,
  eventName: "城ドラ VS 城ドラ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 78,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 115, 130],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "侵略の騎士団 初級",
      baseHp: 8000,
      width: 4200,
      enemyLimit: 15,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 115, 130],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "214",
          enemyName: "剣士",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 720,
            actualAp: 36,
            actualDps: 24.54,
            magnification: "40%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 90,
            actualDps: 69.23,
            magnification: "40%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 720,
            actualAp: 36,
            actualDps: 24.54,
            magnification: "40%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 399,
            actualDps: 217.96,
            magnification: "40%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "侵略の騎士団 上級",
      baseHp: 20000,
      width: 5600,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 115, 130],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "50000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "214",
          enemyName: "剣士",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 90,
            actualDps: 61.36,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 225,
            actualDps: 173.08,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 1000,
            actualDps: 666.67,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-23.3s",
            delayFrames: "700-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2250,
            actualDps: 1088.71,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "侵略の騎士団 鬼級",
      baseHp: 150000,
      width: 3600,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 115, 130],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "100000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2250,
            actualDps: 1088.71,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 2700,
            actualDps: 698.27,
            magnification: "60%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2250,
            actualDps: 1088.71,
            magnification: "100%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "侵略の騎士団 神級",
      baseHp: 150000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 115, 130],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "150000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "214",
          enemyName: "剣士",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 270,
            actualDps: 184.08,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 675,
            actualDps: 519.24,
            magnification: "300%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 270,
            actualDps: 184.08,
            magnification: "300%",
            count: "10",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 675,
            actualDps: 519.24,
            magnification: "300%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 3999,
            actualDps: 2552.55,
            magnification: "150%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "221",
          enemyName: "ゴーレム",
          traits: ["無"],
          baseStats: {
            hp: 225000,
            ap: 10000,
            dps: 821.92,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 5000,
            actualDps: 410.96,
            magnification: "50%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 270,
            actualDps: 184.08,
            magnification: "300%",
            count: "5",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 675,
            actualDps: 519.24,
            magnification: "300%",
            count: "3",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3375,
            actualDps: 1633.07,
            magnification: "150%",
            count: "2",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "侵略の騎士団 竜神級",
      baseHp: 250000,
      width: 4800,
      enemyLimit: 10,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 115, 130],
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "300000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 3325,
            actualDps: 859.91,
            magnification: "70%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 360,
            actualDps: 245.46,
            magnification: "300%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 2222,
            actualDps: 1212.0,
            magnification: "200%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 19500,
            actualAp: 765,
            actualDps: 588.45,
            magnification: "300%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2400,
            actualDps: 1600.0,
            magnification: "200%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 360,
            actualDps: 245.46,
            magnification: "300%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 7777,
            actualDps: 639.26,
            magnification: "70%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 3333,
            actualDps: 2127.45,
            magnification: "100%",
            count: "2",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2078Data;

