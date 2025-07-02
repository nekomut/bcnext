// Stage 27003 Data
import type { StageData } from '../../app/stage/types';

export const e27003Data: StageData = {
  eventId: 27003,
  eventName: "天使軍 強襲！",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 3,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "天聖界 Lv.1",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 4000,
            actualDps: 502.1,
            magnification: "80%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 32000,
            actualDps: 6037.74,
            magnification: "80%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 128000,
            actualAp: 2000,
            actualDps: 377.36,
            magnification: "80%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 900,
            actualDps: 1173.9,
            magnification: "600%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 900,
            actualDps: 1173.9,
            magnification: "600%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 105000,
            actualAp: 1500,
            actualDps: 2045.46,
            magnification: "300%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "天聖界 Lv.2",
      baseHp: 300000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 5000,
            actualDps: 627.62,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 40000,
            actualDps: 7547.17,
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
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 2500,
            actualDps: 471.7,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 4750,
            actualAp: 475,
            actualDps: 347.61,
            magnification: "950%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 23750,
            actualAp: 1425,
            actualDps: 1858.67,
            magnification: "950%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 4750,
            actualAp: 475,
            actualDps: 347.61,
            magnification: "950%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 23750,
            actualAp: 1425,
            actualDps: 1858.67,
            magnification: "950%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 148750,
            actualAp: 2125,
            actualDps: 2897.74,
            magnification: "425%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "天聖界 Lv.3",
      baseHp: 350000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 6000,
            actualDps: 753.14,
            magnification: "120%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 48000,
            actualDps: 9056.6,
            magnification: "120%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 192000,
            actualAp: 3000,
            actualDps: 566.04,
            magnification: "120%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 6500,
            actualAp: 650,
            actualDps: 475.67,
            magnification: "1300%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 32500,
            actualAp: 1950,
            actualDps: 2543.45,
            magnification: "1300%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 6500,
            actualAp: 650,
            actualDps: 475.67,
            magnification: "1300%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 32500,
            actualAp: 1950,
            actualDps: 2543.45,
            magnification: "1300%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 192500,
            actualAp: 2750,
            actualDps: 3750.01,
            magnification: "550%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "天聖界 Lv.4",
      baseHp: 400000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 7000,
            actualDps: 878.67,
            magnification: "140%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 840000,
            actualAp: 56000,
            actualDps: 10566.04,
            magnification: "140%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 224000,
            actualAp: 3500,
            actualDps: 660.38,
            magnification: "140%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 8250,
            actualAp: 825,
            actualDps: 603.74,
            magnification: "1650%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 41250,
            actualAp: 2475,
            actualDps: 3228.22,
            magnification: "1650%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 8250,
            actualAp: 825,
            actualDps: 603.74,
            magnification: "1650%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 41250,
            actualAp: 2475,
            actualDps: 3228.22,
            magnification: "1650%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 236250,
            actualAp: 3375,
            actualDps: 4602.29,
            magnification: "675%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "天聖界 Lv.5",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 8000,
            actualDps: 1004.19,
            magnification: "160%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 960000,
            actualAp: 64000,
            actualDps: 12075.47,
            magnification: "160%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 256000,
            actualAp: 4000,
            actualDps: 754.72,
            magnification: "160%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 731.8,
            magnification: "2000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3000,
            actualDps: 3913.0,
            magnification: "2000%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 731.8,
            magnification: "2000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3000,
            actualDps: 3913.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 4000,
            actualDps: 5454.56,
            magnification: "800%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "天聖界 Lv.6",
      baseHp: 500000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 400500,
            actualAp: 8900,
            actualDps: 1117.16,
            magnification: "178%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1068000,
            actualAp: 71200,
            actualDps: 13433.96,
            magnification: "178%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 284800,
            actualAp: 4450,
            actualDps: 839.63,
            magnification: "178%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 11000,
            actualAp: 1100,
            actualDps: 804.98,
            magnification: "2200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 3300,
            actualDps: 4304.3,
            magnification: "2200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 11000,
            actualAp: 1100,
            actualDps: 804.98,
            magnification: "2200%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 3300,
            actualDps: 4304.3,
            magnification: "2200%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 308000,
            actualAp: 4400,
            actualDps: 6000.02,
            magnification: "880%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "天聖界 Lv.7",
      baseHp: 550000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 441000,
            actualAp: 9800,
            actualDps: 1230.14,
            magnification: "196%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1176000,
            actualAp: 78400,
            actualDps: 14792.45,
            magnification: "196%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 313600,
            actualAp: 4900,
            actualDps: 924.53,
            magnification: "196%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 878.16,
            magnification: "2400%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3600,
            actualDps: 4695.6,
            magnification: "2400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 878.16,
            magnification: "2400%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3600,
            actualDps: 4695.6,
            magnification: "2400%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 4800,
            actualDps: 6545.47,
            magnification: "960%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "天聖界 Lv.8",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 481500,
            actualAp: 10700,
            actualDps: 1343.11,
            magnification: "214%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1284000,
            actualAp: 85600,
            actualDps: 16150.94,
            magnification: "214%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 342400,
            actualAp: 5350,
            actualDps: 1009.44,
            magnification: "214%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 13000,
            actualAp: 1300,
            actualDps: 951.34,
            magnification: "2600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 3900,
            actualDps: 5086.9,
            magnification: "2600%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 13000,
            actualAp: 1300,
            actualDps: 951.34,
            magnification: "2600%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 3900,
            actualDps: 5086.9,
            magnification: "2600%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 364000,
            actualAp: 5200,
            actualDps: 7090.93,
            magnification: "1040%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "天聖界 Lv.9",
      baseHp: 650000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 522000,
            actualAp: 11600,
            actualDps: 1456.08,
            magnification: "232%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1392000,
            actualAp: 92800,
            actualDps: 17509.43,
            magnification: "232%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 371200,
            actualAp: 5800,
            actualDps: 1094.34,
            magnification: "232%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 14000,
            actualAp: 1400,
            actualDps: 1024.52,
            magnification: "2800%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 4200,
            actualDps: 5478.2,
            magnification: "2800%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 14000,
            actualAp: 1400,
            actualDps: 1024.52,
            magnification: "2800%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 4200,
            actualDps: 5478.2,
            magnification: "2800%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 392000,
            actualAp: 5600,
            actualDps: 7636.38,
            magnification: "1120%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "天聖界 Lv.10",
      baseHp: 700000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 562500,
            actualAp: 12500,
            actualDps: 1569.05,
            magnification: "250%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQECAgIFBQUHBgUODA1HEj4pNjkHTiY8Nw42OT5qMAgIVXl8HnpNWzsFhS6LRxIHcZ+7UQIHicI/g30CskOPbmcHo+ifjwXxcgMIvv6vipbFugfaprT2vs7/1uD//v4u8OnJAAAAIHRSTlMAI+5Nkf20/wH+/f7//v/////////+//////7/////AKnpveEAAAanSURBVFiFxVfreqM6EgRdI4lGFyww4nLe/y23GpxNZjOTM/PNj5X54tjQpVJ1dUvu/vnL0f3/Af5qCPl38frp/zSk7/uPD+r5zH9EoVc2FdP18gaR+Zmf5k/iQyhrkV0o4ZrXgMBvruHmbeY0r7NRaV0Df+Gf+fcAZCjqXkFY57UkwPAXfQSB3wFQ62o61SvVScydYvbzzIAyR/87GiimHZKai0nrPPucc5l7KTv5ZAD1fXQvlY8YNWvMjgUkH3NOq00g9cz6X9IoY+ZoitFrGwJL6ICXp/VaFSch9r8Oh0heyoB5g7XGR69UWclTjhCx2M7k+L2G8ImSBvHjKOxDM9ewTovLE1IZTOez9v8igaSCeABYO1oAIAtzCiXxv30Hgv57CfrAukG40YICwgxUDCH0b298FyZ45m8k6Nhx88wAljnMRTEf67R64y4gc/bfSmDKfIXPZU6ebEqBAUMYtNZv/7wBwPvvbGRK4fnXyYUSn9Uh9BXvvTYAUJDgGw1lYtuhalAuePCZYQJ8ssMAJ3r9xgCfu4E0GEp+SGJSYd8RgjNpGKZcfogDSiFH3XMxf7KRYXgUShDq9dW14CnGyXlKsB9BjOCiH2DEpwdAH/OnhhaY7lXtc1IYPVaQUnHPyNqN+ENTCsF7N/iLgUkBAPm/GsqLb2GTUG3H4QPMiu6D2adxfDzGRAQ/h+QHHZ9Ru3UtGU7+0BAImDJ7V/eTh5u59GC7erQ6Pca225GIShgG4bXGAhP76JMPJeaHuog9dryaYIQUbNupRiLAkNsnGzzbAM/OBA1/8KEMNYp6nvu+t72dToQVotlWmxb6OI9KtcLSIxyFBJfgv9RyH6O4Jj8bQEKyVtQGBofTBNxloQZPgRimn5PxXzuyiuJomP2otXIZXgD7uTsNXeqy1EaFE5VY3p/tCTrjSVCu9aSAtBahweA8Dizg5NwQ+jEjoCKN5Hb0o5Glj0+CAFXX5pHQeRa63gCAaO3cgTonbszZw4eRs/h5o0PTemZfSXgnYkT3DG5o43TFM+7ZLOZm/uGZVc4jAUCrHwhgoOd69E1PqPVh0OO4nzfCcU72qs+0Olggj48xG/Uhg+Eej4Fa1XzBp1EPbhwrAK7ENjsmTgEyiOp80oM44AUgW7sJwKYC/RckitODTuHBFJDW4wj4n9tLINyP3lmGeVWDObDyiwAaLcoNy4hB6yGkMI6e3XkcUwmjLWUive9aw/J7xTz+0qAewjV/EfAgH/kF/kMoBR05IDXn2eB+Cxv7KFyFQWCwk6AbV0PdBZ3V3wQQGfEQ3th2qM6A7XRvfloLWZTBDNAU9gaEk7DzMX+Ob8K/JMxZAyIHLuc53F21RVumZdm8DtAAbkI4GLTbBCQE4kGDOw0GNkMsI3CPSnWaJpSOczPlZVuiQxJg5+LA4DjNtT9g59934U5HUAJiVggYGwluom2J28LkqUxx2SA98jhjFa6xvU339sqh0Ccxjf0U9cABoB5QAP1n2rYtxwIGJeQlkHdYGFpdcrVx2bxMYBwHHyekAEzV+H8XEQhCbOeSr7YYaNmmilZUrnIKlbtWO24RFPoILsDwm9jBhMZRD5hpwaCrBzg7eSxM886e5knYWoU4bgq9PBC8IxgEcDmLNvoAwoDmEyxED3iHM0cMIVIR+DDaHXZ4XwOScGpxHheVxuGMQAMGmjmsGx0X1gWrXXJCEAr9kEK9i6D2/V5EFQ078QviYTVjxO2EA5x90RJI19UQD7SDVy9T3U4vAq7x5qlvCPy1LqBKshv5wwNbI3yCaWA60T51tP7OJNSnAXWMx+yLxHiB3OGPB24M3HqFzkrRp12hJ2VOwRJeC+dhPwDG9yWhwoHAREVTnfrc1FUPJQk3hL4eemn2A4DV8dJE0C5V/XI4Uk6iHgSH8ku/dHif/FL0wtbK1U7qL4cjKbralLoAOJ4GYT+iOf4auNUhe/1PT2eGpLmOpowCqZFb8VqHddhf+FZEE+t/dTSTSqL6FvwK8LBpFQfUrkiAFSiuU/Mxuy7bt8dzhR1s8XmrAm1WtEOIXYuGYodwinALTcFgnu7uBF8pTJNLkyfUXScrZ1YaWAv2Fm40VJaYUZVErv85QG+Ix4LKt32HearreiGQIFzQoaDBRJQn0S+WYRZvSS/HZh/3E/I+FOPqewOEacnbtuDEhXX8z9wSQ0HArW4L4WQtvg4iizP3CIIbD5wJP5Ihryfcxv1j25z9Wfw9cMthFnKOP33QwO9RMJB8wlOCXz8diq/rGQXC779h/wMDPraPnOBc1AAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 100000,
            actualDps: 18867.92,
            magnification: "250%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 6250,
            actualDps: 1179.25,
            magnification: "250%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 1097.7,
            magnification: "3000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 4500,
            actualDps: 5869.5,
            magnification: "3000%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 1097.7,
            magnification: "3000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 4500,
            actualDps: 5869.5,
            magnification: "3000%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 6000,
            actualDps: 8181.84,
            magnification: "1200%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 10,
      stageName: "天聖界 Lv.11",
      baseHp: 750000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 607500,
            actualAp: 13500,
            actualDps: 1694.57,
            magnification: "270%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1620000,
            actualAp: 108000,
            actualDps: 20377.36,
            magnification: "270%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 432000,
            actualAp: 6750,
            actualDps: 1273.59,
            magnification: "270%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 16000,
            actualAp: 1600,
            actualDps: 1170.88,
            magnification: "3200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 6260.8,
            magnification: "3200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 16000,
            actualAp: 1600,
            actualDps: 1170.88,
            magnification: "3200%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 6260.8,
            magnification: "3200%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 448000,
            actualAp: 6400,
            actualDps: 8727.3,
            magnification: "1280%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 11,
      stageName: "天聖界 Lv.12",
      baseHp: 800000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 652500,
            actualAp: 14500,
            actualDps: 1820.1,
            magnification: "290%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1740000,
            actualAp: 116000,
            actualDps: 21886.79,
            magnification: "290%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 464000,
            actualAp: 7250,
            actualDps: 1367.93,
            magnification: "290%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 17000,
            actualAp: 1700,
            actualDps: 1244.06,
            magnification: "3400%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 85000,
            actualAp: 5100,
            actualDps: 6652.1,
            magnification: "3400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 17000,
            actualAp: 1700,
            actualDps: 1244.06,
            magnification: "3400%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 85000,
            actualAp: 5100,
            actualDps: 6652.1,
            magnification: "3400%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 476000,
            actualAp: 6800,
            actualDps: 9272.75,
            magnification: "1360%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 12,
      stageName: "天聖界 Lv.13",
      baseHp: 850000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 697500,
            actualAp: 15500,
            actualDps: 1945.62,
            magnification: "310%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1860000,
            actualAp: 124000,
            actualDps: 23396.23,
            magnification: "310%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 496000,
            actualAp: 7750,
            actualDps: 1462.27,
            magnification: "310%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 18000,
            actualAp: 1800,
            actualDps: 1317.24,
            magnification: "3600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 5400,
            actualDps: 7043.4,
            magnification: "3600%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 18000,
            actualAp: 1800,
            actualDps: 1317.24,
            magnification: "3600%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 5400,
            actualDps: 7043.4,
            magnification: "3600%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 504000,
            actualAp: 7200,
            actualDps: 9818.21,
            magnification: "1440%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 13,
      stageName: "天聖界 Lv.14",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 742500,
            actualAp: 16500,
            actualDps: 2071.15,
            magnification: "330%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 1980000,
            actualAp: 132000,
            actualDps: 24905.66,
            magnification: "330%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 528000,
            actualAp: 8250,
            actualDps: 1556.61,
            magnification: "330%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 19000,
            actualAp: 1900,
            actualDps: 1390.42,
            magnification: "3800%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 95000,
            actualAp: 5700,
            actualDps: 7434.7,
            magnification: "3800%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 19000,
            actualAp: 1900,
            actualDps: 1390.42,
            magnification: "3800%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 95000,
            actualAp: 5700,
            actualDps: 7434.7,
            magnification: "3800%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 532000,
            actualAp: 7600,
            actualDps: 10363.66,
            magnification: "1520%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 14,
      stageName: "天聖界 Lv.15",
      baseHp: 950000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 787500,
            actualAp: 17500,
            actualDps: 2196.67,
            magnification: "350%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 2100000,
            actualAp: 140000,
            actualDps: 26415.1,
            magnification: "350%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 560000,
            actualAp: 8750,
            actualDps: 1650.95,
            magnification: "350%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 7826.0,
            magnification: "4000%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 7826.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 560000,
            actualAp: 8000,
            actualDps: 10909.12,
            magnification: "1600%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 15,
      stageName: "天聖界 Lv.16",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 855000,
            actualAp: 19000,
            actualDps: 2384.96,
            magnification: "380%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 2280000,
            actualAp: 152000,
            actualDps: 28679.25,
            magnification: "380%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 608000,
            actualAp: 9500,
            actualDps: 1792.46,
            magnification: "380%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 22000,
            actualAp: 2200,
            actualDps: 1609.96,
            magnification: "4400%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 6600,
            actualDps: 8608.6,
            magnification: "4400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 22000,
            actualAp: 2200,
            actualDps: 1609.96,
            magnification: "4400%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 6600,
            actualDps: 8608.6,
            magnification: "4400%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 588000,
            actualAp: 8400,
            actualDps: 11454.58,
            magnification: "1680%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 16,
      stageName: "天聖界 Lv.17",
      baseHp: 1050000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 922500,
            actualAp: 20500,
            actualDps: 2573.24,
            magnification: "410%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 2460000,
            actualAp: 164000,
            actualDps: 30943.4,
            magnification: "410%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 656000,
            actualAp: 10250,
            actualDps: 1933.97,
            magnification: "410%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 24000,
            actualAp: 2400,
            actualDps: 1756.32,
            magnification: "4800%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7200,
            actualDps: 9391.2,
            magnification: "4800%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 24000,
            actualAp: 2400,
            actualDps: 1756.32,
            magnification: "4800%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7200,
            actualDps: 9391.2,
            magnification: "4800%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 616000,
            actualAp: 8800,
            actualDps: 12000.03,
            magnification: "1760%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 17,
      stageName: "天聖界 Lv.18",
      baseHp: 1100000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 22000,
            actualDps: 2761.53,
            magnification: "440%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 2640000,
            actualAp: 176000,
            actualDps: 33207.55,
            magnification: "440%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 704000,
            actualAp: 11000,
            actualDps: 2075.48,
            magnification: "440%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 26000,
            actualAp: 2600,
            actualDps: 1902.68,
            magnification: "5200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 7800,
            actualDps: 10173.8,
            magnification: "5200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 26000,
            actualAp: 2600,
            actualDps: 1902.68,
            magnification: "5200%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 7800,
            actualDps: 10173.8,
            magnification: "5200%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 644000,
            actualAp: 9200,
            actualDps: 12545.49,
            magnification: "1840%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 18,
      stageName: "天聖界 Lv.19",
      baseHp: 1150000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 1057500,
            actualAp: 23500,
            actualDps: 2949.81,
            magnification: "470%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 2820000,
            actualAp: 188000,
            actualDps: 35471.7,
            magnification: "470%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAFBAQFBAQIBwYxBQcgFw4jFw4YHSBVCw1lBQwLOE04MCadCBN1ISRMPTPaCxpVUSZmTDEcY36FYhYLh7p2bGmUhAMJpeWbjo+0qQe3qKnGvr/l2AH97wH0ztL+/v6ClNJzAAAAIHRSTlMAL/xz/ZrT/P5N//3///7/rf7//////////////////3Pw0+0AAAZSSURBVFiFlVcNe7MsD32k1jARNCCIWO3//5fvCW23bt3u92rqutaSQz5OQvzvv7/l3HEIzGE6/2PRP9SJV9HnKSQzva1+Uob3pIZh0JR2Nu+qd+04al7XlFJIybzpQ6OUHsdx0BYxCMEO3TvaH23XDqPoj1WGYdTvASg1PlSHwfS9GdvTmw7oz81N731P7+lDOtVqDT+GlnoINe8CIAunc9cRQd+z71X3tg1wpAMRZj/HdVl6Q+pdK07Ye/XeQ9svs4+9eo8KJ/Kcsb9ffFrxz2fffyJ8TFP8P9RuaHYrDOiNMdrirecUHggnY2LJ/0ZQ2NR5ZAKitfzXzvm+xqFxZbter/lfLp3IQIl0JSMILW+kNVVCdse1ivs7ux02lCq88ymwAMidFghndVyPilHMHwj3UqhUvtuPT2LNoLvJHeW4Q5TfS+Ssb9q6NU4ZZ1yMxhBCIXdbl68lbcdWChD49wBixxHaLUfaIMwub1sRDPgAAEcRUcz4i78TtEE74EtC3LcSYcCRnYsAahPI9OFyWE3Ztmu+Xrc/ctm0aV8NVMlwPiAbIOCGSQoeurByvG7XQ0z4PYxq3QHAkW8GQIphfNF7QthMWk08ruUqAL+G8Uz7vicd42aUU8rBAsVgY9SXHSZMnKoBuH3N6sWJU2cIBlysPTJRQbxhQszbURzZtKO3nLOjG5VgAp1/bs5pvcCAi2boIfgZuohBQfKLtfuqTlPhs8H3imG+5eFEDGXR31ddfYdkqAoU3g18SI7LhGZBBAREgr7UJ6VCVd5rCDhCp5ToHGc2uYgTWpyLxXTSb0zMIMXXgdMQKlenG8QlWFgg9MHeWIc0AmLTFrYhO0pVgyenJvOZB9Uvy2x0WKsHg81HxhYFXIKULTPFyDAhDfyoS9l2uqehEX2I10NaYcDA2WRFEfzhDDqQcSWbooc1jNYs/ZPr9/Arv9wQUIohjDpu2DdGhCxmmMKuHLEUo0c32tm/9li60B1hJil8s4nvSEB9KyinAlKgKaG7mIXW9IOCjdovtNwRnJN6Q8yiQyKyxCCDTyhJ8qhu6W37/sOEjpG5WxRmliZCW5YaRvQqGZBOfCvGorQz2gPCrL5FwEjoqxOz5bJxbF3dEm6IAVzLuRi3kdBqMwFN+hmBau6cJJIZ9NLMqjqxCZmLUAAWRaWjgjNHNug5nL4QGjEgpQpgN9bbCCeA8EPIDI7BLhS3TC+BH4XUdHy5JOOI5oUtq2FL6ME/EQqhSYPTUhloj0MIa3dH6MwF1FkNOujiQhg06i7iPOpZ9MrtrZCyLU4HeHCwjF58We+jW3Vgh9HIvjN2aId4veqWnSeSREQp6Q3oNg7O1qqUdo+8uRsZurWWLzo/QhypVSPWjVHHmYKCao6wBKej13mAh1iDEIzaAeBWilwNwD2lJEWUoxgY9DwT5sRYU0C806yttoFhJYIxQH+/V6J8ZDl7KKL1bIcD9wJrTAUg3MUZQjsIWO2BwDm3dDGtOLCvNH26wDUC4l85WFtsBVJ56tMaPfppjOtKJNUuJHV7YvQtdLc7DZ2EYByR40MMcJ7Zz1KYtBCGNFIyaWFcAks8fsXAc1lD4q9q6NK+22F0WY7NHN29qJbeJe9jiL2P0ffcP+4vHj3ePZVjQ24NmCAiADbj5k8Azr3PHKHPQPkCWJaXbt6FtWX0v2L8/LUKhvdz9mhMUQa+JwD/ciKdEe2e49f20lkwaw6YdLXt0UfoGWB+aWmAeF5QPaA6U9wvZPkJfPll6Ot+AMzKfgfQzwv6VwCl5nle6mueMWArkkH/CWCsfVcWYPxTr6NFp2Q0xusmqOdvALisqmGtP/9yrHdmtM46XIYtaPEFoB8YdWQUGQb1CtA+lj12HB5f9Pdb9XoN4llhnruNpu3tk1zDlxe3eQ+eYYFq1YsJH5gurbVBntL4Ptu2eHq6A7aPoRedJLnp4+Pj1QenoIuzEKdhWC8XFAxh4bkVGB0El+UZThZNrwZAJnlGQTdOeM5BsZinZ8VpmvC9vwkOWt3+8RindBiHNWHORNVTd8KDD15ydeKflTTByzDySwybBuuIMThlOcEzilAjUp+CoS9D0F9zDIFaYDbPp2NTV2EQxiksQZAh5FXa1sjZ2robdNf8sKGRJzUJoqHuN33VqQ5yPtftP7X/B83WrcPwgyOFAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 752000,
            actualAp: 11750,
            actualDps: 2216.99,
            magnification: "470%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 28000,
            actualAp: 2800,
            actualDps: 2049.04,
            magnification: "5600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 8400,
            actualDps: 10956.4,
            magnification: "5600%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 28000,
            actualAp: 2800,
            actualDps: 2049.04,
            magnification: "5600%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 8400,
            actualDps: 10956.4,
            magnification: "5600%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 672000,
            actualAp: 9600,
            actualDps: 13090.94,
            magnification: "1920%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 19,
      stageName: "天聖界 Lv.20",
      baseHp: 1200000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "518",
          enemyName: "スーパーゼウス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 225000,
            ap: 5000,
            dps: 627.62,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3200,
            freq: 239,
            foreswing: 78,
            backswing: 43,
            tba: 81
          },
          stageStats: {
            actualHp: 1125000,
            actualAp: 25000,
            actualDps: 3138.1,
            magnification: "500%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "520",
          enemyName: "完璧ヘラクライスト",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 40000,
            dps: 7547.17,
            speed: 4,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 3000,
            freq: 159,
            foreswing: 116,
            backswing: 43,
            tba: 0
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 200000,
            actualDps: 37735.85,
            magnification: "500%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 360,
                omni_range: [-360, 360]
            }
          }
        },
        {
          enemyId: "519",
          enemyName: "シャーマンカーン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 2500,
            dps: 471.7,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3100,
            freq: 159,
            foreswing: 70,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 12500,
            actualDps: 2358.5,
            magnification: "500%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 800]
            },
            "knockback": {
                chance: 100
            }
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
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 2195.4,
            magnification: "6000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 11739.0,
            magnification: "6000%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 2195.4,
            magnification: "6000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 11739.0,
            magnification: "6000%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 10000,
            actualDps: 13636.4,
            magnification: "2000%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e27003Data;

