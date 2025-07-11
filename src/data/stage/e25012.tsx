// Stage 25012 Data
import type { StageData } from '../../app/stage/types';

export const e25012Data: StageData = {
  eventId: 25012,
  eventName: "浮ける本能の起源",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 12,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "起源の祠 極ムズ",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "30010",
          treasureName: "ユニット20010への進化権",
          probability: "410",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30015",
          treasureName: "ユニット20015への進化権",
          probability: "410",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30011",
          treasureName: "ユニット20011への進化権",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30016",
          treasureName: "ユニット20016への進化権",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30080",
          treasureName: "ユニット20080への進化権",
          probability: "10",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30085",
          treasureName: "ユニット20085への進化権",
          probability: "10",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30090",
          treasureName: "ユニット20090への進化権",
          probability: "10",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 999990,
            actualAp: 22500,
            actualDps: 21774.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 999990,
            actualAp: 22500,
            actualDps: 21774.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 999990,
            actualAp: 22500,
            actualDps: 21774.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "4",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "3",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "0",
            spawnTime: "153.3s",
            spawnTimeFrames: "4,600f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 1
            }
          }
        }]
    }
  ]
} as const;

export default e25012Data;

