// Stage 1185 Data
import type { StageData } from '../../app/stage/types';

export const e1185Data: StageData = {
  eventId: 1185,
  eventName: "絶・天罰",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 185,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "進撃の天渦 超激ムズ",
      baseHp: 400000,
      width: 6000,
      enemyLimit: 8,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "1000000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "116",
          enemyName: "天使愛好家",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAEBAQEBAQHBwcHBwcHBwcREREeHh4gICAtLS0xMTEzMzMzMzM1NTU5OTlSUFBWVFRWVlZbW1tjY2NkZGRtbW1xbm54eHj/QUF9e3z/UFGGhYWNjYz/Xl6Uk5T/bm2fl5efmpmgoKCwmpr+fHyopqb7i4uura3vl5a1s7P+mpq6urrAvr77p6fFxcXHx8f1tbbLy8vS0tL6x8fY2Nje3t7k5OTp6env7+/z8/P4+Pj8/Pz///+9lgLVAAAAQHRSTlMABQsXH0AoM1tPaFSFfLLKmeHAzP/qyf//2/7/5f/////////y//////////////////r/////////////////0cN/OgAABC5JREFUWIXtl31zqygUh5ukbfqS2+amaTW2gaglIiEgq6i8qN//Wy1m7+zM7ka7k/tvfxkJc+Q8cs4BGa+u/qHJ9e1J89v5/Ho+n9/OnOZzd9046/V0MplcjWny8LY56cNdLx/ub7Vavbju6mR5Wy4Wi8fpCGC24mmapIfymB0OWZ7nh0N/uTZL8/SQc0rpZj4CmK6KMtvmZR4l222apVmSZMdttNsek22SRHmaldHn/RjgiR+T9zQ7Op/d7pjmvdMuinZpkiS7qEyO5W4QML15fHx83udRdCyd4/s2dYHsdlniUO9psnWYv2awcOPOhTF/+fz8XMM8yhMHSN93ZZ6WSVQeI/f0PN06RpmV9REGbtzTGcDNh211kCcHcnAJS1z8fSjRMT0mSXrMkmwX5XlZZpC2jXk7C2g6C0EcrEG8x/sQ7vdxr328d8LYmWIYBMCvus4OATqFIJYEAgBgCEDYd8CpOXUgZpxK244AurY5yVrb/OoZp6ZvnKV1PzdoDNA1PCzcM2rRdobbxgoSYmYohkgWqsZ1+yUAIQSFjYnLSIyQ1EVY6SpAns9wgT3WtF8CBAV1DUDdaUiULUAAmXC5C0hc86DqvgJYEiJPMI6l4sSFrVCFKg0DDxUhjn385QxahRDV1M2cVAhjWYi2oioG0AWAQmTGc3C6a1TT2rY1tjVaW+OsuqmVUcpoqbtRQC2UdDrNsnWlbKwU1kpZGVe/3tCdyji4DixjAoVhXFSdrlkMXPoJcBXwfVBxI0MYKs6FKZgaWMqWyQLFMCSik1QypBsFQ8HXaw/URHNv7ZMAgALExTBAxiQIadEqYrnsDEYUIc+DwBDN/HWA/RDSAAwChOQE+ZQjZupGEKVZGAPsrwGokCLB2ueYxSIeDKExttCSNIZVrUsU541bwg6KsWDYFJRiVVAsBZOD27nPcp/mtq/WKeFN+2tz/d1t+3oMAirMWKE5k8zNptCtrSQpjGWo6JrCCFErpevhddA22PP9WPavDcIxIqymsU90I0DRWuTSXxEq6Mj7oOVrbw04hBBhSENUNUUcqE6FIRYCrmNaUSbYMKBtmee5okOAKGEMqa4TMdCWxAgjw5BtTCFrOQagsVtIVRgiN1WOKLeGQdOoGAHeVjHhWlaqGgvBpaiuVK0qqbSuuGy6pu7NQvZ7SlanIgwl8fWPMxJCnLHy1RnA7OHHf7V4Dn4uztjPHm+TM5ou+dv1uRvnAOc0XYq36/87+BvwDfgGfAOGvW9vZ78DmP142yyf+MWAycOnO1J+es+XAmYrd4rqtf8bAHeyaQ88zy4ETH58akOC14f//Qr/l6Z3P/3A+Y995Y3pdvkBANpc7D9dgs3y5ePuUn9XxOX9/WZzc6m/I0xnTwhcnMFe9x+vweo3dpLLgkvC5TFc3z2/Lp9fF3f3Yx/bV1d/AjjSABai3EB5AAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 5,
            money: 1,
            freq: 605,
            foreswing: 6,
            backswing: 8,
            tba: 300
          },
          stageStats: {
            actualHp: 5,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
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
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "112",
          enemyName: "エンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 1399999,
            ap: 76000,
            dps: 456000.0,
            speed: 6,
            range: 70,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1399999,
            actualAp: 76000,
            actualDps: 456000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "絶撃の天渦 極ムズ",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10127",
          treasureName: "ネコチャッピーへの進化権(カラクリにゃんこの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "112",
          enemyName: "エンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 1399999,
            ap: 76000,
            dps: 456000.0,
            speed: 6,
            range: 70,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1399999,
            actualAp: 76000,
            actualDps: 456000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "112",
          enemyName: "エンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 1399999,
            ap: 76000,
            dps: 456000.0,
            speed: 6,
            range: 70,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1399999,
            actualAp: 76000,
            actualDps: 456000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "112",
          enemyName: "エンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 1399999,
            ap: 76000,
            dps: 456000.0,
            speed: 6,
            range: 70,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1399999,
            actualAp: 76000,
            actualDps: 456000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "035",
          enemyName: "こぶへい",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQULCwsMDAwNDQ0PDw8PDw8UFBQVFRUdHR0iIiImJiYpKSkpKSksLCw0NDQ4ODg4ODg9PT0+Pj4+Pj5FRUVISEhPT09WVlZXV1dgYGBkZGRra2txcXFxcXF0dHR+fn6CgoKDg4OFhYWGhoaNjY2VlZWfn5+goKCnp6eoqKi2tra3t7fBwcHCwsLKysrR0dHX19fd3d3m5ubv7+/39/f9/f3///9p6OITAAAAQHRSTlMAAwgPOHabp8RbFWojLrGERiY5WHWNSFfl/6hwz4W+l7XoxqPOvP7b8v7PwOfX/f/l8f7v/v/0/v79/v//////a8UyngAABFtJREFUWIWdVwtzsjoQLdJ+vaW09U1btagIikp4EyAP/v+/uklAq70zde+3zjjKJCdnT052w90dLIbj56Fh9ICj/xs9J/OOh4NjGX8JoC1ihGpG0qX5lwjGq49ZU4fZ4n9wMI3vweaG8jpBHyh2BtD52tPb2xnBKhpS+x8fYV27UIThvojtE8KsajJMECK8qRaw+T2HNDwefQOQLMlq3jTsAAMwA0I5sbUzQMPqHOWcl0cYgJXmGaNO551Z2YigOz8jeAWar9mEM8ZcvYMrmpo19Gub+OgTBGAcmMq3U3GY8rDmeDmL4vkLLINCUOZ83wGYAc/9cPWkT60XDUTAoVwiBMaZEEuSTx20uIxp2qiIOtforsjonNDtkCZQkU67By4TfCLYUdIGg2HEW4Bqpp1SEE9SkIv1/n7/VbfzG+oahj7q914U4onP7+u/fNXEz3hHIf1cTqJoNpWb0mALANB7i7k4ee18cXQQQZi6tqJUzyAAJ/0UAEvKpkzI7iglEAcR4AFhmW+AhmJBx0MJUQ+zMYDAOG2ug7OcnQQBiNhf1c1PBMLaHyy47YOe7bejecX4T6QKYGVzi1oAhsRhkJ+OhfwqRjfn31nIbx1AFVCrXVOqjeGQDJzdrp1DErE8D6n6k5UqKft2a9Pd7bZlUCVyTth6IsdiP/GqfzsD3V1vO9aZ/E7aLcmTevdu9wHVoOes162IZa4AyhbA8+b3oGKi2ZvPdlGcyF3I8hYgrPfAWjLbTrpF/TApojVSiuCE74Ft2dpOihYgp+vpwDyohMqEH4EAw+0k7gBkTxDdQQGEEA+oMDZfR8VaAMgSqqq7YMCgGhjL1U4dAtHXZFdqSxnOzi3qVlg7D3feUX1Rl9VYCuIAL1j9d18RYCHOZPnRFrWy8rlN3wqzrcc08SNbySarKU9IBamGcr4jE6A5Wi2nLWdZ4VhIC0hBv9OGrrhHNDVCm9FJdH1JGxqyaAgBmAZi13mJMnd4zrj3SYQNIMVMhBRM0EeXNzlzy5oqZJBipC5CFCXx+NIzSgNEMQhgGFDi0+Kqf+mizxBEDqC2qlkRQ5nop1eoe3LcFjOYDXp2VfvkerQ2Sl07A9rgbrCnCaLBFV8zCMYxoJ62y1kp8XC1uByuu/E4gh5GmUTmkSvbaHZuB6CrhYpBQHcJcS4XnOHNplxAX3e0GS49kloXOlpFvKIByMsyzANFIb3c92lBvKqGyigoFMSvL3U09yxDLAKrIMbnITt+UxaQ1MfXuvxKYVFRRC4pGw7BPk0hVzQV4paJkyvK05j5+Q+L/xKikLKwIo6pXTwRrSEdAXXsiUth6WfInZ3LkoD0M3x0pqAzpU2weD9CXu59nt4WRFWpMy9L3kcABE2oKK+onp97C70nQns5cnnp8fJw9bufjPv+0/PDwxxT0U5KLwnfXx9F/HlFTHQL6vt4NTF/42A+Pbz9eXx8/Vpv4zR6n8//6WK+2UdFsZsvJ8/31wD/AhUI/F5yx1mgAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2637,
            dps: 1683.19,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 47,
            foreswing: 11,
            backswing: 36,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5274,
            actualDps: 3366.38,
            magnification: "200%",
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
            actualHp: 270000,
            actualAp: 13641,
            actualDps: 9981.21,
            magnification: "300%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 270000,
            actualAp: 13641,
            actualDps: 9981.21,
            magnification: "300%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 270000,
            actualAp: 13641,
            actualDps: 9981.21,
            magnification: "300%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 270000,
            actualAp: 13641,
            actualDps: 9981.21,
            magnification: "300%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 566.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "18.0-24.0s",
            delayFrames: "540-720f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1185Data;

