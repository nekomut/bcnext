// Stage 25016 Data
import type { StageData } from '../../app/stage/types';

export const e25016Data: StageData = {
  eventId: 25016,
  eventName: "黒き本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 16,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "頂の祠 超極ムズ",
      baseHp: 630000,
      width: 4900,
      enemyLimit: 5,
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
          treasureId: "30020",
          treasureName: "ユニット20020への進化権",
          probability: "3775",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30025",
          treasureName: "ユニット20025への進化権",
          probability: "3775",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30021",
          treasureName: "ユニット20021への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30026",
          treasureName: "ユニット20026への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30022",
          treasureName: "ユニット20022への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30027",
          treasureName: "ユニット20027への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30095",
          treasureName: "ユニット20095への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30100",
          treasureName: "ユニット20100への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30105",
          treasureName: "ユニット20105への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "21.3-25.3s",
            delayFrames: "640-760f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "050",
          enemyName: "ブラックブンブン",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 777777,
            ap: 5997,
            dps: 5803.55,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3111108,
            actualAp: 23988,
            actualDps: 23214.2,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "149",
          enemyName: "松 黒蔵",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 920000,
            actualAp: 32000,
            actualDps: 5133.68,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "3",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "21.3-25.3s",
            delayFrames: "640-760f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "21.3-25.3s",
            delayFrames: "640-760f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e25016Data;

