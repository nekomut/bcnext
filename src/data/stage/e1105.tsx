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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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
          icon: "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",
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

