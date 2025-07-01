// Stage 1166 Data
import type { StageData } from '../../app/stage/types';

export const e1166Data: StageData = {
  eventId: 1166,
  eventName: "だって超夏じゃニャーイ！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 166,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "小便時代",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "1",
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
            actualHp: 1200,
            actualAp: 120,
            actualDps: 120.0,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 27000,
            actualAp: 15000,
            actualDps: 10975.62,
            magnification: "300%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
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
            actualHp: 140000,
            actualAp: 2400,
            actualDps: 4500.0,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMDAwMDAwMEAwMGBgYHBwcHBwcIBwcJCQkKCgoKCgoKCwwPDg0QEBAREA8RExMTEhIeHyAvGhMfISAgJCYjJCQfJykoJycsLSk0Ny42NjcvOjs/Pj1CQUFgNytDQ0NGTUFSTkxUUjc0XWYwZnJ1YT1taUVybkhNfINgeHV5c0yHcUtOiZGfgRqHi3SelVydlmK0nySooGZbtsWcoaS4rW/HtibMv3i+vr3e0j/ezoHq2Yf24oz+6I/q6upT2GY/AAAAQHRSTlMACM//FO2IxClhNnGhH9lPQP2xCVrqzf6agmb9xenY//+x/5H71/9zsOj+3/////7/uP/p//////3///7/////FJ6hHwAABSZJREFUWIWdV2tjqjgQLQUVecijKmpEMSJV5JHqNcYG7P//VztB726tV+Hu2A9qOSczZ17x5aXOFGsy7pu1jz0yqb/eM04X6v/Em8t9cQZjY9v6aw5JtbUFO1dWbPf7hfKXh4+3W/+KB4ZzMVsul5PmbphrVnJ6/s9KxgvO1k0ZpCUHzPmnldumBOb2AviBpwt70iyl6rZSvyxLVlzB5bkg+WaTLxoxmJX+JclJlJBCnJ3nnKZxfDht7AZ4ZSnwNCO7hGYZoyRPD3kcp1F04Gm/Hi8tL+cfj5/wlyQYTv46hL9SPJ8nG62eoL8X1Ueiz+Mu2x2PxzmOktMhzGNgiBsUlLQQwtHdMUuSJMqOxwzN51GclzxP002DCJQFL88svxAk0fEzCvEcx+xcMJb7DSJ4sXx+ZtnnMakIdrsoSNM0LiAXJRcRSLUuTOG0JNsllxA+dxGlhBW8JCUZSy+KUesBlBGFHGQRGGgQiaQUtGAJBw/MdqsGr85ARJ6Rz12WQRYyElHoJcJoEOX5zHh1OnUOkHOVBZHB3bHYRYSSCEcRRg5Cniz36mrRXOxFGkgEVURASVCAMYJznMQyWKtdL6ItWqFMoiSDVqCVAjg6zOcY8D29wWgy16KBOCeEQ+iiqZmHTzF2ZMe1a88H0xOYYdc+JtVc4xR7AI/oewM45GEKlXQhoAG9DOZAlp2k2DeoZLAJdFPlOeA8B0FWCILwo4JNngSgqOb1v+YWwHAwpCJwAJicOWRPduh5r749xGuuP9Qv48qu2hlc4FjgEQgSeXJrCHF9vD9ikEY4CJBbMahbyosC0peLg2WUkLJM5M66KMry49FI1GZAEPhVkUlqf5EUnBaVA47jIE49WX9fL/d8/EgEPRA20LXqAXvNRQyJIPAQJALLLU2S3mG1vD8YCF0EeGRoVleChoVCKgtSCA0hCRGDSdJTX94+CsbZ6M8+KO0hQkNYPFbb0DUxk85QiCRAKEryU8LYQFekyfuC7iePVFS7uiYmMghnWMstLEbiUc4Yjr9OlOaBP1JflI+PulLupyE0XFeyYSjwBDYkj/HpkBdfhwN2TWm5rFlMkhuGUPQdRdvyohRVXB5CjPPTCTZDPpLezJpeVDqOg7HT6prtWUA4ZUXB8zDGAT59HU7b+r2ovMpygD351erPEGJ5gEV5pGmIYvBiVT8KlFdIvRdC4fqQ1Si4Goz1MAzTVQMPOqJ4vdBBOLixXym8NvX3C9BAMDjyT4IAhUEwbbAXDUfAZecnvrJFg3HWvjgAT99T4AdVfGPdiwcA/wNBk3mmtSoXWq5/R4AHjW43oKLjyMOuf+cAajUhkIxKQ2N0j3c6jW673cv6mv30H0aD3gR/EaGn30WA5F6za2pVi67liyZA/x6PIK7XZpdUEEGW2+aoYhBgPDTcnqjPRhpeCXT4qaPrHYjDn45VSamUbaSBpGgihG71wbT6li3WFYTVgj43agtRstpDH8kt4yZa09JbLV01Wj1LrRuIPjQhRu5Nvq0ZCsS8VgzHnz1bruJ6d5F99t0B6VJSY6l64/efMUiuVz08vSUQrHiq9P078jvrVgSoe+OWe/VgdO/dnelwj0PBTdNJWk/gYOtWBOjpFc1ehb2BN2h/01CarLzB0J2NFbhADILAe1oL/XCgr0L9+xnKKphaimKKa4ViDQfe01qwN8P+6nZq2JtvnyVzHA6fdZSy8MEDQ9f19m8zwoHx+z18b4SBaz+ZClrbcKfD14fW6XRWK+P7DeMfm5HwhQGR9CMAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 9000,
            actualDps: 6585.37,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "猫の日の1993",
      baseHp: 300000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 520000,
            actualAp: 11700,
            actualDps: 8560.98,
            magnification: "130%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "099",
          enemyName: "夏セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 937.5,
            speed: 10,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 96,
            foreswing: 17,
            backswing: 24,
            tba: 40
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 9000,
            actualDps: 2812.5,
            magnification: "300%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "3.3-33.3s",
            delayFrames: "100-1,000f",
            baseHpRatio: "100%",
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageName: "サマータイムブルースリー",
      baseHp: 350000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 1000,
            actualAp: 400,
            actualDps: 800.0,
            magnification: "200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 137500,
            actualAp: 4500,
            actualDps: 5000.0,
            magnification: "250%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 137500,
            actualAp: 4500,
            actualDps: 5000.0,
            magnification: "250%",
            count: "4",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 137500,
            actualAp: 4500,
            actualDps: 5000.0,
            magnification: "250%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 18000,
            actualDps: 13170.74,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 175000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "500%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageId: 3,
      stageName: "夏のジョーさん",
      baseHp: 400000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "053",
          enemyName: "クロサワ監督",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAABAAEBAQEBAQEBAQEEAgIDAwMEBAQFBAQFBAQFBQUFBQUHBAQGBgYIBQUIBgYHBwcJCQkJCQkJCQkNCAgKCgoKCgonAQEsAQEPDw8eFhYaGhlMBgdZAQEcHBwdHR0hHR0fHx4gICAhICAiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYnJyeUAAAwMDAxMTE2NjY2NjY6OjpJSUlhYWFtbW18fHx3iniDj4OZspq/v7/39/f////eEQSUAAAAQHRSTlMABtCZt9j/N/EeUPoWfFoPwv/nKkFn34qs/u3/Tv4o/x3NvvQN2Z4xWrHr/2d0Q4r//cXV5KYaRLiZ47L+6/8Avt53EQAAA/BJREFUWIXtVmtz4joMzYOEJE5InHcwvkDD2zxqoGW7d9v9///qyg4Q2AHCzP22U33opIl0LB0fSSi//6cp3wDfAN8A3wB/EUBlaqQqNy1aj25/uLbRannjrT+brXvbzRMIo80+VlR/MB24F4kMNmVZLspy1hivgudaXW53+/1241evovVgQ3G/jwsyuVNdbes9JvPemBKCcbcn3kTZuBwvsIkLjJHXmEHCTUwXDPdf+2bx4ivuakzgcIpNMJxGjQA9juEwsH5h4nA6feMEF6+vBREIOHAbAfwJNeVpwsJsRwVeUVAiXyyaSVTsyUIEVYbo8amKR0daG3Jw9OERAtNzMqbIJG0/EQ+m2tmiqgPXAJAEJslzAJBFTirWLhEAYPMsgOrNhxa+BMAiJTJ/hoMjRDsVxBFCjgwIKDIePA2gqBmCWMJIJYsKoIxrh/fD4f0hghsI4pnQNMZE1oJZzeL75+fnx+PmnJWiBtAVOcUTWrN4+Pr6+nwM4G5BBoSZMlzWQGndjYfPX7/+bRgPKy6yPlYAfxijw1k0iJMezKzR4efPg/34VqI9JE8Fi6RiAgylhoVQmmdZvt/l3uPm8ucgaXrBYt0jCMEX6t1PwJfzbMOEG5Y5VMJEYZC3tJbnJK38JXTuH25nk+V6umFCCbSWJBm3XdV3xcG+//Fj8Kj+FxiiCwYdRAXCsTtJ4J6rHnx8TB8REM0piACKp5RIDkQaZDHPRG2QxUhVHw9YNR5yTjlcvtBSxSMhtOwo6nT1tt29TJa9+whqNHvbcXEHDK5BSAFi4ToIG67Xmz0TT5TtV/cQ3GzHoXxInXAogIlKoK0Eo7Bd5JgUiHx1P4HlZAie4kwuqRBiIIyDMX4EgP0xeESBG/WWeSkRgASQMcSKNCQAIFBiNE9IdwJbAlwppZyTaswyLpVpYi3Pm+dTe0+rPmbkNFoZNWV/Ii+z4kYAf87NaxNrpl/04Sm1rF5jCWrC8VW87KwCF7Ix8sZFF7mio6/iKTn/gxq3hNqOnW5RXCLwI56gMZCr+p6gfdtvt9uZbl5tFspP8TBiMlU62bcB7ETvprGjXe5GE7PTssRWgDRbibNuKoeC+weO72hdhC1H7YSneFEKyOlEidXJkafGqWTCj1rd4J+69MgLUuFk2LDjri6B8lMKKIvDMOlYZth2O7mBTNQ5AyR5boFHYASgtGsAws+XYkQ5tkKEDCfXDXCvhe3rTmAi3dM1zfanxrWOyPkXA/I8uArLMLJER2aQZEKWfhQ7iRe0kGm1cg1ZQfBHvHlxKZYo07IsI7BMlCeeHkeK2/H0vBUEmmGkIZglDN02+Q180tQwtCBo5brn/AfXnaqT0JicDAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 200000,
            ap: 18763,
            dps: 1432.29,
            speed: 2,
            range: 700,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 393,
            foreswing: 104,
            backswing: 29,
            tba: 145
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 37526,
            actualDps: 2864.58,
            magnification: "200%",
            count: "1",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 365.9,
            magnification: "1000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 22500,
            actualDps: 16463.42,
            magnification: "250%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageId: 4,
      stageName: "YOUNG NYAN",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 7,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 36000,
            actualAp: 20000,
            actualDps: 14634.16,
            magnification: "400%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "099",
          enemyName: "夏セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 937.5,
            speed: 10,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 96,
            foreswing: 17,
            backswing: 24,
            tba: 40
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 15000,
            actualDps: 4687.5,
            magnification: "500%",
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
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
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
            actualHp: 210000,
            actualAp: 3600,
            actualDps: 6750.0,
            magnification: "600%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "38.7-38.7s",
            delayFrames: "1,160-1,160f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 36000,
            actualAp: 20000,
            actualDps: 14634.16,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 27000,
            actualDps: 19756.11,
            magnification: "300%",
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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

export default e1166Data;

