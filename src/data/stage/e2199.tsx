// Stage 2199 Data
import type { StageData } from '../../app/stage/types';

export const e2199Data: StageData = {
  eventId: 2199,
  eventName: "救出！にゃんこ仮面ライダー",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 199,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "バイクを駆り戦う",
      baseHp: 1200,
      width: 3500,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1179",
          treasureName: "にゃんこ仮面ライダー(701)",
          probability: "5",
          amount: "1",
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
          treasureId: "4600",
          treasureName: "キャラクタードロップ(4600)",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "25000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "4",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "10.0-23.3s",
            delayFrames: "300-700f",
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
            count: "3",
            spawnTime: "9.3s",
            spawnTimeFrames: "280f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
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
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "90%",
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
            count: "4",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "赤いマフラーがトレードマーク",
      baseHp: 10000,
      width: 4600,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1179",
          treasureName: "にゃんこ仮面ライダー(701)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7700",
          treasureName: "キャラクタードロップ(7700)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4800",
          treasureName: "キャラクタードロップ(4800)",
          probability: "75000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "37500",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 300,
            actualAp: 30,
            actualDps: 30.0,
            magnification: "150%",
            count: "10",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "3.3-11.3s",
            delayFrames: "100-340f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "150%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
            actualHp: 300,
            actualAp: 30,
            actualDps: 30.0,
            magnification: "150%",
            count: "1",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "2.0-5.3s",
            delayFrames: "60-160f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 300,
            actualAp: 30,
            actualDps: 30.0,
            magnification: "150%",
            count: "20",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "0.7-7.3s",
            delayFrames: "20-220f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "150%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 375,
            actualDps: 312.5,
            magnification: "150%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 375,
            actualDps: 312.5,
            magnification: "150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "悲しみは仮面の下に",
      baseHp: 40000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1179",
          treasureName: "にゃんこ仮面ライダー(701)",
          probability: "15",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7100",
          treasureName: "キャラクタードロップ(7100)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6700",
          treasureName: "キャラクタードロップ(6700)",
          probability: "100000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "12.0-15.3s",
            delayFrames: "360-460f",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
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
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "18.7-22.0s",
            delayFrames: "560-660f",
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
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "65.0s",
            spawnTimeFrames: "1,950f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "75.0s",
            spawnTimeFrames: "2,250f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "人間の尊厳を守る",
      baseHp: 100000,
      width: 3500,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1179",
          treasureName: "にゃんこ仮面ライダー(701)",
          probability: "25",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6600",
          treasureName: "キャラクタードロップ(6600)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4900",
          treasureName: "キャラクタードロップ(4900)",
          probability: "200000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "100000",
          amount: "6",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "5",
            spawnTime: "10.7s",
            spawnTimeFrames: "320f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "3",
            spawnTime: "16.0s",
            spawnTimeFrames: "480f",
            delay: "6.7-23.3s",
            delayFrames: "200-700f",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "25",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.7-2.7s",
            delayFrames: "80-80f",
            baseHpRatio: "99%",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "40",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "99%",
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
            count: "20",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "018",
          enemyName: "カオル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEDAwMDAwMFBQUGBgYGBgYGBgYHBwcICAgJCQkNDQ0ODg4YGBgZGRkcHBwhISEiIiIpKSkpKSkqKiovLy8wMDA2NjY2NjY8PDxAQEBISEhKSkpNTU1YWFhcXFxeXl5gYGBjY2NpaWlxcXF4eHh+fn6GhoaIiIiSkpKUlJSXl5eioqKqqqqurq6xsbG5ubnDw8PLy8vV1dXb29vg4ODl5eXp6enw8PD29vb8/Pz///8HFoUmAAAAQHRSTlMAAwkRq1pwkk8ZQIKjIys3Z7NO/lyRbdz/xqkZgpXr/6zLvv/y48v+1f7f7P700////dP//v7//v//////////NISuswAABAhJREFUWIXtV2t7ojwQ9fK2W2qVbtde1kKx0orYuMDmBiEZ//+/2iBFUYLa/bCf3mm/wJM5njk5MwmdTmt0Lfvq9vbW7rUvac/tWfbYmS0/VqvVwrW7X8zuj8bufJmwHADWIOniwfoCRG/0MF0mXMK6CsiT6V3/3HTbWRCh1vuh0tX0PCmGzpLKtSGALZzRyTq69pQoMOXrkGThDI9DdO05a0vfQODZ+KgUwxk/kl5IIVau1Z7fu0+O/X4pBZ4MWwGu3/NT+ZoEnrZx6N3jdgI1UxCnZT9Hr0cIgNrujlzeGfO7t6sjCkCepVwoKJYw10ihP2FHiweVEkyo9qhajIwVvJyUEHKCuVwDdU1usN8NHjx8A6A0gPq4MzjyziBBm62zmcEMY9JcmDf6CgRN9YhIxk0KjkHD7KCtleAkDKgA7p4FADzdUwEEY6lGiAQ37KSRQbJXQ05opiDFiFHnvBJkRPce84IPIZnA9+0MIE+3Ew3iurKf1ZBQSjRpOqEEgDUNURjxTwhSHxC6H6R2dOSJ3GtnIEMic4IiVkAAq2mQUZylFIUokjIYtGpAkSA0l4kfFwi12a7SNNXNpDYNRQ274JZsYxw/+UEiaCj2S98LMWtOlZKBQjT0SeJ5cVYlHrqpVLdpxQfyCYAirLj3lFaLOTVwyKaNbbCXG9kinLAoVaG/rUDFGmEPQz/A6uGQQs/ZjMQMESlYEsS7TswxrhsSNg/54vqQgjUtuALxqYijwAuSrZ1UjGv5rJy9fNaQcTQXxWrkERqhwPN2LuRoJ2Qe0E0RatkA6Dob58vYC1kSYbI75mS8q0H4FHjMFJ02AKqhBNTzuZYA8gqh7kjQhsRR9OEaJutoUTIF7nthzIhfnTRQn2361gIqm9vN/E5/Wm1+Gjz90H9+1nTAZsAnUTAxMOiOV6paw2mMIq8xJ3VhGcZxFKG3CxMFl9QOQUVCpPaS9b+kSYwCP/AfjafLUN9QdhlKoLQOAMV+oFDLI2T2YT4hh+4qrzUgrY00IHKdx2FEy83hrhGg039YkN0UUDUPQyIgCYv6E5zExOSDUsmRvucZOlgbINNjlTGCvB86Hs0lFNEbuR+ZqYU/rQk8IW83R6+NvTvTdU0xXhkq/dl+Uyrr0BdGw1ktq9LY5OS1dWhC2LZHZpiJTQTclLLqKlgNTt+ch5OQN0iIz+7IXk9T6Ay/vcRiCwF7NZjmejP6F99fEOZZLlVxntRbOjGcbYboWleD7z9fX+fvb28hitl2SrKZsZWMGH3Lsob21dXl4OYxYHLzDUSmX/2KKpC6vevBZP7r9+9fc+eEjY7SeX5+tv7mO/D/+Oeh97yMfi3KN90zHGRdXA4Gg286bv7bxU3xQr+/vDhooz/jnNeLeV9L2QAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2000,
            dps: 219.78,
            speed: 1,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 4000,
            freq: 273,
            foreswing: 34,
            backswing: 10,
            tba: 120
          },
          stageStats: {
            actualHp: 399996,
            actualAp: 8000,
            actualDps: 879.12,
            magnification: "400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "SHOCKERの計画を阻止！",
      baseHp: 150000,
      width: 4400,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1179",
          treasureName: "にゃんこ仮面ライダー(701)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6100",
          treasureName: "キャラクタードロップ(6100)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4100",
          treasureName: "キャラクタードロップ(4100)",
          probability: "300000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "150000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsYGBgcHBwdHR0eHh4fHx8hISEiIiIpKSkqKiovLy8xMTEzMzM3Nzc4ODhBQUFHR0dPT09PT09ZWVlbW1tiYmJlZWVycnJ0dHR3d3d/f3+JiYmRkZGhoaGlpaWqqqq2trbExMTOzs7Y2Njg4ODl5eXr6+vw8PD29vb6+vr///////9GLDfdAAAAQHRSTlMABArdEX8cpf5WvNLn9TlJIy6RcGQ89HSbh0q37GH/0Hj0h/6V0P67qP7P/9Hk/9///+////7+/////////wD/E2hCfAAAAvRJREFUWIXtVFlz2jAYxA736UAghMMETA3CxJawTkuq//+/qmTSBtN22kxf+uB98Hg82v12V5JrX/8RtUqgEqgEKoFKoBKoBCqBSuB/FPgMnLo3HI6GXv1TrO+oT9f7w/nN4HR8ndadT9LdxTEhXCqttVKCXg6vj+5n+N7+InT+AS1Jsnv8OxeOt1g8HcgtvYCi5/WfTThOfX26XC6sTNY61yLLkvVvPDiu6zoGzfXL/pAIztn9eKk4jDE/T39Fd6evx+N+v3vdHS6IMiwQond8ijgXPEV0//OOOtN9QoQUjBKCuc4JYxDLcgM8DEMfEIlZsrjnN58Tdl2tFU6zXFPFuborAPoh8NtAKRK93PEfl/DHNElNdG007urLZUylpDHW5rm8i/8cy/I0Rm/45lUZNxzpDDGUMgDYqSwwTT4GalOAprG4pQv0dr5wnmqK0ziM/TZ6Kws8p8byu1Nlzg6D9J1qn1IkL0NvcUyRSDNNIUGz6Et5B3aUk+sxk0ZASRzbRrS+lkrg3O5acw9IapZRLMJgXhLwzhJft5xjE0GkEbSx6TWGRkuvWFZ/AQRibiyA3rBU4S7OYFoszpAkkkUhs5VFVwEK5ourgtv5AiHEAq86pbPcHG9gim1iLSFDDIbGAI0LG1rIOCaXpVcwHG+yOSXn5ejmNjneaDLurkBUtKghhiQCIhcxE9Ly4wjJXIatybAgOU3PK/2Z6s+bbWAAASoqw1GUQmJyp1pyjCAI7YZmYRCs5l7tJ7heY+X7IIoARBG2Z5cFAUAq5xFCJi2hBAHCMwFWq+225Tm30R232Zmb8X5Alc5YajITmbMQ2AYzjIkoroIMfT8I/UG/Pxh0x43JU8f8XG0ar9Hqraz5ILymV8pmSNttH9GbW2Td++0PDAb9h27rqV57HPcGs4H95GMz3/pljJHQfplFEBJ7r6l17xuUFXrdhunRHXVGnUlj3OpuTpveQ7+/MpgNvmNWYLsNt8a9wUOv1+22WiaEzeDUvgHfiBulYfASJAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 12000,
            actualDps: 845.07,
            magnification: "150%",
            count: "1",
            spawnTime: "1.0s",
            spawnTimeFrames: "30f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 18000,
            actualAp: 10000,
            actualDps: 7317.08,
            magnification: "200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 6000,
            actualDps: 3600.0,
            magnification: "200%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 18000,
            actualAp: 10000,
            actualDps: 7317.08,
            magnification: "200%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "40.0-53.3s",
            delayFrames: "1,200-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2199Data;

