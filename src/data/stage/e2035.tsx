// Stage 2035 Data
import type { StageData } from '../../app/stage/types';

export const e2035Data: StageData = {
  eventId: 2035,
  eventName: "ワルプルギスの夜",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 35,
  stages: [
    {
      stageId: 0,
      stageName: "舞台装置の魔女 極ムズ",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10300",
          treasureName: "ちびアルティメットまどかへの進化権(ちびまどかの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "277",
          enemyName: "ワルプルギスの夜",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 2400000,
            ap: 40000,
            dps: 7947.02,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 8000,
            freq: 151,
            foreswing: 111,
            backswing: 40,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 4000,
            actualDps: 794.7,
            magnification: "10%",
            count: "1",
            spawnTime: "7.4s",
            spawnTimeFrames: "222f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2035Data;

