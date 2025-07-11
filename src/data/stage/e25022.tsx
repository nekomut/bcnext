// Stage 25022 Data
import type { StageData } from '../../app/stage/types';

export const e25022Data: StageData = {
  eventId: 25022,
  eventName: "蒼き本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 22,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "頂の祠 超極ムズ",
      baseHp: 800000,
      width: 3800,
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
          probability: "3775",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30050",
          treasureName: "ユニット20050への進化権",
          probability: "3775",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30046",
          treasureName: "ユニット20046への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30051",
          treasureName: "ユニット20051への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30047",
          treasureName: "ユニット20047への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30052",
          treasureName: "ユニット20052への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30125",
          treasureName: "ユニット20125への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30130",
          treasureName: "ユニット20130への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30135",
          treasureName: "ユニット20135への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3441,
            actualDps: 552.03,
            magnification: "300%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "barrier": {
                hp: 40000
            }
          }
        },
        {
          enemyId: "366",
          enemyName: "スペースマンボルグ",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 30000,
            ap: 1234,
            dps: 124.23,
            speed: 6,
            range: 840,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 298,
            foreswing: 59,
            backswing: 62,
            tba: 120
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3702,
            actualDps: 372.69,
            magnification: "300%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 12000
            }
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 1500,
            actualDps: 1216.23,
            magnification: "300%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 567,
            actualDps: 1063.12,
            magnification: "100%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 6000
            }
          }
        },
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3441,
            actualDps: 552.03,
            magnification: "300%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 40000
            }
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 1500,
            actualDps: 1216.23,
            magnification: "300%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 567,
            actualDps: 1063.12,
            magnification: "100%",
            count: "3",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 6000
            }
          }
        }]
    }
  ]
} as const;

export default e25022Data;

