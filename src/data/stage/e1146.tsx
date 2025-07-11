// Stage 1146 Data
import type { StageData } from '../../app/stage/types';

export const e1146Data: StageData = {
  eventId: 1146,
  eventName: "イベントオールスターズ グレイト記念！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 146,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "グレイト爆進！ 超激ムズ",
      baseHp: 882000,
      width: 4500,
      enemyLimit: 24,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "1000000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "106",
          enemyName: "花火職人（高空）",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 0.05,
            speed: 5,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 569,
            foreswing: 190,
            backswing: -189,
            tba: 190
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "107",
          enemyName: "花火職人（低空）",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 0.05,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 569,
            foreswing: 190,
            backswing: -189,
            tba: 190
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 24,
            actualAp: 9600,
            actualDps: 36.0,
            magnification: "2400%",
            count: "0",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "3.3-5.3s",
            delayFrames: "100-160f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 1800,
            actualDps: 620.7,
            magnification: "300%",
            count: "0",
            spawnTime: "16.0s",
            spawnTimeFrames: "480f",
            delay: "20.0-22.0s",
            delayFrames: "600-660f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "282",
          enemyName: "売り子エル",
          traits: ["無"],
          baseStats: {
            hp: 96000,
            ap: 3600,
            dps: 1770.49,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 2,
            money: 480,
            freq: 61,
            foreswing: 32,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 10800,
            actualDps: 5311.47,
            magnification: "300%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 50,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 24,
            actualAp: 9600,
            actualDps: 36.0,
            magnification: "2400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 24,
            actualAp: 9600,
            actualDps: 36.0,
            magnification: "2400%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.0-8.0s",
            delayFrames: "180-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "306",
          enemyName: "パオンモス",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3200,
            dps: 581.82,
            speed: 5,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 165,
            foreswing: 6,
            backswing: 10,
            tba: 80
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 12800,
            actualDps: 2327.28,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "263",
          enemyName: "ぼったくラッコ",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 2497,
            dps: 3256.96,
            speed: 9,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 7491,
            actualDps: 9770.88,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "213",
          enemyName: "ナカイサンタ",
          traits: ["赤"],
          baseStats: {
            hp: 122500,
            ap: 5963,
            dps: 3650.82,
            speed: 20,
            range: 300,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1225,
            freq: 49,
            foreswing: 20,
            backswing: 21,
            tba: 15
          },
          stageStats: {
            actualHp: 245000,
            actualAp: 11926,
            actualDps: 7301.64,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 20000,
            actualAp: 2,
            actualDps: 0.1,
            magnification: "200%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1146Data;

