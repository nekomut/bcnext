// Stage 2132 Data
import type { StageData } from '../../app/stage/types';

export const e2132Data: StageData = {
  eventId: 2132,
  eventName: "にゃんこ大泥棒",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 132,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
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
          enemyId: "494",
          enemyName: "ダミー",
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
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
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
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
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
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
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
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2132Data;

