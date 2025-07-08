// Stage 2076 Data
import type { StageData } from '../../app/stage/types';

export const e2076Data: StageData = {
  eventId: 2076,
  eventName: "ぐでぐでしてて忙しい",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 76,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "人生ニガい",
      baseHp: 6000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "10000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "50000",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "3",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "409",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 36000,
            dps: 4044.94,
            speed: 9,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 3000,
            freq: 267,
            foreswing: 92,
            backswing: 44,
            tba: 88
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 720,
            actualDps: 80.9,
            magnification: "2%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "自分に勝てない",
      baseHp: 15000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "75000",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 200,
            actualAp: 75,
            actualDps: 140.62,
            magnification: "250%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 50.0,
            magnification: "250%",
            count: "3",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 1250,
            actualAp: 125,
            actualDps: 91.47,
            magnification: "250%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
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
            actualHp: 6250,
            actualAp: 375,
            actualDps: 489.12,
            magnification: "250%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "409",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 36000,
            dps: 4044.94,
            speed: 9,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 3000,
            freq: 267,
            foreswing: 92,
            backswing: 44,
            tba: 88
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 5400,
            actualDps: 606.74,
            magnification: "15%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "大人になりたくない",
      baseHp: 70000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "100000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "150000",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1598,
            actualDps: 812.54,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1598,
            actualDps: 812.54,
            magnification: "200%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1598,
            actualDps: 812.54,
            magnification: "200%",
            count: "3",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1598,
            actualDps: 812.54,
            magnification: "200%",
            count: "2",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1598,
            actualDps: 812.54,
            magnification: "200%",
            count: "0",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "409",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 36000,
            dps: 4044.94,
            speed: 9,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 3000,
            freq: 267,
            foreswing: 92,
            backswing: 44,
            tba: 88
          },
          stageStats: {
            actualHp: 62500,
            actualAp: 9000,
            actualDps: 1011.24,
            magnification: "25%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "ホントムリだから",
      baseHp: 160000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "150000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "250000",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1000,
            actualDps: 909.09,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "352",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQEFBQUGBQUGBgYICAgKCgoLCwsNDAsODg4QDQ0UFBQYFRQXFxYnIiEvLy83Liw2Lyw0NDQ4ODhLSklOTEtNTUx9OyxSUlJdXFtwWkFeXl1jYmFpaGZsaWhvb2/LTT+Waj54cm2BfXfqVkSLgXSNjY2VjYWXkYWtkXemnoqmn5i3rJ7LvJjBvr3FxMLdzKDPz8/W0Mvr2Kfc3N3c3Nz14rDl5eb+567s7Oz+7sf4+Pj+/v7///9M3lsQAAAAQHRSTlMAFAjE0h53LYo8Z0pWtp32fJG31mb87P6U/6zC/9T7h6ji////zP//cJ3/5/7T//9r/v//rP/k//+I////U/8A+pC1SgAABBJJREFUWIXtltt2okgUhqUiIAeRgyJRQEmg6ZSVQiA0NCTO+7/V7CqgPcxas8bkblb+CyiV/dU+1cbJX1/U5BvwDfgGfAP+R4BBgoImXxLSVPlrhIkofZ0gfJGgaPymaZ9Nh6jCBclzR/k0AIlLL4qx86lsiKY9NZIsw3mdbsX77QX76fHxMca0O3U49+5Pg/7048cTfaanEwC6w/1BmABgiB5A9bsBKgc85gAocYdnd2dBdlgM6/J0qlOS+s/OnT4g3YEcPvp+mq7XPi6z5+l9aRCd50EpJpRi34+tuyohuyPAZ4pJ0UR3NSQy/MGcZEXVtG3TZvc1g7bwuX3BbEFN1UR3ZAGJuuv7vX3bFrRqszUhkiIL/8ELJOsSyKX+Oub2TbguqiIrCltXJUlV/n1MIAUeEdFEDN6rgjvftllG0pi0TSBOkAB49RYhCMzp3jld6ntOjN7f21FFjEnWtqk67DETrvfc2IJgBn2rzfoxNJEPI4C50XBfMkfl24jzq3RqSR1pFs2X/JM013midDo6kJGiGTBhmlgKkmfzy5MhB92JzPEpN3uct7NMVZOtvDevsopCM7JsVgXxMXEsbze7qIVshBjHqxSnts6+Fqzj7+PPneekKcaYEAxdSCiJCcZpnDqb7e74sdPO8ZtRXne9amz2Lrz9+v3xkdRtVRVFxkWhHQv4WL1+gH6a6GxPutMfdVuWXKTufgEhKd8HEVLwO2tGBjha5xRqh9OlEl4dILz9ejukVW/fguc4a8C8aooX2N+xtbGKyK7Hzfk16H9ALAqaN2DdZFlTkDCOYwohZIfjcWdaQbQ1+3aUo3HvkrDhG4xkWdqSnEAGYXdQHPthHIZh8rKzNAQviw0wLE1AOh0d6PLy1NE/ADgP0iZ5fT2clQRhGDgzGfU/LzdRFHhGPgBwzK/Tyw4VFNXy9vsXrv3OswwTjLae1ve8IJn7yB0BNV/kwc0hgZMjhRTawJUUEfpz2HizVASE5qYgcg86nsCupCmJrH+MXmHfjfUdYlt6W+bI0o5MZPKpT+uSPQTTG+fRLWDiQaFq69ovZekFURi71hyX0IC0xryaXd2dDtchIEHsARDA1ShCorJ0WGWgwHGY9ne2tM+PgK/7fZJEzDs3SZK9t5SvIHpAwpTCGYFTsgKtQee/Ekhy4ZDA5jE7UHHNclVG0pWDsukMVYAu4CLG+ZRITpiSvKzLMs/hVucUx655M1LNsYwDJ7ooAlJX65XjhoNcd71aqbcjWUvrS+WXLy9kh+HacCA204bgDANWs9sSITMMV6FtWZbNF5eTjgNm89VqoRtsZTLArQdIiVzH1WVZ1txg7o5zRtBUaWZMF6vFdLpYLB746gFWc2MGM/9MUSRjCnpgmj7MH2ZQg78B44r37B/0lLYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1250,
            dps: 412.09,
            speed: 6,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 91,
            foreswing: 10,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 1250,
            actualDps: 412.09,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
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
            actualHp: 90000,
            actualAp: 4547,
            actualDps: 3327.07,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-50.0s",
            delayFrames: "1,500-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "409",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 36000,
            dps: 4044.94,
            speed: 9,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 3000,
            freq: 267,
            foreswing: 92,
            backswing: 44,
            tba: 88
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 54000,
            actualDps: 6067.41,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "来年から本気出す",
      baseHp: 280000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "200000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "350000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAQEDAgIDAwMDAwMDAwMDAwIGBgYHBwcHBwYIBwcJCAcJCQkODQsREA4ZGRghISEmIh4lIyEzLSY3My85NzRAPTtJPSZERERZSi5UU1JVVFJtWTVcXFxlZWV0dHSNc0GcfUSDgoKLi4qsikqSkpG2klGdnZzHn1HPp1isqqnUq1zVtnq7ubbHxcTNzcznzZ7W1dTe3dzn5uDv7er08+D19PP9+/T///86eksYAAAAQHRSTlMACBAaIis0P01WeOH4ZKvQw5eBi6K43PrpwNH+3/T/////7v/+///+///////////////+////////////////mNod5wAABbVJREFUWIWVV4l2qkoQDIobCoIbKrIpi+A4iHfgsQT8/796PYi5rtFbxyRCrJrumu4e/Pp6B6bRZFm22Xj7wedstjeaLJbL5XTCt5h/p7fHy7W7//PnGOxcdcj/YxTNnrR0//z3H/ApDtv5uPkP9EZXmG8CoAMVXofgcNyro49jYDqTubE7rwzs7WZDr3bz7qd8frnZH2vsN+5uu3VdUNhMPguB4Ve74w8CQwOxg7sFrVnnI4HubHvcbyHrY5X9fneAPIIALlT+E35T2Bxdwz3UGRgGTed8tRl/UAwMPw+22rbmH7eGoRjBYVvdcKUPBNqistMu60MK+2Cj7A4bZf+pAKdp2iY4XiHYBcfApZ64o/cCzam7393wr2B8YCKvvmJDKPK43fw9hkZHdF/yj662Xk25duOVBtPihb72KoBgv9fCPA3t5WTMt59oNDrQvAYYHgQ7Wjq3gF4yNCcvy/I7wt56yd13JtBXDkGKtjGqXTjUpXOgS29pIxw0Mylr5GQ9ujGDaY2WXpwTTXa3u90+qAogCAL4OexAcUN7w8DlX5D5dPQ3D6a7sKPvsnA0zdju9nugwlYCmXaCsan+QnWSH3qR+iZ2lpfuZnpLnNHbSFEU0zJ0SEJRNGMDMBRZg98A08++KfIsIci2o7LAk1qgtcD5NxXOCEngA2mSxBEJAQQQhRiHJEnTLPvOI+w7tmU5YVqeSrI489nxGv5XvkQBL7pw/p15pu2gMEqL8nQq4zV35k9UM/k+40KpcLkAMtAp37FjSj1ReoZX9ZDl17FjYxLF8TlyjDyA7/kIbqbAK2r1DJlJRT6VeeSr014938Z+mSHIi8I0LdtxgA7wIFlTh5g9hMEO7NsWoUsXGUHr5aT3U0n8GuoDrI0BSZrRyE918GAnCZHnOLbj+yhM8jQOfVtdSHz7aro2xysU58XpFcqi2pcoRNR/y1Ek9m42N3qT5drDJIaNyosa+c9u4ioZy7J1WfFIWuAF+9hHbZ6eoav1em3ZYALEDIC31BQH0TqI0zzFimx6JFo/HUv0FG93upLsYVyZBkWUZFmWIFJnV4ShOeWkxWoutp8I1H4IVl7eGoBMnNO9K7COLanRgGWeDYManVlY3ltILD+HN5GJMufdUGY4NbnfAyhZnNHKi7PEfifQEOziNgPix7QuKg98RX4nwIr+bQaZPrDyy3tzMHgn0BqGtwlkpmzXrlI79XfHe3tG7hxIwqS2AnLI/BcCDMu8ELjajAj5yBLYp2cCK/R+EyhSGEqO7iDf7E+F0WMhf3X6YutWoEziJLv4mYcIIdNOizzUka8+KeTuvL7bmoU/hplWdMrianzQziam4zkmKkosPj7sdVW86l4LQNkkUZSVCF+iOHtAYEfIrPWYwjxCC9og7I8AWJ6WhUWqUqzvnQsqHD6a0J6FmSOAMDvElwLwbb8oLHwZsTkgo0isJ8XUFJ0ytSUWBFC9Wk5iMBHrMBq9ajzQeanrcPA862VmrKSnZC01m0N0Xcpl7uuKrNBJS6eM5yki9/yhvUu7OFK59n0vwPzWMQ2/OiZSlXvRC42JnkLnqdO+dzcOTon+t7aS1csH1bZog0Liy155pxArfwXi1etZ1hHNMC1S/SGC6EOBr7Y0Uy1b9oryXiC8VGP5Swpf1WgfS8MnAg4caxgh2E97zv0+D5im4NwJFJ6sKPoFyluFiXN3xGXwNACndlohy8I3XxiYMZ2AtPovk/R0G1CyevOlh5+Tm2cMekRmsDacknEURcSePhkn12AFHWF0boDqZNR1tbIAjFDk5XT82Mp3aIuyrssDxZT7E2k8HnEcJyoIq30FO8POy4fkK/TUKJQHJlG4RoOp0JkhvOBnzrNZ9gD68dAeTmVnzvV6/BlTWZ50hUG/xzaZNxqdsSAOlAFAHjyiPxQF6fcv0GyPk4ShKA6Hw/4t4I44FaQR37mL4X/MMKprUO4JJQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 3196,
            actualDps: 1625.08,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 180,
            actualDps: 145.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-4.0s",
            delayFrames: "2-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 240,
            actualDps: 240.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-4.0s",
            delayFrames: "2-120f",
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "10",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-3.0s",
            delayFrames: "2-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
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
            count: "10",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-3.0s",
            delayFrames: "2-90f",
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
            actualHp: 120000,
            actualAp: 7495,
            actualDps: 14054.07,
            magnification: "150%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "10",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.1-3.0s",
            delayFrames: "2-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "3",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
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
            count: "10",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "0.1-3.0s",
            delayFrames: "2-90f",
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
            actualHp: 120000,
            actualAp: 7495,
            actualDps: 14054.07,
            magnification: "150%",
            count: "1",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "409",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 36000,
            dps: 4044.94,
            speed: 9,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 3000,
            freq: 267,
            foreswing: 92,
            backswing: 44,
            tba: 88
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 108000,
            actualDps: 12134.82,
            magnification: "300%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            }
          }
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 79,
            actualDps: 40.63,
            magnification: "10%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2076Data;

