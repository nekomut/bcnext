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
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
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
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
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

