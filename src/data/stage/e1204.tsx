// Stage 1204 Data
import type { StageData } from '../../app/stage/types';

export const e1204Data: StageData = {
  eventId: 1204,
  eventName: "謎の宅配便",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 204,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "差出人不明",
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "100000",
          times: "-3",
          limitText: "-3"
        },
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "268",
          enemyName: "ダミー",
          icon: "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",
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

export default e1204Data;

