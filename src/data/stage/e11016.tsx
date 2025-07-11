// Stage 11016 Data
import type { StageData } from '../../app/stage/types';

export const e11016Data: StageData = {
  eventId: 11016,
  eventName: "ランキングの間（みくみく歌謡祭）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 16,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "みくみく歌謡祭",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 30,
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
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 4500,
            actualDps: 7500.0,
            magnification: "300%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "2780000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 9600,
            actualDps: 18000.0,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "2780000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 26000,
            actualDps: 6093.76,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "2780000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 60000,
            actualDps: 7894.74,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "2780000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 9600,
            actualDps: 18000.0,
            magnification: "300%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "2005000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "2005000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 41250,
            actualDps: 19038.47,
            magnification: "275%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1525000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 8250,
            actualAp: 4125,
            actualDps: 6875.0,
            magnification: "275%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "1525000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 24375,
            actualDps: 5712.9,
            magnification: "375%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1525000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 495000,
            actualAp: 22000,
            actualDps: 3000.0,
            magnification: "275%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1525000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 3750,
            actualDps: 6250.0,
            magnification: "250%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "1080000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 8000,
            actualDps: 15000.0,
            magnification: "250%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "1080000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 22750,
            actualDps: 5332.04,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1080000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 50000,
            actualDps: 6578.95,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1080000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 162000,
            actualAp: 7200,
            actualDps: 13500.0,
            magnification: "225%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "755000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "755000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 30000,
            actualDps: 13846.16,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "525000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 3000,
            actualDps: 5000.0,
            magnification: "200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "525000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 19500,
            actualDps: 4570.32,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "525000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 16000,
            actualDps: 2181.82,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "525000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 2625,
            actualDps: 4375.0,
            magnification: "175%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "360000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 5600,
            actualDps: 10500.0,
            magnification: "175%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "360000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 17875,
            actualDps: 4189.46,
            magnification: "275%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "360000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 262500,
            actualAp: 35000,
            actualDps: 4605.27,
            magnification: "175%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "360000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 4800,
            actualDps: 9000.0,
            magnification: "150%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "255000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "255000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 18750,
            actualDps: 8653.85,
            magnification: "125%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "165000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 1875,
            actualDps: 3125.0,
            magnification: "125%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "165000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 14625,
            actualDps: 3427.74,
            magnification: "225%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "165000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 10000,
            actualDps: 1363.64,
            magnification: "125%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "165000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "110000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "110000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 13000,
            actualDps: 3046.88,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "110000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 20000,
            actualDps: 2631.58,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "110000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 2400,
            actualDps: 4500.0,
            magnification: "75%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "95000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "95000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 7500,
            actualDps: 3461.54,
            magnification: "50%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "55000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 750,
            actualDps: 1250.0,
            magnification: "50%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "55000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6500,
            actualDps: 1523.44,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "55000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 4000,
            actualDps: 545.46,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "55000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 960,
            actualDps: 1800.0,
            magnification: "30%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "16000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 6000,
            actualDps: 789.47,
            magnification: "30%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "16000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "505",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 2250,
            actualDps: 1038.46,
            magnification: "15%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "7000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 225,
            actualDps: 375.0,
            magnification: "15%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "7000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 975,
            actualDps: 228.52,
            magnification: "15%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "7000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1440,
            actualAp: 64,
            actualDps: 120.0,
            magnification: "2%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "2%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "2%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 15,
            actualDps: 25.0,
            magnification: "1%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 15,
            actualDps: 25.0,
            magnification: "1%",
            count: "0",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11016Data;

