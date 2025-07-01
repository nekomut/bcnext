// Stage 1134 Data
import type { StageData } from '../../app/stage/types';

export const e1134Data: StageData = {
  eventId: 1134,
  eventName: "開眼のちびウシネコ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 134,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "ちびウシネコ進化への道 極ムズ",
      baseHp: 1930000,
      width: 5500,
      enemyLimit: 40,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10247",
          treasureName: "ちびネコライオンへの進化権(ちびウシネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-10.7s",
            delayFrames: "300-320f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "10",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "3",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "5",
            spawnTime: "20.7s",
            spawnTimeFrames: "620f",
            delay: "3.3-10.7s",
            delayFrames: "100-320f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1134Data;

