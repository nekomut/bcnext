// Stage 2171 Data
import type { StageData } from '../../app/stage/types';

export const e2171Data: StageData = {
  eventId: 2171,
  eventName: "決戦！巨大生物ゴジラ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 171,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "最強の破壊神 超極ムズ",
      baseHp: 500000,
      width: 4900,
      enemyLimit: 1,
      requiredCost: 100,
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
          enemyId: "550",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 600,
            dps: 42.35,
            speed: 3,
            range: 3800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1954,
            freq: 425,
            foreswing: 130,
            backswing: 101,
            tba: 108
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 156000,
            actualDps: 11011.0,
            magnification: "26000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [200, 200, 200],
                timings: [130, 170, 210]
            },
            "long-distance": {
                standing_range: 2300,
                ld_range: [2300, 3800]
            },
            "base-destroyer": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e2171Data;

