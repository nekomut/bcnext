// Stage 25014 Data
import type { StageData } from '../../app/stage/types';

export const e25014Data: StageData = {
  eventId: 25014,
  eventName: "浮ける本能の秘境",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 14,
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
      width: 4500,
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
          treasureId: "30010",
          treasureName: "ユニット20010への進化権",
          probability: "325",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30015",
          treasureName: "ユニット20015への進化権",
          probability: "325",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30011",
          treasureName: "ユニット20011への進化権",
          probability: "110",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30016",
          treasureName: "ユニット20016への進化権",
          probability: "110",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30012",
          treasureName: "ユニット20012への進化権",
          probability: "35",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30017",
          treasureName: "ユニット20017への進化権",
          probability: "35",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30080",
          treasureName: "ユニット20080への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30085",
          treasureName: "ユニット20085への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30090",
          treasureName: "ユニット20090への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 9800,
            actualDps: 3340.96,
            magnification: "2800%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
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
            actualHp: 24900,
            actualAp: 3600,
            actualDps: 2454.54,
            magnification: "300%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
          enemyId: "022",
          enemyName: "ガガガガ",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 9800,
            actualDps: 3340.96,
            magnification: "2800%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 359964,
            actualAp: 13500,
            actualDps: 13064.52,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 359964,
            actualAp: 13500,
            actualDps: 13064.52,
            magnification: "1200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 359964,
            actualAp: 13500,
            actualDps: 13064.52,
            magnification: "1200%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "498",
          enemyName: "タッキー",
          traits: ["浮"],
          baseStats: {
            hp: 329000,
            ap: 5000,
            dps: 1648.35,
            speed: 8,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 91,
            foreswing: 52,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 329000,
            actualAp: 5000,
            actualDps: 1648.35,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 420,
                omni_range: [-320, 420]
            },
            "toxic": {
                chance: 100,
                damage: 35
            }
          }
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 299,
            actualAp: 11,
            actualDps: 10.89,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
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

export default e25014Data;

