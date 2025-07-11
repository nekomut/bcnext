// Stage 2015 Data
import type { StageData } from '../../app/stage/types';

export const e2015Data: StageData = {
  eventId: 2015,
  eventName: "消滅都市 ～第３章～(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 15,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ロスト 超激ムズ",
      baseHp: 360000,
      width: 6000,
      enemyLimit: 12,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1119",
          treasureName: "タクヤとユキ(179)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "500000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 900,
            actualAp: 80,
            actualDps: 51.1,
            magnification: "1000%",
            count: "30",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 200.0,
            magnification: "1000%",
            count: "30",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "20",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 1800,
            actualDps: 2000.0,
            magnification: "100%",
            count: "15",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "40.0-80.0s",
            delayFrames: "1,200-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "95.3s",
            spawnTimeFrames: "2,860f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "052",
          enemyName: "シャドウボクサー",
          traits: ["黒"],
          baseStats: {
            hp: 80000,
            ap: 4997,
            dps: 9369.38,
            speed: 22,
            range: 158,
            rangeType: "範囲",
            kbLevel: 10,
            money: 600,
            freq: 16,
            foreswing: 2,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "10",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "66.7-133.3s",
            delayFrames: "2,000-4,000f",
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
            count: "0",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
          enemyId: "158",
          enemyName: "タクヤ",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "80.0-100.0s",
            delayFrames: "2,400-3,000f",
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
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.0-29.3s",
            delayFrames: "660-880f",
            baseHpRatio: "90%",
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
          enemyId: "158",
          enemyName: "タクヤ",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "90%",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "159",
          enemyName: "ユキ",
          traits: ["浮"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 289.47,
            speed: 5,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 342,
            foreswing: 43,
            backswing: 58,
            tba: 150
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 13200,
            actualDps: 1157.88,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2015Data;

