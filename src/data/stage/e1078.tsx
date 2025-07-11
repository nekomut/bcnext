// Stage 1078 Data
import type { StageData } from '../../app/stage/types';

export const e1078Data: StageData = {
  eventId: 1078,
  eventName: "逆襲のカオル君",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 78,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "絶メタル降臨 極ムズ",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 7,
      requiredCost: 400,
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
          },
          abilities: {}
        },
        {
          enemyId: "058",
          enemyName: "メタルカオル君",
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
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1078Data;

