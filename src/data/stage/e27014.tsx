// Stage 27014 Data
import type { StageData } from '../../app/stage/types';

export const e27014Data: StageData = {
  eventId: 27014,
  eventName: "サーヴァント強襲！",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 14,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "聖杯戦争 1日目",
      baseHp: 90000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 4000,
            actualAp: 320,
            actualDps: 600.0,
            magnification: "400%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 800,
            actualAp: 80,
            actualDps: 80.0,
            magnification: "400%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 4000,
            actualDps: 1714.29,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 3000,
            actualDps: 532.54,
            magnification: "50%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 2777,
            actualDps: 457.83,
            magnification: "50%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "聖杯戦争 2日目",
      baseHp: 180000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 6890,
            actualAp: 551,
            actualDps: 1033.5,
            magnification: "689%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 1378,
            actualAp: 137,
            actualDps: 137.8,
            magnification: "689%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 27560,
            actualAp: 1722,
            actualDps: 1435.39,
            magnification: "689%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 8900,
            actualAp: 3560,
            actualDps: 2604.87,
            magnification: "178%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 17225,
            actualAp: 1033,
            actualDps: 1348.03,
            magnification: "689%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 312000,
            actualAp: 6240,
            actualDps: 2674.28,
            magnification: "78%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 156000,
            actualAp: 4680,
            actualDps: 830.77,
            magnification: "78%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 234000,
            actualAp: 4332,
            actualDps: 714.21,
            magnification: "78%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "聖杯戦争 3日目",
      baseHp: 270000,
      width: 4000,
      enemyLimit: 20,
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
            actualHp: 9780,
            actualAp: 782,
            actualDps: 1467.0,
            magnification: "978%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 1956,
            actualAp: 195,
            actualDps: 195.6,
            magnification: "978%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 39120,
            actualAp: 2445,
            actualDps: 2037.47,
            magnification: "978%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 12800,
            actualAp: 5120,
            actualDps: 3746.33,
            magnification: "256%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 24450,
            actualAp: 1467,
            actualDps: 1913.46,
            magnification: "978%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIEBAQEBAMGBgYKDRINERYUGCEfHh0nJiccLEAlKzchLT0tKykkLz8yO0g7Ojg/OTEiQFxDPzkfSWxCQUBAQko2U2dOUFBVUU1MVmNaVEtWVlZaVlFcV0xNUItiZHBuamZuamdza19zbmF9eXaDfXiLhHiOh3yLiIaTjYOUkpGknJCjnpeun4qnoZ6rpqO0rqm6sajFu7LMxb/hx5nW0Mvj18vl39vt6eb08fD7+Pf///+Wl1JjAAAAQHRSTlMABdSZufREHHYrWAw14cmVHfzxN1D/c/8o/v/ROP9d7n2o//5slMbj/63u/sbX/v/zyOT+8v79//7///////8A8krd+QAABKhJREFUWIXtV1tz8jgMbbYX2oZCKIQQqIFgAs7VFGO7zoX9//9qZaCFfpDAzL7sw57hoVNbx9KRLDl3f/9L3P1P8F8gqIZhmOZg/GHWbKlF1w8+A2/afzJqzrC6lWvNhciy7CuwGtUE1vwzqFycUvGlGeaV9sbHp9qMK1c9ysUX/D6tih3meC0300qFjGlESZRSuqwgsPyNWM9rFO5NOI0Ex97lEAYB58m4xr7ZfuciKxSdX/TvI+Esrs4A4LX1TnmeC3aJwJyvOQsGNebG03PrDZPo019c2Abh85VfX2Cvb++Tjoun/ddzCa6Grz1o20NsoyidjJp/Lo0/BY97NeWp0Wg5CDmIpQS1f2+F8AUP/mQ9w8tbx3XtIWcMT15PF3T2V35VbZ0QtDod2yZSCuaeutCNuVhXV98pQ7tjD1maUtJ6Obo/Tq7L9+PryHYIIRg9n7i/1tVzRb5vGJ7roJQQNJofKgGyx+h1+Q5oNDzXdnDEIqXiXt+E7IH7t8i3P763WLQ7HQQS0CxnUdg1+0sSrW6SD2D2Q8o4cRmkMRKZCOnUwxgvb5TvzpymlGe5igjjIk05X9IwImR0rfqO9ittn+d0GHEGNHS5jEh0VtMVMLpeGDFtn+EZIoJDKbkukNx4vjUNKaVMAQGbzWYoYoK6CI9ClkwbNxz/4q0YhXYupIzwTDOkNMITr9mL6eIqQaPnLUnKlPZfEjTbAaGItEF9a9y75nx/AclLI5FrMLQnGNodwoIb0gelAy2ccqm4jl8ivHfAhbak5MXGenr40+tzKwJz7b3iUjI8PBDMXIxotq7rn3dGcwSXv4OozHbeZylyhoQcCGaYuET6dQPW7CPbcRyb7O1zDvapwD8E6dAhSY0LVhBgR2PI9/ZDsM/ZD8GMElgKqq+hOV+RHYGDZaYUHTqY5kU6OxKkjlMXhDkOKdozQPuA4wkvtoocCZgYOg6rnuMNf8VBNtu2d3Fglpfbks1OCDIIEbG4MojmQkHIcLY2p6rcbrcZPSHghQ4RhVW3ESbNJi9zSTE0sJ35thBfRw2xKKlO0ttLBcGdMQgysCu4zLV5uS0k50d7prZce+e0q2X0udoekfNMHjVkX2ordyK/X5izB4J5IMojQZYXp1Ug5FarCBKPqmuhu5bFkaEQoAf+VkCq7U5FG3nVl3Icx6L8dqLgmabYExAFVVHSIcKkrqkZpuULeWAodCHknIIbBKeigH9LuKh5ltSNBcNfJwqcOGpRZJILwXL9d1nowLzasWgNuonIyhMxNeR3eqBQ1vWvMqjpOAk2Iv9FcOAri4wveh9XBqMxsLpJSBW0NKVj+fGmLNUmiKvfzCcwu37EEn+z2SgBnb0APYFPsHQ9sG6by1ZCl91mMO8lK28Tx5tNvIkDlvKaEviNsYDOYZiGMZ0351Yz8V/8j4G3ym5p7DsHFlLsG4exj8i80zMlzsRtLwOzT2h4nisjUCK9iaE5oXR0fu3h0wGI/frXlaHRZ4qNXhpnmGKCUr6uoDAaMJee7+/vHx5ClbHHv84xSd1OBF1ief/8+nT2DQYve7CFbY+P72E4ebyEd/hNlqPWw8P9859fgf8ASL5asz4MIFAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 424000,
            actualAp: 8480,
            actualDps: 3634.28,
            magnification: "106%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 212000,
            actualAp: 6360,
            actualDps: 1129.0,
            magnification: "106%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 318000,
            actualAp: 5888,
            actualDps: 970.6,
            magnification: "106%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "聖杯戦争 4日目",
      baseHp: 360000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "85",
          treasureName: "素材（赤）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 12670,
            actualAp: 1013,
            actualDps: 1900.5,
            magnification: "1267%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 2534,
            actualAp: 253,
            actualDps: 253.4,
            magnification: "1267%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAADAwMDAwMDAwMEBAQGBgYGBgYICAgICAgJCQkJCQkNDQ0ODg4ODg4PDw8PDw8aGhobGxscHBwdHR0eHh4kJCQnJycoKCgpKSkyMjI0NDQ6Ojo7Ozs+Pj5CQkJMTExMTExPT09aWlpdXV1jY2NnZ2dsbGxwcHB5eXl6enp9fX2GhoaKioqOjo6Xl5eZmZmhoaGqqqqysrK5ubnGxsbPz8/X19ff39/n5+fu7u739/f8/Pz////YqtfaAAAAQHRSTlMABg0UHCmkITOSPL9GfmtQtF7/4KZze4bDjZryqf7N47b7yuf/6tv/5v/x/+n1//b///b+//7+/v7/////////bqephgAABNNJREFUWIWlV2l3okAQDCheUZT1NmoADYggDOcw9///VzsQ9627q4m68/IheaFruovq6ubl5e7TaN//7LXTHHQb/xW/3E3U/4hvzINopijas2Wo0wAFw958MVCeileMA8a7lZN8GM8loJklL6wI5+vneFRnCWMgZsTpPxdvOEjQFPF00nwmXhk6JReccQ6d1VBTH6axaUIuGCqZYKQI7JXe1x5jonegQkBrU3AhBMNFsltMho+k0Q+Y4NmPH6ACEIJTL/Raj4iyAhDY95D4BGCx+/aQnjqOLIFzVgXXEOQ0eUjRbRN/Xl3dTgkpg3XnkfgXdZXzKliwMgkcxzH1B9WgDCJWv4DEng07nU77YSEYUZWBQNvec634okc1eXD9pKEos7QGyJdPJqCuivolpLMnAdpmLSGeTJ8E6Af0vwAaUga/AJ4xVWV4IHU8T3SlN9K1/oN5aCY891BkaObHZNR6zAway0TKsBbiyVgmsXVcqYrauFsRihFQDusaWNR1SBZGk+G0O+lqdwL0bCR4nLKSCA7GCcMQHIPE3bzp9zGhrWUj8jykPhQsdCtvrcwV5x/GXQDNVUWAgD4Jc577MEO84oOXh/ldHd2YR7WEkIvilPh5+gNUhJLUNu4iUQ5k8mlhHsoA8nAZIi5o7iw7d+XfXgbk7IF+mYUSQNoiR8G6f9f1am8dfd4vhKQwC7FXzQXkTO/zs/bMyRmXDkplFAuLLCRxSKUaZ4170m8MzROWo9CXBxSEgTT3SuCGMXg3dP37CrRlAKtRQEqEYOr7GfBRGGOYp+Btcdh+K8LOOjmz9znJYOjuC1RRwIkLcPCdhprrlIo/Dk33Lip8LBjcl8gdfe0J6jzC+E8AKQQXEBBjYFmpB46DZvN2S0v/wBD9BcBj3yuQ6/n7jVtg/31krm6OiLYJWfo3gIAecDM3JuEG4jCEfp7bt9Y1I2DUL/8GwF68sTKKPCv1AUaE8dK+Ht9YQ/n0PxkQN9vHtPBisPFhDqp3nFwH6DlEYPcKQCgbypP17/fu3pcap9F1CqcJl5z/U4K8W0JU9aPQL/yQoHBxqwJOcje+0FH1Q/1M8heXPiBCeotcd/bW5CqA3GZYtBi75Hc4Y7UlQXdjubXCcEHzfQyvkyj3KWz3jHFeO1cVXoYZl1tu7oHtKGY1KiPAp+X2FoDcAlR9B6V1yoWoBHur4OXe9YtotizOaRV7kDjTWwCZHOKqsY2yLA09L/aB1MUmJdDUKoLrg6zFrHe9qaWMkkpiSmfwOh5bx+jkIp5tQkZlD/YP5yajh5uLqh7JCVj/pjR7Q306XcQMWRZiybIhX1G97Mq12bm55k0TFlx8EigdG5HjGLDCrFxk6EBKURHZ01umpCwL6vQu/p4lJJrYqHTqma4MTcfZrvXOTVNrrEtkX9iFZpfJap6UztmElGano33lqh0Hp/Pf/5cJwO3QLk9zVZHndtyvo84TaF/wIxlIugMrtCaGPptPv10z5adRcbhwTIlHvcUujNPk45ik0fqrkaI2mr2Zkx4u+e07hGVyKlSjqZBT4stPvqlpO6fI1j+fkTtMs60NTiUmlDFGMg9RdOxKBrV2U7361bU8ngJ7ea5S7euDbqv1On5/3x3k2Y3fDx/v49fRqNVqdQf6H8P5Jy7SEZMKG/SwAAAAAElFTkSuQmCC",
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
            actualHp: 50680,
            actualAp: 3167,
            actualDps: 2639.54,
            magnification: "1267%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 16700,
            actualAp: 6680,
            actualDps: 4887.79,
            magnification: "334%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 31675,
            actualAp: 1900,
            actualDps: 2478.89,
            magnification: "1267%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 536000,
            actualAp: 10720,
            actualDps: 4594.28,
            magnification: "134%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 268000,
            actualAp: 8040,
            actualDps: 1427.22,
            magnification: "134%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 402000,
            actualAp: 7443,
            actualDps: 1226.98,
            magnification: "134%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "聖杯戦争 5日目",
      baseHp: 450000,
      width: 4000,
      enemyLimit: 20,
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
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 15560,
            actualAp: 1244,
            actualDps: 2334.0,
            magnification: "1556%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 3112,
            actualAp: 311,
            actualDps: 311.2,
            magnification: "1556%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 62240,
            actualAp: 3890,
            actualDps: 3241.61,
            magnification: "1556%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 20600,
            actualAp: 8240,
            actualDps: 6029.25,
            magnification: "412%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 38900,
            actualAp: 2334,
            actualDps: 3044.31,
            magnification: "1556%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 648000,
            actualAp: 12960,
            actualDps: 5554.28,
            magnification: "162%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 324000,
            actualAp: 9720,
            actualDps: 1725.45,
            magnification: "162%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 486000,
            actualAp: 8999,
            actualDps: 1483.37,
            magnification: "162%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "聖杯戦争 6日目",
      baseHp: 540000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 18450,
            actualAp: 1476,
            actualDps: 2767.5,
            magnification: "1845%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 3690,
            actualAp: 369,
            actualDps: 369.0,
            magnification: "1845%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 73800,
            actualAp: 4612,
            actualDps: 3843.69,
            magnification: "1845%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 24500,
            actualAp: 9800,
            actualDps: 7170.71,
            magnification: "490%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 46125,
            actualAp: 2767,
            actualDps: 3609.74,
            magnification: "1845%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 760000,
            actualAp: 15200,
            actualDps: 6514.28,
            magnification: "190%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 11400,
            actualDps: 2023.67,
            magnification: "190%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 570000,
            actualAp: 10554,
            actualDps: 1739.75,
            magnification: "190%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "聖杯戦争 7日目",
      baseHp: 630000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "86",
          treasureName: "素材（飛行）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 21340,
            actualAp: 1707,
            actualDps: 3201.0,
            magnification: "2134%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 4268,
            actualAp: 426,
            actualDps: 426.8,
            magnification: "2134%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAADAwMDAwMDAwMEBAQGBgYGBgYICAgICAgJCQkJCQkNDQ0ODg4ODg4PDw8PDw8aGhobGxscHBwdHR0eHh4kJCQnJycoKCgpKSkyMjI0NDQ6Ojo7Ozs+Pj5CQkJMTExMTExPT09aWlpdXV1jY2NnZ2dsbGxwcHB5eXl6enp9fX2GhoaKioqOjo6Xl5eZmZmhoaGqqqqysrK5ubnGxsbPz8/X19ff39/n5+fu7u739/f8/Pz////YqtfaAAAAQHRSTlMABg0UHCmkITOSPL9GfmtQtF7/4KZze4bDjZryqf7N47b7yuf/6tv/5v/x/+n1//b///b+//7+/v7/////////bqephgAABNNJREFUWIWlV2l3okAQDCheUZT1NmoADYggDOcw9///VzsQ9627q4m68/IheaFruovq6ubl5e7TaN//7LXTHHQb/xW/3E3U/4hvzINopijas2Wo0wAFw958MVCeileMA8a7lZN8GM8loJklL6wI5+vneFRnCWMgZsTpPxdvOEjQFPF00nwmXhk6JReccQ6d1VBTH6axaUIuGCqZYKQI7JXe1x5jonegQkBrU3AhBMNFsltMho+k0Q+Y4NmPH6ACEIJTL/Raj4iyAhDY95D4BGCx+/aQnjqOLIFzVgXXEOQ0eUjRbRN/Xl3dTgkpg3XnkfgXdZXzKliwMgkcxzH1B9WgDCJWv4DEng07nU77YSEYUZWBQNvec634okc1eXD9pKEos7QGyJdPJqCuivolpLMnAdpmLSGeTJ8E6Af0vwAaUga/AJ4xVWV4IHU8T3SlN9K1/oN5aCY891BkaObHZNR6zAway0TKsBbiyVgmsXVcqYrauFsRihFQDusaWNR1SBZGk+G0O+lqdwL0bCR4nLKSCA7GCcMQHIPE3bzp9zGhrWUj8jykPhQsdCtvrcwV5x/GXQDNVUWAgD4Jc577MEO84oOXh/ldHd2YR7WEkIvilPh5+gNUhJLUNu4iUQ5k8mlhHsoA8nAZIi5o7iw7d+XfXgbk7IF+mYUSQNoiR8G6f9f1am8dfd4vhKQwC7FXzQXkTO/zs/bMyRmXDkplFAuLLCRxSKUaZ4170m8MzROWo9CXBxSEgTT3SuCGMXg3dP37CrRlAKtRQEqEYOr7GfBRGGOYp+Btcdh+K8LOOjmz9znJYOjuC1RRwIkLcPCdhprrlIo/Dk33Lip8LBjcl8gdfe0J6jzC+E8AKQQXEBBjYFmpB46DZvN2S0v/wBD9BcBj3yuQ6/n7jVtg/31krm6OiLYJWfo3gIAecDM3JuEG4jCEfp7bt9Y1I2DUL/8GwF68sTKKPCv1AUaE8dK+Ht9YQ/n0PxkQN9vHtPBisPFhDqp3nFwH6DlEYPcKQCgbypP17/fu3pcap9F1CqcJl5z/U4K8W0JU9aPQL/yQoHBxqwJOcje+0FH1Q/1M8heXPiBCeotcd/bW5CqA3GZYtBi75Hc4Y7UlQXdjubXCcEHzfQyvkyj3KWz3jHFeO1cVXoYZl1tu7oHtKGY1KiPAp+X2FoDcAlR9B6V1yoWoBHur4OXe9YtotizOaRV7kDjTWwCZHOKqsY2yLA09L/aB1MUmJdDUKoLrg6zFrHe9qaWMkkpiSmfwOh5bx+jkIp5tQkZlD/YP5yajh5uLqh7JCVj/pjR7Q306XcQMWRZiybIhX1G97Mq12bm55k0TFlx8EigdG5HjGLDCrFxk6EBKURHZ01umpCwL6vQu/p4lJJrYqHTqma4MTcfZrvXOTVNrrEtkX9iFZpfJap6UztmElGano33lqh0Hp/Pf/5cJwO3QLk9zVZHndtyvo84TaF/wIxlIugMrtCaGPptPv10z5adRcbhwTIlHvcUujNPk45ik0fqrkaI2mr2Zkx4u+e07hGVyKlSjqZBT4stPvqlpO6fI1j+fkTtMs60NTiUmlDFGMg9RdOxKBrV2U7361bU8ngJ7ea5S7euDbqv1On5/3x3k2Y3fDx/v49fRqNVqdQf6H8P5Jy7SEZMKG/SwAAAAAElFTkSuQmCC",
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
            actualHp: 85360,
            actualAp: 5335,
            actualDps: 4445.76,
            magnification: "2134%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 28400,
            actualAp: 11360,
            actualDps: 8312.17,
            magnification: "568%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 53350,
            actualAp: 3201,
            actualDps: 4175.17,
            magnification: "2134%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 872000,
            actualAp: 17440,
            actualDps: 7474.28,
            magnification: "218%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 436000,
            actualAp: 13080,
            actualDps: 2321.9,
            magnification: "218%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIDAgIDAwMLAQQHBwcPDQ4SDAwgEBIfEhMhFBYhFBUbGRooFxknGhssHiA9FxonISIzISQwJCUrJykrKSpNGx8vKiw1JylVHiNXHiM0MC80MTI2MTNMKSxkHyZfJSs+OTdpJiw/Ozs9PT5zJi0/Pz9jLzRGQUF+LTROS0lMTExRS0uULTZaSj9OTk5WVlZnW1dlX1p1YFKDb2F7cmyNb1imjHecmJXDooa2trbLvbPZ19Xq6ukxEmnfAAAAQHRSTlMAsfPJOd4InHwUJ100Hg1NQGt8jaD9scaT6tXErjH+Uv7P3nXr/tj6Bf///+wc///BMAn+Y+3/lNj+uf/a////U4XR1AAABRxJREFUWIWNV4l2mkAUtY2hAoIgm6COqIxkhgRsSWhIavr/f9U7uAQjS+85Hjky78579y0zDgb/iV/ak/6/axugr97e/rw9PzS/lHvtpe2fj79///752fjW2Pb6pr0dPgR+N75d7lb9BB8f70Azge66Tz0E0u/De1m+l8/Nr0e71c8eimdh/v6qNL9VPOPpZzfF8rUUEUgtDlrWYACKX+0Eqxe48NqcBGDsaqiUDgojYHmRb1v5JdsUX80Ukiwb85CFee5OJloLg+oeSwEUT18oJHM+j5IkY0URxvF80kygucbpSVBcFewkSrIky5I8zXPGks2kWUjVvlTjwxWFZGewTrI8BUGeJlm0aMyl7NZ8e6gFIq9hz+BCSlOAgW5tNikxceu/fgaiighC2IU85ZSGLIE78/EtgW6bV8Gd5NTWIn6YMWzPCXXdCGRxk5Rjz7j+odLCjOFzhCQShEApUbezDXRo8ABq2V+7+uFpOYf9RrUdQrjwYDd+fUnTeNaYibFn3gwcFQ4sDEmzfCI0JDtjXxS52zKBzODrXFDgQLSCnNLIISlPyeP+9aXIzWb7gW7trsWRZlBwrUELXXXgQU75TFvt98sWAtTj9WwaR1BgJrSwfIdyUHBbHuht/SAsvN2qpqRIwUbkRgkcJwwdSoijtlsLGIH/OWGlxbn0R8I+TIuyCO2WmXLGJKDuOUS0UVSJotsVQV6UJfX6zgAjoLutpmuSvtzn8bTaT40Y7B3RTayXYGB4lO7cwHZfDuWx4owNA0JCKKE0WnUMviMUFysdxykPhS/6Q1+EaMckpAAP2eJm5NwyeKhcx0HEuY8cGGIeJQlDJwjmtXI7tb5AVz2C2gfBC7WksR1nggC2iIA6SORDL4U2Qu3znDrEMzfVBMgYBwHnNAzn2qCfQpp8AwUCIT4T4yhjYm/KOUSIp2IFKJarVcehKg/RgQCEEyMFzYxuwFAMGVuLWtaX5s7ft58UcEJBAxwZGPaH7yKElLIwNpWV5XquNemoCcmYYZpmcRgyQkIqwgnFVOEEJeV7rmlonZcKbSYasRroQEhECoU3UAUE8bTvRjKeZ9mFAALCc4xFMVPwDVUXPR2lnO0TsVrMc07xRE7fLG4cqrX4Z+IsO9mjjXhaic8IP3kQZ9PuAETtitzDGh+kP2cVlUhj9ZStO6bSYDCNk9P2wh6DCKgIaHoMIczirsEk2exoHzqVAyIFRw9ARSrOLFl0lIA8Z8I+mKrqNGCigKvAKwIuqEKMyshoJ6iOw9gWh/iDEXw6gJGCeRDOLRUL4razoSLABtOji7qHErg4AC7HViR9kXR6oM9xGp4qZeyn+TGCwLJ8+PJDFguSrKuU9EV0OelHIvdBsNm4QwlkaSr6V16zpLMQppdSlz2UfzDWNA0bKz6nXIx5ZcM2naWoXFI0FF6f5dICSn1haESs+Xy/gWQRToNz0cneicCM5y135q+QA0RtnTdDRqg/FK2y6UjBFcY+TR8vi3U3TzlKWF70HLCfwKWA1O49VppSiKi0XDVvAQmoX7tyTFBILTfdZmgB+ZQQMDDTOir4Fia6z625a6CW2+5XTdBd9IFV+wGS8Mf/TcCg+pPyXtQFV520bP3X0wDD5+m+PrpAUOR+4027EduizOsSQBOcjXn59tz3JxGQJFl5PRze98MaUAecl4dDue0JY6iOfny7uysOh0P6vQ5x7cBlkdx/+zFSO9phWNnf+48vj99vcX9/f3cHhuFp9T+TkM5RIIqFOQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 654000,
            actualAp: 12109,
            actualDps: 1996.14,
            magnification: "218%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "聖杯戦争 8日目",
      baseHp: 720000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "87",
          treasureName: "素材（黒）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 24230,
            actualAp: 1938,
            actualDps: 3634.5,
            magnification: "2423%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 4846,
            actualAp: 484,
            actualDps: 484.6,
            magnification: "2423%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 96920,
            actualAp: 6057,
            actualDps: 5047.84,
            magnification: "2423%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 32300,
            actualAp: 12920,
            actualDps: 9453.63,
            magnification: "646%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 60575,
            actualAp: 3634,
            actualDps: 4740.6,
            magnification: "2423%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 984000,
            actualAp: 19680,
            actualDps: 8434.28,
            magnification: "246%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 492000,
            actualAp: 14760,
            actualDps: 2620.12,
            magnification: "246%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 738000,
            actualAp: 13665,
            actualDps: 2252.52,
            magnification: "246%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "聖杯戦争 9日目",
      baseHp: 810000,
      width: 4000,
      enemyLimit: 20,
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
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 27120,
            actualAp: 2169,
            actualDps: 4068.0,
            magnification: "2712%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 5424,
            actualAp: 542,
            actualDps: 542.4,
            magnification: "2712%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 108480,
            actualAp: 6780,
            actualDps: 5649.91,
            magnification: "2712%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 36200,
            actualAp: 14480,
            actualDps: 10595.09,
            magnification: "724%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 67800,
            actualAp: 4068,
            actualDps: 5306.03,
            magnification: "2712%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIEBAQEBAMGBgYKDRINERYUGCEfHh0nJiccLEAlKzchLT0tKykkLz8yO0g7Ojg/OTEiQFxDPzkfSWxCQUBAQko2U2dOUFBVUU1MVmNaVEtWVlZaVlFcV0xNUItiZHBuamZuamdza19zbmF9eXaDfXiLhHiOh3yLiIaTjYOUkpGknJCjnpeun4qnoZ6rpqO0rqm6sajFu7LMxb/hx5nW0Mvj18vl39vt6eb08fD7+Pf///+Wl1JjAAAAQHRSTlMABdSZufREHHYrWAw14cmVHfzxN1D/c/8o/v/ROP9d7n2o//5slMbj/63u/sbX/v/zyOT+8v79//7///////8A8krd+QAABKhJREFUWIXtV1tz8jgMbbYX2oZCKIQQqIFgAs7VFGO7zoX9//9qZaCFfpDAzL7sw57hoVNbx9KRLDl3f/9L3P1P8F8gqIZhmOZg/GHWbKlF1w8+A2/afzJqzrC6lWvNhciy7CuwGtUE1vwzqFycUvGlGeaV9sbHp9qMK1c9ysUX/D6tih3meC0300qFjGlESZRSuqwgsPyNWM9rFO5NOI0Ex97lEAYB58m4xr7ZfuciKxSdX/TvI+Esrs4A4LX1TnmeC3aJwJyvOQsGNebG03PrDZPo019c2Abh85VfX2Cvb++Tjoun/ddzCa6Grz1o20NsoyidjJp/Lo0/BY97NeWp0Wg5CDmIpQS1f2+F8AUP/mQ9w8tbx3XtIWcMT15PF3T2V35VbZ0QtDod2yZSCuaeutCNuVhXV98pQ7tjD1maUtJ6Obo/Tq7L9+PryHYIIRg9n7i/1tVzRb5vGJ7roJQQNJofKgGyx+h1+Q5oNDzXdnDEIqXiXt+E7IH7t8i3P763WLQ7HQQS0CxnUdg1+0sSrW6SD2D2Q8o4cRmkMRKZCOnUwxgvb5TvzpymlGe5igjjIk05X9IwImR0rfqO9ittn+d0GHEGNHS5jEh0VtMVMLpeGDFtn+EZIoJDKbkukNx4vjUNKaVMAQGbzWYoYoK6CI9ClkwbNxz/4q0YhXYupIzwTDOkNMITr9mL6eIqQaPnLUnKlPZfEjTbAaGItEF9a9y75nx/AclLI5FrMLQnGNodwoIb0gelAy2ccqm4jl8ivHfAhbak5MXGenr40+tzKwJz7b3iUjI8PBDMXIxotq7rn3dGcwSXv4OozHbeZylyhoQcCGaYuET6dQPW7CPbcRyb7O1zDvapwD8E6dAhSY0LVhBgR2PI9/ZDsM/ZD8GMElgKqq+hOV+RHYGDZaYUHTqY5kU6OxKkjlMXhDkOKdozQPuA4wkvtoocCZgYOg6rnuMNf8VBNtu2d3Fglpfbks1OCDIIEbG4MojmQkHIcLY2p6rcbrcZPSHghQ4RhVW3ESbNJi9zSTE0sJ35thBfRw2xKKlO0ttLBcGdMQgysCu4zLV5uS0k50d7prZce+e0q2X0udoekfNMHjVkX2ordyK/X5izB4J5IMojQZYXp1Ug5FarCBKPqmuhu5bFkaEQoAf+VkCq7U5FG3nVl3Icx6L8dqLgmabYExAFVVHSIcKkrqkZpuULeWAodCHknIIbBKeigH9LuKh5ltSNBcNfJwqcOGpRZJILwXL9d1nowLzasWgNuonIyhMxNeR3eqBQ1vWvMqjpOAk2Iv9FcOAri4wveh9XBqMxsLpJSBW0NKVj+fGmLNUmiKvfzCcwu37EEn+z2SgBnb0APYFPsHQ9sG6by1ZCl91mMO8lK28Tx5tNvIkDlvKaEviNsYDOYZiGMZ0351Yz8V/8j4G3ym5p7DsHFlLsG4exj8i80zMlzsRtLwOzT2h4nisjUCK9iaE5oXR0fu3h0wGI/frXlaHRZ4qNXhpnmGKCUr6uoDAaMJee7+/vHx5ClbHHv84xSd1OBF1ief/8+nT2DQYve7CFbY+P72E4ebyEd/hNlqPWw8P9859fgf8ASL5asz4MIFAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1096000,
            actualAp: 21920,
            actualDps: 9394.28,
            magnification: "274%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 548000,
            actualAp: 16440,
            actualDps: 2918.35,
            magnification: "274%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIDAgIDAwMLAQQHBwcPDQ4SDAwgEBIfEhMhFBYhFBUbGRooFxknGhssHiA9FxonISIzISQwJCUrJykrKSpNGx8vKiw1JylVHiNXHiM0MC80MTI2MTNMKSxkHyZfJSs+OTdpJiw/Ozs9PT5zJi0/Pz9jLzRGQUF+LTROS0lMTExRS0uULTZaSj9OTk5WVlZnW1dlX1p1YFKDb2F7cmyNb1imjHecmJXDooa2trbLvbPZ19Xq6ukxEmnfAAAAQHRSTlMAsfPJOd4InHwUJ100Hg1NQGt8jaD9scaT6tXErjH+Uv7P3nXr/tj6Bf///+wc///BMAn+Y+3/lNj+uf/a////U4XR1AAABRxJREFUWIWNV4l2mkAUtY2hAoIgm6COqIxkhgRsSWhIavr/f9U7uAQjS+85Hjky78579y0zDgb/iV/ak/6/axugr97e/rw9PzS/lHvtpe2fj79///752fjW2Pb6pr0dPgR+N75d7lb9BB8f70Azge66Tz0E0u/De1m+l8/Nr0e71c8eimdh/v6qNL9VPOPpZzfF8rUUEUgtDlrWYACKX+0Eqxe48NqcBGDsaqiUDgojYHmRb1v5JdsUX80Ukiwb85CFee5OJloLg+oeSwEUT18oJHM+j5IkY0URxvF80kygucbpSVBcFewkSrIky5I8zXPGks2kWUjVvlTjwxWFZGewTrI8BUGeJlm0aMyl7NZ8e6gFIq9hz+BCSlOAgW5tNikxceu/fgaiighC2IU85ZSGLIE78/EtgW6bV8Gd5NTWIn6YMWzPCXXdCGRxk5Rjz7j+odLCjOFzhCQShEApUbezDXRo8ABq2V+7+uFpOYf9RrUdQrjwYDd+fUnTeNaYibFn3gwcFQ4sDEmzfCI0JDtjXxS52zKBzODrXFDgQLSCnNLIISlPyeP+9aXIzWb7gW7trsWRZlBwrUELXXXgQU75TFvt98sWAtTj9WwaR1BgJrSwfIdyUHBbHuht/SAsvN2qpqRIwUbkRgkcJwwdSoijtlsLGIH/OWGlxbn0R8I+TIuyCO2WmXLGJKDuOUS0UVSJotsVQV6UJfX6zgAjoLutpmuSvtzn8bTaT40Y7B3RTayXYGB4lO7cwHZfDuWx4owNA0JCKKE0WnUMviMUFysdxykPhS/6Q1+EaMckpAAP2eJm5NwyeKhcx0HEuY8cGGIeJQlDJwjmtXI7tb5AVz2C2gfBC7WksR1nggC2iIA6SORDL4U2Qu3znDrEMzfVBMgYBwHnNAzn2qCfQpp8AwUCIT4T4yhjYm/KOUSIp2IFKJarVcehKg/RgQCEEyMFzYxuwFAMGVuLWtaX5s7ft58UcEJBAxwZGPaH7yKElLIwNpWV5XquNemoCcmYYZpmcRgyQkIqwgnFVOEEJeV7rmlonZcKbSYasRroQEhECoU3UAUE8bTvRjKeZ9mFAALCc4xFMVPwDVUXPR2lnO0TsVrMc07xRE7fLG4cqrX4Z+IsO9mjjXhaic8IP3kQZ9PuAETtitzDGh+kP2cVlUhj9ZStO6bSYDCNk9P2wh6DCKgIaHoMIczirsEk2exoHzqVAyIFRw9ARSrOLFl0lIA8Z8I+mKrqNGCigKvAKwIuqEKMyshoJ6iOw9gWh/iDEXw6gJGCeRDOLRUL4razoSLABtOji7qHErg4AC7HViR9kXR6oM9xGp4qZeyn+TGCwLJ8+PJDFguSrKuU9EV0OelHIvdBsNm4QwlkaSr6V16zpLMQppdSlz2UfzDWNA0bKz6nXIx5ZcM2naWoXFI0FF6f5dICSn1haESs+Xy/gWQRToNz0cneicCM5y135q+QA0RtnTdDRqg/FK2y6UjBFcY+TR8vi3U3TzlKWF70HLCfwKWA1O49VppSiKi0XDVvAQmoX7tyTFBILTfdZmgB+ZQQMDDTOir4Fia6z625a6CW2+5XTdBd9IFV+wGS8Mf/TcCg+pPyXtQFV520bP3X0wDD5+m+PrpAUOR+4027EduizOsSQBOcjXn59tz3JxGQJFl5PRze98MaUAecl4dDue0JY6iOfny7uysOh0P6vQ5x7cBlkdx/+zFSO9phWNnf+48vj99vcX9/f3cHhuFp9T+TkM5RIIqFOQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 822000,
            actualAp: 15220,
            actualDps: 2508.91,
            magnification: "274%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "聖杯戦争 10日目",
      baseHp: 900000,
      width: 4000,
      enemyLimit: 20,
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
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 30000,
            actualAp: 2400,
            actualDps: 4500.0,
            magnification: "3000%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-10.0s",
            delayFrames: "160-300f",
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 600.0,
            magnification: "3000%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
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
            actualHp: 120000,
            actualAp: 7500,
            actualDps: 6249.9,
            magnification: "3000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 40000,
            actualAp: 16000,
            actualDps: 11707.28,
            magnification: "800%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 75000,
            actualAp: 4500,
            actualDps: 5869.5,
            magnification: "3000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 24000,
            actualDps: 10285.71,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 18000,
            actualDps: 3195.27,
            magnification: "300%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 16665,
            actualDps: 2746.98,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        }]
    },
    {
      stageId: 10,
      stageName: "聖杯戦争 11日目",
      baseHp: 945000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2250000,
            actualAp: 22500,
            actualDps: 6081.07,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 14400,
            actualDps: 13935.52,
            magnification: "1600%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIFBQUHBwcHBwcJCQkKCgoMDAwPDw8QEBAREREYGBgZGRkbGxsmJiZ/AAExMTE3Nzc9PT09PT1AQECIOgL/AACRQgVXV1dbW1tbW1tmZmahYQOnYRNycnKuZhataw+uahZ2dnaubgy3cBx/f3+6exzCeiO5hBS9hQS9gxGMjIzCiCfJljKbm5vMlTjTpUepqanlsDy5ubnlu2HpyWTJycnc3Nz146Dp6en78cPz8/P6+fn///////+0jcskAAAAQHRSTlMACh0sOf9SaNnkd7SbxIr+ArPV6f3DDQEe/tPo/wo9/oUnU+oXofxovxwHQf94jf6euP/v/s3p///4//7//wD/SEHX2QAABVxJREFUWIXtV213sjgQFUHogwirQm0ES5U2fbabmppNTYyk/v9/tRPAqrULPWe/7m175MW5mZncmUl7H/8Rvf8JPnrtmN0a3NUwl4s/OixOWCwWy/vV6uHp6el3g6enh+fV/XJxezvrsv5YLJ/Xm/ftdvv3JeDJ++bt9f7utn315fp9t99V331eAe4Bq9Xz86th3e12283qri2Y5Wan9fZttXxcLF4WH7PZrDebfSwWHy+Lx+Vf6+3+sN8+tPlw/64Ph93mFQKuKF4gIYsX+HwB++fNtoS3v+/aQniGCPR+VwXxtl6/Vliv3zbvEMFe6/32931rFiCHbybYfY1dhc+b7Wa96shir/diNvEV1oRFT9hs3tYQ2N1tpxwsg1sT+uPj458NHiEhIKYfaMlywiAIfc/pW91f/g79EeGcMZImodvNYVl923EN7L5Vf9ueCH3QWitB07Hfbze3/WA8n6fpdDodDQPfMRxWmMtSMAUkihdhK4M7yqiQSikpJac4nQSebfXsICUIEXUAyMK3mrVc+5rAR1IfKsCHcZoVY9eyvF8RERktzQsxcarEeEkaXCfEnRChKhx5FJu4/TFGQouMmYcae8Y+KIQYX0djucPJfD5HCMtDA83GdjBFEi4yUd2HFqSlUJp/Q9Cz+o7tQsii1EcGlXp2gCCFJcFKCZ4HnutNRClx4Njf7arlF7LKwMmFvluY+GWOc4QBRRpjnKF0noTONYUVYikFJ/zIIOeOlyqTVoFirkARpRI4Rhw2iySuc+WHEyTzSQRpazwoi2ESU5NWLXLRsJYcIQHvWDqZJL7d7/ftEw9o0ZsKraU0cegS54JnIBDw4nN7gAwbH2WOEJom4+HwZuSdPLGDmHKCcGlSoSkHMkaYOpxDl0bgJBOCZIzEmLO5++lCUJAMoZiVirLy0CzbrK2EPCW4xEwxwShjSioSHNPowS4rKRAC/5g+XC5MouzkiuaCRzGVkM6Y0COBnYg6SoKJ+GJfE5we6lLEg4grPIgIDj8dKI8F8dXchMDlxb0WFISLEGWJ02RgLK7N2gBFBz8ybXYBlKi+WbgTqvCaepr/yIGr3GgaVh44CZPfWlwYQ4cydV8CTPcR0DRpWrUaK6CYd7tLEOgkyw2yLEMxXMdBVd1uKrLOEEqaCcUh74xRlIEUEJdNCqyQyW4CWEMfJFgBMFGKTHNKU6/RUDeBJriEholRZtyHSks8Pwx9u9LQlBSoi0ChHGoLdl4AGBaFV82+eg8D3590EYgoIvEAVRWhKb3ojUDUKURNBoMsggIwNzLjxL/sSJ0ECg2ifDAYUKMlyGfqXHa0ftJBIKJBnAEBNs2Gkavu3k9alQiSBeMI/ojpd4w2Cv65B8qsbjhYxUYL99K+Z3XkQMY1QSxNTRA6d74SBO21IKKagJYaSonS+dchbYW0tR3wmiDKiQHjqQtD4eLk4hHdxsCM+xnJoIlSKCVJJ0mSjM9mQs89tsR/IYgiLKCIciNkoIGqhNFwflZw5qqNQOYZpTBaG8QogmaAhmdisLv2kWHChGwgoBfRYzv62TZUQ+3iHvRwrkfLp1UWS9mai0uI5CyGJosqJ/JytDS7o0+Xx9mjyLmgj6ONxoidjwjNeTXvhVDQkapTjEFZSl6Mz/VopGTsoG/GiHJxzBZFVRPRcFjIMSGQOlASHHiK+di/lKOb1hupFRkO46wCin+NhtPaNUlGwTSHwxIQoGF1Kr5UM/SUJloeQJ+vgUO7H7CyAgvsMa8Gi8L+Nyc1y89YjXzk3+D6Mht63jCuZgnoxh+h+nIafvdvgBOMRqMbwC/4PaK6P103T26Ggfe5g/8Ak5xPzbXLdjMAAAAASUVORK5CYII=",
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
            actualHp: 165000,
            actualAp: 5400,
            actualDps: 6000.0,
            magnification: "300%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 10000,
            actualDps: 1538.46,
            magnification: "200%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "200%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 11110,
            actualDps: 1831.32,
            magnification: "200%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 16000,
            actualDps: 6857.14,
            magnification: "200%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 11,
      stageName: "聖杯戦争 12日目",
      baseHp: 990000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "88",
          treasureName: "素材（硬）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2370000,
            actualAp: 23700,
            actualDps: 6405.4,
            magnification: "158%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 50670,
            actualAp: 15201,
            actualDps: 14710.68,
            magnification: "1689%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 18990,
            actualAp: 9284,
            actualDps: 7527.55,
            magnification: "422%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 171050,
            actualAp: 5598,
            actualDps: 6220.0,
            magnification: "311%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 506400,
            actualAp: 10550,
            actualDps: 1623.08,
            magnification: "211%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 422000,
            actualAp: 12660,
            actualDps: 2247.34,
            magnification: "211%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 633000,
            actualAp: 11721,
            actualDps: 1932.04,
            magnification: "211%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIEBAQEBAMGBgYKDRINERYUGCEfHh0nJiccLEAlKzchLT0tKykkLz8yO0g7Ojg/OTEiQFxDPzkfSWxCQUBAQko2U2dOUFBVUU1MVmNaVEtWVlZaVlFcV0xNUItiZHBuamZuamdza19zbmF9eXaDfXiLhHiOh3yLiIaTjYOUkpGknJCjnpeun4qnoZ6rpqO0rqm6sajFu7LMxb/hx5nW0Mvj18vl39vt6eb08fD7+Pf///+Wl1JjAAAAQHRSTlMABdSZufREHHYrWAw14cmVHfzxN1D/c/8o/v/ROP9d7n2o//5slMbj/63u/sbX/v/zyOT+8v79//7///////8A8krd+QAABKhJREFUWIXtV1tz8jgMbbYX2oZCKIQQqIFgAs7VFGO7zoX9//9qZaCFfpDAzL7sw57hoVNbx9KRLDl3f/9L3P1P8F8gqIZhmOZg/GHWbKlF1w8+A2/afzJqzrC6lWvNhciy7CuwGtUE1vwzqFycUvGlGeaV9sbHp9qMK1c9ysUX/D6tih3meC0300qFjGlESZRSuqwgsPyNWM9rFO5NOI0Ex97lEAYB58m4xr7ZfuciKxSdX/TvI+Esrs4A4LX1TnmeC3aJwJyvOQsGNebG03PrDZPo019c2Abh85VfX2Cvb++Tjoun/ddzCa6Grz1o20NsoyidjJp/Lo0/BY97NeWp0Wg5CDmIpQS1f2+F8AUP/mQ9w8tbx3XtIWcMT15PF3T2V35VbZ0QtDod2yZSCuaeutCNuVhXV98pQ7tjD1maUtJ6Obo/Tq7L9+PryHYIIRg9n7i/1tVzRb5vGJ7roJQQNJofKgGyx+h1+Q5oNDzXdnDEIqXiXt+E7IH7t8i3P763WLQ7HQQS0CxnUdg1+0sSrW6SD2D2Q8o4cRmkMRKZCOnUwxgvb5TvzpymlGe5igjjIk05X9IwImR0rfqO9ittn+d0GHEGNHS5jEh0VtMVMLpeGDFtn+EZIoJDKbkukNx4vjUNKaVMAQGbzWYoYoK6CI9ClkwbNxz/4q0YhXYupIzwTDOkNMITr9mL6eIqQaPnLUnKlPZfEjTbAaGItEF9a9y75nx/AclLI5FrMLQnGNodwoIb0gelAy2ccqm4jl8ivHfAhbak5MXGenr40+tzKwJz7b3iUjI8PBDMXIxotq7rn3dGcwSXv4OozHbeZylyhoQcCGaYuET6dQPW7CPbcRyb7O1zDvapwD8E6dAhSY0LVhBgR2PI9/ZDsM/ZD8GMElgKqq+hOV+RHYGDZaYUHTqY5kU6OxKkjlMXhDkOKdozQPuA4wkvtoocCZgYOg6rnuMNf8VBNtu2d3Fglpfbks1OCDIIEbG4MojmQkHIcLY2p6rcbrcZPSHghQ4RhVW3ESbNJi9zSTE0sJ35thBfRw2xKKlO0ttLBcGdMQgysCu4zLV5uS0k50d7prZce+e0q2X0udoekfNMHjVkX2ordyK/X5izB4J5IMojQZYXp1Ug5FarCBKPqmuhu5bFkaEQoAf+VkCq7U5FG3nVl3Icx6L8dqLgmabYExAFVVHSIcKkrqkZpuULeWAodCHknIIbBKeigH9LuKh5ltSNBcNfJwqcOGpRZJILwXL9d1nowLzasWgNuonIyhMxNeR3eqBQ1vWvMqjpOAk2Iv9FcOAri4wveh9XBqMxsLpJSBW0NKVj+fGmLNUmiKvfzCcwu37EEn+z2SgBnb0APYFPsHQ9sG6by1ZCl91mMO8lK28Tx5tNvIkDlvKaEviNsYDOYZiGMZ0351Yz8V/8j4G3ym5p7DsHFlLsG4exj8i80zMlzsRtLwOzT2h4nisjUCK9iaE5oXR0fu3h0wGI/frXlaHRZ4qNXhpnmGKCUr6uoDAaMJee7+/vHx5ClbHHv84xSd1OBF1ief/8+nT2DQYve7CFbY+P72E4ebyEd/hNlqPWw8P9859fgf8ASL5asz4MIFAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 844000,
            actualAp: 16880,
            actualDps: 7234.28,
            magnification: "211%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 12,
      stageName: "聖杯戦争 13日目",
      baseHp: 1035000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "89",
          treasureName: "素材（天）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2490000,
            actualAp: 24900,
            actualDps: 6729.72,
            magnification: "166%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 53340,
            actualAp: 16002,
            actualDps: 15485.85,
            magnification: "1778%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 19980,
            actualAp: 9768,
            actualDps: 7919.98,
            magnification: "444%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 177100,
            actualAp: 5796,
            actualDps: 6440.0,
            magnification: "322%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 532800,
            actualAp: 11100,
            actualDps: 1707.69,
            magnification: "222%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 444000,
            actualAp: 13320,
            actualDps: 2364.5,
            magnification: "222%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 666000,
            actualAp: 12332,
            actualDps: 2032.77,
            magnification: "222%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 888000,
            actualAp: 17760,
            actualDps: 7611.43,
            magnification: "222%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 13,
      stageName: "聖杯戦争 14日目",
      baseHp: 1080000,
      width: 6000,
      enemyLimit: 20,
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
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2610000,
            actualAp: 26100,
            actualDps: 7054.05,
            magnification: "174%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 56010,
            actualAp: 16803,
            actualDps: 16261.01,
            magnification: "1867%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 20970,
            actualAp: 10252,
            actualDps: 8312.41,
            magnification: "466%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 183150,
            actualAp: 5994,
            actualDps: 6660.0,
            magnification: "333%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 559200,
            actualAp: 11650,
            actualDps: 1792.31,
            magnification: "233%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 466000,
            actualAp: 13980,
            actualDps: 2481.66,
            magnification: "233%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 699000,
            actualAp: 12943,
            actualDps: 2133.49,
            magnification: "233%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 932000,
            actualAp: 18640,
            actualDps: 7988.57,
            magnification: "233%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 14,
      stageName: "聖杯戦争 15日目",
      baseHp: 1125000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 130,
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
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2730000,
            actualAp: 27300,
            actualDps: 7378.37,
            magnification: "182%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 58680,
            actualAp: 17604,
            actualDps: 17036.17,
            magnification: "1956%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 21960,
            actualAp: 10736,
            actualDps: 8704.85,
            magnification: "488%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 189200,
            actualAp: 6192,
            actualDps: 6880.0,
            magnification: "344%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 585600,
            actualAp: 12200,
            actualDps: 1876.92,
            magnification: "244%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 488000,
            actualAp: 14640,
            actualDps: 2598.82,
            magnification: "244%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 732000,
            actualAp: 13554,
            actualDps: 2234.21,
            magnification: "244%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 976000,
            actualAp: 19520,
            actualDps: 8365.71,
            magnification: "244%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 15,
      stageName: "聖杯戦争 16日目",
      baseHp: 1170000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "90",
          treasureName: "素材（未来）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2850000,
            actualAp: 28500,
            actualDps: 7702.69,
            magnification: "190%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 61350,
            actualAp: 18405,
            actualDps: 17811.34,
            magnification: "2045%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 22950,
            actualAp: 11220,
            actualDps: 9097.28,
            magnification: "510%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIFBQUHBwcHBwcJCQkKCgoMDAwPDw8QEBAREREYGBgZGRkbGxsmJiZ/AAExMTE3Nzc9PT09PT1AQECIOgL/AACRQgVXV1dbW1tbW1tmZmahYQOnYRNycnKuZhataw+uahZ2dnaubgy3cBx/f3+6exzCeiO5hBS9hQS9gxGMjIzCiCfJljKbm5vMlTjTpUepqanlsDy5ubnlu2HpyWTJycnc3Nz146Dp6en78cPz8/P6+fn///////+0jcskAAAAQHRSTlMACh0sOf9SaNnkd7SbxIr+ArPV6f3DDQEe/tPo/wo9/oUnU+oXofxovxwHQf94jf6euP/v/s3p///4//7//wD/SEHX2QAABVxJREFUWIXtV213sjgQFUHogwirQm0ES5U2fbabmppNTYyk/v9/tRPAqrULPWe/7m175MW5mZncmUl7H/8Rvf8JPnrtmN0a3NUwl4s/OixOWCwWy/vV6uHp6el3g6enh+fV/XJxezvrsv5YLJ/Xm/ftdvv3JeDJ++bt9f7utn315fp9t99V331eAe4Bq9Xz86th3e12283qri2Y5Wan9fZttXxcLF4WH7PZrDebfSwWHy+Lx+Vf6+3+sN8+tPlw/64Ph93mFQKuKF4gIYsX+HwB++fNtoS3v+/aQniGCPR+VwXxtl6/Vliv3zbvEMFe6/32931rFiCHbybYfY1dhc+b7Wa96shir/diNvEV1oRFT9hs3tYQ2N1tpxwsg1sT+uPj458NHiEhIKYfaMlywiAIfc/pW91f/g79EeGcMZImodvNYVl923EN7L5Vf9ueCH3QWitB07Hfbze3/WA8n6fpdDodDQPfMRxWmMtSMAUkihdhK4M7yqiQSikpJac4nQSebfXsICUIEXUAyMK3mrVc+5rAR1IfKsCHcZoVY9eyvF8RERktzQsxcarEeEkaXCfEnRChKhx5FJu4/TFGQouMmYcae8Y+KIQYX0djucPJfD5HCMtDA83GdjBFEi4yUd2HFqSlUJp/Q9Cz+o7tQsii1EcGlXp2gCCFJcFKCZ4HnutNRClx4Njf7arlF7LKwMmFvluY+GWOc4QBRRpjnKF0noTONYUVYikFJ/zIIOeOlyqTVoFirkARpRI4Rhw2iySuc+WHEyTzSQRpazwoi2ESU5NWLXLRsJYcIQHvWDqZJL7d7/ftEw9o0ZsKraU0cegS54JnIBDw4nN7gAwbH2WOEJom4+HwZuSdPLGDmHKCcGlSoSkHMkaYOpxDl0bgJBOCZIzEmLO5++lCUJAMoZiVirLy0CzbrK2EPCW4xEwxwShjSioSHNPowS4rKRAC/5g+XC5MouzkiuaCRzGVkM6Y0COBnYg6SoKJ+GJfE5we6lLEg4grPIgIDj8dKI8F8dXchMDlxb0WFISLEGWJ02RgLK7N2gBFBz8ybXYBlKi+WbgTqvCaepr/yIGr3GgaVh44CZPfWlwYQ4cydV8CTPcR0DRpWrUaK6CYd7tLEOgkyw2yLEMxXMdBVd1uKrLOEEqaCcUh74xRlIEUEJdNCqyQyW4CWEMfJFgBMFGKTHNKU6/RUDeBJriEholRZtyHSks8Pwx9u9LQlBSoi0ChHGoLdl4AGBaFV82+eg8D3590EYgoIvEAVRWhKb3ojUDUKURNBoMsggIwNzLjxL/sSJ0ECg2ifDAYUKMlyGfqXHa0ftJBIKJBnAEBNs2Gkavu3k9alQiSBeMI/ojpd4w2Cv65B8qsbjhYxUYL99K+Z3XkQMY1QSxNTRA6d74SBO21IKKagJYaSonS+dchbYW0tR3wmiDKiQHjqQtD4eLk4hHdxsCM+xnJoIlSKCVJJ0mSjM9mQs89tsR/IYgiLKCIciNkoIGqhNFwflZw5qqNQOYZpTBaG8QogmaAhmdisLv2kWHChGwgoBfRYzv62TZUQ+3iHvRwrkfLp1UWS9mai0uI5CyGJosqJ/JytDS7o0+Xx9mjyLmgj6ONxoidjwjNeTXvhVDQkapTjEFZSl6Mz/VopGTsoG/GiHJxzBZFVRPRcFjIMSGQOlASHHiK+di/lKOb1hupFRkO46wCin+NhtPaNUlGwTSHwxIQoGF1Kr5UM/SUJloeQJ+vgUO7H7CyAgvsMa8Gi8L+Nyc1y89YjXzk3+D6Mht63jCuZgnoxh+h+nIafvdvgBOMRqMbwC/4PaK6P103T26Ggfe5g/8Ak5xPzbXLdjMAAAAASUVORK5CYII=",
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
            actualHp: 195250,
            actualAp: 6390,
            actualDps: 7100.0,
            magnification: "355%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 612000,
            actualAp: 12750,
            actualDps: 1961.54,
            magnification: "255%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 510000,
            actualAp: 15300,
            actualDps: 2715.98,
            magnification: "255%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 765000,
            actualAp: 14165,
            actualDps: 2334.93,
            magnification: "255%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1020000,
            actualAp: 20400,
            actualDps: 8742.85,
            magnification: "255%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 16,
      stageName: "聖杯戦争 17日目",
      baseHp: 1215000,
      width: 6000,
      enemyLimit: 20,
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
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 2970000,
            actualAp: 29700,
            actualDps: 8027.02,
            magnification: "198%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 64020,
            actualAp: 19206,
            actualDps: 18586.5,
            magnification: "2134%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 23940,
            actualAp: 11704,
            actualDps: 9489.71,
            magnification: "532%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 201300,
            actualAp: 6588,
            actualDps: 7320.0,
            magnification: "366%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 638400,
            actualAp: 13300,
            actualDps: 2046.15,
            magnification: "266%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 532000,
            actualAp: 15960,
            actualDps: 2833.14,
            magnification: "266%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 798000,
            actualAp: 14776,
            actualDps: 2435.66,
            magnification: "266%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1064000,
            actualAp: 21280,
            actualDps: 9120.0,
            magnification: "266%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 17,
      stageName: "聖杯戦争 18日目",
      baseHp: 1260000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "91",
          treasureName: "素材（紫）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 3090000,
            actualAp: 30900,
            actualDps: 8351.34,
            magnification: "206%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 66690,
            actualAp: 20007,
            actualDps: 19361.66,
            magnification: "2223%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 24930,
            actualAp: 12188,
            actualDps: 9882.14,
            magnification: "554%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 207350,
            actualAp: 6786,
            actualDps: 7540.0,
            magnification: "377%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 664800,
            actualAp: 13850,
            actualDps: 2130.77,
            magnification: "277%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 554000,
            actualAp: 16620,
            actualDps: 2950.3,
            magnification: "277%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 831000,
            actualAp: 15387,
            actualDps: 2536.38,
            magnification: "277%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1108000,
            actualAp: 22160,
            actualDps: 9497.14,
            magnification: "277%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 18,
      stageName: "聖杯戦争 19日目",
      baseHp: 1305000,
      width: 6000,
      enemyLimit: 20,
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
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 3210000,
            actualAp: 32100,
            actualDps: 8675.67,
            magnification: "214%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 69360,
            actualAp: 20808,
            actualDps: 20136.83,
            magnification: "2312%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 25920,
            actualAp: 12672,
            actualDps: 10274.57,
            magnification: "576%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIFBQUHBwcHBwcJCQkKCgoMDAwPDw8QEBAREREYGBgZGRkbGxsmJiZ/AAExMTE3Nzc9PT09PT1AQECIOgL/AACRQgVXV1dbW1tbW1tmZmahYQOnYRNycnKuZhataw+uahZ2dnaubgy3cBx/f3+6exzCeiO5hBS9hQS9gxGMjIzCiCfJljKbm5vMlTjTpUepqanlsDy5ubnlu2HpyWTJycnc3Nz146Dp6en78cPz8/P6+fn///////+0jcskAAAAQHRSTlMACh0sOf9SaNnkd7SbxIr+ArPV6f3DDQEe/tPo/wo9/oUnU+oXofxovxwHQf94jf6euP/v/s3p///4//7//wD/SEHX2QAABVxJREFUWIXtV213sjgQFUHogwirQm0ES5U2fbabmppNTYyk/v9/tRPAqrULPWe/7m175MW5mZncmUl7H/8Rvf8JPnrtmN0a3NUwl4s/OixOWCwWy/vV6uHp6el3g6enh+fV/XJxezvrsv5YLJ/Xm/ftdvv3JeDJ++bt9f7utn315fp9t99V331eAe4Bq9Xz86th3e12283qri2Y5Wan9fZttXxcLF4WH7PZrDebfSwWHy+Lx+Vf6+3+sN8+tPlw/64Ph93mFQKuKF4gIYsX+HwB++fNtoS3v+/aQniGCPR+VwXxtl6/Vliv3zbvEMFe6/32931rFiCHbybYfY1dhc+b7Wa96shir/diNvEV1oRFT9hs3tYQ2N1tpxwsg1sT+uPj458NHiEhIKYfaMlywiAIfc/pW91f/g79EeGcMZImodvNYVl923EN7L5Vf9ueCH3QWitB07Hfbze3/WA8n6fpdDodDQPfMRxWmMtSMAUkihdhK4M7yqiQSikpJac4nQSebfXsICUIEXUAyMK3mrVc+5rAR1IfKsCHcZoVY9eyvF8RERktzQsxcarEeEkaXCfEnRChKhx5FJu4/TFGQouMmYcae8Y+KIQYX0djucPJfD5HCMtDA83GdjBFEi4yUd2HFqSlUJp/Q9Cz+o7tQsii1EcGlXp2gCCFJcFKCZ4HnutNRClx4Njf7arlF7LKwMmFvluY+GWOc4QBRRpjnKF0noTONYUVYikFJ/zIIOeOlyqTVoFirkARpRI4Rhw2iySuc+WHEyTzSQRpazwoi2ESU5NWLXLRsJYcIQHvWDqZJL7d7/ftEw9o0ZsKraU0cegS54JnIBDw4nN7gAwbH2WOEJom4+HwZuSdPLGDmHKCcGlSoSkHMkaYOpxDl0bgJBOCZIzEmLO5++lCUJAMoZiVirLy0CzbrK2EPCW4xEwxwShjSioSHNPowS4rKRAC/5g+XC5MouzkiuaCRzGVkM6Y0COBnYg6SoKJ+GJfE5we6lLEg4grPIgIDj8dKI8F8dXchMDlxb0WFISLEGWJ02RgLK7N2gBFBz8ybXYBlKi+WbgTqvCaepr/yIGr3GgaVh44CZPfWlwYQ4cydV8CTPcR0DRpWrUaK6CYd7tLEOgkyw2yLEMxXMdBVd1uKrLOEEqaCcUh74xRlIEUEJdNCqyQyW4CWEMfJFgBMFGKTHNKU6/RUDeBJriEholRZtyHSks8Pwx9u9LQlBSoi0ChHGoLdl4AGBaFV82+eg8D3590EYgoIvEAVRWhKb3ojUDUKURNBoMsggIwNzLjxL/sSJ0ECg2ifDAYUKMlyGfqXHa0ftJBIKJBnAEBNs2Gkavu3k9alQiSBeMI/ojpd4w2Cv65B8qsbjhYxUYL99K+Z3XkQMY1QSxNTRA6d74SBO21IKKagJYaSonS+dchbYW0tR3wmiDKiQHjqQtD4eLk4hHdxsCM+xnJoIlSKCVJJ0mSjM9mQs89tsR/IYgiLKCIciNkoIGqhNFwflZw5qqNQOYZpTBaG8QogmaAhmdisLv2kWHChGwgoBfRYzv62TZUQ+3iHvRwrkfLp1UWS9mai0uI5CyGJosqJ/JytDS7o0+Xx9mjyLmgj6ONxoidjwjNeTXvhVDQkapTjEFZSl6Mz/VopGTsoG/GiHJxzBZFVRPRcFjIMSGQOlASHHiK+di/lKOb1hupFRkO46wCin+NhtPaNUlGwTSHwxIQoGF1Kr5UM/SUJloeQJ+vgUO7H7CyAgvsMa8Gi8L+Nyc1y89YjXzk3+D6Mht63jCuZgnoxh+h+nIafvdvgBOMRqMbwC/4PaK6P103T26Ggfe5g/8Ak5xPzbXLdjMAAAAASUVORK5CYII=",
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
            actualHp: 213400,
            actualAp: 6984,
            actualDps: 7760.0,
            magnification: "388%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 691200,
            actualAp: 14400,
            actualDps: 2215.38,
            magnification: "288%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 576000,
            actualAp: 17280,
            actualDps: 3067.46,
            magnification: "288%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 864000,
            actualAp: 15998,
            actualDps: 2637.1,
            magnification: "288%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIEBAQEBAMGBgYKDRINERYUGCEfHh0nJiccLEAlKzchLT0tKykkLz8yO0g7Ojg/OTEiQFxDPzkfSWxCQUBAQko2U2dOUFBVUU1MVmNaVEtWVlZaVlFcV0xNUItiZHBuamZuamdza19zbmF9eXaDfXiLhHiOh3yLiIaTjYOUkpGknJCjnpeun4qnoZ6rpqO0rqm6sajFu7LMxb/hx5nW0Mvj18vl39vt6eb08fD7+Pf///+Wl1JjAAAAQHRSTlMABdSZufREHHYrWAw14cmVHfzxN1D/c/8o/v/ROP9d7n2o//5slMbj/63u/sbX/v/zyOT+8v79//7///////8A8krd+QAABKhJREFUWIXtV1tz8jgMbbYX2oZCKIQQqIFgAs7VFGO7zoX9//9qZaCFfpDAzL7sw57hoVNbx9KRLDl3f/9L3P1P8F8gqIZhmOZg/GHWbKlF1w8+A2/afzJqzrC6lWvNhciy7CuwGtUE1vwzqFycUvGlGeaV9sbHp9qMK1c9ysUX/D6tih3meC0300qFjGlESZRSuqwgsPyNWM9rFO5NOI0Ex97lEAYB58m4xr7ZfuciKxSdX/TvI+Esrs4A4LX1TnmeC3aJwJyvOQsGNebG03PrDZPo019c2Abh85VfX2Cvb++Tjoun/ddzCa6Grz1o20NsoyidjJp/Lo0/BY97NeWp0Wg5CDmIpQS1f2+F8AUP/mQ9w8tbx3XtIWcMT15PF3T2V35VbZ0QtDod2yZSCuaeutCNuVhXV98pQ7tjD1maUtJ6Obo/Tq7L9+PryHYIIRg9n7i/1tVzRb5vGJ7roJQQNJofKgGyx+h1+Q5oNDzXdnDEIqXiXt+E7IH7t8i3P763WLQ7HQQS0CxnUdg1+0sSrW6SD2D2Q8o4cRmkMRKZCOnUwxgvb5TvzpymlGe5igjjIk05X9IwImR0rfqO9ittn+d0GHEGNHS5jEh0VtMVMLpeGDFtn+EZIoJDKbkukNx4vjUNKaVMAQGbzWYoYoK6CI9ClkwbNxz/4q0YhXYupIzwTDOkNMITr9mL6eIqQaPnLUnKlPZfEjTbAaGItEF9a9y75nx/AclLI5FrMLQnGNodwoIb0gelAy2ccqm4jl8ivHfAhbak5MXGenr40+tzKwJz7b3iUjI8PBDMXIxotq7rn3dGcwSXv4OozHbeZylyhoQcCGaYuET6dQPW7CPbcRyb7O1zDvapwD8E6dAhSY0LVhBgR2PI9/ZDsM/ZD8GMElgKqq+hOV+RHYGDZaYUHTqY5kU6OxKkjlMXhDkOKdozQPuA4wkvtoocCZgYOg6rnuMNf8VBNtu2d3Fglpfbks1OCDIIEbG4MojmQkHIcLY2p6rcbrcZPSHghQ4RhVW3ESbNJi9zSTE0sJ35thBfRw2xKKlO0ttLBcGdMQgysCu4zLV5uS0k50d7prZce+e0q2X0udoekfNMHjVkX2ordyK/X5izB4J5IMojQZYXp1Ug5FarCBKPqmuhu5bFkaEQoAf+VkCq7U5FG3nVl3Icx6L8dqLgmabYExAFVVHSIcKkrqkZpuULeWAodCHknIIbBKeigH9LuKh5ltSNBcNfJwqcOGpRZJILwXL9d1nowLzasWgNuonIyhMxNeR3eqBQ1vWvMqjpOAk2Iv9FcOAri4wveh9XBqMxsLpJSBW0NKVj+fGmLNUmiKvfzCcwu37EEn+z2SgBnb0APYFPsHQ9sG6by1ZCl91mMO8lK28Tx5tNvIkDlvKaEviNsYDOYZiGMZ0351Yz8V/8j4G3ym5p7DsHFlLsG4exj8i80zMlzsRtLwOzT2h4nisjUCK9iaE5oXR0fu3h0wGI/frXlaHRZ4qNXhpnmGKCUr6uoDAaMJee7+/vHx5ClbHHv84xSd1OBF1ief/8+nT2DQYve7CFbY+P72E4ebyEd/hNlqPWw8P9859fgf8ASL5asz4MIFAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1152000,
            actualAp: 23040,
            actualDps: 9874.28,
            magnification: "288%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    },
    {
      stageId: 19,
      stageName: "聖杯戦争 最終日",
      baseHp: 1350000,
      width: 6000,
      enemyLimit: 20,
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
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 3375000,
            actualAp: 33750,
            actualDps: 9121.61,
            magnification: "225%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 21600,
            actualDps: 20903.28,
            magnification: "2400%",
            count: "8",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 15000,
            actualDps: 2307.69,
            magnification: "300%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 18000,
            actualDps: 3195.27,
            magnification: "300%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 16665,
            actualDps: 2746.98,
            magnification: "300%",
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
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 24000,
            actualDps: 10285.71,
            magnification: "300%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
          }
        }]
    }
  ]
} as const;

export default e27014Data;

