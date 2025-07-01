// Stage 1200 Data
import type { StageData } from '../../app/stage/types';

export const e1200Data: StageData = {
  eventId: 1200,
  eventName: "にゃんこグミ大戦争",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 200,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "にゃんコーラ味",
      baseHp: 5000,
      width: 3800,
      enemyLimit: 50,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "1",
          amount: "30",
          times: "-3",
          limitText: "-3"
        },
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "1",
          amount: "29",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "1",
          amount: "29",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "1",
          amount: "29",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "457",
          enemyName: "グミネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 1,
            dps: 0.04,
            speed: 12,
            range: 140,
            rangeType: "単体",
            kbLevel: 100000,
            money: 100,
            freq: 707,
            foreswing: 8,
            backswing: 10,
            tba: 350
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 1,
            actualDps: 0.04,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "457",
          enemyName: "グミネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 1,
            dps: 0.04,
            speed: 12,
            range: 140,
            rangeType: "単体",
            kbLevel: 100000,
            money: 100,
            freq: 707,
            foreswing: 8,
            backswing: 10,
            tba: 350
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 1,
            actualDps: 0.04,
            magnification: "100%",
            count: "20",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "0.3-2.7s",
            delayFrames: "10-80f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "457",
          enemyName: "グミネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 1,
            dps: 0.04,
            speed: 12,
            range: 140,
            rangeType: "単体",
            kbLevel: 100000,
            money: 100,
            freq: 707,
            foreswing: 8,
            backswing: 10,
            tba: 350
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 1,
            actualDps: 0.04,
            magnification: "100%",
            count: "15",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.2-4.0s",
            delayFrames: "6-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1200Data;

