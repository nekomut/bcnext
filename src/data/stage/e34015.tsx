// Stage 34015 Data
import type { StageData } from '../../app/stage/types';

export const e34015Data: StageData = {
  eventId: 34015,
  eventName: "豪華客船ハイパニック",
  typeId: 34,
  typeName: "レジェンドストーリー0",
  prefix: "ND",
  mapId: 15,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "素性不明な一日船長",
      baseHp: 2500000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "9",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "9",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "3",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwMDAwMEBQUHCw8CBzYNExgOGB4QGiARGiEEBnwbHAIBFV8VIy0WJTEBBrQEMVUcLTggNUQDOIIJFdknP1BNSAEtS181V24EQuo4X3s8ZoI/aohCb48EcvVHd5ouc/BOhKkBnv9Si7KWjQFNl9teoM0kvv9jqdjVwAFf9/+k5P7//gH/+f7B5wpeAAAAQHRSTlMACRUkMzxKWWNuma//fYqk0Ny8xvLl/v/P/t20//7//+v/////////////////////////////////////////rW5rhAAAA4RJREFUWIXtV2lzozgQBYRB4jSXbOWwkgjCiDOMN14mmWT+/78ayeDYzmQzULUf86psXC73Ux/qfm1F+cL/B8P1wyhaX1zc3NxcrEPfQwttjr1qJ0mMMSGEsjTnRVXkjCY20ue5AQxv6UhgyrumqQVLYpvqPBINDhx5VxVF29U8JfZiHoUCQkFAUiw8YbVwhLMEzXNDTZwDaF0UdVPl2JtDAZwj8kbYV02dY3c6ge651sEJ3uYprwtJERuz4lhEe4KUSBYRSNG2xJzFoNhvcZCqEj7k/jx7BR0zwUUaKJppr/gnqawbBhVVm1VN97QWXW4p5mIBZjkQHa9D0SSq4kI4907C0R63uSiAZVlDIYE12ZPFQJC2a+lSGEpDYK/uvHk+4JZD8TlMQvFu4av7H3dAUYG+MHRFN4D6WWq1WBaxIx4y3NgRhQR35e1VtoouKcVODIdSxcEyCm3fsjwXQWOh6wComm4gKwxiLEuQDpEsBSPabDBlOU/pehg3AFqB8ydiLH5UPHJaU8ro+GVgoIgy3ohBg91TvzXDi87tWdcPKPpiu90WzvXz627fm12d09VmE/wRrGq+kWBW9Qds++2TeKx2u2+v1+I+VJSsru7L7D/aQjND2Tndm33/9LR/ZLvn3et1xRy8Ksvb++8Z/NAeGFAQsPaEYMS/bPf8re45pbdlef9dlvFdAAD6UXxo3rw9nn1g2Dh13zvXwv3y6eVhfXYu9MLYeZfE+rE/I+g34kVMmAn7Xy9ZfIlG3XHPTOM4ToIkWAoECWF50W4f99huH7ccI8XIHsqXXz8zXPH0wpP3ANkeMk3TELcSAKCpJ9dSMyAcC4OJw7En4w7Lf8qHnwy5l0zcxOBv3QnGO4ZrNg7Uxd2PLNvPpn0vfNqVlr88zoN6OX7rczJVIrzziTR2sG5NV237hKBp6MyZrryfyvV8huNU3utCnU6fQxJgiIBJZcr3ytRNVibdRd6hAkIbmVS2psnxxx300eGn+W/EhlA1DSfWDFVJzqMXykz8GTuXKrNHmLSn4uymSGNvurlqDslLu4LzuhPWNJxcP1VH4dg8YktrW9FyJESTDlftYClG+OmemFISesbkxEE/XCbJxX5THVZVE8xcEA++fCpUX/jCF6ZCk4pnmBBCJAGhEF6xt4FpQ8F6vyacSf/fVUHsWb4dRnI3SOIDErkuyC3S+/APz29lV3xadac1jgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwMDAwMEBQUHCw8CBzYNExgOGB4QGiARGiEEBnwbHAIBFV8VIy0WJTEBBrQEMVUcLTggNUQDOIIJFdknP1BNSAEtS181V24EQuo4X3s8ZoI/aohCb48EcvVHd5ouc/BOhKkBnv9Si7KWjQFNl9teoM0kvv9jqdjVwAFf9/+k5P7//gH/+f7B5wpeAAAAQHRSTlMACRUkMzxKWWNuma//fYqk0Ny8xvLl/v/P/t20//7//+v/////////////////////////////////////////rW5rhAAAA4RJREFUWIXtV2lzozgQBYRB4jSXbOWwkgjCiDOMN14mmWT+/78ayeDYzmQzULUf86psXC73Ux/qfm1F+cL/B8P1wyhaX1zc3NxcrEPfQwttjr1qJ0mMMSGEsjTnRVXkjCY20ue5AQxv6UhgyrumqQVLYpvqPBINDhx5VxVF29U8JfZiHoUCQkFAUiw8YbVwhLMEzXNDTZwDaF0UdVPl2JtDAZwj8kbYV02dY3c6ge651sEJ3uYprwtJERuz4lhEe4KUSBYRSNG2xJzFoNhvcZCqEj7k/jx7BR0zwUUaKJppr/gnqawbBhVVm1VN97QWXW4p5mIBZjkQHa9D0SSq4kI4907C0R63uSiAZVlDIYE12ZPFQJC2a+lSGEpDYK/uvHk+4JZD8TlMQvFu4av7H3dAUYG+MHRFN4D6WWq1WBaxIx4y3NgRhQR35e1VtoouKcVODIdSxcEyCm3fsjwXQWOh6wComm4gKwxiLEuQDpEsBSPabDBlOU/pehg3AFqB8ydiLH5UPHJaU8ro+GVgoIgy3ohBg91TvzXDi87tWdcPKPpiu90WzvXz627fm12d09VmE/wRrGq+kWBW9Qds++2TeKx2u2+v1+I+VJSsru7L7D/aQjND2Tndm33/9LR/ZLvn3et1xRy8Ksvb++8Z/NAeGFAQsPaEYMS/bPf8re45pbdlef9dlvFdAAD6UXxo3rw9nn1g2Dh13zvXwv3y6eVhfXYu9MLYeZfE+rE/I+g34kVMmAn7Xy9ZfIlG3XHPTOM4ToIkWAoECWF50W4f99huH7ccI8XIHsqXXz8zXPH0wpP3ANkeMk3TELcSAKCpJ9dSMyAcC4OJw7En4w7Lf8qHnwy5l0zcxOBv3QnGO4ZrNg7Uxd2PLNvPpn0vfNqVlr88zoN6OX7rczJVIrzziTR2sG5NV237hKBp6MyZrryfyvV8huNU3utCnU6fQxJgiIBJZcr3ytRNVibdRd6hAkIbmVS2psnxxx300eGn+W/EhlA1DSfWDFVJzqMXykz8GTuXKrNHmLSn4uymSGNvurlqDslLu4LzuhPWNJxcP1VH4dg8YktrW9FyJESTDlftYClG+OmemFISesbkxEE/XCbJxX5THVZVE8xcEA++fCpUX/jCF6ZCk4pnmBBCJAGhEF6xt4FpQ8F6vyacSf/fVUHsWb4dRnI3SOIDErkuyC3S+/APz29lV3xadac1jgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "4",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "4",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "4",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "2",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "密室スイート客室",
      baseHp: 1400000,
      width: 4200,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 5400,
            actualDps: 3446.82,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 56250,
            actualDps: 41158.5,
            magnification: "1500%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "178",
          enemyName: "エリザベス56世",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAQECAQEDAwMDAwIFAgIEBAQFBQUFBQUHBwcHBwcHCAgICAgOCQkLCwsLDgw0AQETFxhIAQIXFxY6Dg0aHx8fICEcJiUhKisrKimDCAgtODc3NzgtPjw4OTm+BQUOZA01RkRGRkY8VlM+XFlVVVVIbGdpaWlqampQeXUDvgN9fX1ejomMjIxpoJtwrKabm5t5ubKCx8Gzs7OL1s2T4tnLy8ub7uTb29uf9+yh/u7q6ur9/f3///93+w7DAAAAQHRSTlMAChEaJakyiJs9XE3HeOJpudOeiMX//5fvqcL/9eN/z/7///f/4f7+/8j+/f///vv+/v/+//3///3///////8AXHi9tAAABQpJREFUWIWlV4l2okoQDYssoqJjCFsMnbAGHtgIAi3o/P9fvWpMZsaMGB0rJyYHum5X3bpV3T78vNMevjVeVfnvVw0b++P5+Qd3D8Dj6+ujcAcAI94ZwQOnzuV7/AFBvCcDMGZ6ZwQPqsIwd+zPcKK+nI5Vhf0nf2GpjwwvtA1jJgn/EAcnGUjT7DCET/f9Rb4RghF0A9yRbaDNJkTp9n18EwKrvrua5q292WTmbZsYpc37LQVhVD+2bbRd2yiOUbjZxmizXt4QAm+BW5huYzvdbGIUb9fIi28BUFbg5cWb2I7TNEVhs7FtV70BYGyEdoy8TQoANIcmte3VLRwoABDaXhpqyPM8IMLTtMUnAMNf1FUfJzdHUEGb/iKENNvWNO35B/VjOFkcXeowdjqmE0CZgQi0J9sDFFtDb2+2/fzIweaq6bujSxHwi5UJomNHAPD0+opQmALI239vxqPKsKqVFDXWL7HJmThzpgI3XhghADzZ8ToFAt5CS2ZAHQVpu8K8FAEzzUiZOLoiizPt6UmjHCAgBC1kZuyXHdhlgIdx0rZtlVkyb9Fe8oBHqEMah6bqFNS/zc1Lc5JZZi1dhU1hBNyjNPQ8UAKIMV5h+qbL3YuSFJw+zLZOpLlmp+vQQ7SetK0j0r/B8+HDhmEgz35Z11X+3AApQkt4gIGCKMKERpCvlgMUsLK61PW5mx0R2sIwQIEoCKIkKyrSkjLLoAjYOi8jbmz6CS5yHCQfIZAswHlRVnUNO8NPHiRZkBXB7HdTccpYOebDKKaf1zTCKiq7D6uTrH/UFrimL/IaQ1vMVeGPXaeSRBG4qYP7tVDkoOraDwRy9CeBhgEA11mU5+5c4dlfITCCuJBkVtD98tOpDKKPFNqPv8A7japtAZtgL/At/eVFOUqBl0RpMhLNrP7079oyKD9IzD8f9lBtm2UER0VdJOumWet9IookiOp4lpFf/rA46vUCewEpv5/TQMo6ytsi2h4Oh/3apLnLI1GSlwk5WQdU53WdBUGQ1d2fRiC6ugzW+wNFSKkeGWUsKH51sqwlRRZFSVTVVdV2p1ZmVRTvD4Cw3zfOsRqcmX9dBjrGSfn14bEs2GsOTbo7bNNdqvYAsk/+AqBLz/mDNIJ0v4/t5rCxt1uzB1DxOf8hK8PmsLXhYxemjdMrQS9u8O8wMLDb7oDEptn5PQXW2WSHLE/7EvS2W/VScqrv3f5IIaa775v1dn9orFsB2o7kaAM5rK2ltQYx3gjQdqCuJEjX/lJg+KVj9jpgzWtJbLsqScrSnej9jYnlj+0EU/zaMtaRHSWeYY2mJyNNvjKHFgZUlMHIihandx12eWUIpILRRgrf/HpXEpyrpdRWiaP+dajAIL+yEAS70rnLHrtMBlrni5VodP5IOdfR56xejc/6w2S7LonSGjrT4E7Q0ql52Z8k06FDlVHpKK9z0g1gHKfswJlGrT+S6wjX5wDgVGtJlSeGOHyqszqGdQVIraiqk2FO/62zBE7YbKUM+lMaCdUJXlmOGyVJludFUeR53s/1ajV3C1I5l76D8sfBVK8UZYVxEgWGZVmmucA9+yZtmNK64mJTOQJnFS0hmSTwPMeq/dNC56Dpv7layX4FfrXDAxQhJPmc+XVd1XjJvuSk0IcBOEEeTyLK1GI6HblJELkjkZpkJIHtuiNVcgN3pMjyAA3yVBRHk/l8slhMJovZqS3gIbyazwFzetrK/wPXnK4uaxIRdwAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 60000,
            ap: 250,
            dps: 131.58,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 57,
            foreswing: 12,
            backswing: 10,
            tba: 23
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 6000,
            actualDps: 3157.92,
            magnification: "2400%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "93.3-100.0s",
            delayFrames: "2,800-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 56250,
            actualDps: 41158.5,
            magnification: "1500%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 4000,
            dps: 2105.26,
            speed: 3,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 57,
            foreswing: 28,
            backswing: 5,
            tba: 15
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 16000,
            actualDps: 8421.04,
            magnification: "400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            },
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "178",
          enemyName: "エリザベス56世",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 60000,
            ap: 250,
            dps: 131.58,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 57,
            foreswing: 12,
            backswing: 10,
            tba: 23
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 6000,
            actualDps: 3157.92,
            magnification: "2400%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "698",
          enemyName: "ダ・チョー老",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQIBAQIBAQEBAQECAQICAgMCAgIDAgQDAwQDAwMFAwcIBQsaECIbDyQbECUaGhoAHHAnHDApGzUzHUYpKSkpKSgzKTwMJ5dBJVlGL1Y8Oz4VQ35TLG1iOINPT08YPepyQJZcXFxjYGd/SKaISLKEUbIWee2QUsFycnKYWMyhX9iAhXupaOazbPC5cfuYmJeph8rAd/+koqbNff/Whf+vrq9Tz/7AwMDP0c7b3Nvo6Ojy8/L////Ez782AAAAQHRSTlMADTTv/yRXZZB6yLJE3J7E/pp7/73i/6pLyf/+2f////3k//+1/P///////v///P////b///////7//v//////orrMpAAABDNJREFUWIWdVw1zokgQBSMiERGzQtYMWcadFSbDIJA06EF0/v+/2gYvm62riyhdlSqrTL/pj9evW0271nRrEQTO6Or//68ZHs/3+4JNB/rrflUVUFQgrGEAFssyyAirgOqDALz2+bB5ZSAWy4l9OwiFrNiTXSJyKiQNFzcDrLMcIPcp0DimzLVvBnBkBTnsQfj+eL40bvbXRhHEb2/Znj/vms2gMjqZbOq38vCulAqGAGhOgq7ofqxVMghAW6nOmkM9HwZgb8pTi1AfDgPZaJZKdRBqNQzA8t+b3RGrsJ0MA3Do9niqlUrMYf7aCkhyqNX75jY364N2eohcnh9VWV4Tga4ZltnJj4tNM1sQm8YV09eNavpLYDjBZlvXpYdDE0hD64bHYjEEqGyNWvb5m8l7162T2s6tBawdaU4MzUvTwmmBNt5Xw2R1yRmTLTofGnUidS3SCDK/8F3NiADE5CPB/7fHZ/zG3NbtvMxq1fjx7hmVDPCPagsACC/MoY7gD6dAM/D5UjWGfVKb+zQNeZUCFBBMOerBJSHS3bVhNGrlKXW3VVvtQamJybPWOSsKIC5I4Bf7Zx9ep3NMXP2yS/VoL+rDvcerDIq8A0lTCf5lJcJxLctaHW3tpO4oI24k/ALSIhdZlecgs4sZtElg9Oq1VYvdlsYijoWgBFBMc85SAbKQfQTS57vkgCxxQpfEaJEQY9LGD5yLTOy9Hn/7MSmT48lcxsynEQKIyI0qKNCqgnPJL2u5sW7bv1O1E3LSumMErsDeI4Iscv/ph3P5/enz7pe/TdTBWPph+3wcM8KwlizPOPe/vbz06BhyzN6q1+NBMzlhuH4wCsGY66bIAj5+evmnJwK0rSrvm/dJyJkfkjaKGLdgl0T47efLj9519KB2tpaoiUMjN4xEVwaSZVykED39fOpXkU2CAmKeXg2PdlWIopT6lIQuB+o+zXr9R+OuTY/1d50wnzAkA2GMSRaCYFL2r4LRv22efjcE5JTRSNAwjSXhe1lVUX8En2amFRauwl1OhIxwHqSo7vp78GlTfDdlEvUjEqHrQ7a00tUtK92r0J8V4I9DwjjP8XGnbw7+NotjArJKsYaYPPU7DTauj8Am7fxV1EURzagzufWydCi655FLKogW09uPIUtCJcjMtiPIb+ncZwA5pLP2XQ+yQUsYKyA6RgWQD7pDDPoHoBgGEMFZO4OBKRgMztq3gh4N/MJ0Csw4A9BBv07wDDlv0MXFTXoBIIB192EJt9D/LwvgzJ9lMfAYDOBM/mXee8h8AZCeu7fMBv4++wBYZQMP4vDMoxGDYRHYXHb8MSOggy5i5+MQ8kCG1uR2LmHofDXSWyaKUObR4lY2IRMp7oS1dc+BIa3d2Wh0vR5O7sdjH6owQ8cxfhz/sbvZVcmMLGc2W2zIfH73YXO0+9lsan2ljr8BM+OhT8wz8gkAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 1600000,
            ap: 23000,
            dps: 40588.24,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 23000,
            actualDps: 40588.24,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            },
            "toxic": {
                chance: 20,
                damage: 20
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "求婚前夜の凪",
      baseHp: 1200000,
      width: 4200,
      enemyLimit: 20,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "680",
          enemyName: "天使メガミエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 650000,
            ap: 5500,
            dps: 1269.23,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 130,
            foreswing: 11,
            backswing: 9,
            tba: 60
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 5500,
            actualDps: 1269.23,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 420,
                ld_range: [420, 770]
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "615",
          enemyName: "大天使チビネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUNDA0ZGBkZGRkiIiIoKCgoKCgpKSkzMzM3NzdKSkpOTk5WVlZ0dHSCgoKWlpaoqKjcvBDcvA/cvRHdvQ/dvQ7evhDevxPgwBq4uLjhwh7jwxzjwx7jwyTlxB/mxy/nyDPoyzbu0U7Ly8vv01Dz12H12mnc3Nz54YHl5eX96Jvv7+/19fX7+/v///9ZamMEAAAAQHRSTlMABxMtOEVod9ZZiyGAmer/pPe3xf+t0P+64///2vf+/v//ByEVQDdLXW7/fZmPhqG3qsjS/+Pr9f/6////////a1ZfFAAAAudJREFUWIXtV9l2qjAUdcIBpXFAEWLCIE44tFZqcyOQ//+rGxCs1nY18b7ch26XrsTF3tk55+RES6Vv4Hm+Pz3D933P++65r8nTxWq33TxzbNLPzXa7Xs6moiLefHN4e31er5aLxWw+my0Wy9V2z79aT8UE/JfT6WXh36znTZevp9NWzIO3O57+HPY77mA255hxB7v94c/puBLchD9b7w/H9/f34/GN45gND/v1XCKS3nTO112tM6y4l7lwCP9PKP2BWpHktJX2ZVxFNHa7cvwGwqZymQSMMSRloYYYiwbFrOVwAbMsI1DnayajYlYeJRGqy/BLCmYsvghUECOaFL9UViFhgZpPOi4jqpwA92Az5iilal3rmzB+QKA0SSM/wG5IEx6PaNKRLYRxwmkRJ+dwP9IqBpWwG/BEtGT4yuRq9VwCVsX5bfOOzxjpiwv0yR2dA9eEN4Dvl+fFGQqXk1YYiMJiJxAQFg9+pp4xYheak48cyKNiCvIrkw8B93ofwgKoYNAwS2DxHv3MzVA2P0WQulEWSOG21L3KYuJgB7t26sAWrsXrNNKABmlVJYyOxLuSFtyXUYQkSrncv1Mgcsex3MHh1WlIiDOUawiVVtPAeShJWkZP9VpNOAStwXDi0ihOMg/EiFmSRIFjCXtouYX7OAgptuw4m4zF/U/OlceBgaUb0LYpY4HE1VBDNK9epAMAHGy5LBrJRLE6tEnCYhamfOAi2wlN4W6SS3TGOAqtTAAAjLT2z5xPqNjUAgbQLUMHqClN5x4cRrkDC/IXEu5F1wI2v050oOsWBFDy90WGtK0QgwcAQmDI342lrDMSC0DDsIAudSsV6AQMQ2jzROg9+RxwVMyYsgjrABJT9m4+Q0FpOYYgZI8kIUUL8WZKUSJzK96iNnZiRmP6sEDaG3AYMyR5EG5dNIaTUeMfBH7xi8dRrtSUer2jalq329U0tVFvKVWZPy1VddB86vVAgV7vqdn/qi39BRfSoyqQRkI0AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 9000,
            actualDps: 1698.12,
            magnification: "200%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "680",
          enemyName: "天使メガミエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 650000,
            ap: 5500,
            dps: 1269.23,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 130,
            foreswing: 11,
            backswing: 9,
            tba: 60
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 5500,
            actualDps: 1269.23,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 420,
                ld_range: [420, 770]
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "424",
          enemyName: "オールドリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQHCAcKCgoMCwsIDgoNDQwQEQ0QEg0SFg0YGBcYGxIdHR0dIRgWKBkkJCQpKSknLR8pKyopMiAyPSQ4ODgyPyUyRSk0RSg9PT0/Pz9CQkIxTy9EUjRCVjFOTk5JXDhTU1NWVlZPYjxVaT9ab0ZlbGhqbmVubm5qd2pzc3N5gHiAgICPj4+Pj4+bnJmioqKjo6NN3IekrqixsbG3t7fDw8POzs6Y8bzb29vl5eXv7+/5+fn///98lDUNAAAAQHRSTlMAB7f5nhEf1j1c504tcxiC+kFiklKuz3C//vE0BITc/u9o/saT////1f+175n/0N77/tfo/vzy/vv+//7/////zgtcqQAABGNJREFUWIWlV2t3okgQtTNCMFGJijomazAtzStRIETo3n79/3811Ti7m50zGGHKc+QL93q7qrpuORhcH7aDBqjD+78EcoJ4vt6uZ1Y/vOXFeZ5TSst03Ov3X7JaSMVwoXg6Rt1PMjsyoZQuvvmSF1n69tKVwNnGhdSabQ4ClLDTviPemhwrBgQKwJTlcdA5D+O3mktg0LouDovxtCt+MJgG2bE2BJJns+5wCMsJGBNai3Lds5vQ+CUWmqde/260Uimp1xveEPDq6Q8IpkfOyj8hGGeCZe0dgJ6e4KJZVnuOZqUSR7tV38t7GUzRKAj+u7D2/f/u7vykRNp2m6dBRRl7s+2UltufL42XO9dC/yLQgmoRtAi0Ako54yy1t1SVptWQNV5u8M6dDP8RbR+lZusWAeNFXAnFOQ3mVFVPyB4tvq8efUIe/d39z3e8Sp+5fxvInqdMSVUtK1l67mrnY0xCCOwvvZndiBSXcmgkbkshZX7ir7cPG0xISMIoDAk+5a+TQVMDydpS8FOFd2Sc57nvAxzQECHxCWeVZ9oQLkI1v4ifTr24pslmswH95ptEeVGEXNItQmvIwMU2sufB8f09SwBPjHA4vr+JGK9zpmX5ss6kFrT9BNZ8X3GllKSABOm+f87ggQvGpVa0ggcr26+iHXMhIEn1IQrNZxOZb3zICw6l0YrDKGR1axuaJoEXyvj1FGKTed8/p5ArYWaploLXdZ63ddHA3FRWpfOUcwKnT4rEN1UIE1pzZQahVvUBh/sLTTDdH9fTNfTQM6g/naKNb3rAJ0UzibWmUXHaTdrxA8ud/WWlXKTLMKxzH/JnTpLU59/XPPoQf8eXzMDcObTOWDAh4SExjRRGOKFgZ6Ixg/Dj4yP40peRl26d54icmhSAgprxohFRRx8f8TV2YI8tFyeihj6EMxDIJmFQRM3J4fViF38KZ0UKfsBNFTHGByhjLVjOyivtELmPflQUuMki1CGvBU+4oEX7JPiFYAElwCeoeuibjo5yVhAm6D690lDRZAc/LkUCNeQsjAgGlqLK3PuvseewR+4qgbQVHIy0SURS72EmdXBE5GRN/yhNQUFy4llXP5yVZ7xIopwKduzqxyjgTf+KopaKl53XGeSVsI9pWRdMsiyYdV0HrDn4h5Y0P4H47bjzNoHcHAymShcgI+sON5MF/Cv1bDuu+b7PWgzjX+Wz5inSPtsQWhY8tpt1Rl2YoRcIAq4yIEBvPQkGL1wb/0GBkL2OYAjezwSty8QXBKw5wgA2jgs2cCE8Jpuzb6PXfjullxeNdJfsnF4E9zvfNU83fO7158gQmPmLFuHq0jrTHqPdbgQPa0l6Ekzwoxl/9qqnAuTiR5M8Zxftrp6jn8P6HjYKpuCy350efxDtVUQAaKpA8PNy4XSlQBOYxCt34kzAEEiEnz1k4kq05YwmQx+cBONnWDY3m4dvD7c3N8Ph0J2MnCuswRne3N7dPfqAfHj49inu7m5vhqPf3e4fmOi93AicnjYAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 1360000,
            ap: 9000,
            dps: 15882.35,
            speed: 32,
            range: 310,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1360000,
            actualAp: 9000,
            actualDps: 15882.35,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "423",
          enemyName: "古我王",
          icon: "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",
          traits: ["浮", "古"],
          baseStats: {
            hp: 1111111,
            ap: 6000,
            dps: 4390.24,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 41,
            foreswing: 24,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1111111,
            actualAp: 6000,
            actualDps: 4390.24,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "オートマチック危機回避",
      baseHp: 1500000,
      width: 3800,
      enemyLimit: 20,
      requiredCost: 220,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-attacks": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "044",
          enemyName: "ダディ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsLCwsREREWFhYXFxcaGhoaGhobGxscHBweHh4kJCQlJSUmJiYnJycrKyssLCwuLi4yMjI1NTU4ODg8PDxBQUFBQUFHR0dISEhKSkpRUVFWVlZXV1djY2NkZGRtbW1xcXF8fHyHh4eSkpKfn5+vr6+9vb3MzMzR0dHd3d0GQiOiAAAAQHRSTlMABw4W5v8f2i8+VyVIbIPwyzdReJBhp7acxP907s+F3fjo/rip7//40f7pwP7/g//Rq//c/+7//v7+////////DzxqswAABGpJREFUWIWdVml3okgUZTEGBVwQAbcgKGCZYspGZKkq4v//V1MFSWY67WmQ98EYjvdy3/4EobsNDYl9ik8gfphhDwVBGkt98eLkdS4II87Sz6TDVhPEN87Sz9TTXheHK0/rSzC6RqZoeIHRl2CTA0s2QW8C6ViClbaDQV8XlCsGnh3FO7UfXtwUONzvY+D0rAP5QHDoAxSM++E5QRn6MHaVngSSgwt/Hfp9QyDITp6tQxBuJ/0YxMU2zUAcxyBaGX0aUtlBxC0Gvu/qzydCMqOY4yEALBDe85nQ3BqPGByEoW8+64TkANR44PsQxaH17EwwvEYAQkmS5pjkB+OpMAztTwFpSSitPj4qcjuO5M5+iHrQ4HP68WVVebZNraMMZdcISCkh1TdF4e9dsw0qLxVRkD9TiHCF04ywt9cEBIT+to1AWrz/oznbpoYS8lHRPCloQ1GlfthKIMi/inORhjFiGrKKFiUlWVrSWgP2t1YrXt2c2YtzABhBiS+bzfsN45xlEhfZxdHb+kpaHG6E5h93jEKYlmdDFIfj47XERZrA2ahDDobGKSvK+/1eFXGSDHSZqxq9vV+vl8O4UxmoM+bB/YPQOy1ifzupXyrKqjrsVkasCcOE3nGRV0wFTp+dZ6LusQmCcFEVFcMTenpyL2ouZAmEYZ6T+x2XRZ78Up5oZHG+4iUcxyEAOb0TXAaX62HUFS4p+qppARhCCGCG89xR52PtbxLE/9BLy43g1xBgMmCSoWDTol8zR/wXkjp2dsH/0LVlNJvpfycQzf3OeIzmrYQTu61ytV3kWg/R9TSIW68j0XDBQ3TSBLN9q4lm+BDPjAeyQx0u94/wmJKSy+iwVxfRQwI2PBAqbi1JqF0AtQvx744UVZWjJDvKrQIku4kh/FykzOpZRkmCki6NpOyaV4efewQCXoMoxTmCnfbh+HODsQVYe8GJgB+z+AF/2+W605skxP7aZ8a2cMi+81Zi/1ntEWBJ2DcxXK9BDGG4HuwRHKxW9syH3Y6z5bR2Hqx9PkiilblHYCHL8iRCXpdhJpv7GrhlNwCCgaMYAYr4ZaxHyO1wWrEJyIHebMtYwG4pCyMP1ZfxOIhPHU6KEbuj4mi3YIMIBtacZW3uxQEfYUYQ79oJZIsBPWc0idjr6xUiKG7s8fLRGEFrEqRFwHUrb2cY2KOmaFS36UCmwG7bY0MOtObsHs2DyZfcuZu47Lv4lpeHFgLxLSuDiSyoF1rY32qXN3KqCTBpI5COhPA4sb/Y+S5640YvPH3Lgr63KdgUtH7JMidHdfhJMb9WF+6OdqPvcguDcqUnbSSz3+Jgt1o0XjCHrvOhxIjI2Tnqf82kciHIO1vG8kZxkngTjdv4RNDqZI2NM86TdLt83NCirBj6xDlTmqXhdgDynLXRtLF1idnD6WCdkgy+2BN9PB/+waKas8H05WWdpOySfvlhoMjC+uG6/pwOZtYfXSWq2nJiWvZs9vo64Db93epnr6+zmW2ZE91QfgTzXxNJ1K0TOnryAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 800000,
            ap: 5500,
            dps: 3928.57,
            speed: 3,
            range: 172,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 11000,
            actualDps: 7857.14,
            magnification: "200%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "513",
          enemyName: "天使ドーヴエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQEBAQECAgIDAwMFBQUcHBwfHx86MAc0NDRUVFRyYQpxcXGdhw2CgoKZmZmsrKzYtwbdvA3dvhLjwxu+vr7mxyvyzxTQ0NDx1lv/3hXe3t7544jy8fD////////Df+ZLAAAAIHRSTlMAMfpsupL+tADU8wn+AP///w02AFv/qgD/8gD///8A/1c6UJIAAAPUSURBVFiFnZaLdqMgEIZBRAuZAklDQsOyvP9b7g/marTSndMmR3Q+fuYW2d+rMdjH+WvRDnd7Wrz5/QzYH46nuR33+2bA4fT9DY/jTcDxCB6WDmuAy2z/75xO+2K3BdjhVBbXADMJx+8/f4oGiKh2Kvtj6biigO3mhH05xMxOh9UYFMJbCorqenpE4ni4n2YF8K5hsst+3F0ul/3XY4MVwCLhfPlkndh97djH5/m8AVg4xeW8Y3wQuNdzpPqyAWBF64vtPxgTWjJQOO7vL1XFOoDtPl9sV9ZG0+PDFQD7xKHO5x8AS6bdwBhlMV19wH4H4MZrxvwNUOx3AOG8YSIH/r8AFa2TNuunpVYAhyEE0RqVs/wtgI9knTNaqGCVdgQUF4I3A6TJk7nBAOQsSMZ7p0UbQIYcYiqARJqch5ZB12srWgDcZRuuErK3ZK11AKaCUC2AMTt/94eA24UHQjcBkr352yFZO6nHRU666QjyumdKkUzI+Msp5iKrMYicJkCI3mbjUo6GkIFB961p5MqUTaPLxkcUhNUGgfRO1UpoqQMudcwBGUhW3eMJMx3GS2MpC211kY3IkbkThmHoWwBi1EIopL9GA9XkrgDq9NASA0qBIMDX/AWXA5G7SWhRIGP28EPsjMtOcEnBGbLeezM2xUDnkBBDF4K21E0RQT+Q7tqywD2qNiANKaGMnKrDgI9aydrP2wBh4RmLdyptGbx8ud0SAzRfjjHFepKYjfglgGllPToAKgomB7kBEHKUT2MX7Rj1QIFKO5RgmI0j9OjeoB6EPpbqMXqwyD5OkcefARhgpX+vT4mR4rXswCBDyRn+M0BnR2Ya/Wgil58tWhrFq/8bAFk3GFy551LZmOeWBGObAKKQ9ZJ3AcgtQClcMtouebcBBCIYF3evNm4CmCQf0pp/3FZQcif9GkDN/ZdLWbwqSPdL85aEZcBYn77/BllMQVfCars3/2WAnvzourMDoIxDo98isAKY5q7vULsGjQgFAXNRG88bAUNNo+lsxOAbpDDZjlKobBsBvAJcR7e4UW1hnU0jQBVHEuXLj/zuqmaTYBWAMY6BUHNJ4hpUqlxqAnBbdePF5D5WdO1u9fJ6twrgOkc4InDmnjRdK7ANIDBQZHmryPSImCoATk0Aqv5MPjcuXIuCsSkG03ERwfgQwKfF13fkNcB1Gx58/5jtMtsCCKYbN0Yank16wLsLfs8sqV5Kif++j6bHNwrTDHMR74CMp/pOR690dzNnrem6AXe6XoqXwfwK6Ds0kB66uSE1+nVFrCngokju+zfGZOUkgi8o+Ad4ofFsx0cqbAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1800000,
            ap: 23000,
            dps: 16428.57,
            speed: 8,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 23000,
            actualDps: 16428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "surge": {
                chance: 33,
                distance_start: 150,
                distance_end: 350,
                level: 3
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "5",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "682",
          enemyName: "ドヴェルダーク",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 2000000,
            ap: 13000,
            dps: 8297.87,
            speed: 12,
            range: 200,
            rangeType: "範囲",
            kbLevel: 6,
            money: 2000,
            freq: 47,
            foreswing: 30,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 13000,
            actualDps: 8297.87,
            magnification: "100%",
            count: "1",
            spawnTime: "143.3s",
            spawnTimeFrames: "4,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-250, 350]
            },
            "mini-wave": {
                chance: 33,
                level: 3
            },
            "weaken": {
                chance: 100,
                power: 60,
                duration_f: 25,
                duration_s: 0.83
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "176",
          enemyName: "破壊生物クオリネン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEDAwMDAwMEBAQFBQUFBgYGBgcHCAgHCAkICgkICgoICgoHDQwQGRgSGRkPHB4WIB4XJCMaJyQbJyYcKigdLiwfMC0fMS4hMC8iNTIoOTcoPjwoPzsoPzswREIvS0YzT0s0Tko5VlJCXltAZV9Ga2VKcmxKcmxMeHBQfXdTgHhbjoZelIxglItflo1nophsqJ5ytKl2uKx3uq+AyLyDz8KG0MOL2c2R49WY7d6e+Oqh/u5eTFX/AAAAQHRSTlMAB2/n0hBJGP5W9GQ1IIOaK7b/CUPlGf9Klac6/2X/U8Pa/4dEmWX/qtuN88HR/+Gq/tDg+8nx/v3i/f7//v//7y6J+gAAAqVJREFUWIXtlttyqjAUhqEVjafWndriAYOl1XgiNJoNaSDJ+7/VDqjTXnRrSW/7DzMi4/+5wjokjvN/eU9u9fm0nF741QX/ah9WN0u+82wArb1YHgHpxgrgjJJNuQZ3kwys/I63O0wHo3CWxC07gLtg60PKtnj96toCZE6jyCeHpRVglirFIoQM4e+Thb8fKy2jCGKMImETwjDVuigBUYSLjcVbCLnWkuIgiCDJVxaAMgLJMIYAEj62ALR2hdaCYgBwTrv1/SaEOFcGEQGar2yy4Di9RZJrnSFm52+178bPTGmVi0m7fjF73fmWidwsQmacRH96Nf29CS3MCzBSHGGR0edmrTyMYn60GwDDiOYkWw9r+Kd7qc/+DJti5Izk8ei7MbijWJ7/X+cIAAgjgblMFqO+dx3iDl4OH37NgAEgmBFi0pEmu9Vlt9fr3q/Fh10rYgAAQZLh6qmMLwOaz9tM6k9+RSAECAVYYGUIKp1dBrQmZeWczOVlIoAQGQlivsvD+Np8HkyS4rwCyblSFEIfRSjgtCj4W3h9vnvDRZyaChTpfrU1q+G+Ifh+kM0XL+H3WsLtD2fLZThteWOhlfD9CsBCi4nQWyslgjIEENE6hXiWN5dmKvoQAJ+s+xaA/tr0Igl8AAib2Owtg6TsJeQDyLMr+f9aUzNWNccIYHmoOw8qhWnZjQRBqnZW++uMl+0ocMByy82RV+1AqbLaGw0gKwGS5HJj5Xfa9NRS73anrLISj3359mAH8Oaiauv3Vzu/497holBK2uztRw0fzXyxD8BxHsYRVbY5rDR99BmzK6JzCAB2mj8AOIMGaFgeM0+6AffWOTiFYHW6+ZB7ZzUJPhN+6P/Vr37V6jXb3ZtK3XazV3useHeN204HVOp0bhv3XxP+Ac9EdtLreOiHAAAAAElFTkSuQmCC",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 135.48,
            speed: 3,
            range: 760,
            rangeType: "範囲",
            kbLevel: 8,
            money: 5000,
            freq: 310,
            foreswing: 71,
            backswing: 74,
            tba: 120
          },
          stageStats: {
            actualHp: 1920000,
            actualAp: 22400,
            actualDps: 2167.68,
            magnification: "1600%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 20,
                power: 300,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "隊列乱すパイレーツ",
      baseHp: 1800000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "309",
          enemyName: "ヒツギイヌ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 650,
            dps: 291.04,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 2600,
            actualDps: 1164.16,
            magnification: "400%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 60,
                duration_s: 2.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "692",
          enemyName: "ドクターK.O.",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQECAQELBAIIBwgaCQAiCwABBlwWHiM7EwE8FQATJy8CC7BRGwEbMDxmIgAMLp2TFQBFNy17KgCSMgDBIwAUQOGrOQFTV1m8PwDxLACVVDHKQwANaO7cSwD8QgDqTwJ7d3UQkvr2UwH+VQD/WwBKiO+BiI3/YwD/bwPCgGKSl5umo6L+ikDdo4azub7wsIzJycn8wZ/d5On+3MCo/v/58/D///9+dcxtAAAAQHRSTlMAEStEVWWH/3abxuix0fz71/7mrv///P7///z/////////////////////////////////////////////////vZFNGAAABTpJREFUWIWlV21X4jwQtaWl9IVK3S1RUk2DsYRNsiRQwAIP/f//6plWd1dF3OrOBznH07lzZ3IzM7m46G5W4H7i63f8w8T5N/8CwY9tfdmfaf+iN0zsLwIEmSF+hMXV19x7ATI6ToTJvkbAR0RoFhe6iL7kHxCtlWJMofDTJbT9UT+61xJMKc2Cz/pb3nZfLjRXsjWN/U/WwF/V8205XzYEtAISWRIMumPYo0leHyflciakIilVDUqRpVfRoFstwmNdrsrtZgolVJ7nqSYTrU02uQ+7+Dvzuqy21b6Qm5lUyENPlVDqZnIfd7lXzmSxnZf1blktOZeKtwSkYvdrcrMedQCwwqqal/tytdgtWRO5qSQksDoeHo95lyoMqv1+tV9Vi31520bXnGA8qRub9zoA2JNtntdVta/zFkBnoe86o+2qXM27abLnD6JyPi7z9Mk/aryswaDvON017To9N5SNmHXS2emtXbUFVF/sBUA6aTJQcvhVgB7W/wbgZy2AOAvQ/0ufiZngoENxrhtYycfl9akWAlNNzgG46EMGdtp0ApKp7NxnEep/BBDyBoARRc8AWAn+6G5GVDcFkEyxBsA+HW82wh80KRcZxVLVYEBPd6Lr8cnHLkbnhW0ngimZiCzVuvDd64cf1yf5+uS8RK1QaMJ1SoGE4sHl3Y+fD+O34QJ2HiCgGgSkUSZT+PW+3/2o/3t42wmG/CxAkDHejgOsUq6Fd333cPw5essglmd0ZAXUSNECIJ1yk11ef7/7eX1yDLFG755CDzaC54GUIYUoBwKQw2k3DTUZvBO+D6RhHKhmrhKkUhp/vwMG16e9MJTidEy4ISqUwmmaIsxNkeoU8eQSzDsNFlGD3kjRDnDBYZxRymiWJohiqCAx0JIxOdXzABvpvSLW81jLvhBtChzHsTDMo8ZoU5zK3o6VLuI/zOx+zE0zAzLCRDuLIHwChfBubmYGBaeyDQutJYoaEpbtRjEWslCCYKKVeDoGQzwkb5P54v42XY5dfzQZvVwUegkQ1hSFw+FVCskzQbmkGde8kM/zVCZeujzWde7dHPZ5VdfH7eRFNX1sFIxtSQiDVSijHCshoAMUCiCelRCP6329z71Z/cvyFwgRbvYPCUUnGdwdCjenoLQoKGA8aTHzqmO5263zdDFfbMF9v69fXux+TKDcQII385elmlOhoAoCGkl7G4i32D5OZ+vjOM/zyaSq92Zd+i+Pwo8x+ACG4jRNDfQPQuEQJWTVMkjRuNLTwxP7hXdvZrPNa1Vbrj9MQHlxEMQYnJvSSShtex90QszteLf7lf/Wm+rZenxyoJZtN9v4VYwhOOQPhwm0mgxiDWUYV8/+m/U80W8ZvFIiMQUm4Mlo05KBAMg99v2q3u2Ox8NmNl2Pb/Tm/DTox7pphZI3ekwKzZCIcWZ/O5oprFtiJmfr/GaXf9CL/VSb5lQ4RqBiiJ5kOriYbKZSCrhkCgCWrw7hlEOSgWGcsQRuswf9KLUuRpsZ0II5WUzXef6XgWr3A89LMEkwPBQ8bSjE66/WU8YopWS2CTssinbPcZxQGxwSI5ueY40P+pZQejs95F2WtMYcYlgw1CZtHXr54VHPxPow/3CavrTY8GBADHq+OM5otX3clPk7TfR9G1AdWkOd/S64NfC/Rf3uC39ssG1z/emHyh8CZmiFOA1gt+z3P//wtWLDwqssI0WWQHdAXSv/2yJuOG0kaWgKDfn9AfZ+aBs04LpxwUT7Uipi2LOysD8YuI7T6/B8tv3Q+2UxWPP39z+84OUh/g8W0tD6W3YM3wAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 380000,
            ap: 18600,
            dps: 29368.42,
            speed: 28,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 650,
            freq: 19,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 18600,
            actualDps: 29368.42,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "63.3-63.3s",
            delayFrames: "1,900-1,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 500, 5100],
                timings: [2, 4, 8]
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "694",
          enemyName: "テク・ノロ爺",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgECAwMCAwMDAwQDAwMDAwMDAwMDAwMCBAQDBgYECQkECQkFCgoFCwoFCwsGCg8KCgoJDAwIDg0GEA4HEA8IDw8NDQ0ODQoPDw8IExEHFBISEBAIFRIMExIVEgEWEgAMFRQNFxYCCl8KGhYLGhcVFRUUFxcMHhsXGRkNIB0OIBwRHSAOIR4YHB0bGxsjHgENJB8OJSElHwEeHh4PKCMYJCIYJCMLCJoZJiYQLCcvJwESMCsdKykmKioeLy0VNC4qKisqKysrKywUODAtLS4hMzEJIZoTPDQrMTEjNjMYQDclOzYQRjo1NTU1NTUPMJEZRTsMKKxGOwEnQD0bSkA8PDwsREAvQ0EtRkMcT0QeJMUYPpAZUWAdMbhEQkMfVEkwTUpEREQeWU1YSgEhXFE1S203UVAaSalMSkojYFMlZFc6WlVQUFA7XFgmaFtVVVUobV5vXAIdUdNAZWFcXl41cmZgYGBFbWhWbGghWvNdYY5Lc25nZmpnZ2c7gHNra2uGcwJPenRAi3xVhX97d3dYiYN8e3tJeOlXkoqFgIGjiQFel49SnpCJhYaIi5FloJZfnNCElZiTk5NqqJ+VlZW6oQJrraNjtqhysaienZ3JqQF1ubGOsKOlpaV6v7WrqapxxLh7w7iurK19xryAyr+ku7jjvwK1tbWCzcKG0ca8vLuK1czuyQKI2c7CwsKQ2tGO4NTHxsaQ5Nf+1wLMy8v/2gOW6N3Pz8//4QKY7OLW09OY8Ob/6AKb8ufZ2dme9+2f/fDg4OCh/u+j/vSl/vio/vur//2z/v7o6OjD/vru7e3x8fH09PT5+fn8/P3///8riTyRAAABAHRSTlMAAwUICw8TFhkdICQnKy4xNDg9Q0VITVBUV19sd4Dc4e16mL/z/2VpdH6FiKOvs7a7jenKcJHN1qmtxdK6mP+SUfXA2r6phKF+6f/e982u7NLg/+3//8b4tP/KlPPk/qXs+8GQ/9iz////0Pvn/+7/98/Y/8fn///////4/8T1////zP7//9r/8///////////1v/f//////////f////k//v/////1v////////T///r///////r////////+/////+r///////////////////////////////7/////////////////////////////////////////////////eO5Y3wAABwJJREFUWIXtVntcU+cZPuEmCIolAhKk1mi4lFhAQlPF2pUq2rTdRAOazrq5hTbM0tiqQ1K3ZgVGs4tJaUYNQhYNNt281DTQQSPNtliamAUboJPAgiGEUK65nAssXE7PQXQkTf/o/ub545zvvN/3PL/3fb/3e78DAMtYxjKWsYxl/D8IXRkUSY69/xVC+L782DeuvvvzpKf34uOYp37155PR34McAgD5p+9Mz3p7G/X5QMShNjc6N3k1xndR8HfSw5MKXshKJxd9MovOoOjthNdH0TnUbTcWh9+bX/3D+GAgOjP5O+ihSa/WKmpbjf/8oPjX/bMDM/ONo7MD6MBNfdPxpNCFFVHXP397z4VPEwPz44o1fdaKNu8sis7daez16geG0dHO/l73zMx05wfJBMzx0PfGB/89fosUiL5it6IDrOCcHXa73XMoOj/gnjc2/vXKHfvk5DSKot6qfdnYql8MDg19fWt9AP5DdJXO5JA3cM+1GW/fsXun7cNo6/6Lhn/YvaOdN42tHLk8CwBI14eGBocGLyT408No72h0DhDRKr9glw5jIcyj7t6B07+5+Le/fzZqn9FTGDfaCyOA5OvjXw8ODo2P+ymEry9QmXVdI9CIstzZcoaj7++fnJsd9X64//3fvfKnfrv+SJnW+sxzCQD5veufDw7958LbP1mahcisU3KNqbvH0DemaW3SOi8JmMbZ4dn5r7761/6Lf/zl77125pkbcENRRBRWAFEbPx2/wHhqCT2G+o7JgyBQT62yz6lum2xwWWU1rJuTd6f+63Hw33rlL+8bOWc+htqvfLJYCj+7Rf6xes9iKUWmFl3uQ2DP2N0ORbl5AtE0uU9rpsx1YoYOdDkhxNnMeesPhWUym0tk1xPvcaJ/tDr4t90vh2FDInUzy9Ei0sCgxex0mLQml6nqw+pqJ/ylRMAdAWFLS4tzQmM2sL+Y0tR7m9Ys+ryKAMQoHScj1+UpSikqG4Wihs0ircXmcnlAm7z77GkDBBtqLjkhdWlbq8gFw12cDuQ8+ea7QUsC39jR9bTShthMoEOlc3RUM5rNEy4PBsTcrlEiINQi9ZgoRiP6UTsEyXdqkdeBHNrSfSMcKtchoAf0eEAEdo2oVE7Q6cEUYLVpyiSHQKjnGqik6FHUqIJhzRFFV45/4ax6E8LYHhcIg5jnEKKygB4sBlhuQKwi0AXavuwupRTqb1d1wxNKJpOZ6d9TiM0I7jFo1VgxHzABFezCk9Bwd8wq6oFdIGhVyjlMuQWCatllDAplnZ8ASYsLgLCBW9ug1Hb09VQ7cQ+cx18tr+WUYzQsPqilQW5CmpmiUgqFsukHQT4CNAOMh4Ao2yGLrvmy4nCuFsYCsm4Lfw0cU5fXipqRkYpzncP11SxW22jblY8GGtN9BTpwAXCC0wWDIDJlyIk4D7s8kDkHoGIBjJmKMwxdhWdL60ebWKzOGTs619+W7JOGRB0uAJ3PxD2B+/aFAnk2EIRMacDayzC2OyfDdmjkOzuNn/V21tfrX9Jfee54io8H8WosB0gzjahGQHDiNeyYpKhhEDLQgKBipwccKwKCtikqWqdFisbGbGpcatzq6JU+Ag8pERfSTgUScAFRHGYJO+X0wDqsWyZqYcixC6uV2KymyX0vv1QVCwRAkg5GenLXEoocEKK41yLTTRDSjh1zYoVzbGwXbllx1Z4CpB8J8+MS1qRtjz/lQu6yDjxPvowgqnvpJeZKeiyGFIB0mNVyw/Iiboq4aqcB8WT/GgrPFZRt1kzZijOFlQwLoiIvWFc/X8O9dE2dSNh2rKZSdu0kbgt+w0gDAuBJroQ30lOc8CJXcskhX9ze0EcPCoV1Ahqw5lmeRCLevmDMb1wHRH+rf25kV0o+VudF7C4Riq+9+WB6V1llnZRPA1KP8SUSSe6C33vricCewlA/gTRWjVSQGQIkHxRLWQ/4hLQDfKlUkA6E5zBr6uoKQu4LHKqK8BNYmcUX0zHVEBKPl7/EnribLxVixzY8ertYuihwjgikPBbkJwDEnzi6cNnm8F/wSTDhWamQig8eFUgPLOwdrYoYKIl5vIXErThwjOh7Te+QiDPw97oy2dEofJBaGvMtNtZLjv6UlIZVF4n7zBMFZJ/sCOrw6w8IPywrWeigsfTIAAJ7TzxyUMhMDtldQuHKSjat+d9MNFtWsIIYRwC2iHk5G7eTogP/SFCZDFYdn5mfweYxhXz20mO+Q8DcymbS10YdZLHYfEZeIDoAPCGQlXF5rIxsoYxXwmZsWZ90H2mPMQRllSe4T8ZsFYrZ/JJAAsGJGZtZJ9hYkwsIhqCExcQnmcyd2JOekRriJ0CIiiWlppOpWzI3ZT9Opz+8YcOGrY88wFbs82E6/fHsTZlbqOT09cmxq3w2+hvwIIDlQm3ITwAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 850000,
            ap: 12022,
            dps: 6011.0,
            speed: 9,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1505,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12022,
            actualDps: 6011.0,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 390,
                omni_range: [-300, 390]
            },
            "immune-curse": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            },
            "warp": {
                chance: 100,
                distance: 1200,
                duration_f: 500,
                duration_s: 16.67
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "692",
          enemyName: "ドクターK.O.",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQECAQELBAIIBwgaCQAiCwABBlwWHiM7EwE8FQATJy8CC7BRGwEbMDxmIgAMLp2TFQBFNy17KgCSMgDBIwAUQOGrOQFTV1m8PwDxLACVVDHKQwANaO7cSwD8QgDqTwJ7d3UQkvr2UwH+VQD/WwBKiO+BiI3/YwD/bwPCgGKSl5umo6L+ikDdo4azub7wsIzJycn8wZ/d5On+3MCo/v/58/D///9+dcxtAAAAQHRSTlMAEStEVWWH/3abxuix0fz71/7mrv///P7///z/////////////////////////////////////////////////vZFNGAAABTpJREFUWIWlV21X4jwQtaWl9IVK3S1RUk2DsYRNsiRQwAIP/f//6plWd1dF3OrOBznH07lzZ3IzM7m46G5W4H7i63f8w8T5N/8CwY9tfdmfaf+iN0zsLwIEmSF+hMXV19x7ATI6ToTJvkbAR0RoFhe6iL7kHxCtlWJMofDTJbT9UT+61xJMKc2Cz/pb3nZfLjRXsjWN/U/WwF/V8205XzYEtAISWRIMumPYo0leHyflciakIilVDUqRpVfRoFstwmNdrsrtZgolVJ7nqSYTrU02uQ+7+Dvzuqy21b6Qm5lUyENPlVDqZnIfd7lXzmSxnZf1blktOZeKtwSkYvdrcrMedQCwwqqal/tytdgtWRO5qSQksDoeHo95lyoMqv1+tV9Vi31520bXnGA8qRub9zoA2JNtntdVta/zFkBnoe86o+2qXM27abLnD6JyPi7z9Mk/aryswaDvON017To9N5SNmHXS2emtXbUFVF/sBUA6aTJQcvhVgB7W/wbgZy2AOAvQ/0ufiZngoENxrhtYycfl9akWAlNNzgG46EMGdtp0ApKp7NxnEep/BBDyBoARRc8AWAn+6G5GVDcFkEyxBsA+HW82wh80KRcZxVLVYEBPd6Lr8cnHLkbnhW0ngimZiCzVuvDd64cf1yf5+uS8RK1QaMJ1SoGE4sHl3Y+fD+O34QJ2HiCgGgSkUSZT+PW+3/2o/3t42wmG/CxAkDHejgOsUq6Fd333cPw5essglmd0ZAXUSNECIJ1yk11ef7/7eX1yDLFG755CDzaC54GUIYUoBwKQw2k3DTUZvBO+D6RhHKhmrhKkUhp/vwMG16e9MJTidEy4ISqUwmmaIsxNkeoU8eQSzDsNFlGD3kjRDnDBYZxRymiWJohiqCAx0JIxOdXzABvpvSLW81jLvhBtChzHsTDMo8ZoU5zK3o6VLuI/zOx+zE0zAzLCRDuLIHwChfBubmYGBaeyDQutJYoaEpbtRjEWslCCYKKVeDoGQzwkb5P54v42XY5dfzQZvVwUegkQ1hSFw+FVCskzQbmkGde8kM/zVCZeujzWde7dHPZ5VdfH7eRFNX1sFIxtSQiDVSijHCshoAMUCiCelRCP6329z71Z/cvyFwgRbvYPCUUnGdwdCjenoLQoKGA8aTHzqmO5263zdDFfbMF9v69fXux+TKDcQII385elmlOhoAoCGkl7G4i32D5OZ+vjOM/zyaSq92Zd+i+Pwo8x+ACG4jRNDfQPQuEQJWTVMkjRuNLTwxP7hXdvZrPNa1Vbrj9MQHlxEMQYnJvSSShtex90QszteLf7lf/Wm+rZenxyoJZtN9v4VYwhOOQPhwm0mgxiDWUYV8/+m/U80W8ZvFIiMQUm4Mlo05KBAMg99v2q3u2Ox8NmNl2Pb/Tm/DTox7pphZI3ekwKzZCIcWZ/O5oprFtiJmfr/GaXf9CL/VSb5lQ4RqBiiJ5kOriYbKZSCrhkCgCWrw7hlEOSgWGcsQRuswf9KLUuRpsZ0II5WUzXef6XgWr3A89LMEkwPBQ8bSjE66/WU8YopWS2CTssinbPcZxQGxwSI5ueY40P+pZQejs95F2WtMYcYlgw1CZtHXr54VHPxPow/3CavrTY8GBADHq+OM5otX3clPk7TfR9G1AdWkOd/S64NfC/Rf3uC39ssG1z/emHyh8CZmiFOA1gt+z3P//wtWLDwqssI0WWQHdAXSv/2yJuOG0kaWgKDfn9AfZ+aBs04LpxwUT7Uipi2LOysD8YuI7T6/B8tv3Q+2UxWPP39z+84OUh/g8W0tD6W3YM3wAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 380000,
            ap: 18600,
            dps: 29368.42,
            speed: 28,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 650,
            freq: 19,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 18600,
            actualDps: 29368.42,
            magnification: "100%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "63.3-63.3s",
            delayFrames: "1,900-1,900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 500, 5100],
                timings: [2, 4, 8]
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "694",
          enemyName: "テク・ノロ爺",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgECAwMCAwMDAwQDAwMDAwMDAwMDAwMCBAQDBgYECQkECQkFCgoFCwoFCwsGCg8KCgoJDAwIDg0GEA4HEA8IDw8NDQ0ODQoPDw8IExEHFBISEBAIFRIMExIVEgEWEgAMFRQNFxYCCl8KGhYLGhcVFRUUFxcMHhsXGRkNIB0OIBwRHSAOIR4YHB0bGxsjHgENJB8OJSElHwEeHh4PKCMYJCIYJCMLCJoZJiYQLCcvJwESMCsdKykmKioeLy0VNC4qKisqKysrKywUODAtLS4hMzEJIZoTPDQrMTEjNjMYQDclOzYQRjo1NTU1NTUPMJEZRTsMKKxGOwEnQD0bSkA8PDwsREAvQ0EtRkMcT0QeJMUYPpAZUWAdMbhEQkMfVEkwTUpEREQeWU1YSgEhXFE1S203UVAaSalMSkojYFMlZFc6WlVQUFA7XFgmaFtVVVUobV5vXAIdUdNAZWFcXl41cmZgYGBFbWhWbGghWvNdYY5Lc25nZmpnZ2c7gHNra2uGcwJPenRAi3xVhX97d3dYiYN8e3tJeOlXkoqFgIGjiQFel49SnpCJhYaIi5FloJZfnNCElZiTk5NqqJ+VlZW6oQJrraNjtqhysaienZ3JqQF1ubGOsKOlpaV6v7WrqapxxLh7w7iurK19xryAyr+ku7jjvwK1tbWCzcKG0ca8vLuK1czuyQKI2c7CwsKQ2tGO4NTHxsaQ5Nf+1wLMy8v/2gOW6N3Pz8//4QKY7OLW09OY8Ob/6AKb8ufZ2dme9+2f/fDg4OCh/u+j/vSl/vio/vur//2z/v7o6OjD/vru7e3x8fH09PT5+fn8/P3///8riTyRAAABAHRSTlMAAwUICw8TFhkdICQnKy4xNDg9Q0VITVBUV19sd4Dc4e16mL/z/2VpdH6FiKOvs7a7jenKcJHN1qmtxdK6mP+SUfXA2r6phKF+6f/e982u7NLg/+3//8b4tP/KlPPk/qXs+8GQ/9iz////0Pvn/+7/98/Y/8fn///////4/8T1////zP7//9r/8///////////1v/f//////////f////k//v/////1v////////T///r///////r////////+/////+r///////////////////////////////7/////////////////////////////////////////////////eO5Y3wAABwJJREFUWIXtVntcU+cZPuEmCIolAhKk1mi4lFhAQlPF2pUq2rTdRAOazrq5hTbM0tiqQ1K3ZgVGs4tJaUYNQhYNNt281DTQQSPNtliamAUboJPAgiGEUK65nAssXE7PQXQkTf/o/ub545zvvN/3PL/3fb/3e78DAMtYxjKWsYxl/D8IXRkUSY69/xVC+L782DeuvvvzpKf34uOYp37155PR34McAgD5p+9Mz3p7G/X5QMShNjc6N3k1xndR8HfSw5MKXshKJxd9MovOoOjthNdH0TnUbTcWh9+bX/3D+GAgOjP5O+ihSa/WKmpbjf/8oPjX/bMDM/ONo7MD6MBNfdPxpNCFFVHXP397z4VPEwPz44o1fdaKNu8sis7daez16geG0dHO/l73zMx05wfJBMzx0PfGB/89fosUiL5it6IDrOCcHXa73XMoOj/gnjc2/vXKHfvk5DSKot6qfdnYql8MDg19fWt9AP5DdJXO5JA3cM+1GW/fsXun7cNo6/6Lhn/YvaOdN42tHLk8CwBI14eGBocGLyT408No72h0DhDRKr9glw5jIcyj7t6B07+5+Le/fzZqn9FTGDfaCyOA5OvjXw8ODo2P+ymEry9QmXVdI9CIstzZcoaj7++fnJsd9X64//3fvfKnfrv+SJnW+sxzCQD5veufDw7958LbP1mahcisU3KNqbvH0DemaW3SOi8JmMbZ4dn5r7761/6Lf/zl77125pkbcENRRBRWAFEbPx2/wHhqCT2G+o7JgyBQT62yz6lum2xwWWU1rJuTd6f+63Hw33rlL+8bOWc+htqvfLJYCj+7Rf6xes9iKUWmFl3uQ2DP2N0ORbl5AtE0uU9rpsx1YoYOdDkhxNnMeesPhWUym0tk1xPvcaJ/tDr4t90vh2FDInUzy9Ei0sCgxex0mLQml6nqw+pqJ/ylRMAdAWFLS4tzQmM2sL+Y0tR7m9Ys+ryKAMQoHScj1+UpSikqG4Wihs0ircXmcnlAm7z77GkDBBtqLjkhdWlbq8gFw12cDuQ8+ea7QUsC39jR9bTShthMoEOlc3RUM5rNEy4PBsTcrlEiINQi9ZgoRiP6UTsEyXdqkdeBHNrSfSMcKtchoAf0eEAEdo2oVE7Q6cEUYLVpyiSHQKjnGqik6FHUqIJhzRFFV45/4ax6E8LYHhcIg5jnEKKygB4sBlhuQKwi0AXavuwupRTqb1d1wxNKJpOZ6d9TiM0I7jFo1VgxHzABFezCk9Bwd8wq6oFdIGhVyjlMuQWCatllDAplnZ8ASYsLgLCBW9ug1Hb09VQ7cQ+cx18tr+WUYzQsPqilQW5CmpmiUgqFsukHQT4CNAOMh4Ao2yGLrvmy4nCuFsYCsm4Lfw0cU5fXipqRkYpzncP11SxW22jblY8GGtN9BTpwAXCC0wWDIDJlyIk4D7s8kDkHoGIBjJmKMwxdhWdL60ebWKzOGTs619+W7JOGRB0uAJ3PxD2B+/aFAnk2EIRMacDayzC2OyfDdmjkOzuNn/V21tfrX9Jfee54io8H8WosB0gzjahGQHDiNeyYpKhhEDLQgKBipwccKwKCtikqWqdFisbGbGpcatzq6JU+Ag8pERfSTgUScAFRHGYJO+X0wDqsWyZqYcixC6uV2KymyX0vv1QVCwRAkg5GenLXEoocEKK41yLTTRDSjh1zYoVzbGwXbllx1Z4CpB8J8+MS1qRtjz/lQu6yDjxPvowgqnvpJeZKeiyGFIB0mNVyw/Iiboq4aqcB8WT/GgrPFZRt1kzZijOFlQwLoiIvWFc/X8O9dE2dSNh2rKZSdu0kbgt+w0gDAuBJroQ30lOc8CJXcskhX9ze0EcPCoV1Ahqw5lmeRCLevmDMb1wHRH+rf25kV0o+VudF7C4Riq+9+WB6V1llnZRPA1KP8SUSSe6C33vricCewlA/gTRWjVSQGQIkHxRLWQ/4hLQDfKlUkA6E5zBr6uoKQu4LHKqK8BNYmcUX0zHVEBKPl7/EnribLxVixzY8ertYuihwjgikPBbkJwDEnzi6cNnm8F/wSTDhWamQig8eFUgPLOwdrYoYKIl5vIXErThwjOh7Te+QiDPw97oy2dEofJBaGvMtNtZLjv6UlIZVF4n7zBMFZJ/sCOrw6w8IPywrWeigsfTIAAJ7TzxyUMhMDtldQuHKSjat+d9MNFtWsIIYRwC2iHk5G7eTogP/SFCZDFYdn5mfweYxhXz20mO+Q8DcymbS10YdZLHYfEZeIDoAPCGQlXF5rIxsoYxXwmZsWZ90H2mPMQRllSe4T8ZsFYrZ/JJAAsGJGZtZJ9hYkwsIhqCExcQnmcyd2JOekRriJ0CIiiWlppOpWzI3ZT9Opz+8YcOGrY88wFbs82E6/fHsTZlbqOT09cmxq3w2+hvwIIDlQm3ITwAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 850000,
            ap: 12022,
            dps: 6011.0,
            speed: 9,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1505,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12022,
            actualDps: 6011.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 390,
                omni_range: [-300, 390]
            },
            "immune-curse": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            },
            "warp": {
                chance: 100,
                distance: 1200,
                duration_f: 500,
                duration_s: 16.67
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "698",
          enemyName: "ダ・チョー老",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQIBAQIBAQEBAQECAQICAgMCAgIDAgQDAwQDAwMFAwcIBQsaECIbDyQbECUaGhoAHHAnHDApGzUzHUYpKSkpKSgzKTwMJ5dBJVlGL1Y8Oz4VQ35TLG1iOINPT08YPepyQJZcXFxjYGd/SKaISLKEUbIWee2QUsFycnKYWMyhX9iAhXupaOazbPC5cfuYmJeph8rAd/+koqbNff/Whf+vrq9Tz/7AwMDP0c7b3Nvo6Ojy8/L////Ez782AAAAQHRSTlMADTTv/yRXZZB6yLJE3J7E/pp7/73i/6pLyf/+2f////3k//+1/P///////v///P////b///////7//v//////orrMpAAABDNJREFUWIWdVw1zokgQBSMiERGzQtYMWcadFSbDIJA06EF0/v+/2gYvm62riyhdlSqrTL/pj9evW0271nRrEQTO6Or//68ZHs/3+4JNB/rrflUVUFQgrGEAFssyyAirgOqDALz2+bB5ZSAWy4l9OwiFrNiTXSJyKiQNFzcDrLMcIPcp0DimzLVvBnBkBTnsQfj+eL40bvbXRhHEb2/Znj/vms2gMjqZbOq38vCulAqGAGhOgq7ofqxVMghAW6nOmkM9HwZgb8pTi1AfDgPZaJZKdRBqNQzA8t+b3RGrsJ0MA3Do9niqlUrMYf7aCkhyqNX75jY364N2eohcnh9VWV4Tga4ZltnJj4tNM1sQm8YV09eNavpLYDjBZlvXpYdDE0hD64bHYjEEqGyNWvb5m8l7162T2s6tBawdaU4MzUvTwmmBNt5Xw2R1yRmTLTofGnUidS3SCDK/8F3NiADE5CPB/7fHZ/zG3NbtvMxq1fjx7hmVDPCPagsACC/MoY7gD6dAM/D5UjWGfVKb+zQNeZUCFBBMOerBJSHS3bVhNGrlKXW3VVvtQamJybPWOSsKIC5I4Bf7Zx9ep3NMXP2yS/VoL+rDvcerDIq8A0lTCf5lJcJxLctaHW3tpO4oI24k/ALSIhdZlecgs4sZtElg9Oq1VYvdlsYijoWgBFBMc85SAbKQfQTS57vkgCxxQpfEaJEQY9LGD5yLTOy9Hn/7MSmT48lcxsynEQKIyI0qKNCqgnPJL2u5sW7bv1O1E3LSumMErsDeI4Iscv/ph3P5/enz7pe/TdTBWPph+3wcM8KwlizPOPe/vbz06BhyzN6q1+NBMzlhuH4wCsGY66bIAj5+evmnJwK0rSrvm/dJyJkfkjaKGLdgl0T47efLj9519KB2tpaoiUMjN4xEVwaSZVykED39fOpXkU2CAmKeXg2PdlWIopT6lIQuB+o+zXr9R+OuTY/1d50wnzAkA2GMSRaCYFL2r4LRv22efjcE5JTRSNAwjSXhe1lVUX8En2amFRauwl1OhIxwHqSo7vp78GlTfDdlEvUjEqHrQ7a00tUtK92r0J8V4I9DwjjP8XGnbw7+NotjArJKsYaYPPU7DTauj8Am7fxV1EURzagzufWydCi655FLKogW09uPIUtCJcjMtiPIb+ncZwA5pLP2XQ+yQUsYKyA6RgWQD7pDDPoHoBgGEMFZO4OBKRgMztq3gh4N/MJ0Csw4A9BBv07wDDlv0MXFTXoBIIB192EJt9D/LwvgzJ9lMfAYDOBM/mXee8h8AZCeu7fMBv4++wBYZQMP4vDMoxGDYRHYXHb8MSOggy5i5+MQ8kCG1uR2LmHofDXSWyaKUObR4lY2IRMp7oS1dc+BIa3d2Wh0vR5O7sdjH6owQ8cxfhz/sbvZVcmMLGc2W2zIfH73YXO0+9lsan2ljr8BM+OhT8wz8gkAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 1600000,
            ap: 23000,
            dps: 40588.24,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 23000,
            actualDps: 40588.24,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            },
            "toxic": {
                chance: 20,
                damage: 20
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "ノープロブレム帰港",
      baseHp: 2000000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 230,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwMDAwMEBQUHCw8CBzYNExgOGB4QGiARGiEEBnwbHAIBFV8VIy0WJTEBBrQEMVUcLTggNUQDOIIJFdknP1BNSAEtS181V24EQuo4X3s8ZoI/aohCb48EcvVHd5ouc/BOhKkBnv9Si7KWjQFNl9teoM0kvv9jqdjVwAFf9/+k5P7//gH/+f7B5wpeAAAAQHRSTlMACRUkMzxKWWNuma//fYqk0Ny8xvLl/v/P/t20//7//+v/////////////////////////////////////////rW5rhAAAA4RJREFUWIXtV2lzozgQBYRB4jSXbOWwkgjCiDOMN14mmWT+/78ayeDYzmQzULUf86psXC73Ux/qfm1F+cL/B8P1wyhaX1zc3NxcrEPfQwttjr1qJ0mMMSGEsjTnRVXkjCY20ue5AQxv6UhgyrumqQVLYpvqPBINDhx5VxVF29U8JfZiHoUCQkFAUiw8YbVwhLMEzXNDTZwDaF0UdVPl2JtDAZwj8kbYV02dY3c6ge651sEJ3uYprwtJERuz4lhEe4KUSBYRSNG2xJzFoNhvcZCqEj7k/jx7BR0zwUUaKJppr/gnqawbBhVVm1VN97QWXW4p5mIBZjkQHa9D0SSq4kI4907C0R63uSiAZVlDIYE12ZPFQJC2a+lSGEpDYK/uvHk+4JZD8TlMQvFu4av7H3dAUYG+MHRFN4D6WWq1WBaxIx4y3NgRhQR35e1VtoouKcVODIdSxcEyCm3fsjwXQWOh6wComm4gKwxiLEuQDpEsBSPabDBlOU/pehg3AFqB8ydiLH5UPHJaU8ro+GVgoIgy3ohBg91TvzXDi87tWdcPKPpiu90WzvXz627fm12d09VmE/wRrGq+kWBW9Qds++2TeKx2u2+v1+I+VJSsru7L7D/aQjND2Tndm33/9LR/ZLvn3et1xRy8Ksvb++8Z/NAeGFAQsPaEYMS/bPf8re45pbdlef9dlvFdAAD6UXxo3rw9nn1g2Dh13zvXwv3y6eVhfXYu9MLYeZfE+rE/I+g34kVMmAn7Xy9ZfIlG3XHPTOM4ToIkWAoECWF50W4f99huH7ccI8XIHsqXXz8zXPH0wpP3ANkeMk3TELcSAKCpJ9dSMyAcC4OJw7En4w7Lf8qHnwy5l0zcxOBv3QnGO4ZrNg7Uxd2PLNvPpn0vfNqVlr88zoN6OX7rczJVIrzziTR2sG5NV237hKBp6MyZrryfyvV8huNU3utCnU6fQxJgiIBJZcr3ytRNVibdRd6hAkIbmVS2psnxxx300eGn+W/EhlA1DSfWDFVJzqMXykz8GTuXKrNHmLSn4uymSGNvurlqDslLu4LzuhPWNJxcP1VH4dg8YktrW9FyJESTDlftYClG+OmemFISesbkxEE/XCbJxX5THVZVE8xcEA++fCpUX/jCF6ZCk4pnmBBCJAGhEF6xt4FpQ8F6vyacSf/fVUHsWb4dRnI3SOIDErkuyC3S+/APz29lV3xadac1jgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEDAwMDAwMHBwcmEAEYFgwbGx8fHh0tLCo6OjtKSklbWlqWYxRrammdYw96dGq7bBd/f37Bfx+UkovJjifQmS2ko5zWoS3erjLcvBDcvA/WsV+1s7LhwBThwBrjwhvnvjjmxiXlxy7iwWnoyjfExMTuzDnrzkPny2zv0k/RzMfu12f/4Q703j7z3mzc2tn67Wjm5ub87pbv7+/+/cv5+fn///+QzGd4AAAAQHRSTlMAFTtPaYH+J6/nl87BLZr85P76/v8////+////////////ECf//z5qpf+6gP+n//3B/+D//Q3//v//////////F3dISgAABHRJREFUWIXNlmt7qjoQhfECKrA3QnIQMRKoUGtrUYtbQJH8/391JmDr5bglfjvrsZZC581kkcxEkv6ul9nstdJs9vLg3+5r9vH5/v7+Vguu3j8/Zs+Er9PV25yPXAkymb+t0rU4Yn5g2/ll3i+z+dfxMBeJbfVa8P26TtPtdvv1tQZ9fcFlmq7nf5rDe5ppWZr6S5L+vM4/Pj/XtT4/Pl6r/Lv6UGs/AugxAxFD79172lHcgmX6I4BMWaXE6N95aO75oztPLlMgNYGRwW0SMub3S/PhFCBNw6FxnMFInNBqtytTQV2IT6htNMRL7YFiIsuFsWJN1pDt2GioAqpnMla42PxPYjfq2uxHGJ0uEqy35Pj0h/WYIFeAgrvFMlx+swqkwK2MQ3DncQryECNk1lZiek6HGAWLTcMcyg0eSK2BRYs6yMVnAMMm27NIawqv3S4RYWXCKLoAMMtGMaNNLwHeoxXZilUyB7PEvgQkmCh2kwNc7a6GWImVq2gu27V6zQmAegayTbzPyhtAZP4WCYflXMR2dhNcAq0ctoTiO+5t7iCHLwEkBuhfj+5WPMpv2mIOoOuxDePbQ0UM0CXXgP3+dEGwGKB/699ZYh4M74VS7CaseFjMvtW6tKBMIhDMgSoKZW5XBNB2zuHUpTF1HW6CZbG90hWZQufsYVmUbB9BhSMZRSQ25Y4sQOjS8wwi5nJcQRS8R6beknpPAlCcmThKCqgmhiG4D64AtsNKgrDt2gYRc/AGQOuKlEWWzVy511CPT6pM3J8Wk2kRN4mzMCS2QyhuLIcVoGoJVg1wLUYcgB3zFegQDQXWcq9KG53KEUL0cOTxvh94QX5oaAqVqsEzI6kAseLv0mO+WwVACBZ5KrCa9aqmU6XehLa5yw95uvT95cJfrXLS/DLkqJq9YVZGlsYoP2xXm02+CzfwyVHjJNp8+pHJiFIRiLnb5ctFvtvAOWcZ5NvHxwOuIdRP7PJZcB8KY7RawYEJPpvQDxZHu3E585KEcbkHAiyqxDRGi2Waw/B+GHp+GjW2lha8h0KB3gbNBbsmGkFc6C8DbqM39cPmTaFCCY+MrEicwFAwHq2ScOp74SYIfX+7OFiNgKouRxbKLLqzRqPJ1IPUIYkw9NPjMRbYlmp92MO2tfHG3mTiex4sI9+bBDkr7eZ4qWV+VxR7NR6PJ543DRb+eAKMA/1HAPBzUkoGJJiAptMAfsOPTwXrSh+zfcLigaRujhsAAAKSmI7TZgfrDIyIOdDSkCw5bAMu+tyGyXhHBM4XIJm/BsqnQfq/EMzchwS8ibdwVLHx7VMx4Ri1N5xOKx98H4nVxXZ1pmZIqfY1FFP190liRVHSSJTBNtLVCGpjQrFQS76QTGhGaJHJPbeEnhTR4bMAM4spjcDvYUIiUtjPAmAnuAkpIEyF3kyzSKiYXwFoFsexygv0nkKHfhYgtTXoBRavO/2YuNbT8aCOOqxXnK4LHQn+T2rLsqr2+7qu/UjX+31VlWWx5dTpawPljgZa/2/b8F+/vQXDW/SPpwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "knockback": {
                chance: 50
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwMDAwMEBQUHCw8CBzYNExgOGB4QGiARGiEEBnwbHAIBFV8VIy0WJTEBBrQEMVUcLTggNUQDOIIJFdknP1BNSAEtS181V24EQuo4X3s8ZoI/aohCb48EcvVHd5ouc/BOhKkBnv9Si7KWjQFNl9teoM0kvv9jqdjVwAFf9/+k5P7//gH/+f7B5wpeAAAAQHRSTlMACRUkMzxKWWNuma//fYqk0Ny8xvLl/v/P/t20//7//+v/////////////////////////////////////////rW5rhAAAA4RJREFUWIXtV2lzozgQBYRB4jSXbOWwkgjCiDOMN14mmWT+/78ayeDYzmQzULUf86psXC73Ux/qfm1F+cL/B8P1wyhaX1zc3NxcrEPfQwttjr1qJ0mMMSGEsjTnRVXkjCY20ue5AQxv6UhgyrumqQVLYpvqPBINDhx5VxVF29U8JfZiHoUCQkFAUiw8YbVwhLMEzXNDTZwDaF0UdVPl2JtDAZwj8kbYV02dY3c6ge651sEJ3uYprwtJERuz4lhEe4KUSBYRSNG2xJzFoNhvcZCqEj7k/jx7BR0zwUUaKJppr/gnqawbBhVVm1VN97QWXW4p5mIBZjkQHa9D0SSq4kI4907C0R63uSiAZVlDIYE12ZPFQJC2a+lSGEpDYK/uvHk+4JZD8TlMQvFu4av7H3dAUYG+MHRFN4D6WWq1WBaxIx4y3NgRhQR35e1VtoouKcVODIdSxcEyCm3fsjwXQWOh6wComm4gKwxiLEuQDpEsBSPabDBlOU/pehg3AFqB8ydiLH5UPHJaU8ro+GVgoIgy3ohBg91TvzXDi87tWdcPKPpiu90WzvXz627fm12d09VmE/wRrGq+kWBW9Qds++2TeKx2u2+v1+I+VJSsru7L7D/aQjND2Tndm33/9LR/ZLvn3et1xRy8Ksvb++8Z/NAeGFAQsPaEYMS/bPf8re45pbdlef9dlvFdAAD6UXxo3rw9nn1g2Dh13zvXwv3y6eVhfXYu9MLYeZfE+rE/I+g34kVMmAn7Xy9ZfIlG3XHPTOM4ToIkWAoECWF50W4f99huH7ccI8XIHsqXXz8zXPH0wpP3ANkeMk3TELcSAKCpJ9dSMyAcC4OJw7En4w7Lf8qHnwy5l0zcxOBv3QnGO4ZrNg7Uxd2PLNvPpn0vfNqVlr88zoN6OX7rczJVIrzziTR2sG5NV237hKBp6MyZrryfyvV8huNU3utCnU6fQxJgiIBJZcr3ytRNVibdRd6hAkIbmVS2psnxxx300eGn+W/EhlA1DSfWDFVJzqMXykz8GTuXKrNHmLSn4uymSGNvurlqDslLu4LzuhPWNJxcP1VH4dg8YktrW9FyJESTDlftYClG+OmemFISesbkxEE/XCbJxX5THVZVE8xcEA++fCpUX/jCF6ZCk4pnmBBCJAGhEF6xt4FpQ8F6vyacSf/fVUHsWb4dRnI3SOIDErkuyC3S+/APz29lV3xadac1jgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEDAwMDAwMHBwcmEAEYFgwbGx8fHh0tLCo6OjtKSklbWlqWYxRrammdYw96dGq7bBd/f37Bfx+UkovJjifQmS2ko5zWoS3erjLcvBDcvA/WsV+1s7LhwBThwBrjwhvnvjjmxiXlxy7iwWnoyjfExMTuzDnrzkPny2zv0k/RzMfu12f/4Q703j7z3mzc2tn67Wjm5ub87pbv7+/+/cv5+fn///+QzGd4AAAAQHRSTlMAFTtPaYH+J6/nl87BLZr85P76/v8////+////////////ECf//z5qpf+6gP+n//3B/+D//Q3//v//////////F3dISgAABHRJREFUWIXNlmt7qjoQhfECKrA3QnIQMRKoUGtrUYtbQJH8/391JmDr5bglfjvrsZZC581kkcxEkv6ul9nstdJs9vLg3+5r9vH5/v7+Vguu3j8/Zs+Er9PV25yPXAkymb+t0rU4Yn5g2/ll3i+z+dfxMBeJbfVa8P26TtPtdvv1tQZ9fcFlmq7nf5rDe5ppWZr6S5L+vM4/Pj/XtT4/Pl6r/Lv6UGs/AugxAxFD79172lHcgmX6I4BMWaXE6N95aO75oztPLlMgNYGRwW0SMub3S/PhFCBNw6FxnMFInNBqtytTQV2IT6htNMRL7YFiIsuFsWJN1pDt2GioAqpnMla42PxPYjfq2uxHGJ0uEqy35Pj0h/WYIFeAgrvFMlx+swqkwK2MQ3DncQryECNk1lZiek6HGAWLTcMcyg0eSK2BRYs6yMVnAMMm27NIawqv3S4RYWXCKLoAMMtGMaNNLwHeoxXZilUyB7PEvgQkmCh2kwNc7a6GWImVq2gu27V6zQmAegayTbzPyhtAZP4WCYflXMR2dhNcAq0ctoTiO+5t7iCHLwEkBuhfj+5WPMpv2mIOoOuxDePbQ0UM0CXXgP3+dEGwGKB/699ZYh4M74VS7CaseFjMvtW6tKBMIhDMgSoKZW5XBNB2zuHUpTF1HW6CZbG90hWZQufsYVmUbB9BhSMZRSQ25Y4sQOjS8wwi5nJcQRS8R6beknpPAlCcmThKCqgmhiG4D64AtsNKgrDt2gYRc/AGQOuKlEWWzVy511CPT6pM3J8Wk2kRN4mzMCS2QyhuLIcVoGoJVg1wLUYcgB3zFegQDQXWcq9KG53KEUL0cOTxvh94QX5oaAqVqsEzI6kAseLv0mO+WwVACBZ5KrCa9aqmU6XehLa5yw95uvT95cJfrXLS/DLkqJq9YVZGlsYoP2xXm02+CzfwyVHjJNp8+pHJiFIRiLnb5ctFvtvAOWcZ5NvHxwOuIdRP7PJZcB8KY7RawYEJPpvQDxZHu3E585KEcbkHAiyqxDRGi2Waw/B+GHp+GjW2lha8h0KB3gbNBbsmGkFc6C8DbqM39cPmTaFCCY+MrEicwFAwHq2ScOp74SYIfX+7OFiNgKouRxbKLLqzRqPJ1IPUIYkw9NPjMRbYlmp92MO2tfHG3mTiex4sI9+bBDkr7eZ4qWV+VxR7NR6PJ543DRb+eAKMA/1HAPBzUkoGJJiAptMAfsOPTwXrSh+zfcLigaRujhsAAAKSmI7TZgfrDIyIOdDSkCw5bAMu+tyGyXhHBM4XIJm/BsqnQfq/EMzchwS8ibdwVLHx7VMx4Ri1N5xOKx98H4nVxXZ1pmZIqfY1FFP190liRVHSSJTBNtLVCGpjQrFQS76QTGhGaJHJPbeEnhTR4bMAM4spjcDvYUIiUtjPAmAnuAkpIEyF3kyzSKiYXwFoFsexygv0nkKHfhYgtTXoBRavO/2YuNbT8aCOOqxXnK4LHQn+T2rLsqr2+7qu/UjX+31VlWWx5dTpawPljgZa/2/b8F+/vQXDW/SPpwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "60.0-66.7s",
            delayFrames: "1,800-2,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "knockback": {
                chance: 50
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "558",
          enemyName: "アックマ閣下",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 75000,
            ap: 15000,
            dps: 6521.74,
            speed: 8,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 69,
            foreswing: 6,
            backswing: 10,
            tba: 32
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 30000,
            actualDps: 13043.48,
            magnification: "200%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 250000
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 1050,
                level: 1
            }
          }
        },
        {
          enemyId: "232",
          enemyName: "断罪天使クオリネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAEBAQICAgJCQkMDAwODg4PDw8TExMVFRUeHh4hISEoKCgqKikxMTExMTEzMzM6OjpDQ0NOTk5QUFBbVRhRUVFYVE5YWFhdXV1oaGhycnJ0dHR2dnaDg4OajTaWlpaYmJjSnwKsrKzcuAqwsLC+vr7lySrr0yTr0yft0yTs1DbKysru1y/v1yzt10Py3mbY2Njx4HLy4mjz5Gr05Gz25mv16XHi4uL//wL58JLs7Oz29vb///+H7VTvAAAAQHRSTlMAvdjwMUUY/2YLgif+nswXQv8ohf91WQ6xL/+Mxdj6r3442f4Gwgn45xWgTVxr+5F+NHX+S4ahtZPJ/gLl/v//UsQY0QAAA8pJREFUWIXtVlt7ojAQta2CFFpAxAsKuEENrjVe4qWNJvn//2onarG1oriP++154oPMYeZkcjKl0hlG8/l4PJ7PR+cfCmL4/jGdTCbTj7Vi2A77gGF/ewfBcvGusFoOh/O32fQ3YDqbjEf9whR2c9RvN7el0XoHybyNx2+T2e/dblKUwenWSnbcADE2u91mvVosFqv1x263GBZNoNtx/NBR9Y8hdKOwXk3mReNLpQ4mjMS2elQaDhXuELFkIsGFwA31rB3faeU7CBwiCT8QGM/HwOqLcQdBKiRnaVv9uOsdEuh2tdOC/khh2MwtoYuFTA8VhLhhOo2Gh1FGsF2+T2eA6SI3A8QYPUoQsghhHAVJaJ4INuv3FezOOr8GRBlq7x9bCeU4cN160rMzhl+/5oBR/rYaA07Rfr3RoZIFdTdwg7SdfW/EWslu2LnxsIKxzv7BRFIS1wqCep36pwxDR3PC2hUCu4eqh6UpEEAFgRvRTvbZRICv23KBoXbQzMFS0ihwLT0gXlZhhwgpDtt0C1oXWiKJLN0luHpKQBIqSVyEQG2pFDzSAxZnogGB4Jz2ChGUKq2ESx4k8Ukzo4OFYIP2lagMZvWlFVEpOW1Vs04yEeUcF5FA80IMa0EGnODotfKZgZ9Sggok4LTgTOzBAheTJPyU0R4wGl/rowPaiB3jBY7chCYYOccUBuJLV+T+f3AMlxJDH1gRjjjyzL0ttFPs3AjXfJTFi0DXLdclAREExR0f1Gz75tXoynOXZPGSubquu1aSJIqNoWuHYI/ya4S5PIHWId51I6wIJOncNDfjJTn9XgpJXd2qw5FWBCJtXT1ExxI8RA8UgmJlCHuCOk4oGTSKmavpxyhNUxR7IRy8CDS0gMBrOLd3P6tDq9VqmmF4BAgshQBdVT4P5VCKxII+0KPrFqLmiuUbYPx9sFCmhl3YyCDx8iKPmH9sZpPJYr1bfL0xKiA9DYAAnxwlL4PlYgVYLL9lAPec5FFdr/PbEhh2c9s8d+sGuAFL6lbE45sbqOz+h1v7eztRp/G2gzhd34/Ds0QVAciYiMHtFjBiQvm5U0AfKALKezfj1WDBPgeLDFV8OBJpEQtTgwUn3wnKqpdBhl7uNHBCDQYLsOvvKmqvMK1IObhpAmptC2zgx431HEBdRRSADELKCPbP3pqvcDEUUUAxxJThH0s9KyIFTHyPHrvgeLVH3XouFl9qD8SFhq0+PVUuLM5haP0k0B4eC/jgEfalpXdNmZdw15z7H//xT8LQyuXKAeWy9hdHqvrw+PSJx4ec2/UP47+XLCCp1K4AAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 2400000,
            ap: 32000,
            dps: 6620.69,
            speed: 4,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5000,
            freq: 145,
            foreswing: 71,
            backswing: 74,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 32000,
            actualDps: 6620.69,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 1200]
            },
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    }
  ]
} as const;

export default e34015Data;

