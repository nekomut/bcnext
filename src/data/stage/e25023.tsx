// Stage 25023 Data
import type { StageData } from '../../app/stage/types';

export const e25023Data: StageData = {
  eventId: 25023,
  eventName: "蒼き本能の秘境",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 23,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "秘境の祠 超極ムズ",
      baseHp: 1000000,
      width: 5600,
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
          treasureId: "30045",
          treasureName: "ユニット20045への進化権",
          probability: "325",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30050",
          treasureName: "ユニット20050への進化権",
          probability: "325",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30046",
          treasureName: "ユニット20046への進化権",
          probability: "110",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30051",
          treasureName: "ユニット20051への進化権",
          probability: "110",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30047",
          treasureName: "ユニット20047への進化権",
          probability: "35",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30052",
          treasureName: "ユニット20052への進化権",
          probability: "35",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30125",
          treasureName: "ユニット20125への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30130",
          treasureName: "ユニット20130への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30135",
          treasureName: "ユニット20135への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
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
          enemyId: "170",
          enemyName: "ゴマサーマン",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 365.85,
            speed: 5,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 41,
            foreswing: 6,
            backswing: 12,
            tba: 18
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 6585.3,
            magnification: "1800%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 168000,
            actualAp: 9000,
            actualDps: 11250.0,
            magnification: "1200%",
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "170",
          enemyName: "ゴマサーマン",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 365.85,
            speed: 5,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 41,
            foreswing: 6,
            backswing: 12,
            tba: 18
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 6585.3,
            magnification: "1800%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
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
            actualHp: 1500,
            actualAp: 3000,
            actualDps: 2093.01,
            magnification: "300%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
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
          enemyId: "365",
          enemyName: "キャプテン・モグー",
          traits: ["エ"],
          baseStats: {
            hp: 16000,
            ap: 222,
            dps: 37.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 180,
            foreswing: 61,
            backswing: 45,
            tba: 60
          },
          stageStats: {
            actualHp: 192000,
            actualAp: 2664,
            actualDps: 444.0,
            magnification: "1200%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "barrier": {
                hp: 2500
            },
            "warp": {
                chance: 30,
                distance: 250,
                duration_f: 40,
                duration_s: 1.33
            }
          }
        },
        {
          enemyId: "211",
          enemyName: "パラサイトブンブン",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 750000,
            ap: 8888,
            dps: 8601.29,
            speed: 18,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 4000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 2250000,
            actualAp: 26664,
            actualDps: 25803.87,
            magnification: "300%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 5,
                level: 1
            }
          }
        }]
    }
  ]
} as const;

export default e25023Data;

