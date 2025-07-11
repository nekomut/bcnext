// Stage 1173 Data
import type { StageData } from '../../app/stage/types';

export const e1173Data: StageData = {
  eventId: 1173,
  eventName: "大逆襲のメタックマ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 173,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "本気メタル降臨 極ムズ",
      baseHp: 80000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 500,
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
          probability: "100",
          amount: "5",
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
          enemyId: "057",
          enemyName: "メタックマ",
          traits: ["メ"],
          baseStats: {
            hp: 50,
            ap: 999999,
            dps: 1578945.79,
            speed: 3,
            range: 600,
            rangeType: "単体",
            kbLevel: 1,
            money: 550,
            freq: 19,
            foreswing: 8,
            backswing: 8,
            tba: 6
          },
          stageStats: {
            actualHp: 50,
            actualAp: 999999,
            actualDps: 1578945.79,
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

export default e1173Data;

