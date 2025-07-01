// Stage 13012 Data
import type { StageData } from '../../app/stage/types';

export const e13012Data: StageData = {
  eventId: 13012,
  eventName: "絶滅海洋タウン",
  typeId: 13,
  typeName: "真レジェンドストーリー",
  prefix: "NA",
  mapId: 12,
  stages: [
    {
      stageId: 0,
      stageName: "イワロック岩礁",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 6,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 45000,
            actualDps: 32926.8,
            magnification: "1200%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "444",
          enemyName: "チンアナ５兄弟",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEEBAMHBwcLDA0LDg4PERMPEhIWFhYVHBwWHBwdJiYeKiktLiEiMzIxMCcnNjQoNjUoOjk3NyMyPDwvR0Y6Q0JJS0o9VFE6W1dOVlVGW1lOW1tmYhxVYl1DamVHbGhYcG1kbWxegn1aiYVWkIl9fn+XhxJcj4luk42MjY1loJhspZ+Xl5e7oAppraaAqqVvta2hoaJ2vLTauQh+ycCCyr+1trZ/18yJ1syK39P81AmS59uY7+Kd9umh/e5bIskyAAAAQHRSTlMAB1kUPh5QLqE7bUpZohXBbHqY0OY5ivipXdO54vfyjcXd/v7gpP/77f7+xff//dz/6P/1/v7r/v/0/f/+////iPkxvwAAA8pJREFUWIWdl+12ojAQhomAqOAH2lIUaxUpBYyK0qwpG5L7v6udgD3dP7sS5vSg9fg+mWTeGVDTHofleVaLr/0zkH+7BZbeHaDvrtc02nZOQh+tAcBSu6PemuOSEJpnAwN1kKP+lggheH7L05XZQe+sKehFleaUBOoAZEes1lOc7OaGut7YSn2Jt/PR0FQ/AeSu9kyUid/rIJZhH29XTLf2j4WQEsicX7PbftP/+cTyA6c1whxtcXyNCXZ+1gdLR47dqha6E2AmWEny8CcDPbhdM1wELbrCfMOMw/mz/JZN7z2ArPkmO6YVWT0GWP6XqINmOcWjZvnRivCyZPl103uoD6R7BYcNYJwEtX/MeVLJnMg1x+tH+ftEqvP9Pl2P+obZ5FTwJiew9Or/euQWoMfTJ8qZj75zqjuCEXD09pGlwf6cY8/YcVHM/s6JJIHbNyz9gRPMgFBWeJMhFuSpWUv3IH9+8YxWU83BFBrX0pyCha91AdAooWUZLdt5EM0ppZENJ5GnH58LC1T9nfyorYfNbcWor2u9xevH5+/TYmzoPqEUz9r2wPAsRAH2Nxan3xCf634/AUf7rYe6UwgegXnR+PUTAB8jfU4F2w3b6rXZl6hkt6D5XqawMoeRLGf7ObD8EuwNSUB4On2cVhbYqtoqTFMAlEtNAl5eN+54agRMFK7CIHouROnWgJQUDjKtiNdn0jpsLEpPLuiSuhr2RZRvKpPQSkTTQneAR8VfQ61FmDteV+EOQH4pkvY1hNC3FX+fwJsZERdwNJxhpHRHk0seakDBL8/AY0yliFq96XMNwBQA5o4SpTP8Xrlu62+Akh7qWBbP9asEWElZLNUAVkRriY0ZgGzMVQHfSYOjfj3DRuRVKfSAlrKOwwZQiIsiAOrID3Duw0R8NYCJGkBaUNZRApYScFYF3LfdAGYdAI0SqiEHwz0dpYB2YlAGM+IdAdBO1Tu6A8DYB9WnbDQvpUgmAgCiDpCNfDbhEV0C3C6AxoOwEziKTgCr3r08io6ARtpcuxwimJnBVEOBLIZHq4NqGTXtTU41mIbQVC4plX0gy8DPE2gq+j6ZFV0ADmaXZ+RTADg5Oyu2sya7AaYaPKqUhwlMJNV5oMk6MuL1xpQfLFt9IkEZe7uqDMMNrZLVAoti6indmjRz8BRWLD6G+zA8xjnP0+Oq/QMG0vvTl2yfp3GcHY9xHIbpPoyznWu3RPSn6zi7Xo/wd5Sv9T+hRLT8yQaAzSYGQVZfjoDJss3T2HNb3iCRbhijwWgwnY4HTy8ywvBl0Ptf/n8AY8Wd43wpbXAAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 4000,
            ap: 200,
            dps: 49.59,
            speed: 5,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 121,
            foreswing: 65,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2000,
            actualDps: 495.9,
            magnification: "1000%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "13.3-30.7s",
            delayFrames: "400-920f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 640000,
            actualAp: 13600,
            actualDps: 17000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "オウム貝の墓場",
      baseHp: 750000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 170,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "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",
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
            actualHp: 2250000,
            actualAp: 45000,
            actualDps: 22500.0,
            magnification: "300%",
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
          enemyId: "235",
          enemyName: "ドリュウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAGBgYICAgICAgKCgoKCgoODg4ODg4SEhIVFRUXFxcYGBgYGBgfHx8gICAgICAnJycpKSksLCwtLS0vLy8wMDAzMzM3Nzc4ODg5OTk6Ojo8PDxFRUVGRkZGRkZKSkpOTk5QUFBRUVFYWFhZWVlbW1tcXFxdXV1kZGRnZ2dtbW1ubm5xcXF5eXmCgoKJiYmMjIyPj4+ZmZmampqlpaW0tLS2trbDw8PW1tbf39/n5+fw8PD4+Pj///////8FZrShAAAAQHRSTlMACBckdDSXQmIQtPgtUnnI4D8i/qWNXXK4C//0zP+Y5Kr/y4Mj/9fm8f9j//ba////b//+rv/Q/v7//v/+/wD/9d0IEwAAA/FJREFUWIXtVWt34jYQjXmENyQ4JI7BAbERoApGqhStJT/q//+vOoJssmS7qTn91pOBAwbrXt+5I81c/fUf4+qL4Ivgi+CL4Ivgf0XwWfSmz889//X4+Om638T0j5fv37+vut27w8ufzxfDg9uXrKiqnA0GCdjs5WKG9toVRZYKEsYhZdq+TC/E90MOwGmSJHFIKGXb24vwzX4YJoQkcUyTMIxRxvzhEnwwJgmJw8HAsxBKUMZ8fAnBcILPxnecMKG0MVrDvBVcBe1mPfzjeB6HHs4RjKGV0vQ6uBpNrhu1CKaTmHLgHq4lp5SQOA6jYaM/6Nck6CcAlEqD6CRU1mWGJ7vZ7GaAedSIYNiaJCxhnBBlU5lXVWWBcm3lpJ4H3cVmmfCEMGLyNMXtWFWFy8uqlN1a+OAajGIyAS2y3JwIjmFX9Rxo9JVBC6mGtMxT56Flbo1xm04t/FUjEoICkVIXldUOpTvNKWd8VstBJLgehIxyqdC9MjVlrhI8DISHk3Y9gqvODRoI4MUXNnc8JiDTFM91zW0UtOZKcWbLV+uM9RUo7M11qx5BewJyt3fVeZTFtlPPAxQAi4WtPkapWwFGHYKbm8kSlC0+MKT967vV08PwXzia48XeWGuA+iqcEcyxN7r0MPt0P7cj6Y7ulU7pMw2lhOLohYm6v1fRXqflD0Rh0jMCoV8vzPww+6d6BEFvNDHlOyQ7k1AKcbrnDFP64RcNvdtv32Y3hLvcZa8Qx0zqjrLLPMtSzo6mZMI4SA8fz0Xv4aAV1ZlmXEjrrM2wboxzUFlhfU8TIJnEHVWlkFdWmg89NhghnquyMtQ6zZgQ4Cw2VIZ8ioNUWkkh/A/DiS1yRhfDn9C3D7NISUnT0lHjxxl3heEMpESAUgqYkBjAGQ4aRgk4YPun3hv+/uDbridISegwydhWOcQMjjAfeDaF4ByvOAUBBCXqzah9KsX0fqORQOL/lNLEORqGaakSnGzHBwvOGCFoBzZZjSvRF+7HhdweVj6NxmwvES2BcRoLSFIa0kRabGjGYBtBFccXAe19wMBBoxAutTba97jgdrXdo2eeH7PFiSY0JJT4lQrlogq8wJYEP/LB3ycypfczP3IbnXGEXRjdQinAkVqx5Ji/Xwe+rkcHufwp1OlTPJ1sbEeg1Cu3kvJ8JfgU8c7Jkfc7Quw3T9O3bfRmuZC/hMAU2W6OEgQA7Hfb7W6/3y6icfu9lJ3ZYreH0+KPRLCMortxt/W03qzv7mYPo05ndH9/22ycnYeg3R2v1pvNIlost3usFTLtlsvtdrmMuo2Gb0W9ZrvZ+KwnBb3pcNhsNIej8XgWrder47Nwv3zWg/4GvOFiKMNljRIAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 420000,
            ap: 4500,
            dps: 1125.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 8,
            money: 900,
            freq: 120,
            foreswing: 61,
            backswing: 45,
            tba: 30
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 4500,
            actualDps: 1125.0,
            magnification: "100%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 6000,
            actualDps: 4864.86,
            magnification: "300%",
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 15000,
            actualDps: 24999.99,
            magnification: "300%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
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
            count: "4",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "海より還りし亡者",
      baseHp: 850000,
      width: 4800,
      enemyLimit: 6,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "018",
          enemyName: "カオル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEDAwMDAwMFBQUGBgYGBgYGBgYHBwcICAgJCQkNDQ0ODg4YGBgZGRkcHBwhISEiIiIpKSkpKSkqKiovLy8wMDA2NjY2NjY8PDxAQEBISEhKSkpNTU1YWFhcXFxeXl5gYGBjY2NpaWlxcXF4eHh+fn6GhoaIiIiSkpKUlJSXl5eioqKqqqqurq6xsbG5ubnDw8PLy8vV1dXb29vg4ODl5eXp6enw8PD29vb8/Pz///8HFoUmAAAAQHRSTlMAAwkRq1pwkk8ZQIKjIys3Z7NO/lyRbdz/xqkZgpXr/6zLvv/y48v+1f7f7P700////dP//v7//v//////////NISuswAABAhJREFUWIXtV2t7ojwQ9fK2W2qVbtde1kKx0orYuMDmBiEZ//+/2iBFUYLa/bCf3mm/wJM5njk5MwmdTmt0Lfvq9vbW7rUvac/tWfbYmS0/VqvVwrW7X8zuj8bufJmwHADWIOniwfoCRG/0MF0mXMK6CsiT6V3/3HTbWRCh1vuh0tX0PCmGzpLKtSGALZzRyTq69pQoMOXrkGThDI9DdO05a0vfQODZ+KgUwxk/kl5IIVau1Z7fu0+O/X4pBZ4MWwGu3/NT+ZoEnrZx6N3jdgI1UxCnZT9Hr0cIgNrujlzeGfO7t6sjCkCepVwoKJYw10ihP2FHiweVEkyo9qhajIwVvJyUEHKCuVwDdU1usN8NHjx8A6A0gPq4MzjyziBBm62zmcEMY9JcmDf6CgRN9YhIxk0KjkHD7KCtleAkDKgA7p4FADzdUwEEY6lGiAQ37KSRQbJXQ05opiDFiFHnvBJkRPce84IPIZnA9+0MIE+3Ew3iurKf1ZBQSjRpOqEEgDUNURjxTwhSHxC6H6R2dOSJ3GtnIEMic4IiVkAAq2mQUZylFIUokjIYtGpAkSA0l4kfFwi12a7SNNXNpDYNRQ274JZsYxw/+UEiaCj2S98LMWtOlZKBQjT0SeJ5cVYlHrqpVLdpxQfyCYAirLj3lFaLOTVwyKaNbbCXG9kinLAoVaG/rUDFGmEPQz/A6uGQQs/ZjMQMESlYEsS7TswxrhsSNg/54vqQgjUtuALxqYijwAuSrZ1UjGv5rJy9fNaQcTQXxWrkERqhwPN2LuRoJ2Qe0E0RatkA6Dob58vYC1kSYbI75mS8q0H4FHjMFJ02AKqhBNTzuZYA8gqh7kjQhsRR9OEaJutoUTIF7nthzIhfnTRQn2361gIqm9vN/E5/Wm1+Gjz90H9+1nTAZsAnUTAxMOiOV6paw2mMIq8xJ3VhGcZxFKG3CxMFl9QOQUVCpPaS9b+kSYwCP/AfjafLUN9QdhlKoLQOAMV+oFDLI2T2YT4hh+4qrzUgrY00IHKdx2FEy83hrhGg039YkN0UUDUPQyIgCYv6E5zExOSDUsmRvucZOlgbINNjlTGCvB86Hs0lFNEbuR+ZqYU/rQk8IW83R6+NvTvTdU0xXhkq/dl+Uyrr0BdGw1ktq9LY5OS1dWhC2LZHZpiJTQTclLLqKlgNTt+ch5OQN0iIz+7IXk9T6Ay/vcRiCwF7NZjmejP6F99fEOZZLlVxntRbOjGcbYboWleD7z9fX+fvb28hitl2SrKZsZWMGH3Lsob21dXl4OYxYHLzDUSmX/2KKpC6vevBZP7r9+9fc+eEjY7SeX5+tv7mO/D/+Oeh97yMfi3KN90zHGRdXA4Gg286bv7bxU3xQr+/vDhooz/jnNeLeV9L2QAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2000,
            dps: 219.78,
            speed: 1,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 4000,
            freq: 273,
            foreswing: 34,
            backswing: 10,
            tba: 120
          },
          stageStats: {
            actualHp: 999990,
            actualAp: 20000,
            actualDps: 2197.8,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: true
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
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 444440,
            actualAp: 6660,
            actualDps: 39960.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "25.3-25.3s",
            delayFrames: "760-760f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "人面魚の渚",
      baseHp: 800000,
      width: 5800,
      enemyLimit: 8,
      requiredCost: 190,
      costLimits: {
        lower: 0,
        upper: 0
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "6",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "24.0-30.0s",
            delayFrames: "720-900f",
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
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
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
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "2",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "160",
          enemyName: "天使ヒオコエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwMFBQUIBwgICAgMDAwNDQ0PDw8TEhMWFhYXFxcXFxceHh4gICEpKCgqKiouLi42NjY5OTk+Pj5KSkpMS0z/AABOTk6MVQheXl6fVAqeVwJlZWWfYQGsYRSpagiwZRdzc3Osag91dXWzcBS3dxq3fwG8fg+Ghoa+giPDhCeRkZHGjy3Snz+qqqrfrTzZr1DnrDi4uLjevF/qx2nHx8fT09Px23/f39/356vq6ur89Mn09PT7+vr///8K47FLAAAAQHRSTlMACdW5IhM7LkeKU2Wc63iozIfsvZbJ7wGyI/5ME9gHbR2J6i/+QFYHHO12lP6ptv3eyff/1Of+/vb/+v//////PEmN4wAABG1JREFUWIXNV2uXojgQbbZBEFh8oIwvbBfTutjRjBsNxpjw///VFCitjuBjPu09p8/paN+bqluVSvrt7Q7G8/GoPxx+fPyT4+NjOOyPxvP5Pc4lfTJbLFfrn/9d4Od69bX4HD0jMZ4s1tvdbrf9uVouvzIsM7X8o9Vs9Figv9wd9pvl4nM6GRWYTKazxWp7OGwXjxVmu1Rtv6bz+fgqrvF8usy+GT4UGG5VetiuFjMIYfIdwGceQSo3jwVGi83+oA773XazXoEN4MBqvdnusg9362dMGE8Xq81uvz9cY7/brBbT8WP+29uP+Qg8+wLv15sc6/Vq+bWYTUfzH8/wj2GMx6PJv0dM+v3+aDR+avMSGDXHazk17c/Ymm53wpiQuOsZf8K2PD+iXColWei8GoNW8/wwpkKlUqpU0caLIeheN842TwWjlIk06Zov8U03YsBOU4ExY5iqJHguB80wLdu27EbMM3qaMsRTSaiig6Z9V0Ez9JplO16jG8Vx2EYip0PuiCvBBEeE+HeS0Eyn0wtjAEJECAzbnsAhBc4ZxkLE9SofjVoLHEuEAgiGCB2wgp9CBSmAyRR8rFXs3goJl6qgMDTA51Uuoo5SsVfmgmb3gH7x5xINkrQU1NfL+OGxXuosgGW5AA+tWwGzxzKqTEjhG0dHB9SNQGkOVgjeiQQP8sJlJFKUUDB+qcIZJ+5tHfROTHDUa0LhlMiYEh8tVBK30TmXfFlqgu54jlWDRCRDFPwWiBy3VSS4rIaEZcWB0LQ3M4SGDxAXVCSoqIHk4sIABUselncCtJLX63kNwhDi9NyFNxCRXSEAw0M3nG7PDckAyVv/iyDKW+k7DFPX7VYTV/GzCpWU4TsGA74zHD8g6neFc5+xOyfS6vVMvR7CwVE3CiI52Vnaiyc4MevVo0RJIQi9skFxjDA/9kbkVGbgxCICfjbEELviJwhTmApZUylcr+Jbbpxg4KuUDpJLvqQDRDBG+YxQxK0ScAeI5cTvTjyBowBhFAxIbgNrVAm0MBM5kV1PA6U4xI+LkZH4VR5Y4XEMc4R/bySZUF4UplrA8OIsgwShinH0SAAUIgEGYH6nEe94kCl0mCSInUZAqYyqrkLmoxPRAU6ETLNiypt2zO2IvWqBN9OHgU5ZPuEFLR2sVVdDEUKAEHQdBCEIKRNQ+M5pzFyoRzCYECbQeSVTRUEA1WfpmEQjFiJhjCXilg95Vd+Olwrl9cscxPfu57MCr6ihJP6DBHLorYDeBqGyoeBbT71RDNuPmLwiw4+gUePpt6Lu+DGBWp4SURIuzsh3Si6lKmi612xDNVkCYHDzdRuO+dozUfOCttvwu92u77fbbs14+aVrB75p6Lpp6jU/qLyO7qDWLF6mhtu81/9VMJtF12v15mtv1P+LQObB0XkNPHj9vw3DCbqeXTMNTTP9oONY5iuF1AyrE2IcBU2/47V6MY6DdrPhPXcS4N1qO/X3do6/M3z/9v7MWcwuybrrvmf4q0C+ct36dQi/AGJ7ZOThh8XMAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 13000,
            dps: 3513.51,
            speed: 8,
            range: 370,
            rangeType: "範囲",
            kbLevel: 3,
            money: 770,
            freq: 111,
            foreswing: 32,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 32500,
            actualDps: 8783.77,
            magnification: "250%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "らくだ岸壁",
      baseHp: 900000,
      width: 4300,
      enemyLimit: 10,
      requiredCost: 190,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIDAwMEBAQFBQUFBQUGBgYGBgYICAgICAgICAgJCQkKCgoKCgoLCwsODg0ODw4ODw0SExETFBAXGRUYGhYaHBgmKyEqMSMrMyUyOys9Qjg7RjE8RTU9RjQrVTVFTD1FVjZNXEAuckRUa0BeYllZdENrbGhwcXBve2s9n2OGiISWmJROwnygo59H5IWwsK9k6Ji6urrExMTPz8+n7MPZ2dni4uLq6ury8vL39/f8/Pz///////+IW3BRAAAAQHRSTlMABREbPUgm7GaxMVb5pnB9lMTendGJ/bbt/tHq/63c//D///3///////7d///+/////////////////////wD/1bEgRQAABxlJREFUWIXFV9uWokoSPeAdFEURRbNNhCyQpqBoCmiu4///1ewEbS0tZ85Z8zDxwKIocxOXHTuCv/71P9pf/3+Av2OCINz9IQqvf/ni/LA/vB4SegNlIP6z42J/PRuLl3tprmoL6Z+cFyVlshytet3r5dnBMzf9/x6E0BO7uMXBamd6tsrPCMO5aoap9zcAxMF6rQwkURAHs72f5OEOMeC8xuKi8AEgisJ/AunJm/1+t1nN5fHMDPKmiQ/rntBTNJZU59LfDcSBIksvq4FINyZ7c2xzr2lbF2ea1J4MRXljx1VzLoOdLK2W2kLuvUAQBxvTaY1RYlh+nFeZp/aHCzMqmxZgrOxse7+RX5RTlFXTOXUQjk0JILJAk2XVRzBNA4AFfwPbr4avQlBU7gJzGOvcsIJgv1gtgyyHpf5e27PTyTFnLwDaJOxt54/ZhBjT5WhKLItSixq6bjscYP09AErUk8bqFYHZNmMW0ae6YeBoeyXMwdODMvwui2J/rCjzlbYldpcIixCL2ZZhWAQAxvFIDQJIau/mSv85jYK03h0OB9OkhOL0qc3j8XhkR4qSGLb/8f5GDDyhpqZqa+nJB0HewWWePNvm508tBhAogZ3i/Pfnx/vRMCgj272pjZ9cEOcHxjoE508tgXY8EoM4cVn+/vz8BQSLEcK85zwKwxUL/M680w0AuSTkGGS/f3/++vX58UZsRmw/OCi9R4D+jyCOkyRNkziOwiDwPe/U+sIQRsiPtwBHILqB/+MpB6K8c/0gitMsL6uqLPI0SSKfR8SOb28dwGcH4Abh4ZnMwmC1RK2I5YVJXpRVXdV1mfiWZdkAeP/s7OPtzXGD+Od3TBL7M04ZHWn2gigFxPlcZSGjzHkDwq/2/LsfIc7gOYA2CROdWIR6QYgMBGGcVU1TFymCSgJ2fP/4eH9/85OySPzdNYAvoi0qmkHhXlYUecZTmaRFjR6s66bKQ56I49GNy3MRoBkv53ryHSPFxQgSwF+LM0hBmecF9wEA56aIA3DKj0v4FO7nlxKKg8nsTzaF4QwZDMrzueleixtcyySM8xq3eRJFQAeSdwUQpMV2u7nOCqG/MSzLRw352as1qWtYYcHvmgqqVsfM0JcXgJ6ypNZ+dkGAGhk2tVFD+H0DiMlU9/I/D+qITKdXAGmBzoc8dXkQxxoBa1mI1H31gAbFFaCpY5eQOw9sLnCLdlpwAMehFgCqOwDkIETof/4ukjg8XHPQn+1BdXvX9rY4X0ItbA9KfJeDc1OVPKTmApdnWRYd1sNuMojjpXXiCHPUtcer6IZpeRfAHU5doUHy0LVt191OLsNFkGatyHIEjIQtj/9LDXhF2ysImURx6EFZIa3T0VKbyL0ubrjQIsgrk5OwrL8UEUzo4sh5kwfgCVrdM4jv7SeDlgkr7gJHmB0CHC/r5sv5Ku8qiEyURZky6qNPXBJkmb9XuuK3LgBhS6LiK4d44GmU3h41VeSiu6kVZHWdmPOOv4vWhZNDSfgQP0966Gf3rKpQ06Cjduaur/yjfNZgjPltCrrfX6pW+G52H1LbJm1irx60LrQiDhcsKEHbw0hk6wsAGPrvO6vCg3JVMmwE7RiCFhmEWm5clLwYrcshdSPI7LPFripfZWC861wgEDNMAC8BQNE1VJ36fKZitN4bpSYWkPlVFdtSdgDUodTnIXBBaLr6Q5h1A+y7mW0sN5PV+DZescBY3AWiE4diFerIdyFUUxWJhf0qv1lkzvrD4f2aNFy3hKbcAzeDmnPe3xiVsTs9OPO1a/4wlPhmhVJyAMsK+WhCS9zok0Km7kpZRbuHuSoM1tAi50QNemKkHQpZVd/emFK/uGNXGTwMZmG43u1RQBuzH3EYBrsICKdNS+cngK9jDWJq810ISwhxGDHcqCvDub4oc2rdJK3lxqMHkEaUkREdCxAFDTBaQSOuRHXHBXAru7Ng+ZBEcbDYmW0ZDd5oJQfAcd4X/HweYDHybjTwrO3kYVMVpTFfH+ECDTGXoYF1kaUXaSxjZrF7HrnMetpU8S2yOiCJugUAPtWzOAjSqm3KKuMbwxdLw/3icbqL2NDQTMTFVC9yDGPiZpxKoFT9pBJ16m6evlyE4XgzmhoQqzyNPGx1LCvyqk5D9OajFdGzB20Yi+VUJ0EcWHwtpXGclrmPdeHZzO+3dUGaa1O+BeK4Pt2aXpSFB3Uy2Wgjvubq7bKrj9TNZvFi20dj63y5xm5tjDaLHz9/HlbjwWAwnoygFPpopOM6wRPp1cefqGypbWgzzSCqPJRkBRsxlhisEVtKlqvVCFelJ7z4ZsIPe+MlIaOZMtF1Ve5LfZjEDdnR9Yk81vjz77+5hJ40kMfjFdI4VWdLrACT2c0m6mg6VRcrDdf5WB5IT59M+M5YTFRVW446m06noy/GHyz5f5eaqs7m3Ubxb7uN34zBeJ31AAAAAElFTkSuQmCC",
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
            actualHp: 75000,
            actualAp: 12000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-6.0s",
            delayFrames: "80-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-6.0s",
            delayFrames: "80-180f",
            baseHpRatio: "99%",
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 10000,
            actualDps: 13636.4,
            magnification: "2000%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 10000,
            actualDps: 13636.4,
            magnification: "2000%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "99%",
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-4f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "視界なき死海",
      baseHp: 1000000,
      width: 4800,
      enemyLimit: 10,
      requiredCost: 220,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "445",
          enemyName: "ルーパールーパー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwMDBQUFBQYFBgUFBgYHCQoJDAwIDQ4KEhELFBMNExINGBYOFxcOGRkPIB0SHh4UJSMVKSUZKSYWKycXMCwBPj8eNDEdNTIgNzUdPzohQDwhQj0hQz0iQz4kTUUnT0kmVE01U1EzW1YuYFYtYVc0amE8bWg8bmczdmlHcGtJcG03gXNUfnVRgn1YiIFclpBcmJCMkjRpoZSvpBpurqd1v7jbwAl50ciJ1suR4NWW6N2d9Omi/u/////3JkHNAAAAQHRSTlMABPgOJY6mM8UatUrePnNZZTKDzk6XrARjiHbdnvjMt+r/3orO//n+ouj//7z//tz/6f7////9/v////7///8AIKrvyQAAAnhJREFUWIXtk9lymzAUQK3KiUPwvlAbzBpLKsIQQhQUkCD//1cVEC/TaTKZ9K3D9YO1nXN174jB2z/GoBf0gl7QC3pBL+gFvaAX9IL/VPDlgNvF+2CtfZ26Cu2wh80/0J3td3igh0F7BWh4e/ANwcTxA12BYGFgZ/QVAo40AC9TzSXYUcVD1yLe5P1Ww+En7Rg57tJdQzBZd6XPAnpY/FQVYGxoXQLduXc/uYFBbRKaQyc0ARxCuHGI5S4GcIrxaqj2Z8FuQ2zrYwFYetinwXJFAnNjGfrSI9gawfnKpu5I1zQjdkNKPhIAbbF+ONgojonvU8IICh8tO8bHo2UjT1+G5hxjj3ru/O/0+uH4xGVJkPrFNEbIpzQhrJSVTJI0NA1iOBRRtBqCP8jRbGpOd8dcVHVdVzzPEIopiVVQwtVSyV5eX5IcI0wpwd4OXsOT7f4QZixLeUN3wQghTXpCaNasSvb8+sIqESFqb2b6hQeL3eEp50XBMyYvfF0kWZGSmMSIsHahyp5ZKmuBrdUcXOEPjwouGv4qfQvUtShFmaKItRuV6oMayMz2jPMj0sx3vOC5OGGnEJUo0iTyados5nm3xVPf2nUvbAAmx7xlWZZkrV5172wouYyIrxqBslYn60oKIaVkCHvTpgg4b9LzlPFSqOpFoRRVcRYwUWfI95EflQqtK8G5OiZLzoPNrv0kZmGTPjnllGkua8nPBlYoXeaTshCVzHPW1ViJp/0CdE3Uf6lwxziKklTVGqlM6kBKokQ9mTSNimZaqGGEMsZy3paKne3lMwQq4Eif3tze343HY08dyXP84xR20qi6udpe3d3f3kz1ywv8DSQONTXmc2eKAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 50000,
            ap: 40000,
            dps: 150.36,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 7981,
            foreswing: 111,
            backswing: 7870,
            tba: 0
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 400000,
            actualDps: 1503.6,
            magnification: "1000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 24000,
            actualDps: 26666.67,
            magnification: "300%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 4000,
            dps: 2105.26,
            speed: 3,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 57,
            foreswing: 28,
            backswing: 5,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 12000,
            actualDps: 6315.78,
            magnification: "300%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e13012Data;

