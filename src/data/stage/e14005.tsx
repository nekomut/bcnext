// Stage 14005 Data
import type { StageData } from '../../app/stage/types';

export const e14005Data: StageData = {
  eventId: 14005,
  eventName: "逆襲のカオル君",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
  mapId: 5,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "絶メタル降臨 極ムズ",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 7,
      requiredCost: 2002,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "30",
          amount: "3",
          times: "0",
          limitText: "0"
        },
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "50",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "058",
          enemyName: "メタルカオル君",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 299,
            ap: 99999,
            dps: 12986.88,
            speed: 32,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 550,
            freq: 231,
            foreswing: 32,
            backswing: 12,
            tba: 100
          },
          stageStats: {
            actualHp: 299,
            actualAp: 99999,
            actualDps: 12986.88,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e14005Data;

