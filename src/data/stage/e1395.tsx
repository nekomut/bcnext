// Stage 1395 Data
import type { StageData } from '../../app/stage/types';

export const e1395Data: StageData = {
  eventId: 1395,
  eventName: "ネコムート大試練",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 395,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "本能解放への道",
      baseHp: 2222222,
      width: 5500,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 120000,
            actualAp: 8400,
            actualDps: 2863.68,
            magnification: "2400%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 161000,
            actualAp: 11500,
            actualDps: 9324.43,
            magnification: "2300%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
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
          enemyId: "717",
          enemyName: "覚醒のネコムート",
          traits: ["浮"],
          baseStats: {
            hp: 2000000,
            ap: 60444,
            dps: 19498.06,
            speed: 60,
            range: 300,
            rangeType: "範囲",
            kbLevel: 12,
            money: 4444,
            freq: 93,
            foreswing: 5,
            backswing: 73,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 60444,
            actualDps: 19498.06,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [60000, 222, 222],
                timings: [5, 10, 20]
            },
            "explosion": {
                chance: 100,
                range: 300
            }
          }
        }]
    }
  ]
} as const;

export default e1395Data;

