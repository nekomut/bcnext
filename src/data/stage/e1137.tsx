// Stage 1137 Data
import type { StageData } from '../../app/stage/types';

export const e1137Data: StageData = {
  eventId: 1137,
  eventName: "開眼のちびネコトカゲ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 137,
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
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
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
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
          }
        }]
    }
  ]
} as const;

export default e1137Data;

