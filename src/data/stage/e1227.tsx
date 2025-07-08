// Stage 1227 Data
import type { StageData } from '../../app/stage/types';

export const e1227Data: StageData = {
  eventId: 1227,
  eventName: "火口の決闘(旧)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 227,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "先鋒 超激ムズ",
      baseHp: 150000,
      width: 6000,
      enemyLimit: 1,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
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
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "400000",
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
          enemyId: "211",
          enemyName: "パラサイトブンブン",
          icon: "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",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 750000,
            ap: 8888,
            dps: 8601.29,
            speed: 18,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 4000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 8888,
            actualDps: 8601.29,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 5,
                level: 1
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 363000,
            actualAp: 2247,
            actualDps: 4494.0,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "210",
          enemyName: "ヨキカナ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQEBAQEBAQFBQUFBQUICAgJCQoJCQkKCgsPDw8dICAfIiIkJCQnJyckLicrKywxMTE3Pj09PT0/Pz89RkVFRUVERkVETUxRUlJSUlNPWVhgYWFTdXJqbW1rfn1mgn95fHxdjIdxi4ltl5ONjo+VlZWWlpZyqKOam5t0sKqhoaJ4ta+pqamurq6Bxr6ytba8vLyL182/v7/FxcXNzc3Y2Njg4ODn5+fv7+/4+Pj////////nMmKVAAAAQHRSTlMAov6SZHrPDPQ54rQYKO78PWUMUnT4YC+sgZZzUNr7rf+LwuP++q3//6rZ//+88v7/5////v/x//z+/////wD/ZWyBkQAAAqxJREFUWIXtlGtzojAUhm21KgoVRW3VFRSDpJAVJFFyXf7/v9qAWtmddqad/bIfeJ3ROOY85z0XbP36R7UaQANoAA2gATSABtAAGkAD+D8BX1fPsuerxWI1d6zeN8JuMh0vOlKmRc+RN/0uo2d7Z6mKmySNlvbXEfZisYx48YcUjxbml5xbxnSnfct6tNRS6rz43INpO3PHtkxr6q8PgOakll8xopUiSA7OJ+HWwj+e6fkYRdFBSIE5Su/lFxQwRjBOwzj1PyzCHPv0YlgpglXBGM9FDcAggvEpDsMsO4w/CHe8g3ivNdfW6T36clAiTpIsyU5J7P3dBXPu16elPRSkZl9plhKSh3GYnE6nLNz9qEf3rDL8PZH+0PcluvdPSkYPhDEcJMEmcJMsDKKXGsAYguqyyiuCLBThIk3fvSsMd0tn7B1wmAAIN7oJu+Nby7ZvBpz1JZLjKh8RKqcM5uXgLl2Rmyddc28ahRlgAsRZ5r+dWz/81cuk3NVldG0ehRWHMCkohrIQ+k1VHXCn1iVTEmIG3DBYbWnr5Uij/Xa7P7KLT6Y4qk45zhUDtOApp1U8wwi/GuXojddYjzEOluYyak1eU70s5aiU3k+WYqVQXlUCU5mjyzf9kxSQKLHZ+SuzNLHd/9zrk6GX0V7jMoHklBAMIUoJgVzPTwGQI6EL4jRFWgDoajZxlnhW1bLJ5NZ924vOerlTFIYhYJxhCACiSoGZS4oCa6TeJSWRCyByB4PZrG0YlmXWdqhnjIfPeqxZllTlK85116T7OMr1LNV1LdIgDkaPlfqDQbc7bHeM3n0F+u5s9DgabbjIdRHaB0P69shFOBeCcSEVdjdheCVUlH63fX+YzKdO56n9MOyu14PB4LlU/6rRrHzNXFefn6vc3eHwof3UMaq/td/n8z8pCRhl9AAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 360000,
            ap: 12500,
            dps: 997.34,
            speed: 12,
            range: 500,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 376,
            foreswing: 27,
            backswing: 49,
            tba: 175
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 12500,
            actualDps: 997.34,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "016",
          enemyName: "ブラックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgICAgECAgEDAgIDAgICBAEDAwMDAwMEAwMEBAQEBAQEBAMEBAMEBAMEBAMFBAQFBAQOAAEFBQUFBQMGBgYGBgYGBgUGBgUHBgYHBwcHCAUICAgICAcHCwEmAABLAQEfHh57AAAuLS0AAP6nAQE8PDzZAAFVVVVsbGt7enqIiIeRkJCfn56wr6/GxsbR0dHa2tnj4uLx8fH8/Px35odEAAAAQHRSTlMAAwcLEcD/LUHL1vP9Gls53SBs7o6r+ElSeeiGxf+hJ7PjYJm8f2b/0BX//////wL/////////////////////x4QrTgAAA0BJREFUWIWVl32fqUAUx0vtUE0bInpQEgZr3WuRx/L+39WdmuR+rJmmn39MnK/zNGeGIPynP+U7calL5WI5nLlDSagj3Z56blAs5J4JYfgp1rCXXA0Aq6+TVdAGWFO9BqCZmziGpOudTjDIV2pQbVfKcDITzfc/lIXablvZIqqThI6SAQAEhUYjMO7UsBcacxNbPc1XI+DVAuQujL6+Csb3zzcwa1VBaDlgtPr5+SoBI+jXyYFo47ytvv+uchfQKHNlUacK8pgYIoQAfqFsZQ5qAIwQZIab/XGH0Do+7jYIWDZ/EsQujgBtT7f0fo23h+SeXvdrMJa5AY0IIrS/Xu9Yt935fk/PSYxqtGKAi7hNbnGSJpc4Ppwu50Ny3ZhD7gjmGo7/kp7jOD5e0uR8Ol0uewR7DU4AqcHmeEuSNMX+J5fTbo0rwd2MrXwrIbTdx8f4sN9t13kdAW8MjV65iXAtASoXkHNDNlXwXpx1yJvgvbQJTy+RFL4V34ZqhVQA11jLNyJNPHVgRIBj4OglMpBpqu6lrI0Zqh5scp9lz1EHo4gAUQhqsyICehcRVfWS9IiA5kFVDMWRRLWv7CWD0YZFDOw6DLQqD9h7WpywckioHuueIM4sugfFs9BgAPA8B3RCkYQJAyCx+rBgMjfU8uPl2+/EOqGCRbUHoM3o5udeZnjAmirVfYRl2XQAOVIqQoA9OmBocngA+nQAaxw9s+IxANbvr5dP0OOZygP4LUsr68gFeHUBhYvHo5AOmGjU+qPFtPgMOXTA4FmF12DgePyAMwD/NRJ8BUTRA2DSAYy9YNluzrRUjQHQPWoOtE87B6gtd0EHFCerVfoP4SMYp2XDtgfxWJfndIDko9DE+VIKAvRcP/LzzKpNW5sZijMUBcZAEW3TneKhNXFIKNqkITX0fMp4+mfUEQduxX3X8IO5qTalLilHfppL2aCEfUle4l+oOlvFpSjbXUmQ/SwIa5Z5S87LiPeaig3ELBkZQCUTPJsS0K31j4cANJv8qu5hZxipf6f8gJgW95ns6lrr/4pA7mrh8OE1HlSsUfzOXupqVhTohQwFKE1ZliXOPDSMrts3TeWjVFtzpn0/crvGb8Q/a31jQfSg9tAAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 550,
            ap: 3000,
            dps: 11250.0,
            speed: 150,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 8,
            foreswing: 6,
            backswing: 2,
            tba: 0
          },
          stageStats: {
            actualHp: 5500,
            actualAp: 30000,
            actualDps: 112500.0,
            magnification: "1000%",
            count: "0",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "中堅 極ムズ",
      baseHp: 200000,
      width: 6000,
      enemyLimit: 1,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "600000",
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
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIEBAQFBQUFBQUHBwcJCQkJCQkNDQ0ODg4SEhIUFBQfHx8kJCQlJSUmJiYwMDBAQEBDQ0NERERQUFBRUVFbW1tlZWVubm50dHR2dnZ9fX2EhISLi4uLi4uTk5OZmZmfn5+jo6Onp6esrKyysrK4uLjAwMDFxcXJycnNzc3R0dHZ2dng4ODl5eXr6+vx8fH39/f7+/v///9hrSwKAAAAQHRSTlMAAwkWlaa1wtXq9+P/DyArNUJNWoF0Zv+U/+ihrr/s/9T/////6v///+//////////////////////////////fHF+DAAABnVJREFUWIWNl4lS4zgQhgnHwnCGQDgW2MRHJCNL1mVbtmVL7/9W28oBOzs40EWRqiT9Rerj7/bBwdc2OTw8PLq+md7e3s7AbqfXhyPf/MoOp3fzp5fXt+Xy77//Wb0HWy1f7o5+6n81X64I41JrjHQ3uLX19fvTDwmTh1VZm9oYw9POf9rw/jD5EeD6TRlT12WpEPOuq2RRcFm2gzevPzrCZBarUuuyLAnqnEyihHKWJAvcDvT+6gf+0zdahvMbhhrwLwUd3EDqPEJt/z7/Nhfgz83airRxOs6dSZnssrbJImTt6uEbws6/NjKtXYVK0rbxIlEoT0kakb5bzfYG8vP3Vapdk2inRJGSKI5Iihq2YEOznO4hrP3X9y9T7ixO+GBQWrdJRC1JTB3H2pVvN+OAmzcGp69KzVE+DDRrCM0WCWPRIqNxlBJIRuP4yxhhcvtKKiV4wfOIWK9i0jZphDhktKrrWqaqjBeo74vX66/9Z8tcwxehCJF0vkUVxyyV1nu3LkQnEFL5QntXzL8Mw9Gr2MTPaKhgxwpnUSRs8O0klDTkUXmzIN6bly9zOV3W9Q5g/YC1MzGUUgA0CHddlkTSqgg7X30NuFlWIf/wVyaVH1JEs0ism6kXgrYdRREmSZw59373ZQyuXqjWFURAa0Jcj3LG0nJ9gzrFvXd8kUB1Jpnrll8H8eD2H7FpAsMzAOCkQDU4Om9FBXqgcCKTOAXA20hTXi/LbRQFGuAEWZrUg5PMDINvNclCQUY/B2CJ8RqQEt16N+g8LwucpWQccPSmtwCJhiGDfgCAl1hlqu26tjFNLhkA2rcRVbj6ACg0uIxjGQC9dSqNEYbzxIiTlPhxwKv6PIHDSUKTql/XILR1XdV5pqEhct+8jmjC4Qv/LyDi6RbgDQ7ZyXGBFindA3jKgpTU2ytEJo3LdSc4GcMNsiTBNErZWCVDN80joaTUtVF4cHDbJNZNmAq2kNCQlUZpmiSFY1/3UpgHsarWlaRw73JRgAoRsAxDCOFfGrMKNGasksMJ6K4dUQBIgmPCsjiG7GcIUZHhDCXSvT+MAR7IRz9bz4RCUkI9CgUnQYwRmnOaJdKz+zFVvMM7QNL5QvgqtyUrQ00jRLAQLZUBoEYBsx2gBIAofE+J0DlIHEq5ElmR0zYPgPmI/8HtauNfB4Ck0ACGsxKKEafGu0bX/UABIMdicDDdAaq09SoHMYIchkJqK7cd0OEExVgWDm5WW02rUeM1iIp1fui63ratBZHrwUgI4mwUsFPFACiJlbz3tSwkF5TLXkvOW5xoL0YB18tqBzDeZJ3gXau5MFLKglZKFbxFSenF7Rjg6K3cXaH2DQaALERuelHkXJB6gESipPbFKOBTEHAFAKtUrZvKugraQ1fWQyhgUvr36Rjg8EMQiAJA6KO+d3adgb4LLwAwbg/gZTebchkA3mlOTWH8YK0g7RqAmmE1Op4nTztFyRlMo94PCm7BhAZB5UUDaxYA2n2A+2IHoGuAr4vGFjmrVSWZZg0AcNcvxwHzfAfIYTqDGjW86ZVWA6iaaEDdLQ6AkcEE9pDtAGQDGHqoxX67qw4wozLc2T2A2eoD4DpkBy1V73qtQeiMq6XobQab2h7Arh0NJbAcdFZwUmtBcpEXvKkCAAfA+L760U1FGM+dZbRRRQHbDeWcioL1UAd2dLId/KcZeAA0fQ5bStf7jivJlRZy6BD6BrBtBgbDERvf2c12NIQIBm0IgNHJdvDZTWUcw3QtvQMlcK5tmq6x0BSgLAjvBWymY1mQPOkdKX0rFbMtl1QWSlEQtxZjOzrZDkIzyEozwivQdZdrWE0ElRx2HVh4KYMYNNl+wOSJMSaqsOlaT7X3mlbwBgCYzErJAZD15mV8WZ7cI11vVLXzVEH3NX3bQSR6O3SgiTCmSW+e9mzb29lUV0nrmfR/WI3IUO4D3L1/AorfAWtZqWAJV09XY4TJdL6qqw2g8QUPc2G3KUNKob3LNFXk4mTkoePw7uxigSISFtbEWAJPFxir0JMGtizYLZThi8fH58vLs/n0z0xMrmYXl8EeCaRygeLHBXp+vHyMuILXRfQIHz0/X27s/OzP55ajk4vtp8+L58fLb+z85H/KejQ7/vWd0++E498J05Ozi/Pz8x86n5//uji9/18Erqezu/n98clfp6dnZxdgv343eOfs7PT0r5Pj4/v53e3N0TaM/wKpmLzJJy6chwAAAABJRU5ErkJggg==",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
        },
        {
          enemyId: "185",
          enemyName: "教授",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 320000,
            ap: 6800,
            dps: 8500.0,
            speed: 4,
            range: 501,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 6800,
            actualDps: 8500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 567,
            actualDps: 1063.12,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "barrier": {
                hp: 6000
            }
          }
        },
        {
          enemyId: "016",
          enemyName: "ブラックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgICAgECAgEDAgIDAgICBAEDAwMDAwMEAwMEBAQEBAQEBAMEBAMEBAMEBAMFBAQFBAQOAAEFBQUFBQMGBgYGBgYGBgUGBgUHBgYHBwcHCAUICAgICAcHCwEmAABLAQEfHh57AAAuLS0AAP6nAQE8PDzZAAFVVVVsbGt7enqIiIeRkJCfn56wr6/GxsbR0dHa2tnj4uLx8fH8/Px35odEAAAAQHRSTlMAAwcLEcD/LUHL1vP9Gls53SBs7o6r+ElSeeiGxf+hJ7PjYJm8f2b/0BX//////wL/////////////////////x4QrTgAAA0BJREFUWIWVl32fqUAUx0vtUE0bInpQEgZr3WuRx/L+39WdmuR+rJmmn39MnK/zNGeGIPynP+U7calL5WI5nLlDSagj3Z56blAs5J4JYfgp1rCXXA0Aq6+TVdAGWFO9BqCZmziGpOudTjDIV2pQbVfKcDITzfc/lIXablvZIqqThI6SAQAEhUYjMO7UsBcacxNbPc1XI+DVAuQujL6+Csb3zzcwa1VBaDlgtPr5+SoBI+jXyYFo47ytvv+uchfQKHNlUacK8pgYIoQAfqFsZQ5qAIwQZIab/XGH0Do+7jYIWDZ/EsQujgBtT7f0fo23h+SeXvdrMJa5AY0IIrS/Xu9Yt935fk/PSYxqtGKAi7hNbnGSJpc4Ppwu50Ny3ZhD7gjmGo7/kp7jOD5e0uR8Ol0uewR7DU4AqcHmeEuSNMX+J5fTbo0rwd2MrXwrIbTdx8f4sN9t13kdAW8MjV65iXAtASoXkHNDNlXwXpx1yJvgvbQJTy+RFL4V34ZqhVQA11jLNyJNPHVgRIBj4OglMpBpqu6lrI0Zqh5scp9lz1EHo4gAUQhqsyICehcRVfWS9IiA5kFVDMWRRLWv7CWD0YZFDOw6DLQqD9h7WpywckioHuueIM4sugfFs9BgAPA8B3RCkYQJAyCx+rBgMjfU8uPl2+/EOqGCRbUHoM3o5udeZnjAmirVfYRl2XQAOVIqQoA9OmBocngA+nQAaxw9s+IxANbvr5dP0OOZygP4LUsr68gFeHUBhYvHo5AOmGjU+qPFtPgMOXTA4FmF12DgePyAMwD/NRJ8BUTRA2DSAYy9YNluzrRUjQHQPWoOtE87B6gtd0EHFCerVfoP4SMYp2XDtgfxWJfndIDko9DE+VIKAvRcP/LzzKpNW5sZijMUBcZAEW3TneKhNXFIKNqkITX0fMp4+mfUEQduxX3X8IO5qTalLilHfppL2aCEfUle4l+oOlvFpSjbXUmQ/SwIa5Z5S87LiPeaig3ELBkZQCUTPJsS0K31j4cANJv8qu5hZxipf6f8gJgW95ns6lrr/4pA7mrh8OE1HlSsUfzOXupqVhTohQwFKE1ZliXOPDSMrts3TeWjVFtzpn0/crvGb8Q/a31jQfSg9tAAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 550,
            ap: 3000,
            dps: 11250.0,
            speed: 150,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 8,
            foreswing: 6,
            backswing: 2,
            tba: 0
          },
          stageStats: {
            actualHp: 5500,
            actualAp: 30000,
            actualDps: 112500.0,
            magnification: "1000%",
            count: "0",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "大将 極ムズ",
      baseHp: 300000,
      width: 6000,
      enemyLimit: 1,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "1000000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "500000",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "043",
          enemyName: "ハイ・エナジー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6101,
            dps: 3050.5,
            speed: 14,
            range: 344,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1101,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6101,
            actualDps: 3050.5,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "032",
          enemyName: "ダチョウ同好会",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgICAgIGBgYGBgYJCQkKCgoLCwsNDQ0WFhYdHR0dHR0gICAhISEkJCQkJCQlJSUlJSUmJiYmJiYyMjI2NjY4ODg5OTk7Ozs/Pz8/Pz9FRUVSUlJUVFRaWlpgYGBjY2NnZ2dsbGxtbW13d3d7e3t+fn5/f3+CgoKJiYmKioqMjIyXl5ednZ2jo6Onp6evr6++vr7CwsLLy8vT09Pc3Nzj4+Ps7Oz19fX5+fn///+Xho0TAAAAQHRSTlMAB3YVvtqMoB/zXyk2Qw9RZHOOMMna9aCyvYVX7nWdy/+0/5b/88rg///Z//D//+LE//L/3fn98fz+////////oApklgAAA8RJREFUWIWlV22TmjwUNcu+UIGKu1t17cpLRAgi2MAmhRCS//+vnov26XSmUxX2zugnz8m5Lzk3TiYDAtnGkJ//FZazWptoPN64S0oWe645Eo+mPu8Eb1hojSOw3riSeFFrHn5/+fp1OIHpSy2DL0zV/OfHj+0Igr3SitO2aTrBDt5wAuuoIZSqanrYb8eksO96go7mPtRgOH6C1hzwWtXJbAT6JCHkSksWz0bPkhlKzZYjp6APtAUCdzx+YoCCcvoJAuiDOjqfILCPWu0/UYKJy7QMP+EIaN1o4d3eQ4QM2/nzPCOWut7cADx9mdPn1du397e59ftI+6h0eXkKTTAse4oAPvd3JMvSNNv5U+P/DLjuLtcQPftz2/Mtw/V3aX4Oslg8midVFmRwpQTIq1lSlnfL3/Asy3Bx8GzXOd+li3No2rYnZNuxd5L12P4T4AhXqvaT0JwduytT4Cb7Q9tyQcgJnfUMOOccjIzxwyputW7DSxm4XHW6q1I4P8tTHOAUqhgJrUVe0IIC/spNco5Ktori/ngSRNCBXkKlFeWd6t3sWg8svwGteZTnaRRE2bmIuNaykGe8rteXMrBWB+gzi6KcQOUCcqpjRJVu6C98t7cvCTCXJZimJDjFOcYn/TkhkHlTnfGKbS7fA+u1UrKhmAQ0Ss9DgDm4aP2LgHtXrNjyoQ1tQ1LI4JRABlpoIRp6LkB4bakiJyx5Xe8wZgVO+2nI4RtXbSFBP9/dYOaG42427luQU5iCEwEUhKuqEqIqbiE4x3QRQBbnacARaTtJCWH58lYrQvYqiEiQ5hkhNMI4yqRqW1XebKbG47cIUxpFpBItzGPaz1JVl/NbCSaOT6Kma0WrlEyhEiSVbLle327nyFlhoTrZwdUgKcz1gib2ZNA+dBKppAIC2o/Ebrl6HrZO0ZypPgSNCsYOa8McuAtsMD+luzqvWsljd+gyh4Gs4ebVRVELFq+twfjNse5ElRWcHcL5YDhcKdjAZfjKusZzjDFPEWsvZWy4Zcu/j0BP+kcEE1v0chQ/RxKgsJVA8KHHE8hPEmxlu0XWUX28jCUQ8AaA19DYtwxaCzabmDG0YixBDd5hxOLiGrwUmxrEG/HlLXSRgIN4I2a3O9BfBOGJYPSTdsOAwBxPgDwO5bOPownMuAEFc8aXI4toJfLgolnZJoOt6BzIa3jiOomgibeZjfiTijzBs8MxTYuU14eVhdAAIchypnevlUjzmsJajNJgcf/09PT4eDd1btKCpk/3Dw+L9/fF4suf8fBw/+T8S8h/jtWr7rL2CkwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 340000,
            ap: 7200,
            dps: 12705.88,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 340000,
            actualAp: 7200,
            actualDps: 12705.88,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "375",
          enemyName: "大夢くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIDAwMDAwMEAwMGBQQHBwgHBwcHBwcHCAkHCQkHDQwJDQsJDg4NDQ0NDw4fIR8lJhgYLyspLCUdNTA8PD0+QDsjTUX/AAAkYFNOUFFHWVY3cWVnbm6nZA9aenZYjoasewy1dR2eiAK3eB+Dg4RwmZPIlTeamppyrqfRmS7Roziur6+ExsHbtF7gtU/dtmK9wMD00AKX3tnuz4T2z3DN1NTt15mh8eug/PH//wHn5ePu8fL///////+vBgOqAAAAQHRSTlMAEwgipjFBk1BdhenNuNx0+pqv787+t+n/Af/V///oFf//Bzn7IPH+R/r/qB7+/kqqiv3//7Fc/9L//wH9/wD/ETCBVgAABGVJREFUWIXdV+t2skgQDCAIRiUI6HzDJTOuSpiNY0LYJRBm8/5v9fUAxvUSL9l/W788nqmiqulu4O6f/4i7/4HACTzOl8s/JJbL+fzUgfN4fHp9efmzxcvL6+b5Rv6vp7p+fVouHwHLp9d38XqrieXr+/v7Xy3kr83NKR6Xz5vN3xKbzeZ5/utWfouPj/n84+NnXAlV0XRd1zT1h3TdngZxHAdTx9R00+pgGrqiqldoanaQFkKIIivWsTcc37uzFp43cfoDy9CUcyqqMU1r8fkpMhJlQqQY46zuUGTrdBUHnmMb36ZTrSBr6Eno+zgpigiT+vPfEKCzCia2flrCDIrmFEUoDEPEQYB9HkHU2cqztRN8fZq1RxgKkR8icBAVh2yRJ5QmaTwxjkyog5X4EpAOMob58fUpliDEM44MeJ0BwSLIgCKKaS2+sBVIcAs0Okih2u7WrygYjtgaI7reIQMUdS2gMC18e19A6aFsZ7Qo5El5LzvU8gZkWZqudxb2BbQhYmIvLcOQoa2caDoBkK3XKQkRkgLDgxKMEcn3FGqoVyIZq3gWBNMveJ7r+iAxPhTAOOJ7fZMhfzxxbMuESdA1ZQtNN6z+0D0U0Lwk2nrehkhdSzk9Qao2cA8iKA7LGXSOqHc5RGyeYrfn+72Df6y4rBhOCCHpl4314PvZ0w87SZvyiiHCc07JtiOK6ame/waqFbOIlVVVlcl2CM9lOIYyCRs+KJB1ZyE9k+FYwElaflWxRGwzKLdEyDt+xUknUAfXF0HzWLUTqG8WgGnkXwJ51A1Wcb2ANkI7BxXrMqwnVxfRdDGVNcybQuYha9YzGVydoI9wlFcli5ogZeSThIt6dbUArAOMGYcJbnyUBMM+KURqX6Z2CWYwi5FcV9JCyXGSM0ixss771jVV0ZUmQUS7VQVUMIJkEiHio927B8Ob2pNmPysjzLbbEsxjRGQQkU3ON6IeLBaLmdn8oglYiBhr9mVjoKzyS7Oke29vb4s+9IoR84hFCaNMJkF+YyCP7fNdoDgLKTCDY2acw22jlBGZxMcwFSUL7AuTpE1mi7eFP4bFZ9GKRYTlZUIZmJABkhOPvwOoujEJXQLPa2dEq5zJJswJpQhaIafOVVNgjAZBkXNGaDcEJY2Qz0seDK6bIlVTbLkGOOl2CY8IQox45vWLRLEDuCIpS1m3PEIk9EPXuuUdTbFnvHXAQ0o4D1niXH99gOmlZStAfZJXCb3YPwfQnBiqCALcjaD8EecXGvgIiuV4QC3jXgy7CAycH8FTUE14rvGJFZTSwC2Poy2MuCxXth7kLMzJhQk4CR2u7Wmax8OQe/rt/DstyKmtKtPEndHb7mEHZcoguergoYf7P3nRVyYz2XyW6w794U8iqIO+NK4B3XV/UsQ7XW91fHfsH76DXmNAhZcv+NIxBq7/8HDf6w/g3Ux+91z5mWINer3RcAgfKA8+8n3QANzfj4ejUa9vX55s3e4DfTwe3x8CJHoD67tEvwG1pijNnjT0NwAAAABJRU5ErkJggg==",
          traits: ["天", "エ"],
          baseStats: {
            hp: 50000,
            ap: 3333,
            dps: 552.43,
            speed: 12,
            range: 240,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1250,
            freq: 181,
            foreswing: 32,
            backswing: 44,
            tba: 75
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3333,
            actualDps: 552.43,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            },
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "016",
          enemyName: "ブラックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgICAgECAgEDAgIDAgICBAEDAwMDAwMEAwMEBAQEBAQEBAMEBAMEBAMEBAMFBAQFBAQOAAEFBQUFBQMGBgYGBgYGBgUGBgUHBgYHBwcHCAUICAgICAcHCwEmAABLAQEfHh57AAAuLS0AAP6nAQE8PDzZAAFVVVVsbGt7enqIiIeRkJCfn56wr6/GxsbR0dHa2tnj4uLx8fH8/Px35odEAAAAQHRSTlMAAwcLEcD/LUHL1vP9Gls53SBs7o6r+ElSeeiGxf+hJ7PjYJm8f2b/0BX//////wL/////////////////////x4QrTgAAA0BJREFUWIWVl32fqUAUx0vtUE0bInpQEgZr3WuRx/L+39WdmuR+rJmmn39MnK/zNGeGIPynP+U7calL5WI5nLlDSagj3Z56blAs5J4JYfgp1rCXXA0Aq6+TVdAGWFO9BqCZmziGpOudTjDIV2pQbVfKcDITzfc/lIXablvZIqqThI6SAQAEhUYjMO7UsBcacxNbPc1XI+DVAuQujL6+Csb3zzcwa1VBaDlgtPr5+SoBI+jXyYFo47ytvv+uchfQKHNlUacK8pgYIoQAfqFsZQ5qAIwQZIab/XGH0Do+7jYIWDZ/EsQujgBtT7f0fo23h+SeXvdrMJa5AY0IIrS/Xu9Yt935fk/PSYxqtGKAi7hNbnGSJpc4Ppwu50Ny3ZhD7gjmGo7/kp7jOD5e0uR8Ol0uewR7DU4AqcHmeEuSNMX+J5fTbo0rwd2MrXwrIbTdx8f4sN9t13kdAW8MjV65iXAtASoXkHNDNlXwXpx1yJvgvbQJTy+RFL4V34ZqhVQA11jLNyJNPHVgRIBj4OglMpBpqu6lrI0Zqh5scp9lz1EHo4gAUQhqsyICehcRVfWS9IiA5kFVDMWRRLWv7CWD0YZFDOw6DLQqD9h7WpywckioHuueIM4sugfFs9BgAPA8B3RCkYQJAyCx+rBgMjfU8uPl2+/EOqGCRbUHoM3o5udeZnjAmirVfYRl2XQAOVIqQoA9OmBocngA+nQAaxw9s+IxANbvr5dP0OOZygP4LUsr68gFeHUBhYvHo5AOmGjU+qPFtPgMOXTA4FmF12DgePyAMwD/NRJ8BUTRA2DSAYy9YNluzrRUjQHQPWoOtE87B6gtd0EHFCerVfoP4SMYp2XDtgfxWJfndIDko9DE+VIKAvRcP/LzzKpNW5sZijMUBcZAEW3TneKhNXFIKNqkITX0fMp4+mfUEQduxX3X8IO5qTalLilHfppL2aCEfUle4l+oOlvFpSjbXUmQ/SwIa5Z5S87LiPeaig3ELBkZQCUTPJsS0K31j4cANJv8qu5hZxipf6f8gJgW95ns6lrr/4pA7mrh8OE1HlSsUfzOXupqVhTohQwFKE1ZliXOPDSMrts3TeWjVFtzpn0/crvGb8Q/a31jQfSg9tAAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 550,
            ap: 3000,
            dps: 11250.0,
            speed: 150,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 8,
            foreswing: 6,
            backswing: 2,
            tba: 0
          },
          stageStats: {
            actualHp: 5500,
            actualAp: 30000,
            actualDps: 112500.0,
            magnification: "1000%",
            count: "0",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1227Data;

