// Stage 2007 Data
import type { StageData } from '../../app/stage/types';

export const e2007Data: StageData = {
  eventId: 2007,
  eventName: "地獄のメルクストーリア",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 7,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "都炎上 超激ムズ",
      baseHp: 900000,
      width: 5200,
      enemyLimit: 5,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1112",
          treasureName: "癒術士(120)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "250000",
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
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.3-16.7s",
            delayFrames: "160-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "097",
          enemyName: "ワイバーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAfHSMhHCMnIykoJC0qJDAsJjIvJzozLDszLTozLzY1Lj02MTk1MzU5NEc9NUQ9OEI9OEI+OUBAOkdAO1BBP0NFQElHQFFKQVJIQ1hKRVBKRk1MRVBPR1NSTWBWUFVXUFxaUF9VVVVYVFpZVl1bVWJcWl1dWGphWmVkYmxkYnBuZ25xaXR2bHNhdoJ5c3t8dHx8d3V/d3Z8fHyCeYN/gIWNiYyOiYuRiY6TiYqTmp23pp////8yV8lwAAAAQHRSTlMAP1ptHwoVPXNR/rqRL+cjCP/ORlluo/8ZgfTb/7A5lr7/VtXkBENv8h3/t9L9nf/r//+7OmQKg//glbL9//8AmYcfuAAAA9xJREFUWIXtVmt3okgQJRkgykNoFJtHI3QgsW1t8JFscIKZ//+vthp1sjNxEolz9lPu8XgUqMutqlsFyo8LoXwRfBH8FYKzYPdvbFU779qT6JlmHI9H+ucZNL0/HkTz+wtEKFrPjPLhBQQ3vZ5JiunnK6H2LDOiywsYFEXvMcLSz5ZS3lnNKRFj9RPRs2k5T8LhaCEwJYndNVwfJblYrQRjfMURQpnTMd7ybWe63e12K8oFMRAad6ukbsvrh5KhpoRihKJRNwkt1GRV1/WKYGJg4t107abWt3qLFUAQjBElg35HAr2va/OWgGOAQGZ3OwSgQAiQgCANalidGXxGCUJYVpEgilBHS+q9AcYEgEAA/EJG1OsSr1omoZQQ6KEEJtgwBp0cqakJ5ZA8RCLDwBBvGJ0kKO5wKaQEowWSX9b+BCAI3PeDZ5PhOIEiEqgjWPm/BHqazss0T28nwR/NpdmLothnTjmFOgwMgo4paGEu6rrigi2S6f0JIY6fJl6ED9VDUElKvAEdD441cIPpstk1dSU4Z0k6mgS/9FdPmay9tN+RA9pIYqf3WkTN9hfrplkLQYXAg9wM72dHKe4UlpC0HsYHDty6YKHbAxS+FskO06KWIgRFxCCRB+nYjuPot4Vsv+we5XsWyACb2dS9iaJfl/xwzNZtHoJyZGDOiqLI82hvHwgDfVTGw5/I9109xfFvi0n107xar6uqEnAx5/ID0ZzL5nE4CuyygnBiEyj2yJu/HQY/L4ACABy8jaewxCCOcoiHfQL0YgViypmipZMThnFCxsWBgrfRHO4N94XMqhqOrneNTLN5unPtU+ZzJ9NpWDApo5LJ7AE5yNoIGmeilt0Cgn9ORP/sqpVlc1G9AvoIemCKxmpWNRXny6fZn+MlhaaN8ohK3SzLRUURPqxzpc/WgtfPs4d3FLRwbD/08jgb6jdWkniYCmog7AV2AQlU5ezx+TH4gAIqao8CRRsPPNMDH8AjiURDu2gawRf37uP2+eFDGS0suceBgCEDJmCybF52FS3CMaufy6f3t8Aewyj2R5ZHsr5ljhRn27y8gLWI7EqxfDiDwIkzWBS2B8bV5HBtdw14UdRrMEj9/e5jAr0lUELmtxdrtxtwQjv/lVhvHz8mUOM42GdyGL6grOqX3RpsLeLN9gwFGZPPYi1l+WGNTxYwtpwtm+Y2OOfFz68SmYNe7o4ZA0PBQrtsynO6oMy229a4s8139yhqmRQTZVYubs8hCMrn1jB3znF+XX+TpLIlkxMTfQLOm0S10Or4mvSG4YL37i/831Cvrq6vv/2O6+urq59v7P8CjW8pNxYexGkAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 380000,
            ap: 6555,
            dps: 525.8,
            speed: 5,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 374,
            foreswing: 55,
            backswing: 66,
            tba: 160
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 6555,
            actualDps: 525.8,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2123,
            actualDps: 1010.95,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "094",
          enemyName: "フウ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7768,
            actualDps: 3699.04,
            magnification: "400%",
            count: "0",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "40.0-53.3s",
            delayFrames: "1,200-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 55200,
            actualAp: 3600,
            actualDps: 2204.1,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
            count: "0",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "30.0-43.3s",
            delayFrames: "900-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
            count: "3",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-1.3s",
            delayFrames: "2-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 55200,
            actualAp: 3600,
            actualDps: 2204.1,
            magnification: "600%",
            count: "3",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "097",
          enemyName: "ワイバーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAfHSMhHCMnIykoJC0qJDAsJjIvJzozLDszLTozLzY1Lj02MTk1MzU5NEc9NUQ9OEI9OEI+OUBAOkdAO1BBP0NFQElHQFFKQVJIQ1hKRVBKRk1MRVBPR1NSTWBWUFVXUFxaUF9VVVVYVFpZVl1bVWJcWl1dWGphWmVkYmxkYnBuZ25xaXR2bHNhdoJ5c3t8dHx8d3V/d3Z8fHyCeYN/gIWNiYyOiYuRiY6TiYqTmp23pp////8yV8lwAAAAQHRSTlMAP1ptHwoVPXNR/rqRL+cjCP/ORlluo/8ZgfTb/7A5lr7/VtXkBENv8h3/t9L9nf/r//+7OmQKg//glbL9//8AmYcfuAAAA9xJREFUWIXtVmt3okgQJRkgykNoFJtHI3QgsW1t8JFscIKZ//+vthp1sjNxEolz9lPu8XgUqMutqlsFyo8LoXwRfBH8FYKzYPdvbFU779qT6JlmHI9H+ucZNL0/HkTz+wtEKFrPjPLhBQQ3vZ5JiunnK6H2LDOiywsYFEXvMcLSz5ZS3lnNKRFj9RPRs2k5T8LhaCEwJYndNVwfJblYrQRjfMURQpnTMd7ybWe63e12K8oFMRAad6ukbsvrh5KhpoRihKJRNwkt1GRV1/WKYGJg4t107abWt3qLFUAQjBElg35HAr2va/OWgGOAQGZ3OwSgQAiQgCANalidGXxGCUJYVpEgilBHS+q9AcYEgEAA/EJG1OsSr1omoZQQ6KEEJtgwBp0cqakJ5ZA8RCLDwBBvGJ0kKO5wKaQEowWSX9b+BCAI3PeDZ5PhOIEiEqgjWPm/BHqazss0T28nwR/NpdmLothnTjmFOgwMgo4paGEu6rrigi2S6f0JIY6fJl6ED9VDUElKvAEdD441cIPpstk1dSU4Z0k6mgS/9FdPmay9tN+RA9pIYqf3WkTN9hfrplkLQYXAg9wM72dHKe4UlpC0HsYHDty6YKHbAxS+FskO06KWIgRFxCCRB+nYjuPot4Vsv+we5XsWyACb2dS9iaJfl/xwzNZtHoJyZGDOiqLI82hvHwgDfVTGw5/I9109xfFvi0n107xar6uqEnAx5/ID0ZzL5nE4CuyygnBiEyj2yJu/HQY/L4ACABy8jaewxCCOcoiHfQL0YgViypmipZMThnFCxsWBgrfRHO4N94XMqhqOrneNTLN5unPtU+ZzJ9NpWDApo5LJ7AE5yNoIGmeilt0Cgn9ORP/sqpVlc1G9AvoIemCKxmpWNRXny6fZn+MlhaaN8ohK3SzLRUURPqxzpc/WgtfPs4d3FLRwbD/08jgb6jdWkniYCmog7AV2AQlU5ezx+TH4gAIqao8CRRsPPNMDH8AjiURDu2gawRf37uP2+eFDGS0suceBgCEDJmCybF52FS3CMaufy6f3t8Aewyj2R5ZHsr5ljhRn27y8gLWI7EqxfDiDwIkzWBS2B8bV5HBtdw14UdRrMEj9/e5jAr0lUELmtxdrtxtwQjv/lVhvHz8mUOM42GdyGL6grOqX3RpsLeLN9gwFGZPPYi1l+WGNTxYwtpwtm+Y2OOfFz68SmYNe7o4ZA0PBQrtsynO6oMy229a4s8139yhqmRQTZVYubs8hCMrn1jB3znF+XX+TpLIlkxMTfQLOm0S10Or4mvSG4YL37i/831Cvrq6vv/2O6+urq59v7P8CjW8pNxYexGkAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 380000,
            ap: 6555,
            dps: 525.8,
            speed: 5,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 374,
            foreswing: 55,
            backswing: 66,
            tba: 160
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 6555,
            actualDps: 525.8,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "097",
          enemyName: "ワイバーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAfHSMhHCMnIykoJC0qJDAsJjIvJzozLDszLTozLzY1Lj02MTk1MzU5NEc9NUQ9OEI9OEI+OUBAOkdAO1BBP0NFQElHQFFKQVJIQ1hKRVBKRk1MRVBPR1NSTWBWUFVXUFxaUF9VVVVYVFpZVl1bVWJcWl1dWGphWmVkYmxkYnBuZ25xaXR2bHNhdoJ5c3t8dHx8d3V/d3Z8fHyCeYN/gIWNiYyOiYuRiY6TiYqTmp23pp////8yV8lwAAAAQHRSTlMAP1ptHwoVPXNR/rqRL+cjCP/ORlluo/8ZgfTb/7A5lr7/VtXkBENv8h3/t9L9nf/r//+7OmQKg//glbL9//8AmYcfuAAAA9xJREFUWIXtVmt3okgQJRkgykNoFJtHI3QgsW1t8JFscIKZ//+vthp1sjNxEolz9lPu8XgUqMutqlsFyo8LoXwRfBH8FYKzYPdvbFU779qT6JlmHI9H+ucZNL0/HkTz+wtEKFrPjPLhBQQ3vZ5JiunnK6H2LDOiywsYFEXvMcLSz5ZS3lnNKRFj9RPRs2k5T8LhaCEwJYndNVwfJblYrQRjfMURQpnTMd7ybWe63e12K8oFMRAad6ukbsvrh5KhpoRihKJRNwkt1GRV1/WKYGJg4t107abWt3qLFUAQjBElg35HAr2va/OWgGOAQGZ3OwSgQAiQgCANalidGXxGCUJYVpEgilBHS+q9AcYEgEAA/EJG1OsSr1omoZQQ6KEEJtgwBp0cqakJ5ZA8RCLDwBBvGJ0kKO5wKaQEowWSX9b+BCAI3PeDZ5PhOIEiEqgjWPm/BHqazss0T28nwR/NpdmLothnTjmFOgwMgo4paGEu6rrigi2S6f0JIY6fJl6ED9VDUElKvAEdD441cIPpstk1dSU4Z0k6mgS/9FdPmay9tN+RA9pIYqf3WkTN9hfrplkLQYXAg9wM72dHKe4UlpC0HsYHDty6YKHbAxS+FskO06KWIgRFxCCRB+nYjuPot4Vsv+we5XsWyACb2dS9iaJfl/xwzNZtHoJyZGDOiqLI82hvHwgDfVTGw5/I9109xfFvi0n107xar6uqEnAx5/ID0ZzL5nE4CuyygnBiEyj2yJu/HQY/L4ACABy8jaewxCCOcoiHfQL0YgViypmipZMThnFCxsWBgrfRHO4N94XMqhqOrneNTLN5unPtU+ZzJ9NpWDApo5LJ7AE5yNoIGmeilt0Cgn9ORP/sqpVlc1G9AvoIemCKxmpWNRXny6fZn+MlhaaN8ohK3SzLRUURPqxzpc/WgtfPs4d3FLRwbD/08jgb6jdWkniYCmog7AV2AQlU5ezx+TH4gAIqao8CRRsPPNMDH8AjiURDu2gawRf37uP2+eFDGS0suceBgCEDJmCybF52FS3CMaufy6f3t8Aewyj2R5ZHsr5ljhRn27y8gLWI7EqxfDiDwIkzWBS2B8bV5HBtdw14UdRrMEj9/e5jAr0lUELmtxdrtxtwQjv/lVhvHz8mUOM42GdyGL6grOqX3RpsLeLN9gwFGZPPYi1l+WGNTxYwtpwtm+Y2OOfFz68SmYNe7o4ZA0PBQrtsynO6oMy229a4s8139yhqmRQTZVYubs8hCMrn1jB3znF+XX+TpLIlkxMTfQLOm0S10Or4mvSG4YL37i/831Cvrq6vv/2O6+urq59v7P8CjW8pNxYexGkAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 380000,
            ap: 6555,
            dps: 525.8,
            speed: 5,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 374,
            foreswing: 55,
            backswing: 66,
            tba: 160
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 6555,
            actualDps: 525.8,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "098",
          enemyName: "癒術士",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwIFBAMHBAQSEBgaERcYEh4kHSYyJD8zKTo1KD4zImEzLzI3LTo6LEg6MT9CLkk+MkJCNEg+Oz1RPkeDJjxeOUtPOotcRGJZVFaZNktfUlhdRJ1mU2JmU2ZvV1VpW3FrU5uBZld3aXB4cm14dXOCdoiLeH2Me3GJgX2Ph4OXh4xDvbmmlpWemKWenZ2opaKzqaW5raW/rKW/tazCwsHKxMDOzs3VzMbe2tnf2tbv5t/+8tz29vb+/v7yJHIqAAAAQHRSTlMAOebJhGMOnCXnQnP+DK2H1r/1/hxd/+j//RH/hf/jPv6r/v7ZPV3A6/6gdP7/0P6cgv+03/7/y9v/6P/9//7/+NVJxgAAA9hJREFUWIWll4t6ojoUhe204g0ECVbBC1C8gDAiIEgk4vu/1dmBY2tnhkJ0fVoEXX92sncubbW+SVi7hxq5a6FVKS0459ca5edAq/ILQa2dirhVgPWZtoDjhORZluA4xBncZzghJMM5PLleM9pEWgXYEPg28z0PvCEOPSfGBTDL/TDBmZ/k14QCSBXALb4NHS/DJKHXEF8hGAIQjJMYGGUElYA1Kbvgw+9xnoQ+eACRZPCQwH1MSsC5CqBF5TiTPM/pBa4FEv4U93lxveZRFaC1ThukIT/plYDW+nBKv4kUlvsnp+AHP5SCoNyryEse6XePfqjDf+AOtNtRZeXVSkshZ4fH/bQwSKA87hei69l9on2YG+cN05j9qSB9zq/s1s/YIQdPDN+TLW/6mvZ45zl9uzK3Zr/LPQgYrwyEVLnXGw4U9hpQNvMl4gGwWHx8fGx/nHf/BhR+MC8KmawhUD9afGnJGAInjibTW+tT+jIZkyHK/HT62T58WrHVEjfk+eniXjZbH4TRX4AxE6Ar8d8I04XDCOjxlFAgplMELLXNBOjz90KqitQ5E2AALkTfqmoYlhcaqrpjKiWR5y0VIcOHjd3zY+yoxpYFwEESPlRVtTwvhgNB6Bnqcs5SCHQMIXrVwRmhwivVZJrUfRlSMBqpZohJBqeT/XzClsUBzaE4ngyWMICeY7ndEVsllwBlNB7NLM+y7LUiss2ldo8CBHE4eX+fzWaTMddl8re4Qacj9oW5gWazd9By8NDKOrYNY1ZIlR7ZGDiRVmEJkEXGPlD1e0iWSoCB5CHz2t4dISQNoQ8WBSB5cBdbE5jQl6FZqRgEYyUhdBdCk6rWgpMhi0NUDKOxGoj2/vOAITTZq/U0M9tdEwDGzLCssbCLjzeAcmxwWNKCSG/pNnipnJ2g77e6cAOcG4SgaS0lwo4BM8FxLFvnlPnRLfuupCSoB4DcDM7pied4juOtXE0/4kiH06cgRJdDozwcCIlDsrN9DxYWP1pHhKT7Uxq5AYkaAcDgx+l4RQF+mJ3c9HIhmFzIPmkUgZ6SLMb77tz2PAog0REWqMvlkvz+vWsCgCHAMT5wgunHnu/D2gQBlAA/ajK5tF2S4RMkbAyj6NgZvtwEC+WmAYAz4zCh/xkq8zmk4fgFAJ3qS4kTZWuvl7+DrVLaktJKYviQNdjtudHXDKR7rf2/H3sUsK0HwHSWbqsI1/7FG6QMgW4TmET1a1xbRp3PZHFDJCdRlJbbTBJHtZOB49pyr/3yqbdeb9l569i2JEkTZ9iuW+Fe3jqvvV9/6PW1Q/X2Nmi3X/72/AdYH9iQGP2IGQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 299999,
            ap: 3250,
            dps: 2119.57,
            speed: 23,
            range: 310,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 46,
            foreswing: 20,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1199996,
            actualAp: 13000,
            actualDps: 8478.28,
            magnification: "400%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2007Data;

