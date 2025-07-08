// Stage 1170 Data
import type { StageData } from '../../app/stage/types';

export const e1170Data: StageData = {
  eventId: 1170,
  eventName: "夜だよ！大運動会",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 170,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "墓場からの招待状",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 12,
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
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "425",
          enemyName: "ダッシュ死太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1224.49,
            speed: 25,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 147,
            foreswing: 44,
            backswing: 27,
            tba: 52
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 1224.49,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 700]
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 1200,
            actualDps: 1161.3,
            magnification: "600%",
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
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 1200,
            actualDps: 1161.3,
            magnification: "600%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 1200,
            actualDps: 1161.3,
            magnification: "600%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEDAAADAAADAQAEAQEEAQAEAQAEAQAFAQEFAQEHAgEHAwAJAwAKAwAKAwEKAwEMBAEPBQAPBgERBQAVBgAXBwAhCwAnDQApDAApDQArDgEsDwAuDwA6EwA9FAA/FQBHGABJGABKGAFPGgBSHQBXHQBhIABhIQBiIQBuJQBvJQB4KQCDLACOMACRMQGZMwCiNwCzPAG+QADMRQDZSQDkTQDuUAD3UwH/VADUXjutAAAAQHRSTlMABQocKxcRJDlAzzFPVuNFX2hx2IF5pP6StIjDqrrSZczw/tyr1fvo/8Hhlf/w0f//+P/+/ub+/v7/////////IzJmTQAABOZJREFUWIWdl+l6okoQhoOKS9Qoifs2BCZCciA0y0Dv3P9dTTUaI44oJ/0jT0T7pbrqq6UfHu6tRqvb0e7+6sb+wWa9GDV+DujM/NRfD9s/BvS3mWShaeg/tmCTSsHi3bRZe0ujMxqMWl+nbi9Ckec8sSd1CY3B7O3jbWN024XvG5OQy1yK1H6ueYr+NsQMx852NdABoU19nue55MluWCsW2tAh6o009c3VSNe08QfL1eLhrFMLMPqk6vdS8sw3J/324K34nOeZ2a11hOZ/5LAhlyx1tuMRxLH4SD9GtRSp/fojjoRc0NBerENxBAzqSXr0yb4A4LvUefJ48T+rC+j8xlKeECK1rIMTmDOulxKNszOADSKy0oLH/WnNjOi/k/zbhJy4SEhFClc1Afoi5CUTPAZAKeNZs54TtJGZnh0iJ14igMNjc9zTayHaz3bK5bcJsYtZhpC3t9eLXq1jNKc7PyX0CJE0cD0XZYSSxF8btYzQh4ut+REmmMlCT0lMeOFIGr9N66VEuzUyFkswpEB8C4Pjj0nNvNYaemsw2frkTFaKldXM66Mh3dUHy0sAHm5atQGA6L4flPxtBnGM/1HmdaOoByAkzkRBEWRfr7Q8aLCa05d9YQHPAi/hKhCZO3/s1dgNxXk47Bl24BUWYGs+tzLwJ93P50/ju9v13nRj2vZ6FxIPKwVkAJirrCLW3Ho17uxv9xamE2OM05iwIBZKjR4AXAgIc63gHkA3TD/japsUkIyBiqMkgevGXNVajO8AmlM7YWdRK86gosAPOSqJc9MHbeMtO68HPI5YXhIjtoe39o/N7LwaQCqhhOe1AY2hmYjS+yCEQXKSsxSCp/agGtDahOXXFQQP0SOUxihwX0bVBhgOlpeAXCjC0YHICmK72omdTXg8gDzPH0ECIByKC5zHn1Tt1wZvx84IEhBnDEGj6HAKESW8GtBe+QcPcBxFUUK+S2vOEpQxNaxEiHxWRqGzPHQhmXlBhDwvIqeIQpsMggSTdP/6/quyqPVMfPQVZkIwSOEzTQgSBwFC++WourSfponjW1nknndakDNjybKqomlt/dkpF8CcIY+Wn+R4WzGp6IMVDBOXKiJeelGV8bZ/ff/zzvetSJT3S4EiXn4Qb65WxPZ4l3BVPC50KGPES4+YM7nqw9YsZDlHdwEyXfeuNsfuOlLV5/IIBaBkgF8xZvSX4D8A8H8sCE4A+EokZvd6d9YnDvnndbmSfvHooE/OYGSuUJHWXYaEIvcy6jxIZM6oGnFgyAis6yFQC+42tmO/kgsAcUHcGWIqi1wU7xfVvb3RH44NMyv7QMQB2ITVHwgRF8ns1rVB0/SFX9KyxK5KT4awUlAqZLq83Ve1sY3Ief6hmBWeBIzMYg4j+3UdnwAD24vYV8hovHcTTLnAe6VnCjBiX5fR14KKRFkhRsFxCs3Mg4WQs4YxBa49RN4bmPtflwMAZCkmlFGcRdbL828QiSQJE/H2lglwvznpAPqqLKYzaKfOavVHqrtbzEiVlIvVmJwFodhMqeSYxRvjk1HOMi+Ko+2NEUuDvkahajFVujCMptCHKAlw9j5+z4IsQZ5loV3lvUNrdoez18JvQeC5MNLsPddCyPK8l9nL3nL3czXnPE16reunaHSfV7Pl+vHx8UWtp/IqnsF36+ViOvzW81+i5pL/7tImxQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "0",
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
            actualHp: 40000,
            actualAp: 4000,
            actualDps: 2105.26,
            magnification: "100%",
            count: "4",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
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
            actualHp: 15000,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "100%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "２人０脚",
      baseHp: 250000,
      width: 6000,
      enemyLimit: 12,
      requiredCost: 180,
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
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "053",
          enemyName: "クロサワ監督",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAABAAEBAQEBAQEBAQEEAgIDAwMEBAQFBAQFBAQFBQUFBQUHBAQGBgYIBQUIBgYHBwcJCQkJCQkJCQkNCAgKCgoKCgonAQEsAQEPDw8eFhYaGhlMBgdZAQEcHBwdHR0hHR0fHx4gICAhICAiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYnJyeUAAAwMDAxMTE2NjY2NjY6OjpJSUlhYWFtbW18fHx3iniDj4OZspq/v7/39/f////eEQSUAAAAQHRSTlMABtCZt9j/N/EeUPoWfFoPwv/nKkFn34qs/u3/Tv4o/x3NvvQN2Z4xWrHr/2d0Q4r//cXV5KYaRLiZ47L+6/8Avt53EQAAA/BJREFUWIXtVmtz4joMzYOEJE5InHcwvkDD2zxqoGW7d9v9///qyg4Q2AHCzP22U33opIl0LB0fSSi//6cp3wDfAN8A3wB/EUBlaqQqNy1aj25/uLbRannjrT+brXvbzRMIo80+VlR/MB24F4kMNmVZLspy1hivgudaXW53+/1241evovVgQ3G/jwsyuVNdbes9JvPemBKCcbcn3kTZuBwvsIkLjJHXmEHCTUwXDPdf+2bx4ivuakzgcIpNMJxGjQA9juEwsH5h4nA6feMEF6+vBREIOHAbAfwJNeVpwsJsRwVeUVAiXyyaSVTsyUIEVYbo8amKR0daG3Jw9OERAtNzMqbIJG0/EQ+m2tmiqgPXAJAEJslzAJBFTirWLhEAYPMsgOrNhxa+BMAiJTJ/hoMjRDsVxBFCjgwIKDIePA2gqBmCWMJIJYsKoIxrh/fD4f0hghsI4pnQNMZE1oJZzeL75+fnx+PmnJWiBtAVOcUTWrN4+Pr6+nwM4G5BBoSZMlzWQGndjYfPX7/+bRgPKy6yPlYAfxijw1k0iJMezKzR4efPg/34VqI9JE8Fi6RiAgylhoVQmmdZvt/l3uPm8ucgaXrBYt0jCMEX6t1PwJfzbMOEG5Y5VMJEYZC3tJbnJK38JXTuH25nk+V6umFCCbSWJBm3XdV3xcG+//Fj8Kj+FxiiCwYdRAXCsTtJ4J6rHnx8TB8REM0piACKp5RIDkQaZDHPRG2QxUhVHw9YNR5yTjlcvtBSxSMhtOwo6nT1tt29TJa9+whqNHvbcXEHDK5BSAFi4ToIG67Xmz0TT5TtV/cQ3GzHoXxInXAogIlKoK0Eo7Bd5JgUiHx1P4HlZAie4kwuqRBiIIyDMX4EgP0xeESBG/WWeSkRgASQMcSKNCQAIFBiNE9IdwJbAlwppZyTaswyLpVpYi3Pm+dTe0+rPmbkNFoZNWV/Ii+z4kYAf87NaxNrpl/04Sm1rF5jCWrC8VW87KwCF7Ix8sZFF7mio6/iKTn/gxq3hNqOnW5RXCLwI56gMZCr+p6gfdtvt9uZbl5tFspP8TBiMlU62bcB7ETvprGjXe5GE7PTssRWgDRbibNuKoeC+weO72hdhC1H7YSneFEKyOlEidXJkafGqWTCj1rd4J+69MgLUuFk2LDjri6B8lMKKIvDMOlYZth2O7mBTNQ5AyR5boFHYASgtGsAws+XYkQ5tkKEDCfXDXCvhe3rTmAi3dM1zfanxrWOyPkXA/I8uArLMLJER2aQZEKWfhQ7iRe0kGm1cg1ZQfBHvHlxKZYo07IsI7BMlCeeHkeK2/H0vBUEmmGkIZglDN02+Q180tQwtCBo5brn/AfXnaqT0JicDAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 200000,
            ap: 18763,
            dps: 1432.29,
            speed: 2,
            range: 700,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 393,
            foreswing: 104,
            backswing: 29,
            tba: 145
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 18763,
            actualDps: 1432.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "425",
          enemyName: "ダッシュ死太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1224.49,
            speed: 25,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 147,
            foreswing: 44,
            backswing: 27,
            tba: 52
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 1224.49,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 700]
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "425",
          enemyName: "ダッシュ死太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1224.49,
            speed: 25,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 147,
            foreswing: 44,
            backswing: 27,
            tba: 52
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 1224.49,
            magnification: "100%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 700]
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4684,
            actualDps: 8783.43,
            magnification: "150%",
            count: "5",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "5",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 2000,
            actualDps: 1621.62,
            magnification: "100%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "お供え物食い競争",
      baseHp: 350000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 210,
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
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEDAgMEAwEEAwQGAwEEBAMEBAMFBQQGBQQLBQMHBwcKBwULBgUNBgMKCQkQCAQoGBE4EwAiISBEFgBGGAAkJCRJGQElJSVgIAA0NDQ2NjZiKAw7Ojk9PDw9PT19KwKJLgBzPCJNSkhLS0uYNQRXV1ewPQFdWFbBQgDTRwBra2ptbGvqTgB4eHf/VACDg4KOjY2ZmZmkpKSxsbG7u7vHx8fPz8/W1tbg4ODp6enz8/P7+/v///////8RYI8RAAAAQHRSTlMABxQhPy6hrc/dW5P7TL5q7Xyou/3szY7+2+GyU/7y/8r/8v/+5f6v///+/+n///7///7///7//////////wD/TwNUIQAABn9JREFUWIXdV2t3qjgULeDbay1WW2uHIoIMD0MkIYHwGP7/v5qToNW23tu77nybvVwikrOzc7LPid798x9x9z8g+CNo/Yn+Z5Gn8Pn94D8QGObTzhlofxzff9zFx/jxGwXabPaTEcbCT47H+Mn4NYE+WC1m+geZmrrTzB3EH5NN/xsF5i7YLOa9swzdMCbznqFps42Kdx6/UXDX2yRJtNuYHYNu3t+vVuP7ee8xOkqC1fy7JOqPMQyMFYM+mW5833FxdhivpYCj/9T7Jl4qOCqGuWaYKycKXMTLLHSiOIiSoz/8bgWQg6NCtDEXu8h3EStz5EaJbzmOE6xGs19G60Z/4McnhpXlu5iLPHWD5BhbQWSt18PeL2yg9c3F09Nq7XcEx2CNeE5D11oHcOPHlh8546k5+euv/i0WCH/aRXESWScFkLEwDX0QrygT30kCyw+sA2OH50smtM4md9rkcZfI9AVWciZIgiCGmyTqHBAkVpAEadU0JVmcGfS5OTfUdRN3gbHldB8g7p1KsSUBaPCKFlBh82QHfTYZDvqabm7OwmENnWUc5zpeJQXyQJuqbsui2PbfJQxHQ/MSD3B8EJM4a8uJPxLEse+VdZo1LCzI/OybaW86Gayuh0aW5YD/4jj+LCEBAWyZNoWX8sWZYGBOTz6/jIsjx/o0e0ftiTr1eNPwrNhestib776O/Tx5lwRUN2XZtG1Tl2cC2Efj8dZstxCFVdu0jcir9kLwXj6/gcTlbVuz7euB08WFYHZjBT9RsA55QV57+myxuJS1Nve/D1UAJztvW1MZ76rraWbw2/HBejSdf64kzfw9BfF6DQbZraZfSvHWLn4FVCOUVrSZfm1Js9/bBSitxH/6sgDAT33woRihpuPdozm50ZS1+e6jhMSXZ1ASuJfsxr7lJ9Z4sd/eaqrG4sM+xG7owiHoYuxfviKZmzgvabG/2ZV7T9F1fFbiIHFJlfmXr2rhRlZaVYdbJ5s+G63f05DA4Ib6Pq4a5pyXRKq6RI5X1OXhxsFiTPeUuGcGP+R5TiyLyPdYZjKB9owx9pY2vL8tep/TaCywaGrSNTBIVogAYffuwtJiJyT8BMYysp3pH05v/TmFGoUmIxMZWHCOVRKl4CyjyAoCC4u6lS1AcJoCwv3ff1+5QZschMgZTW1HdmRayaZbC5ZinNKMwgsxGV5SjNKMi7IsqzK/2kxjiHAIQ1nmxolL66auSo5DRFghqhpuBaEFz0hohzgllPJcCDhYLgpm+4xAGMxBfMgfoyTFKETYgxRABMGeLfkzxjn2gACY3l6vfuppJqmpOivawl6HKMxyIZMgEIapqO3ZKWaKH1ZBYGtLRA6zqxzqC1alpSKoPBvy1qjP0DQJaxqWZViQ7nHN8yqv2zrP9tdW0F+5SGs5QVtjXFOuwpsMFbD+tqY2zuVjgLBDleDcfjgRaPKoN7bgF5DX1HWNaZV2q6lTm6krXqKMdqIqmimmkpwV9O+hNI1twWlTM4KyEl6pmgRGF2rry5xiwrqvYJK2ripO0r3ZV0nov7wasAQB6665nCpkBcgFKXJ0W4k8Q8izPdJULAOvAoPgmZem9n6ruoKxTZ/1jqAVaQjm5TmpYfmkggMYDFAglKGQoqKimJd5dyBBOaCCv+pd/g5z40wAxB6kA45uxqqslIobQdK0qFPe5EywcyryvGxyRXD3zIrtpCNoM8K9jkBQXqKiUairuqlw3uR5xREv3kGeVRJmh4q9bqFEID0ZKVGoCCCoJigFEwLgglGljEGRrSoUhW/b5/7JA6yinpDb2PK0zmxFoHTyEFEF6c2Tt/KwUHXKXt9/pPVfDyQUQu5diXnh5cXJNI38GSLTUGFOz9tYoG6P+fPFycbM3ApYJAzliIa5OPmgqXEXVqH8nD1JoBJzTSCXUTRMebkgXl7hzolgQVpKCJQXuKuFlsliBODFdWPWnonIEZV9okB5Q0/Tia6lgZGwSLskNKyLpxQ9X59O/UcvXNr2FvCSNQI2sLOy6FDgjCHeNbnqhM5GZwWaifE43E56vZ65h8Fhxq6RhR50Y28v8ebBTeidjAyxRm82mZvDt7fRw/geMHqwpZjlD4ll6C1D+LwkcF2Ox+PRaGzj5RK/DM3JTG0k/B25Hz88PPy4IEx/2Pb5sy1fcAWS8/OlfMFsA/XzuFMwN83pdDAYDqWGl5eRmuodow7y2XA4GAym06k5n8x6UsG/cnQW3InnQYcAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1600,
            actualDps: 1548.4,
            magnification: "800%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "15.0-30.0s",
            delayFrames: "450-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 591.84,
            magnification: "1200%",
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 1600,
            actualDps: 2181.8,
            magnification: "400%",
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
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 591.84,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEDAgMEAwEEAwQGAwEEBAMEBAMFBQQGBQQLBQMHBwcKBwULBgUNBgMKCQkQCAQoGBE4EwAiISBEFgBGGAAkJCRJGQElJSVgIAA0NDQ2NjZiKAw7Ojk9PDw9PT19KwKJLgBzPCJNSkhLS0uYNQRXV1ewPQFdWFbBQgDTRwBra2ptbGvqTgB4eHf/VACDg4KOjY2ZmZmkpKSxsbG7u7vHx8fPz8/W1tbg4ODp6enz8/P7+/v///////8RYI8RAAAAQHRSTlMABxQhPy6hrc/dW5P7TL5q7Xyou/3szY7+2+GyU/7y/8r/8v/+5f6v///+/+n///7///7///7//////////wD/TwNUIQAABn9JREFUWIXdV2t3qjgULeDbay1WW2uHIoIMD0MkIYHwGP7/v5qToNW23tu77nybvVwikrOzc7LPid798x9x9z8g+CNo/Yn+Z5Gn8Pn94D8QGObTzhlofxzff9zFx/jxGwXabPaTEcbCT47H+Mn4NYE+WC1m+geZmrrTzB3EH5NN/xsF5i7YLOa9swzdMCbznqFps42Kdx6/UXDX2yRJtNuYHYNu3t+vVuP7ee8xOkqC1fy7JOqPMQyMFYM+mW5833FxdhivpYCj/9T7Jl4qOCqGuWaYKycKXMTLLHSiOIiSoz/8bgWQg6NCtDEXu8h3EStz5EaJbzmOE6xGs19G60Z/4McnhpXlu5iLPHWD5BhbQWSt18PeL2yg9c3F09Nq7XcEx2CNeE5D11oHcOPHlh8546k5+euv/i0WCH/aRXESWScFkLEwDX0QrygT30kCyw+sA2OH50smtM4md9rkcZfI9AVWciZIgiCGmyTqHBAkVpAEadU0JVmcGfS5OTfUdRN3gbHldB8g7p1KsSUBaPCKFlBh82QHfTYZDvqabm7OwmENnWUc5zpeJQXyQJuqbsui2PbfJQxHQ/MSD3B8EJM4a8uJPxLEse+VdZo1LCzI/OybaW86Gayuh0aW5YD/4jj+LCEBAWyZNoWX8sWZYGBOTz6/jIsjx/o0e0ftiTr1eNPwrNhestib776O/Tx5lwRUN2XZtG1Tl2cC2Efj8dZstxCFVdu0jcir9kLwXj6/gcTlbVuz7euB08WFYHZjBT9RsA55QV57+myxuJS1Nve/D1UAJztvW1MZ76rraWbw2/HBejSdf64kzfw9BfF6DQbZraZfSvHWLn4FVCOUVrSZfm1Js9/bBSitxH/6sgDAT33woRihpuPdozm50ZS1+e6jhMSXZ1ASuJfsxr7lJ9Z4sd/eaqrG4sM+xG7owiHoYuxfviKZmzgvabG/2ZV7T9F1fFbiIHFJlfmXr2rhRlZaVYdbJ5s+G63f05DA4Ib6Pq4a5pyXRKq6RI5X1OXhxsFiTPeUuGcGP+R5TiyLyPdYZjKB9owx9pY2vL8tep/TaCywaGrSNTBIVogAYffuwtJiJyT8BMYysp3pH05v/TmFGoUmIxMZWHCOVRKl4CyjyAoCC4u6lS1AcJoCwv3ff1+5QZschMgZTW1HdmRayaZbC5ZinNKMwgsxGV5SjNKMi7IsqzK/2kxjiHAIQ1nmxolL66auSo5DRFghqhpuBaEFz0hohzgllPJcCDhYLgpm+4xAGMxBfMgfoyTFKETYgxRABMGeLfkzxjn2gACY3l6vfuppJqmpOivawl6HKMxyIZMgEIapqO3ZKWaKH1ZBYGtLRA6zqxzqC1alpSKoPBvy1qjP0DQJaxqWZViQ7nHN8yqv2zrP9tdW0F+5SGs5QVtjXFOuwpsMFbD+tqY2zuVjgLBDleDcfjgRaPKoN7bgF5DX1HWNaZV2q6lTm6krXqKMdqIqmimmkpwV9O+hNI1twWlTM4KyEl6pmgRGF2rry5xiwrqvYJK2ripO0r3ZV0nov7wasAQB6665nCpkBcgFKXJ0W4k8Q8izPdJULAOvAoPgmZem9n6ruoKxTZ/1jqAVaQjm5TmpYfmkggMYDFAglKGQoqKimJd5dyBBOaCCv+pd/g5z40wAxB6kA45uxqqslIobQdK0qFPe5EywcyryvGxyRXD3zIrtpCNoM8K9jkBQXqKiUairuqlw3uR5xREv3kGeVRJmh4q9bqFEID0ZKVGoCCCoJigFEwLgglGljEGRrSoUhW/b5/7JA6yinpDb2PK0zmxFoHTyEFEF6c2Tt/KwUHXKXt9/pPVfDyQUQu5diXnh5cXJNI38GSLTUGFOz9tYoG6P+fPFycbM3ApYJAzliIa5OPmgqXEXVqH8nD1JoBJzTSCXUTRMebkgXl7hzolgQVpKCJQXuKuFlsliBODFdWPWnonIEZV9okB5Q0/Tia6lgZGwSLskNKyLpxQ9X59O/UcvXNr2FvCSNQI2sLOy6FDgjCHeNbnqhM5GZwWaifE43E56vZ65h8Fhxq6RhR50Y28v8ebBTeidjAyxRm82mZvDt7fRw/geMHqwpZjlD4ll6C1D+LwkcF2Ox+PRaGzj5RK/DM3JTG0k/B25Hz88PPy4IEx/2Pb5sy1fcAWS8/OlfMFsA/XzuFMwN83pdDAYDqWGl5eRmuodow7y2XA4GAym06k5n8x6UsG/cnQW3InnQYcAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1600,
            actualDps: 1548.4,
            magnification: "800%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 5400,
            actualDps: 3056.61,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
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
            actualHp: 150000,
            actualAp: 625,
            actualDps: 328.95,
            magnification: "250%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "坊主倒し",
      baseHp: 400000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 250,
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
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "050",
          enemyName: "ブラックブンブン",
          icon: "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",
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
            actualHp: 1555554,
            actualAp: 11994,
            actualDps: 11607.1,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
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
            actualHp: 175000,
            actualAp: 6497,
            actualDps: 8474.35,
            magnification: "100%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "50.0-50.0s",
            delayFrames: "1,500-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 5683,
            actualDps: 10656.57,
            magnification: "150%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
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
            actualHp: 22500,
            actualAp: 2700,
            actualDps: 1723.41,
            magnification: "150%",
            count: "10",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
          enemyId: "425",
          enemyName: "ダッシュ死太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1224.49,
            speed: 25,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 147,
            foreswing: 44,
            backswing: 27,
            tba: 52
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 9000,
            actualDps: 1836.73,
            magnification: "150%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 700]
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "朝が来たからまた明日",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 300,
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
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 2000,
            actualDps: 1935.5,
            magnification: "1000%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 10000,
            actualDps: 16666.66,
            magnification: "200%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 2160,
            actualDps: 887.76,
            magnification: "1800%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 2000,
            actualDps: 1935.5,
            magnification: "1000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-50.0s",
            delayFrames: "1,000-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 12857.14,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-50.0s",
            delayFrames: "1,500-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "425",
          enemyName: "ダッシュ死太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1224.49,
            speed: 25,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 147,
            foreswing: 44,
            backswing: 27,
            tba: 52
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12000,
            actualDps: 2448.98,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 700]
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 750000,
            ap: 15000,
            dps: 7500.0,
            speed: 4,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 15000,
            actualDps: 7500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        }]
    }
  ]
} as const;

export default e1170Data;

