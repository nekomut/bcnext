// Stage 1137 Data
import type { StageData } from '../../app/stage/types';

export const e1137Data: StageData = {
  eventId: 1137,
  eventName: "開眼のちびネコトカゲ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 137,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ちびネコトカゲ進化への道 極ムズ",
      baseHp: 800000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 200,
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
          treasureId: "10313",
          treasureName: "ちびネコキングドラゴンへの進化権(ちびネコトカゲの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
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
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
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
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "130.0s",
            spawnTimeFrames: "3,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "293.3s",
            spawnTimeFrames: "8,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "360.0s",
            spawnTimeFrames: "10,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1137Data;

