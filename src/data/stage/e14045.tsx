// Stage 14045 Data
import type { StageData } from '../../app/stage/types';

export const e14045Data: StageData = {
  eventId: 14045,
  eventName: "大狂乱のトリ降臨",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
  mapId: 45,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "蝶！猪鹿鳥 極ムズ",
      baseHp: 400000,
      width: 6100,
      enemyLimit: 10,
      requiredCost: 4,
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
          treasureId: "10097",
          treasureName: "大狂乱の天空のネコへの進化権(狂乱のネコノトリの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 9094,
            actualDps: 6654.14,
            magnification: "200%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "60.0-73.3s",
            delayFrames: "1,800-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 9674,
            actualDps: 26383.64,
            magnification: "200%",
            count: "0",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "333.3-333.3s",
            delayFrames: "10,000-10,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "177",
          enemyName: "イノヴァルカン",
          traits: ["エ"],
          baseStats: {
            hp: 160000,
            ap: 1799,
            dps: 3174.71,
            speed: 9,
            range: 125,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 17,
            foreswing: 8,
            backswing: 3,
            tba: 5
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 8995,
            actualDps: 15873.55,
            magnification: "500%",
            count: "0",
            spawnTime: "313.3s",
            spawnTimeFrames: "9,400f",
            delay: "333.3-333.3s",
            delayFrames: "10,000-10,000f",
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
          enemyId: "022",
          enemyName: "ガガガガ",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7000,
            actualDps: 2386.4,
            magnification: "2000%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "233.3-233.3s",
            delayFrames: "7,000-7,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "247",
          enemyName: "大狂乱の天空のネコ",
          traits: ["浮"],
          baseStats: {
            hp: 2680000,
            ap: 32000,
            dps: 5680.47,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 20,
            backswing: 21,
            tba: 75
          },
          stageStats: {
            actualHp: 2680000,
            actualAp: 32000,
            actualDps: 5680.47,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "933.3-933.3s",
            delayFrames: "28,000-28,000f",
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
            count: "0",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e14045Data;

