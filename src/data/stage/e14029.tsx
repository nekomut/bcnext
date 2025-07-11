// Stage 14029 Data
import type { StageData } from '../../app/stage/types';

export const e14029Data: StageData = {
  eventId: 14029,
  eventName: "狂乱のトリ降臨",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
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
      stageName: "猪鹿鳥 超激ムズ",
      baseHp: 400000,
      width: 5700,
      enemyLimit: 10,
      requiredCost: 2,
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
          treasureId: "1108",
          treasureName: "狂乱のネコノトリ(96)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 4547,
            actualDps: 3327.07,
            magnification: "100%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "60.0-73.3s",
            delayFrames: "1,800-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4837,
            actualDps: 13191.82,
            magnification: "100%",
            count: "0",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "233.3-233.3s",
            delayFrames: "7,000-7,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "080",
          enemyName: "狂乱のネコノトリ",
          traits: ["浮"],
          baseStats: {
            hp: 1180000,
            ap: 12000,
            dps: 2130.18,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 10,
            backswing: 4,
            tba: 80
          },
          stageStats: {
            actualHp: 1180000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "933.3-933.3s",
            delayFrames: "28,000-28,000f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "0",
            spawnTime: "920.0s",
            spawnTimeFrames: "27,600f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "0",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e14029Data;

