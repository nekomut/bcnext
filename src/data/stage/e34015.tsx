// Stage 34015 Data
import type { StageData } from '../../app/stage/types';

export const e34015Data: StageData = {
  eventId: 34015,
  eventName: "豪華客船ハイパニック",
  typeId: 34,
  typeName: "レジェンドストーリー0",
  prefix: "ND",
  mapId: 15,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "素性不明な一日船長",
      baseHp: 2500000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 180,
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
          treasureId: "3",
          treasureName: "ニャンピュータ",
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "9",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "9",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "3",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "4",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "4",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "4",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "2",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "密室スイート客室",
      baseHp: 1400000,
      width: 4200,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 45000,
            actualAp: 5400,
            actualDps: 3446.82,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 56250,
            actualDps: 41158.5,
            magnification: "1500%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "178",
          enemyName: "エリザベス56世",
          traits: ["エ"],
          baseStats: {
            hp: 60000,
            ap: 250,
            dps: 131.58,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 57,
            foreswing: 12,
            backswing: 10,
            tba: 23
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 6000,
            actualDps: 3157.92,
            magnification: "2400%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "93.3-100.0s",
            delayFrames: "2,800-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 56250,
            actualDps: 41158.5,
            magnification: "1500%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 4000,
            dps: 2105.26,
            speed: 3,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 57,
            foreswing: 28,
            backswing: 5,
            tba: 15
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 16000,
            actualDps: 8421.04,
            magnification: "400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            },
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "178",
          enemyName: "エリザベス56世",
          traits: ["エ"],
          baseStats: {
            hp: 60000,
            ap: 250,
            dps: 131.58,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 57,
            foreswing: 12,
            backswing: 10,
            tba: 23
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 6000,
            actualDps: 3157.92,
            magnification: "2400%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "698",
          enemyName: "ダ・チョー老",
          traits: ["ゾ"],
          baseStats: {
            hp: 1600000,
            ap: 23000,
            dps: 40588.24,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 23000,
            actualDps: 40588.24,
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
            "revive": {
                times: -1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            },
            "toxic": {
                chance: 20,
                damage: 20
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "求婚前夜の凪",
      baseHp: 1200000,
      width: 4200,
      enemyLimit: 20,
      requiredCost: 250,
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
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "412",
          enemyName: "イングリッス",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "680",
          enemyName: "天使メガミエル",
          traits: ["天"],
          baseStats: {
            hp: 650000,
            ap: 5500,
            dps: 1269.23,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 130,
            foreswing: 11,
            backswing: 9,
            tba: 60
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 5500,
            actualDps: 1269.23,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 420,
                ld_range: [420, 770]
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "615",
          enemyName: "大天使チビネル",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 9000,
            actualDps: 1698.12,
            magnification: "200%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "680",
          enemyName: "天使メガミエル",
          traits: ["天"],
          baseStats: {
            hp: 650000,
            ap: 5500,
            dps: 1269.23,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 130,
            foreswing: 11,
            backswing: 9,
            tba: 60
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 5500,
            actualDps: 1269.23,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 420,
                ld_range: [420, 770]
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "424",
          enemyName: "オールドリー",
          traits: ["古"],
          baseStats: {
            hp: 1360000,
            ap: 9000,
            dps: 15882.35,
            speed: 32,
            range: 310,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1360000,
            actualAp: 9000,
            actualDps: 15882.35,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "423",
          enemyName: "古我王",
          traits: ["浮", "古"],
          baseStats: {
            hp: 1111111,
            ap: 6000,
            dps: 4390.24,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 41,
            foreswing: 24,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1111111,
            actualAp: 6000,
            actualDps: 4390.24,
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
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "オートマチック危機回避",
      baseHp: 1500000,
      width: 3800,
      enemyLimit: 20,
      requiredCost: 220,
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
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
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
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "044",
          enemyName: "ダディ",
          traits: ["無"],
          baseStats: {
            hp: 800000,
            ap: 5500,
            dps: 3928.57,
            speed: 3,
            range: 172,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 11000,
            actualDps: 7857.14,
            magnification: "200%",
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
          enemyId: "679",
          enemyName: "名賢わんこ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "513",
          enemyName: "天使ドーヴエル",
          traits: ["天"],
          baseStats: {
            hp: 1800000,
            ap: 23000,
            dps: 16428.57,
            speed: 8,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 23000,
            actualDps: 16428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "surge": {
                chance: 33,
                distance_start: 150,
                distance_end: 350,
                level: 3
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "5",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "682",
          enemyName: "ドヴェルダーク",
          traits: ["黒"],
          baseStats: {
            hp: 2000000,
            ap: 13000,
            dps: 8297.87,
            speed: 12,
            range: 200,
            rangeType: "範囲",
            kbLevel: 6,
            money: 2000,
            freq: 47,
            foreswing: 30,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 13000,
            actualDps: 8297.87,
            magnification: "100%",
            count: "1",
            spawnTime: "143.3s",
            spawnTimeFrames: "4,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-250, 350]
            },
            "mini-wave": {
                chance: 33,
                level: 3
            },
            "weaken": {
                chance: 100,
                power: 60,
                duration_f: 25,
                duration_s: 0.83
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "176",
          enemyName: "破壊生物クオリネン",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 135.48,
            speed: 3,
            range: 760,
            rangeType: "範囲",
            kbLevel: 8,
            money: 5000,
            freq: 310,
            foreswing: 71,
            backswing: 74,
            tba: 120
          },
          stageStats: {
            actualHp: 1920000,
            actualAp: 22400,
            actualDps: 2167.68,
            magnification: "1600%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 20,
                power: 300,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "隊列乱すパイレーツ",
      baseHp: 1800000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 180,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "309",
          enemyName: "ヒツギイヌ",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 650,
            dps: 291.04,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 2600,
            actualDps: 1164.16,
            magnification: "400%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 60,
                duration_s: 2.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "692",
          enemyName: "ドクターK.O.",
          traits: ["赤"],
          baseStats: {
            hp: 380000,
            ap: 18600,
            dps: 29368.42,
            speed: 28,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 650,
            freq: 19,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 18600,
            actualDps: 29368.42,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "63.3-63.3s",
            delayFrames: "1,900-1,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 500, 5100],
                timings: [2, 4, 8]
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "694",
          enemyName: "テク・ノロ爺",
          traits: ["エ"],
          baseStats: {
            hp: 850000,
            ap: 12022,
            dps: 6011.0,
            speed: 9,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1505,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12022,
            actualDps: 6011.0,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 390,
                omni_range: [-300, 390]
            },
            "immune-curse": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            },
            "warp": {
                chance: 100,
                distance: 1200,
                duration_f: 500,
                duration_s: 16.67
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "692",
          enemyName: "ドクターK.O.",
          traits: ["赤"],
          baseStats: {
            hp: 380000,
            ap: 18600,
            dps: 29368.42,
            speed: 28,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 650,
            freq: 19,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 18600,
            actualDps: 29368.42,
            magnification: "100%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "63.3-63.3s",
            delayFrames: "1,900-1,900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 500, 5100],
                timings: [2, 4, 8]
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "694",
          enemyName: "テク・ノロ爺",
          traits: ["エ"],
          baseStats: {
            hp: 850000,
            ap: 12022,
            dps: 6011.0,
            speed: 9,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1505,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12022,
            actualDps: 6011.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 390,
                omni_range: [-300, 390]
            },
            "immune-curse": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            },
            "warp": {
                chance: 100,
                distance: 1200,
                duration_f: 500,
                duration_s: 16.67
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "698",
          enemyName: "ダ・チョー老",
          traits: ["ゾ"],
          baseStats: {
            hp: 1600000,
            ap: 23000,
            dps: 40588.24,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 23000,
            actualDps: 40588.24,
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
            "revive": {
                times: -1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            },
            "toxic": {
                chance: 20,
                damage: 20
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "ノープロブレム帰港",
      baseHp: 2000000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 230,
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
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "knockback": {
                chance: 50
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "60.0-66.7s",
            delayFrames: "1,800-2,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "knockback": {
                chance: 50
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "558",
          enemyName: "アックマ閣下",
          traits: ["悪"],
          baseStats: {
            hp: 75000,
            ap: 15000,
            dps: 6521.74,
            speed: 8,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 69,
            foreswing: 6,
            backswing: 10,
            tba: 32
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 30000,
            actualDps: 13043.48,
            magnification: "200%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 250000
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 1050,
                level: 1
            }
          }
        },
        {
          enemyId: "232",
          enemyName: "断罪天使クオリネル",
          traits: ["天"],
          baseStats: {
            hp: 2400000,
            ap: 32000,
            dps: 6620.69,
            speed: 4,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5000,
            freq: 145,
            foreswing: 71,
            backswing: 74,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 32000,
            actualDps: 6620.69,
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
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 1200]
            },
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    }
  ]
} as const;

export default e34015Data;

