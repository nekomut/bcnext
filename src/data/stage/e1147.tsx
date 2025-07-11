// Stage 1147 Data
import type { StageData } from '../../app/stage/types';

export const e1147Data: StageData = {
  eventId: 1147,
  eventName: "謎のプレゼント2",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 147,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "147_その１",
      baseHp: 222,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 30,
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
          treasureId: "1035",
          treasureName: "ふにゅふにゅネコ(140)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "268",
          enemyName: "ダミー",
          traits: ["メ"],
          baseStats: {
            hp: 100,
            ap: 1,
            dps: 0.06,
            speed: 0,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 1500,
            freq: 509,
            foreswing: 499,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 1,
            actualDps: 0.06,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1147Data;

