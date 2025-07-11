// Stage 11027 Data
import type { StageData } from '../../app/stage/types';

export const e11027Data: StageData = {
  eventId: 11027,
  eventName: "ランキングの間（明治剣客浪漫大会）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 27,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "明治剣客浪漫大会",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 12,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "283",
          enemyName: "ダミー",
          traits: [],
          baseStats: {
            hp: 100,
            ap: 999999,
            dps: 49261.03,
            speed: 0,
            range: 300,
            rangeType: "範囲",
            kbLevel: 0,
            money: 0,
            freq: 609,
            foreswing: 10,
            backswing: 27,
            tba: 300
          },
          stageStats: {
            actualHp: 100,
            actualAp: 999999,
            actualDps: 49261.03,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "0%",
            isBoss: true
          },
          abilities: {
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
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 18738,
            actualDps: 35133.72,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "3000000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 26400,
            actualDps: 21405.36,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "3000000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 1320000,
            actualAp: 48000,
            actualDps: 10992.36,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3000000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 21000,
            actualDps: 2592.6,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3000000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 85800,
            actualAp: 5280,
            actualDps: 6600.0,
            magnification: "6600%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2850000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 33000,
            actualAp: 3300,
            actualDps: 2414.94,
            magnification: "6600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2850000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 36000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2850000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 36000,
            actualDps: 8181.84,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2850000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 220000,
            actualAp: 17176,
            actualDps: 32205.91,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2700000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 49500,
            actualAp: 24200,
            actualDps: 19621.58,
            magnification: "1100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2700000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 1210000,
            actualAp: 44000,
            actualDps: 10076.33,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2700000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 825000,
            actualAp: 19250,
            actualDps: 2376.55,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2700000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 78000,
            actualAp: 4800,
            actualDps: 6000.0,
            magnification: "6000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2550000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 2195.4,
            magnification: "6000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2550000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 1100000,
            actualAp: 33000,
            actualDps: 5156.25,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2550000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 495000,
            actualAp: 33000,
            actualDps: 7500.02,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2550000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 15615,
            actualDps: 29278.1,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2400000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 22000,
            actualDps: 17837.8,
            magnification: "1000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2400000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 1100000,
            actualAp: 40000,
            actualDps: 9160.3,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2400000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 17500,
            actualDps: 2160.5,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2400000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 70200,
            actualAp: 4320,
            actualDps: 5400.0,
            magnification: "5400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2250000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 2700,
            actualDps: 1975.86,
            magnification: "5400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2250000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 30000,
            actualDps: 4687.5,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2250000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 30000,
            actualDps: 6818.2,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2250000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 14053,
            actualDps: 26350.29,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2100000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 40500,
            actualAp: 19800,
            actualDps: 16054.02,
            magnification: "900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2100000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 36000,
            actualDps: 8244.27,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2100000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 15750,
            actualDps: 1944.45,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2100000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 62400,
            actualAp: 3840,
            actualDps: 4800.0,
            magnification: "4800%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1950000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 2400,
            actualDps: 1756.32,
            magnification: "4800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1950000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 27000,
            actualDps: 4218.75,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1950000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 405000,
            actualAp: 27000,
            actualDps: 6136.38,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1950000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 12492,
            actualDps: 23422.48,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 17600,
            actualDps: 14270.24,
            magnification: "800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 880000,
            actualAp: 32000,
            actualDps: 7328.24,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 14000,
            actualDps: 1728.4,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1800000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 54600,
            actualAp: 3360,
            actualDps: 4200.0,
            magnification: "4200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1650000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 2100,
            actualDps: 1536.78,
            magnification: "4200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1650000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 24000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1650000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 24000,
            actualDps: 5454.56,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1650000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 10930,
            actualDps: 20494.67,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 31500,
            actualAp: 15400,
            actualDps: 12486.46,
            magnification: "700%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 770000,
            actualAp: 28000,
            actualDps: 6412.21,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 12250,
            actualDps: 1512.35,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 46800,
            actualAp: 2880,
            actualDps: 3600.0,
            magnification: "3600%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1800,
            actualDps: 1317.24,
            magnification: "3600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 21000,
            actualDps: 3281.25,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 21000,
            actualDps: 4772.74,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1350000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 660000,
            actualAp: 24000,
            actualDps: 5496.18,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 10500,
            actualDps: 1296.3,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 39000,
            actualAp: 2400,
            actualDps: 3000.0,
            magnification: "3000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 1097.7,
            magnification: "3000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 18000,
            actualDps: 2812.5,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 18000,
            actualDps: 4090.92,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 22500,
            actualAp: 11000,
            actualDps: 8918.9,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 550000,
            actualAp: 20000,
            actualDps: 4580.15,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 8750,
            actualDps: 1080.25,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "900000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 31200,
            actualAp: 1920,
            actualDps: 2400.0,
            magnification: "2400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 878.16,
            magnification: "2400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 15000,
            actualDps: 2343.75,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 15000,
            actualDps: 3409.1,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 16000,
            actualDps: 3664.12,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 7000,
            actualDps: 864.2,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 23400,
            actualAp: 1440,
            actualDps: 1800.0,
            magnification: "1800%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 900,
            actualDps: 658.62,
            magnification: "1800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 12000,
            actualDps: 2727.28,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "450000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 330000,
            actualAp: 12000,
            actualDps: 2748.09,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "300000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 5250,
            actualDps: 648.15,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "300000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 6000,
            actualDps: 1363.64,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "75000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 165000,
            actualAp: 6000,
            actualDps: 1374.05,
            magnification: "75%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "75000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 2200,
            actualDps: 1783.78,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "30000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 3500,
            actualDps: 432.1,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "30000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "10000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2400,
            actualDps: 375.0,
            magnification: "40%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "10000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 73.18,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 900,
            actualDps: 204.55,
            magnification: "15%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1000%",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "0%",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "0%",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11027Data;

