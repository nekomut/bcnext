// Stage 14028 Data
import type { StageData } from '../../app/stage/types';

export const e14028Data: StageData = {
  eventId: 14028,
  eventName: "狂乱のウシ降臨",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
  mapId: 28,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "ヘッドシェイカー 超激ムズ",
      baseHp: 430000,
      width: 6000,
      enemyLimit: 40,
      requiredCost: 2,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1107",
          treasureName: "狂乱のウシネコ(95)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-10.7s",
            delayFrames: "300-320f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "3",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "3",
            spawnTime: "20.7s",
            spawnTimeFrames: "620f",
            delay: "3.3-10.7s",
            delayFrames: "100-320f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.0s",
            delayFrames: "100-120f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e14028Data;

