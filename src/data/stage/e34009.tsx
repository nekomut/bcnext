// Stage 34009 Data
import type { StageData } from '../../app/stage/types';

export const e34009Data: StageData = {
  eventId: 34009,
  eventName: "異空行路の先に",
  typeId: 34,
  typeName: "レジェンドストーリー0",
  prefix: "ND",
  mapId: 9,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "自由への上陸地",
      baseHp: 1200000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
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
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "180",
          enemyName: "ギャラクシーニャンダム",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 144444,
            ap: 4444,
            dps: 471.1,
            speed: 2,
            range: 600,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 283,
            foreswing: 104,
            backswing: 29,
            tba: 90
          },
          stageStats: {
            actualHp: 1733328,
            actualAp: 53328,
            actualDps: 5653.2,
            magnification: "1200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
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
            actualHp: 225000,
            actualAp: 6000,
            actualDps: 2812.5,
            magnification: "500%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "63.3-63.3s",
            delayFrames: "1,900-1,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 50,
                power: 150,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
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
            actualHp: 1600000,
            actualAp: 11000,
            actualDps: 7857.14,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "3",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "大いなる小さき一歩",
      baseHp: 1300000,
      width: 5800,
      enemyLimit: 20,
      requiredCost: 210,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "266",
          enemyName: "ヒカル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000000,
            ap: 2500,
            dps: 375.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 200,
            foreswing: 27,
            backswing: 66,
            tba: 87
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 3750,
            actualDps: 562.5,
            magnification: "150%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 650,
                ld_range: [650, 1300]
            },
            "freeze": {
                chance: 100,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
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
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "557",
          enemyName: "悪魔ベヒモッス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgIICw4JDxILERUPGR8RHCMTICgWIy0XJjAcLToeM0EiOkk0OSImP1AoQ1YsSFxRThMwUWgyVW01WnM5YXw+aYZBbYxDcpFFdphIe55MgaVOhKlPh61RirJTjbVXk71ZmcNbm8ZeoMxfoc5go9FhptVjqNdkq9vGqwFnsOFrt+v///+uSDszAAAAQHRSTlMABw8XJS07TltkcHyN7Zuvz974vf/G/dv/5Ov/8f/+//////////////////////////////////////////8A6ssX6gAABNdJREFUWIXtVmtzokoQTUzURFk10SiKwCKLzMDwHJjnZu///1d3EEE0mtTW/XI/pKu0dKDPnD7d0z13//xHu/sG+Ab4Bvi/AHxqvaH2tt4oW02eHj5/9Zo9aGsP5SUlhODE386fe3/n/7SCRHKq/CnDCif319rjX/iPbSyrzZU/QSgOi4LmYDv5DOJ+MOi3kY53rHYnhKEo23tpGuY4hZvxJwBT3dq8acMq1JHN2NGfYlCEKM1JGsUJwf78NomHNWE4dNdaf2i1/oSlUKmQxTQG/h5iEq8HNxFGvmRCsth+DeQJIAMkR3GCKcZZiLMsXd3k8LCp3CgTqbUreBMCAXHhex6kEIYFTbMimt+kMEnqjSkDZizaGPZ5AfZ+GXmgREFOpPd8xffxaTydz4A4IsjEgk0eWLRPCdpn2MfY3/thWa4+1NS9tvVQlDi+aJLHKQzbRMbKC2OSE7j3FUTpjy78e3NAJWPSQW32CeV50ajAMPRDTEURAAUAi+jtAmAKD1VXWrj171hZfVLoA5QVigguI2Sdn61nt67aqwCswJUujOQR9H0AwxD4hX8m4/2qqKVTAOUlAkt//kwPjxmjRR4jhBIikdYFeNrXBOgVBlR4v397rbSMMi4EF9m0CzDDx7JjVswuETj69Stqy5KUFCdJnOKuiprfFJ3wXflRgyxjnX9xECcpAOv71n/oneLGRvflxudiiQspym2bht4mALxBEIHJyg8I56IwHCP8bvfbAJAHefuUX1HhAgB4ALjxftgSkLuwBSDCRl8AkJTKd9VkmmIe+n86ALQw8efuVUVlKBNB09pmzk5HLQDLTfIFAUJRAII0bCpp9DyYoFbEjwDX4KjgLO5U0vgc4ILvjTjyTlfSUFeDorsnTzpFeEamqEvx0Fi06JQF7oT89CIt7ZOm6ix1+JTLp4defzy9CIHw0JKnSpKeJ+uNqSjTPM7bQ0UKw9pu9MWhGsZQdDY1YdNMVR8yMS3JYToCw7R022sDLAzb1BfapQaVOnrSMJWup/pcknLCd4uFsXN1O1Doh3lLjeVicayFSdwBUMfB4rVkMjDUhrT0sIwXlbm27rwLwSoa3HydNhOqK2Ilj6HaA2OlDI28esBjq3QPAEvHMj3PMarK5dv2NN2Nu8JXTcFRu3ABjEQcORn6ojZdV8St6m2+PY2Gp2aaNDo6FoxD28obYjJcLhpbLupSo+sTwMAVZzVCWbCznYCfUEVutQhurXW3KT5aZxocpis7i0pJgmwVxlJfRnX/lbBz0eit6VcnUGFSkmclsg9k1fvb7ohf4Vtn5szEe6LXGacSnM2FSVQT/qKXYc84Jpzh8/H8XKeB8s/6KcWmj4/+1Bp2/e/6u2oa8BCKswNX9+fDkvpiiXW89onSuriq9VaFkoWjhZ3LJnlqhMXVKlUXEjXLOOPELNSEUHeoaPPhgqIFlbgc6ct9gktWGcGxUa1yaHkwCFEShYYnpcChM+9f+t8NdlXRqtz7s5lh2cosY/kyq1YZy5z51HBs23FNB9hv2tVL3luheArxnmt9T83CLMPVPWrNq9U/cPjg/pHvyozxx81rG+0CqCzwZiMdBsqQPRmNVvZOmWtMxsvdwZaDxxs39v5kPpu9vLz8+PH642ivr52f6ks9nc3mk+GF57/Mu503Pbat1AAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 380000,
            ap: 13600,
            dps: 2205.41,
            speed: 5,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 185,
            foreswing: 6,
            backswing: 10,
            tba: 90
          },
          stageStats: {
            actualHp: 760000,
            actualAp: 27200,
            actualDps: 4410.82,
            magnification: "200%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 410,
                omni_range: [-100, 410]
            },
            "shield": {
                hp: 800000
            }
          }
        },
        {
          enemyId: "636",
          enemyName: "デヴィル夫人",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 9500,
            ap: 8000,
            dps: 5853.66,
            speed: 18,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 850,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 57000,
            actualAp: 48000,
            actualDps: 35121.96,
            magnification: "600%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 100,
                distance_start: 200,
                distance_end: 800,
                level: 1
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "586",
          enemyName: "ミッドナイトナカイ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 300000,
            ap: 23000,
            dps: 16829.27,
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
            actualHp: 300000,
            actualAp: 23000,
            actualDps: 16829.27,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 80000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "130.0s",
            spawnTimeFrames: "3,900f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "170.0s",
            spawnTimeFrames: "5,100f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "210.0s",
            spawnTimeFrames: "6,300f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "shield": {
                hp: 15000
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "ビッグバーガーガーデン",
      baseHp: 1450000,
      width: 5600,
      enemyLimit: 20,
      requiredCost: 210,
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
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIEBAQEBAQFBQUFBQUFBQUGBgcGBwcICgsJDAwNERETHBsVHBsXICEZISAYIyIcJiUfMC4iMzEiNTMoPDotQ0AuRkMxRkQ1REMxSEdcTwM8W1ZEWVdZYzRFZmJJb2xPb2hQeHR3dCNagXxcjIaahgxhlo5nn5iRkpO+ogdwrqZ6vLOByL64uLjpxgeI0smM2M2Q39P70gmT5dmX7N/V1dWc9Oef+uyh/u7x8fH+/v7///9pxp3BAAAAQHRSTlMABQwXJy84QEqE28VZZXKIp+yZs//D16fvvOj+3czf/ub//+P//f////7+///9/v///f////////////////8Ab/kakwAABFdJREFUWIXtV2t3ojoUVfBVq2ixWr3qgEBKStqEFlJoknb+/7+6CSDiA53hfr17LRcuydk573Ns/f6PaP1P8Lt1Ex3D6Nw+VY/eFgXzrtZYXpsSwdG90Zihu0mFiHe/+k0JRj5LE/TyNu129HYD+fYEB7vn54/Pl1+/pnoDAn1F8e7tU+Lj2WiiQc9lnOw+JMGb2ciP40AI5rx9ShuMJvLaUyhEunt73r00I+hsUs4TyyMxfLxr4oIR5EJwmnJBl4MG8ioNC3C/iQYDW95dIFr0/lq+MysVkCqg2V8WZbs/Q/xAIBic9//Yiram6eMNqcpLBmIbf5TNWs8wV6v5A6RcHFHwJFgNNEmuXdNEHz25OKRJTAIfJeIYPHKn09XqyajtMNJwELH9hRjzU4YUWiSJsWv2LmrRHiwQE1fBiRMKzshmfEmJ/oKc3nmBASjLInt8rkNnflteMgSBOkXtk+TWuqNK4HnxuYTEi9UjWlUzq92b2kvnkLkijdJaHRDKyPHk4Ib2YEtiKyyPMOSAqJYg9BQ5T+1DefS2kcB+GQAGnZDVuoOnVk5OJns/6rJsGNgrwAV2aHmah2ee5QDlRNvCC+0xYCJySqNTp1KGdP0YnhAI5POMNBgVCqykWzE81L5X8WayfjzzRujlBkZmZoNmBJxzH5fvcVBR+oIJgubaShv0zABXXsi88h4O8anECVInzk+6XUnQ3YbSosQpS495Z0YfgzOnOIFGavwhVbaxx5T/ecZPr8qrMCgvy2uJoQZ4rKqDAKmFtDalgnr1SVgQZEZKR0Zmq20ECZA+wFCSQOVAGYT6JCoQwJAJEolk1dLnCDksy+/sE6AySFeAPT8WBIl02+rdT02bycEBaQJwZh3xbhY18QIiIp8zt6XpWlfOcIEsy1kDTCxMsX+TIHQQ4rGDg4VKpK4r/clT2Ucx9CzLWqM6uUOuWsAC9r1pDAqCwxGWxFF6QQP5Ah+CEz8O70bd/daUaVCL7BUj0AfrQ4nRtW32yymT+aDe3FD1B+/968s/ZDu1vt7tcuvq2NdaOQUyYP73z8/PlwX2B+laEpSNvbO9mnkERPD9R+F1HRZ+pOtNZbTo29MRduwE4qxzgu9XUFQJXQwqc0VbXS8eHgHv/TtnKLohnVfntPZU34D3Snj+q4TnBEneimZVArnP3iCQJR4GPsTOftpi82iuyTjeZFDlXzZuDsZHU+2GFw+GgLwVinh7vC9p5o0elonFaD+sUnC6eBv78rmSkdhDST5yGTRPd6V+Vg2cJMcUvPLk/r4SUjg527X0Lc1tJJVC5FR9ZzRhGTskGREL3Qt/oIpA8hhakMQ0SRIah1g1ep4gzwI+DAJHDRMWgdnFbbFfBDLdmEvgSTjr2WSWs4aLu6UPYQAAwe5sfHlV1FdhqhBvRwsSxXEUuUbPsKn6DU8Hi1g+qb+Y9Os2Tf1u8Y/Ecjm8Hz4sFR6Gw/Lb/XApX24W0/H5uvwv+8U5kstTgwAAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 28675,
            actualDps: 4600.25,
            magnification: "2500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 40000
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "174",
          enemyName: "カヲルさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMEBQUFBgYFCAkICQoHCwkKDA0LDg4UHBwVHR8WHx8XJCMYJCIbKigdKikfLi0iMTEkOTcmODctQ0ArRkAtRkMyTEkzTUkzTks0Tkw7Wlc/X1xCZGJCZmJLcW1Mc3BVgXtWgn1ckodekIlfko1mmpRtqKFup6Fzsap5ubJ6u7R/w7uCyMCE0cOI0siM2M+Q39SU5dqX69+b8eSe9+mg++2h/u5J7TB6AAAAQHRSTlMAAwuouNnpRlXKkR4VKXoyPExjWJu82/5ndKmB/kiTuMzeo67/uvH/0//aXP/m///w//73//7n/v7/////////nLgVgwAABH1JREFUWIXtV1l7qkgQDdxkYgIG0WSUi2MSgbAM0Gw90Kv//19NI0FR2mzzOvXi8lGnT22ni6urb5luTJXveZyYYjpJMP85gjKLEEdb9afu2sJDO17aP2OgGnaQFbDOttqXTlNUVR2cpBibqCqjrW0v9M+d9alpbxzH2fQPK5oVQRjZhqoM6SuSWBR1uth4UVYjQmiTbWftM6rplE2yMU6Tpy9sa3oe58xyorIhfNcZbyJ7quhWgqBnnrorUydryu0ppLlNIO6dOwRaBva2pOV22D6Cpml5kO+IN4ScCUi2OzPOq7imma0PvFuaWVEh2iSrAft5hEbuAoBUhOevi56/6AUnKesy8jZbbzsIS1klhI/9W4gdKuqky6airbysgYmzEvVQ9UFWFDOicv8dZ4hx1gSmcqWvvJLUkT1TR/XTnhu5e8dBGA7mfwl3LKopq/48vXD+EQVHIshRNQ8E0EXHAzIKm382mnyQJqGkAJ0xTPA+vXyXR39fmAP1sfqAO0NVDiEVafAuzZH2gj+Mn+EKQLLj2eqCEkwDdpZDzk//4JQRzklwPjzvZiQjf3lO4EauZmY2Io2GkIIOQ3nFdiwypACr8jxxtB7GwBmuq9gFDS8XcoBREVgxTCsnsEIN8GNcmp8BvJ/LK3CkwClsxKTUFUDJ7UUAzguQN4eJQsPW4q3tipQRX36p7BnQMM/jEIiua0EIOFSW7xEYK1zSrOdSBlbLgMWNyDWI81bURNTHCDCsG5iGvi8A5CFY+xyAioQ5walftGU7CiutIWYMIyJkIZEn0Ybtk3kBl24IUBGSAftTg/JrrWNQ5MBNobtO+yYiZIRA5c0sOlE8CWOQxhS7S9RXP6cjhNKSUdCC9iwcFlUh8uD3bqIZBghtakVCgpkEQFkktH0+rBkEbtz0bqxOB0pF97LZOLLLWbUykXmeunWehut1SHunAhwZgHz/IQ9Cd3AbdOgC0Uy+X/deOO37iRPxLxUKn0kBFKutJGf5OmwaQinvgyj65uYsBSj182Qj3y+6Qog8rF1QYxiT/tzDSHBGKCH54wVd1IIubl67y+V6uRzfE7yVmTx9MeW6qNjvosJpBUI/dOm5O8d5kaax/3SBwtQ7Xm4cAxcOnFs2FII0dF1//XBBmRXDq/mhbRhMD4KyV1gGwjAUekHh86XLQTHEJtLPDz+mX4hLIeQhTGE7jownslbsTLeC8hD6IIkCAKV5KwjC0kAuzB2JqRVAfj5AnLWCTgip/PV6eTf/cNEV+2QyHuK63vej6ITq6dNdXexK+ByBtWq0/5Z9YVNXzECyLLCuKPJJGiM0IzWru4sGvXyQwiPC7CWnZxC02f/k4CsUBMLTGzwtKH/fUr4UQ7sPPjy9pUWNsFi52eCKkSuaHGLy8Pj79/PL6+vbW1y/DzVNrG+87rSvHKo2NW4n93+GEFGKYbT62euSakzsrec5tmzH/A6d//LC+L993cRriCZKb8xmt0ebzQxjOtX0r1RBn9z/ur6+u7u5ufnjYDc3d3fX17/uJ/I76V98FqPpu5ZsVwAAAABJRU5ErkJggg==",
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
            actualHp: 711104,
            actualAp: 21328,
            actualDps: 9694.56,
            magnification: "1600%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "172",
          enemyName: "デカメガネル",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 20000,
            ap: 800,
            dps: 750.0,
            speed: 18,
            range: 249,
            rangeType: "単体",
            kbLevel: 7,
            money: 250,
            freq: 32,
            foreswing: 9,
            backswing: 6,
            tba: 12
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 19200,
            actualDps: 18000.0,
            magnification: "2400%",
            count: "3",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 25,
                power: 300,
                duration_f: 20,
                duration_s: 0.67
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "365",
          enemyName: "キャプテン・モグー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEBAQJCQkMDAwODg0PDw8WFRUYGBgaGhsaGhoaGhoeHh4fHx8iIiIpKSguLi5NMwE3ODg4ODg9NzhDQEBCRUVERUdGSUn/AABNUlJQWVhYWFhgYGBoZ2hkbW2tVGSkWmx1dXWtUqp9fHxkioOpanyDhIaEhISjkCSKiorWaZRroJjdaZuSkpHga5fCiZScnJvIrQ59t67/f4e1tbaJz8PvzAiQ4dO90s+Y7+Gg/OzN5+Lo6erw9/b+/v7///+wjuAlAAAAQHRSTlMACiY9GE4xv2GL1artd0T/DrikYorI/tsB7P+5/OT/ncH9A//+/u7///8Q/DH/WP7///8C//7//v/+/v////8AApUKPwAABBNJREFUWIXtVWF3ojgULaAUrcqICmsM2aZRYmQyzbBhAIHu//9X+4K2a6ezU7Vf9kPv8RzQ5N7cd18Sb/7+IG4+BT4FPgX+LwLv4eGvd6f8hrx7eNjtPiBwszP4kMDXb193H6lh9w2w+/J+Ur+EZffn9wbzL9cJOLdxsnkExO5V/N6dzyQIbDYL949rBLyl7+PNZhP/ObmqBMub3g25fnyMZr1r+FCCd7cUkjIcT71rJOxBrJu2LbUQOgnsi/nuVDVPBg3fSsWCSz3YgW47fsm3P35sdeJdxrfG6sAHge8gUNeryyzYixrIrRGpt9+327JN+hcJ9BMTQGMEWsG00iUfWGfbdx3LU+UhwrYpOSEo9P2hc2M5/XNU3EXkzHRTN09trSlQjxhYzhBUzhFYjseiaRtNDmxEuMAERf3BaHjOfrCcwTBCstUdeU3WZd3WiqNwEY3ODKK3YAKX3A9FXtcV8JsMdLIiX5xTgRFYMUkE90nT1lm+b5osr6r9fp+Oz+yEFVBBCfeRLsu8rGud7fdVUeWrc0+ENcacMemHGVhPM1g/TwlJ4/P3kn0XYq18VO3zLKuqjCCEETqrBUc4Q6SQEajSvFr7YYgI8UcX7Ob+yPRwDcFVVYrWWV5U6ej2zB50Dm5DhNbFft9JdI8iuoB/05vnR94LqrMztHqu48VZsf8J6cDzPPf9a8EeT6N4DbmnP1lYj3CaJqt3LlirP13nhllk5LVC0SlWRRI4v5Gw+lH+TCvS7FQgR8dM02jl/deWtrwoP6Gkrx0cBTIsk9mvyO5sNhiFWVU8x1cQ6P+/XSDZwQDXVN+//bvtzWNBkdbEHNyqMMwUE/N+5BfLpXGXk/JJS/XmlrdmiZJYPzWEa0UIXZM8J0xSDBJZDiciZcslWadZisq2ITiYnXoA9+OFFAw3rcZwFYpQ1xpUhOBcSS4YEVIqwRmcKACrOaLJanKy+n2SCMkZqZXP2laHom2VjxkXR2DKBXzhjFL4wMESUqmX26HnRUpJKTgNMQau8n0BIphSwoAMtzqB08jADTWeMKEhAjWZjA/b0qQHbPAJ8wTicI8gXCKilGKIUs4ZZ4IhBuNIwkISFGlnLo67MqzJKoYfGBZmFMNiUoY4NGtICmUxeJrfcZeDAdjn4BgeatVF2XNg+4dESTMK0SvJQtLNFN16phBxqOcZSnazVRIcorTsgEp5GOkmdJkdlhOdXVgccy5eoQti/tyIVVfXgchfZhy/M0YxRiBw1Dg8oOxo7r5shfF0Cd2CzNhL+/gBNAqmw2EURUsTKaU0htc4jqfB2D09VXbfC1arxfRuuogxJibXyGAR9C3LdhzX6c+ni2Awnk1c25lM3J715lBaPYDVsx1vPAimwcxxXcexrdPxN6R/AAWtwIoGV1/TAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 16000,
            ap: 222,
            dps: 37.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 180,
            foreswing: 61,
            backswing: 45,
            tba: 60
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 5550,
            actualDps: 925.0,
            magnification: "2500%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "barrier": {
                hp: 2500
            },
            "warp": {
                chance: 30,
                distance: 250,
                duration_f: 40,
                duration_s: 1.33
            }
          }
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
            actualHp: 600000,
            actualAp: 39996,
            actualDps: 6629.16,
            magnification: "1200%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 3000000,
            actualAp: 35552,
            actualDps: 34405.16,
            magnification: "400%",
            count: "1",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 5,
                level: 1
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "206.7s",
            spawnTimeFrames: "6,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "240.0s",
            spawnTimeFrames: "7,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "大草原の小さな入り江",
      baseHp: 1100000,
      width: 5100,
      enemyLimit: 10,
      requiredCost: 210,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "36.7-43.3s",
            delayFrames: "1,100-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "031",
          enemyName: "師匠",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMEBAQGBgYGBgYICAgICAgICAgMDAwNDQ0PDw8TExMUFBQWFhYYGBgYGBgbGxshISEiIiIjIyMpKSkqKiorKyssLCw2NjY4ODg6Ojo9PT1CQkJKSkpQUFBRUVFWVlZhYWFnZ2d1dXV3d3eAgICKioqLi4uVlZWdnZ2oqKi3t7fCwsLKysrV1dXc3Nzj4+Po6Oju7u719fX5+fn8/Pz////mL9pFAAAAQHRSTlMABAgM4x1+khMo1ThCyTBRWWKucYJ7p5fBiZ+8yqzbte/IvuDU+tH+797q/v/v//b///3//v//////////////LaXl6QAABG9JREFUWIWdVmtjojoQXeDiwsqtb63WR7WKhfAwJOGd8P//1Qa1KyCg7XyhWnOYOXPmTH79agmlr6kDte0X7SEO1svpx0L+MYC6Q+CAjd6PAXpmZMHEHgk/PC9M3Ahg5k01VRF/BDB34IFk/vvHdjHS5G9jCPLsAI6IxRbysWtsJl3lW+dFbWqiyLMiSlBKaURcfaZ9A0Lqb2FEs8BygiSiLGOMBp4+f3mWUKmv45RlGQ1JwJ85QMbSwN31nktC6u8xf+0tUkzY+WFMntGV2N+j0vksBlaaP6lvz9SHZQjdN5iUzmc0CC5fsNBdPSRCXVXPF6HihwjyzG0+f0aYtk6oNLKjwu8vDcifNwS7bUKFnhGU3k+JnzIeNA7iK1Bkz5u72d1hWjzPKAIOwshzzQ8Tc23lEKE5kpoIWMC0UnTqO+9vi1mn1x2sDBjkEMw3+vVEKnM7vqON+dsXSRQEPl/aXL9A4N1LLYEDM6whnmz+lSxxCJerO3VndQRqOqlrYKAXXid1x1vb572sI2CFaM35LLEHxYqll9HO3Go1CQzMOEBJhYC8Ed6i3DZR7Ws1DiVvcOKcKgBx/pmsn9kOQt+MfRBU0g8xR4iNmoTvQlmh9HRKyyyy1ENpRt1nvF0zogiQ+xYAnzE0a1LeLcSRmxLwT0ZnH8vODDpx5m8eG5G8IRQWKqDhVdP5egr1WuGVomtEcaECRrF/NSEfwMB8yKIwsNOw2ANGnGtHKQGO2TA8t5DmHvVBcZJyRr+M0Dn8frTa5BVhyCqMMqMQflkzjU9L7UEK8i5gnlMyc2LdVJl4mwc0qnrIYBnAB4XZTtwHVxXNjKlzYkWAkqy4lbYYYe6lZkItr6Tj1EFFwNDotdAgDFxKLVQE4CyeivbA8KZlJsWxyyoAXAlWySD5dam5l9ICsbyEEkJYHm5Gds0pKBucUQeWAFhilUhgidnMgrz1syqJGRdGcUkw6o4ba1D3Ac+46sklJXAEtGi0hZd9xJVcXSoxwFkRE68apaDuQxaGlQTyRpYWXQuAvCQJvt9KuZ89CfAKvTtH5pYKuZ99QXBrXDXMg6B0Xw+A0Pu9FgJ0K4Ke1oN6FuXO8hMGdWuREX7fvv7J0U56vRKkwQdJ8xzvAVJ0pYFlKTwiMK1nQRl/4pjWAPAJgMA/z1SK3t9Ws36DlOTh0YIeur9d5AhHFKZJCA9DVVGatCzNIYYQRjUAWXg8AgAOwFm1rCdxDIsVVIwFwsP7H+A2C5kDTNybBcflawZDAJzc4XTdtmHFsXcBYLFnmi72w5AgD19sOQBWFOj9XpurKgt8eVtgL3q9yWar69u36cbmDeD9CyJ+q5q0Lmh5559LD8yJLPwSZVVVZVlRR7oXXSvzd6223jXOk5S6Ze+Wugv7qtCkdT2KfLWeq71b4/LEuNx9qTtrWY/KzKVnvheKUAllsEcJ/ydFby2LhQsREd/Hx2Gn0/l9i04ew3fLw9j7bLvmKKPh63K9Xv/J479b5B//z2P5OhzVevpfN9iiR9TF8T8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 557,
            dps: 696.25,
            speed: 4,
            range: 451,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 11140,
            actualDps: 13925.0,
            magnification: "2000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "93.3-93.3s",
            delayFrames: "2,800-2,800f",
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
            actualHp: 160000,
            actualAp: 10000,
            actualDps: 8333.2,
            magnification: "4000%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
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
            actualHp: 400000,
            actualAp: 10548,
            actualDps: 6732.76,
            magnification: "400%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "364",
          enemyName: "巨匠",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 12800,
            ap: 149,
            dps: 186.25,
            speed: 4,
            range: 451,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 3725,
            actualDps: 4656.25,
            magnification: "2500%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 20,
                distance: 500,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
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
            actualHp: 540000,
            actualAp: 27282,
            actualDps: 19962.42,
            magnification: "600%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "2",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "バブリー感ドリーム",
      baseHp: 1200000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 180,
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
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "638",
          enemyName: "ミニホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 444444,
            ap: 20000,
            dps: 120000.0,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1111,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 888888,
            actualAp: 40000,
            actualDps: 240000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "512",
          enemyName: "ミニアンデッドサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQECAgMEBAUIBgkTDRkbDiUqGTQwID09IUxMKV9UN2pVN2poR4BwQ5FcWF+ET652dXaVXsCha8umZ9uzceuanZfAd/3Tgv/mjv+8wbXa2dju8O3///////83ZLLLAAAAIHRSTlMAI03/jtkB/v0G/v8A/wP/+P/+/wD///////////8A//rpUJ0AAAZQSURBVFiF7Vdre+ssDoy5GAVKMaZgsJP1//+X7wg7bdNtT8/ufl16y9NEgzQaXXz51/94Lv8HAMDl1zMMx99RaCO+vPc3AGJa1Pli391/AzDvur/Qt/3+1YVfAUb8DIqtlF72/bb54a8BELF3Sgmh8EsRzPnMzy780QMlQ2vFmvt+m29svC37pv+TEAZt6xqm4+r7bOCKeo7gNw4G6Up0fP190uLy+vrV/geAzlz/qEAUjnD/xK6/Tduk1O8A41UZ8o60EqOi7BHD3Vk16HGAvRHjX3ggNPiryWsQWWhajFutIsJ7KnrxZ4Chp01omVpbq5OUszUu1Spl0gzQ9B8ABoXkhxhDcFK6XNoaZcilppBXL3NSFx3WqH4CGJUJuTY4X2AUXUi5rimWlGKutYBQK3SqzQ7fAwza17XVivtwcs2ZDVtxRNaW2pxfkzS5rEl9CzCYvMK61IoIQiw5VdwNJUmywfi1pQAibMEHaPgGYCBwVgufnFIqHavlmPh+JBWup9zIl5qTV98A0Lp2a1ybMyhALKCQjJEWAIEk+dxWDirn2BMxXq9XAIz9XJQPRmsJBYE6uFASwcxYhy9rXQAR0oWQSkyllQ7w+vb2BoCXfq5aDEcepZQWGKDLWWk9jB17ACAvpZE+htSqGT4Arv0c8hwHBQ9iiDkbwyYEc37lPTnXnZFQSe0A4wlwxDJ2BM1hNj7J2H5AAe4la6QxxK5YywD6Mozj2wMACC/d3pR1RR7AYcsPAPlx4Al8oJhaVkKz1cvLIwtsP+qcPUnTGUD4jt2Xnw+HYWRsLUpSo9IfaUQarqhcpXGN50SBSPj9uP8dxvA/bVmdjGKw9EkH19fXV4EmaFEJSL+Xnjk/jpuXZZlOEBBrUjM1aFPdZyHBg4smP4VaWnIIhE737e1siYvrPoBWa1FYBFWOB8DR9kFBiMtGEKDh+M1h77vxxig3cxJBMgQPyZ4hCLvMTAcKvXqXmSHHyjs+zZYz9Gw3dPXDHqmQoSbOZQfQ933H8BN+hXpNbtUd6eoAPE28NCEYfjkdqbSWCL2mFzUA1NYvQclIOS2oNmtYvvRwYDZ+2bbZmhu7wO8hO7aizB8A/iBpWxZA3W20nKqDQssOmHmfpn3Cn51ONUmE23pTAADtn85985EQJtGDwrtzy+7tvphpv1PPA9SUUjs648kB3JzmBf7epEcHehcOTwSPseo9PjLj3VNXhL4hhxNAmMkL4RJUDJ4Wu9ZomevuATAn47f7bXFmOdKAAAit06qPjoQppmxecfW8OSQINCKR3V1eCYCWZ2cQztzT6G1a62n/UKLaoKCgtSHYp17KvgvBIr4NMjCGozGdQ2dzIeR9+AQgpikFPWi4llHu3QP/YAEqnuee617S6G1BamwfT01V5YweAS2hG+aWuGYOKcrl/sjQfGjTMscUvXoCEB7CFgFitNBi89yEbE+lO9KDQDgitDYZUsTE0J85GLFJoKBUasW4mtGUQk/3exugU5gefZlSwbgicdF66ABHW+97GA/QmAIGo2fBhXeEE6f3d4PBvyIAwr40XHpbf8U3t2WRMMIz2nYCALfy3orPXgb1wH/bhxwnESW0zZM658Lr65WJiFFTPQCk41GAEzwz73yHdCywmCQIVFyod/0YLN2D0ZKwjQdjrhhDphc/TycuYO+5m3GbMbrHywCb+gBgKrW6WHSkjEwWZ7AdIWzqLcQecwmSiuiXs0LKoVG0kSeAEZqm2mc6eCwYL4EMS58r2HG/hntQ4bYZc+zNYvjMwcjTQWNyZoxQH3m6lxg5pZIIfbJ181yCDZWLxI5i888hcGgRQ95RAwgvCzEiKxntgXxbM/YObA1rdnLuS7Na1BOJXZIWHoDpNfm+YmDMkV3X/gr/4LEZzAx9byxl8c7By/vyiBgyRlReDYSN/STliL0IEDk6i8HtjeTC2unfd6TTBYdNCtJG6Ojw2JVYFNpGcFogKjWIo4e64QeAxyapMV7XAgSsK4b3Tl5YqL+zcfc9nxu+W3VVtN0VpR3aQ+ZcsN0gjhbCy+gdGvwpBEYw5xanqKyNufTPK7ryy2PR+37ZFo91etDhWD3dM8IgHovirw9dQvXl9xhD35wfAPqDllIaX6qvSChGPD18fVz5AwDvKu9HS40jtfr62MoA/wBsL7jm72027gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 333333,
            ap: 333,
            dps: 1998.0,
            speed: 14,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 333333,
            actualAp: 333,
            actualDps: 1998.0,
            magnification: "100%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1250
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
          enemyId: "443",
          enemyName: "ミニスターサイクロン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 44444,
            ap: 666,
            dps: 3996.0,
            speed: 14,
            range: 50,
            rangeType: "範囲",
            kbLevel: 2,
            money: 333,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 533328,
            actualAp: 7992,
            actualDps: 47952.0,
            magnification: "1200%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 150,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "638",
          enemyName: "ミニホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 444444,
            ap: 20000,
            dps: 120000.0,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1111,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 888888,
            actualAp: 40000,
            actualDps: 240000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "グレートプレーリー港",
      baseHp: 1500000,
      width: 4800,
      enemyLimit: 10,
      requiredCost: 250,
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
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEDAwMDAwMHBwcmEAEYFgwbGx8fHh0tLCo6OjtKSklbWlqWYxRrammdYw96dGq7bBd/f37Bfx+UkovJjifQmS2ko5zWoS3erjLcvBDcvA/WsV+1s7LhwBThwBrjwhvnvjjmxiXlxy7iwWnoyjfExMTuzDnrzkPny2zv0k/RzMfu12f/4Q703j7z3mzc2tn67Wjm5ub87pbv7+/+/cv5+fn///+QzGd4AAAAQHRSTlMAFTtPaYH+J6/nl87BLZr85P76/v8////+////////////ECf//z5qpf+6gP+n//3B/+D//Q3//v//////////F3dISgAABHRJREFUWIXNlmt7qjoQhfECKrA3QnIQMRKoUGtrUYtbQJH8/391JmDr5bglfjvrsZZC581kkcxEkv6ul9nstdJs9vLg3+5r9vH5/v7+Vguu3j8/Zs+Er9PV25yPXAkymb+t0rU4Yn5g2/ll3i+z+dfxMBeJbfVa8P26TtPtdvv1tQZ9fcFlmq7nf5rDe5ppWZr6S5L+vM4/Pj/XtT4/Pl6r/Lv6UGs/AugxAxFD79172lHcgmX6I4BMWaXE6N95aO75oztPLlMgNYGRwW0SMub3S/PhFCBNw6FxnMFInNBqtytTQV2IT6htNMRL7YFiIsuFsWJN1pDt2GioAqpnMla42PxPYjfq2uxHGJ0uEqy35Pj0h/WYIFeAgrvFMlx+swqkwK2MQ3DncQryECNk1lZiek6HGAWLTcMcyg0eSK2BRYs6yMVnAMMm27NIawqv3S4RYWXCKLoAMMtGMaNNLwHeoxXZilUyB7PEvgQkmCh2kwNc7a6GWImVq2gu27V6zQmAegayTbzPyhtAZP4WCYflXMR2dhNcAq0ctoTiO+5t7iCHLwEkBuhfj+5WPMpv2mIOoOuxDePbQ0UM0CXXgP3+dEGwGKB/699ZYh4M74VS7CaseFjMvtW6tKBMIhDMgSoKZW5XBNB2zuHUpTF1HW6CZbG90hWZQufsYVmUbB9BhSMZRSQ25Y4sQOjS8wwi5nJcQRS8R6beknpPAlCcmThKCqgmhiG4D64AtsNKgrDt2gYRc/AGQOuKlEWWzVy511CPT6pM3J8Wk2kRN4mzMCS2QyhuLIcVoGoJVg1wLUYcgB3zFegQDQXWcq9KG53KEUL0cOTxvh94QX5oaAqVqsEzI6kAseLv0mO+WwVACBZ5KrCa9aqmU6XehLa5yw95uvT95cJfrXLS/DLkqJq9YVZGlsYoP2xXm02+CzfwyVHjJNp8+pHJiFIRiLnb5ctFvtvAOWcZ5NvHxwOuIdRP7PJZcB8KY7RawYEJPpvQDxZHu3E585KEcbkHAiyqxDRGi2Waw/B+GHp+GjW2lha8h0KB3gbNBbsmGkFc6C8DbqM39cPmTaFCCY+MrEicwFAwHq2ScOp74SYIfX+7OFiNgKouRxbKLLqzRqPJ1IPUIYkw9NPjMRbYlmp92MO2tfHG3mTiex4sI9+bBDkr7eZ4qWV+VxR7NR6PJ543DRb+eAKMA/1HAPBzUkoGJJiAptMAfsOPTwXrSh+zfcLigaRujhsAAAKSmI7TZgfrDIyIOdDSkCw5bAMu+tyGyXhHBM4XIJm/BsqnQfq/EMzchwS8ibdwVLHx7VMx4Ri1N5xOKx98H4nVxXZ1pmZIqfY1FFP190liRVHSSJTBNtLVCGpjQrFQS76QTGhGaJHJPbeEnhTR4bMAM4spjcDvYUIiUtjPAmAnuAkpIEyF3kyzSKiYXwFoFsexygv0nkKHfhYgtTXoBRavO/2YuNbT8aCOOqxXnK4LHQn+T2rLsqr2+7qu/UjX+31VlWWx5dTpawPljgZa/2/b8F+/vQXDW/SPpwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "knockback": {
                chance: 50
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "513",
          enemyName: "天使ドーヴエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQEBAQECAgIDAwMFBQUcHBwfHx86MAc0NDRUVFRyYQpxcXGdhw2CgoKZmZmsrKzYtwbdvA3dvhLjwxu+vr7mxyvyzxTQ0NDx1lv/3hXe3t7544jy8fD////////Df+ZLAAAAIHRSTlMAMfpsupL+tADU8wn+AP///w02AFv/qgD/8gD///8A/1c6UJIAAAPUSURBVFiFnZaLdqMgEIZBRAuZAklDQsOyvP9b7g/marTSndMmR3Q+fuYW2d+rMdjH+WvRDnd7Wrz5/QzYH46nuR33+2bA4fT9DY/jTcDxCB6WDmuAy2z/75xO+2K3BdjhVBbXADMJx+8/f4oGiKh2Kvtj6biigO3mhH05xMxOh9UYFMJbCorqenpE4ni4n2YF8K5hsst+3F0ul/3XY4MVwCLhfPlkndh97djH5/m8AVg4xeW8Y3wQuNdzpPqyAWBF64vtPxgTWjJQOO7vL1XFOoDtPl9sV9ZG0+PDFQD7xKHO5x8AS6bdwBhlMV19wH4H4MZrxvwNUOx3AOG8YSIH/r8AFa2TNuunpVYAhyEE0RqVs/wtgI9knTNaqGCVdgQUF4I3A6TJk7nBAOQsSMZ7p0UbQIYcYiqARJqch5ZB12srWgDcZRuuErK3ZK11AKaCUC2AMTt/94eA24UHQjcBkr352yFZO6nHRU666QjyumdKkUzI+Msp5iKrMYicJkCI3mbjUo6GkIFB961p5MqUTaPLxkcUhNUGgfRO1UpoqQMudcwBGUhW3eMJMx3GS2MpC211kY3IkbkThmHoWwBi1EIopL9GA9XkrgDq9NASA0qBIMDX/AWXA5G7SWhRIGP28EPsjMtOcEnBGbLeezM2xUDnkBBDF4K21E0RQT+Q7tqywD2qNiANKaGMnKrDgI9aydrP2wBh4RmLdyptGbx8ud0SAzRfjjHFepKYjfglgGllPToAKgomB7kBEHKUT2MX7Rj1QIFKO5RgmI0j9OjeoB6EPpbqMXqwyD5OkcefARhgpX+vT4mR4rXswCBDyRn+M0BnR2Ya/Wgil58tWhrFq/8bAFk3GFy551LZmOeWBGObAKKQ9ZJ3AcgtQClcMtouebcBBCIYF3evNm4CmCQf0pp/3FZQcif9GkDN/ZdLWbwqSPdL85aEZcBYn77/BllMQVfCars3/2WAnvzourMDoIxDo98isAKY5q7vULsGjQgFAXNRG88bAUNNo+lsxOAbpDDZjlKobBsBvAJcR7e4UW1hnU0jQBVHEuXLj/zuqmaTYBWAMY6BUHNJ4hpUqlxqAnBbdePF5D5WdO1u9fJ6twrgOkc4InDmnjRdK7ANIDBQZHmryPSImCoATk0Aqv5MPjcuXIuCsSkG03ERwfgQwKfF13fkNcB1Gx58/5jtMtsCCKYbN0Yank16wLsLfs8sqV5Kif++j6bHNwrTDHMR74CMp/pOR690dzNnrem6AXe6XoqXwfwK6Ds0kB66uSE1+nVFrCngokju+zfGZOUkgi8o+Ad4ofFsx0cqbAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1800000,
            ap: 23000,
            dps: 16428.57,
            speed: 8,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 23000,
            actualDps: 16428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "surge": {
                chance: 33,
                distance_start: 150,
                distance_end: 350,
                level: 3
            }
          }
        },
        {
          enemyId: "680",
          enemyName: "天使メガミエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 650000,
            ap: 5500,
            dps: 1269.23,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 130,
            foreswing: 11,
            backswing: 9,
            tba: 60
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 5500,
            actualDps: 1269.23,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 420,
                ld_range: [420, 770]
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEDAwMDAwMHBwcmEAEYFgwbGx8fHh0tLCo6OjtKSklbWlqWYxRrammdYw96dGq7bBd/f37Bfx+UkovJjifQmS2ko5zWoS3erjLcvBDcvA/WsV+1s7LhwBThwBrjwhvnvjjmxiXlxy7iwWnoyjfExMTuzDnrzkPny2zv0k/RzMfu12f/4Q703j7z3mzc2tn67Wjm5ub87pbv7+/+/cv5+fn///+QzGd4AAAAQHRSTlMAFTtPaYH+J6/nl87BLZr85P76/v8////+////////////ECf//z5qpf+6gP+n//3B/+D//Q3//v//////////F3dISgAABHRJREFUWIXNlmt7qjoQhfECKrA3QnIQMRKoUGtrUYtbQJH8/391JmDr5bglfjvrsZZC581kkcxEkv6ul9nstdJs9vLg3+5r9vH5/v7+Vguu3j8/Zs+Er9PV25yPXAkymb+t0rU4Yn5g2/ll3i+z+dfxMBeJbfVa8P26TtPtdvv1tQZ9fcFlmq7nf5rDe5ppWZr6S5L+vM4/Pj/XtT4/Pl6r/Lv6UGs/AugxAxFD79172lHcgmX6I4BMWaXE6N95aO75oztPLlMgNYGRwW0SMub3S/PhFCBNw6FxnMFInNBqtytTQV2IT6htNMRL7YFiIsuFsWJN1pDt2GioAqpnMla42PxPYjfq2uxHGJ0uEqy35Pj0h/WYIFeAgrvFMlx+swqkwK2MQ3DncQryECNk1lZiek6HGAWLTcMcyg0eSK2BRYs6yMVnAMMm27NIawqv3S4RYWXCKLoAMMtGMaNNLwHeoxXZilUyB7PEvgQkmCh2kwNc7a6GWImVq2gu27V6zQmAegayTbzPyhtAZP4WCYflXMR2dhNcAq0ctoTiO+5t7iCHLwEkBuhfj+5WPMpv2mIOoOuxDePbQ0UM0CXXgP3+dEGwGKB/699ZYh4M74VS7CaseFjMvtW6tKBMIhDMgSoKZW5XBNB2zuHUpTF1HW6CZbG90hWZQufsYVmUbB9BhSMZRSQ25Y4sQOjS8wwi5nJcQRS8R6beknpPAlCcmThKCqgmhiG4D64AtsNKgrDt2gYRc/AGQOuKlEWWzVy511CPT6pM3J8Wk2kRN4mzMCS2QyhuLIcVoGoJVg1wLUYcgB3zFegQDQXWcq9KG53KEUL0cOTxvh94QX5oaAqVqsEzI6kAseLv0mO+WwVACBZ5KrCa9aqmU6XehLa5yw95uvT95cJfrXLS/DLkqJq9YVZGlsYoP2xXm02+CzfwyVHjJNp8+pHJiFIRiLnb5ctFvtvAOWcZ5NvHxwOuIdRP7PJZcB8KY7RawYEJPpvQDxZHu3E585KEcbkHAiyqxDRGi2Waw/B+GHp+GjW2lha8h0KB3gbNBbsmGkFc6C8DbqM39cPmTaFCCY+MrEicwFAwHq2ScOp74SYIfX+7OFiNgKouRxbKLLqzRqPJ1IPUIYkw9NPjMRbYlmp92MO2tfHG3mTiex4sI9+bBDkr7eZ4qWV+VxR7NR6PJ543DRb+eAKMA/1HAPBzUkoGJJiAptMAfsOPTwXrSh+zfcLigaRujhsAAAKSmI7TZgfrDIyIOdDSkCw5bAMu+tyGyXhHBM4XIJm/BsqnQfq/EMzchwS8ibdwVLHx7VMx4Ri1N5xOKx98H4nVxXZ1pmZIqfY1FFP190liRVHSSJTBNtLVCGpjQrFQS76QTGhGaJHJPbeEnhTR4bMAM4spjcDvYUIiUtjPAmAnuAkpIEyF3kyzSKiYXwFoFsexygv0nkKHfhYgtTXoBRavO/2YuNbT8aCOOqxXnK4LHQn+T2rLsqr2+7qu/UjX+31VlWWx5dTpawPljgZa/2/b8F+/vQXDW/SPpwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-300, 200]
            },
            "knockback": {
                chance: 50
            },
            "counter-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e34009Data;

