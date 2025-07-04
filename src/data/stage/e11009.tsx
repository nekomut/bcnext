// Stage 11009 Data
import type { StageData } from '../../app/stage/types';

export const e11009Data: StageData = {
  eventId: 11009,
  eventName: "ランキングの間（城とドラゴンと道場）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 9,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "城とドラゴンと道場",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 12,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
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
          enemyId: "283",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgEDAwIHBAIGBQQGBgUJBgULCAcNCQcNCggOCwkRCQgQDAoWDggZFA4fFxEfFxEnGwcvGw00GREmHxkzJhs+KBU1LSE7LCJWJg1TKw9BMSZkLBBHOCxZNRNKPTJZRTV9PxdhSjJnTTlPVViGSB5sVkJwXEqOVyxKaoKUXjN+Zk1Vd5N1dXWKcVWReVqDg4OagWKgh2anjW2Wk5GslXOjn524nnDCpHKrqqm4uLfQ0NDf3t6OV77VAAAAQHRSTlMABwwU/xwr8D5KYm1Yd8SzpJN/06rx/m3H5LH+/+XY/+7/////7v/////9////////////////////////////6AFxRAAAA1JJREFUWIXFlg1v4jgQhoGQlPLVAksKNdeCDSY2xRs7DgkJof//X+04sHfS7l5KjHT3CgkRMY/eGc940mj8u5pupzsY9Lodt+JPFXLHkyXlgrPlrG8F6CIqpD7oWIlR0wbQI1QoAGgAWDnoEXZxoC0Bg6uDuwDgINbSsgZXgFb2AMalKgHPdgBMmTAOhPhmd4wIctCmBJaALiJEaBVLZgnogwOupR2g6TpOd4oJU0JLxoadmgT35fV5OPF9hBlljCB/2PduDG31x+Pxy3iOMcKUUrT9+Pj+/QNP5yPPBTmtrwC9JRwe55wSwWWaCQgHbTHx52+g2etjdTLOWyqZ1jDChAuV5Yfj57n4PMuYYibhPIXcVN8NHZmnHABKQf1klqfHItxGZ5ULwWMdx7HWs0rAi84MQCnFpQTAIYm22xAAWlEZl9p8AUhTpgxA0NJBkmDMAZBqGG1jIeaVgK7M0kuymIg4hxoUUZlCJoh5zBhfVgK8t0xRzuAACWFpnsfHc5GcPwHAsHkKqq5Bc7yBUEKgDYjIDOAYlTXIML7EL7uVgEar9wQaTh4QgRLk+hSFUZnCdDKbGA2+bKWW0eNwatoAAEceJgA4TDzHtKJ741A0O3MZZ3mmT+ciKs4yV4Oa4+TMhM6yLD4Wx21YqHxz6zD9bWEkjIM4OYUIapDNnJqARp/LCyAxfaDHdeMb3kam+UEnRRIlRbjp1Aa0XuEYUpF8Rh9JwV+/PLzf9QLzDIATJtsCD+rHN/pThDCOTgglhV/3EEHexEeEkejEeXjyLXab84y4ojg5n8LkRCZ12wCKOIJ5QCgsQOENE/AHC+6IUNivcK0PPavN1AAAg8tJcLvtDgC42w9KSm633a8A2O53ACgApN0LStPxHp8wQnC5Yfz06Dn1GG7veTZfkWC32+33ux3dvM1G/RoD3RwtFu/v6wCiIRwg8Ak2o9t7oflt9W4Awf4aDV9B8Nft3WgAi/f1ugzeX22s6wEWVwcrhFbUeAhqAoyDYEf9drvtLxbr/b42wDhYm/iSENQGlClc4ktC/RQAsG7/A1jbOFj9BLShLe4FrO4ErOoBWr8CVjUBxsHiN8D8jhRsAFD3ex3834BfUlj8twDn6WFq9PBT5a8/78cfbX6rhYGXt9IAAAAASUVORK5CYII=",
          traits: [],
          baseStats: {
            hp: 100,
            ap: 999999,
            dps: 49261.03,
            speed: 0,
            range: 300,
            rangeType: "範囲",
            kbLevel: 0,
            money: 0,
            freq: 609,
            foreswing: 10,
            backswing: 27,
            tba: 300
          },
          stageStats: {
            actualHp: 100,
            actualAp: 999999,
            actualDps: 49261.03,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "0%",
            isBoss: true
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            }
          }
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 13986,
            actualDps: 7628.74,
            magnification: "1400%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 1120000,
            actualAp: 31500,
            actualDps: 8146.53,
            magnification: "700%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1800000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 105000,
            actualAp: 4725,
            actualDps: 3634.68,
            magnification: "2100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "1680000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18662,
            actualDps: 11911.9,
            magnification: "700%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-5.0s",
            delayFrames: "150-150f",
            baseHpRatio: "1680000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 490000,
            actualAp: 14000,
            actualDps: 9333.38,
            magnification: "1400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1680000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 490000,
            actualAp: 14000,
            actualDps: 9333.38,
            magnification: "1400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1680000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 500,
            actualAp: 22,
            actualDps: 17.31,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1680000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 75600,
            actualAp: 3780,
            actualDps: 2577.12,
            magnification: "4200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1560000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAB5AABjJw1GPBNrLxUwSlMbT3WAOBt4OyE3VFj/AABKUElbTUUrXn6HQieNQCCMQiOMSi+YRyFhXkJRYlw7a29gYFe7RRaWVTpuZF6pUSelVC5tbW1XdoWeYznHVBxzc3KBcm46irabdV3GaSu6dEWOhHGPhXaze1F3jpbQeTuRkZGhkofyfTGfmo3Ik2HRklqfn56qo4/7kEOzqJ3Nrovhs3bEv7fNxarT0M/v2K7778Qmm1aUAAAAQHRSTlMAVomtxgIMhBw8hEUxXgEMyPz/mXdctPyf6YX8yELe/iG9jP4J3f/+/u01XsX6/sf//43Z/eGk//zl/rr84/7/us37AgAAA3ZJREFUWIXtlduSqjoQhl1rtiwUnIyAoIIEjZpwiqARkYn4/m+1G2emateuJePhdv4LSoT++LvT6XQ6LUI91Pb4W6HZ9DnAbDN76vOz/fwJA8vtZl8OLr+WDwFm+7RcNSWItsFDgGC6SdMx6kTv24ccIDRPx6txgLan6P7oJer3+5O3wXQTBKdTcD8gKibD4XAcvBcoegxwTIdOWs7rIgLAIylsM2e4TtNzWQTHc3w/oNObOOv1Oj3L7bKo3+9eBYR031mnGa3Bfizr+E4C6vVtMxGlLOV5i5aFPN1JQIOJM58LYYSb+hSjYCPlNlC6iqrrym2A/iqdD52s3MfHhhBtyizxFsnueEz0mzJ4c5ymD9aTXryXpyKaeYzxQ1WDEvUGguYNBuPJ0DGMt+l4L+U+CUl+AAGiGn0fr9qjbgf9MRxqGI7/tsroIecXABCE2e3oWmspkGXCc/THcVKnYYQUM5bnB87zPBfUVjp6Al+4rqmvwVUBAE0pxYZhuC4A8hwbDBs00ZXRcdeSCJqOdV0fWaaPnRQMGJi4hOSNBUMwLOtjsquEfzVe0WC5duKiqsIGbgx8WuCcQxmqAxfCvBLe1Reh4JxhjAlhOW8cNAAf7po/LpUUmIXX2kE1w6qqBLyMsUtwlkE4xqam+QTSx5g1LkCLa8ugqMW5rhhhnGAXG9AJBvE9q6tYODUolBTDhTH/ej9Gx1oyJhoGcfGlhJbmjZA6pUZWYgqmpJfsg6uAII5DXtUVERxKL+pauFpX81Zji9KyzErXpTKOi7bjZhRW55rzmhOXCylllaDu1DE8D/aSLDOa7aOg7bxTTOsdDOzeQ0JIVp/PtSwiNOspCAXxTgJiEyzbDCiaEse2P9Mt1yUCwoHxNVVfZ7u6PsbfHJewj5A10r0QuodLeW60/Vw1FB+/jb9IVRTN9l3Cmhwgi9D6JCzjm+I/ctEbQilhBFQy/No8r6+3xjflhB4mjApZV2H7BPh7vOa7FwLsqYy1T4C/Svd8zwYCZpSG9uKWYfo/B6qqfmTB6UK5+/sf6lrEtmFfao+Fgwvb1nWfuPf7/wLoKvRD2+69gWEy7t9ymFyV6rvW/U3wH404ebiGjZTkcHWC3qCuavnMfqIEis3JU/Hac2uoWolvag928cWArqlPreCPfvSjX79fXv750svL719tL/8LiTWHFfrH6E8AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 15750,
            actualDps: 7620.97,
            magnification: "700%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1560000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "221",
          enemyName: "ゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAAAGBwcRCQNhAQFIIgFLJANHJwxSJwJRKANLLAJSKQJSKgJTKgIAAP5VLAJXLQJZLwIVQGRaMANdMAJhLwJjNQNkNwKWHwdqOQIHVotsQAZuQwp1RQJgTCgQYZXWFg52Swl6TAh9SwQBeIZ/VA6FUwtUYl4va5UlcKCKWwmPWwOMXAqXYgIqeq+caAaibQQ1hbmodQObdjNZhaCoeh6QfWuxhitjosuwk2Jqo8l/ut7ErYfk07b07eb9/PuVUdaPAAAAQHRSTlMAGoHvA5v2dv9hDDIgTgG4i88UP+P/86j//yd8V///a//wnf8Dvf//SqLb//H/1////f/4/v/N/+v/////////pNMJVwAABEZJREFUWIWdl313ojoQxr3bFpGXC2hAUxtXZI1aGoMCjVjQ7/+t7gTQun/sEu60R8/p6fx4Jpk8GQaDv4Vh2kPXHdmW8dd/+2P6yEG+jAA5o/+BMJ0AknET4crqmz/xIhpHRGYTEif5uifBciCfQXDGEwiRz597AUZBA+A8KaqqOObivZcEY0qiuAXkoroUR5G+9arAI42CJCmrorhWIGHeB2CimwJxqYS4XPJcrPosgh00CjiHp+dlrWDVpxduAKngerlcy2MvBYYhS2gkJOX1eq1EchTq+2iuVqZHgBDXhKIsRZIcuTdXrMGYRnw+xTVBrgKXncRZRD8UN9JCPlu7mGBZBY1lUEqDkDLFjbQDPWYhHANdn81mFMORWi45ppQp7sPI12kYkoj4+my5THzd92fLGUJRrAiYBD6ZT2AbCPZBApbF4MXnp/IaGFM0tSwA0LQooPoopmlaXC6fqrsATmYMzJASCi1QFGUKP0Valp+9juMkiMkGOiBNU543ka7f1JvZcgiPYmifNhm+hRCpchHgRzEAeCJ76NgGID4mys+Hc0BZ3YMPCKF4Ig1XHsW6hx8VSAlrJUDtJrWd1fmPBDVjHOLWTNoS7oCj+DBVKpji6K6A/ybhqLSKBngBnJxHCQ0CvpUUyC5uvIS1y/gdSmtgSTdqbxX+G4JzpV0wHNxKaKvg9/xYyRefXQl4ILTBeByqdeIkaAisCc6adEbpVKECY2LbXu2oUkMLgXzpiwoCnm0YK4IANwR5NdxMlUY0VDiMNtJ9MDAMHy3iO1TyDQccFBNK6rkEXPEhH7sKC2BrACCUR1KDRNwo4K/6qDt/MNR1KCGKCb5NV6T+9X1dRypdLAGyiDqftAx4uIwXlSacaDVAjnff+okEaI6SExiO1miAOr4XkMBfPEVPN71arg47IfefsfpQkogpz2i2ds+/H0cR02Oq6MeDEVxk+H6cYcAsBAyZNFEe8uZRksPi0WY4SY5FdSlzEcfKAJcmOb7NJrUAmDIFj1SvFAlguFEgp1wYEstr2QcwJIzUJdQKIDmvAJCgD9V5f0jDQC5i3I54l+oKgA97nSjO+5P3d+8GYAlMmTAkFnAh2SFfm5bCu4+x4gjfJXBRVqUQyXpsTGmEEJqana46Z3RRe4H0My5l5JxmW5jdoL0j4nWeyTfKs2zR9JIsA/xskx12YxP5mDKCnc5FCCnNsmyzWbSxyb4O++2vkfQ6GBpRR/54qEsvgKxzlh2y8zk7HL5O21+N10B0ASwP8sEAAXA4HM7yc38+bW+nTNe9DoCtgSlyihfn036///o67cOfJwmwGqvQhh0AtzZFcLPz7vV1d/46eevxDiqQL5JA0DqNzW1M0Q9228F4d9gfwpUx/repbvjy0v0KfCtV8xx7vPv5ulsgz701saFyNb60BB+jHzLgpsDuP92J97BekKahp6cn7akN5Dk//kj4Dwfb6H2aPqjiAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 225000,
            ap: 10000,
            dps: 821.92,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 1350000,
            actualAp: 60000,
            actualDps: 4931.52,
            magnification: "600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1560000%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 11988,
            actualDps: 6538.92,
            magnification: "1200%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "1440000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 960000,
            actualAp: 27000,
            actualDps: 6982.74,
            magnification: "600%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "1440000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1440000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 4050,
            actualDps: 3115.44,
            magnification: "1800%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "1320000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 15996,
            actualDps: 10210.2,
            magnification: "600%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-5.0s",
            delayFrames: "150-150f",
            baseHpRatio: "1320000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 12000,
            actualDps: 8000.04,
            magnification: "1200%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1320000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 12000,
            actualDps: 8000.04,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1320000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 500,
            actualAp: 22,
            actualDps: 17.31,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1320000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgIFBQULCwtZBwZvGxBVKSk4ODhBPz9GPT1DPz9DQD9CQUFCQUGGKgpxMChDQ0NDQ0NFQkJIQ0NFRURJQ0NJSEdJSUlLS0pOTUtOTk2cQQxYV1RaWVhbWlgnbZ5iYmJuY1xnZ2eXaD1zcW+Waj2Zaj2bajucaz6fbkJ+fn6teEqsek6MiYhIo9rChD28jWCZl5ffmFqqqqraqXy7urvgt43Tzcn+zJ7v3Mvz7ej9/f24dMlxAAAAQHRSTlMAJFyLrer90f//xQcbWf8tPEr//Gt8DtOOnrHm8//H/wTX/v/z/eOK/QxgqTrL/v7q/v8E/////v/+////////Ej4DsQAABOhJREFUWIWVlwl7qjoQhrvYxbKXRQhLAYnFtic2vaYxIvj//9WZgL3HVgs6TxefyLyZ+TKZhIuLM80zlHNdvpmi+epJD6aGd3TcQKGVngJQA+vYsOcWxD0pByv0jz1nJlwkJ+WgRegIQPXLqpodje2nOdGRiVIrY1VDT8rBxZlxMOgFhFdbHhzX95spPpmZB6NmxgBQJYfoQ0DAyoNUPb/kvN7WR9CHwSJGnJ+pmgmVgIZowwAVceamP6LSZozzZtsw5wRAwvnPQkgBwFqAO+jvGRMhDsTWii6C96EUFNNFEeehb35HOAVjotnWRxb4e/juJIrjPC9J5u4T5i1gC8vYX8uqH+kxeFNe82KfkDoFlYCBQvIc8I9LShlUrcis/W8AUEkN0z6AMdF1PSeEynwbujfbDlDPrN69AAHoMSYyAiiaKvtXdakLADnUq6EXQABx2UYAdd+Uzr8QOoBAv2voqZY76QC0A2zpxHd2bVRxMWHNlvu/aaiobhJGsZRgBxBNTTEtM1ftAAUAoJDTXwAGivI8l4AYyxyk4ZyJqiKtj+cXhDeg4a+ACexWzigpcd4aYMC9bqrZHqBHQ8UMZpTDhNKE/F/XdSU4STohUwCIpk9D2ENakMnw9wwnltqJ6AU5qXo07OztdbFYLL+Mr9bL5/kXXgIaetBnDgDL5efner1erVbrtaiWz//tA+qhpg6Az8/VuiIlMCoa/wDUA3UIe/ZZzr+pdb3abJrylr+/tCmkKZx2Oa17NewAMoJNQ0hdbxpBqg6gmMZcRRABG9DwYv7y3kbQgH9dN031502m4Dmup6I4F6Chp/bK+PYuIwBbL5erulm/thkoTmICALOZ6WlObxBvf5Yg4nq1sO/vx5jvVlFxQt9AMSOJYaJ+wPwVVFxhcJeG31/aUehTE3+CBUEWSszeFKSKXQTj+zGt3t8uuggiXOQlpwkqBtZh/taquNlUK16Bhrs61ELY4rDBOaeD6yBFkCrKRVh9FbLqoiSCPsHFQEvc5bBpCU29fEl3w56qPdj2gx/0SyjnQnixXLeA6rPwrfZ5RVEtZD/ZgeoNzK+oWggNqduQCxxHsJtVw3J8lMUAeBgoZMXwkxl0NTjZ2q6E8zhCKMlmoB/NJaA/fsVKZAsURB6NYBS2YwknshCCs1KXKfQDzARaFl1QQeXZVk55w+QHUhazDPkPANDSPn8vYDWzx+OxzXBJyXQ6rXmsTwLfdSxT9Zzx40N/MzBngoP/IxBwDv4f0w8eh46qKIpMD9l4YvZFoLilwNIdfu0Y5v/4mPIw2E0Kpz4RpPeqriICATw+SoQdYxkBhw62W3fFCLLZ7oz6LYOESgU6gl5KDar9FugZhuHNewBaxuj46VESIAcMKhKKw5Nu1vuApxYxlrUEP6wYOAb2zUoohQwkAVKAnZfDScbcE27WOwMRqQ3hQxDjcQznal6Kb3ecIfN8zDC4QxBSAsZiuCol2hkvaVZIiS0JsIp5WeI4j/yzXvLUAK4jNpi8ZoSTJKLFGWsgzUyw3Dol7MOJZWohOxegmCjCuAijkiHvworYKa8W32yuai7sPdDCVeBmy4eO4l9Mi3ihwWsTpqe9Iu7b5dXV9fVDTqPRaHSn63fX11dXl+f4j25ubm9vdf32f7u5GZ1BuLy6Ht3d3d2A3co/8Hl03R/CX0bO2Cm/ashLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 64800,
            actualAp: 3240,
            actualDps: 2208.96,
            magnification: "3600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAB5AABjJw1GPBNrLxUwSlMbT3WAOBt4OyE3VFj/AABKUElbTUUrXn6HQieNQCCMQiOMSi+YRyFhXkJRYlw7a29gYFe7RRaWVTpuZF6pUSelVC5tbW1XdoWeYznHVBxzc3KBcm46irabdV3GaSu6dEWOhHGPhXaze1F3jpbQeTuRkZGhkofyfTGfmo3Ik2HRklqfn56qo4/7kEOzqJ3Nrovhs3bEv7fNxarT0M/v2K7778Qmm1aUAAAAQHRSTlMAVomtxgIMhBw8hEUxXgEMyPz/mXdctPyf6YX8yELe/iG9jP4J3f/+/u01XsX6/sf//43Z/eGk//zl/rr84/7/us37AgAAA3ZJREFUWIXtlduSqjoQhl1rtiwUnIyAoIIEjZpwiqARkYn4/m+1G2emateuJePhdv4LSoT++LvT6XQ6LUI91Pb4W6HZ9DnAbDN76vOz/fwJA8vtZl8OLr+WDwFm+7RcNSWItsFDgGC6SdMx6kTv24ccIDRPx6txgLan6P7oJer3+5O3wXQTBKdTcD8gKibD4XAcvBcoegxwTIdOWs7rIgLAIylsM2e4TtNzWQTHc3w/oNObOOv1Oj3L7bKo3+9eBYR031mnGa3Bfizr+E4C6vVtMxGlLOV5i5aFPN1JQIOJM58LYYSb+hSjYCPlNlC6iqrrym2A/iqdD52s3MfHhhBtyizxFsnueEz0mzJ4c5ymD9aTXryXpyKaeYzxQ1WDEvUGguYNBuPJ0DGMt+l4L+U+CUl+AAGiGn0fr9qjbgf9MRxqGI7/tsroIecXABCE2e3oWmspkGXCc/THcVKnYYQUM5bnB87zPBfUVjp6Al+4rqmvwVUBAE0pxYZhuC4A8hwbDBs00ZXRcdeSCJqOdV0fWaaPnRQMGJi4hOSNBUMwLOtjsquEfzVe0WC5duKiqsIGbgx8WuCcQxmqAxfCvBLe1Reh4JxhjAlhOW8cNAAf7po/LpUUmIXX2kE1w6qqBLyMsUtwlkE4xqam+QTSx5g1LkCLa8ugqMW5rhhhnGAXG9AJBvE9q6tYODUolBTDhTH/ej9Gx1oyJhoGcfGlhJbmjZA6pUZWYgqmpJfsg6uAII5DXtUVERxKL+pauFpX81Zji9KyzErXpTKOi7bjZhRW55rzmhOXCylllaDu1DE8D/aSLDOa7aOg7bxTTOsdDOzeQ0JIVp/PtSwiNOspCAXxTgJiEyzbDCiaEse2P9Mt1yUCwoHxNVVfZ7u6PsbfHJewj5A10r0QuodLeW60/Vw1FB+/jb9IVRTN9l3Cmhwgi9D6JCzjm+I/ctEbQilhBFQy/No8r6+3xjflhB4mjApZV2H7BPh7vOa7FwLsqYy1T4C/Svd8zwYCZpSG9uKWYfo/B6qqfmTB6UK5+/sf6lrEtmFfao+Fgwvb1nWfuPf7/wLoKvRD2+69gWEy7t9ymFyV6rvW/U3wH404ebiGjZTkcHWC3qCuavnMfqIEis3JU/Hac2uoWolvag928cWArqlPreCPfvSjX79fXv750svL719tL/8LiTWHFfrH6E8AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 13500,
            actualDps: 6532.26,
            magnification: "600%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "221",
          enemyName: "ゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAAAGBwcRCQNhAQFIIgFLJANHJwxSJwJRKANLLAJSKQJSKgJTKgIAAP5VLAJXLQJZLwIVQGRaMANdMAJhLwJjNQNkNwKWHwdqOQIHVotsQAZuQwp1RQJgTCgQYZXWFg52Swl6TAh9SwQBeIZ/VA6FUwtUYl4va5UlcKCKWwmPWwOMXAqXYgIqeq+caAaibQQ1hbmodQObdjNZhaCoeh6QfWuxhitjosuwk2Jqo8l/ut7ErYfk07b07eb9/PuVUdaPAAAAQHRSTlMAGoHvA5v2dv9hDDIgTgG4i88UP+P/86j//yd8V///a//wnf8Dvf//SqLb//H/1////f/4/v/N/+v/////////pNMJVwAABEZJREFUWIWdl313ojoQxr3bFpGXC2hAUxtXZI1aGoMCjVjQ7/+t7gTQun/sEu60R8/p6fx4Jpk8GQaDv4Vh2kPXHdmW8dd/+2P6yEG+jAA5o/+BMJ0AknET4crqmz/xIhpHRGYTEif5uifBciCfQXDGEwiRz597AUZBA+A8KaqqOObivZcEY0qiuAXkoroUR5G+9arAI42CJCmrorhWIGHeB2CimwJxqYS4XPJcrPosgh00CjiHp+dlrWDVpxduAKngerlcy2MvBYYhS2gkJOX1eq1EchTq+2iuVqZHgBDXhKIsRZIcuTdXrMGYRnw+xTVBrgKXncRZRD8UN9JCPlu7mGBZBY1lUEqDkDLFjbQDPWYhHANdn81mFMORWi45ppQp7sPI12kYkoj4+my5THzd92fLGUJRrAiYBD6ZT2AbCPZBApbF4MXnp/IaGFM0tSwA0LQooPoopmlaXC6fqrsATmYMzJASCi1QFGUKP0Valp+9juMkiMkGOiBNU543ka7f1JvZcgiPYmifNhm+hRCpchHgRzEAeCJ76NgGID4mys+Hc0BZ3YMPCKF4Ig1XHsW6hx8VSAlrJUDtJrWd1fmPBDVjHOLWTNoS7oCj+DBVKpji6K6A/ybhqLSKBngBnJxHCQ0CvpUUyC5uvIS1y/gdSmtgSTdqbxX+G4JzpV0wHNxKaKvg9/xYyRefXQl4ILTBeByqdeIkaAisCc6adEbpVKECY2LbXu2oUkMLgXzpiwoCnm0YK4IANwR5NdxMlUY0VDiMNtJ9MDAMHy3iO1TyDQccFBNK6rkEXPEhH7sKC2BrACCUR1KDRNwo4K/6qDt/MNR1KCGKCb5NV6T+9X1dRypdLAGyiDqftAx4uIwXlSacaDVAjnff+okEaI6SExiO1miAOr4XkMBfPEVPN71arg47IfefsfpQkogpz2i2ds+/H0cR02Oq6MeDEVxk+H6cYcAsBAyZNFEe8uZRksPi0WY4SY5FdSlzEcfKAJcmOb7NJrUAmDIFj1SvFAlguFEgp1wYEstr2QcwJIzUJdQKIDmvAJCgD9V5f0jDQC5i3I54l+oKgA97nSjO+5P3d+8GYAlMmTAkFnAh2SFfm5bCu4+x4gjfJXBRVqUQyXpsTGmEEJqana46Z3RRe4H0My5l5JxmW5jdoL0j4nWeyTfKs2zR9JIsA/xskx12YxP5mDKCnc5FCCnNsmyzWbSxyb4O++2vkfQ6GBpRR/54qEsvgKxzlh2y8zk7HL5O21+N10B0ASwP8sEAAXA4HM7yc38+bW+nTNe9DoCtgSlyihfn036///o67cOfJwmwGqvQhh0AtzZFcLPz7vV1d/46eevxDiqQL5JA0DqNzW1M0Q9228F4d9gfwpUx/repbvjy0v0KfCtV8xx7vPv5ulsgz701saFyNb60BB+jHzLgpsDuP92J97BekKahp6cn7akN5Dk//kj4Dwfb6H2aPqjiAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 225000,
            ap: 10000,
            dps: 821.92,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 1125000,
            actualAp: 50000,
            actualDps: 4109.6,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9990,
            actualDps: 5449.1,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "1080000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 22500,
            actualDps: 5818.95,
            magnification: "500%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "1080000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1080000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 3375,
            actualDps: 2596.2,
            magnification: "1500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "960000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAACAAECAAEFAAIGAQMFAwEHAgMNBQZnADVJFCWEACd2DTd4Dzd0FDJ5Ezl0HjN9GD6AGUBgNB5aOR1iOhdoNyKHIkSGI0aFJ0VpQCS7FjL/AACKLkqVME6CPzygK1WRPk+IVDSdUwumQ1zBMm+rQGSYVWKjYE/aQYOtX2+8WXGYdmTzRJSzdkHUX4TDdnC8eIn4WJ2viH/cb4/zbp/Sk0m+m4Tth6LYsJD6na39qbfSw8D8tsHyyaD33MP69/amwCeBAAAAQHRSTlMAOftdjxfjwQf+BBspDzlHVm8fCv9gkoCjgv4BsNfs/b7+D//85ND//uj//v///f7t//7+//7+////////////7dAYKgAABjhJREFUWIWdVwl7osgW7fSSGJQtMYgTEOqVWFBIIRRWsQj5//9qbpFlWqdNmHe/rJpzOHe/+fbtv9hsYVuz/4S4gK92h53x/+PNkDetdPSpgOfns181Y9e0bdMk5jS4blqWaRiLxVzXAK3pc08CvGkqR70wgcA7gCXJLnQtw1o5rnc4tQ1QyMh9epxAMHO7U3sCa5skKiU8+vWXpqF1+DCBQFt1fa5wbdtSeWqVKQbGqPAmKbDrQRCuvG7l+E391JwaisvdFAXPlhj6I2ZvwA9r2zIV6ykSjMPQiwxh3pzb6ZSjSQTz3dCnZdeVlL9rgDBweZJNNKkadQ8I6peXlyFnzVsIoRKopJzbz1/jIQ31UBPF0BFVQpABSEdDOTA4U0pp7tGhTrthGJMx+gGPbxiXmPuLCQJsSoVIIeQ1oZJThZdYKeCYBe78SwJjVzGcAkFKAPwqgFHJAE1xnthfOaE7rNjvQTJHQTU+umk4phRjQjDKZfiVE0ZUAUFRFBUHMAcmwGOaH+taIIJkYn8+mTSH75UVlWQxRI4BSUDyuu97iClBeRV+HoXFrtrHsZIgKRBQJjkmGSF1XQ/lcrnEVWR9SmAmVRzEowTMFAHHuczREhExCJQhVLHVv2UvzMV7bK2k2m5HJ/bbuKooDQhH8GREeiiOLEP83wS6DSPXfKtRM5JYuaAIQAUNIHBLeLJIeyhwhBBjzgV+Zh+g5py32M5Duo3fFRQFI2SJ6uxIFAE0qShZfKFAM5PhZRCrNx80GyIQfxBUGC3rFwHSBeD7bqjZ9iKIc68D/D/lYUQFpCEGB7ZbVQxLVHY1QUIJgE8RX7TDs3UAvPsRxG9GUuyVE0EcB2MySZpCWwB2JMi3F90wc0Dh768BAeQxBgKQMDLktQLDR0b6HgfReRDnYdPufhdlQCGoPKpQBCoRklJVh30JdViLIKDRGcEiavhKO2OsYjqG8JUhphWjLRCkOSMQwiA+J4DeOQ/r4woWQLEf4wAMAfRhxcTYCVlJWFFw/4Jgf5GXhQeQfbylYyopLzCrRgkiC1d+kkT2+Z/7++3vLmi6vnB8DqncqrbccnCDSXI85kn49KAbtm2eb/m5t4+9jyTo5srzVqa141UR4wq+sGq/r6CcNmvzQe2E2eVA0lZQMfYr6cxwEy4lj1aWl7DE8xMG3kgpKUrR1cW88ON9tFrMtNnc9rmsGKtg6ixMy5wvrJX/V4BxgLLj8epe1awIoh06KydM4Fmh4/qU++7o6bPu/gUG3XjMNlcl6LYPXcP5KN4G8Qlm79NXswEfQEtDMx2uMsxML2LAwCLXNHf10EsMk+y1PI2IwkRGaZYOw/Xdrs0tx/Nc29ChsKHuGxowycbqMDYpDGNYc0P9CQFQzHQdEqRZh6aFawaGUsWUD5q1gU4qO9iTZTlhteuOlOMpwOIiVgS6ixRB2Q3dbj3hOtFcnmdql1VFxUJzPreTvByGFKVlMulA0xycifSoCFRKQkjsMet7yEFoTsHDTN7A8M5kBbNMKoO1lvU1OX6xTP6xhx0Q0KIYCca9zrL+mOXe1DP5Max7gQuFlZUc2yCrszyyJt24rwQ1iaWgFE5NWVWK4EjIRAGPDw9mUh83sSR1X+fqWoWZTHAQTDlswJ52Oy8/Rk8hyFYDKM9zXJ4aOEyiCYf+bG54dYeO2fpx4eJjrWZYX9MTOIIvd8mfbL7aJaiGJYjgxn/aYJIfYYqRtK1g2/tfx1B3xAkuO5ERVIpog+Ci2LiO4ySNGsxfHDVKv3VoC5x2dSkEqkgJRHVi6jNozj1mvvElwTysq9j3iehEioJNKkrRqf8tZo7gmAeebRifJlKzDw3zzYd1Wm5y5lmh6LouhOJ/tksZBFiwzebTAxOUwuk0+/awXrtChqabpkmiul9b5ZjKHGNcYud/1yMAAuhK/Uf2+AgThUa+tzbH7oNrg8m2lQKXJVpfZVAELHTGUC120D/cfffY2hZVU5dwnyH/6XouF6GUuQhvwH7cpbDG/Z9vdkdkDms1zWAz/boeg5ufBM6I4Pb29vv37/dg3z/sfqmqA5H727u7nz9u/kzy6+ft/Tnsd7uH0+7trdu7mz8r+HXzQ8kFu719lfFh4wvqHfiDCwF/A7vTQM/jlrAFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 13330,
            actualDps: 8508.5,
            magnification: "500%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-5.0s",
            delayFrames: "150-150f",
            baseHpRatio: "960000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 10000,
            actualDps: 6666.7,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "960000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 10000,
            actualDps: 6666.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "960000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 500,
            actualAp: 22,
            actualDps: 17.31,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "960000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 2700,
            actualDps: 1840.8,
            magnification: "3000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "840000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAB5AABjJw1GPBNrLxUwSlMbT3WAOBt4OyE3VFj/AABKUElbTUUrXn6HQieNQCCMQiOMSi+YRyFhXkJRYlw7a29gYFe7RRaWVTpuZF6pUSelVC5tbW1XdoWeYznHVBxzc3KBcm46irabdV3GaSu6dEWOhHGPhXaze1F3jpbQeTuRkZGhkofyfTGfmo3Ik2HRklqfn56qo4/7kEOzqJ3Nrovhs3bEv7fNxarT0M/v2K7778Qmm1aUAAAAQHRSTlMAVomtxgIMhBw8hEUxXgEMyPz/mXdctPyf6YX8yELe/iG9jP4J3f/+/u01XsX6/sf//43Z/eGk//zl/rr84/7/us37AgAAA3ZJREFUWIXtlduSqjoQhl1rtiwUnIyAoIIEjZpwiqARkYn4/m+1G2emateuJePhdv4LSoT++LvT6XQ6LUI91Pb4W6HZ9DnAbDN76vOz/fwJA8vtZl8OLr+WDwFm+7RcNSWItsFDgGC6SdMx6kTv24ccIDRPx6txgLan6P7oJer3+5O3wXQTBKdTcD8gKibD4XAcvBcoegxwTIdOWs7rIgLAIylsM2e4TtNzWQTHc3w/oNObOOv1Oj3L7bKo3+9eBYR031mnGa3Bfizr+E4C6vVtMxGlLOV5i5aFPN1JQIOJM58LYYSb+hSjYCPlNlC6iqrrym2A/iqdD52s3MfHhhBtyizxFsnueEz0mzJ4c5ymD9aTXryXpyKaeYzxQ1WDEvUGguYNBuPJ0DGMt+l4L+U+CUl+AAGiGn0fr9qjbgf9MRxqGI7/tsroIecXABCE2e3oWmspkGXCc/THcVKnYYQUM5bnB87zPBfUVjp6Al+4rqmvwVUBAE0pxYZhuC4A8hwbDBs00ZXRcdeSCJqOdV0fWaaPnRQMGJi4hOSNBUMwLOtjsquEfzVe0WC5duKiqsIGbgx8WuCcQxmqAxfCvBLe1Reh4JxhjAlhOW8cNAAf7po/LpUUmIXX2kE1w6qqBLyMsUtwlkE4xqam+QTSx5g1LkCLa8ugqMW5rhhhnGAXG9AJBvE9q6tYODUolBTDhTH/ej9Gx1oyJhoGcfGlhJbmjZA6pUZWYgqmpJfsg6uAII5DXtUVERxKL+pauFpX81Zji9KyzErXpTKOi7bjZhRW55rzmhOXCylllaDu1DE8D/aSLDOa7aOg7bxTTOsdDOzeQ0JIVp/PtSwiNOspCAXxTgJiEyzbDCiaEse2P9Mt1yUCwoHxNVVfZ7u6PsbfHJewj5A10r0QuodLeW60/Vw1FB+/jb9IVRTN9l3Cmhwgi9D6JCzjm+I/ctEbQilhBFQy/No8r6+3xjflhB4mjApZV2H7BPh7vOa7FwLsqYy1T4C/Svd8zwYCZpSG9uKWYfo/B6qqfmTB6UK5+/sf6lrEtmFfao+Fgwvb1nWfuPf7/wLoKvRD2+69gWEy7t9ymFyV6rvW/U3wH404ebiGjZTkcHWC3qCuavnMfqIEis3JU/Hac2uoWolvag928cWArqlPreCPfvSjX79fXv750svL719tL/8LiTWHFfrH6E8AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 11250,
            actualDps: 5443.55,
            magnification: "500%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "840000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "221",
          enemyName: "ゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAAAGBwcRCQNhAQFIIgFLJANHJwxSJwJRKANLLAJSKQJSKgJTKgIAAP5VLAJXLQJZLwIVQGRaMANdMAJhLwJjNQNkNwKWHwdqOQIHVotsQAZuQwp1RQJgTCgQYZXWFg52Swl6TAh9SwQBeIZ/VA6FUwtUYl4va5UlcKCKWwmPWwOMXAqXYgIqeq+caAaibQQ1hbmodQObdjNZhaCoeh6QfWuxhitjosuwk2Jqo8l/ut7ErYfk07b07eb9/PuVUdaPAAAAQHRSTlMAGoHvA5v2dv9hDDIgTgG4i88UP+P/86j//yd8V///a//wnf8Dvf//SqLb//H/1////f/4/v/N/+v/////////pNMJVwAABEZJREFUWIWdl313ojoQxr3bFpGXC2hAUxtXZI1aGoMCjVjQ7/+t7gTQun/sEu60R8/p6fx4Jpk8GQaDv4Vh2kPXHdmW8dd/+2P6yEG+jAA5o/+BMJ0AknET4crqmz/xIhpHRGYTEif5uifBciCfQXDGEwiRz597AUZBA+A8KaqqOObivZcEY0qiuAXkoroUR5G+9arAI42CJCmrorhWIGHeB2CimwJxqYS4XPJcrPosgh00CjiHp+dlrWDVpxduAKngerlcy2MvBYYhS2gkJOX1eq1EchTq+2iuVqZHgBDXhKIsRZIcuTdXrMGYRnw+xTVBrgKXncRZRD8UN9JCPlu7mGBZBY1lUEqDkDLFjbQDPWYhHANdn81mFMORWi45ppQp7sPI12kYkoj4+my5THzd92fLGUJRrAiYBD6ZT2AbCPZBApbF4MXnp/IaGFM0tSwA0LQooPoopmlaXC6fqrsATmYMzJASCi1QFGUKP0Valp+9juMkiMkGOiBNU543ka7f1JvZcgiPYmifNhm+hRCpchHgRzEAeCJ76NgGID4mys+Hc0BZ3YMPCKF4Ig1XHsW6hx8VSAlrJUDtJrWd1fmPBDVjHOLWTNoS7oCj+DBVKpji6K6A/ybhqLSKBngBnJxHCQ0CvpUUyC5uvIS1y/gdSmtgSTdqbxX+G4JzpV0wHNxKaKvg9/xYyRefXQl4ILTBeByqdeIkaAisCc6adEbpVKECY2LbXu2oUkMLgXzpiwoCnm0YK4IANwR5NdxMlUY0VDiMNtJ9MDAMHy3iO1TyDQccFBNK6rkEXPEhH7sKC2BrACCUR1KDRNwo4K/6qDt/MNR1KCGKCb5NV6T+9X1dRypdLAGyiDqftAx4uIwXlSacaDVAjnff+okEaI6SExiO1miAOr4XkMBfPEVPN71arg47IfefsfpQkogpz2i2ds+/H0cR02Oq6MeDEVxk+H6cYcAsBAyZNFEe8uZRksPi0WY4SY5FdSlzEcfKAJcmOb7NJrUAmDIFj1SvFAlguFEgp1wYEstr2QcwJIzUJdQKIDmvAJCgD9V5f0jDQC5i3I54l+oKgA97nSjO+5P3d+8GYAlMmTAkFnAh2SFfm5bCu4+x4gjfJXBRVqUQyXpsTGmEEJqana46Z3RRe4H0My5l5JxmW5jdoL0j4nWeyTfKs2zR9JIsA/xskx12YxP5mDKCnc5FCCnNsmyzWbSxyb4O++2vkfQ6GBpRR/54qEsvgKxzlh2y8zk7HL5O21+N10B0ASwP8sEAAXA4HM7yc38+bW+nTNe9DoCtgSlyihfn036///o67cOfJwmwGqvQhh0AtzZFcLPz7vV1d/46eevxDiqQL5JA0DqNzW1M0Q9228F4d9gfwpUx/repbvjy0v0KfCtV8xx7vPv5ulsgz701saFyNb60BB+jHzLgpsDuP92J97BekKahp6cn7akN5Dk//kj4Dwfb6H2aPqjiAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 225000,
            ap: 10000,
            dps: 821.92,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 40000,
            actualDps: 3287.68,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "840000%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7992,
            actualDps: 4359.28,
            magnification: "800%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "720000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAGBwgLExgVSGoPV2yuGRkjXX18QEBwR0ciZIhYVFSYODodZpcmaZwtbpOTTEgzeJ9id3gjiMqPcER5dHI6irZAjbrQYVRElMB/hXyVfmewhhGDh4hBp+SDmKKGnZTJkzJsqL+Vn6RYuO50sM2tnZmjo6PFqTCkqJm0skaEtcatucC4tbTxpILdwR92zviZxtbdyU/SxoSR2fj42AvDztDPzs6t5vvj2tX98x3v7Or8+/v///+OvWS+AAAAQHRSTlMAEE2ndMdwCv8jZC46C86/+1CVkWv/BSbh//zC/8IgVP6T/f/+df/Z2r1y/v78pfr+////3MD///7m//3+/v8AGjzckgAABS5JREFUWIXtlmGXmjoQhr23e0vpgoKogKJICCgNERDFQAz9///qTqK765521972y/2wc46s6+F9MvPOJDD4/ocx+AB8AD4AH4D/D+CHcN3Zjz/+l3CzxPwjwCxpQwUKH3+TEPIdpDDbZe7v6bVIAdx2pz3/Zrrh5Jfq0jTdcLY8GUhA9ixxk7YIfwGgGVG2obRQHsyOLNEvObgZF7v7rdHsBa0xbTq20eX/CaOLKAQG6Pv2vh+6Q2sUAKKpN+pud9M0Nd1ENuhFci8BzVhQEgeUBLgO6kQB6rqmFFHE+vsJaLZH8zjAwKjjmCr/kzqgiNCg4H2/u+egAfoqBr36BKqGiAIqRoRBBZH2vl5f0PxUIQmhcQUXaIO2Q3FMUEyY6IVnv0vQnHV+OuVYQaqqyimYoGUIvmGogPccecadAk6nU4CrUwWQE1wjBQBXfB8xLlhOF/p7CYD0lF+yqE6H4wFHmmZ4PsbY93FdM5ZX2Hm7CMMjsCxSFHz4tppN/IXtgD7d77GcrKYmwLffcaA6A0BR0LfZQPts+Zbvg7xp9nDpgFCdyJtFaAt8Op9PvqweLVeaPbIsy19f9LQBfdcxVlVvpmCs8/P5XEnKOZjA8lIvAU3TYKwAQnQMUnjDhc9Qwfmco/P5ePAMpVcJNEBIwQOogdVc5Ln/8xSgB2cJIIdvs5UD5cMOwD6WxUMJuAgsCyHa93X9RiO0BVGAXNkH9WNQUnBgv6f1HrPCsgLW8J5h5F1sNN3Hx5u9oXvVGVqfL1eyHGsK+aeptHBPWd1QzFgBf2veoROWNZjhspgPxy8HruFVx9VstZzIbEYSYE39KQBSymvIBVMKrWCMHc4EajDDIubb8dcbAD6otWV6OgCm0/VUepjSQhQIENCHGjFWT4750By4Wy6yV48eW84OaKVBhqXkEpCmARHsCwIDEQoCTmi4Wm7dQVgIAVtt5kJcjLC91Us2KgGVwTq1CBdBECACAMIRsgdRmZgREzw0w13L222kzinbmb0CgIVTmKP1GqOCEdqogNbCGIW8BQcZy7IWzggel0vphH0zHhKwx9cU1jilsplyoFhNJ3A8F7wgBRcFZ5wV2+VyOASCcXNU6KNp2oDY95ULaXrVd72QLTSXoBZ9LwTIE9c0H2Uz9JtNpo38BpJPJUGN0iUa0aXUHszClks1IFgRXRw05dPspgQvxWAiOLhW2+mq79posQ/NpAV5yQUvBSMtZPDjs8JeU3+qUkgvCMlI4dmiOfsog5X7sixj+DDGeXtMLo3U9OccjDWVk3AhAEN9W+hQ7LAoIf1exGxezlnMBJO4Vj1xjSx8ImiL2r8Qrgi5vh3ulvNS8BdAGReCSTt5KV9mjLrbXY99yHQ9lbPwBEhTum1LEc/nvCz75xLighUQDHaFbMOma647XR+leGQ7FwRAKKwDy/D5ly8xmRdQOI/jMp6TgmwnYRiOt/OxzJvSyAWC5kbQvpGhOd4IzuSaQcc4TMwSJsYK6gJlW1iWEAJXFMoWmI/jIegm9mSziZIk2qRwGNBNGG2OLZfSbRYlIWwac+SnXbfR3TDaAoAgQsKLa+ZYVg6NcBYbzDi2/L3oKGjbLIp8B6RXb6br/V4eqrMQkSzaFuwKGDwdTfByNGkFh/u6xg/w6OHh4dN04/z9FKOpt5Azb0bwAgRbkj8BbkLuVBijdD3651V8gnh4+GzIkTe/zrfQuQn52RuHeRStM/I8R/vrddzc8/h1AtNnjkn0kzcOM8lCU9P1O+8S8s7h+CWBfwGUoSFG3SNP3wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 640000,
            actualAp: 18000,
            actualDps: 4655.16,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "720000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "720000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2700,
            actualDps: 2076.96,
            magnification: "1200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 10664,
            actualDps: 6806.8,
            magnification: "400%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-5.0s",
            delayFrames: "150-150f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 8000,
            actualDps: 5333.36,
            magnification: "800%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 8000,
            actualDps: 5333.36,
            magnification: "800%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 500,
            actualAp: 22,
            actualDps: 17.31,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2160,
            actualDps: 1472.64,
            magnification: "2400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "480000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAB5AABjJw1GPBNrLxUwSlMbT3WAOBt4OyE3VFj/AABKUElbTUUrXn6HQieNQCCMQiOMSi+YRyFhXkJRYlw7a29gYFe7RRaWVTpuZF6pUSelVC5tbW1XdoWeYznHVBxzc3KBcm46irabdV3GaSu6dEWOhHGPhXaze1F3jpbQeTuRkZGhkofyfTGfmo3Ik2HRklqfn56qo4/7kEOzqJ3Nrovhs3bEv7fNxarT0M/v2K7778Qmm1aUAAAAQHRSTlMAVomtxgIMhBw8hEUxXgEMyPz/mXdctPyf6YX8yELe/iG9jP4J3f/+/u01XsX6/sf//43Z/eGk//zl/rr84/7/us37AgAAA3ZJREFUWIXtlduSqjoQhl1rtiwUnIyAoIIEjZpwiqARkYn4/m+1G2emateuJePhdv4LSoT++LvT6XQ6LUI91Pb4W6HZ9DnAbDN76vOz/fwJA8vtZl8OLr+WDwFm+7RcNSWItsFDgGC6SdMx6kTv24ccIDRPx6txgLan6P7oJer3+5O3wXQTBKdTcD8gKibD4XAcvBcoegxwTIdOWs7rIgLAIylsM2e4TtNzWQTHc3w/oNObOOv1Oj3L7bKo3+9eBYR031mnGa3Bfizr+E4C6vVtMxGlLOV5i5aFPN1JQIOJM58LYYSb+hSjYCPlNlC6iqrrym2A/iqdD52s3MfHhhBtyizxFsnueEz0mzJ4c5ymD9aTXryXpyKaeYzxQ1WDEvUGguYNBuPJ0DGMt+l4L+U+CUl+AAGiGn0fr9qjbgf9MRxqGI7/tsroIecXABCE2e3oWmspkGXCc/THcVKnYYQUM5bnB87zPBfUVjp6Al+4rqmvwVUBAE0pxYZhuC4A8hwbDBs00ZXRcdeSCJqOdV0fWaaPnRQMGJi4hOSNBUMwLOtjsquEfzVe0WC5duKiqsIGbgx8WuCcQxmqAxfCvBLe1Reh4JxhjAlhOW8cNAAf7po/LpUUmIXX2kE1w6qqBLyMsUtwlkE4xqam+QTSx5g1LkCLa8ugqMW5rhhhnGAXG9AJBvE9q6tYODUolBTDhTH/ej9Gx1oyJhoGcfGlhJbmjZA6pUZWYgqmpJfsg6uAII5DXtUVERxKL+pauFpX81Zji9KyzErXpTKOi7bjZhRW55rzmhOXCylllaDu1DE8D/aSLDOa7aOg7bxTTOsdDOzeQ0JIVp/PtSwiNOspCAXxTgJiEyzbDCiaEse2P9Mt1yUCwoHxNVVfZ7u6PsbfHJewj5A10r0QuodLeW60/Vw1FB+/jb9IVRTN9l3Cmhwgi9D6JCzjm+I/ctEbQilhBFQy/No8r6+3xjflhB4mjApZV2H7BPh7vOa7FwLsqYy1T4C/Svd8zwYCZpSG9uKWYfo/B6qqfmTB6UK5+/sf6lrEtmFfao+Fgwvb1nWfuPf7/wLoKvRD2+69gWEy7t9ymFyV6rvW/U3wH404ebiGjZTkcHWC3qCuavnMfqIEis3JU/Hac2uoWolvag928cWArqlPreCPfvSjX79fXv750svL719tL/8LiTWHFfrH6E8AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 9000,
            actualDps: 4354.84,
            magnification: "400%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "480000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "221",
          enemyName: "ゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAAAGBwcRCQNhAQFIIgFLJANHJwxSJwJRKANLLAJSKQJSKgJTKgIAAP5VLAJXLQJZLwIVQGRaMANdMAJhLwJjNQNkNwKWHwdqOQIHVotsQAZuQwp1RQJgTCgQYZXWFg52Swl6TAh9SwQBeIZ/VA6FUwtUYl4va5UlcKCKWwmPWwOMXAqXYgIqeq+caAaibQQ1hbmodQObdjNZhaCoeh6QfWuxhitjosuwk2Jqo8l/ut7ErYfk07b07eb9/PuVUdaPAAAAQHRSTlMAGoHvA5v2dv9hDDIgTgG4i88UP+P/86j//yd8V///a//wnf8Dvf//SqLb//H/1////f/4/v/N/+v/////////pNMJVwAABEZJREFUWIWdl313ojoQxr3bFpGXC2hAUxtXZI1aGoMCjVjQ7/+t7gTQun/sEu60R8/p6fx4Jpk8GQaDv4Vh2kPXHdmW8dd/+2P6yEG+jAA5o/+BMJ0AknET4crqmz/xIhpHRGYTEif5uifBciCfQXDGEwiRz597AUZBA+A8KaqqOObivZcEY0qiuAXkoroUR5G+9arAI42CJCmrorhWIGHeB2CimwJxqYS4XPJcrPosgh00CjiHp+dlrWDVpxduAKngerlcy2MvBYYhS2gkJOX1eq1EchTq+2iuVqZHgBDXhKIsRZIcuTdXrMGYRnw+xTVBrgKXncRZRD8UN9JCPlu7mGBZBY1lUEqDkDLFjbQDPWYhHANdn81mFMORWi45ppQp7sPI12kYkoj4+my5THzd92fLGUJRrAiYBD6ZT2AbCPZBApbF4MXnp/IaGFM0tSwA0LQooPoopmlaXC6fqrsATmYMzJASCi1QFGUKP0Valp+9juMkiMkGOiBNU543ka7f1JvZcgiPYmifNhm+hRCpchHgRzEAeCJ76NgGID4mys+Hc0BZ3YMPCKF4Ig1XHsW6hx8VSAlrJUDtJrWd1fmPBDVjHOLWTNoS7oCj+DBVKpji6K6A/ybhqLSKBngBnJxHCQ0CvpUUyC5uvIS1y/gdSmtgSTdqbxX+G4JzpV0wHNxKaKvg9/xYyRefXQl4ILTBeByqdeIkaAisCc6adEbpVKECY2LbXu2oUkMLgXzpiwoCnm0YK4IANwR5NdxMlUY0VDiMNtJ9MDAMHy3iO1TyDQccFBNK6rkEXPEhH7sKC2BrACCUR1KDRNwo4K/6qDt/MNR1KCGKCb5NV6T+9X1dRypdLAGyiDqftAx4uIwXlSacaDVAjnff+okEaI6SExiO1miAOr4XkMBfPEVPN71arg47IfefsfpQkogpz2i2ds+/H0cR02Oq6MeDEVxk+H6cYcAsBAyZNFEe8uZRksPi0WY4SY5FdSlzEcfKAJcmOb7NJrUAmDIFj1SvFAlguFEgp1wYEstr2QcwJIzUJdQKIDmvAJCgD9V5f0jDQC5i3I54l+oKgA97nSjO+5P3d+8GYAlMmTAkFnAh2SFfm5bCu4+x4gjfJXBRVqUQyXpsTGmEEJqana46Z3RRe4H0My5l5JxmW5jdoL0j4nWeyTfKs2zR9JIsA/xskx12YxP5mDKCnc5FCCnNsmyzWbSxyb4O++2vkfQ6GBpRR/54qEsvgKxzlh2y8zk7HL5O21+N10B0ASwP8sEAAXA4HM7yc38+bW+nTNe9DoCtgSlyihfn036///o67cOfJwmwGqvQhh0AtzZFcLPz7vV1d/46eevxDiqQL5JA0DqNzW1M0Q9228F4d9gfwpUx/repbvjy0v0KfCtV8xx7vPv5ulsgz701saFyNb60BB+jHzLgpsDuP92J97BekKahp6cn7akN5Dk//kj4Dwfb6H2aPqjiAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 225000,
            ap: 10000,
            dps: 821.92,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 30000,
            actualDps: 2465.76,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "480000%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 135000,
            actualAp: 5994,
            actualDps: 3269.46,
            magnification: "600%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "360000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAGBwgLExgVSGoPV2yuGRkjXX18QEBwR0ciZIhYVFSYODodZpcmaZwtbpOTTEgzeJ9id3gjiMqPcER5dHI6irZAjbrQYVRElMB/hXyVfmewhhGDh4hBp+SDmKKGnZTJkzJsqL+Vn6RYuO50sM2tnZmjo6PFqTCkqJm0skaEtcatucC4tbTxpILdwR92zviZxtbdyU/SxoSR2fj42AvDztDPzs6t5vvj2tX98x3v7Or8+/v///+OvWS+AAAAQHRSTlMAEE2ndMdwCv8jZC46C86/+1CVkWv/BSbh//zC/8IgVP6T/f/+df/Z2r1y/v78pfr+////3MD///7m//3+/v8AGjzckgAABS5JREFUWIXtlmGXmjoQhr23e0vpgoKogKJICCgNERDFQAz9///qTqK765521972y/2wc46s6+F9MvPOJDD4/ocx+AB8AD4AH4D/D+CHcN3Zjz/+l3CzxPwjwCxpQwUKH3+TEPIdpDDbZe7v6bVIAdx2pz3/Zrrh5Jfq0jTdcLY8GUhA9ixxk7YIfwGgGVG2obRQHsyOLNEvObgZF7v7rdHsBa0xbTq20eX/CaOLKAQG6Pv2vh+6Q2sUAKKpN+pud9M0Nd1ENuhFci8BzVhQEgeUBLgO6kQB6rqmFFHE+vsJaLZH8zjAwKjjmCr/kzqgiNCg4H2/u+egAfoqBr36BKqGiAIqRoRBBZH2vl5f0PxUIQmhcQUXaIO2Q3FMUEyY6IVnv0vQnHV+OuVYQaqqyimYoGUIvmGogPccecadAk6nU4CrUwWQE1wjBQBXfB8xLlhOF/p7CYD0lF+yqE6H4wFHmmZ4PsbY93FdM5ZX2Hm7CMMjsCxSFHz4tppN/IXtgD7d77GcrKYmwLffcaA6A0BR0LfZQPts+Zbvg7xp9nDpgFCdyJtFaAt8Op9PvqweLVeaPbIsy19f9LQBfdcxVlVvpmCs8/P5XEnKOZjA8lIvAU3TYKwAQnQMUnjDhc9Qwfmco/P5ePAMpVcJNEBIwQOogdVc5Ln/8xSgB2cJIIdvs5UD5cMOwD6WxUMJuAgsCyHa93X9RiO0BVGAXNkH9WNQUnBgv6f1HrPCsgLW8J5h5F1sNN3Hx5u9oXvVGVqfL1eyHGsK+aeptHBPWd1QzFgBf2veoROWNZjhspgPxy8HruFVx9VstZzIbEYSYE39KQBSymvIBVMKrWCMHc4EajDDIubb8dcbAD6otWV6OgCm0/VUepjSQhQIENCHGjFWT4750By4Wy6yV48eW84OaKVBhqXkEpCmARHsCwIDEQoCTmi4Wm7dQVgIAVtt5kJcjLC91Us2KgGVwTq1CBdBECACAMIRsgdRmZgREzw0w13L222kzinbmb0CgIVTmKP1GqOCEdqogNbCGIW8BQcZy7IWzggel0vphH0zHhKwx9cU1jilsplyoFhNJ3A8F7wgBRcFZ5wV2+VyOASCcXNU6KNp2oDY95ULaXrVd72QLTSXoBZ9LwTIE9c0H2Uz9JtNpo38BpJPJUGN0iUa0aXUHszClks1IFgRXRw05dPspgQvxWAiOLhW2+mq79posQ/NpAV5yQUvBSMtZPDjs8JeU3+qUkgvCMlI4dmiOfsog5X7sixj+DDGeXtMLo3U9OccjDWVk3AhAEN9W+hQ7LAoIf1exGxezlnMBJO4Vj1xjSx8ImiL2r8Qrgi5vh3ulvNS8BdAGReCSTt5KV9mjLrbXY99yHQ9lbPwBEhTum1LEc/nvCz75xLighUQDHaFbMOma647XR+leGQ7FwRAKKwDy/D5ly8xmRdQOI/jMp6TgmwnYRiOt/OxzJvSyAWC5kbQvpGhOd4IzuSaQcc4TMwSJsYK6gJlW1iWEAJXFMoWmI/jIegm9mSziZIk2qRwGNBNGG2OLZfSbRYlIWwac+SnXbfR3TDaAoAgQsKLa+ZYVg6NcBYbzDi2/L3oKGjbLIp8B6RXb6br/V4eqrMQkSzaFuwKGDwdTfByNGkFh/u6xg/w6OHh4dN04/z9FKOpt5Azb0bwAgRbkj8BbkLuVBijdD3651V8gnh4+GzIkTe/zrfQuQn52RuHeRStM/I8R/vrddzc8/h1AtNnjkn0kzcOM8lCU9P1O+8S8s7h+CWBfwGUoSFG3SNP3wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 13500,
            actualDps: 3491.37,
            magnification: "300%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "360000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgIFBQULCwtZBwZvGxBVKSk4ODhBPz9GPT1DPz9DQD9CQUFCQUGGKgpxMChDQ0NDQ0NFQkJIQ0NFRURJQ0NJSEdJSUlLS0pOTUtOTk2cQQxYV1RaWVhbWlgnbZ5iYmJuY1xnZ2eXaD1zcW+Waj2Zaj2bajucaz6fbkJ+fn6teEqsek6MiYhIo9rChD28jWCZl5ffmFqqqqraqXy7urvgt43Tzcn+zJ7v3Mvz7ej9/f24dMlxAAAAQHRSTlMAJFyLrer90f//xQcbWf8tPEr//Gt8DtOOnrHm8//H/wTX/v/z/eOK/QxgqTrL/v7q/v8E/////v/+////////Ej4DsQAABOhJREFUWIWVlwl7qjoQhrvYxbKXRQhLAYnFtic2vaYxIvj//9WZgL3HVgs6TxefyLyZ+TKZhIuLM80zlHNdvpmi+epJD6aGd3TcQKGVngJQA+vYsOcWxD0pByv0jz1nJlwkJ+WgRegIQPXLqpodje2nOdGRiVIrY1VDT8rBxZlxMOgFhFdbHhzX95spPpmZB6NmxgBQJYfoQ0DAyoNUPb/kvN7WR9CHwSJGnJ+pmgmVgIZowwAVceamP6LSZozzZtsw5wRAwvnPQkgBwFqAO+jvGRMhDsTWii6C96EUFNNFEeehb35HOAVjotnWRxb4e/juJIrjPC9J5u4T5i1gC8vYX8uqH+kxeFNe82KfkDoFlYCBQvIc8I9LShlUrcis/W8AUEkN0z6AMdF1PSeEynwbujfbDlDPrN69AAHoMSYyAiiaKvtXdakLADnUq6EXQABx2UYAdd+Uzr8QOoBAv2voqZY76QC0A2zpxHd2bVRxMWHNlvu/aaiobhJGsZRgBxBNTTEtM1ftAAUAoJDTXwAGivI8l4AYyxyk4ZyJqiKtj+cXhDeg4a+ACexWzigpcd4aYMC9bqrZHqBHQ8UMZpTDhNKE/F/XdSU4STohUwCIpk9D2ENakMnw9wwnltqJ6AU5qXo07OztdbFYLL+Mr9bL5/kXXgIaetBnDgDL5efner1erVbrtaiWz//tA+qhpg6Az8/VuiIlMCoa/wDUA3UIe/ZZzr+pdb3abJrylr+/tCmkKZx2Oa17NewAMoJNQ0hdbxpBqg6gmMZcRRABG9DwYv7y3kbQgH9dN031502m4Dmup6I4F6Chp/bK+PYuIwBbL5erulm/thkoTmICALOZ6WlObxBvf5Yg4nq1sO/vx5jvVlFxQt9AMSOJYaJ+wPwVVFxhcJeG31/aUehTE3+CBUEWSszeFKSKXQTj+zGt3t8uuggiXOQlpwkqBtZh/taquNlUK16Bhrs61ELY4rDBOaeD6yBFkCrKRVh9FbLqoiSCPsHFQEvc5bBpCU29fEl3w56qPdj2gx/0SyjnQnixXLeA6rPwrfZ5RVEtZD/ZgeoNzK+oWggNqduQCxxHsJtVw3J8lMUAeBgoZMXwkxl0NTjZ2q6E8zhCKMlmoB/NJaA/fsVKZAsURB6NYBS2YwknshCCs1KXKfQDzARaFl1QQeXZVk55w+QHUhazDPkPANDSPn8vYDWzx+OxzXBJyXQ6rXmsTwLfdSxT9Zzx40N/MzBngoP/IxBwDv4f0w8eh46qKIpMD9l4YvZFoLilwNIdfu0Y5v/4mPIw2E0Kpz4RpPeqriICATw+SoQdYxkBhw62W3fFCLLZ7oz6LYOESgU6gl5KDar9FugZhuHNewBaxuj46VESIAcMKhKKw5Nu1vuApxYxlrUEP6wYOAb2zUoohQwkAVKAnZfDScbcE27WOwMRqQ3hQxDjcQznal6Kb3ecIfN8zDC4QxBSAsZiuCol2hkvaVZIiS0JsIp5WeI4j/yzXvLUAK4jNpi8ZoSTJKLFGWsgzUyw3Dol7MOJZWohOxegmCjCuAijkiHvworYKa8W32yuai7sPdDCVeBmy4eO4l9Mi3ihwWsTpqe9Iu7b5dXV9fVDTqPRaHSn63fX11dXl+f4j25ubm9vdf32f7u5GZ1BuLy6Ht3d3d2A3co/8Hl03R/CX0bO2Cm/ashLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "360000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 2025,
            actualDps: 1557.72,
            magnification: "900%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "240000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 7998,
            actualDps: 5105.1,
            magnification: "300%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-5.0s",
            delayFrames: "150-150f",
            baseHpRatio: "240000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 157500,
            actualAp: 4500,
            actualDps: 3000.01,
            magnification: "450%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "240000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 157500,
            actualAp: 4500,
            actualDps: 3000.01,
            magnification: "450%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "240000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 500,
            actualAp: 22,
            actualDps: 17.31,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "240000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 1080,
            actualDps: 736.32,
            magnification: "1200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "150000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAB5AABjJw1GPBNrLxUwSlMbT3WAOBt4OyE3VFj/AABKUElbTUUrXn6HQieNQCCMQiOMSi+YRyFhXkJRYlw7a29gYFe7RRaWVTpuZF6pUSelVC5tbW1XdoWeYznHVBxzc3KBcm46irabdV3GaSu6dEWOhHGPhXaze1F3jpbQeTuRkZGhkofyfTGfmo3Ik2HRklqfn56qo4/7kEOzqJ3Nrovhs3bEv7fNxarT0M/v2K7778Qmm1aUAAAAQHRSTlMAVomtxgIMhBw8hEUxXgEMyPz/mXdctPyf6YX8yELe/iG9jP4J3f/+/u01XsX6/sf//43Z/eGk//zl/rr84/7/us37AgAAA3ZJREFUWIXtlduSqjoQhl1rtiwUnIyAoIIEjZpwiqARkYn4/m+1G2emateuJePhdv4LSoT++LvT6XQ6LUI91Pb4W6HZ9DnAbDN76vOz/fwJA8vtZl8OLr+WDwFm+7RcNSWItsFDgGC6SdMx6kTv24ccIDRPx6txgLan6P7oJer3+5O3wXQTBKdTcD8gKibD4XAcvBcoegxwTIdOWs7rIgLAIylsM2e4TtNzWQTHc3w/oNObOOv1Oj3L7bKo3+9eBYR031mnGa3Bfizr+E4C6vVtMxGlLOV5i5aFPN1JQIOJM58LYYSb+hSjYCPlNlC6iqrrym2A/iqdD52s3MfHhhBtyizxFsnueEz0mzJ4c5ymD9aTXryXpyKaeYzxQ1WDEvUGguYNBuPJ0DGMt+l4L+U+CUl+AAGiGn0fr9qjbgf9MRxqGI7/tsroIecXABCE2e3oWmspkGXCc/THcVKnYYQUM5bnB87zPBfUVjp6Al+4rqmvwVUBAE0pxYZhuC4A8hwbDBs00ZXRcdeSCJqOdV0fWaaPnRQMGJi4hOSNBUMwLOtjsquEfzVe0WC5duKiqsIGbgx8WuCcQxmqAxfCvBLe1Reh4JxhjAlhOW8cNAAf7po/LpUUmIXX2kE1w6qqBLyMsUtwlkE4xqam+QTSx5g1LkCLa8ugqMW5rhhhnGAXG9AJBvE9q6tYODUolBTDhTH/ej9Gx1oyJhoGcfGlhJbmjZA6pUZWYgqmpJfsg6uAII5DXtUVERxKL+pauFpX81Zji9KyzErXpTKOi7bjZhRW55rzmhOXCylllaDu1DE8D/aSLDOa7aOg7bxTTOsdDOzeQ0JIVp/PtSwiNOspCAXxTgJiEyzbDCiaEse2P9Mt1yUCwoHxNVVfZ7u6PsbfHJewj5A10r0QuodLeW60/Vw1FB+/jb9IVRTN9l3Cmhwgi9D6JCzjm+I/ctEbQilhBFQy/No8r6+3xjflhB4mjApZV2H7BPh7vOa7FwLsqYy1T4C/Svd8zwYCZpSG9uKWYfo/B6qqfmTB6UK5+/sf6lrEtmFfao+Fgwvb1nWfuPf7/wLoKvRD2+69gWEy7t9ymFyV6rvW/U3wH404ebiGjZTkcHWC3qCuavnMfqIEis3JU/Hac2uoWolvag928cWArqlPreCPfvSjX79fXv750svL719tL/8LiTWHFfrH6E8AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 6750,
            actualDps: 3266.13,
            magnification: "300%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "150000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "221",
          enemyName: "ゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAAAGBwcRCQNhAQFIIgFLJANHJwxSJwJRKANLLAJSKQJSKgJTKgIAAP5VLAJXLQJZLwIVQGRaMANdMAJhLwJjNQNkNwKWHwdqOQIHVotsQAZuQwp1RQJgTCgQYZXWFg52Swl6TAh9SwQBeIZ/VA6FUwtUYl4va5UlcKCKWwmPWwOMXAqXYgIqeq+caAaibQQ1hbmodQObdjNZhaCoeh6QfWuxhitjosuwk2Jqo8l/ut7ErYfk07b07eb9/PuVUdaPAAAAQHRSTlMAGoHvA5v2dv9hDDIgTgG4i88UP+P/86j//yd8V///a//wnf8Dvf//SqLb//H/1////f/4/v/N/+v/////////pNMJVwAABEZJREFUWIWdl313ojoQxr3bFpGXC2hAUxtXZI1aGoMCjVjQ7/+t7gTQun/sEu60R8/p6fx4Jpk8GQaDv4Vh2kPXHdmW8dd/+2P6yEG+jAA5o/+BMJ0AknET4crqmz/xIhpHRGYTEif5uifBciCfQXDGEwiRz597AUZBA+A8KaqqOObivZcEY0qiuAXkoroUR5G+9arAI42CJCmrorhWIGHeB2CimwJxqYS4XPJcrPosgh00CjiHp+dlrWDVpxduAKngerlcy2MvBYYhS2gkJOX1eq1EchTq+2iuVqZHgBDXhKIsRZIcuTdXrMGYRnw+xTVBrgKXncRZRD8UN9JCPlu7mGBZBY1lUEqDkDLFjbQDPWYhHANdn81mFMORWi45ppQp7sPI12kYkoj4+my5THzd92fLGUJRrAiYBD6ZT2AbCPZBApbF4MXnp/IaGFM0tSwA0LQooPoopmlaXC6fqrsATmYMzJASCi1QFGUKP0Valp+9juMkiMkGOiBNU543ka7f1JvZcgiPYmifNhm+hRCpchHgRzEAeCJ76NgGID4mys+Hc0BZ3YMPCKF4Ig1XHsW6hx8VSAlrJUDtJrWd1fmPBDVjHOLWTNoS7oCj+DBVKpji6K6A/ybhqLSKBngBnJxHCQ0CvpUUyC5uvIS1y/gdSmtgSTdqbxX+G4JzpV0wHNxKaKvg9/xYyRefXQl4ILTBeByqdeIkaAisCc6adEbpVKECY2LbXu2oUkMLgXzpiwoCnm0YK4IANwR5NdxMlUY0VDiMNtJ9MDAMHy3iO1TyDQccFBNK6rkEXPEhH7sKC2BrACCUR1KDRNwo4K/6qDt/MNR1KCGKCb5NV6T+9X1dRypdLAGyiDqftAx4uIwXlSacaDVAjnff+okEaI6SExiO1miAOr4XkMBfPEVPN71arg47IfefsfpQkogpz2i2ds+/H0cR02Oq6MeDEVxk+H6cYcAsBAyZNFEe8uZRksPi0WY4SY5FdSlzEcfKAJcmOb7NJrUAmDIFj1SvFAlguFEgp1wYEstr2QcwJIzUJdQKIDmvAJCgD9V5f0jDQC5i3I54l+oKgA97nSjO+5P3d+8GYAlMmTAkFnAh2SFfm5bCu4+x4gjfJXBRVqUQyXpsTGmEEJqana46Z3RRe4H0My5l5JxmW5jdoL0j4nWeyTfKs2zR9JIsA/xskx12YxP5mDKCnc5FCCnNsmyzWbSxyb4O++2vkfQ6GBpRR/54qEsvgKxzlh2y8zk7HL5O21+N10B0ASwP8sEAAXA4HM7yc38+bW+nTNe9DoCtgSlyihfn036///o67cOfJwmwGqvQhh0AtzZFcLPz7vV1d/46eevxDiqQL5JA0DqNzW1M0Q9228F4d9gfwpUx/repbvjy0v0KfCtV8xx7vPv5ulsgz701saFyNb60BB+jHzLgpsDuP92J97BekKahp6cn7akN5Dk//kj4Dwfb6H2aPqjiAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 225000,
            ap: 10000,
            dps: 821.92,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 365,
            foreswing: 16,
            backswing: 17,
            tba: 175
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 10000,
            actualDps: 821.92,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 2997,
            actualDps: 1634.73,
            magnification: "300%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "90000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "220",
          enemyName: "サイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 1163.79,
            speed: 5,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 116,
            foreswing: 37,
            backswing: 19,
            tba: 40
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4500,
            actualDps: 1163.79,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "218",
          enemyName: "ドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAB5AABjJw1GPBNrLxUwSlMbT3WAOBt4OyE3VFj/AABKUElbTUUrXn6HQieNQCCMQiOMSi+YRyFhXkJRYlw7a29gYFe7RRaWVTpuZF6pUSelVC5tbW1XdoWeYznHVBxzc3KBcm46irabdV3GaSu6dEWOhHGPhXaze1F3jpbQeTuRkZGhkofyfTGfmo3Ik2HRklqfn56qo4/7kEOzqJ3Nrovhs3bEv7fNxarT0M/v2K7778Qmm1aUAAAAQHRSTlMAVomtxgIMhBw8hEUxXgEMyPz/mXdctPyf6YX8yELe/iG9jP4J3f/+/u01XsX6/sf//43Z/eGk//zl/rr84/7/us37AgAAA3ZJREFUWIXtlduSqjoQhl1rtiwUnIyAoIIEjZpwiqARkYn4/m+1G2emateuJePhdv4LSoT++LvT6XQ6LUI91Pb4W6HZ9DnAbDN76vOz/fwJA8vtZl8OLr+WDwFm+7RcNSWItsFDgGC6SdMx6kTv24ccIDRPx6txgLan6P7oJer3+5O3wXQTBKdTcD8gKibD4XAcvBcoegxwTIdOWs7rIgLAIylsM2e4TtNzWQTHc3w/oNObOOv1Oj3L7bKo3+9eBYR031mnGa3Bfizr+E4C6vVtMxGlLOV5i5aFPN1JQIOJM58LYYSb+hSjYCPlNlC6iqrrym2A/iqdD52s3MfHhhBtyizxFsnueEz0mzJ4c5ymD9aTXryXpyKaeYzxQ1WDEvUGguYNBuPJ0DGMt+l4L+U+CUl+AAGiGn0fr9qjbgf9MRxqGI7/tsroIecXABCE2e3oWmspkGXCc/THcVKnYYQUM5bnB87zPBfUVjp6Al+4rqmvwVUBAE0pxYZhuC4A8hwbDBs00ZXRcdeSCJqOdV0fWaaPnRQMGJi4hOSNBUMwLOtjsquEfzVe0WC5duKiqsIGbgx8WuCcQxmqAxfCvBLe1Reh4JxhjAlhOW8cNAAf7po/LpUUmIXX2kE1w6qqBLyMsUtwlkE4xqam+QTSx5g1LkCLa8ugqMW5rhhhnGAXG9AJBvE9q6tYODUolBTDhTH/ej9Gx1oyJhoGcfGlhJbmjZA6pUZWYgqmpJfsg6uAII5DXtUVERxKL+pauFpX81Zji9KyzErXpTKOi7bjZhRW55rzmhOXCylllaDu1DE8D/aSLDOa7aOg7bxTTOsdDOzeQ0JIVp/PtSwiNOspCAXxTgJiEyzbDCiaEse2P9Mt1yUCwoHxNVVfZ7u6PsbfHJewj5A10r0QuodLeW60/Vw1FB+/jb9IVRTN9l3Cmhwgi9D6JCzjm+I/ctEbQilhBFQy/No8r6+3xjflhB4mjApZV2H7BPh7vOa7FwLsqYy1T4C/Svd8zwYCZpSG9uKWYfo/B6qqfmTB6UK5+/sf6lrEtmFfao+Fgwvb1nWfuPf7/wLoKvRD2+69gWEy7t9ymFyV6rvW/U3wH404ebiGjZTkcHWC3qCuavnMfqIEis3JU/Hac2uoWolvag928cWArqlPreCPfvSjX79fXv750svL719tL/8LiTWHFfrH6E8AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2250,
            dps: 1088.71,
            speed: 6,
            range: 300,
            rangeType: "単体",
            kbLevel: 3,
            money: 400,
            freq: 62,
            foreswing: 23,
            backswing: 12,
            tba: 20
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4500,
            actualDps: 2177.42,
            magnification: "200%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "45000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "219",
          enemyName: "プリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2666,
            dps: 1701.7,
            speed: 10,
            range: 255,
            rangeType: "範囲",
            kbLevel: 4,
            money: 666,
            freq: 47,
            foreswing: 22,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 5332,
            actualDps: 3403.4,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "45000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "45000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 450,
            actualDps: 346.16,
            magnification: "200%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "18000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "217",
          enemyName: "バトルバルーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAqHxosKScrKiktKig8LyU/MSdANipWORFSPC1WPCtTRDRYQzJcSDBWUEtrTTJ6UjNgYEtaY1U9c2RwZERebE9lZWFnaEs+eWZBd2ZvaE57ZEB6ZUIzhXh/akODa0CHbzo1j358c1RzdnByf3R8gm5/f39/g253iHKJgW6Uf1vEcTRfloKDh3J5k4d5o5VmsKOanYSBsqSQsKawqoSYwLmawbfAuJOixLzPxZ/L0sPi3snq7OTwVrfPAAAAQHRSTlMAOGCE/44Xxvw9Wgv/gcTnn/7+bhAwgoK6/U/3n5Pj/OFeOA3/If/WwwLsd/6h0v9XNdX//f+G/rn//9T//v//2Q2MVQAAAytJREFUWIXtlcF2okAQRUkGlYFWbGjFhigBEY0SUQF7IID//1dTjUl2nkNlnVq4sm6/96pKFeVhMTY7Hebzw+m0YW+Pv/aw3X3Z5iKNorSqP3aHM8O2L7y8qvMIqmjaprhcN6j++WsE/ZXsj7Kybdsi+3fG9HtSeS3uAJDQNlmJIMxeo0jUNTjIyrIoJOBWls21b5TspYuurtMozZrbrawB0BRN01eCFJDfAVDl7SYBbVG2154AF9oEAKq8bMooam6N9FBACj0B8y8AvFymIKHtQsjKDwwAHMDDWSQVwBhvGIDr3QFtB0hbCUBZ6EK8K2gKOYa2CzEr+4b49jXGGpTL6saYFR+9N2m2TTsPor41AJFDaMusuPY+KBbE91VOizyBXWzlKmc7xDmxhSdTqCKIM80qeUzpPujfr6yDpReLukpgimlayXW4OKh7Dt25l4g8745RVFV6OQdrDIAFcNK+qLqfgyaJL+cNxoGiGMGavXDR3WPd5pez4oYogBKGkGRc5VFa1PX+9MZwDhRlAw22VwkANOWWgSfkDzN4gJsQHaBYMKkIWdDh8g7QFjumT5wZEgAelrHIPchA7Kcm9RcGDmAEm+XKh0r2yc7kcbxDAsDD+v1gH4/HYBfaFudYBfDntHZs+yiO9jJkxzw/IfthcKFtEsu3/J0dHsXeZci/R8V1dI1QyuOt7byLZLVdILaZuUHoriaaRnhMNHNl+pa53+969xuOEywnFiFgwYePrqaz/qvApjPDGJsm0Ygs6CaW+be/AYUtt++ho09NCIETS1NVjYxRY3RXyWoxNjUIgcaCAGCKWwNjSnyfU03K93MIA/e+JAxIwik8HyeJ5Sd8iQUoLoX0OKyBqBKf8hX2GNlCUwklmsrzHETE3MHtoTGVS0BVVaWcwyly6ts4wIR0ALnKnHJYBH+MA4zNTwWAoGDBWukogGLosDsd4G7B1LFjGI7k65oq78nSyGSI7IdFkAlKAoVhUFwC3xJkt5ylhhcApWtwRF1R1CV+14DyO0GjHDmCTwXmVB+MRqOBPpr8SAEbgvHh/eMn/b/1W7/1WU/Pf77q+enht/4DKdiLnFYvOUwAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 35000,
            ap: 1000,
            dps: 666.67,
            speed: 4,
            range: 333,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 45,
            foreswing: 16,
            backswing: 17,
            tba: 15
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2000,
            actualDps: 1333.34,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "18000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 90,
            actualDps: 61.36,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "6000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "216",
          enemyName: "アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 22500,
            ap: 999,
            dps: 544.91,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 360,
            freq: 55,
            foreswing: 16,
            backswing: 26,
            tba: 20
          },
          stageStats: {
            actualHp: 22500,
            actualAp: 999,
            actualDps: 544.91,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "6000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "215",
          enemyName: "騎馬兵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAHBQMQBARWBwVbBgZeBQZiAwNLExJrBwd2BQNhEA5jEhJnFA92HhdwIhpuJB1BP0BGRUR3NCZORUJ6NSZ/NSdNSklvQhlNS0v/AABNTExTTEpaTUtgUEV2SyZ3UCx+Ui2LTDN3VztqXkVoZGSBZUuPYTuAaFJBfauKalKXaEh6d3SBfnyOfG2sfFSrgFmUlJS4jGVprtevnIfLnHOopaTWqX+/urXdto/n1Lrv5tL8+eL///80aUJnAAAAQHRSTlMAd6DIH/FvJQuz+uL9UTea/tCADij7grrlQgu/AW3Y/K1BJFr7lQX9d9PB/+L97/6t/+3+/v/a//7/+P////8Ac195QAAABH9JREFUWIXtltt2okoQhp1JIhABObUCRg7S2GpoGoQJBzHz/m811Wj27OUemKzlzb5IXXiuj/+vKqqd/LwzJl+AL8AX4P8CMM3JfWGure19hPXKuU+EGSS7+wjrtM7uEmGuiu7tLhEg4dzeI8I6FO37+Q4R23VRt+/vb87N5+anG2wlbdud290tYPFZTWZct0V7zm5+b62s6ysRYpTgJMQnXXvjwfGuAGEqSYooCMMQ01l4pOhuJETphShI2kxRpZk+FUZcOEFa1wvr35+tLwBxLuOpKGn2dEQCRyzSgsW/NZhWUKz5W2GmYQUe9P76W+jMywAh8FnqfHTOXHg+STOQpM5kbAgzWQMFohuFk004QHBWhB2cj3yfsKKGsog8155KsizPJMnYR24cuwMurBUpsksZLLh+UdddG03VuSxr8kzmodEyXhzjwQFzPJLG4MK0Fn4PgOGADkryJRvhvCo1nA8qmGyBwBLLilPicwtFcWa+r885ARLLqqlyhI7RUP7Verwu2gIAhDFWQCF8hDQQn1eQX1YVHhbQm/ChkAFcnfEADemqt4/7/AaiHBEAJqzAw4YkaxpChPo+C6TpdA59oBUAOOF0ysYUgAvFxn3NcFEh1uxgBG2koYsADoHOjN/mooE4AZ2KqqnrSNE1DWhgHgJpeXM6v4WjGl4EAyMZV13XVF0bKlPeBO4ABFAANB1sr80oQtUxolVDNRm/bZSZDhr6ElwsNKfuHbbwmApBkTAuT6cyP2VbESoqa3nvoOnjBIT3rs3CwVKIorDEtOm6c7d7ERVoAroCesSJa3jna3hEhKpTrpouTFECB6isyjzno3iRcDqdAdGOEMwAY5jFIo1NRZ/p0IQkOCQwjRcFEN353L1Fg4Q1YxiT15Z5FizDiJbHyHXDOLkQekSTl/kxGwQQ4mP/tWAHuL23cV4e+LXccH8lQFQlyfFxCGB5jCFMasYXxGaf51G/D7cXwgWQo9xPBvJFWCgFI5h4QXFwYloeNpcv3CiBUvaMMqd4f3sYXUMwlnwfMFJ7TkxSkh+jjzXoLgjBFCDcQzwwkMKSUr4PiM+wYYCU3Fb+2ehrRjRKOaL6kPUf/YYPHShqBtfCSNN8miB7rl4R5lrXKKtrlsQD+W6oI+S/vv748coowlhD+1BZYjtQBNe0LFPQdZ20MMoDk7yJE57E2u5HLwEjfylORGVpY32+SJJgjhBK60HAJsv3S4wQg1uOIERzjGs8h0NNVI2ljQhfVboRZdnuzwbcrErCqJdQMArlznk38N5QRctx1IWPsK0Abrv9+af0l01clTvXDUACAvuQT70VSZcJtZdJ6hlzmy7VwSN2E+2ypjmGvA5gnQNoQg/WYm1y+QQ2o700hIGDkQOCtGwqvnO3cRnvaRDgQ7g/bswtXxFq4HmKOv5PBQa97I8d91Du9mW0OWYbAFy/NZ2//ulyY3qEHfH4qO7LwMbzabKf2lh5/Eva7xDDXfj47fvDw5OGn5+fn54QeoKnh+/fPs3YTh55/tMTZPPH/unhYQTwC/eXrYjX/6xbAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 225,
            dps: 173.08,
            speed: 15,
            range: 175,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 39,
            foreswing: 20,
            backswing: 12,
            tba: 10
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 225,
            actualDps: 173.08,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 180,
            actualAp: 9,
            actualDps: 6.14,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 90,
            actualDps: 61.36,
            magnification: "100%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "53.3-80.0s",
            delayFrames: "1,600-2,400f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "214",
          enemyName: "剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1800,
            ap: 90,
            dps: 61.36,
            speed: 7,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 44,
            foreswing: 11,
            backswing: 12,
            tba: 17
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 90,
            actualDps: 61.36,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11009Data;

