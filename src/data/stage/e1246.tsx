// Stage 1246 Data
import type { StageData } from '../../app/stage/types';

export const e1246Data: StageData = {
  eventId: 1246,
  eventName: "破滅への序曲",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 246,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "魔王憑依 超極ムズ",
      baseHp: 1222222,
      width: 5800,
      enemyLimit: 6,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1053",
          treasureName: "ごろにゃん(581)",
          probability: "30",
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
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 795000,
            actualAp: 78000,
            actualDps: 44150.94,
            magnification: "150%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "535",
          enemyName: "悪のネコ帝王",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 1200000,
            ap: 6666,
            dps: 724.57,
            speed: 6,
            range: 520,
            rangeType: "範囲",
            kbLevel: 8,
            money: 3000,
            freq: 276,
            foreswing: 103,
            backswing: 30,
            tba: 87
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 6666,
            actualDps: 724.57,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "7",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "20.0-22.0s",
            delayFrames: "600-660f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "413",
          enemyName: "コライノくん",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2400000,
            ap: 12000,
            dps: 30000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 12,
            foreswing: 6,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 12000,
            actualDps: 30000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "0",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "30.0-32.0s",
            delayFrames: "900-960f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.7-1.0s",
            delayFrames: "20-30f",
            baseHpRatio: "75%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1246Data;

