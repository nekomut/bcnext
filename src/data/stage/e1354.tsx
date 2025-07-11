// Stage 1354 Data
import type { StageData } from '../../app/stage/types';

export const e1354Data: StageData = {
  eventId: 1354,
  eventName: "極悪のウシ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 354,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "来怨キング 超極ムズ",
      baseHp: 2500000,
      width: 4700,
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
          treasureId: "10663",
          treasureName: "洗脳されしネコライオンへの進化権(洗脳されしウシネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
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
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "13.3-15.3s",
            delayFrames: "400-460f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "40",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
            count: "7",
            spawnTime: "7.3s",
            spawnTimeFrames: "220f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
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
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "1",
            spawnTime: "7.3s",
            spawnTimeFrames: "220f",
            delay: "3.3-8.0s",
            delayFrames: "100-240f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1354Data;

