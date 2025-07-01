// Stage 36003 Data
import type { StageData } from '../../app/stage/types';

export const e36003Data: StageData = {
  eventId: 36003,
  eventName: "異次元コロシアム",
  typeId: 36,
  typeName: "異次元コロシアム",
  prefix: "SR",
  mapId: 3,
  specialRule: {
    name: "ワンコイン",
    explanation: "【ワンコイン】 すべての味方キャラクターの 生産コストが500円になります",
    ruleTypes: {
      "4": {
        "Parameters": [500]
      }
    },
    contentsType: 0
  },
  stages: [
    {
      stageId: 0,
      stageName: "Round 1",
      baseHp: 1200000,
      width: 4800,
      enemyLimit: 20,
      requiredCost: 200,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "559",
          enemyName: "魔我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIGCAoKEBUKERYLERYNFRoRGiMRHCMRHCQRHSQVIywZKTQeMT8eMkAkPU4rR1suTmQyVW03XXc6Y35BbYtFdJRIe55LgKNQh61UjrZYlb9bm8ZeoMxeoc9gpNJhptVjqNdlrN1oseNrtedtuu5wv/V0xfx80P+C3/////9iEVczAAAAQHRSTlMABxAXITxJVG16qbbi8P8wlqHGztpii/+v0P+d3u//xv/82P////////////////////////////////////8A9DRMLgAABCpJREFUWIXtltl24jgQhg1hh4gdp0ni4HiXV9nybjrv/1YtA15BjM/Mmbuui5zI+P9cUv0qifn5+WGKGG8Xb/sXphbTxe7QeNCIn1xcA0wBAEeOf1+Wb8wBYNnPfUdAricCThTfhqU+ZwrvnQAjUAQviW95FrPbmBW++v8MeAG1EBRx1Z/Uxh8PF6IB2JL3Xpf7m+IoqTxgwWz4esvh8xGhDsiVC/LSuEj7pCrs7Po8H4qPCAWgtx0wub7fXAoZfo8ZZnEjSB89KmAJ5geS/+D6dFwSBF1eMcvbgFM2VMBFsig/MC0JHNQ2vdwLlzkpKxrgothMZ7cUyvKRUPWPOTHX6Uj+F6UxBbC+vrwtl2lXESTzxEqSrGo8ofEvjwFXw02qH2qeYAVTIFM4irrCAvXrMSC3wG5Z/6UqBfGlLlzWQ9OFEzd6CCCVaq/PvEoBaObpWkhdkz7HjwDgddTST18rwInn2GI6iip9De8B4/ZWmQJasDzZq3eAlrz0TlN6+8Ny1d6kAbaP1Pm3Be4yOv16Dhg++L4AUZQkSeSoXI5bPwXM7vVGmoYYI9vBWWrkrhw+AbzcyVknw67req5jG9BwsQTA7Alg35YDO0PuJTAOHEM2EwjAkg64q6GauVXgCDtOZnBbOuDQ0h9x4NYDh3GUeHBCBcxbADlCNbnnubasxEn2TQW0XQBdx68APjJMhRWtTO3TAJt2CW29moNvQ8MJbUmMZWoGbYAeSbbvFQDLCoLYsJD33TkDmMlGWKYQhX50hvzZ4pZdAWqqO2UFHMu2IBSOGdxRp7BrAaTELvSBrUHk6KruBO4HDdB7bepZPiIrgPGF4CDs4SiOQpQp1DVoZ3D0Atd3UHBB4MIOkX3oaiRgxXnuQc0MeWRi180ElJTsAE2Ow9KRfkieoDWtH7RSYLkIYy805MKQ2EeW76IU7ru2NDIH18skJSnmL6lRFLlnqWtTlfL9HJpqhG9d4ajHUEvibxrgrpIecaKHzKICIdSQImvvAxrgfkdfW0qxiCgO/TQT+9S2zkxaAOBG9Y7ih7ZjQMiPqIDe4tEqFBF6pi6fBIEbUgHMoJ2CnVzzDzCKkSzKigqNzz4dwCybObBcku9oD5NuYomqjs7n8+/4/QmA6a2bBDEjNsKBaoeiBCG5sSjQ/XoGIEk0EWoWkAIaVhgg3SC3FZbcSZ4DyCHZsKSW5bsSIlKEIPUifUU/natYtXJAvm16uR+DfDN2ADSPKTmNUUBaAymIl4q9ToCmp3g3CwLTzAsS2fNugGZ7YLUo9UxEmnzwWx10AzCjuiVYTo+TmJxsLiS3zm4ApjfZNhCKbpnKEXSqQhGD0Wi8n65mm6rj5leM7oAqJvPLjBaXi/G/ATCD8XS1PlwvrAXgP8VfwP8KWE7X8812sVjUTgky2m02s8Oweu0P2DCaI0KNx9YAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 452000,
            ap: 10200,
            dps: 1900.62,
            speed: 2,
            range: 460,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2300,
            freq: 161,
            foreswing: 32,
            backswing: 11,
            tba: 65
          },
          stageStats: {
            actualHp: 678000,
            actualAp: 15300,
            actualDps: 2850.93,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
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
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "587",
          enemyName: "デビルカツヤ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 53000,
            ap: 30000,
            dps: 5263.16,
            speed: 6,
            range: 450,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 171,
            foreswing: 32,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 53000,
            actualAp: 30000,
            actualDps: 5263.16,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "80.0-83.3s",
            delayFrames: "2,400-2,500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "149",
          enemyName: "松 黒蔵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoLCwsLCwsMDAwqAAENDQ0ODg4PDw8REREVFRUWFhYWFhYWFhYaGhocHBxdAAAgICAgICAjIyMlJSUnJycrKyuSAAAwMDA8PDw/Pz9DQ0PpAABQUFBdXV1ubm6Dg4ONjY2ZmZmfn5/////Ui4yiAAAAQHRSTlMABgsSGB8mMjj/Pkdr4e/0WWFPcXub54X/j6GVuKv/0f/E2f/g/+fv+v/z//n///z//v///wTu//7///////8AcYjN6wAAA/ZJREFUWIXtVmt3qjoQ9VmrfSlajaihGIPCISFpek6ttj3//1/dgQAGhNa17pfzobNalwszmz2TPY/G3/9pjR+AH4AfgH8F4GtrXVnj+QJsfjvoNH//1ue/88qtbdnrIJSxRaHnLkbd5qWusTV7tieV5D6lhDIhVRQ4i8HlEE3LCRUjqK8NYcqVijazq0v9hxspSL9giEoVuqPOhf7CR/2yISxksLRaX/u22+3Wzbr8+hML6Y2/QuiOl667cnxa6Q+GhfJG9bm8XgYKksVJNQGNINeD2vcvI8l8n0np1wIAQrRqn4fevbZux4uAYx1qVQ4zIyoYnr164njBbrfjGXXM6iEQk8tu0b+3CiRwp4TlTohwhuuCKFO4WkYCx66EmS+idVeBRPRoXkRrEaZ0SfGlKP8oGVWuKcgbj6enqKg4/uv5qfyIqE3PIPAYZVypPAd4en19PotBbm8M8WxkRpzIcwGh59dfhQcYISR2o9y/PQ/zyJEgFRSeCs8QxoTKaJwHMPbUKduU1esnA4iZ8mieXkNz5HEDADP/O4A+hhiYXKUl2XOkL427q8pCiQHxfWhPri6H5ixkvjAA8LcAMQHElKPF3FszQnmRwfdZiAFSIYyn03sTAJWVUIEGMVCmPN0TuoPr4YafTpUBEK7ojGC+CnIldZ16AExqatpsCQWAkpgJN1KKjVRRFeZKulrzwi0YNYwMVUDiGMrnDFHM7lQCIH7ygWmE4jTo2CiX2KcpBFIyWFl6WBYB+pjnVBGP2eBY3T5nQgkE/PSPRIr94Y87SXNQ6CJE0CyApDtgRvu+FG/H96MCoOyQeDnsvUnKoCA+cNCAmcQBkfPDx+fn54FkQoXhsHVng5YGKGmHJNKGzk7yB1y9g//nxx6nDzGXdrYudB1ZbJ5IQIPm3KgQTNUxZvDxrrKZx2VWz42OW64fDKuAKrZXf384fgDGca/PInkCaC8lLckNYVIeCeRl/3Y4vO1f0hAMITVXwq+bIAVQRON/XaxUGV11FtXO8nOYRBpxmpanwTAKqqZBpRE9ODBRnmW0dU9dEEJiVEsG8cg2BnzHVUkWceUUOxnUti5u5EvHGEyNlq3XCcLIlxAoVSz4b4aFJWcc6iQQ7kOOcTI74r+EV3yl0EYxGKfQn0ChkVP0b/Q2aRIw1AgsCYRQ2E+p7pWIciGFgH0XVh+MfS629nVpyWqv0pUI4/UWnOEkFNTD/Y5ohOkaMONmThjbOvbwfEHKLpKEE1uLCuNHC7otSQKzrWly+5g6c6tbtSReObpy0G4+22ml7GYDy0mSjnb2cJ2kD+8mneodszVz7qb3YA/T6UNq07u7+/xr/A1+nrqPt8VV+T8z6abQHBPCGgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 1150000,
            actualAp: 40000,
            actualDps: 6417.1,
            magnification: "250%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "414",
          enemyName: "超町長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgIGBgYGBgUHBwcICAcJCQkJCwgMDQsMDQsMDQoODwsTFg8UGBAYHBUZHhQZHhUaHxUaHxUbIBYcIhceJhghKBojKxwjLBwlLh8sNyMsNyMuNisvOCgzPCs1Pyw0Qik3QDQ9Qzo6SC46SS47Si5AUTFIWThIWTlOYT1UaEJfYF1YbkJpb2huc2pNilqAhHyHioSRloyUlpObo5mrr6isrqq9v7vNz8vY2dbj4+Lx8fH8/Pyy8HiVAAAAQHRSTlMABx8OwjW0KYkaelb9a0ekxGA4/oS4l3Dv0Mb+q+j/drvK1/+Poufz//7/9v//sP/W/Pv+0P/q/+v//v7/////yPv5jgAABBVJREFUWIXtV113qjoQLXApIgj1gB+IpNVUSUJi5FBKAYX//6/O0J61eh/usuH07a4zby6dnZk9e3bi3d2t0HTj5vdfhGZOHmbaNwCMyZonnwia7unjCrCma84T5zeCPo0erBHplmU+pEwKEU3M4bO5wGQ5oh9jG039TAAAixdwsOETcfRGlG9u+NHf0DiIEaWhpusLITa2cr49fYioTKO168YIsci5n0ScqXdg+6kQlMVxgFCMCMFrjBFPHeUC9GUqpUCui3CMCSUMccbEfsQMvIRxGbsupRhjijCOAyye1FVpzKAFEbgBHoJAGUEcU18VwHD8RcLlAIAQzAA4oEAlTRQ5sPyEckqFgBZQgDBllDHogtOJ2hRMH46XgoOCoIQYcYIZVABTVdWR4WwopDP5jsAZIgOLRETqq2T5qeSYccEBiSDiEgE62I7wBnuZMuifQi8MNORiABghRAjdpwwHbkwBgAYu5hjBRowAuLM2ICLggDPKA5cOTEaKJNr2e69OMkwPumcAQBglIp2rpGveZredWdqdscw4wy6SgyBiSqlU2gXN2XMhsn1oalbEoAcA4Nh1QQpquwA2lkkhOd2H1iolsYsHTQ1sEnFQIdF2/E3KgDmWbmYRRS6VgMACAOChQv6dFqaCoyBwERfHiKAAlAAIAjjIlDi0IgFGEoMXQe0UI/yeLgc9Ka2CNltT4iIC2o8hkeOhAwlSkJwcTXu1cr4gUjN9ioFyAusHlsI5G07nOGaEbezHsgi/moSx4KB8MLIAgxVC8eK9BHBXvDROlxfLsG5CGLOEgHjw4MT4gz9YJiZKRsRMf2ke9efzwbwBYCZMcBBePBgJCIARzkmMm0tRXk7z1xfv1LSvt8bppYOKUOCu1+AEcDxBsJWs6fKya87506l5O81v3U9OJtlxt1w5jo9olg0AeSPr67W41jwvkuI8v82ik+xCzx4k6y2Wq1W4L5r2WnZ9VzR5XhR59pUnmFPr9y80WzO88Nxe+65su2vR5uVFlNX5CzVpnwdo1upIMav6vi6AxLZmOa2q9lnVljRvB1vB8mvfVm3ft7Ksyqauu7PiFW+He0zggi6u/aW6Xi9dWRYQ1/5FEWCVSkIFkS0QWFdl3V/KuqovfacIoM3zn3ChgwRrYLFrLt21reuyrF8fFTmwdz8p+ApYat0DA1U1zLLeh57q5aKFSQolEMEvXQcIZQ01vM3HvNLM+fbpmAKNTdV1XVXVtTyMeSYOGPYPBx5LMocJ1JUQvvoj7TN+vNbNJS+zLF9nI16J/wJ4A4Asf9ofn84jG/gI+1SKfLt7fD6sDn/28rcOu+2j43ie/kcFQJgz09QM7Rt/G77zj+Nv/I3/RWiaYesfYRvG+JWwnKl//89H3PuTmfnfEL8Ap46ibM0xMWsAAAAASUVORK5CYII=",
          traits: ["浮", "古"],
          baseStats: {
            hp: 800000,
            ap: 11111,
            dps: 3787.84,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 11111,
            actualDps: 3787.84,
            magnification: "100%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "Round 2",
      baseHp: 1400000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 200,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "172",
          enemyName: "デカメガネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgICAgIEBAQFBQYFBgYHCAgICAkICQkICQkKDQ4LDg8KERMMEBAUGxsiJScCM0MdKiofLCslLi4kNTMCSF0wPT4vQ0I6Skk2UU87WFVGU1JGZGFbW1tMc29RdnNsbGxrbW1ZhoF7e3tll5OLi4tupqGampp5trCmpqaBw76usbGL0sq9vb2S39fIyMib6eLT09Of9Onb3d2i/e/m5ubS+vXv7+/6+vr////////7npQCAAAAQHRSTlMABxIcuSo3/0JLVuBmhst1ov+Rr///wtOf8///4v7U6f/+//X//+z8//3//v/+//////7//v///////////wD/MYapWwAABiFJREFUWIXtV1l7qkgTPmA0StxYAjpA2EPTrA02CJHx//+rrxqJOifx5OK7m2fqBp+i66W61tdff/+f8us/gP8A/iUA3wnHT3nu2zd3ZybzBf/o5VSSJWHyR/uJsHvTlg++wm2MKDSk6fU1x3E8E3iOitnOSqtw+8AFbmlVTe7J8+E4x8+EjbSVZXknbZYLdjleUKOqbSPp0R1mat62VaQKHFx1IamW54URSOhZhiotJkstpoQ00eoRAL+L26alkTrnF7s3ZpwS2oCqoSQNDVkLSe7ETapOHwBwm6jJ84aGT9Kb59sgph2Rph2Exopi2qbuRKm1eRhFAHDShpie76CkOBzKDPvpBYH4LqiyBAf2XnoAwO/SloY23NIJsgwFAUrqrkwIs69CfKgvusRVZ98jzN8gxsSOKz/IAl1RRFE0k7IsaNs2pEiwrTCd4mbvMosCP5kthMVscku7FIK3xIxjN3N1dCjN52dRYV58fHx0hasoQVm6oLMzawNlt9lqhmFo8nLGfwJ44EHq5z5GetL1Rzj8LOq46PvzuUOKgrq+QyLoAixD1Wh+SiqSR8bTZkzLXA2rBlROorvHLnHhLDudnc7n8zEQ9fpUBApTKckbRNwiUBWQZ+Jr0gWBW8hWmNI0SES9xOwoE7cGgP6ERL1I9ItKxO+/OEHzPbiCE1c0MlaXFuKmS3kfxwAgKp/2zy5zoO+D55tORO8Qw+V2JcwXK80jNNSEz3YRjJx58HyTAeDco5tGHACgW5gRP5cdUjnX/phbFcTg+nlACroaSqpG4k0nYuuu/GZq2KTa7FoLAIftz7Ovz0p2cE3TdEdQsH4VTazeF/DSINW1vKdq2kTBcFp8ff3rL9GtM93RTT0LxMF70CnofXVfgFM1bq5DYroOm8pPWA7g7KtiI5whl1UwHtIK9jrC6uwegIcKjMcW5YS9kzckKjIoPGg/XGIU4OJQJoFbYJPpdISuMR/vsPFoPgaBl7w8Ii1Jy/pQFGV96k9dGbhugA9ldzqWReLrhiz8c6JA6ipiLK4hyKH9KOkgdedB+uOBIbGCPvcflS1/6cU5i6Jw+amRy/z4GK0ZTH+qy+IwlMP5o42/DqSZltMxDeAMM2/aO/uuwBgjNzldAIgl/O7BkIZLKS0tysZXejxfpcMBTlBg6iX4AgCfR+/TsL2mYekxABIeb/5nboJwkiAzOPTnU0nbWP4dADqTEoM5Bgmp2FBxyjGE/ekQ4BrKAOZhEHTgDmnTLwAQuhxKiXXkxothiFIHdWDb1SUrouOpgFlo48wtT8cg/w5gsvVpPriwtFK/apvYxBlGCGKHsmN/QEmWQTW5LsJ23ka7LwCsiWmowk6DH34MUfR1x4/y46lj+a8RgnLs+rpAtp5Sb/V1Jk+2Ia3YVoTLRD7EMY2rpvno++6QJVmRJFniFqwgqij6Jo1smGlpCwgCPImTQiFAKBtawhaBRnJtF+qgOIE3H031TSGxTG6MHJaHob6ENHJySivYhjYYlnCNGrMgQCSLuoHPfL+cJ5IFW5HEtlNVoeM4sAV108XHoQOOCYsCuAKB8dT5d/aAsDIimNERJIHGpu3HaZ5HDr4MxP5Y13XXHYKXp9X8EQviBdnwIsdhi6yiw0aFVTtslc+yrIO18JAgMf4krOT1ftzGgzRhcLp1xTGwnd0fORTHTWZbM6UNHUGa2O3GnoDvIzslbw8icJPZ094Jw6odrxBc1grUdeYCdaisHwF+zZ9EhdUSRCLSFVQeyrJkvMIBskIjbfaTPbdY24yLsVy8rOUdiGb6YRgTWqWetvxDEEcAWBMNmymeJgnTCdDEqRxWYBx5libNf7SHILwxshfeDnMr4I/RXpauTOInF94rmJx3CZ+paRtvp9xPPPpTpjJwQRm8/zRg7C2WJj8S8asLsGiIIW+l5UibOQE6bC2tNo95+j9lYVQ0NE17vxsbd/FOHMV09g95+m/CRmQeOrFvLQe2zgsWSX0fOvUhzb4JP50Lq5cQ+JOT+ubL0yDrfZz7ju+Y0h0rfGC/eVq/MHJnmoqu3FgNMEzgBs8vT5sffOCmi+VK2sJH1+uXm6zX4MdWWsH/htGD/wFxC9IH+dhVegAAAABJRU5ErkJggg==",
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
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "171",
          enemyName: "レディ・ガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIFBgYHCAkLDg8MGxAVIB4WHx8VISAXISEYJSQcKCkcKycfKywfLy0fLy0hLiwgMS8BQDsiNDMjNjQlOTUmOzgnPTopPTsqQT4tQj4vRj4vR0QvS0YxSkYwTEczT0s1Uk42Uk45WlRLWVk/YVxAYl5BY18Bf39DfkNLdG5MdnBPfHVSgHpSgnlVhX1Zi4Njl49imI9oo5lqp51vraN2uK1+xbqF0cWK2c2Q4tSX7N6c9Oag/OxUEvQ8AAAAQHRSTlMASYT/cWD/CVL/rSWHLzwXR1z/CwSheiTLajKv/guRguzen8z+sQTo/8ECBP/U8P/N4///7P7z//3/////////BlNmiwAAA/ZJREFUWIXtVmtT6joUxVuMVgFpqyBYHkrQcE5KDgmhO0nb/P9/dXfRGWfueA/Bz67hA9POXt2PlbXT6XyBq+skGY6zX1+9C0LW2x72xXr0fZLBrvGNg33xMunPvhF/15+Db5QylYNiMf54+jp7DYz/PVmNVrZhUUyhaWAzaB9m/cnL5CqM4HUO+yW1PIqiWNTebW47ndtFAWZ1F0Ywm1tfadMSRITX3rxkgw24Bkb3gQQL6xFIQPCnvN8na6O5K8anY9+RQEsgolipNMor754lI9wsslCCwa4lkBFrvIkJsqmcRPIwDI3vDJcVEgDJqwYJSu9NytJyPw2Nzx54W0PNCGVpRAAlxRR1xW0wwYtt2hps3nYxtqUsWcrdn8AhIibHJtaVoThIFATVnKnyDIL+rs0AjK84Nk/nseSMQ3gJWINrp4B51DIuGSGCkdTs+sEEneu99w2D2rlGmzyKOMde7oKncGyjr/PSSu19lUYROxIECxHFPAIkEJaLytqYRLkkBM5o4nEODaM2z41AKZFUE6L+nGMt/aLxMkUh4AixhBjw31kEV3PjXV5i6YRiEwnwiBXhJWS3w9G28aUoSXQEKWU4wewueSn2qCLflEcptpCa0ECCWbLavx8FRAPxOwEzcSDBLHlz/hONjqOYETwQKduMQwwl2bVWUIOSnHNZ2kqjIbAoh5Rveten4/tF3X7XlqVuyycklzKVJuU8lS9PTydtPcPpeacY5U6lpHWDiFApa15Cvp2sd4NTBO1Kgxy/C+I4QMrRDFNoFHhYDtawOJFC1i4EpUuwKo1TPANEVyhEBhS9/TBfn3S1WxRw5XxtcS26ygJP0dMhThkVuGwPSwOTvxP0V/vdSjS1/Zhk44S0UkilJG440MJs/p7C/Xg67T9tlUYc9rutNiXlUEswzLk8ZYptJ6e3290wGfV6o2TYv76hVFY1trASrkwNF4w/Bhnj6+9XvApkkxVVVnGjS68EpEYxbpYBYvpANjpYipbcCtKDrmWeC+F0L3BDdzrjojacacZZqdCdhVbKosPdhCewLRnNmVYVKJwuU1oK0diHwPj7yRujlCotSqMpCtzgNKFqYBF4URoXQjrLK2+wD1yjQVQGBN8+ha6nhHKUr7K+keiOWD7qym0fhqG++DqXVjjfVo+d87Viuq4Oi3Bb/TUpdqvN/rCUxkqmDR4LwR7O2SzZdDq+mw4GD5wJBsBKDrvwK84nZmsjagVAgeeP5yTwSWCFVcvlDX18W3/n1nyfvNF8+fA8eps/nvCC/0GWPD89j3qDXn8afEv8D0N32BtcdQKv2V/hqpMFH8Af/OAHX+Dq4uKy2+3+06Lbvby8+NrQ/wUXS7r9c8boxAAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 17777,
            ap: 777,
            dps: 264.89,
            speed: 15,
            range: 370,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1555,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 426648,
            actualAp: 18648,
            actualDps: 6357.36,
            magnification: "2400%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "340",
          enemyName: "イカ天",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAFBQUGBgYGBgYMDAwPDw8QEBAfHx8hISEhISErKyswMDAxMTEyMjI6Ojo9PT1MTEyaNg9TU1NXV1dgYGCdWCJpaWmfZQZzc3OrZSt/f3+CgoK7dym2fhSFhYW5fjm8gDrAhR69oQHHlCuYmJidnZ3ImFrQqDPcojWpqamvr6/Xr0TJyAH/sQDcuVTcuHHivE3Dw8Pkx3jpz5fW1tbx3qLh397//wLo5+fw7+729fX////N1xDkAAAAQHRSTlMAB5m63FwRSy0dOGUtRohcc6oN3o0KpMj2GrgE0SvG/mkT30FYIwQ5/N55S8H/8GQFA4Ko0/rC0/zq/gH+/v//N8UThQAAA9tJREFUWIXtV217ojgUNdMtEuR1imBpilO0U+gssa1Nm2YI+f//ai8oKlodsPtpnz0ffISHe7iv54bB4ADj8fXtbDb/UWE+n91ej28OHzqO8fV8+fb6+vr3Gq+vb8vH23F3gutlIZaLh/u7Fe4ffr18yPdZd4a7pZTvy8cf81mF+fzx5e2j/Jh3J7i5XyzfP3bx/vby0CsLN5Xfi8VLjcXi1/1dL/Ma45ufz89PT08/n55//+5t/W8BDS+1r9hrbpL5+Cv2mSxZoJ9tb9NSKcUj4zx77Nf2wEAsdK59WSglOSdOfwY9YPB+zpQqplOWuX2LYURgquRUSKlEmkpaF+OUH9rIdSxcPaFpA2RFvIpeTLjIBZ8yBcWw9NEpPzBhjMYQK/a8kZ2IOn1lPs2nEEFdjITQxDpBEMNTRYjRKGUpk2oFyXIuy/VFqZhzygPIOfWw5oG/jckeStr2AGk7SdHCoqBpoIMHgolP7Xl+1WpKNArs7Q3kEuJGNMDYW8X8iQMi2fakhvUhESw2t3cMHVkZdZCdfx4AMJDmhcj0CUmg0iJoFea7zwLNrQhEsW8tGMvsdczIiRnL8yrVtJ1Xi8ZYDxnPU7n3ciVTz9Ia+4zFrp1C2gW1WwRmlpkDw/Ym1QzsEsAFc5unnIz6JjIIpbHv6IcEA6SHhSryXQYhik0X4ZgF0NjIGK1at01QlxqNSEbCnTQUYhKOmgDc3dwfEKyaDemW7gslc77qgElO9OZlOKbu0anCMfebTPschildOZDyrGkB5EKij9lDPwpibAkUr8OoWntTLuiV4w4MtIDzYM3v86YCaV6qxjMtYMEpnTahPQNLQwjp3pqgzNNUqCJYETh1nY4DOYngWeT7AZmsCSSbpkzJqJYki1D/tD6CGFEhOAcd2oQwmeaqnHqWYbiERn9cNNgJ4iRJwqtmqGWew3ikaZoklHZaEgjrhq4HoskBiJpS+RQ0L3G7Lzot2uhaLWrUs21X77EfcNKWFeZCabqbw2bI2gPN7Z7byaFfI0CbRjyTAJM9TRLB914EDmvbK5mdWEuHARjxngOVCx17AMTE8ZPtRtsWMnLNLnkwwoxyWIr7BGUpWXJCCjbAfsZYNcGr0JvfMoVJiDvlQbPsq2ovSF6ZVdUUBLYddS2rYxbgeCSlABmA6gekqPIHd8SfB7mBGWZJFLg2UyLSnUyCHGFYZvTE6aANhE1d05AveGRWe0yCHCHTjXqe1bSIRpX8VSpXreXWcaITgb1WD1C58Kzj7nb8cR8h+R//HSA4RxrD4fCyBvwxdNzri0G7/HZx8dcOLi6+nfgA/Aehh+jQkRgroAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 360000,
            ap: 108000,
            dps: 36000.0,
            speed: 8,
            range: 500,
            rangeType: "単体",
            kbLevel: 2,
            money: 900,
            freq: 90,
            foreswing: 15,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 108000,
            actualDps: 36000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1999980,
            actualAp: 45000,
            actualDps: 43548.4,
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "340",
          enemyName: "イカ天",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAFBQUGBgYGBgYMDAwPDw8QEBAfHx8hISEhISErKyswMDAxMTEyMjI6Ojo9PT1MTEyaNg9TU1NXV1dgYGCdWCJpaWmfZQZzc3OrZSt/f3+CgoK7dym2fhSFhYW5fjm8gDrAhR69oQHHlCuYmJidnZ3ImFrQqDPcojWpqamvr6/Xr0TJyAH/sQDcuVTcuHHivE3Dw8Pkx3jpz5fW1tbx3qLh397//wLo5+fw7+729fX////N1xDkAAAAQHRSTlMAB5m63FwRSy0dOGUtRohcc6oN3o0KpMj2GrgE0SvG/mkT30FYIwQ5/N55S8H/8GQFA4Ko0/rC0/zq/gH+/v//N8UThQAAA9tJREFUWIXtV217ojgUNdMtEuR1imBpilO0U+gssa1Nm2YI+f//ai8oKlodsPtpnz0ffISHe7iv54bB4ADj8fXtbDb/UWE+n91ej28OHzqO8fV8+fb6+vr3Gq+vb8vH23F3gutlIZaLh/u7Fe4ffr18yPdZd4a7pZTvy8cf81mF+fzx5e2j/Jh3J7i5XyzfP3bx/vby0CsLN5Xfi8VLjcXi1/1dL/Ma45ufz89PT08/n55//+5t/W8BDS+1r9hrbpL5+Cv2mSxZoJ9tb9NSKcUj4zx77Nf2wEAsdK59WSglOSdOfwY9YPB+zpQqplOWuX2LYURgquRUSKlEmkpaF+OUH9rIdSxcPaFpA2RFvIpeTLjIBZ8yBcWw9NEpPzBhjMYQK/a8kZ2IOn1lPs2nEEFdjITQxDpBEMNTRYjRKGUpk2oFyXIuy/VFqZhzygPIOfWw5oG/jckeStr2AGk7SdHCoqBpoIMHgolP7Xl+1WpKNArs7Q3kEuJGNMDYW8X8iQMi2fakhvUhESw2t3cMHVkZdZCdfx4AMJDmhcj0CUmg0iJoFea7zwLNrQhEsW8tGMvsdczIiRnL8yrVtJ1Xi8ZYDxnPU7n3ciVTz9Ia+4zFrp1C2gW1WwRmlpkDw/Ym1QzsEsAFc5unnIz6JjIIpbHv6IcEA6SHhSryXQYhik0X4ZgF0NjIGK1at01QlxqNSEbCnTQUYhKOmgDc3dwfEKyaDemW7gslc77qgElO9OZlOKbu0anCMfebTPschildOZDyrGkB5EKij9lDPwpibAkUr8OoWntTLuiV4w4MtIDzYM3v86YCaV6qxjMtYMEpnTahPQNLQwjp3pqgzNNUqCJYETh1nY4DOYngWeT7AZmsCSSbpkzJqJYki1D/tD6CGFEhOAcd2oQwmeaqnHqWYbiERn9cNNgJ4iRJwqtmqGWew3ikaZoklHZaEgjrhq4HoskBiJpS+RQ0L3G7Lzot2uhaLWrUs21X77EfcNKWFeZCabqbw2bI2gPN7Z7byaFfI0CbRjyTAJM9TRLB914EDmvbK5mdWEuHARjxngOVCx17AMTE8ZPtRtsWMnLNLnkwwoxyWIr7BGUpWXJCCjbAfsZYNcGr0JvfMoVJiDvlQbPsq2ovSF6ZVdUUBLYddS2rYxbgeCSlABmA6gekqPIHd8SfB7mBGWZJFLg2UyLSnUyCHGFYZvTE6aANhE1d05AveGRWe0yCHCHTjXqe1bSIRpX8VSpXreXWcaITgb1WD1C58Kzj7nb8cR8h+R//HSA4RxrD4fCyBvwxdNzri0G7/HZx8dcOLi6+nfgA/Aehh+jQkRgroAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 360000,
            ap: 108000,
            dps: 36000.0,
            speed: 8,
            range: 500,
            rangeType: "単体",
            kbLevel: 2,
            money: 900,
            freq: 90,
            foreswing: 15,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 108000,
            actualDps: 36000.0,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "80.0-83.3s",
            delayFrames: "2,400-2,500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "177",
          enemyName: "イノヴァルカン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 160000,
            ap: 1799,
            dps: 3174.71,
            speed: 9,
            range: 125,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 17,
            foreswing: 8,
            backswing: 3,
            tba: 5
          },
          stageStats: {
            actualHp: 1280000,
            actualAp: 14392,
            actualDps: 25397.68,
            magnification: "800%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "615",
          enemyName: "大天使チビネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUNDA0ZGBkZGRkiIiIoKCgoKCgpKSkzMzM3NzdKSkpOTk5WVlZ0dHSCgoKWlpaoqKjcvBDcvA/cvRHdvQ/dvQ7evhDevxPgwBq4uLjhwh7jwxzjwx7jwyTlxB/mxy/nyDPoyzbu0U7Ly8vv01Dz12H12mnc3Nz54YHl5eX96Jvv7+/19fX7+/v///9ZamMEAAAAQHRSTlMABxMtOEVod9ZZiyGAmer/pPe3xf+t0P+64///2vf+/v//ByEVQDdLXW7/fZmPhqG3qsjS/+Pr9f/6////////a1ZfFAAAAudJREFUWIXtV9l2qjAUdcIBpXFAEWLCIE44tFZqcyOQ//+rGxCs1nY18b7ch26XrsTF3tk55+RES6Vv4Hm+Pz3D933P++65r8nTxWq33TxzbNLPzXa7Xs6moiLefHN4e31er5aLxWw+my0Wy9V2z79aT8UE/JfT6WXh36znTZevp9NWzIO3O57+HPY77mA255hxB7v94c/puBLchD9b7w/H9/f34/GN45gND/v1XCKS3nTO112tM6y4l7lwCP9PKP2BWpHktJX2ZVxFNHa7cvwGwqZymQSMMSRloYYYiwbFrOVwAbMsI1DnayajYlYeJRGqy/BLCmYsvghUECOaFL9UViFhgZpPOi4jqpwA92Az5iilal3rmzB+QKA0SSM/wG5IEx6PaNKRLYRxwmkRJ+dwP9IqBpWwG/BEtGT4yuRq9VwCVsX5bfOOzxjpiwv0yR2dA9eEN4Dvl+fFGQqXk1YYiMJiJxAQFg9+pp4xYheak48cyKNiCvIrkw8B93ofwgKoYNAwS2DxHv3MzVA2P0WQulEWSOG21L3KYuJgB7t26sAWrsXrNNKABmlVJYyOxLuSFtyXUYQkSrncv1Mgcsex3MHh1WlIiDOUawiVVtPAeShJWkZP9VpNOAStwXDi0ihOMg/EiFmSRIFjCXtouYX7OAgptuw4m4zF/U/OlceBgaUb0LYpY4HE1VBDNK9epAMAHGy5LBrJRLE6tEnCYhamfOAi2wlN4W6SS3TGOAqtTAAAjLT2z5xPqNjUAgbQLUMHqClN5x4cRrkDC/IXEu5F1wI2v050oOsWBFDy90WGtK0QgwcAQmDI342lrDMSC0DDsIAudSsV6AQMQ2jzROg9+RxwVMyYsgjrABJT9m4+Q0FpOYYgZI8kIUUL8WZKUSJzK96iNnZiRmP6sEDaG3AYMyR5EG5dNIaTUeMfBH7xi8dRrtSUer2jalq329U0tVFvKVWZPy1VddB86vVAgV7vqdn/qi39BRfSoyqQRkI0AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4500,
            actualDps: 849.06,
            magnification: "100%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "171",
          enemyName: "レディ・ガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIFBgYHCAkLDg8MGxAVIB4WHx8VISAXISEYJSQcKCkcKycfKywfLy0fLy0hLiwgMS8BQDsiNDMjNjQlOTUmOzgnPTopPTsqQT4tQj4vRj4vR0QvS0YxSkYwTEczT0s1Uk42Uk45WlRLWVk/YVxAYl5BY18Bf39DfkNLdG5MdnBPfHVSgHpSgnlVhX1Zi4Njl49imI9oo5lqp51vraN2uK1+xbqF0cWK2c2Q4tSX7N6c9Oag/OxUEvQ8AAAAQHRSTlMASYT/cWD/CVL/rSWHLzwXR1z/CwSheiTLajKv/guRguzen8z+sQTo/8ECBP/U8P/N4///7P7z//3/////////BlNmiwAAA/ZJREFUWIXtVmtT6joUxVuMVgFpqyBYHkrQcE5KDgmhO0nb/P9/dXfRGWfueA/Bz67hA9POXt2PlbXT6XyBq+skGY6zX1+9C0LW2x72xXr0fZLBrvGNg33xMunPvhF/15+Db5QylYNiMf54+jp7DYz/PVmNVrZhUUyhaWAzaB9m/cnL5CqM4HUO+yW1PIqiWNTebW47ndtFAWZ1F0Ywm1tfadMSRITX3rxkgw24Bkb3gQQL6xFIQPCnvN8na6O5K8anY9+RQEsgolipNMor754lI9wsslCCwa4lkBFrvIkJsqmcRPIwDI3vDJcVEgDJqwYJSu9NytJyPw2Nzx54W0PNCGVpRAAlxRR1xW0wwYtt2hps3nYxtqUsWcrdn8AhIibHJtaVoThIFATVnKnyDIL+rs0AjK84Nk/nseSMQ3gJWINrp4B51DIuGSGCkdTs+sEEneu99w2D2rlGmzyKOMde7oKncGyjr/PSSu19lUYROxIECxHFPAIkEJaLytqYRLkkBM5o4nEODaM2z41AKZFUE6L+nGMt/aLxMkUh4AixhBjw31kEV3PjXV5i6YRiEwnwiBXhJWS3w9G28aUoSXQEKWU4wewueSn2qCLflEcptpCa0ECCWbLavx8FRAPxOwEzcSDBLHlz/hONjqOYETwQKduMQwwl2bVWUIOSnHNZ2kqjIbAoh5Rveten4/tF3X7XlqVuyycklzKVJuU8lS9PTydtPcPpeacY5U6lpHWDiFApa15Cvp2sd4NTBO1Kgxy/C+I4QMrRDFNoFHhYDtawOJFC1i4EpUuwKo1TPANEVyhEBhS9/TBfn3S1WxRw5XxtcS26ygJP0dMhThkVuGwPSwOTvxP0V/vdSjS1/Zhk44S0UkilJG440MJs/p7C/Xg67T9tlUYc9rutNiXlUEswzLk8ZYptJ6e3290wGfV6o2TYv76hVFY1trASrkwNF4w/Bhnj6+9XvApkkxVVVnGjS68EpEYxbpYBYvpANjpYipbcCtKDrmWeC+F0L3BDdzrjojacacZZqdCdhVbKosPdhCewLRnNmVYVKJwuU1oK0diHwPj7yRujlCotSqMpCtzgNKFqYBF4URoXQjrLK2+wD1yjQVQGBN8+ha6nhHKUr7K+keiOWD7qym0fhqG++DqXVjjfVo+d87Viuq4Oi3Bb/TUpdqvN/rCUxkqmDR4LwR7O2SzZdDq+mw4GD5wJBsBKDrvwK84nZmsjagVAgeeP5yTwSWCFVcvlDX18W3/n1nyfvNF8+fA8eps/nvCC/0GWPD89j3qDXn8afEv8D0N32BtcdQKv2V/hqpMFH8Af/OAHX+Dq4uKy2+3+06Lbvby8+NrQ/wUXS7r9c8boxAAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 17777,
            ap: 777,
            dps: 264.89,
            speed: 15,
            range: 370,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1555,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 426648,
            actualAp: 18648,
            actualDps: 6357.36,
            magnification: "2400%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "Round 3",
      baseHp: 1600000,
      width: 5200,
      enemyLimit: 20,
      requiredCost: 200,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 245000,
            actualAp: 13917,
            actualDps: 26095.3,
            magnification: "250%",
            count: "3",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "592",
          enemyName: "レッド・エナG",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 340000,
            ap: 6790,
            dps: 2288.76,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1313,
            freq: 89,
            foreswing: 30,
            backswing: 30,
            tba: 30
          },
          stageStats: {
            actualHp: 340000,
            actualAp: 6790,
            actualDps: 2288.76,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
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
            actualHp: 2199978,
            actualAp: 39600,
            actualDps: 2565.86,
            magnification: "2200%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "592",
          enemyName: "レッド・エナG",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 340000,
            ap: 6790,
            dps: 2288.76,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1313,
            freq: 89,
            foreswing: 30,
            backswing: 30,
            tba: 30
          },
          stageStats: {
            actualHp: 340000,
            actualAp: 6790,
            actualDps: 2288.76,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 245000,
            actualAp: 13917,
            actualDps: 26095.3,
            magnification: "250%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 256000,
            actualAp: 18000,
            actualDps: 4462.8,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "Round 4",
      baseHp: 1800000,
      width: 5100,
      enemyLimit: 20,
      requiredCost: 200,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgICAgIDAwMDAwMDAwIEBAQEBAQFBQUGBgYGBgYHBwcICAgKCgoMDAsSEhIXFhYaGhogHR0jISIjIyMsLCw5NDQ+Pj0rTioVZRRERERQUFB8Pz4IjAdYWFhkZGQCvQFxcXF7e3u2Y2KCgoIC5QKOjo7OfX2ZmZmfn5+pqam1s7O+vr7ExMTIyMjNzc3S0tLc3Nzn5+fz8/P7+/v///////8mrWquAAAAQHRSTlMABhAZISs1PktWXoCs7MBq3Z+K0XeVtebIvf7T9N7//u3////+/f///v////7//////////////////////wD/0beseQAABgFJREFUWIXtV2l3okoQDVtEJbJEQJQtoTN0mmEY9n38///qVRsX4ph5znlf3w1yhGPfvlV9u7ry8Os/4uF/gl8Pd4BhH2WRPX7n55o2Y+4ZdgYryIaiCofhnKg7/k5m/2q8qO58byMydHrZ8rPUX/8NATc3fJJGzpp7eODXO1z0hb/k/mL8wvKTPEt8nX/g5B2uhrHwtfsJ2IWFsrou8lASGNHC5TCOJSW7E4xooLypqzzD1ozX/XwY92OFPjJ6D3jNz9qmqZKYOIu5Fff7/X6s7ycA0aRpyrKkSVBVEEBRIunxTiPwmh3G5ADsmk8eSSiIqyyFexgYbrHZuidsAa7rAeDr8z0M7Gy5sgMcxREAJMCFkeuROI4j7Oj/ZmeGm0smSor2A01V1lVZZDiI277vG/DFn/PACGvLj4qu604MDVxlnuIwH2AlutT5sx259Q5lbdfWn1AVZY5JM4IZusj6UxDsYoOKvmvqazRNEqZUwlA4i6+3FCNKftbdGA8MeUgOdmr89ZcxMIL6hIuyqm4QFEmImxEY2gkBw/H8VA4rP29xXpY3xtdZFIYlJGFCwPALXVIXPDMR4Ich7IEb46syJyinBJcQIOG+Z6/m7EXAjkCya7oE5yia5sjXJCgbpjlgZhb++f3N1s87jFftrE9Q2rbVJYwScnIiSIax74ozwXz3vfj53bMeTxHMrLAZawxBlGl+HJ9HGMfFgSBFcV8nBDtHAnaxe6MKjBMBvIi6/VDiMCny4mPaAr+8vr5EZfNBUBN4NI9WZMSN/fbmmWdn8ksHrAJOwUFUHCPPXr79eH+lxamukiDOEX08FTZhuTLNJ+lszEfVL0bqtRIHOK/opHX68v7jxzeUQXUroiDK6OOryp+WUVwvjQvBzPAr6pRxqKMAJSC7LEHB+/trSBWUCaIK3t9t7VxaGZZfrNanR6ijzf6AocvCgORlmhXkmIOmbrMwaeOX1xdzamVG0CWROa7KJmw/CPZjX5IAJ0kODiZQSbIKjJGGcZlijP2lwF38y86N5YcEZm2eCSCMNgmCKKc+yBJM0jSJsRegAGAb2lrkmLMEzfg4gBlZORGMY1dVFVShMI6hntELPqG7RXESoa3t+xv5nAdWNLRDoYQQcHcUMORhEMK0OEAkLWlNgsJUE4+UVUFcXOTIks9B8MvjdoCz4EQwNuA4XHRVnNT9ONJKBLLKMAAdQVgMferolzzOJP0gYUKwH3rYUf3QRrQQnvNS0oDiatgPhS9dVoJbrxbcNUGTp1nX58Ghkh7/gBaKLSiCEH31YSpBpaV6StAlJMm7PvPSQwTX6BNn+TCRIK9k7jNBX1VdT0/DMKuaK0CtL5AxnxAwjyo19JRgT2sP8KRBgD4jpDd/s/jUKbDU0MwngpMjiwS7bkgugMNWUrU59+lsOBgaehp8TXAwNUJ5dwHkfybw1ycDO1+pmmHeINiPLcLNJLLyZqfFzAzTR+5Nggbh9vI05M6tXo8RdySLPNKN06EfUzbBNDVAcKvb5NZ+lgQuri+x9sN4VEAJLl7Kbx6NvI4ztN0GhyYipoiipKB6Dgrai4W+UCCoOA+3Ww/2CqFNCawbRihuD1N6QZydkRJbv9HlQFeXJCHs0zQuoDdL47wsYC+nPURAXC+Ywt1pvzMwc8sn2MNwEIBzoT+Fe5sjWJWxTuL0ExLi3Djfublq7UxUQGty8HtNu9SQVqihH67Q3Ow3WX620J0IiucRZRYhVF0Ppqi+aJkZdib5ODoBsuh5UfobII2br3oc2FPm1qUNpQsf21EU5wDbpnmkbwPPtR1L/qpnh3+LVDMg2H6yUWBKa/kIbWXjmHhP0P4iRZVF/usujRU3OCc7aYeQJbLMEVC4cUZ2uoUzDLXrT30mIxgo8vW5atvqRCe0Lp6zFGQH3dxJ59Ewl6A59kaeaaaiPQoXzI0nY07vK6gkX0hghdl8IS8l5elZklaK+bya4llZSaq6UlaavBAfb/WJjAAtG/zwWTEVRTGfrmCa9LWiPD+vDHV5s9elCuT1eqnpukohfQJ9o+uatlyfFfwD1VLLUg0TH44AAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 6000,
            actualDps: 9999.99,
            magnification: "300%",
            count: "3",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUHBwcICAgJCQkKCgoKCgoODg4PDw8VFRUWFhYcHBweHh4eHh4jIyMjIyMoKCgsLCwuLi4vLy8yMjIyMjIzMzM1NTU6OjpCQkJISEhLS0tMTExXV1dYWFhcXFxiYmJlZWVtbW1tbW1ycnJzc3N7e3uBgYGHh4eLi4uNjY2VlZWampqjo6Oqqqqrq6u1tbW/v7/Dw8PQ0NDX19fg4ODq6urz8/P7+/v///8F0x8XAAAAQHRSTlMACBCL/z5KVh0nZS53/xQ3Qf+GqUph/1R3aZe9pv7jj//xo9ux//L/xObT/uD/8P/h/u7/8v//9f7/////////YcASAgAAA+pJREFUWIXtl29vqkoQxoWDrYqotJVqLbpFKB6XdV2BdWH/8P2/1R28Nyc5SdNCc192YuKLZn4+s/PM7HYw+Cjs4WIxtj/8U7ewH7PzMV4tRtZ3Ceur0UpcjtF6/i0hthvLxjSNltdztOgvw1q9TjPdEprG1Of17Aadr9ejroD4mm0JELTWptHF2hpYi+gsTovOAKUFk5olKMlVo7O5tT7XRh06K4gUaDe55ziOl6qmjpZn3TTXdcf8gbWroXoZOijHvpcbc9nnpNbHcVfAYFkAgHuQq4mT6KZOAo/IqHs7JhgUC88hGgBINxqHCFerzvn2BkMNCjk+TnwHGyNynLLrc3dALKF9TYXgEJ1ANIrwEPEeAGtX3TwkSRggbhqRcFTmPQCDp8KYxvBcSqmMMSQsmaB9AKNDawTioRK+G50EJSNYdD/EwWB1hUThO34qW0P4JUNpL0ArwegUzjDVAPJzEqTdjQhhvbZeZADwuQFHMQyAHmfwn5lzz0+IAIBDsIeKpx6AwdMF2pD7eesHAGDmhZdegBmsJI2QklWtYCoT4QeXHiXY7vNLbmQY1okfhIHjoCrwOwOs8TrOCiFl4vn85mbHCSvks44Ae7q/gv20JB7kYVgpbS8E9k/dzsBencACMk9CmGBhSkhHyPFKEnTbiNbqots59DxcKZiEKvAcJAIAhNkcNrP71VJZwPLTIDxgqsIgAoGCoCIASI7j2e58/ELGrXuwB0OhGfy2c/t4XAR5SiJ7Vcjz/dOniOfCNDIISGW4365kTEJgMIkIwsun8yVexUX2Sb4dwfBpymEH0CQJfWiDpLDUKMbJ+zTO1uPdtT5+AnAzrWoJ6XAfabhdSQhrFVycaybk6X1nP19O0WcljKNjvKHa3AIQuialhn0oFVUqZ/vJ4bj8/La2R/b4Zf/7BJEdD78vSmKS50RLpgn4InhbdbgbrPHw7v7+zh2Nho+4pFhLqkFBQjnCOJp9DfgT82hPVc2MItrkNUlLRMuiz2aNa86bKgeAbATlKcI573O/LQvDRQMKNG3dRWkpaKUPnWtwN3UDAEWhkcIYzjijpe4OmMUYhPOm/fmawoCUhLJKic4lPBesbvWbksPdKGBDKsnT/YvbMd/ayTaTqkZSZWrCajBn9jLufIRWXAt4lLCyrV4ZSZOyLnY93ozWMo4fdofD5sTLJC1LglK26frG+pdgW5Zlz9w9IzlTjAnC+tyNf2J+5rnC5ds73b51fSX+FW7GMd9uHzf7133XBvwV1nIbbjePDw+vk4fvPd2t5ebX43DoutZ3n/62Oxp++9+Gn/iJn/g/YnQ3mUynv24xnU7uP57JfwBG47Z/ChBmWwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 14000,
            actualDps: 4772.8,
            magnification: "4000%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQEBAQHBwcHBwcICAgJCQkKCgkLCwsNDQ0PDw8REhEVFRUaGhoaGhofHx8gICAnJycoKCguLi4vLy8BWwA4ODg5OTk8PDxIS0dLS0sscisKlwldXV1gYGBpaWlzc3N0dHQEzgN7e3t9fX2FhYWJiYmRkZGdnZ2mpqawsLCzs7O6urrDw8PIyMjOzs7W1tbg4ODr6+vz8/P4+Pj9/f3///////9x5rvBAAAAQHRSTlMABg0c2hMly4s+5/P9MapXb0livX2L0e/+oMOtS9v+4L3+1P/+/+n///H//tf/6f7////q/////////////wD/KAcdYAAAA4ZJREFUWIXtVlt7qjgULeKl1OLdDuqMCjYEy4kJOQmXkAz//19NwOqxPVLpzMs8uJ78wLWy985KFg9//0c83AXuAneBu8Bd4P8k0BhGp2uPx2PbbBnNSRf07mTl/TgcfG85H3a/L2FOtnuWCSEyTsLNdNj65vLWwqeZyNIkSSiju9e/Rp1vCVjLgMUaFCFKENy97TYz8xt8expyTec8eH11QUDQDsX7hdW4DePRLdfnUbR7e9txwYHLlSDevKmEOcUxp5yGAOx2kRTQWSeFihHejJopjDdRzHAIEM+SJFcyoS5KBQky5lmNOpi5YQgh1tziCAFLMCnxqIkhOgMXhDST7/Q8z2mgNzSThaKLJj2YWy5O7EKTQgS5ev/dSMD2suICKcKpPPJVNG8iYPnn5iuaPJWj5GHSgG9M9rK4DuGPb9O7kymqE8i87g16y55t926kagSS1ddHyhzPPZJwkNTwC/blDDvDlR9lSlGc/xsBw14cuNC1KyHqOiji+haM8ZaktcRfQ6w7C62hh0CYF7Ju/hWUxDU9GEOPQSeSGWFfV5F6dg2f51EkmOvU7uAR+f6qFe0lldqw6dpB9QM8NoFn1wYwR7nSxDQgN/iFIrMrF8LYSwWNlZK5vMVXUSVgdDoXaWUuohyvqeQ4+5quIQ+jkjFarRY6ro470hr5QnKWJ+t1fFNA+NoInbnPYkb8KvIMc+QnunSlmPvZwr/1o4p4q+PF3tAkzbIkCv3lbLbaJwmKtH/y9GwilTHKsyueknimy+4uISaRTh7OMFhHIkcuuZyeKlIIIAD4d2unlZWN8QvQr8voY2Ggr/0s/Vh7jgHhBEPAPhShChEOqsNkezpwWRl+EcRXCo0h45xxgsBHY0viLisnd5cBDKvwZQH5LKCKHJE0KaOxrO/yDQMUryxDZ/+LGxK9BsUBgJ9mpfk0qPjvDf5anwOiI8ab6AJCpufnbzYv08HUJ2k1wdM/MwLZUYCTcwtKXzORi4V2K/f00SFk7y0mltXtdExr7u0xO9chQkjTiq6zOTo9VYICx4GE/fz5Y/HQmqxWM+t8N7XGvednF1Xe0F9EQYgQRggFEMVCx2L5kUQJeK7wMvvT7lRH4fJI2YN2v//sOM567QIQllwIQ4xxGAQBAO7acSp2v98eWNfC2TCt4ehxMO312u3209MfJ/T7/acS+mmvNx08joaWWfL/AY7epcqagI8LAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "255",
          enemyName: "キョセーヌ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgICAgEDAwMDAwIEBAQEBAQEBAQGBQMGBQQGBgYGBgUHBgYKBgQICAgLBwcJCQkJCQgOCAYKCgoLCwsfCwATEA8SEhIhDgUnDQAnDQEbEw8kEQgYFhUaGBYgHx5EFwBQHQFSHQJYHwEuLi5hIgA3NzdsKgU+Pj5JSUmYNgB1RS2cOwewPgFiX17ARABpaWnVSwDpUgD9VAB+fn7sg0qin57IwLzhz8Xr6Ob59/b///////+8Ns7vAAAAQHRSTlMACf8RGSJR+ajl8DowfopIWf9mx9mZdbj80v99iMGwpPfr/rL5wtH135/75v30///7/PzY/f//+v/+/f7//wD/piZJ2AAAA3NJREFUWIXtlttyokoUhqGbg5xpAgjo9kBIVKKBVgyjxu37v9V0N6gzGty9a27mIr+xTFm1vnVeKPz7hxK+Ad+Ab8A34O8BdAuabmiFrglFCKFEBaEoPjC4kRn4WZ5Ppn5gB+PRP1SjcTBwHUOGPBh5NMnLoiwipKpRsW5VlqvV/PV56BnSf0DEcJKV7xgXhADyj9+0rdar+fPAfIgwY1QUOF2+ryMQrT9utC3zPH8dmg8CsCaoKPESU0C2vQUUEUBRlr24nUHITyjd/Sje36uiyWDLXucASFpEKJt3EpwpwsfPw4+PkmawvagBVBFgQlFsdJVQRfXpdDruMwCyVVmWTQtK9l9V5Qg1CNX+GgADlOxOlIARibT6pXxb0oNylUVqQ3jqKEHcAk77FIAov6vidt0ytC/9K70JQvXxSEPYJZRQ0QJU1SUPmlKZR18D5EBDCULLTxbCZ42Aqk7n89eX53EwHA4HVMNhMH6Z55Hqf2HfY+mRNh4bAu5bnmKYMtuldpvIJ5RMN/DvayAFbXmS5YEBTrth57iISnj3VaiDtskJbpPYyF0AQYS33zg+uACSmiVxrN1OwH0CPfUKOJdhP+QHuPrFHiWEUdMsDgvuOwR7F3MCIOOa1of/BTC0q3nC5h3hw3E34LUXLfXqvgGQbu7eHF6A1G/tiXuGaYoZd7fxRqYGmG/yB64A1LtrdpcUnXb/nH3S7Hwy5R8DT00a720bGWZicwdAapik51vTRIESPeCugCAG6cUeNPapH0rc9qQJyXkOWQWI/7j7cN/7N+zLHANaSJSofYd/iI3FZnn1zpqRxA8ePbfeF5v9565tHHWekm6oFq9/eUDMyeVYNoUnHApIeQMQnT7bWga4jDFAE84AoOej5njRZwBpPN1ICvH5AhA9sgAzFsKOWCWaZ6uATuHE5gyAHjFyvA7HY03jDqCrI6QjwF0BT2vXfv9GAFOFXBWk9VXeCpDnaDs+6oI8EZKRJMg+6nlTQuKUaWm6pgG9ZygamHqiAMfLkfmCOUtAY3AUw/JtU4C22qer42zeHA/z3yEq2aFLr/jsdsAFDswNDkkIUOI+BlSSAkXJ8ZwxfrNGy9gOrX48Ch//nPs1CsWz7OBpOpnNlpi80zSlG6X6QegaHFdBdIN+rBHpM4xrjPFMZ9I0/6lndfyYEoSfYUqpvJtp5sAAAAAASUVORK5CYII=",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 250000,
            ap: 12000,
            dps: 2748.09,
            speed: 10,
            range: 240,
            rangeType: "単体",
            kbLevel: 4,
            money: 950,
            freq: 131,
            foreswing: 32,
            backswing: 44,
            tba: 50
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 36000,
            actualDps: 8244.27,
            magnification: "300%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQEBAQHBwcHBwcICAgJCQkKCgkLCwsNDQ0PDw8REhEVFRUaGhoaGhofHx8gICAnJycoKCguLi4vLy8BWwA4ODg5OTk8PDxIS0dLS0sscisKlwldXV1gYGBpaWlzc3N0dHQEzgN7e3t9fX2FhYWJiYmRkZGdnZ2mpqawsLCzs7O6urrDw8PIyMjOzs7W1tbg4ODr6+vz8/P4+Pj9/f3///////9x5rvBAAAAQHRSTlMABg0c2hMly4s+5/P9MapXb0livX2L0e/+oMOtS9v+4L3+1P/+/+n///H//tf/6f7////q/////////////wD/KAcdYAAAA4ZJREFUWIXtVlt7qjgULeKl1OLdDuqMCjYEy4kJOQmXkAz//19NwOqxPVLpzMs8uJ78wLWy985KFg9//0c83AXuAneBu8Bd4P8k0BhGp2uPx2PbbBnNSRf07mTl/TgcfG85H3a/L2FOtnuWCSEyTsLNdNj65vLWwqeZyNIkSSiju9e/Rp1vCVjLgMUaFCFKENy97TYz8xt8expyTec8eH11QUDQDsX7hdW4DePRLdfnUbR7e9txwYHLlSDevKmEOcUxp5yGAOx2kRTQWSeFihHejJopjDdRzHAIEM+SJFcyoS5KBQky5lmNOpi5YQgh1tziCAFLMCnxqIkhOgMXhDST7/Q8z2mgNzSThaKLJj2YWy5O7EKTQgS5ev/dSMD2suICKcKpPPJVNG8iYPnn5iuaPJWj5GHSgG9M9rK4DuGPb9O7kymqE8i87g16y55t926kagSS1ddHyhzPPZJwkNTwC/blDDvDlR9lSlGc/xsBw14cuNC1KyHqOiji+haM8ZaktcRfQ6w7C62hh0CYF7Ju/hWUxDU9GEOPQSeSGWFfV5F6dg2f51EkmOvU7uAR+f6qFe0lldqw6dpB9QM8NoFn1wYwR7nSxDQgN/iFIrMrF8LYSwWNlZK5vMVXUSVgdDoXaWUuohyvqeQ4+5quIQ+jkjFarRY6ro470hr5QnKWJ+t1fFNA+NoInbnPYkb8KvIMc+QnunSlmPvZwr/1o4p4q+PF3tAkzbIkCv3lbLbaJwmKtH/y9GwilTHKsyueknimy+4uISaRTh7OMFhHIkcuuZyeKlIIIAD4d2unlZWN8QvQr8voY2Ggr/0s/Vh7jgHhBEPAPhShChEOqsNkezpwWRl+EcRXCo0h45xxgsBHY0viLisnd5cBDKvwZQH5LKCKHJE0KaOxrO/yDQMUryxDZ/+LGxK9BsUBgJ9mpfk0qPjvDf5anwOiI8ab6AJCpufnbzYv08HUJ2k1wdM/MwLZUYCTcwtKXzORi4V2K/f00SFk7y0mltXtdExr7u0xO9chQkjTiq6zOTo9VYICx4GE/fz5Y/HQmqxWM+t8N7XGvednF1Xe0F9EQYgQRggFEMVCx2L5kUQJeK7wMvvT7lRH4fJI2YN2v//sOM567QIQllwIQ4xxGAQBAO7acSp2v98eWNfC2TCt4ehxMO312u3209MfJ/T7/acS+mmvNx08joaWWfL/AY7epcqagI8LAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "1",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 6000,
            actualDps: 9999.99,
            magnification: "300%",
            count: "8",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "Round 5",
      baseHp: 2000000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 200,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "413",
          enemyName: "コライノくん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYICAgICAgJCQkKCgoLCwsODg4ODw4PEA8QEBAWFhUbHxkeIhkhIiEjIyIiJx0vNSYyMjEwNyo2ODM5QjE/SzRDUTdNTUxIWDhTVFFNXjxSZD5cXVpdXltZbEBdcENmZ2V0d3ODhIONj4tVunqYmpajo6JI4YWrrKu4ubh35KLCwsLJycnT09Pc3Nvl5eXs7Ozz8/P6+vr///////9Q5Rg3AAAAQHRSTlMABAoPGSTLTjE+W9hjb5665IKu75N2yNml7/7vuv/X////0v/+///j//////7//vn//vX///f//////////wD/vyDEXAAABrRJREFUWIXtV9l24rgWLcAECENCQhgchCw84EF25Fgly7bU/v+/6iNDxpWqrvR9uQ+ttcgyw9k6w95byo+//sf14z+A/weAL9dgOLR6X3/1R2uwXK/v5tbg32IM52vf9w+L1Xwy+Dfx1urejgNCduhxsxx+P743eyROFGPby0uebMffrsNauLHvxwTnldJVsvp2FcN1EPskQN7zz6qu2GHy3RQsAAicALnPzz9//nxCC+vbGfjQQhfZT8+wnvBu1v8ewGTjRpHvYps8PT/Fjm3fjLvPe/1B/0+q6V3vfFODHzjYwdhx8W4xHvQH49nqbjH6g2Rgin4QRQ4JiI382ICh9WK1WD8SbG/+oBwACPwodjG2EYkAKYpj38YEgFzH34z+sQooIXAjiLFJbB5cB1BcEsfQmCDGd/88k9EtCCHCth9HEBRHBB4i14+IS3yfPM5MCoPfsWty5Qaua2PfDwKI983uUJGPbdtxHHQDKQyX89/0YniDI4IcExyQyLURCkwXvJSSXIjwdjQY75P9byqxFih2ECQPZUPfCEuwE7t2WitRNlqGd4s1k6fxrwH6y12AIO0Apgk7I9nwEOOQ5lqrpm2rlIa8/h1Ab76DBALfdxDCgWPztq0pLhup2la38KqLnEMJ/V+ZXm90azsutB0KQIigVBkEBn8vS/PkOOr1R8tf9WEytQ0XTRdgfI4jIagMxStAWz5e96359FdO0R9NsW/Cu1ccYQrJa8b0K0BzGo0Xu93syxJ6wyUkALFAAjMImCAK00o39VsGKr3ZJ8na2GXvMx/6o5tHZMoPDIDrEheIxBOPN2/xuvASXlFTQW80+xQ/m6LA7WgPc3AJccEPiBRh0bxVUCVFo+rTCH5v3d18GsAGuWbrKIhcp6uB4IxJVb0VoFuRwDszyB/9+f3V+/jBaO2eo0FC3VMcO0lZ6baqXuN1YwAaalo4WdvT180ta7Sa4gisAGoAQ4rPbQSAWjc0fxtBUSaZyDYTKGBLw80LwHh7t3EgzI0I2BhyTHxg7AinsF/oFZBH1wbFeEkTSq57/QfKs8NLAg+pB5IJIt9HrueCAA0PfNASTmSrEjsM80sfJGWc13TWvz5xKS4Ag/FRCg/qhiPFKQT3yLkDMbGxUACAReEk50ZokXh5w7azI6+U7AD6k9XBK0ExPmyIMJeS4gAT7DlOhA2AzuyMYzspuyKAVE3Jw8dCKRhGN7wDK9OsZAlBtAjtolYFgvl7XhoCYFa34AKgzIwxdWGDkkVYmOd8CQDDPYfhhqKGjUVdIBBelec4lEImmIpGV5WWLMuySr2yqaFGG1pnM+PjFGhWJxx0GlZNTakRvkpyrSqHNbB9LnSdhpS/kbGtPHGWlZnm3jwrysyM4feMKq21oBWg0FCUBWdc61q+I7MuhVN2E9mDoianulNIBwMPLIVMVd7tJzwMxafvYi9yzDxugrJlHxiQnQmiL1TNzHvdXBqeYuLJ9tOCTVIK+hRHsMbBln/4Tr2jLawSY2jqpwzAoIokq6uTOR6sffka3GVyAeiYq1uJUFY1TSX1exCVUjAJb2O8eXh8y7BRWjZvJTSNAfAxkyLLVPt+VZSKIjtMOhaUL/u1vFCsgFm2VWbmx7OiKVHkmkPBYx8R6ryQSZfBYFt0HxiayrQuk5KmMgEXNHyjaYGjCCYhRPKhVfBlo/Kt8eXe3Bg/aMzMnQmgmKQeuRhICXKIfRwhWrP0YwptVWfzzpfHpgn6zE3JwG9kkxP50iw7iIkDokzzkH+YhcolvT4b6TI1lgtiALvKi4bRqklftuPIXPliOKK8kH5IoWLyODmbwXBrJq2ykLMk8Yo6S2UZnmerJfEdcGmMbFDnu6NBa87Z9uVsG+9zyK5ETpoLhlnFc5F29GyKxEF2ECA7ZAXrBvFSRpNn+9c7bG9yFLotdwf4y9fbUyGrPKyN/dFUFGS3WawLo6/ECPrC+PK0f3cHBnurWrF/AFnx7fB6ezwedoVhiwQSpouxteokXlKSZDkvq1qkx4fh+6PR2pYgzcleAozVs8bjyV2mKpaBeSm27Pdmpn4lmZeRm+3+eNw/jD8eioNVoavjZMtVp3DDDlrncCmplWar/o/xAVhSZDSpsgfL+uIfqt6SKXkcr/LmAvBjdGrqujYAOQAMITfFK1k0Yvv1rWAGVFuPH9KSXwAmp+YirxyOYWsrYNBwSdIvG3xa/esDdabz1WPiTefXZs03rOwWT25m17M7Krp3IjuMvrobDec30+nV1dXt/f3t9Lxu73fndf7k9vLu9mox+3A3+hvykBXlgwQ9sAAAAABJRU5ErkJggg==",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "170",
          enemyName: "ゴマサーマン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIEBAQEBAQFBQYFBQUGBgYGBwcGBwgHBwgHCAkICwsJDAwKCwwNExIOFRQRGBkTHhsUIB4WIB4YIyMaJyYbKCcgMTAhMzIiNDEjNTUlNjUlOTcnPTotQ0ExTUk0Tks3U1A/YF0/YV5DZ2NNc3JOd3NVfIVZh4ZhlI5jlpJlm5ZnnJtvp6d0sa16urV/wb+GzMaM1tGR39WV5d6Z6+Gc8uef+Oyh/u7///+Aubl2AAAAQHRSTlMAAwkOhNoYlShBIF8wTHFW8KK4OmjDf1jRk2z7pbfT55LF+6nOd/7A3Or//+7//P7p9//9/v///f////////8A7QPXDAAAA71JREFUWIXtVml3qjoUFbCIVksLDsWhFuWiTEEIJAES3v//Vy9UtHrrxLpfe5YfxOXe2WefgbT++8do/RL8EvwS7AkeD2ky7QsN/v93iFMfbvR/IJAXiEbTxhIE8QARh5tdspab4vXP6QEjKp9wN2koobdJd9+y9S3e9JoR6D7F37KlNW4qobeJQmcq1k/CZIcbuiDo0zXYTg4Myibzm1ZSUDbQ6ta6pU+cGOJtwE+GiQ8XVQsKktQzImQqDQla8jyO5j1RGRrrzdJ2l22loQZBdQgwxpafkDzDMHDMsdKsFPI8zUFEaPkVrEhsTW/EIEwjxspDMBrMVuagSRryG9jjiyTlMlhsh4k1lB8WIb4s8f7wZDZLyzKPA8KwM1cfpZC1sE4A2S4uqTdbobLEgaMNHmPQP8gh/bxgjMaeDSlLPAzM/mMZ+LQ8DZa7dhC6gFJ/+IgEaZ6ewbl6N4FxUrASGtIDBD2TnOJRknpx7Uk6f4Sgb2WnClLXhYeUkocUdLcFO5WQ5cfHaPyIB6p/ij+lYr56Fy1I/UMb/ox8e2+5CPLAsFbxFXxJNrfXm9ibrB2Y2ugaAV7f8lDsj00fFQx6xbUU0I0iCPJ0E2HKoSS7Aq8UXE1B6M932bWDj5FZ10wU9AWAqCK4SULB+PJaEbpmBAPEGMlvS8CXN7Sgm7CACc1hkN4moP7zpVZUFhFllOahF+d3fACXelkc+8WXRQDew5excYFAtzDLimr73i0DXwgVgSCKwjeRbEQ0BaTMCb0HZyysUpAG4/FwoNRXGfHZyVmKuAPB9Q46ROHwtSqNnSgCjmmofUkQJNVC+7UVJHcVlMTqV/uCVK8rDH3LUFVji3L09cMxg6tO1DtxsE1IxueFURL6fpRRXv1zTE6uMOSOWlnwsnQ9D9eu8A/5yz0Wx5dFsFD7GiZ9Swi+UXHi4m/Rp/jUHil7ggSmrH79/uRh4eHFxs7nk7ixb/CLgtB9twHPmhYEk2p3nK1gfo5H6q8InLYWcYMijxZqq78AhBYo8p3lh7UFqDg7v0jcpB7rLIAnlwTkenxUaWq2Bg4h0Fm0n9WuoujDhROntYs8qwJ4+5KwPPHCoz6KwWoGEMZ4t+ata/EG6NXdLKmj19nKgzjLKWUsc8MUIZSmoedVdwtOyjNFweqVx3Lx58+E2ygpinQcBbHb1p6eXjmJbbteAMLQc3kEIE5iHiBw7dVsxtFPT1pncDpDx20iyr3+4Pml3e503jRt9P5Rx/toNNK0t7dOp91+eR7oirw/9n+sqydRIdA1ogAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 365.85,
            speed: 5,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 41,
            foreswing: 6,
            backswing: 12,
            tba: 18
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 12000,
            actualDps: 8780.4,
            magnification: "2400%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "303",
          enemyName: "墓手花子",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 720000,
            ap: 25000,
            dps: 12500.0,
            speed: 4,
            range: 150,
            rangeType: "範囲",
            kbLevel: 24,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 2160000,
            actualAp: 75000,
            actualDps: 37500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 34000,
            actualDps: 39230.76,
            magnification: "200%",
            count: "7",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "423",
          enemyName: "古我王",
          icon: "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",
          traits: ["浮", "古"],
          baseStats: {
            hp: 1111111,
            ap: 6000,
            dps: 4390.24,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 41,
            foreswing: 24,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1111111,
            actualAp: 6000,
            actualDps: 4390.24,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "612",
          enemyName: "ハニワンワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMHBwUKCQkLDAcMCwsODwoSEwwVFBQVGA0aHREeIRUhJxUkJCMlKxcqKSYpLxotMxsvMSYxOBwzOh42PSA7Oi05QCM8QyY/Pjw9RiZARytDSylETitJTTRLTyZHUC1JUy5NVCxQTktMVy9OWTNRWzBQXTJSXTFTXjNUXT1UXzNUYTRbWFZUYzVVZTVYYj9XZzdYaDhcZ0Raazlfa0ZcbjtmY2Fib0podVFzcG57eXWHhICQjImWk4+empejn5ysp6Kzr6y9t7LBvLbHwbvKxsPSy8bV0c7d19Li3djr5eHy6+P17+n69vD++fH//vr///85iHy9AAAAgHRSTlMABBQfJS05RkpQWmRobXJ8g4aRlpqgo6ituL7F0NXjGTM/VWCzy9jd5uz6/wrxD/f/6f/7///7/////////////////////////////////////////////////////////////////////////////////////////////////xoZ4X4AAAe+SURBVFiFlVcNW5TaFrZPKyu/0tLyq5vWhCYRc/lwhAEEZxgDhQGC2II4Y6OWpmVqR8e/ftdm9Dl6LprndR7GPQ/rZe213rXWpq3tKtwZ7P97cbPj8Y0r7/4/3Oie5l5Pni5Get7QuZv/yn5kgDaCD3dai5fDTMWavvVv7Edfs1YtYh6miy5SRpF9xnYtjOUKSRInUh9e9FA6CjyHunt9+7s5oRbHcaKMw6KDrCDPC4L8vWvb3xoWkggQm7mRttu5chIAAWIeXJvgGRtFCMMh77b1F2oRJoi5R9e1f0kFtSAMwjBK8vfvkF4Sh17gJXz3Ne1vjHO6YblA4ZTpoQkyT+dpiqbz1Pj10tA+SPKq4eJdB5Zp6Gq5JEuKIgkFhhi4hhS6ScFKkggFgR8ilEAgYsgnII5Di30x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",
          traits: ["古"],
          baseStats: {
            hp: 300000,
            ap: 20000,
            dps: 8333.33,
            speed: 4,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 72,
            foreswing: 25,
            backswing: 14,
            tba: 24
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 20000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "4",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "170",
          enemyName: "ゴマサーマン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIEBAQEBAQFBQYFBQUGBgYGBwcGBwgHBwgHCAkICwsJDAwKCwwNExIOFRQRGBkTHhsUIB4WIB4YIyMaJyYbKCcgMTAhMzIiNDEjNTUlNjUlOTcnPTotQ0ExTUk0Tks3U1A/YF0/YV5DZ2NNc3JOd3NVfIVZh4ZhlI5jlpJlm5ZnnJtvp6d0sa16urV/wb+GzMaM1tGR39WV5d6Z6+Gc8uef+Oyh/u7///+Aubl2AAAAQHRSTlMAAwkOhNoYlShBIF8wTHFW8KK4OmjDf1jRk2z7pbfT55LF+6nOd/7A3Or//+7//P7p9//9/v///f////////8A7QPXDAAAA71JREFUWIXtVml3qjoUFbCIVksLDsWhFuWiTEEIJAES3v//Vy9UtHrrxLpfe5YfxOXe2WefgbT++8do/RL8EvwS7AkeD2ky7QsN/v93iFMfbvR/IJAXiEbTxhIE8QARh5tdspab4vXP6QEjKp9wN2koobdJd9+y9S3e9JoR6D7F37KlNW4qobeJQmcq1k/CZIcbuiDo0zXYTg4Myibzm1ZSUDbQ6ta6pU+cGOJtwE+GiQ8XVQsKktQzImQqDQla8jyO5j1RGRrrzdJ2l22loQZBdQgwxpafkDzDMHDMsdKsFPI8zUFEaPkVrEhsTW/EIEwjxspDMBrMVuagSRryG9jjiyTlMlhsh4k1lB8WIb4s8f7wZDZLyzKPA8KwM1cfpZC1sE4A2S4uqTdbobLEgaMNHmPQP8gh/bxgjMaeDSlLPAzM/mMZ+LQ8DZa7dhC6gFJ/+IgEaZ6ewbl6N4FxUrASGtIDBD2TnOJRknpx7Uk6f4Sgb2WnClLXhYeUkocUdLcFO5WQ5cfHaPyIB6p/ij+lYr56Fy1I/UMb/ox8e2+5CPLAsFbxFXxJNrfXm9ibrB2Y2ugaAV7f8lDsj00fFQx6xbUU0I0iCPJ0E2HKoSS7Aq8UXE1B6M932bWDj5FZ10wU9AWAqCK4SULB+PJaEbpmBAPEGMlvS8CXN7Sgm7CACc1hkN4moP7zpVZUFhFllOahF+d3fACXelkc+8WXRQDew5excYFAtzDLimr73i0DXwgVgSCKwjeRbEQ0BaTMCb0HZyysUpAG4/FwoNRXGfHZyVmKuAPB9Q46ROHwtSqNnSgCjmmofUkQJNVC+7UVJHcVlMTqV/uCVK8rDH3LUFVji3L09cMxg6tO1DtxsE1IxueFURL6fpRRXv1zTE6uMOSOWlnwsnQ9D9eu8A/5yz0Wx5dFsFD7GiZ9Swi+UXHi4m/Rp/jUHil7ggSmrH79/uRh4eHFxs7nk7ixb/CLgtB9twHPmhYEk2p3nK1gfo5H6q8InLYWcYMijxZqq78AhBYo8p3lh7UFqDg7v0jcpB7rLIAnlwTkenxUaWq2Bg4h0Fm0n9WuoujDhROntYs8qwJ4+5KwPPHCoz6KwWoGEMZ4t+ata/EG6NXdLKmj19nKgzjLKWUsc8MUIZSmoedVdwtOyjNFweqVx3Lx58+E2ygpinQcBbHb1p6eXjmJbbteAMLQc3kEIE5iHiBw7dVsxtFPT1pncDpDx20iyr3+4Pml3e503jRt9P5Rx/toNNK0t7dOp91+eR7oirw/9n+sqydRIdA1ogAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 365.85,
            speed: 5,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 41,
            foreswing: 6,
            backswing: 12,
            tba: 18
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 12000,
            actualDps: 8780.4,
            magnification: "2400%",
            count: "0",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e36003Data;

