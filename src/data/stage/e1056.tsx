// Stage 1056 Data
import type { StageData } from '../../app/stage/types';

export const e1056Data: StageData = {
  eventId: 1056,
  eventName: "開眼のスモウ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 56,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "スモウ進化への道 激ムズ",
      baseHp: 480000,
      width: 6000,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10022",
          treasureName: "ネコにぎりへの進化権(スモウネコの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUFBQUGBgYICAgJCQkPDw8VFRUbGxscHBweHh4hISEqKiovLy8wMDA2NjY6OjpHR0dOTk5ZWVlkZGRubm55eXmFhYWQkJCZmZmjo6Otra21tbW9vb3Hx8fR0dHa2trh4eHp6enw8PD6+vr///////8/ZZojAAAAQHRSTlMAAwgQFh4lMTtBSlNbYmhygZF6ieWc+a67xNHZp+60/uD9yvDl/d7p9//z/f/+/f7//////////////////wD/7nKhtQAABLdJREFUWIXtl1l7olgQhgPIpiyyCigKKhE47AgHXCb//191mUy6dWYSsOdunqlLpF7Pqe0rXv74l/byP+A/B3h5MIKiGRaMoUji4YeRAIJi+Jkky+KMpX4HQE54SVmtLWttyFOafBZAkAyvLhxvB+at51Pm/hZjABQjrZx9jLIsS+K9s5AZ6hkAQbLiyguTojo2TV0k4X4hsiRBkGCjACQt2V5YtP35crmcT20RepYIuZjQNDUKQM8MN87b8/XtZtdzm8e6wrOcKMszZkIOAzjF8Yvu8uEPhAvOfWuuao6rLwSWGgKQtGgfkuP50/92hhrtbcs+hOHWENkhAMVrLqq6t3vDeWSafpKlB1ubDgEmwmqXdecHQFch0wzKYxE7ymwIQMvrsLxeHwD9MdlsorYrxwAYdRtWj/5vfZNsfIS7PB5xBWYOgLe/A4K0w9nrWuUHAe9XeAScABDlPU5eV9JgFmhxtSvOf4lBjTZJ3Tdoq8zowSxMFTd9yML1rSuiTY77OrBlbrCQKFZdxgW+vv2sxOulRlFUd3W2W0FnDwEIambto+p0+ZnKS1f4UdZ2eehp0E6DAJJVLR8V+DMO165Am7RpqsgzBBhvQwCIAqc5u6houtP51PcdruACRVclO0tkx80DildtM0B5dayKPEWRj8q6Bn+VGTMPCJJipgAw/QilCfx5EKG8KaGP5jw1ZqQRFCtq1tI0Nzfzb+4tbtONrXAf8/17AElzorbYvsYozbI0SfOirI9tnR0cbTohhocqQfFzW99EaQkhPHUtzKXr9XRMfcfgP0f7NwBQE9mw93FetbjDTVXV3QXXZYZuc4T+lIavAXD8ue0GqIT89bjOk7TElzoJd7qtTH9Jy9cAVlo4+wTy3zdFhsJwh8r2nAfeWhNY+pc0fQ0QVm6YVLjvjnm8X9q2HpbtKXWtOU/fy+vXAG0bFPh0aopop6/nomwfyrZPdejgkeJqbKFiIWWxZxkSzwpWDMdJdI2nXsYBlG2UVVnk62uZmVCM6MRH3CX6nBsLgFEUooNnKSA/JPTkEkEJoqXMkiMBrOrorrOSuZsDNVX0pMM1ciRmLGAC8qmKU/ZWsgQtW7v8jEEJRHosAPqY/lypKNbw4vKCy/CJE7y8rxAfKWcEOEB77eroiSzcvURMtSWM0XPXJruF9DtLFlRRinvcn8rYMx7zOAYwYRUPeqotjv0xD22JHVfKv96BCPgFiHGQ4a5BS2NGPgcgeMWBCBzTDSpxlx1s9T4KwwCCFO19gnvQMz9pTiVyDW7yDIBiNT0uO5wGrhuUMByCD0EYDWCExQaU7Bh59tLN2v4YbRX+CQDBKdugOjX5zpIN5/0or2uBGDHS/vQHcT2kzRkKQOGk1WtyW42W8oQcCyAZeYnqrk8Pa2nCyXZQ4yYzFZZ6AgDDsK5jZ86TNG/ss7JMTIOdDAMm7FSQZFWx3BBEyXcd27KspRtESWQ6hjJXZUmAZv8a8PGNYttLfRcGgenq7+aafuC7umPbtrVeKRL3NUDQLAccXNf8B4PHQHQs7ZtFk53JmmGsFosFnMO5N/hveLoyDE2dfbPmUQw3nQmiKMHH2lxT7mwuy5IkCcJsyjGPW9oPptaT3VzATtMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "7",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "2.0-20.0s",
            delayFrames: "60-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 50,
            actualAp: 20,
            actualDps: 40.0,
            magnification: "10%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 133300,
            actualAp: 4440,
            actualDps: 3917.65,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 133300,
            actualAp: 4440,
            actualDps: 3917.65,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 133300,
            actualAp: 4440,
            actualDps: 3917.65,
            magnification: "100%",
            count: "30",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 133300,
            actualAp: 4440,
            actualDps: 3917.65,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "スモウ進化への道 超激ムズ",
      baseHp: 480000,
      width: 4500,
      enemyLimit: 40,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10022",
          treasureName: "ネコにぎりへの進化権(スモウネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "7",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 199950,
            actualAp: 6660,
            actualDps: 5876.48,
            magnification: "150%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 199950,
            actualAp: 6660,
            actualDps: 5876.48,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEAwMFAwMHAwMFBQUGBQUHBQUICAgKCgoMCQkVEhESHAceHh4iIB8dJw4zHR0nJyciNw0uLi48Lh8xMTF8ExIzMzN/FxY6PDelGhtERERORTxSUlLRIiJaWVh4WzVmZmZvbm2ScTx8e3uGhoWOjo6RkI+amprOl1elpaWwsLDqrl25ubnEw8POzs7W1tbh4eHq6urx8fH6+vr////////fk2rmAAAAQHRSTlMAChAYuwXbzOUv/yI7eK5KY1fzlaT/bur+x4T/Nf/Y5pj+/v27/+H+///O/////+3////////+/////////wD/y0SghwAABW5JREFUWIXtl2tfozoQhwuIihShrW2xbr0gdGlTAhiWXDl8/291JtCqrdXfrufNebF/e4HCPJnMTCYy+Oc/avAX8Bfw/wB8KTcIPG9of33TFzInDw/Pz7f+N80N17n9+fz88+e1NTDMbwDcm5uHDvAwNL3RN+ZhxugJ7J+fHoLF/egbHhiPeAnjPz89Xaar4TcA9izJwIWnpyTD9843AOYEC4RwQXnTkNk3YuCvRCOkaNq2kTx2/8S0G816rNu2ZUi0rUB1/gcu2LYBN9tBpmBwUUupRCVYbP0+wDANqIKYgQNNxSXGRFKe+xr9WwDDtAzbnuUwftvWSJCIFCmnj/Djp4D3F2zDskzbjUXbwJ9IIRFpipTaDL8CvLtim06wWDwSHYCSM5RlPKOZaOuFYfwGAMxncV7XlQL/RVaWpIBSUBVvxcb/8eMzQg+wDdefPW5KrlPPGXxyLnlRl0JmFcQzzzez07noJmcOwTgnTHXBa4guAH0gtSp90jQin5wkaIAx2xAum94IXqqWnY0sMcZM7GnIOzULDbA2O2ttvDuAKBJCyrLAGdUw+IXe7FuLfURwu7zzGlRmYk+iFRAqyvSK6OYmY7O//zCnGrBRkipy/7iY3USI6Ro4VENrnVkA6Fq3B8cAM2Yc1TJfWM7tcpkW4si8qbOsA1i2AbVuH05DO+TnomKtymeTJFmuk5S+BrSTRGnBVKs2rmGCDgHdjKB/dMWzmm/XyXq7XZMulqqfTNMwXBDeNvkQSh1q/X0M4Biq1HZuK50/vNz+2iYvv162JUSFICL6KSiCOSBz39QA4yNgYA/vtdtVCID1GghrnKEMZxlVghZZhpD25gTA3gEG9mgFPUBmCZj3hJJz8AJsMYHloR2UqzeAfQiAUyNYcZg1rQsEYXh5eYG1RFDBhehqQL/raNYDjAOA0VcGBFIHv1ElSiGK6yTCJFuvqZK7BQIRKmKnBxjvAEYPMAw3RinErCkhkL/WyyhM0miZpGmS4kooBalAIg9OAQxwAlrZLJcI63LJ1pCFbRKG0/Bupwj6EkZVQx/BBdM8BmiZTsxbltZKEIQgBpCM8NVeK7yDOKrVSAPMt/5k7wimNcqbpilTghHkLNlqF+4OFHHdKRZ6Bkcu6Oo0rUWtVyBGoAzqeXl3ZA8AxRoeW3q+71wY7AAuzEBXPU4jiN1yOZ3efQDQDPqz1Q95AIBpWU4su1auGKUVio6H7wCsbmA96Yy/rqhBvxWAhivoYpKwfvWlJwHQlvSC7Id818st1+0ATVuluKsalX6010FUvFp5o6H1EeAEk3lW1DWh3QI+DWCsgL0Co9WNb7lvAMN0ndH1PMXQQWEr5epTACVUL8lGktXoPcByg3vMu0uKYVQLdQoQ6hjsWxyLnVeAbbrDW6IapZQUQnAGqEYkO6MDD8Rri4PN9g1guf4KFj5YQgKFpnBW3UEZHyci0WniMI5UcjO0jP2WaDkjADAuOOdgz2ldkWw6nYadekfgKwwBoApU1TWTNB66PQBS6g7921JWFfxLJaQUjDFao6srjeggd/oDjqYAkAXuthrkAWBfho7ve/OyKvW2RLU5ozi56jTVL+BoXV2lQnJobRWl2fXI30fRNhw/8G4u06IoygKhotaVPL06IVQV0BVqBvZeEPjWLoqGE3iTyfX5OILmkyZRohWesJ9Ca4I6KrPVRD9IBO4e4HuT67Ozs4vzy3EYRQCI0rIIL8dH9iFwYYRofjHxYMSJtweYwfXZRa/z88tOYYrmZ/psdw7fU2iR4/EYDi8uzjpN9s8ylge37tTfrh0Znx/o8iqMpuOOtdPFtd+nAZ6MbvRo+8E6zS+PBaPPx/uTzt4bAuBftwHY/DOyJwMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 199950,
            actualAp: 6660,
            actualDps: 5876.48,
            magnification: "150%",
            count: "30",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "4.0-5.3s",
            delayFrames: "120-160f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 199950,
            actualAp: 6660,
            actualDps: 5876.48,
            magnification: "150%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.0-23.3s",
            delayFrames: "690-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 199950,
            actualAp: 6660,
            actualDps: 5876.48,
            magnification: "150%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.0-23.3s",
            delayFrames: "690-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1480, 1480, 1480],
                timings: [12, 20, 28]
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "19.7-20.0s",
            delayFrames: "590-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "19.7-20.0s",
            delayFrames: "590-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "19.7-20.0s",
            delayFrames: "590-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "19.7-20.0s",
            delayFrames: "590-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUFBQUGBgYICAgJCQkPDw8VFRUbGxscHBweHh4hISEqKiovLy8wMDA2NjY6OjpHR0dOTk5ZWVlkZGRubm55eXmFhYWQkJCZmZmjo6Otra21tbW9vb3Hx8fR0dHa2trh4eHp6enw8PD6+vr///////8/ZZojAAAAQHRSTlMAAwgQFh4lMTtBSlNbYmhygZF6ieWc+a67xNHZp+60/uD9yvDl/d7p9//z/f/+/f7//////////////////wD/7nKhtQAABLdJREFUWIXtl1l7olgQhgPIpiyyCigKKhE47AgHXCb//191mUy6dWYSsOdunqlLpF7Pqe0rXv74l/byP+A/B3h5MIKiGRaMoUji4YeRAIJi+Jkky+KMpX4HQE54SVmtLWttyFOafBZAkAyvLhxvB+at51Pm/hZjABQjrZx9jLIsS+K9s5AZ6hkAQbLiyguTojo2TV0k4X4hsiRBkGCjACQt2V5YtP35crmcT20RepYIuZjQNDUKQM8MN87b8/XtZtdzm8e6wrOcKMszZkIOAzjF8Yvu8uEPhAvOfWuuao6rLwSWGgKQtGgfkuP50/92hhrtbcs+hOHWENkhAMVrLqq6t3vDeWSafpKlB1ubDgEmwmqXdecHQFch0wzKYxE7ymwIQMvrsLxeHwD9MdlsorYrxwAYdRtWj/5vfZNsfIS7PB5xBWYOgLe/A4K0w9nrWuUHAe9XeAScABDlPU5eV9JgFmhxtSvOf4lBjTZJ3Tdoq8zowSxMFTd9yML1rSuiTY77OrBlbrCQKFZdxgW+vv2sxOulRlFUd3W2W0FnDwEIambto+p0+ZnKS1f4UdZ2eehp0E6DAJJVLR8V+DMO165Am7RpqsgzBBhvQwCIAqc5u6houtP51PcdruACRVclO0tkx80DildtM0B5dayKPEWRj8q6Bn+VGTMPCJJipgAw/QilCfx5EKG8KaGP5jw1ZqQRFCtq1tI0Nzfzb+4tbtONrXAf8/17AElzorbYvsYozbI0SfOirI9tnR0cbTohhocqQfFzW99EaQkhPHUtzKXr9XRMfcfgP0f7NwBQE9mw93FetbjDTVXV3QXXZYZuc4T+lIavAXD8ue0GqIT89bjOk7TElzoJd7qtTH9Jy9cAVlo4+wTy3zdFhsJwh8r2nAfeWhNY+pc0fQ0QVm6YVLjvjnm8X9q2HpbtKXWtOU/fy+vXAG0bFPh0aopop6/nomwfyrZPdejgkeJqbKFiIWWxZxkSzwpWDMdJdI2nXsYBlG2UVVnk62uZmVCM6MRH3CX6nBsLgFEUooNnKSA/JPTkEkEJoqXMkiMBrOrorrOSuZsDNVX0pMM1ciRmLGAC8qmKU/ZWsgQtW7v8jEEJRHosAPqY/lypKNbw4vKCy/CJE7y8rxAfKWcEOEB77eroiSzcvURMtSWM0XPXJruF9DtLFlRRinvcn8rYMx7zOAYwYRUPeqotjv0xD22JHVfKv96BCPgFiHGQ4a5BS2NGPgcgeMWBCBzTDSpxlx1s9T4KwwCCFO19gnvQMz9pTiVyDW7yDIBiNT0uO5wGrhuUMByCD0EYDWCExQaU7Bh59tLN2v4YbRX+CQDBKdugOjX5zpIN5/0or2uBGDHS/vQHcT2kzRkKQOGk1WtyW42W8oQcCyAZeYnqrk8Pa2nCyXZQ4yYzFZZ6AgDDsK5jZ86TNG/ss7JMTIOdDAMm7FSQZFWx3BBEyXcd27KspRtESWQ6hjJXZUmAZv8a8PGNYttLfRcGgenq7+aafuC7umPbtrVeKRL3NUDQLAccXNf8B4PHQHQs7ZtFk53JmmGsFosFnMO5N/hveLoyDE2dfbPmUQw3nQmiKMHH2lxT7mwuy5IkCcJsyjGPW9oPptaT3VzATtMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "19.7-20.0s",
            delayFrames: "590-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
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
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 1126.76,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1056Data;

