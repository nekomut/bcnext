// Stage 27011 Data
import type { StageData } from '../../app/stage/types';

export const e27011Data: StageData = {
  eventId: 27011,
  eventName: "強襲！城とドラゴン",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 11,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "攻城戦 Lv.1",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 70,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 3600,
            actualAp: 180,
            actualDps: 122.72,
            magnification: "200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 10000,
            actualAp: 450,
            actualDps: 346.16,
            magnification: "200%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 45000,
            actualAp: 1998,
            actualDps: 1089.82,
            magnification: "200%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 40000,
            actualAp: 2250,
            actualDps: 1088.71,
            magnification: "100%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 50000,
            actualAp: 2666,
            actualDps: 1701.7,
            magnification: "100%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "攻城戦 Lv.2",
      baseHp: 300000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 70,
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
          treasureId: "35",
          treasureName: "紫マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 6192,
            actualAp: 309,
            actualDps: 211.08,
            magnification: "344%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 15850,
            actualAp: 713,
            actualDps: 548.66,
            magnification: "317%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 58725,
            actualAp: 2607,
            actualDps: 1422.22,
            magnification: "261%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 91350,
            actualAp: 2610,
            actualDps: 1740.01,
            magnification: "261%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 57600,
            actualAp: 3240,
            actualDps: 1567.74,
            magnification: "144%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 72000,
            actualAp: 3839,
            actualDps: 2450.45,
            magnification: "144%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 212800,
            actualAp: 5985,
            actualDps: 1547.84,
            magnification: "133%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 299250,
            actualAp: 13300,
            actualDps: 1093.15,
            magnification: "133%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "攻城戦 Lv.3",
      baseHp: 350000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 70,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 8784,
            actualAp: 439,
            actualDps: 299.44,
            magnification: "488%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 21700,
            actualAp: 976,
            actualDps: 751.17,
            magnification: "434%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 72450,
            actualAp: 3216,
            actualDps: 1754.61,
            magnification: "322%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 112700,
            actualAp: 3220,
            actualDps: 2146.68,
            magnification: "322%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 75200,
            actualAp: 4230,
            actualDps: 2046.77,
            magnification: "188%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 94000,
            actualAp: 5012,
            actualDps: 3199.2,
            magnification: "188%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 265600,
            actualAp: 7470,
            actualDps: 1931.89,
            magnification: "166%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 373500,
            actualAp: 16600,
            actualDps: 1364.39,
            magnification: "166%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "攻城戦 Lv.4",
      baseHp: 400000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 70,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 11376,
            actualAp: 568,
            actualDps: 387.8,
            magnification: "632%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 27550,
            actualAp: 1239,
            actualDps: 953.67,
            magnification: "551%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 86175,
            actualAp: 3826,
            actualDps: 2087.01,
            magnification: "383%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 134050,
            actualAp: 3830,
            actualDps: 2553.35,
            magnification: "383%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 92800,
            actualAp: 5220,
            actualDps: 2525.81,
            magnification: "232%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 116000,
            actualAp: 6185,
            actualDps: 3947.94,
            magnification: "232%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 318400,
            actualAp: 8955,
            actualDps: 2315.94,
            magnification: "199%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 447750,
            actualAp: 19900,
            actualDps: 1635.62,
            magnification: "199%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "攻城戦 Lv.5",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 13968,
            actualAp: 698,
            actualDps: 476.15,
            magnification: "776%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 33400,
            actualAp: 1503,
            actualDps: 1156.17,
            magnification: "668%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 99900,
            actualAp: 4435,
            actualDps: 2419.4,
            magnification: "444%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 155400,
            actualAp: 4440,
            actualDps: 2960.01,
            magnification: "444%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 110400,
            actualAp: 6210,
            actualDps: 3004.84,
            magnification: "276%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 138000,
            actualAp: 7358,
            actualDps: 4696.69,
            magnification: "276%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 371200,
            actualAp: 10440,
            actualDps: 2699.99,
            magnification: "232%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 522000,
            actualAp: 23200,
            actualDps: 1906.85,
            magnification: "232%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "攻城戦 Lv.6",
      baseHp: 500000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "36",
          treasureName: "赤マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 16560,
            actualAp: 828,
            actualDps: 564.51,
            magnification: "920%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 39250,
            actualAp: 1766,
            actualDps: 1358.68,
            magnification: "785%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 113625,
            actualAp: 5044,
            actualDps: 2751.8,
            magnification: "505%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 176750,
            actualAp: 5050,
            actualDps: 3366.68,
            magnification: "505%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 128000,
            actualAp: 7200,
            actualDps: 3483.87,
            magnification: "320%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 160000,
            actualAp: 8531,
            actualDps: 5445.44,
            magnification: "320%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 424000,
            actualAp: 11925,
            actualDps: 3084.04,
            magnification: "265%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 596250,
            actualAp: 26500,
            actualDps: 2178.09,
            magnification: "265%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "攻城戦 Lv.7",
      baseHp: 550000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "750000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 19152,
            actualAp: 957,
            actualDps: 652.87,
            magnification: "1064%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 45100,
            actualAp: 2029,
            actualDps: 1561.18,
            magnification: "902%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 127350,
            actualAp: 5654,
            actualDps: 3084.19,
            magnification: "566%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 198100,
            actualAp: 5660,
            actualDps: 3773.35,
            magnification: "566%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 145600,
            actualAp: 8190,
            actualDps: 3962.9,
            magnification: "364%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 182000,
            actualAp: 9704,
            actualDps: 6194.19,
            magnification: "364%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 476800,
            actualAp: 13410,
            actualDps: 3468.09,
            magnification: "298%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 670500,
            actualAp: 29800,
            actualDps: 2449.32,
            magnification: "298%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "攻城戦 Lv.8",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 21744,
            actualAp: 1087,
            actualDps: 741.23,
            magnification: "1208%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 50950,
            actualAp: 2292,
            actualDps: 1763.69,
            magnification: "1019%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 141075,
            actualAp: 6263,
            actualDps: 3416.59,
            magnification: "627%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 219450,
            actualAp: 6270,
            actualDps: 4180.02,
            magnification: "627%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 163200,
            actualAp: 9180,
            actualDps: 4441.94,
            magnification: "408%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 204000,
            actualAp: 10877,
            actualDps: 6942.94,
            magnification: "408%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 529600,
            actualAp: 14895,
            actualDps: 3852.14,
            magnification: "331%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 744750,
            actualAp: 33100,
            actualDps: 2720.56,
            magnification: "331%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "攻城戦 Lv.9",
      baseHp: 650000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 24336,
            actualAp: 1216,
            actualDps: 829.59,
            magnification: "1352%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 56800,
            actualAp: 2556,
            actualDps: 1966.19,
            magnification: "1136%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 154800,
            actualAp: 6873,
            actualDps: 3748.98,
            magnification: "688%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 240800,
            actualAp: 6880,
            actualDps: 4586.69,
            magnification: "688%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 180800,
            actualAp: 10170,
            actualDps: 4920.97,
            magnification: "452%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 226000,
            actualAp: 12050,
            actualDps: 7691.68,
            magnification: "452%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 582400,
            actualAp: 16380,
            actualDps: 4236.2,
            magnification: "364%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            actualHp: 819000,
            actualAp: 36400,
            actualDps: 2991.79,
            magnification: "364%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "攻城戦 Lv.10",
      baseHp: 700000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 110,
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
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 27000,
            actualAp: 1350,
            actualDps: 920.4,
            magnification: "1500%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            actualHp: 62500,
            actualAp: 2812,
            actualDps: 2163.5,
            magnification: "1250%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
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
            actualHp: 168750,
            actualAp: 7492,
            actualDps: 4086.82,
            magnification: "750%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
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
            actualHp: 262500,
            actualAp: 7500,
            actualDps: 5000.02,
            magnification: "750%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
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
            actualHp: 250000,
            actualAp: 13330,
            actualDps: 8508.5,
            magnification: "500%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 640000,
            actualAp: 18000,
            actualDps: 4655.16,
            magnification: "400%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 10,
      stageName: "攻城戦 Lv.11",
      baseHp: 750000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 110,
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
          treasureId: "37",
          treasureName: "青マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 36000,
            actualAp: 1800,
            actualDps: 1227.3,
            magnification: "1500%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 81250,
            actualAp: 3187,
            actualDps: 2451.88,
            magnification: "1250%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 36000,
            actualAp: 1800,
            actualDps: 1227.3,
            magnification: "1500%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 81250,
            actualAp: 3187,
            actualDps: 2451.88,
            magnification: "1250%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 225000,
            actualAp: 12500,
            actualDps: 6048.4,
            magnification: "500%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 81250,
            actualAp: 3187,
            actualDps: 2451.88,
            magnification: "1250%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 36000,
            actualAp: 1800,
            actualDps: 1227.3,
            magnification: "1500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 206250,
            actualAp: 8332,
            actualDps: 4545.0,
            magnification: "750%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 300000,
            actualAp: 9000,
            actualDps: 6000.0,
            magnification: "750%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 81250,
            actualAp: 3187,
            actualDps: 2451.88,
            magnification: "1250%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 36000,
            actualAp: 1800,
            actualDps: 1227.3,
            magnification: "1500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 275000,
            actualAp: 16665,
            actualDps: 10637.25,
            magnification: "500%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 11,
      stageName: "攻城戦 Lv.12",
      baseHp: 800000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 110,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 37992,
            actualAp: 1899,
            actualDps: 1295.21,
            magnification: "1583%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 85930,
            actualAp: 3371,
            actualDps: 2593.1,
            magnification: "1322%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 37992,
            actualAp: 1899,
            actualDps: 1295.21,
            magnification: "1583%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 85930,
            actualAp: 3371,
            actualDps: 2593.1,
            magnification: "1322%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 237600,
            actualAp: 13200,
            actualDps: 6387.11,
            magnification: "528%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 85930,
            actualAp: 3371,
            actualDps: 2593.1,
            magnification: "1322%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 37992,
            actualAp: 1899,
            actualDps: 1295.21,
            magnification: "1583%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 216975,
            actualAp: 8765,
            actualDps: 4781.34,
            magnification: "789%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 315600,
            actualAp: 9468,
            actualDps: 6312.0,
            magnification: "789%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIdHBshHx4iIBwoJCEpJB8mJiYrJSIrKikuKig+OjdORjprRgNKSkn/AABvSQNrTSB0TwZ1TgtXVFFtVi6DVghdWlmNYQiMaw2faA2baRd0bmdwb297djGBcUGFd2SGfnGshg2ygBqygyfnhwWXlZSmlWvRlhrBnTnwnQX2qgL8qAL7rQLsvALiuzni1AP7yQbbyIj+1wv92QL93gH96QL+8QL/9gn++gH//QL//QH//wL972f999X////MotYaAAAAQHRSTlMA48FPKPzeC3CTsP3XCf8BHv45bxtQmf++dd78520Ll/23xuz+/frX7//+weD+gv0s//z6wZJqTf80IhEE//8ABPD13QAABLVJREFUWIXt1utyokoQAGAiVxlwYRAYHQ3IHZQQIEYTJfv+b3V6QLNrQrbO2fM3UynLqtDf9HQ3IPfzfy7uG/gGvoFv4Bv4CHCwzucz9xfrCpyH9dfA+Xxi62roBjb0/wJA/OHw8vraExBvBWnqYf3+3wOn1/3T/vDyMhA4LOu2SW1s/Biu0vUv83kHno/t0/MlC4uQuGi71CKYCTr2HEvXxw/1Dhye2rbd98QjNgxSlF1DwsCA+EVWOXgRBI7xJ+Bl37Z1+7SHg9iLewbUXZQ3C47DWRcYVt54+M/A81MNxG63PzyEQZCVUIaq7Da67lSdp5O2wn2A/FUXXg/7uj22ZbHbPwRxAQmw1aWGTkrIgNSNZ0ApBZ6T+c8Ad0nheGyLYrd9CIqyZELbNZ5NirbxnKyussCz1KmsqPIIcD4BUDKhLuKMxTOhBSEjYdlWYVQAmJtIVaTJOAB9KAsQjmVclFehriJqOWEfTE2E0Aw+xzIYzrAtymOfQ9EDRQ19qfJwSZZ5SZEI4TNkmkgZqUEvHPa7sj123bGOYxYfl11RV1WeV1UdiSLbnxGq8BXw8rBjA/jWsVMUZUyLhlaZQ6KiiIf9+zWVxwGWAgj18Y0JAFAzrvw8tGyHUMr2HwhXG8+gTwGEou5AYCmYKIpcugyzNKvM4QAiEK6vjBXxKmzjGA7xVkYFRSY1Tc2GHhSxOWQgmgiAFS+PA0wIsgxugiqvWNWpO1OwZZElHQ7QF8J1k9VUkEcAJjwuHrZFHEVlzvY0/ZVgkGUQXkrQdwFSSHxtes3id6AXHoMsWEZRlLMAV5PvrTCOad/ESzwTkmSlDsQNwASbLBZZTmnjQ7w/5X5gi1BIR7x24SrAQeRPABAY22RJLCvMfdZzjrOWYWRCBuIwSgCwxQifCR8B7v6+fyILWpSbpg9TZzhLIkG8qkqieMnhIqwU4TNwWTwMvUlzNna6IUDoVJYFZdIPgjskAVON1D8AcN/4/sxlafKiKPXjJ6ji+yFcJM5E9DUgsjvP1TTWc5UlwP0ShgSgrqL2BaAbU1Fk1yBFnUlTSZSujzFh0nejBxCaKOOA4aV+X3Q4AS9BrujXHchTf3YloC6jgO7kVR6x66COZDUDyptfBRzCf2AW4CT9g2EMMDQa0bxpfLdvpStKqyRdz4c3pY43PnKTxteUvq6fAR07bOeiqRroNjIjX+Pn6zRJPXuuY9uYpyvNT96azQB+AvTFEibfpM1b19CZKdLIX9myzIgk3YTJymMTlDRfAfAiDB0JADhCnrP5NfNoZc25+7ntbVaRDxO4Wc/X6/WcGwN0O4sdXRFh4yiqWCskZQlfIAYvLGwv/SS157+f+AbQdSutlpiTYQqgDHALsRFkPcmbNEz8zSZpNvbtW/53ADubrCocuECeIBh/+FMlxFuQTQbHj1gR1jfbfwQIzavMhm+CpClI4yeInyLFcLKu3j4uCLHnH8NvgR+wV070d0BQZ7yKpo+P2/q4ez4Zoz9RbmpgkJBgThB4BSGN+lMJqZpPBPywhR8vp/HfgLdFxNhQJnd3dyJlDRDNiN1xd3eTxfPT/jQa/3mQBGWqTiaSBMwd+5xM1CkvnF5fxxP4B86BPT1bSG5sAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 85930,
            actualAp: 3371,
            actualDps: 2593.1,
            magnification: "1322%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 37992,
            actualAp: 1899,
            actualDps: 1295.21,
            magnification: "1583%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 290400,
            actualAp: 17598,
            actualDps: 11232.94,
            magnification: "528%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 12,
      stageName: "攻城戦 Lv.13",
      baseHp: 850000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 120,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 39984,
            actualAp: 1999,
            actualDps: 1363.12,
            magnification: "1666%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 90610,
            actualAp: 3554,
            actualDps: 2734.33,
            magnification: "1394%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 39984,
            actualAp: 1999,
            actualDps: 1363.12,
            magnification: "1666%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 90610,
            actualAp: 3554,
            actualDps: 2734.33,
            magnification: "1394%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 250200,
            actualAp: 13900,
            actualDps: 6725.82,
            magnification: "556%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 90610,
            actualAp: 3554,
            actualDps: 2734.33,
            magnification: "1394%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 39984,
            actualAp: 1999,
            actualDps: 1363.12,
            magnification: "1666%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 227700,
            actualAp: 9199,
            actualDps: 5017.68,
            magnification: "828%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 331200,
            actualAp: 9936,
            actualDps: 6624.0,
            magnification: "828%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 90610,
            actualAp: 3554,
            actualDps: 2734.33,
            magnification: "1394%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 39984,
            actualAp: 1999,
            actualDps: 1363.12,
            magnification: "1666%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 305800,
            actualAp: 18531,
            actualDps: 11828.62,
            magnification: "556%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 13,
      stageName: "攻城戦 Lv.14",
      baseHp: 900000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 120,
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
          treasureId: "38",
          treasureName: "緑マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 41976,
            actualAp: 2098,
            actualDps: 1431.03,
            magnification: "1749%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 95290,
            actualAp: 3738,
            actualDps: 2875.56,
            magnification: "1466%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 41976,
            actualAp: 2098,
            actualDps: 1431.03,
            magnification: "1749%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 95290,
            actualAp: 3738,
            actualDps: 2875.56,
            magnification: "1466%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 262800,
            actualAp: 14600,
            actualDps: 7064.53,
            magnification: "584%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 95290,
            actualAp: 3738,
            actualDps: 2875.56,
            magnification: "1466%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 41976,
            actualAp: 2098,
            actualDps: 1431.03,
            magnification: "1749%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgINCQgXFBRYAAEnKSxCJB0XOysLRSkGUDRDMzJPMSpDNjxFOzZXNSpROTZWOTdPPEEWXD1aPjZaQEBTRUlRSUMUbVpeTU9wT1ZwU01vV0tmW1VvV1JzYFk8fGZ8ZFxubGB4amKAYoqDaHJVlGaMdXQlp4mEenySc3+FfX6SeYGSe4GShHyxiTisctakgbhkrYmakYyjj52mgdmmnZi/hOSrnJrRq0C6n8W4rbDFub3Ox8bc19f///8/1uYEAAAAQHRSTlMAAPaAVwP/CjERds4q/7UQXUP+xHyd/+D+/SRMjP6tb/3mwv4JR/9e//7R6aqA/v7L3v3/m/75vbT8yv7U+v8Axnv3lQAABNZJREFUWIXtVmt3okoQ1E2EJPKS6MCgg8JEcRTHKEo0PPb//6tbAyY32TVn95z75X5Ii54j0jU93VU1dn7+x+h8A3wDfAN8A3wDfAP8vwC6fww9mNtf//oFQE9/yzacUZTPm3u2fuXJ6wD2Jk3mU8MYDC3PNXkROoNxcjgFfwtgT2RR5JnnuQiTZMKlVBR1eW0n1wD0IaWUUClcgnyTZcRV+fXhb7fQc6K+WpwSBcAK4bpZVdfV/Fq1V7cQrEcWcl0AmIRSFIH164Pd+0sAe7CWXKUjH59USJV/Msab8e9d+ACgD4yubmPqm5QLrjKJSxihOcqvq8MwjLIyCX6FeAfo6SPmTdLXeLfe5TlnTApKucgzlV+9JvaQESbz3VS/CqAbmzCSmRSS47VGcCkzLrKsqqrilNhdPV1ZKCiPrKEzMGxdvwB1ekEyTiZplAnKKJtFq2j18op4ZsguGOcoJgRAsIpG6Kugihte3wrTllYdI855JkQUWh4T+/3z88sLrtfXiFLGON4MJJDpeBplzHXb1oIcLs+TFkA3JqMJqrp79GfLpQJA/svLKlLJXF2UmF4kc86JSsbbVPmFHOqXHvR0Nd+H2WKx3O93z4BINyPCtlhcpTPQ0grz2KO0fxmtyyTK8UYDMON9CpMWYL1TsXJNei44PgkuSti5NOxhNLAwWRPc4hLbIXR9OmzeARwAzJb7cHc8FsLX0PBzdcYgTIxlez5v9K4Rx2vsib03IQe/yneA+8fZwveXcSyOx6OvmZqLvG3FM57z7XYC/ujOquBCFILyDBNW7Kyr5F8moov+o3fO9vJ4FJpmYrtMFqwWOfc8p3lkEOW5zKqiqupK0bMuE/0Dle8fHh8mfLHfC3EkmqaEnBe8yApxe3t7Ift04KRlm1xX5SHofRbT/f39Q6xaASloGJYmCrnIC+Z8fAhiSTaHw2GTBPoblZ+CJ0xT6eQ+2Kz3/nLGiQL4YVKqUde0ur9Gr/cm7RYAePNxZD3cTff7/cz3OSpowmWCg0e3vyF8FtPTAeTfMd/3I7lYyKOQmYk2aoRDipUgo9trZvYJoCzL9QxLL7kvjnLLhVoeTQSU4Gb/7k8VnFBASyQBQW+575rKUoWEGpmA9gYoIRh86cr2fLdbN1ReCCkFB1MZiAaFwxHB/T7fBb3BKj/N50rDPZiBMQ8+AHSDdDPxGwBOocJsBlsnhBdKfeCtK3PHgdqBGQ6Hw9HI6nvZRv8AYD89GZDzYrnQzK2kcia5cmVO3VZ8BfM8FANoAZtVN1kRG29ybtTc1e8sxhczTWOSKSZR9+LrpssgKZcyTATVtVLCaUW90TRJNh19nKbTZDydpB6HbQrBJTEJb3zdbU+WXBCTZwUmSswWk0qJnyEVqFF3YikykSGPUVf1MMd3yZkyD7gPaTNyxX5+wcR4qEkVZH3AFozhMByhOY5lWQQ+FsVx42dwjAaDQMPqaKulRxtDa+pyhbpVBk0T1VyaRjiCsz60d9NHFoUjw295ptQL8a3YZKjmijbAEDLlB+X8sxpvOhr70YZG4JvgYVY04q3K09wIVyGYJXKYSt3cPM1/kfPd7c1N5y1ubmJRhrE6I06H5kgzwjyTOKrqC2Rid7/8i9OE4Yx13UboF+3qTpSnk/R0Oik3aIn9D1EOdUWQE474AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 238425,
            actualAp: 9632,
            actualDps: 5254.02,
            magnification: "867%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 346800,
            actualAp: 10404,
            actualDps: 6936.0,
            magnification: "867%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 95290,
            actualAp: 3738,
            actualDps: 2875.56,
            magnification: "1466%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 41976,
            actualAp: 2098,
            actualDps: 1431.03,
            magnification: "1749%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 321200,
            actualAp: 19464,
            actualDps: 12424.31,
            magnification: "584%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 14,
      stageName: "攻城戦 Lv.15",
      baseHp: 950000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 130,
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
          treasureId: "57",
          treasureName: "ネコビタンC",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 43968,
            actualAp: 2198,
            actualDps: 1498.94,
            magnification: "1832%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 99970,
            actualAp: 3921,
            actualDps: 3016.79,
            magnification: "1538%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 43968,
            actualAp: 2198,
            actualDps: 1498.94,
            magnification: "1832%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 99970,
            actualAp: 3921,
            actualDps: 3016.79,
            magnification: "1538%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 275400,
            actualAp: 15300,
            actualDps: 7403.24,
            magnification: "612%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 99970,
            actualAp: 3921,
            actualDps: 3016.79,
            magnification: "1538%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQAFBAMvKhpZLARhLQNtKQFoNwlpOAZoPhErW0J3RwwZc1F/UxpyWDKBVhiJXBsXiWKHXSWOXgqPZC+TaS1feGtagF6VbS5if20vnneoeAydeD54hnV1inmjf0Cjf0W5jRp0nIeyjlE0xJOrkmKcoYWhoobSog6+omDmoRuNv67JrXzPtIrQu2fLuIXhwEH/yiP51TzkzqP+1EP+2F323o/+33v14qr/+xrx5r795pzt7Of/8ML/9t////8X4iQmAAAAQHRSTlMAYpr1Oh0FVnWZ2sD91q3+7f5JEsKFlv7+zP/+7W7m/8/+/Pr/oVFw//4U/db8Npr/C//+GyxvO48D/04YX3EAttxl7wAABk9JREFUWIWll+uSokgQhZ0REBUobFFKQYuiWqXkLgoqXt7/rTYLZ3onNmBmuyd/dGsE+ZF58lSCvedfRu/jw/+Ljyu/CHg+bz8u/Srgtk1e134NAPmj1e2vAHN7/heA53M7ChevHr4GuM0n4Xr7ZYAoYFmELxG+BLitJstrMf8EQFF+vf+zMgBwXXwCIEu/5N+20ME7AJL/DxioHyVA/cZOe38PPwNQhmP5o4DtaNEAik8AZIsNPgqY+y9A+AkRB25h/OihsdBuJACr5jz9GaBcpkN6ZVJ+UV4AP1xoy3cw0u32a1474JLnx+PWC66FlRyPeX55JsYkDG0ALJLV9vYHwCU/nqqq3vDseo3TuqpOx8ttNZr4IbQwrw2jej5/A1BEen1/nKMMANfo/LjXgADCSFuCBPVCHIduwD5v0h8PyD8cDg3h8ajrarvdjZahv9utxSA6AXD7Jv2esuzQEIoohe+P1EjAieF6vvB/B8iPVZNe77wA0hvGNdpAQ4tRCWMMfd8P/VUn4JV/r+utRbMsyDLX8rLDlW/Khb0+p5oAhKGRdGlw+ZFfJYYTBN7GM4eqqgMh3oz8dSoAo/V6nnT54N/8IeQbZbkxXcc0A+iCa364XgBgvttVty4n5lXZ5B8HJg3cQZ2a/AB9ECGlrYWxPxE2WK26APmpPJ9LyJ+OoQBXqjyEhIpMlBBr4CP/3V/Vc6OjhcuxbgDHvYqDIKDDmYsQhykQGoAd1iNNEzaojfWq3cpNAeeyrGQdChAIjhDhWeCYFljSW3k22CAtR82BbgNU9/M5BcIMFKCCwaEH7CBTLaNrYb4A3stHLQDo4PEooygtI8gfjx3H3JxN5BBzkDyiwh7tBMAX0Q7IT3eYgBVHcIgCU5JVVboBABNzuEsLbi+2ntAAfLRI2gHggXtlxXEaxZknK5KkSBZyKEaIFQfbX+82ALBtf7FtH+OxgjO31eN4lsZFPFN1VdIRDQKMGecH2w4XczATj9dp3QpoJKhnJufSGyuKmDq6jpDjIBYjgiiBZF8AruGiA3CqH/edDtJJ8pgWnGBW4JgjnF0ZZRhpmh2CAm4RartWQA6A0nMcZywrqhMwErMDDq7Mya48iBk2R6OR7fubyPcXVZsTYQjniFLqDJWeZAYOyB+g4MqRg3EQE+a+beca+MizxRRaK7ifGQ8otpKbpAcYMYRQUJCMO5zFhKDxTNdCe2HDdq9ulzZAGUE+xdxLdRwgbCNHDPHAEcUYYY45sV/7aFPlXQDmUcK5y1nhoiUQHErJZImhM4Y1DB6Aafrr8pTv28a449ybmQ6inNDIIzaBGyOMJkv4RDCyOQIA93laH9sqaACbxIDCCdIHBqE04xQRxkMYYszNMfRBSFFE91Pe+nDNd4xvqu1wrGNzIBuYUH6gJLaLq09wQZGwFcE8OsPCaAesGGe7ZC+rlEmywTCsdQqeLIprgYvM1BEs6dg6P6qj0gq4JB7oZxlD1eUDZUgwzQ4OAy8ixskh0McYxHQ3cODyXjtA9MAp1WUjHu5noISTYcZQv48IOcBaAU8hC87L6dIOgIWwgcapNVW5u/EQwQFHIFocF1j4gjNEzfRRvjpoA+yPMwajGyczh3NOiFgFmMVFweG/g02MqFVu9Le81wHoTWc6+M3cpJ6lu5Dd12zOGQMJkDk2PIxhu7ruYNoFUFTXhech7I+0kgdjyF8ubR+aYhxZlsuJ4xDCdUPurEAyWJbBrMlsPx3Ay8RE0ybvNo1jaIRDExBZxqxuQE8eGLqJstg1DFebTDRBgC7Ax4SBqI6DKTO2x44xNg/H/XbjYYfDDfuQD6EtYaUKEyMRpj5LTvDO1QkQ7wdlxECtkSYAIfyBo8TEcsAs4647q34PUC7H087jRAAg3u3JBHTEjIAh4RGbuarIb7fyj5DfDNfE2BYCiJgsAZBhk0FdRNeNaZ7vuzWAfMMaMgKhNSVMNNsW7kLGbGzizHUN+XLpnoIAWK4VZ7AAYYzA0JY2dRihsfU2VfWAm4Of7/9dAGWgk8Idvp3mo6YADXYSNnVXH/QUWfVc9U+AnqQza6BMj8lqCEJibzbG+lCSZJGoSIOfvx9+I+JQhYvhbfn49r3fx304zf3+928/C+z9EfD6oaXkef727dv34fcmvv372+m/gH8A6dojJucjJXoAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 43968,
            actualAp: 2198,
            actualDps: 1498.94,
            magnification: "1832%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 249150,
            actualAp: 10065,
            actualDps: 5490.36,
            magnification: "906%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 362400,
            actualAp: 10872,
            actualDps: 7248.0,
            magnification: "906%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 99970,
            actualAp: 3921,
            actualDps: 3016.79,
            magnification: "1538%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 43968,
            actualAp: 2198,
            actualDps: 1498.94,
            magnification: "1832%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 336600,
            actualAp: 20397,
            actualDps: 13019.99,
            magnification: "612%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 15,
      stageName: "攻城戦 Lv.16",
      baseHp: 1000000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 130,
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
          treasureId: "39",
          treasureName: "黄マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 45960,
            actualAp: 2298,
            actualDps: 1566.85,
            magnification: "1915%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIdHBshHx4iIBwoJCEpJB8mJiYrJSIrKikuKig+OjdORjprRgNKSkn/AABvSQNrTSB0TwZ1TgtXVFFtVi6DVghdWlmNYQiMaw2faA2baRd0bmdwb297djGBcUGFd2SGfnGshg2ygBqygyfnhwWXlZSmlWvRlhrBnTnwnQX2qgL8qAL7rQLsvALiuzni1AP7yQbbyIj+1wv92QL93gH96QL+8QL/9gn++gH//QL//QH//wL972f999X////MotYaAAAAQHRSTlMA48FPKPzeC3CTsP3XCf8BHv45bxtQmf++dd78520Ll/23xuz+/frX7//+weD+gv0s//z6wZJqTf80IhEE//8ABPD13QAABLVJREFUWIXt1utyokoQAGAiVxlwYRAYHQ3IHZQQIEYTJfv+b3V6QLNrQrbO2fM3UynLqtDf9HQ3IPfzfy7uG/gGvoFv4Bv4CHCwzucz9xfrCpyH9dfA+Xxi62roBjb0/wJA/OHw8vraExBvBWnqYf3+3wOn1/3T/vDyMhA4LOu2SW1s/Biu0vUv83kHno/t0/MlC4uQuGi71CKYCTr2HEvXxw/1Dhye2rbd98QjNgxSlF1DwsCA+EVWOXgRBI7xJ+Bl37Z1+7SHg9iLewbUXZQ3C47DWRcYVt54+M/A81MNxG63PzyEQZCVUIaq7Da67lSdp5O2wn2A/FUXXg/7uj22ZbHbPwRxAQmw1aWGTkrIgNSNZ0ApBZ6T+c8Ad0nheGyLYrd9CIqyZELbNZ5NirbxnKyussCz1KmsqPIIcD4BUDKhLuKMxTOhBSEjYdlWYVQAmJtIVaTJOAB9KAsQjmVclFehriJqOWEfTE2E0Aw+xzIYzrAtymOfQ9EDRQ19qfJwSZZ5SZEI4TNkmkgZqUEvHPa7sj123bGOYxYfl11RV1WeV1UdiSLbnxGq8BXw8rBjA/jWsVMUZUyLhlaZQ6KiiIf9+zWVxwGWAgj18Y0JAFAzrvw8tGyHUMr2HwhXG8+gTwGEou5AYCmYKIpcugyzNKvM4QAiEK6vjBXxKmzjGA7xVkYFRSY1Tc2GHhSxOWQgmgiAFS+PA0wIsgxugiqvWNWpO1OwZZElHQ7QF8J1k9VUkEcAJjwuHrZFHEVlzvY0/ZVgkGUQXkrQdwFSSHxtes3id6AXHoMsWEZRlLMAV5PvrTCOad/ESzwTkmSlDsQNwASbLBZZTmnjQ7w/5X5gi1BIR7x24SrAQeRPABAY22RJLCvMfdZzjrOWYWRCBuIwSgCwxQifCR8B7v6+fyILWpSbpg9TZzhLIkG8qkqieMnhIqwU4TNwWTwMvUlzNna6IUDoVJYFZdIPgjskAVON1D8AcN/4/sxlafKiKPXjJ6ji+yFcJM5E9DUgsjvP1TTWc5UlwP0ShgSgrqL2BaAbU1Fk1yBFnUlTSZSujzFh0nejBxCaKOOA4aV+X3Q4AS9BrujXHchTf3YloC6jgO7kVR6x66COZDUDyptfBRzCf2AW4CT9g2EMMDQa0bxpfLdvpStKqyRdz4c3pY43PnKTxteUvq6fAR07bOeiqRroNjIjX+Pn6zRJPXuuY9uYpyvNT96azQB+AvTFEibfpM1b19CZKdLIX9myzIgk3YTJymMTlDRfAfAiDB0JADhCnrP5NfNoZc25+7ntbVaRDxO4Wc/X6/WcGwN0O4sdXRFh4yiqWCskZQlfIAYvLGwv/SS157+f+AbQdSutlpiTYQqgDHALsRFkPcmbNEz8zSZpNvbtW/53ADubrCocuECeIBh/+FMlxFuQTQbHj1gR1jfbfwQIzavMhm+CpClI4yeInyLFcLKu3j4uCLHnH8NvgR+wV070d0BQZ7yKpo+P2/q4ez4Zoz9RbmpgkJBgThB4BSGN+lMJqZpPBPywhR8vp/HfgLdFxNhQJnd3dyJlDRDNiN1xd3eTxfPT/jQa/3mQBGWqTiaSBMwd+5xM1CkvnF5fxxP4B86BPT1bSG5sAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 104650,
            actualAp: 4105,
            actualDps: 3158.01,
            magnification: "1610%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 45960,
            actualAp: 2298,
            actualDps: 1566.85,
            magnification: "1915%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 104650,
            actualAp: 4105,
            actualDps: 3158.01,
            magnification: "1610%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 288000,
            actualAp: 16000,
            actualDps: 7741.95,
            magnification: "640%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 104650,
            actualAp: 4105,
            actualDps: 3158.01,
            magnification: "1610%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQAFBAMvKhpZLARhLQNtKQFoNwlpOAZoPhErW0J3RwwZc1F/UxpyWDKBVhiJXBsXiWKHXSWOXgqPZC+TaS1feGtagF6VbS5if20vnneoeAydeD54hnV1inmjf0Cjf0W5jRp0nIeyjlE0xJOrkmKcoYWhoobSog6+omDmoRuNv67JrXzPtIrQu2fLuIXhwEH/yiP51TzkzqP+1EP+2F323o/+33v14qr/+xrx5r795pzt7Of/8ML/9t////8X4iQmAAAAQHRSTlMAYpr1Oh0FVnWZ2sD91q3+7f5JEsKFlv7+zP/+7W7m/8/+/Pr/oVFw//4U/db8Npr/C//+GyxvO48D/04YX3EAttxl7wAABk9JREFUWIWll+uSokgQhZ0REBUobFFKQYuiWqXkLgoqXt7/rTYLZ3onNmBmuyd/dGsE+ZF58lSCvedfRu/jw/+Ljyu/CHg+bz8u/Srgtk1e134NAPmj1e2vAHN7/heA53M7ChevHr4GuM0n4Xr7ZYAoYFmELxG+BLitJstrMf8EQFF+vf+zMgBwXXwCIEu/5N+20ME7AJL/DxioHyVA/cZOe38PPwNQhmP5o4DtaNEAik8AZIsNPgqY+y9A+AkRB25h/OihsdBuJACr5jz9GaBcpkN6ZVJ+UV4AP1xoy3cw0u32a1474JLnx+PWC66FlRyPeX55JsYkDG0ALJLV9vYHwCU/nqqq3vDseo3TuqpOx8ttNZr4IbQwrw2jej5/A1BEen1/nKMMANfo/LjXgADCSFuCBPVCHIduwD5v0h8PyD8cDg3h8ajrarvdjZahv9utxSA6AXD7Jv2esuzQEIoohe+P1EjAieF6vvB/B8iPVZNe77wA0hvGNdpAQ4tRCWMMfd8P/VUn4JV/r+utRbMsyDLX8rLDlW/Khb0+p5oAhKGRdGlw+ZFfJYYTBN7GM4eqqgMh3oz8dSoAo/V6nnT54N/8IeQbZbkxXcc0A+iCa364XgBgvttVty4n5lXZ5B8HJg3cQZ2a/AB9ECGlrYWxPxE2WK26APmpPJ9LyJ+OoQBXqjyEhIpMlBBr4CP/3V/Vc6OjhcuxbgDHvYqDIKDDmYsQhykQGoAd1iNNEzaojfWq3cpNAeeyrGQdChAIjhDhWeCYFljSW3k22CAtR82BbgNU9/M5BcIMFKCCwaEH7CBTLaNrYb4A3stHLQDo4PEooygtI8gfjx3H3JxN5BBzkDyiwh7tBMAX0Q7IT3eYgBVHcIgCU5JVVboBABNzuEsLbi+2ntAAfLRI2gHggXtlxXEaxZknK5KkSBZyKEaIFQfbX+82ALBtf7FtH+OxgjO31eN4lsZFPFN1VdIRDQKMGecH2w4XczATj9dp3QpoJKhnJufSGyuKmDq6jpDjIBYjgiiBZF8AruGiA3CqH/edDtJJ8pgWnGBW4JgjnF0ZZRhpmh2CAm4RartWQA6A0nMcZywrqhMwErMDDq7Mya48iBk2R6OR7fubyPcXVZsTYQjniFLqDJWeZAYOyB+g4MqRg3EQE+a+beca+MizxRRaK7ifGQ8otpKbpAcYMYRQUJCMO5zFhKDxTNdCe2HDdq9ulzZAGUE+xdxLdRwgbCNHDPHAEcUYYY45sV/7aFPlXQDmUcK5y1nhoiUQHErJZImhM4Y1DB6Aafrr8pTv28a449ybmQ6inNDIIzaBGyOMJkv4RDCyOQIA93laH9sqaACbxIDCCdIHBqE04xQRxkMYYszNMfRBSFFE91Pe+nDNd4xvqu1wrGNzIBuYUH6gJLaLq09wQZGwFcE8OsPCaAesGGe7ZC+rlEmywTCsdQqeLIprgYvM1BEs6dg6P6qj0gq4JB7oZxlD1eUDZUgwzQ4OAy8ixskh0McYxHQ3cODyXjtA9MAp1WUjHu5noISTYcZQv48IOcBaAU8hC87L6dIOgIWwgcapNVW5u/EQwQFHIFocF1j4gjNEzfRRvjpoA+yPMwajGyczh3NOiFgFmMVFweG/g02MqFVu9Le81wHoTWc6+M3cpJ6lu5Dd12zOGQMJkDk2PIxhu7ruYNoFUFTXhech7I+0kgdjyF8ubR+aYhxZlsuJ4xDCdUPurEAyWJbBrMlsPx3Ay8RE0ybvNo1jaIRDExBZxqxuQE8eGLqJstg1DFebTDRBgC7Ax4SBqI6DKTO2x44xNg/H/XbjYYfDDfuQD6EtYaUKEyMRpj5LTvDO1QkQ7wdlxECtkSYAIfyBo8TEcsAs4647q34PUC7H087jRAAg3u3JBHTEjIAh4RGbuarIb7fyj5DfDNfE2BYCiJgsAZBhk0FdRNeNaZ7vuzWAfMMaMgKhNSVMNNsW7kLGbGzizHUN+XLpnoIAWK4VZ7AAYYzA0JY2dRihsfU2VfWAm4Of7/9dAGWgk8Idvp3mo6YADXYSNnVXH/QUWfVc9U+AnqQza6BMj8lqCEJibzbG+lCSZJGoSIOfvx9+I+JQhYvhbfn49r3fx304zf3+928/C+z9EfD6oaXkef727dv34fcmvv372+m/gH8A6dojJucjJXoAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 45960,
            actualAp: 2298,
            actualDps: 1566.85,
            magnification: "1915%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 259875,
            actualAp: 10498,
            actualDps: 5726.7,
            magnification: "945%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 378000,
            actualAp: 11340,
            actualDps: 7560.0,
            magnification: "945%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 104650,
            actualAp: 4105,
            actualDps: 3158.01,
            magnification: "1610%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 45960,
            actualAp: 2298,
            actualDps: 1566.85,
            magnification: "1915%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 352000,
            actualAp: 21331,
            actualDps: 13615.68,
            magnification: "640%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 16,
      stageName: "攻城戦 Lv.17",
      baseHp: 1050000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 130,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 47952,
            actualAp: 2397,
            actualDps: 1634.76,
            magnification: "1998%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 109330,
            actualAp: 4289,
            actualDps: 3299.24,
            magnification: "1682%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 47952,
            actualAp: 2397,
            actualDps: 1634.76,
            magnification: "1998%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIdHBshHx4iIBwoJCEpJB8mJiYrJSIrKikuKig+OjdORjprRgNKSkn/AABvSQNrTSB0TwZ1TgtXVFFtVi6DVghdWlmNYQiMaw2faA2baRd0bmdwb297djGBcUGFd2SGfnGshg2ygBqygyfnhwWXlZSmlWvRlhrBnTnwnQX2qgL8qAL7rQLsvALiuzni1AP7yQbbyIj+1wv92QL93gH96QL+8QL/9gn++gH//QL//QH//wL972f999X////MotYaAAAAQHRSTlMA48FPKPzeC3CTsP3XCf8BHv45bxtQmf++dd78520Ll/23xuz+/frX7//+weD+gv0s//z6wZJqTf80IhEE//8ABPD13QAABLVJREFUWIXt1utyokoQAGAiVxlwYRAYHQ3IHZQQIEYTJfv+b3V6QLNrQrbO2fM3UynLqtDf9HQ3IPfzfy7uG/gGvoFv4Bv4CHCwzucz9xfrCpyH9dfA+Xxi62roBjb0/wJA/OHw8vraExBvBWnqYf3+3wOn1/3T/vDyMhA4LOu2SW1s/Biu0vUv83kHno/t0/MlC4uQuGi71CKYCTr2HEvXxw/1Dhye2rbd98QjNgxSlF1DwsCA+EVWOXgRBI7xJ+Bl37Z1+7SHg9iLewbUXZQ3C47DWRcYVt54+M/A81MNxG63PzyEQZCVUIaq7Da67lSdp5O2wn2A/FUXXg/7uj22ZbHbPwRxAQmw1aWGTkrIgNSNZ0ApBZ6T+c8Ad0nheGyLYrd9CIqyZELbNZ5NirbxnKyussCz1KmsqPIIcD4BUDKhLuKMxTOhBSEjYdlWYVQAmJtIVaTJOAB9KAsQjmVclFehriJqOWEfTE2E0Aw+xzIYzrAtymOfQ9EDRQ19qfJwSZZ5SZEI4TNkmkgZqUEvHPa7sj123bGOYxYfl11RV1WeV1UdiSLbnxGq8BXw8rBjA/jWsVMUZUyLhlaZQ6KiiIf9+zWVxwGWAgj18Y0JAFAzrvw8tGyHUMr2HwhXG8+gTwGEou5AYCmYKIpcugyzNKvM4QAiEK6vjBXxKmzjGA7xVkYFRSY1Tc2GHhSxOWQgmgiAFS+PA0wIsgxugiqvWNWpO1OwZZElHQ7QF8J1k9VUkEcAJjwuHrZFHEVlzvY0/ZVgkGUQXkrQdwFSSHxtes3id6AXHoMsWEZRlLMAV5PvrTCOad/ESzwTkmSlDsQNwASbLBZZTmnjQ7w/5X5gi1BIR7x24SrAQeRPABAY22RJLCvMfdZzjrOWYWRCBuIwSgCwxQifCR8B7v6+fyILWpSbpg9TZzhLIkG8qkqieMnhIqwU4TNwWTwMvUlzNna6IUDoVJYFZdIPgjskAVON1D8AcN/4/sxlafKiKPXjJ6ji+yFcJM5E9DUgsjvP1TTWc5UlwP0ShgSgrqL2BaAbU1Fk1yBFnUlTSZSujzFh0nejBxCaKOOA4aV+X3Q4AS9BrujXHchTf3YloC6jgO7kVR6x66COZDUDyptfBRzCf2AW4CT9g2EMMDQa0bxpfLdvpStKqyRdz4c3pY43PnKTxteUvq6fAR07bOeiqRroNjIjX+Pn6zRJPXuuY9uYpyvNT96azQB+AvTFEibfpM1b19CZKdLIX9myzIgk3YTJymMTlDRfAfAiDB0JADhCnrP5NfNoZc25+7ntbVaRDxO4Wc/X6/WcGwN0O4sdXRFh4yiqWCskZQlfIAYvLGwv/SS157+f+AbQdSutlpiTYQqgDHALsRFkPcmbNEz8zSZpNvbtW/53ADubrCocuECeIBh/+FMlxFuQTQbHj1gR1jfbfwQIzavMhm+CpClI4yeInyLFcLKu3j4uCLHnH8NvgR+wV070d0BQZ7yKpo+P2/q4ez4Zoz9RbmpgkJBgThB4BSGN+lMJqZpPBPywhR8vp/HfgLdFxNhQJnd3dyJlDRDNiN1xd3eTxfPT/jQa/3mQBGWqTiaSBMwd+5xM1CkvnF5fxxP4B86BPT1bSG5sAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 109330,
            actualAp: 4289,
            actualDps: 3299.24,
            magnification: "1682%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 300600,
            actualAp: 16700,
            actualDps: 8080.66,
            magnification: "668%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 109330,
            actualAp: 4289,
            actualDps: 3299.24,
            magnification: "1682%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 47952,
            actualAp: 2397,
            actualDps: 1634.76,
            magnification: "1998%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 270600,
            actualAp: 10932,
            actualDps: 5963.04,
            magnification: "984%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 393600,
            actualAp: 11808,
            actualDps: 7872.0,
            magnification: "984%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 109330,
            actualAp: 4289,
            actualDps: 3299.24,
            magnification: "1682%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 47952,
            actualAp: 2397,
            actualDps: 1634.76,
            magnification: "1998%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 367400,
            actualAp: 22264,
            actualDps: 14211.37,
            magnification: "668%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 17,
      stageName: "攻城戦 Lv.18",
      baseHp: 1100000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 140,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 49944,
            actualAp: 2497,
            actualDps: 1702.67,
            magnification: "2081%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 114010,
            actualAp: 4472,
            actualDps: 3440.47,
            magnification: "1754%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 49944,
            actualAp: 2497,
            actualDps: 1702.67,
            magnification: "2081%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 114010,
            actualAp: 4472,
            actualDps: 3440.47,
            magnification: "1754%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 313200,
            actualAp: 17400,
            actualDps: 8419.37,
            magnification: "696%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 114010,
            actualAp: 4472,
            actualDps: 3440.47,
            magnification: "1754%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 49944,
            actualAp: 2497,
            actualDps: 1702.67,
            magnification: "2081%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 281325,
            actualAp: 11365,
            actualDps: 6199.38,
            magnification: "1023%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 409200,
            actualAp: 12276,
            actualDps: 8184.0,
            magnification: "1023%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 114010,
            actualAp: 4472,
            actualDps: 3440.47,
            magnification: "1754%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 49944,
            actualAp: 2497,
            actualDps: 1702.67,
            magnification: "2081%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 382800,
            actualAp: 23197,
            actualDps: 14807.05,
            magnification: "696%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 18,
      stageName: "攻城戦 Lv.19",
      baseHp: 1150000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 140,
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
          treasureId: "40",
          treasureName: "虹マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 51936,
            actualAp: 2596,
            actualDps: 1770.58,
            magnification: "2164%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 118690,
            actualAp: 4656,
            actualDps: 3581.7,
            magnification: "1826%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 51936,
            actualAp: 2596,
            actualDps: 1770.58,
            magnification: "2164%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 118690,
            actualAp: 4656,
            actualDps: 3581.7,
            magnification: "1826%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 325800,
            actualAp: 18100,
            actualDps: 8758.08,
            magnification: "724%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 118690,
            actualAp: 4656,
            actualDps: 3581.7,
            magnification: "1826%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 51936,
            actualAp: 2596,
            actualDps: 1770.58,
            magnification: "2164%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 292050,
            actualAp: 11798,
            actualDps: 6435.72,
            magnification: "1062%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 424800,
            actualAp: 12744,
            actualDps: 8496.0,
            magnification: "1062%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 118690,
            actualAp: 4656,
            actualDps: 3581.7,
            magnification: "1826%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualHp: 51936,
            actualAp: 2596,
            actualDps: 1770.58,
            magnification: "2164%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 398200,
            actualAp: 24130,
            actualDps: 15402.74,
            magnification: "724%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 19,
      stageName: "攻城戦 Lv.MAX",
      baseHp: 1200000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 150,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualDps: 1840.95,
            magnification: "2250%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIdHBshHx4iIBwoJCEpJB8mJiYrJSIrKikuKig+OjdORjprRgNKSkn/AABvSQNrTSB0TwZ1TgtXVFFtVi6DVghdWlmNYQiMaw2faA2baRd0bmdwb297djGBcUGFd2SGfnGshg2ygBqygyfnhwWXlZSmlWvRlhrBnTnwnQX2qgL8qAL7rQLsvALiuzni1AP7yQbbyIj+1wv92QL93gH96QL+8QL/9gn++gH//QL//QH//wL972f999X////MotYaAAAAQHRSTlMA48FPKPzeC3CTsP3XCf8BHv45bxtQmf++dd78520Ll/23xuz+/frX7//+weD+gv0s//z6wZJqTf80IhEE//8ABPD13QAABLVJREFUWIXt1utyokoQAGAiVxlwYRAYHQ3IHZQQIEYTJfv+b3V6QLNrQrbO2fM3UynLqtDf9HQ3IPfzfy7uG/gGvoFv4Bv4CHCwzucz9xfrCpyH9dfA+Xxi62roBjb0/wJA/OHw8vraExBvBWnqYf3+3wOn1/3T/vDyMhA4LOu2SW1s/Biu0vUv83kHno/t0/MlC4uQuGi71CKYCTr2HEvXxw/1Dhye2rbd98QjNgxSlF1DwsCA+EVWOXgRBI7xJ+Bl37Z1+7SHg9iLewbUXZQ3C47DWRcYVt54+M/A81MNxG63PzyEQZCVUIaq7Da67lSdp5O2wn2A/FUXXg/7uj22ZbHbPwRxAQmw1aWGTkrIgNSNZ0ApBZ6T+c8Ad0nheGyLYrd9CIqyZELbNZ5NirbxnKyussCz1KmsqPIIcD4BUDKhLuKMxTOhBSEjYdlWYVQAmJtIVaTJOAB9KAsQjmVclFehriJqOWEfTE2E0Aw+xzIYzrAtymOfQ9EDRQ19qfJwSZZ5SZEI4TNkmkgZqUEvHPa7sj123bGOYxYfl11RV1WeV1UdiSLbnxGq8BXw8rBjA/jWsVMUZUyLhlaZQ6KiiIf9+zWVxwGWAgj18Y0JAFAzrvw8tGyHUMr2HwhXG8+gTwGEou5AYCmYKIpcugyzNKvM4QAiEK6vjBXxKmzjGA7xVkYFRSY1Tc2GHhSxOWQgmgiAFS+PA0wIsgxugiqvWNWpO1OwZZElHQ7QF8J1k9VUkEcAJjwuHrZFHEVlzvY0/ZVgkGUQXkrQdwFSSHxtes3id6AXHoMsWEZRlLMAV5PvrTCOad/ESzwTkmSlDsQNwASbLBZZTmnjQ7w/5X5gi1BIR7x24SrAQeRPABAY22RJLCvMfdZzjrOWYWRCBuIwSgCwxQifCR8B7v6+fyILWpSbpg9TZzhLIkG8qkqieMnhIqwU4TNwWTwMvUlzNna6IUDoVJYFZdIPgjskAVON1D8AcN/4/sxlafKiKPXjJ6ji+yFcJM5E9DUgsjvP1TTWc5UlwP0ShgSgrqL2BaAbU1Fk1yBFnUlTSZSujzFh0nejBxCaKOOA4aV+X3Q4AS9BrujXHchTf3YloC6jgO7kVR6x66COZDUDyptfBRzCf2AW4CT9g2EMMDQa0bxpfLdvpStKqyRdz4c3pY43PnKTxteUvq6fAR07bOeiqRroNjIjX+Pn6zRJPXuuY9uYpyvNT96azQB+AvTFEibfpM1b19CZKdLIX9myzIgk3YTJymMTlDRfAfAiDB0JADhCnrP5NfNoZc25+7ntbVaRDxO4Wc/X6/WcGwN0O4sdXRFh4yiqWCskZQlfIAYvLGwv/SS157+f+AbQdSutlpiTYQqgDHALsRFkPcmbNEz8zSZpNvbtW/53ADubrCocuECeIBh/+FMlxFuQTQbHj1gR1jfbfwQIzavMhm+CpClI4yeInyLFcLKu3j4uCLHnH8NvgR+wV070d0BQZ7yKpo+P2/q4ez4Zoz9RbmpgkJBgThB4BSGN+lMJqZpPBPywhR8vp/HfgLdFxNhQJnd3dyJlDRDNiN1xd3eTxfPT/jQa/3mQBGWqTiaSBMwd+5xM1CkvnF5fxxP4B86BPT1bSG5sAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 123500,
            actualAp: 4845,
            actualDps: 3726.85,
            magnification: "1900%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualDps: 1840.95,
            magnification: "2250%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 123500,
            actualAp: 4845,
            actualDps: 3726.85,
            magnification: "1900%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-46.7s",
            delayFrames: "1,000-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "228",
          enemyName: "時空のサイクロプス",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4750,
            dps: 1228.45,
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
            actualAp: 19000,
            actualDps: 4913.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "226",
          enemyName: "フレイムドラゴンライダー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAHBQUJCQkKCgplAgM1ISI1JyU7JCRuFRK3AQC2AwJnJiN5Hhq4AwK2BQNGNzhKODW0DAW1Dw6GJiC9DwuIKR6SJhXBEwqMKyGPKxqmIxpRR0fDGBD/AANQTEyrKQ9iSUKuKh/JJRdcUlJgUlLYHiLiHSLqGSBrUlDOKRzILh7gIR76FRzULRjcKxqoSyZrYmPASxjCTSPSRxpxb2/iSBTKVhXbUh3OXQ+5Zx/lYxTPfkChjYvRhEHvhxj1qhx+bThXAAAAQHRSTlMAvWWXBTr6EiBtC/49NoyQ/iZQ/szDWPPemX/WsgQmFf3+5HZWa1cur5DCQRX80/35dE7jyf2p8cf//9H4gf/+4g23JwAAA2pJREFUWIXtlltzokoUhU1EjI0XsLkqCN0GCSg2SlouTvD//6uzmzOTM1WnNGhN1bxkWz5YuD52r167odf7rr9QnufdqfA17z+d19Z9+sPxUwi120W73T0EdDz5oN991tzZ7u7owduWR3H/3Xax2GxFhbYTdW4Boags2wYixyaJmyRuHFO66Qrw47isQ080EMVJzXld8zTledgRIIW0qOmkdW4bF03T1KL4vmsHaKrzlMYIjN+G++YngNP4aw8k35ekl3lCubsHgGm4cXFpGug/BWKHXTiezwczySkv5lPN240MsueXS0P3NInD6Gu9dCrz5lzQhNljrXWw4AJQUGJsOuh7kmnGRb5wmKq+DcHDKAQHL0DIXaeLHggS0jT/pMhq9irSt02E/lInne7/C7I5PcmYvWqLRRSFSV6DB+78jhRrhvksALvQDrcbd8+bKmCLbgnwEEJabPSfZTWY+SHNS4MQFqhZ4KAuejR3XVfXJ4MnWQ6W47ioOCckDVRV6QrQrdSiU20gy3hp0LyC/BAorDjScPzSYQkTHSSWO5VhDSzlNQEAxpWCDXNh6R0IaGSlvKk5U3BVE16JBjCBX6Is87ZYGpsvALCgZcZI1VQk5Qz0WFFkWVEUbI+vNQ7hAfvRWE9i1xISjElVMwAAAVesAoSClZl0Ra9NdX06mY7mwgBhWqtPCXwoZRljVVUxptjXLIDNg4XvYQJ5O/YcfCOcQyupuzHfsqAShMYRZ+wVAhrp4Hg7NQ2cXABovSM08rzVexaIysfmjSigqWWlggBHB2/DQ2DVxBH3XL+vBzMZpvNWlNAECNSl4vSshQ0CoAZvK7g2HMJ3Js9uyIWRYARNixomTwBgCYqqqtl59fP6cDC4DRCroPneBQMgy5+AH+vhV7rflzHRRjAIuj5fuCI+OAiyH06H+P5WExjF0RQdHRuigFUAXE3flS600QQieWKYiOwGWWY79xEgEz3xYF8YMAGYAMAwrwT4NubAsGEoarYeDB/R96TjwfRNQ12uvv7vlfKkY0mC9zt28X9NHJLl4wAPeRpsRbB+TO4fPz4+4sIOsocsgJcr8TQ7OMq/w3S//gwvFBWzl4/pe1oJ+tJQguzBPUTbQxn7L6/r19VDEeq1D8gHld/1Xd/1J2v43O8//ap+//nqH/8B3EGK3XvAEncAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 45000,
            ap: 2500,
            dps: 1209.68,
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
            actualHp: 337500,
            actualAp: 18750,
            actualDps: 9072.6,
            magnification: "750%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 123500,
            actualAp: 4845,
            actualDps: 3726.85,
            magnification: "1900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualDps: 1840.95,
            magnification: "2250%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "224",
          enemyName: "傾奇者アシュラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 27500,
            ap: 1111,
            dps: 606.0,
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
            actualHp: 302500,
            actualAp: 12221,
            actualDps: 6666.0,
            magnification: "1100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "225",
          enemyName: "バトルバルーンUFO",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAB5AAB0CwoxKSlyExEAAP5jNzF5NzNdR0FnUEBtTz9lVUxqVUlyVkRpYlqqSUEjdsNIdJ2IY2ODaFSGaVN6bmxjfJWNejm5YFOcclyFe28rjuwxlNmFgH1viJmYe3S/eGUkrPMzpPmWkWCGkpZzmLQpsf5andmZkI52na2im4rAnG2rp3WFrdWlpazAtDWEu+gC/v/MvzvOwiiyscq7taV4zvSDyvXGwMiny/Dk2Cas4fzQ2dr19QXv7vbLGtsiAAAAQHRSTlMAVAZD//cBpPy+M1PRFZD6/sLS38Cp/vwO//9ilrn83Yv/DWE6teouyf7+5/6G3P6jtAHdJ+/+Rn/91VSf8wT7KjAkDwAAA1ZJREFUWIXtl113ojAQhl0/auQrKBIaKEEU0QAS+0EUW/D//6sd7Pa2S+rF3ux7jud4wTxMJpN3wmDwrczk8fsH/ibrNbkPoLnmXfHDoEzuIKy1KYqd1Xr9w/DN09xAth2Fm90PEC+7p/l8vvBYut/vw4064Rafeh4TVVmWe2XC+ql7fcYZ43VTXpqLIuFlM184hLCYxrG81uJ6vewUE4iiKPV4ByiapmyuzeZFBbALFwuoQExpTAtR7atr86S0hk0HiNhtCYUQedRc1AHR4s8SRMqi8hKqFOEBAFEUhoz4MWblAqsCIIM0WoQhxh7HeB5hnCsCdvs0N8I98THzfQa/SrEGAEideQTBvOi2gqkC1iF0cZYxnjHbjgsu6lIF0A4SiAcArwnC0Mu1qLNtf28b6q7BheQsY75NGBeCM1FXh6CvtYwmiBAMx0jWIFlQ6AdeC05XPQmjyQSBCLxayhsEUuCyiJ1hzyWMphMQmJFNqR/fBDvhTEc9AR1ihj5lf4pSrBDeybQKCU2ICZgCY4WselfwS8lrU0MLwyYwlsvmqDyg2vfjIYD3c0mi4Hh8a1UBg7ZtzSlkIHlgwn/l+Js0g3jZ9o7RlERZloXdIRiuT6eTwml46Ry0bQOPZVmZtLApcDwvH6ee4Q+788dp3b6/mTMo4uHt/c0iHsbp9aMnYPcMk+ScvB5XW1bk28PrYUk8gnF56Zn/uazq8jlgnOeFzCsptg4AfILLfoD1GQZJ9Rw40EKMV1I228j2M4a9VCGD6nJ2EXQy2IHMrYhQMCdZ9QMMTs8wkCvhj8cIMyKbArIncKR43hPwsDudgj1B4zGYYiZkjNDUcGx7qfcEDLrL1WwyHhOW1Y2Al09GphboKi1pWbPxGHd2UosYjDFQMgOQvsRQQjASSmHCCrlUPRCaQyYII0ptG0P1fBIoGkLgIHDFCYmpTxCKbayaQuAaN2eG05j5yM63qoDE1Qzu2+DsIqacr5SvvI+uHgkBFfCpXQi+sgK1eBhvBmGY2YjBaMYEq9+5TWtm6FZ3Rcn1qWEo9OAXwNWnmgV3RWzouhWoruAGsAzHwnjpOjN9pQ6AjXSXujZzVqa1dFc/+PB5NDVzODBNc2Bq2n2fLf/1X/9Yv7703UO/AekldP+xJSWmAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 1200,
            dps: 800.0,
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
            actualHp: 440000,
            actualAp: 13200,
            actualDps: 8800.0,
            magnification: "1100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "223",
          enemyName: "迅雷の黒騎馬兵",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 255,
            dps: 196.15,
            speed: 18,
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
            actualHp: 123500,
            actualAp: 4845,
            actualDps: 3726.85,
            magnification: "1900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "222",
          enemyName: "明王の剣士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 120,
            dps: 81.82,
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
            actualDps: 1840.95,
            magnification: "2250%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "227",
          enemyName: "サイバープリティキャット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 3333,
            dps: 2127.45,
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
            actualHp: 412500,
            actualAp: 24997,
            actualDps: 15955.87,
            magnification: "750%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "229",
          enemyName: "ボルケーノゴーレム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAwIMBwRHJxRXJRYxPgVXNBhbNhhHQhVUPBc/UBVtNyG1GwCbKQ++GwA2ZRj7BQB7QCfLKAHKKwDFLgLPKQB0UTBxVCfGMACDTC5fYS3dKwKJUDHROAG9RRjyLwJ+YjRXeirbQQCYXz1ghjltg0HzTQR7gEaecUPjWQx8hUjcYxCAlVu0fkiJlVV5nlL6dAa1iGDWhTPQjkhxxTOqnWrDlmT9pQnKqn/9viHzylj0zG/960b63pP/7sT//8KDbGTwAAAAQHRSTlMAbcyt/g7hJ8qHRP8+/xP+A/7NfJW1upxc02jn/zj+/Ob/HP8vrQnK//5740v/6f///r2WC9b+////Xf8O//8DmqJC3wAABFFJREFUWIW1llt3qjoUhe2uFIV6AUERws0oJtooaSvgRrv//786M3gezssZIzjGTq28uL7MtdZcIYPB31vzYrPZFPPnAZuF67qLTfE0oIj9NE39zfMa5nEEwqJAKs/J6AClG8e+t3kKUHhpyus08KHieQF1uohSrz+giONNkJYlL6PATaNF71IWi8iL3bLmaMMiTSOvLwH6oyCIyhIAPHjat44FtvWCiNcguGldp1HcT4ICpBGaUJcoRI1Ugn6AW+yiBWV5xarL+sqjuGcnprEXqfD7HYT2yr046EeAfwNet/efHyDu1yhY+P3KWHi+jxIAAMQPUoiiuCcAPub19adbqEPq9lMwVz2sr+0DcG/rvgNh7ERS1l38HXm0XH4ZvQDmSUohqrZtJWuapmqaS0/Am02YRGjDmGzVsxfACMPRcGiDoSCibfB92n3oA7bZZfwvgFUKUDWX7KRdhe/vQ346vA6BIJRQFEKI0+50umy/b1rbf+xOZ3FZAjCcOI7tMEqz3Sk/V5fDViP+tsWPZ+y06wBpor4nb+F+lsu9FmBw+97ucnawUAPE2g5KQdbmdp/tNVNAEaws2yoA9BMsyi6mucpW+o00VytziRIC4dgEkMza78amdjyMYK4kJQ1VdbCHjnCWrDr0cZK5diilUhJqUyko7FjJSx8FYyWeMCIboazYSKxKqwVKPj6vwwdAVBIAWVUSfwe9cMsaqEmABEIpQyy8XHXrU6cIZrgPrX3DOgD6JyC9gg4lRVoa+4e75TKbnSWtiNNJEEAIHA34nHSqaBhWRpz8zBqp6kgZCEKw7rHX6qNhveUqrmL2owxQwRglgKx04gfGeoaNUXbGlJE7BOIJRjLUA4ywMaovGHwIM6thoBQckmkaCR6a5VSA4SgzPAj4d/QEoJGj4WyWkzzP7Q6gHEVssgx1nWzN1Mrzc64m6QGAlrFmuCqCCs/PANjqYFVnq/OqP8uGsZrNVAK5Sh+tVImsDP1RNsY7vFPynHZOFDAytUe9jpIwtN5U4uosghtgQ00L/ocxgn41SrKhrKmY6HWUTOcD643keClhfpgq5jnPgulU9441f38vwhmzVQeVfxWBENf3da9588BfeE6uAGoYO0OwZO0ePU0R83f3WHJnMiFMnec0B4Jxsj76gTfVAky9iJcJXmm0GwKWMyk5T1J+PGplMQ3WuKAmTsKxPc4BzDLOxFpdNuWXzottvkgSXnIoQBaUquNIyqRs79e2OeoBogkvcUOG7O5QVeeZArCkOv7WIMw95Fu2LS64nHSNZCTBlVVOJrz+/UcDEBwhoL1XbcMwSoQ6a8+f8GuVTMTnTSeH6SLiV2wo5HE9HjnrdTh9d3nJkkTqCADg3U3qZjJJxOfWMMfj9Tg0A+/r8/NLpwIdwTuWIoHqy1ZdFx0qD9N5cbv90dp/oKwUfyUJqyo2fnl5AYAt+wyjWsXtY7Vbjn491uj19eX/f/sPa+e1QTNd/r8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 11111,
            dps: 913.23,
            speed: 3,
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
            actualHp: 1000000,
            actualAp: 44444,
            actualDps: 3652.92,
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
            "slow": {
                chance: 75,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    }
  ]
} as const;

export default e27011Data;

