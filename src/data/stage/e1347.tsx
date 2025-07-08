// Stage 1347 Data
import type { StageData } from '../../app/stage/types';

export const e1347Data: StageData = {
  eventId: 1347,
  eventName: "火山の脅威Ⅲ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 347,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "呪炎狂宴",
      baseHp: 1350000,
      width: 5500,
      enemyLimit: 15,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
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
            actualHp: 1500,
            actualAp: 600,
            actualDps: 1200.0,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
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
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 18000,
            actualDps: 12857.15,
            magnification: "150%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
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
            actualHp: 240000,
            actualAp: 14991,
            actualDps: 28108.14,
            magnification: "300%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "627",
          enemyName: "超古獣マガモジョー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEDAwMEBAQFBAQFBQUICAgICAgWGxAdIhcmJyMiLhYxPCU5SilHUzlNYTdYbz1kekh3hGWJiYmenZ2pqaq5uLnIyMnV1dXi4uPt7e729vb////////2fAR/AAAAIHRSTlMALBVCV/XecJW7/t/A/////f////////////////8A/8yQS7sAAAQ1SURBVFiFnZaLdqsqEIZFRRDDdUBQ4+b93/IMmjYnl9bUWV2puuRzbvxD9W+36sBqVj8++Pe18EMAE+QcoN0/XAvLzgF62Tfln4XLOQCzzrRVq8Cpxxg+BTTKgaq50dY9xvBxEgdQ7tIbCWcANWaQGzBGGuX1iRAayauqA2u1PpnEATTvBXilnO3qEwBuvAej0AVj+zMeVC1XFpzRxun2BKBmLeuUsVIoda6VewfWOakMTemMBxXpB6UVTdmmbPiZHLBOK6GnnJec5+EEoAOpluu65nWc88j/Dqh5Z3KxqMdZa94Q0rSs7PEPARjEMBfANSatvFWYUGuNbP+gSHzZXBiNxopYC+AgeEH+ANjXU13WWvw8FhYMfwa0PwOuBRCoVtIUggM01z8DuubHJExbDooiSGlcaWyl/fAMkMNPADJuMeREbTASDVurG14Al2fVvZvdAdAyBYDaBlY01UsOelBV+55x2RuBlc7GXSUpL8rwDOC44bv3YbCtjrDpSU2aZheWZwDTFlsE2+wV0G5ZtE9PnwFNAQAf/q98t281KeNGcAezkShAgrR21w3eVhfwe05IzGnJ/khQOmwwXZzYvA6XCnK+NGXVXsd0NBtx+GiUb9CE1bXLqeUhe1UiatEDTMORrLfaKVRvsJ03nVqzlymOOaJD/Zpj+irDz4CaGmswBCHWbM2cp7is8zXHvsfFeUVBOhptHDPgtNDSlPfHdE1b/a/lFyUpZ3cAIMriftGgFC6ZfJzysuabpfDiwisANVwrnGKyKFCYc5zyt02bNw+t8AaARwFpQZuy/zF/ebrmR5va3wHogrOo4iWE5O6r0ft1v7scAIjESnqQEd+d9++XX/wbQ37eD+8AFZcU31zn5evjMRRUXlLcHoX6AFB1NG2lCyGMYxi9xHXjcosDL8kRoJXal4RrKpWUQmAqE9yzGA4B9WCpnea8SInyvSUju3s5PTsC4LlS+NJ3aTTCaZvQ8/DtwhouhwDml2ku8eIgs07oUoTvisYYyRGgKZ9bolfCemfVlkCINwDMCzsCVP1YxljRb4NtRQsv+JsDZrna+gjQ0FjmmMCDpQaQcp5TcpsLK0BaoqkPABWh87YVpm1fhMlMsLh121+jwh3GjgBV3ZW+jVQ7OYYlyewhYCp8Fy88R3UMwH5Elz1YmRaXg81R0CkbUlHeJNt9AmjNHKetdyMN0cvRirKMtRUdCPkAgFEIHBJjnBMFQ0X/Pfr5/Zj1K6AU09Z10za9WXx/7566/hSw3MSDjdk/zbSPAMN12Z3l8XmgfASo1XqrN0+nAATLtwMu17l/t/wAwHyeMISmuJLx1EHIHwF8jIvppOxbbP/QDUq8nuF+9yBMMYUISrhpTGMMSvMPAIQxzvvNBKCsBqNwUBZ9xa7SHT7maIz8DMDVHd2s6zp6uyx32/12hZDmEfAfCi7Y9HEdpckAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 2200000,
            ap: 35000,
            dps: 15909.09,
            speed: 13,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2100,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 35000,
            actualDps: 15909.09,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [10000, 10000, 15000],
                timings: [10, 21, 32]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 251]
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 50,
                distance_start: 150,
                distance_end: 750,
                level: 2
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 18000,
            actualDps: 12857.15,
            magnification: "150%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "639",
          enemyName: "超炎獣テオニール",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 1600000,
            ap: 8000,
            dps: 15000.0,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2100,
            freq: 16,
            foreswing: 9,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 8000,
            actualDps: 15000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 15,
                duration_f: 50,
                duration_s: 1.67
            },
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-slow": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 481851,
            actualAp: 16851,
            actualDps: 31595.62,
            magnification: "150%",
            count: "2",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "80.0-83.3s",
            delayFrames: "2,400-2,500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
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
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1347Data;

