// Stage 1105 Data
import type { StageData } from '../../app/stage/types';

export const e1105Data: StageData = {
  eventId: 1105,
  eventName: "大狂乱のキモネコ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 105,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ムキフェス 極ムズ",
      baseHp: 400000,
      width: 5600,
      enemyLimit: 12,
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
          treasureId: "10095",
          treasureName: "大狂乱のムキあしネコへの進化権(狂乱のキモネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "001",
          enemyName: "にょろ",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "10.0-11.3s",
            delayFrames: "300-340f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "10.0-11.3s",
            delayFrames: "300-340f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "245",
          enemyName: "大狂乱のムキあしネコ",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 9990,
            dps: 6376.6,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 9990,
            actualDps: 6376.6,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 4
            }
          }
        },
        {
          enemyId: "245",
          enemyName: "大狂乱のムキあしネコ",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 9990,
            dps: 6376.6,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 9990,
            actualDps: 6376.6,
            magnification: "100%",
            count: "4",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 4
            }
          }
        },
        {
          enemyId: "245",
          enemyName: "大狂乱のムキあしネコ",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 9990,
            dps: 6376.6,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 9990,
            actualDps: 6376.6,
            magnification: "100%",
            count: "0",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "21.3-21.3s",
            delayFrames: "640-640f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 4
            }
          }
        }]
    }
  ]
} as const;

export default e1105Data;

