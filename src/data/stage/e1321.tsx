// Stage 1321 Data
import type { StageData } from '../../app/stage/types';

export const e1321Data: StageData = {
  eventId: 1321,
  eventName: "#04 恐怖の悪戯計画",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 321,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "世界中の目覚まし遅らせちゃうぞ",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "023",
          enemyName: "悪の帝王 ニャンダム",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 99999,
            ap: 1800,
            dps: 116.63,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 463,
            foreswing: 104,
            backswing: 29,
            tba: 180
          },
          stageStats: {
            actualHp: 599994,
            actualAp: 10800,
            actualDps: 699.78,
            magnification: "600%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 12600,
            actualAp: 1600,
            actualDps: 1090.9,
            magnification: "200%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 1000.0,
            magnification: "100%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
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
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 12600,
            actualAp: 1600,
            actualDps: 1090.9,
            magnification: "200%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.0-15.0s",
            delayFrames: "180-450f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 3515.62,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 3515.62,
            magnification: "100%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 3515.62,
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
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "200%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "200%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "200%",
            count: "1",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "3",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "海水をゼリーにしちゃうぞ",
      baseHp: 400000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "197",
          enemyName: "わんぷきん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 540,
            ap: 24,
            dps: 13.33,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 90,
            freq: 54,
            foreswing: 15,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 240,
            actualDps: 133.3,
            magnification: "1000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 14400,
            actualDps: 10536.6,
            magnification: "400%",
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
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 14400,
            actualDps: 10536.6,
            magnification: "400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 14400,
            actualDps: 10536.6,
            magnification: "400%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
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
            actualHp: 2333331,
            actualAp: 17991,
            actualDps: 17410.65,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "地球の自転を止めちゃうぞ",
      baseHp: 1000000,
      width: 4500,
      enemyLimit: 99,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "57",
          treasureName: "ネコビタンC",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1070000,
            actualAp: 7100,
            actualDps: 3179.1,
            magnification: "500%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 50400,
            actualAp: 6400,
            actualDps: 4363.6,
            magnification: "800%",
            count: "4",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "197",
          enemyName: "わんぷきん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 540,
            ap: 24,
            dps: 13.33,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 90,
            freq: 54,
            foreswing: 15,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 8640,
            actualAp: 384,
            actualDps: 213.28,
            magnification: "1600%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 50400,
            actualAp: 6400,
            actualDps: 4363.6,
            magnification: "800%",
            count: "30",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "344",
          enemyName: "にゃんこカートP",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAEBAQFBAMFBQQJBwQICAgKCgoPDQsQDw8QEBAXFxcaGhofHR4fHx8lIBkuKiYxMTE5MSU1MzJCMCo+NSk8NzQ/Pz9CQkJHQj1PPkpTUlFfUjZXV1doVTdhXFFhYGBkZGN4Y2Framh4c3V2dnZ7dHeQeDl5eXl5eXmdd5qMh4y0lD2jjZ+7fLm4mDudlZmppKfCk73NqD/ZkNa5q7m+ur3swkjvp+7Hx8b9z0zU0dPe3t3s7Oz5+fn///9MHoHmAAAAQHRSTlMAB/cPGiue5ENh/seyhP0vRv9i6XzAjwz/qtr/7GnKuZ//6wirKP7/XYH7///M/uf+/+z9/v/9/v/+//7///8Ap8uKdQAAAx5JREFUWIXtk113ojAQhkuBih8NhioFg9KgDl1DbRABKcj+/3+1E+zu2XP2orJ7sxeOJzgi88w7b8Ld93+MuxvgBrgBboAb4Aa4Af43QI8wzD5P/xG66a6G1j8A7HmURM7f9zfMeQzwlwDNnoWrcM6Oxxetb+166tj2LMrKjzLxAHzd0nsSnPf39/IDo8xYnPnDRV8f9VCVx0kWJ0kSB1HsGz0JVpCUZSxjxSnxkoV2TwluhO3jj89AMzZ9CdOZH3T9E7zgKldOTyfNVaaaZ5B9lHGCdoY9fTAXSZZliazTJEkhDmZmz+OgO1HCZXUWaVXJVART7VrAer1+fsZvI8zipm3rpoKibfj82gnW29fX1+1as/2nWLYYjQAk7IbXerj9ttn4y2fDZx6r23PbpnAWVZtPL39/Ocd6+y0M2GJoPXGA87k5txVIyNuqeyc1/Wsjti8RMDa3xvgaNU2DDJnXaIXT1RtfD7JeRlwIcK0xZVh+VlNgVC721gzjCgn2goIQ0STgvFaA9lwgpVC70AG+JGjDyWTBGWEAsgM0lcyBPVmarl8FwEn1IeHc84RMa2xepUAJIZPHiWsZ+hUzIOGRck6pyAuZNlVacMYYyBRgZek/CZr2S8xv2ec2GWNCKSUeZTKXac49kELmRSFFaHYAzXbcMAxflvadMXX9LtPUG6yyqa5ZA89DAEIoE4KB8JQheVFJ4ZsGAqwFR2JVV2/O/JLVh6UbgEiLui425gPLpUdwDM5QBadI80Ac6zoXMLFQwiNCLw/PA45lirBaYIZd6mZnjXF6QTzWfQhVcihLRZ7vANgDnqUZ7HZocXE6zgPMhCxOp9Wiy/LTaTccA8KwDgDtI1ABzoN38EzjIR2bCrDfi3R/QkC03++kPHaA/V5KvIkKGAdOCBUpeIygLI8QD3XgwmxidIC6ro8XAKrOL4C8bgoFeBgxRkcj4nGmeosUzwFVy2Pco0/mBVAogI+Aqmg+FaAXF8BgpOL+vttNKlDNiKiFP+8Hj/qd7UfogTwcNrYb7XAEeXibOiuV7Q9vS2syuP89OtbPGAyG2g+9cW8ukrHgWwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 750000,
            ap: 52500,
            dps: 15750.0,
            speed: 24,
            range: 350,
            rangeType: "単体",
            kbLevel: 5,
            money: 960,
            freq: 100,
            foreswing: 25,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 105000,
            actualDps: 31500.0,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1070000,
            actualAp: 7100,
            actualDps: 3179.1,
            magnification: "500%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "198",
          enemyName: "まゆげ伯爵",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 166000,
            ap: 6600,
            dps: 1706.9,
            speed: 12,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 830000,
            actualAp: 33000,
            actualDps: 8534.5,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 24000,
            actualDps: 7128.8,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 24000,
            actualDps: 7128.8,
            magnification: "2000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1321Data;

