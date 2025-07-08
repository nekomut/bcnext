// Stage 14044 Data
import type { StageData } from '../../app/stage/types';

export const e14044Data: StageData = {
  eventId: 14044,
  eventName: "大狂乱のウシ降臨",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
  mapId: 44,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "獅子累々 極ムズ",
      baseHp: 1430000,
      width: 5500,
      enemyLimit: 40,
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
          treasureId: "10096",
          treasureName: "大狂乱のネコライオンへの進化権(狂乱のウシネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "246",
          enemyName: "大狂乱のネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 6600,
            dps: 19800.0,
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
            actualAp: 6600,
            actualDps: 19800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-10.7s",
            delayFrames: "300-320f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "246",
          enemyName: "大狂乱のネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 6600,
            dps: 19800.0,
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
            actualAp: 6600,
            actualDps: 19800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "3",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "3",
            spawnTime: "20.7s",
            spawnTimeFrames: "620f",
            delay: "3.3-10.7s",
            delayFrames: "100-320f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "246",
          enemyName: "大狂乱のネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 6600,
            dps: 19800.0,
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
            actualAp: 6600,
            actualDps: 19800.0,
            magnification: "100%",
            count: "40",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "246",
          enemyName: "大狂乱のネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 6600,
            dps: 19800.0,
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
            actualAp: 6600,
            actualDps: 19800.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e14044Data;

