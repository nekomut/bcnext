// Stage 36005 Data
import type { StageData } from '../../app/stage/types';

export const e36005Data: StageData = {
  eventId: 36005,
  eventName: "異次元コロシアム",
  typeId: 36,
  typeName: "異次元コロシアム",
  prefix: "SR",
  mapId: 5,
  specialRule: {
    name: "生産キャラ数制限",
    explanation: "【生産キャラ数制限】 １回の戦闘で生産できるキャラ数が 60体までになります",
    ruleTypes: {
      "7": {
        "Parameters": [60]
      }
    },
    contentsType: 0
  },
  crownData: {
    crownCount: 2,
    magnifications: [100, 120],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "Round 1",
      baseHp: 1000000,
      width: 4800,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 120],
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
            count: "12",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 9994,
            actualDps: 18738.76,
            magnification: "200%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
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
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "73.3-76.7s",
            delayFrames: "2,200-2,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
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
            actualHp: 800000,
            actualAp: 75052,
            actualDps: 5729.16,
            magnification: "400%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-440, 440]
            },
            "curse": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "Round 2",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 120],
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
            actualHp: 1000,
            actualAp: 400,
            actualDps: 800.0,
            magnification: "200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 54000,
            actualAp: 16200,
            actualDps: 15677.46,
            magnification: "1800%",
            count: "2",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "182",
          enemyName: "ハサミーマン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 24000,
            ap: 2800,
            dps: 1647.06,
            speed: 24,
            range: 199,
            rangeType: "範囲",
            kbLevel: 3,
            money: 700,
            freq: 51,
            foreswing: 12,
            backswing: 39,
            tba: 1
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 33600,
            actualDps: 19764.72,
            magnification: "1200%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            }
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
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "146.7-150.0s",
            delayFrames: "4,400-4,500f",
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
            actualHp: 680000,
            actualAp: 14400,
            actualDps: 25411.76,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 10000,
            actualDps: 9090.9,
            magnification: "1000%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "Round 3",
      baseHp: 1000000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 120],
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
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 24900,
            actualAp: 3600,
            actualDps: 2454.54,
            magnification: "300%",
            count: "5",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 1
            }
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
            spawnTime: "18.7s",
            spawnTimeFrames: "560f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 28500,
            actualAp: 22500,
            actualDps: 4927.01,
            magnification: "150%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "2",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "379",
          enemyName: "天使ブッタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAEBAQFBQUHBwcICAgJCQkMDAwODg4PDw8PDw8QEBAREREdHR0iIiIlJSUmJiYoKCgoKCgyMjI5OTmHIgFAQEBERET/AABQUFCRQwtXV1efUxmfVBmeVRZtbW2pYCFxcXG3ei2Kioq8iRLHjhfHk0qbm5vXlDHNqQGoqKjZqx7RplnarTnYtBrssQfbrVXkwi2/v7/oxlTr0H7s02/Q0NDt1Yvc3Nz//wL355jo6Ojy8fD6+vr////////VHyq2AAAAQHRSTlMAC9/LGTFjdlNBhqokmGiCzgnyq7oG+ssB4gr8WCJA/XHxWPsXOJX/4Qb+SKp8MQzOXv6e2MP/7P4C7v7//wD/FRcZIAAABEhJREFUWIXtVn9XozgULUopUCgVsEyKnYhxzZpWrVFjbJLl+3+reUnHnbZq4ZzdP70ePZbm3bx33y8G//xHDL4Jvgm+Cf4nguM4P58vFj8vLi4tLi5+Lhbz8x8dNrvmi6ub1Xr99x+s16ubq8W8r/3lerN5frp7XP61xXJ59/Tyunm+u+7nxWKtzStcuJgDIJi5DedyrdvX5UMvgvnVy0ZvXp/Xq9XqBrBarZ9fN1pvnu5v+8Vwe219ft7s4Pnl6fH+oZ8DFg+3D/f3y8d/sbwH6/7mDj/e3q5v3/H25uTzEr/LzD88smvjT6ax10GQoXI09HdO+eNx6G2ZwqKhaScB5QSVaTB8PxghikbwIcmqhisad4UQIWWUYARlQ3dtWFItm8AbFkToVqGoi8BPmWnhR9LKeh4iJpQSVVRQDU/pSdBJECCmW4DhKBx4KeWcUY7GjbUXGHdqEExnNZGWoeXV0EuZYAA05ZZTSdqZhQhxwZUjMCT2Rw0nhJM85+CAaeVHDbwDRi+uhQFjyyCqrKopty5gzIBVNQcO+GFWFGkc/imVs3kSI9DbEhiNa66N01RzTKRm9XivzKKi4QzXNSq2jp0l4STL0mk+w9xYCoadng6KYi7InoZRxbRhVECUJST9LIJSIQBQkSsXg8ROTve/gftxOdyxT0oQphWMEkGBOcmc68awmsl3xwmzUlBHo9ks35NgYlPbasG55gxNSiLfb8IAquzFnAIjyZmVlWE4loZR4g3OzmzAKYWnwqkkKYbyMb+jNVqQGVH2s7F/th5ILCSu8xxVWZilEx8IGFQbYRJcgArjpt0Brwllst17RBQhkAolCaKsSW3fGUEYh1Iltcv9DowC7D+S4ADFCkLS8I1C0CcNJJcKBe07Y/uHP4cghFqfIWQua5cFLZWmRZA2ugeBlYbpOp8JhXOKBr4/ImAmy2FSih73WwoggLagLJ+xahCkBbWJGntRLwcsoDIhbMagctJB1tj2MGzsTUhP+1ZhqlutleZlNJgQay9Q4GU9CdxEseVmeAnTyk8b8KWCeZnRng5oQXFeM0WLyHO9PJmEdvj2JDAcY0Ly0ylKd1vKNgUxPWKAFmG8gaUxDA63E0zyHvezGSZ1Pj283c2lgredLkC7ENAsTz9bjmG3C9AA2kjQ/NPl6sVEdzKACKDeF0M9Kbu7SZNp8PVOiKrOdtCHI30/iJEL4pgbGjbdEQyn4IKbpF9pwIujLyewRWHMuPb6KF+7bZpj9m4+gU6/d9KuMcivJCcHO+kj/BL2ryS2XLiAQbWFcerNZpgeldDBNbXm03haw7arcdM0CNvcqCpG0jSdbxa2IwwMKD8jMOnrcRCEkRXGDr1SmOZoDlwMBSxUw1MvtG9J25yBMFqJIsm4bjpejjw/GdWkwc04DHLYH/koBIwQrIx6HMZ1Mw2GiX9EBj8cxaeAkxP7ewD7xek4HoXJjsUvL6NIwJVJ/jsAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 800000,
            ap: 6000,
            dps: 8181.82,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 6000,
            actualDps: 8181.82,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 340,
                omni_range: [-340, 340]
            },
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 10,
                duration_s: 0.33
            }
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "119",
          enemyName: "マンボーグ鈴木",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYICAgJCQkKCgoMDAwTExMeHh4iIiImJiYnJycoKCgzMzM0NDRGRkZISEhNTU1SUlJcW1t3d3d8fHyGhoabm5ucnJzIqguioqLWtx+xsbG2trblwxvlwyDixCbjxh7oxifjyDjxwi/BwcHrzTbbz2vez2fJycns1Erv2lnU1NTy3l/e3t716YH//wH364z07JXo6Ojv7+//+sb29vb7+/r///86574sAAAAQHRSTlMABwxIpbnI2OswPhMehCdCV2elGzx9X5jltYCz0ejL6wX/Ef7tQyMXUGF/Bv4f4cX9Onr+n//fAbj6////////5XCcigAAAmZJREFUWIXtltly2jAUhm2apV5IgADGi1giFydEbQWq2kaKpPd/q8imrKEzknzTi/5X4Jnz+Sw6v+x5lxSH0cXnxhpPBnetAMMSpa0Id4ChpE0VDwUVs14LQFRwRdMWKXRSKFQ5bANgSrHssVo2qh7nv2wBWMi3b6vnpy9aT8+rzXpuBfB1BvLtdbVeVlrL9ebn78oaoMTr9x87bdYvVgBdAlWK6yZ81aqql7lVuAbkXColc98ybq9oquMZzZ1PQlxwKSma5f3ALQm/B3QPdBcQSEInRJQz1UjQWeKwl35G1E6SFD3rJOJCqIP4bNSxTKAPsDwiyNLSHEKgh6COCdiOMMLqXDizqWIEqZBnhHJsHt9JIPkDkIoT2vwURWwMCMDh9RxBvG0o6hsD4oLte4jRZEGaQ8XS0BxA9i3ABJLtPw6AKeC+rKtnlFChS0C4WQspSGkDkGiBKeF14O5Qiql5CZQLsCBCHc+SC+MMOinS9wqEdQJ7CZBnpoCokEpKRhA7AqBBZLyTfnLy7kZsEpiGa91v/eikAKurthnDyTaWfStPuSsYP/WDkZ0naU89NhRR2jpSM4dD/6Zja0/0MyS326wEzl2+E8JJY8uSk+nY5XqKUgwFIxCk4weHcP2RVUohKUxD2+btAdN6Cixxvp39tG4BTVzjPT+vTQCbu+AHZfU2wRafmhmhSgKbBTxTHzDFU9cZaPWgbsHIPV4vtGxVgTecEex+CmoAYEWbBLwhhpYe8iGDgfllfElBt12857fK/7/+CfmdKI6DMPxUKwyDOI7sNjvsXl3f3H7e6fbm+qr7t814B6c1kYwVXmyVAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 1200000,
            ap: 9260,
            dps: 1076.74,
            speed: 3,
            range: 840,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3333,
            freq: 258,
            foreswing: 59,
            backswing: 62,
            tba: 100
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 9260,
            actualDps: 1076.74,
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
            "slow": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 28500,
            actualAp: 22500,
            actualDps: 4927.01,
            magnification: "150%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "Round 4",
      baseHp: 1100000,
      width: 5200,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 120],
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
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 7200,
            actualDps: 13500.0,
            magnification: "400%",
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "8.0-11.3s",
            delayFrames: "240-340f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 8000,
            actualDps: 10909.0,
            magnification: "2000%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "133.3-136.7s",
            delayFrames: "4,000-4,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 161250,
            actualAp: 21000,
            actualDps: 16153.85,
            magnification: "500%",
            count: "6",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 950,
                level: 3
            }
          }
        },
        {
          enemyId: "521",
          enemyName: "ジョン・レオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgMCAgIEAgIFAwMEBAQHBQkLCgoSCQUlDAAlDQARFBoWEh0ZHiccHisbISkqFjtDFQIeJC4aKChtFANAIlmeBg4mPj1PK2vFAQ8sSkg1TVRXRTrNEQ5gM4OYMgA3W1a1PADfJgh+Oq+MSzVwV0xAcW3KQwWHQ7vpRgSVUM71TgL/VAFUkYypYuXlX2HFa8q3avm7cf5ntq+slNljzsWqsPdx2dCwyemD6N+O7+uV+/Tv7+/////////wn4kLAAAAQHRSTlMAORMii1Hwx6Br0LJH4LqO1vXgIfDw+/31/v9+/f7///ri/v/////7+v//////+v///////////////////wD/YVvE9AAABF1JREFUWIWdlwt3okgQhXmKoCAQJOgQ0UBseY+oPQjM5P//q61uMJvHrGn25iTmHK2PulW3Ubk/vbi/SNJs29Zmqvi3J//cCv8bwNtJnufZYWvP+P8FkJdh3uvZnqmyzIsjAepyvQmzAbFcLj/aYQOANmEC6jnUjjyqA/jptXnZ7/cvwDksNZEVsM3ycN0jHp+uv19/X55IJ8+azDpE2naWhWH49PuV6EoIWWLzjGvMs7w3/3KByxPG/oUwE3DBABDtHMYHBclmf331JwUALnu62u2MBcBpId0C/AXAlbq47NcEmdsiC2D2OKxgDRZ6FS/rDW1BZQFMb4Awexsi7CQhgZixAFSbFIchxOjwdKX1SQKmiAmNBSBoj+shyllCgwSlIUwlT56ZAByvbfLPCh/7Q8EE4GQt+bcUmkm2pJYXOKYgfSGQUz3mNPYE+1a+nUy02UzrNeNZAfOnN0CvZ6KDLbMAeEXRncOXMYIOmsCUAzfyg+Px+PNz/Vbj2WagBKsT1XsEbGIqMA5RtsrqIyGDq0usdyQYgnsadHznvn+OASDO9aAcANWNYN/eIr4HLCzXiqK0LMs4rQYTWaZx7AA3ciOiIIricjCRKOwATrJWtB4wVpT2LST6CACn0A5WAWX0hMM4AGkefKQu+SclJg5TdoCsWHEMdW55WhFQVB5HAVQ9cmmMCKBMwUt8Ov4cARCtYADEpZueCAFCkY6w8GC5NMdkiMGJEOLqFEsjhji3IEVpHECcoAUgxFEajNmCYNIcRdaqrCxKIKEwmAEibCGi44fq1CIHoiyjIDVYh6gHblVVJe0hhTTQQxUE0cpgO86yFdHDDB0EAUzDDehEraiMdbYPGLJuwRbKfgx0G2SnCgz2ZLINkTfjNI3peVpBFMjtrTKVyjVdRgCYAKUAWQUrd0VuLqkytaacyPbOtHB8KKZZSsnBTsuqDBaiJDJuYeEX6HZHpBEgcudvz38LeDAR+lXdbolxDzAFdgDH6UV7Ggh9HKLA4MYAFkXXXipAwG9FDnTq8iMAquGc2669XqB+UKpw7ADZKzxct10HjF9U19bjRwAEo/AxxnXddDehBTcCwMlOgXsNCGRw3wB49X2Lote2DdS2DSKEwnO4+wDe3CHPHGLGG6ZXkMsWMAWECuT5GP24CxDNuqvx2RxWUCCEyQQR6rrGUwwfHpy735mMcweAbgdHHb5cyT4i5mtkOrjG0LzTYOzM7wFM3BR+3SEVvHgG9N/WGJmqoJ8xAZjkQb4PwP65rj1RkBDyMXSPPfJJRm/axgNA07X3LZjnpkCFN+Wnjl/UxD3tWHBaIIGFtqvNh3sAaQfXRN5uV4Bp3Jyd6ZxccA5xhPGLHsbg7h5AUOgUybW7pvCMIRJGQWf4A+H6uxyIyq6uIXVtTYwMr+Id6MvhRKeBLcr3OxDlqekQ6cqbJh6MsC2cSd2AfF2SJFWV6Yf1r0HiVQkqPstxPM9xJh4RRU8lSf7wxvIP/DzKhcLG4vkAAAAASUVORK5CYII=",
          traits: ["赤", "エ", "ゾ"],
          baseStats: {
            hp: 3000000,
            ap: 3500,
            dps: 1693.55,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 62,
            foreswing: 17,
            backswing: 17,
            tba: 23
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 3500,
            actualDps: 1693.55,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 600]
            }
          }
        },
        {
          enemyId: "558",
          enemyName: "アックマ閣下",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 75000,
            ap: 15000,
            dps: 6521.74,
            speed: 8,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 69,
            foreswing: 6,
            backswing: 10,
            tba: 32
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 30000,
            actualDps: 13043.48,
            magnification: "200%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 250000
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 1050,
                level: 1
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
            actualHp: 47500,
            actualAp: 40000,
            actualDps: 29268.3,
            magnification: "500%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
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
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 7200,
            actualDps: 13500.0,
            magnification: "400%",
            count: "10",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "Round 5",
      baseHp: 1200000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 120],
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 5400,
            actualDps: 3446.82,
            magnification: "300%",
            count: "8",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "3",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "427",
          enemyName: "クマンケン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIFBQQHBQcIBgoHBwYIBwoKCAsLCQ0NCg4OChEODBAQDBIRDBMSDRcVDhkSEhAbFCIfFCc/AD8hFiomGDEmGDAnGjErHDYrHTgzH0IzIkE4Ikk3JEQ8Jk5AJ1JBJ1NJLV9LLGJVNHBYM3ZWN3BjPIJuQJJvRZV4RKBxVoiCSa6HU7eKUbp0aH2WWct/eoKfYNinZuSuau61bvmUlJO5cf6rq6vExMPV1dXl5eTx8fH+/v5Yk42TAAAAQHRSTlMABw7TxRUlSB2ZNuItaUGAX7NU/4t3BGufwtLplbqnyf6y8NX94f/z0f7/7P////X/////////////////////pAOhpgAABGhJREFUWIWVl+ta4jAQhi1rEREQEVZADgVK2qQhhJADBcH7v6udtKALuDQ7+sP6MC+Z0zfp3d2/zK+UTn+WqvWG988P/mxecxIPakdUex7NWu6u5Wan6rUSacTEz/7Tihij44qrf2scRb3aSKWpSapeCawOABY1HAEPcwqfrluAjtrd0WQ47IeMkXHZzb8yxJgy3H5bmlTgMMSUMvghfdcstqYhYgw/VrvEaC0wZpk5p6DURSGEgN57LyQFU4TkhOjBDeAP7QFYGAQIGwAYanlwAtJ2C8EfIgDQIAiDHCBtEixh6DsBvAGBHKL+UxBwG4JJuc0CMKaPTSdE0zZNv/HwTnRqBNRS2aIgzFAw7bgAoIx0WvcaCQQgVgudqhBRtEYACNzSUO326qW7zjI9AjTFjCI4RfDuOA4l34NUSIjfSCk4eCIMtST9ZqnY+Qsy0QZSsFis16+vr+vNChPXMuRWjk2q2Xq3/9xv0Wr/edit8MxxGDJ7W6Zmsf3Yf35+HlabA2D263fXcQTzJyqV68Nu8/Gx24BtN5vDNmi6Ax4SqP9it9+u15vd4bDbbncbHD46q1peA7nYfOz3h/0eTrHGISE9V026q8V2DFLNF4vVaoEXCy55iLBrH2QpzM2AJGhjAKcUc+3EPIVXZjQPXUUlm4MfENhVVzsiH+RLo7TjFEMpj0BfIdhpTxRYXgNNrwhMJlUXQF4DQY0U6gKwfHOPgDPFmDDnAOUSw7GLGJeMyQuASRzqkEdgqJRM6IsQUlHcS143V2Mijb5MIlc6LuylSg9r28NEXvcBETopXFC1OaLQ/JpctzPlUuLCGBoRRsoC9KU/pMWIYmVsRRRj8SMADiXYvKiX3mALBMycAYz9NRageFQgbF6bMIoRl2cAbUUemCZVrCAJXtfuYhIw8l1EIziHnlQkU5bJ7fVSmmTLPAzRdxVgO0FTWoClxbfXgz/ObwM4+OoDbf25SGUGSAu6uTLLbzQMfQPsI+dQwuyxYCK/ASI9qpLKnoXhWY+ncnATUJ6fAPbjNmtGcYiBKxCkDKAmNwG1EwATm30rCEZa/9N0GBM7ASjBIOSMZ4nX4P7VWo4ARkOlOf9LURRWIntMHAFwS9PmL0UQSNhucAawaWTOBS0EgM3j8ibgq4xsOj9XJIhJcHum24BjJ9pujs4VDU+ziLS5DTjOgr1v0+MkH6d5PrNVUPPkdg7yaWRwrQuzxrMV1Nqu9/FQMQWN3OnfBgwIXNdxH0PO7Bcn4zieYa1Q+DJZ9hId10oFivIWvszovDkmoS2ZGpYr5VoMEoMGo1m1kwzgEnob0Og1unjot8ZTkNZ89LxBiBnuPDc9/7l4u3o1r9rr/PZqQwCYOHtzrEeURS24ARd9+4lRrRx3rBhkHo35f7z1ncwCdH6Auwo0R6GcXwFGtmb5kaE0zPnF9WTeQMjRyQm2zeg/7vrg7VfKbRY9Pxyt2Ufdaq1c8V0vu5X648v9+9OvL3t6+nV///JY/0HS/wBkFjcluHFpbgAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 120000,
            ap: 5000,
            dps: 7894.74,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 19,
            foreswing: 6,
            backswing: 3,
            tba: 7
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 17500,
            actualDps: 27631.59,
            magnification: "350%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "310",
          enemyName: "キャベロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgMDAwQDAwQFAQYLCA0OBw4MCQ8TDhYXEB0XEhwBAH8dEyUgFikgFyooFzcoHDMsHjgtHTwxGkEvHT4vHT5hAGEvIzo0IUM2JkM9JlEzMkZCK1ZEK1pFLFxHLF1NMGdQM2tSMnBRNmlYNnRcOXxdO3xnQopsRJJqToN3SZ97S6Z+TqqDTLCJU7iLVr2UWceYX82JfZCiY9yMfpapaOaybfSVlZW5cf6rqqu+vb/T09Pj4uPw8PD8/PxTikoxAAAAQHRSTlMAqsNNngh4ExwsPmECSM4bJpF0NA5YvwNEpmiGBdzwzJqpw7b/5M3z/9y+//Xr///0//7f/vv///7//v3/////dysCMgAABHZJREFUWIWdl2tX6joQhtlHuVSOchOl1JZb6cW0SRNiYorA//9XZ9IWwb3O0tl7vkBZ5Mnc8mbaaqGsN+/c97pt3J//z/pZEkevq7Hzt4C7lCRc6yK6/0tAuxMyaTRlT3/gQ282630CXGE0I0lIFuPed4uubPC637+e93NSoyULQ4ijcJGE+f748TZqEn9fGEk1TaQxphij1rdX5fv7/rX7CdCcUqEBoCIUwNl9HMsy6n0CjFYiYQDgMQowLY+n02nXJOEuN1obHce6KBQK0F6WZfnxcQY4uVEAiHy6dSMXAxjujh+Qg92kfuylhnEjFy55cx1MFdrj93J/OB3LWf3c3WgZkrhzt3sLUEXo7Q7H03H//jY9R6Q0Y4ues9uNUd083x8+yvK9fD9v51GuTTroenPUkey+ljaC0+nw2vzfI0yYfNJCLe85/fxtfzgcLnVsu4QKU6C8bzur1OdSCMHK/b5cOu37fre7hjY0Yo5yf1RoQm3PCthVxL4b5Z7jUyqN9DCAm63SSgJAS9hUE0WJTjsZZdqoJSYF/cwm3JqG5mPMqJBnW8mBqVYIwCOkiyrTmIbzp5ME3FdcGjFCAO4DasO9NkYbdzBJHDyFAFA2BZ8AxZov+d3PgGkAEdgcSPUZhWxYavHzMXpcJYxXugMVqI1Tpmp3pPdzCobbUNX7EfupQEUYpUziI4iDGgD1t+mT1gNKqiSoTffH9S9e7J8B9gNERCsAUJBUGfR/duDZixdV8jQAgMCZbUjOiST+6uZnB0AH4idZN2GiqgRWwcswDPqY5TYHblEDQkKK3M8amsxnqPWtydbN65oTnU8nTmQDAYDOkNfycOumDcDkjpVC0wCmOMDjehHpak0FaE0L82cevCy3VR3PACdvAJgmqjzwgkBdQmh119YfCZKCHCyGfkjqylGT2qPj2ZMkqI6QQwGc5roTGZMrW/lpBnLOmd4gJ7T2qGp7zZNsVTntbEEMmcCpob0Sc62lFiRYzOvOgwuBaSolbirpeYU2klOyvUxSIxhLiCpQbTDcgIxD/mk6vTg85gbdBrZrwH2yvrsK2AM5ShTuSrmHo8MTsb4uedXMTCoUYLCRBlIWDa5/nNvbSea4ozBZKBaq4ov6Dzai8PnmEQX4d5rp5Peum6T5KEMCQNWlCKX4It+Pm8xL0yEOANupJFZfTs6zR90IKwet53khg4y41y5Mi2jNvRckAYLIArK97ptZni/E19J8Z7NcBTF5usrjMBWBKObPWBeWkgc0G1+CGKZVabBpBBd0Agp0kXGISiZK/EEWlAyVvMrjLNUEkBOsC3Cm4DZNLyr64gkVSrlENlNrEFkZvtagYaRhVMNeTrChtNdyfhEF+AXuSrnElnJegIZQkS7PumCRlPBsjXzlA12AqSDkzG8a+MW+NfIkETHula9+w0pCQfy7dmUjOzCJEAjfj0lt5+am3+ncZvZOVkkiw4dfYLe3D9XExUNK/JvvCG1Yfnv769fTOsphOHhYPPzT2CJKi6Lwn9zO73PKfzR06Nvi8RLiAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 120000,
            ap: 5937,
            dps: 1979.0,
            speed: 6,
            range: 550,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 90,
            foreswing: 11,
            backswing: 36,
            tba: 40
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 17811,
            actualDps: 5937.0,
            magnification: "300%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "base-destroyer": {
                enabled: true
            },
            "revive": {
                times: -1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 11367,
            actualDps: 21313.14,
            magnification: "300%",
            count: "4",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "6",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "427",
          enemyName: "クマンケン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIFBQQHBQcIBgoHBwYIBwoKCAsLCQ0NCg4OChEODBAQDBIRDBMSDRcVDhkSEhAbFCIfFCc/AD8hFiomGDEmGDAnGjErHDYrHTgzH0IzIkE4Ikk3JEQ8Jk5AJ1JBJ1NJLV9LLGJVNHBYM3ZWN3BjPIJuQJJvRZV4RKBxVoiCSa6HU7eKUbp0aH2WWct/eoKfYNinZuSuau61bvmUlJO5cf6rq6vExMPV1dXl5eTx8fH+/v5Yk42TAAAAQHRSTlMABw7TxRUlSB2ZNuItaUGAX7NU/4t3BGufwtLplbqnyf6y8NX94f/z0f7/7P////X/////////////////////pAOhpgAABGhJREFUWIWVl+ta4jAQhi1rEREQEVZADgVK2qQhhJADBcH7v6udtKALuDQ7+sP6MC+Z0zfp3d2/zK+UTn+WqvWG988P/mxecxIPakdUex7NWu6u5Wan6rUSacTEz/7Tihij44qrf2scRb3aSKWpSapeCawOABY1HAEPcwqfrluAjtrd0WQ47IeMkXHZzb8yxJgy3H5bmlTgMMSUMvghfdcstqYhYgw/VrvEaC0wZpk5p6DURSGEgN57LyQFU4TkhOjBDeAP7QFYGAQIGwAYanlwAtJ2C8EfIgDQIAiDHCBtEixh6DsBvAGBHKL+UxBwG4JJuc0CMKaPTSdE0zZNv/HwTnRqBNRS2aIgzFAw7bgAoIx0WvcaCQQgVgudqhBRtEYACNzSUO326qW7zjI9AjTFjCI4RfDuOA4l34NUSIjfSCk4eCIMtST9ZqnY+Qsy0QZSsFis16+vr+vNChPXMuRWjk2q2Xq3/9xv0Wr/edit8MxxGDJ7W6Zmsf3Yf35+HlabA2D263fXcQTzJyqV68Nu8/Gx24BtN5vDNmi6Ax4SqP9it9+u15vd4bDbbncbHD46q1peA7nYfOz3h/0eTrHGISE9V026q8V2DFLNF4vVaoEXCy55iLBrH2QpzM2AJGhjAKcUc+3EPIVXZjQPXUUlm4MfENhVVzsiH+RLo7TjFEMpj0BfIdhpTxRYXgNNrwhMJlUXQF4DQY0U6gKwfHOPgDPFmDDnAOUSw7GLGJeMyQuASRzqkEdgqJRM6IsQUlHcS143V2Mijb5MIlc6LuylSg9r28NEXvcBETopXFC1OaLQ/JpctzPlUuLCGBoRRsoC9KU/pMWIYmVsRRRj8SMADiXYvKiX3mALBMycAYz9NRageFQgbF6bMIoRl2cAbUUemCZVrCAJXtfuYhIw8l1EIziHnlQkU5bJ7fVSmmTLPAzRdxVgO0FTWoClxbfXgz/ObwM4+OoDbf25SGUGSAu6uTLLbzQMfQPsI+dQwuyxYCK/ASI9qpLKnoXhWY+ncnATUJ6fAPbjNmtGcYiBKxCkDKAmNwG1EwATm30rCEZa/9N0GBM7ASjBIOSMZ4nX4P7VWo4ARkOlOf9LURRWIntMHAFwS9PmL0UQSNhucAawaWTOBS0EgM3j8ibgq4xsOj9XJIhJcHum24BjJ9pujs4VDU+ziLS5DTjOgr1v0+MkH6d5PrNVUPPkdg7yaWRwrQuzxrMV1Nqu9/FQMQWN3OnfBgwIXNdxH0PO7Bcn4zieYa1Q+DJZ9hId10oFivIWvszovDkmoS2ZGpYr5VoMEoMGo1m1kwzgEnob0Og1unjot8ZTkNZ89LxBiBnuPDc9/7l4u3o1r9rr/PZqQwCYOHtzrEeURS24ARd9+4lRrRx3rBhkHo35f7z1ncwCdH6Auwo0R6GcXwFGtmb5kaE0zPnF9WTeQMjRyQm2zeg/7vrg7VfKbRY9Pxyt2Ufdaq1c8V0vu5X648v9+9OvL3t6+nV///JY/0HS/wBkFjcluHFpbgAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 120000,
            ap: 5000,
            dps: 7894.74,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 19,
            foreswing: 6,
            backswing: 3,
            tba: 7
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 17500,
            actualDps: 27631.59,
            magnification: "350%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        }]
    }
  ]
} as const;

export default e36005Data;

