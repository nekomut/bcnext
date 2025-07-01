// Stage 2059 Data
import type { StageData } from '../../app/stage/types';

export const e2059Data: StageData = {
  eventId: 2059,
  eventName: "ダイジョーブ博士の挑戦状",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 59,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "犠牲ハツキモノデース 超上級",
      baseHp: 120000,
      width: 3300,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10386",
          treasureName: "矢部＆ガンダーロボCCへの進化権(矢部明雄の第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "386",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEEBAQHBwcODAkMDhYQEw0LFCcEHhMZHxMHLQUFLyAeJDgDPxMDRAJKGSw0KCQ7KySGByZwCGIuNjsDXwJINSvCBA9GQjo3RF5HQkECdAB0KFwDeQRURUZvSDFWVFdCWIEElQFgXl1mZWYGsgRsbGhvc32JbF+KbVx/gIireGCLi4qViYedjYGqkoPajmKbor2/noanrb36n2rZrI23t8frt5O8x9fL0dz5xqH/zqvf4+r19Pf///9Sr2SGAAAAQHRSTlMAB/8RHzNiSv+0XYPg//6h/5V5///8yrz///yc5v//6sH///yz///Q/+X//f7R/+3//v/+/////v///v//////G1kSBwAAA81JREFUWIWllut2qjAQhYuAeFBO64Vaa62mGo0EY4RIuAi8/1udibW3tc5qSd1/EHQ+JpM9E29uvpHpGN99/bMMx7kOcGO1r8ygbV8HsK9cgeF0Xdd1rF9W0nLH2zCO4/126pi/eLu7CI/FSalI91NLO36wPaav8UrJWJfgbI/q/UXM4+KU8pj3tQphOuPwmEI8hxqkpzSJ+VZnQ+yVkDxIXxOAS8oB1HMb52Ct8rquBYcEZFnGScLLKuPBvnEOroD4uqJFwtWVh2cezlcNUzDOCdQ1ZYGo4Mqwus9wvrMtu4khzM2prvIsJyxgJWTAAgmcGHO62Yyb9IaxKqqc8ojyJBRlJeMDk2XGGRW7QTM3DOJTWcqAC34IGYuLAi6cM47dRuGwhuk+SVgQcxYk6eni5iBOk8ZmMt15EB7V/sfvZla2HDd2grk4gpM/WuFV6bS5nQfhEaz8lVDouNnsbw+fuxHCk21bp58Muz8JQg4+TtNzLy36tt5gMqcil5hM7kAYz9um5lwzBhG4UGR0NBze0YytdIeas8/Bv4Ky0ehhhKiUTU10kTVmkcwrwSkAhjPJ5EJrphkD6AUpBZP5bDSbzXImqFYK9jzgMWMSs3w2fBiOJOJsoXFImf1QWSCBBpQAeBhxDINx05zghK8WSkgZIQWgLNZxsjE9XDzIMoHuHoYeZhzutk3rCK10AUAlJ0pIMLjbN13DJ0BeqnifVKyAZmq8k4PDK6FgVUWWy+Uzq3maHpofTrY614oiDWVdkfV6/RxV7HDQsJLhQjMfDyGv6govl089KeeLhgP1QrAHi8V4DuO8XME/jEE0tXSbyTAty+lv9mIAN27ftiydfjYsp3u72u12m3HXhqN6Cp8397ddp9kqLPf2aQmly+BUKneus5FlVUt4sF7ed38eS4Z7r6KVsgq035Z1VeVvz566PxTDvFU/VXv//IyEBBERRRF+VoLH6+Xt9wBXhf4FdUAeCHmdN8FTgDx9D3B6fz0IxBiTs5Dv+xNMlQglXq/X+/NDCez2H//lMZIiy/KcoQlCCGOalWWZlflYbef3AFD78QLIKKLYh5VMMBFnQLOJ8A5gOEKdVqvV6fiKIDOpBxCYo9ZZUBRKM6mRgU9h6wihrYs8b8KoXgYw1DGdvAHOKeRaNYgyiZjX+QAQogsQE+a1PtaA9QH+FwDC+gD6AfCvBTz6WBMgvgA6L4+EyDz7dQYAoETTB+ILAL8QkjXO4OVs5cjHnXcAecFYEyAjD30GIKQJgBog7xPgUQPgw6ap8eO/ZwDb6PuU0f+djv8A2vrRkAwgcmgAAAAASUVORK5CYII=",
          traits: [],
          baseStats: {
            hp: 10000,
            ap: 100,
            dps: 10.03,
            speed: 0,
            range: 750,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 299,
            foreswing: 36,
            backswing: 13,
            tba: 132
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 1200,
            actualDps: 120.36,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-21.3s",
            delayFrames: "320-640f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-5.3s",
            delayFrames: "80-160f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "犠牲ハツキモノデース 極ムズ",
      baseHp: 300000,
      width: 3000,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10386",
          treasureName: "矢部＆ガンダーロボCCへの進化権(矢部明雄の第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "386",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEEBAQHBwcODAkMDhYQEw0LFCcEHhMZHxMHLQUFLyAeJDgDPxMDRAJKGSw0KCQ7KySGByZwCGIuNjsDXwJINSvCBA9GQjo3RF5HQkECdAB0KFwDeQRURUZvSDFWVFdCWIEElQFgXl1mZWYGsgRsbGhvc32JbF+KbVx/gIireGCLi4qViYedjYGqkoPajmKbor2/noanrb36n2rZrI23t8frt5O8x9fL0dz5xqH/zqvf4+r19Pf///9Sr2SGAAAAQHRSTlMAB/8RHzNiSv+0XYPg//6h/5V5///8yrz///yc5v//6sH///yz///Q/+X//f7R/+3//v/+/////v///v//////G1kSBwAAA81JREFUWIWllut2qjAQhYuAeFBO64Vaa62mGo0EY4RIuAi8/1udibW3tc5qSd1/EHQ+JpM9E29uvpHpGN99/bMMx7kOcGO1r8ygbV8HsK9cgeF0Xdd1rF9W0nLH2zCO4/126pi/eLu7CI/FSalI91NLO36wPaav8UrJWJfgbI/q/UXM4+KU8pj3tQphOuPwmEI8hxqkpzSJ+VZnQ+yVkDxIXxOAS8oB1HMb52Ct8rquBYcEZFnGScLLKuPBvnEOroD4uqJFwtWVh2cezlcNUzDOCdQ1ZYGo4Mqwus9wvrMtu4khzM2prvIsJyxgJWTAAgmcGHO62Yyb9IaxKqqc8ojyJBRlJeMDk2XGGRW7QTM3DOJTWcqAC34IGYuLAi6cM47dRuGwhuk+SVgQcxYk6eni5iBOk8ZmMt15EB7V/sfvZla2HDd2grk4gpM/WuFV6bS5nQfhEaz8lVDouNnsbw+fuxHCk21bp58Muz8JQg4+TtNzLy36tt5gMqcil5hM7kAYz9um5lwzBhG4UGR0NBze0YytdIeas8/Bv4Ky0ehhhKiUTU10kTVmkcwrwSkAhjPJ5EJrphkD6AUpBZP5bDSbzXImqFYK9jzgMWMSs3w2fBiOJOJsoXFImf1QWSCBBpQAeBhxDINx05zghK8WSkgZIQWgLNZxsjE9XDzIMoHuHoYeZhzutk3rCK10AUAlJ0pIMLjbN13DJ0BeqnifVKyAZmq8k4PDK6FgVUWWy+Uzq3maHpofTrY614oiDWVdkfV6/RxV7HDQsJLhQjMfDyGv6govl089KeeLhgP1QrAHi8V4DuO8XME/jEE0tXSbyTAty+lv9mIAN27ftiydfjYsp3u72u12m3HXhqN6Cp8397ddp9kqLPf2aQmly+BUKneus5FlVUt4sF7ed38eS4Z7r6KVsgq035Z1VeVvz566PxTDvFU/VXv//IyEBBERRRF+VoLH6+Xt9wBXhf4FdUAeCHmdN8FTgDx9D3B6fz0IxBiTs5Dv+xNMlQglXq/X+/NDCez2H//lMZIiy/KcoQlCCGOalWWZlflYbef3AFD78QLIKKLYh5VMMBFnQLOJ8A5gOEKdVqvV6fiKIDOpBxCYo9ZZUBRKM6mRgU9h6wihrYs8b8KoXgYw1DGdvAHOKeRaNYgyiZjX+QAQogsQE+a1PtaA9QH+FwDC+gD6AfCvBTz6WBMgvgA6L4+EyDz7dQYAoETTB+ILAL8QkjXO4OVs5cjHnXcAecFYEyAjD30GIKQJgBog7xPgUQPgw6ap8eO/ZwDb6PuU0f+djv8A2vrRkAwgcmgAAAAASUVORK5CYII=",
          traits: [],
          baseStats: {
            hp: 10000,
            ap: 100,
            dps: 10.03,
            speed: 0,
            range: 750,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 299,
            foreswing: 36,
            backswing: 13,
            tba: 132
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3000,
            actualDps: 300.9,
            magnification: "3000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
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
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "75%",
            isBoss: false
          }
        },
        {
          enemyId: "052",
          enemyName: "シャドウボクサー",
          icon: "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",
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
            actualHp: 160000,
            actualAp: 9994,
            actualDps: 18738.76,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "75%",
            isBoss: false
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "75%",
            isBoss: false
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
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
            actualHp: 180000,
            actualAp: 9094,
            actualDps: 6654.14,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "75%",
            isBoss: false
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
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
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "385",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 5000,
            dps: 2678.57,
            speed: 9,
            range: 155,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 56,
            foreswing: 15,
            backswing: 12,
            tba: 21
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 5357.14,
            magnification: "200%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
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
            actualHp: 180000,
            actualAp: 9094,
            actualDps: 6654.14,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "50%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2059Data;

