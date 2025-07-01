// Stage 2132 Data
import type { StageData } from '../../app/stage/types';

export const e2132Data: StageData = {
  eventId: 2132,
  eventName: "にゃんこ大泥棒",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 132,
  stages: [
    {
      stageId: 0,
      stageName: "大泥棒バトル!!",
      baseHp: 2500,
      width: 3600,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 50,
            actualAp: 20,
            actualDps: 12.77,
            magnification: "50%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.0-12.0s",
            delayFrames: "240-360f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 50,
            actualAp: 20,
            actualDps: 12.77,
            magnification: "50%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 50,
            actualAp: 20,
            actualDps: 12.77,
            magnification: "50%",
            count: "15",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.0-3.0s",
            delayFrames: "60-90f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1,
            actualAp: 0,
            actualDps: 0.26,
            magnification: "1%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2132Data;

