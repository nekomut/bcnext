// Stage 1286 Data
import type { StageData } from '../../app/stage/types';

export const e1286Data: StageData = {
  eventId: 1286,
  eventName: "お年玉襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 286,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "待ちに待ったお年玉",
      baseHp: 1500,
      width: 3600,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "10000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "5000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 9.93,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 9.93,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50,
            actualAp: 5,
            actualDps: 0.99,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "今日だけは愛想よく",
      baseHp: 30000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "50000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "25000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-11.7s",
            delayFrames: "300-350f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "親に預けて消えたお金",
      baseHp: 60000,
      width: 3200,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "100000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "50000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 2,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "金額の差で兄弟喧嘩",
      baseHp: 90000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "200000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "100000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 397.2,
            magnification: "4000%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 198.68,
            magnification: "400%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 397.2,
            magnification: "4000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 198.68,
            magnification: "400%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 198.68,
            magnification: "400%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 397.2,
            magnification: "4000%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "年々上がる金額",
      baseHp: 120000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "275000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "137500",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 3750,
            actualDps: 745.03,
            magnification: "150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 595.8,
            magnification: "6000%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 298.02,
            magnification: "600%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 595.8,
            magnification: "6000%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 298.02,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 3750,
            actualDps: 745.03,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "あげる負担、子知らず",
      baseHp: 180000,
      width: 6000,
      enemyLimit: 12,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "350000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "175000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "2",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "0",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "やたらと達筆な祖父母",
      baseHp: 240000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "425000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "212500",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "45.3s",
            spawnTimeFrames: "1,360f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "46.3s",
            spawnTimeFrames: "1,390f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "75%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "75%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "75%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 5,
            actualAp: 0,
            actualDps: 0.1,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "来年はもらえません",
      baseHp: 360000,
      width: 4800,
      enemyLimit: 20,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "500000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "250000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1191.6,
            magnification: "12000%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3000,
            actualDps: 596.04,
            magnification: "1200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 7500,
            actualDps: 1490.07,
            magnification: "300%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 7500,
            actualDps: 1490.07,
            magnification: "300%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3000,
            actualDps: 596.04,
            magnification: "1200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.3-11.7s",
            delayFrames: "250-350f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1191.6,
            magnification: "12000%",
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 9.93,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    }
  ]
} as const;

export default e1286Data;

