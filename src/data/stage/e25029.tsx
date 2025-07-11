// Stage 25029 Data
import type { StageData } from '../../app/stage/types';

export const e25029Data: StageData = {
  eventId: 25029,
  eventName: "硬き本能の秘境",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 29,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "秘境の祠 超極ムズ",
      baseHp: 900000,
      width: 5500,
      enemyLimit: 12,
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
          treasureId: "30030",
          treasureName: "ユニット20030への進化権",
          probability: "365",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30031",
          treasureName: "ユニット20031への進化権",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30032",
          treasureName: "ユニット20032への進化権",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30033",
          treasureName: "ユニット20033への進化権",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "2",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e25029Data;

