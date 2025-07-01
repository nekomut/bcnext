// Stage 1213 Data
import type { StageData } from '../../app/stage/types';

export const e1213Data: StageData = {
  eventId: 1213,
  eventName: "砂浜の決闘(旧)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 213,
  stages: [
    {
      stageId: 0,
      stageName: "先鋒 超上級",
      baseHp: 75000,
      width: 6000,
      enemyLimit: 1,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "180000",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "035",
          enemyName: "こぶへい",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQULCwsMDAwNDQ0PDw8PDw8UFBQVFRUdHR0iIiImJiYpKSkpKSksLCw0NDQ4ODg4ODg9PT0+Pj4+Pj5FRUVISEhPT09WVlZXV1dgYGBkZGRra2txcXFxcXF0dHR+fn6CgoKDg4OFhYWGhoaNjY2VlZWfn5+goKCnp6eoqKi2tra3t7fBwcHCwsLKysrR0dHX19fd3d3m5ubv7+/39/f9/f3///9p6OITAAAAQHRSTlMAAwgPOHabp8RbFWojLrGERiY5WHWNSFfl/6hwz4W+l7XoxqPOvP7b8v7PwOfX/f/l8f7v/v/0/v79/v//////a8UyngAABFtJREFUWIWdVwtzsjoQLdJ+vaW09U1btagIikp4EyAP/v+/uklAq70zde+3zjjKJCdnT052w90dLIbj56Fh9ICj/xs9J/OOh4NjGX8JoC1ihGpG0qX5lwjGq49ZU4fZ4n9wMI3vweaG8jpBHyh2BtD52tPb2xnBKhpS+x8fYV27UIThvojtE8KsajJMECK8qRaw+T2HNDwefQOQLMlq3jTsAAMwA0I5sbUzQMPqHOWcl0cYgJXmGaNO551Z2YigOz8jeAWar9mEM8ZcvYMrmpo19Gub+OgTBGAcmMq3U3GY8rDmeDmL4vkLLINCUOZ83wGYAc/9cPWkT60XDUTAoVwiBMaZEEuSTx20uIxp2qiIOtforsjonNDtkCZQkU67By4TfCLYUdIGg2HEW4Bqpp1SEE9SkIv1/n7/VbfzG+oahj7q914U4onP7+u/fNXEz3hHIf1cTqJoNpWb0mALANB7i7k4ee18cXQQQZi6tqJUzyAAJ/0UAEvKpkzI7iglEAcR4AFhmW+AhmJBx0MJUQ+zMYDAOG2ug7OcnQQBiNhf1c1PBMLaHyy47YOe7bejecX4T6QKYGVzi1oAhsRhkJ+OhfwqRjfn31nIbx1AFVCrXVOqjeGQDJzdrp1DErE8D6n6k5UqKft2a9Pd7bZlUCVyTth6IsdiP/GqfzsD3V1vO9aZ/E7aLcmTevdu9wHVoOes162IZa4AyhbA8+b3oGKi2ZvPdlGcyF3I8hYgrPfAWjLbTrpF/TApojVSiuCE74Ft2dpOihYgp+vpwDyohMqEH4EAw+0k7gBkTxDdQQGEEA+oMDZfR8VaAMgSqqq7YMCgGhjL1U4dAtHXZFdqSxnOzi3qVlg7D3feUX1Rl9VYCuIAL1j9d18RYCHOZPnRFrWy8rlN3wqzrcc08SNbySarKU9IBamGcr4jE6A5Wi2nLWdZ4VhIC0hBv9OGrrhHNDVCm9FJdH1JGxqyaAgBmAZi13mJMnd4zrj3SYQNIMVMhBRM0EeXNzlzy5oqZJBipC5CFCXx+NIzSgNEMQhgGFDi0+Kqf+mizxBEDqC2qlkRQ5nop1eoe3LcFjOYDXp2VfvkerQ2Sl07A9rgbrCnCaLBFV8zCMYxoJ62y1kp8XC1uByuu/E4gh5GmUTmkSvbaHZuB6CrhYpBQHcJcS4XnOHNplxAX3e0GS49kloXOlpFvKIByMsyzANFIb3c92lBvKqGyigoFMSvL3U09yxDLAKrIMbnITt+UxaQ1MfXuvxKYVFRRC4pGw7BPk0hVzQV4paJkyvK05j5+Q+L/xKikLKwIo6pXTwRrSEdAXXsiUth6WfInZ3LkoD0M3x0pqAzpU2weD9CXu59nt4WRFWpMy9L3kcABE2oKK+onp97C70nQns5cnnp8fJw9bufjPv+0/PDwxxT0U5KLwnfXx9F/HlFTHQL6vt4NTF/42A+Pbz9eXx8/Vpv4zR6n8//6WK+2UdFsZsvJ8/31wD/AhUI/F5yx1mgAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2637,
            dps: 1683.19,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 47,
            foreswing: 11,
            backswing: 36,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 2637,
            actualDps: 1683.19,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "034",
          enemyName: "コアラッキョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 700.0,
            speed: 7,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 1400,
            actualDps: 700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
          }
        }]
    },
    {
      stageId: 1,
      stageName: "中堅 激ムズ",
      baseHp: 85000,
      width: 6000,
      enemyLimit: 1,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "240000",
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
          enemyId: "174",
          enemyName: "カヲルさん",
          icon: "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",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 44444,
            ap: 1333,
            dps: 605.91,
            speed: 11,
            range: 366,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1111,
            freq: 66,
            foreswing: 37,
            backswing: 21,
            tba: 15
          },
          stageStats: {
            actualHp: 44444,
            actualAp: 1333,
            actualDps: 605.91,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "178",
          enemyName: "エリザベス56世",
          icon: "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",
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
            actualHp: 60000,
            actualAp: 250,
            actualDps: 131.58,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-33.3s",
            delayFrames: "200-1,000f",
            baseHpRatio: "100%",
            isBoss: true
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
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "大将 超激ムズ",
      baseHp: 100000,
      width: 6000,
      enemyLimit: 1,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "300000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "150000",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "044",
          enemyName: "ダディ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsLCwsREREWFhYXFxcaGhoaGhobGxscHBweHh4kJCQlJSUmJiYnJycrKyssLCwuLi4yMjI1NTU4ODg8PDxBQUFBQUFHR0dISEhKSkpRUVFWVlZXV1djY2NkZGRtbW1xcXF8fHyHh4eSkpKfn5+vr6+9vb3MzMzR0dHd3d0GQiOiAAAAQHRSTlMABw4W5v8f2i8+VyVIbIPwyzdReJBhp7acxP907s+F3fjo/rip7//40f7pwP7/g//Rq//c/+7//v7+////////DzxqswAABGpJREFUWIWdVml3okgUZTEGBVwQAbcgKGCZYspGZKkq4v//V1MFSWY67WmQ98EYjvdy3/4EobsNDYl9ik8gfphhDwVBGkt98eLkdS4II87Sz6TDVhPEN87Sz9TTXheHK0/rSzC6RqZoeIHRl2CTA0s2QW8C6ViClbaDQV8XlCsGnh3FO7UfXtwUONzvY+D0rAP5QHDoAxSM++E5QRn6MHaVngSSgwt/Hfp9QyDITp6tQxBuJ/0YxMU2zUAcxyBaGX0aUtlBxC0Gvu/qzydCMqOY4yEALBDe85nQ3BqPGByEoW8+64TkANR44PsQxaH17EwwvEYAQkmS5pjkB+OpMAztTwFpSSitPj4qcjuO5M5+iHrQ4HP68WVVebZNraMMZdcISCkh1TdF4e9dsw0qLxVRkD9TiHCF04ywt9cEBIT+to1AWrz/oznbpoYS8lHRPCloQ1GlfthKIMi/inORhjFiGrKKFiUlWVrSWgP2t1YrXt2c2YtzABhBiS+bzfsN45xlEhfZxdHb+kpaHG6E5h93jEKYlmdDFIfj47XERZrA2ahDDobGKSvK+/1eFXGSDHSZqxq9vV+vl8O4UxmoM+bB/YPQOy1ifzupXyrKqjrsVkasCcOE3nGRV0wFTp+dZ6LusQmCcFEVFcMTenpyL2ouZAmEYZ6T+x2XRZ78Up5oZHG+4iUcxyEAOb0TXAaX62HUFS4p+qppARhCCGCG89xR52PtbxLE/9BLy43g1xBgMmCSoWDTol8zR/wXkjp2dsH/0LVlNJvpfycQzf3OeIzmrYQTu61ytV3kWg/R9TSIW68j0XDBQ3TSBLN9q4lm+BDPjAeyQx0u94/wmJKSy+iwVxfRQwI2PBAqbi1JqF0AtQvx744UVZWjJDvKrQIku4kh/FykzOpZRkmCki6NpOyaV4efewQCXoMoxTmCnfbh+HODsQVYe8GJgB+z+AF/2+W605skxP7aZ8a2cMi+81Zi/1ntEWBJ2DcxXK9BDGG4HuwRHKxW9syH3Y6z5bR2Hqx9PkiilblHYCHL8iRCXpdhJpv7GrhlNwCCgaMYAYr4ZaxHyO1wWrEJyIHebMtYwG4pCyMP1ZfxOIhPHU6KEbuj4mi3YIMIBtacZW3uxQEfYUYQ79oJZIsBPWc0idjr6xUiKG7s8fLRGEFrEqRFwHUrb2cY2KOmaFS36UCmwG7bY0MOtObsHs2DyZfcuZu47Lv4lpeHFgLxLSuDiSyoF1rY32qXN3KqCTBpI5COhPA4sb/Y+S5640YvPH3Lgr63KdgUtH7JMidHdfhJMb9WF+6OdqPvcguDcqUnbSSz3+Jgt1o0XjCHrvOhxIjI2Tnqf82kciHIO1vG8kZxkngTjdv4RNDqZI2NM86TdLt83NCirBj6xDlTmqXhdgDynLXRtLF1idnD6WCdkgy+2BN9PB/+waKas8H05WWdpOySfvlhoMjC+uG6/pwOZtYfXSWq2nJiWvZs9vo64Db93epnr6+zmW2ZE91QfgTzXxNJ1K0TOnryAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 800000,
            ap: 5500,
            dps: 3928.57,
            speed: 3,
            range: 172,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 5500,
            actualDps: 3928.57,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-33.3s",
            delayFrames: "200-1,000f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "208",
          enemyName: "よっちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAFBQUGBwcHCAgJCQoJCQkLDxATFxcUGBkYGRseIiMbKCggKiohKyopODYvOzo4Pz87RUU7UU47UlBAUE9HWllGZWJFamRPaWdTamhTcm9PenVbgn5cioVtko5olpFomZN3raeCrKiEtK6cwr6D0MiA1ciN08uE29Cy09Cl39aW6d284t2g/Oyg/Oyi++ug/e6g/e6g/e2g/e2h/e2j/O2j/e2k/e2p++29+e/P/fX///9Nq7NDAAAAQHRSTlMAfbjR6wpYNm4hF0wuPhqncmOHLXVH5b6Vg2Xy06+Ww/LayOi1++jR7+Sl+b/33Pj4hZ37fYuTqbXe0MLr+d0AcbtoSwAAA89JREFUWIXtlmlzqkgUhk2cVtmMoggaFhuwAZvNJcpm5v//q+kGRZlJRG++3Kq5b5UWoOfps/VpOn//UJ0/gN8B8L0A17/za7vACKrcj+ytU/ADAhhbRZoGqvCrAA6GWZ5nrsy3LgW+eiqoYZ4cj0nmKmwLgJlK/0Uwspclx+2WEND0yxVuPNBNRfjXf4CIqP3hcDjmKWxLpOT45nzYeDSGaU7sPzYf2yQLNeY+gLUTHzUi5Y0wS7bbj81+Q11wxZYg5o7vWdJNAEoVwMeeApKssFqC4A0PY21SL8NVARw2FLBN8jSQWyox0aGDHP1ccUYrA6AOUAB1AY3vAzpgOFk4gV5mEozKACrAnmQxybNYbskjleS4UhVQSAKoAYfjVy4AABhBaJYO6FgHtAW8tAHY5iQL8W0WhtJcUUTVQmazBRfYJvc8LFLaxEdaxTIJeZ6nJ+u6qYa6G2CXfLDnLBoxuDbxabrapWQXJcnxksXkMytcuZ4tEztwjflCx9hf+/akATAJgJOh5YWEkWzPdTx+hpZYJ5HVAzRlQIdXkb9e+/pNHiTPoTy2PxYVgybiULbi1g/VXh0rmLpoXN4J8kw1HUe6BbjSJcdjlGbmugTYMw9eZwJvuvMzjen1uLGuXAETJ9IvK3FWEc7sErCGIbq28gIbjeKBm3kz1CIkXQGZT+tAyphkgXhd5F5TjlGsnYECASRlDtZ2ksXa2bOhju/tbUaLAo1jaTdxF8BanTnZyaiswMKFd4esYOAYGcp0qsirCrCxl0uYnVBpBqS7AVDxioVj0mJ4dQH47+/v4Wn1xvG8MHfqCnwrwImkkSyoEgDtg02ClstwFywtCBFetU5oimD7Qp8XcQXYryHxoIiX0S7CUHzA/qwrwLadjABMU5vybf7fuKFERdXKZKIcs+Jk8sPHrSlAi9IrIKeAZ8xJRxhFmmxrQHpCTwLKRmwAnjykx+75ZNqTs6mcic8BgBKcAZszoO1oaZr3RRinZQhE1cFgvTww1yuxvTfVwtGOJOFIRU6FtNitlvKIeaiQ/bd35Dt4R0TecNKCiF7jMLTkwSMEwCnqchXtap3oV2wahib2H+slXkYREY6iHYlkd4pxlBamwLAPtiKrIM9Dy9l7mMUqaYdPV1G9DI0es6aA6VwUR70BzEJTGsE8dyVBtty2A74h6usIeWQ+AhEm4aLDjNTZk2+cQLQUWnlWNMM5bY3Bk6/NYDCufGZHUHtqI9eE+kKaPhP+XdYf/b/E9LlebzB4qTQYkFeZ/mPjqBIYvL52u92/anW7r68v3+6FfwAkGBe8tIIbxwAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 45000,
            ap: 1200,
            dps: 562.5,
            speed: 5,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 41,
            tba: 25
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 1200,
            actualDps: 562.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-33.3s",
            delayFrames: "200-1,000f",
            baseHpRatio: "100%",
            isBoss: true
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
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1213Data;

