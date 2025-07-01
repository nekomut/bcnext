// Stage 1208 Data
import type { StageData } from '../../app/stage/types';

export const e1208Data: StageData = {
  eventId: 1208,
  eventName: "大乱闘狂乱ファミリーズ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 208,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "狂喜乱舞 極ムズ",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 9,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "075",
          enemyName: "狂乱のネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400000,
            ap: 7880,
            dps: 13133.33,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1980,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 7880,
            actualDps: 13133.33,
            magnification: "100%",
            count: "1",
            spawnTime: "41.7s",
            spawnTimeFrames: "1,250f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "076",
          enemyName: "狂乱のタンクネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3200000,
            ap: 30240,
            dps: 13540.3,
            speed: 2,
            range: 390,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2370,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 3200000,
            actualAp: 30240,
            actualDps: 13540.3,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "077",
          enemyName: "狂乱のバトルネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2200000,
            ap: 4200,
            dps: 7875.0,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 4200,
            actualDps: 7875.0,
            magnification: "100%",
            count: "1",
            spawnTime: "65.0s",
            spawnTimeFrames: "1,950f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAACAQIFAAoEAwUEAwMHAwoGBgYHBggJBA0IBQkJBQsMBRIKCAoMCwwUBx8XBCskAEwoAFssAFsxAGkfHR83AHg4AHogICAoGTNCAIxIAJQoKCgpKSkqKSkqKSkuJjVRAKJQAKZYAKlaAKsxMDEAAP5hALU1MDhkALd/AH9qAcNsAMJvAMU4ODg5ODt0AMh4AMiEAMl/AP5HRkdTU1NVVVVcXFxdXV7/AP9xcHGOjY60tLTR0dHh4eHv7+/9/f1kNC0kAAAAQHRSTlMAq+T8vu+aN9kPJnpdTIrJunSvmexgpP8nkoMJUj+U2nIEY1SrAUbDOAIGLiVw7xoNBQLVlgO76AH9/f//////hWREdAAAA+JJREFUWIW1ltuSskgQhJUGBFRgwHGUUREdD+CJ1tlBQPH932qzGv/ZvVkVIrZCgxvz6+ysottG43+rxTk8UoXhopY8DCLOIxTnx3N1xDkIoijGJ44jHgXHRUXEguTxoSxwCFFxfZJvN6gtCHHMo+O5yvpBFB+22816vVyvBaKSB+H/IOTz9/cSgSiC8GX/d/2S9FR/CC+uf6T4tiSH/g31Pl+uBYG/4mFx5JzWX85nM1Kbpvc2nS3XG8rylV2cYeBw2Kzns+nUsx3VVV3UbL4st/GcsIhgQOi9oevvbQflr7xfwvEZIAxEAKTvO0nmW5blZ6ehN33VQ8DjX721z6jSbO8Mfz3wJwPFo8N2OS/1SV7cUMUl9fvD6Z3wpBVnRLiBAdKn19stx/eaX/NT3wMBvYg5fxwBFwDP7dsJtEWWA5Jdb9lKWKB5CB7uoXTwDoCfk/1rkecXcpEIC0tYeBzjgnMApp7r9LJC7D/f50AVqf2PhYd7CCjEfwHQgxSAa2qhlTMBeBxCcA/RUZAhEJfsmt+K6yWxXAJQH6KHABEi2tiX9nlRFLdrlmfF5ZIy2/XeSgcPAWd+H0TXYml+uRQIMS/y7ENxXJpGauRDwIKXrwLtgaVZDgL8px/M6rve/b1+CAiP4jChSbDYxz4tZxl6R8zi+mkG5/txAgs2Q31QMabYMPBGO3jWhfM5EOcBLDjQSwqKno4rXqcXZpmGudyEq2Bh23bIidQfen/m6NmREEYlYT6VoEPZTGGSO53eDcTRk/cZe+BlDBqzPG+ILDRFIv/lGPLHLxNZKK+17Vpmzgwno81sSZr9Xg/8+f0SBriWQWgyc4nD3Wamps032624Jl852hchIeJDk7VxN65lpWNprYO4Il84VO8M3I66zNqQDaCWNSMWch68fEGGgW6xNv4iGJpsNCUDnngVPUwYGjP1Y9CSmjoAxDxW+7PTUpiKR1cxdVVqVVHeq6uwpt5odJROox6gw5gMQFvpNkylDqCtKBYAJlZv1wKoiobsRIDkonJBKWNhHTOA3XRqAGRNxcK6hSAoyOoAS25DZ2jNmgBDU0nXkkxqZY0MWr12t9dudHtYvNOrAYASjFJbCwDRwJ802j2MwKgOwPRbhq/qE38A2H5UHTDxDX31pX+tMI2jfXUHpNRXKwMMAlR38AklIK3TpEGAcWXAgJSTUzfZESCpDhiTcnLaJaOagBEpd8lESOsAdqTZJV/JoDZgQMLTj14P8PlNynGS/HzWBPyQcpyk37UB33+hl0lKXawDGIj+AzCqCRgnI13XjR/xqAMYnVS12ZT3e7nZVE31NPjPX/4Nn/q/fvfMF0QAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
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
          enemyId: "080",
          enemyName: "狂乱のネコノトリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQQCAQQCAQQEAQUFAAgFBAcIAQ0OBRgMDAwZADcaAzQeAEAfAEMiAEcfDCwoAVEsAForAGM0AHM8AWQgICA7AXdBAIZBAIREAIlDAI5RAJ4wJjlTAKNTAKNVAKsAAP5iALVjALdjALczMzNqAKx/AH9rAL9tAMFnAMtwAMVzAMdzAMp0AMh/AL0+OkB/ANF1AP9HR0dMSk6oAN1XV1dnZ2f/AP98fHybm5u3t7fPz8/j4+P09PT+/v5SmGLKAAAAQHRSTlMAigxOcaOw9STj/8PQtn+QUKidbrYE/12GkXmfT+phbAMBVDtF/wYCLDMFJB0MFAbtCgL/8wP//gH/////////+dBKSAAAA9tJREFUWIXtVmmTokgQHRuV4egD2wORUy7FAwEFqzj8//9qMovejZlYUXsi9psvDCXU9+plVmVm/fjxv8E5n8MW57+ih3YctYjt0PkLegT8HSLZRXYaOt/TOAN/t9u32IGLNDx/R+Fs2wHQtxvEdg8u4jhNH1eA9aMd0FcttmAiCaJT+mgy2/WR77qe67qrDUrE0aO5dGwMf4t0XZ/NdB0lQCGI7IcsQP4Zf+16yEfozMTODiYPrY/8zQrpwP9EzHTPXWEuAzu8u34ax7i+6y2Xpvn5+Yb4nC29Now4uKcQnlj+1t7StCztTX1HqJoFCmsM465CGCf/8DV1PhoNFEUZjeaqZS69ViHuVvjJcR8Ms5lmWep8oby2GCuLOZjQZ+3PHxzHXRXo87xxRBwOhsL4giAxjGUJFJQDwj/wPC9cd9ATRL/I8rwghbxYjF+lQyHIDEdjMZ8bhOR55meiKPevx/DS48Wpn+WEkKM0HkvysToIiGNpjBcSfF/k/lQU+f5LRxY4CRQKcJAXBjiXD8AAVlZQYzw+5Ox5KvLD6ylAC31eFH0/J3mWC5JskKpumkvTVPQgGxAcKXxfFAWu+0RyQx4lCljUF4qquVzgdUGJ3M8zCAD8CwPO7hSY/OwPQQFcZHlRA7Wk8N5Q2tTEzyB94P9tte8+TWGw/xhIsgA+8gqXpgQEagLvdQaLy9JwBlWRdFpwkt3WNbW5IhmUma/rpqyqGs1QQXnXTB3LKok7HUS77Vo3LVUxKDrA8GlGK3wujyNVM9u67BRIoRKwEDQQqJkALWlGihKUqqPSCmxuOEi/Stka8aRucAuqoiiLku1lrkBN3RHAZgjNRAeBloX70EAKm6qmhqKZbWPoDAHaMeumnqkKfgmHiAlUpGqqivr8CHLorW86gHaACu5Sk8S8hOw3l5JQFCgLUXi3oLetbybxnEa7ZA8NxRzx05yWzAWgpsWUf0UD2JiS7nMAFuK2pVkSPy0IZYcA4s+nvKS2KQADSdopcA7bmbaGIPgpFAUhlBICp1CGlgLHiPW1oHvCOGyqtWlQBKyKqT/FFiDBFn71xSTujoDNlRgVVnCe1FcsChE6mAQbsPy3M8e3JpQTBmyyQxTucmlpI+jK0NZhcdwA5CfRLQPsbhHYLJM43TwYMMD9YrM5Hd0bT6AwOcFm4vVgtUYAdcPYe7wqnO7PaGdyggOFmWDAyQwXHYY4iB+7aNhh1Grg1QLSDnGlSRIF8YN82I0JZBMosW23FyzHOafx6VsXNuc/f4ar4+P0J5544oknfsPLn/gum+v3eoPBYIiAz16vz13X+AVW2dD/ykborQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1180000,
            ap: 12000,
            dps: 2130.18,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 10,
            backswing: 4,
            tba: 80
          },
          stageStats: {
            actualHp: 1180000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "100%",
            count: "1",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "25.0s",
            spawnTimeFrames: "750f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "082",
          enemyName: "狂乱のネコトカゲ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 600000,
            ap: 1300,
            dps: 795.92,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 15,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 1300,
            actualDps: 795.92,
            magnification: "100%",
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
          enemyId: "083",
          enemyName: "狂乱の巨神ネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2560000,
            ap: 17000,
            dps: 6296.3,
            speed: 4,
            range: 320,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2125,
            freq: 81,
            foreswing: 47,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2560000,
            actualAp: 17000,
            actualDps: 6296.3,
            magnification: "100%",
            count: "1",
            spawnTime: "95.0s",
            spawnTimeFrames: "2,850f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "狂喜乱舞 超極ムズ",
      baseHp: 1500000,
      width: 5000,
      enemyLimit: 9,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "075",
          enemyName: "狂乱のネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400000,
            ap: 7880,
            dps: 13133.33,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1980,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 7880,
            actualDps: 13133.33,
            magnification: "100%",
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
          enemyId: "076",
          enemyName: "狂乱のタンクネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3200000,
            ap: 30240,
            dps: 13540.3,
            speed: 2,
            range: 390,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2370,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 3200000,
            actualAp: 30240,
            actualDps: 13540.3,
            magnification: "100%",
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
          enemyId: "077",
          enemyName: "狂乱のバトルネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2200000,
            ap: 4200,
            dps: 7875.0,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 4200,
            actualDps: 7875.0,
            magnification: "100%",
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
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAACAQIFAAoEAwUEAwMHAwoGBgYHBggJBA0IBQkJBQsMBRIKCAoMCwwUBx8XBCskAEwoAFssAFsxAGkfHR83AHg4AHogICAoGTNCAIxIAJQoKCgpKSkqKSkqKSkuJjVRAKJQAKZYAKlaAKsxMDEAAP5hALU1MDhkALd/AH9qAcNsAMJvAMU4ODg5ODt0AMh4AMiEAMl/AP5HRkdTU1NVVVVcXFxdXV7/AP9xcHGOjY60tLTR0dHh4eHv7+/9/f1kNC0kAAAAQHRSTlMAq+T8vu+aN9kPJnpdTIrJunSvmexgpP8nkoMJUj+U2nIEY1SrAUbDOAIGLiVw7xoNBQLVlgO76AH9/f//////hWREdAAAA+JJREFUWIW1ltuSskgQhJUGBFRgwHGUUREdD+CJ1tlBQPH932qzGv/ZvVkVIrZCgxvz6+ysottG43+rxTk8UoXhopY8DCLOIxTnx3N1xDkIoijGJ44jHgXHRUXEguTxoSxwCFFxfZJvN6gtCHHMo+O5yvpBFB+22816vVyvBaKSB+H/IOTz9/cSgSiC8GX/d/2S9FR/CC+uf6T4tiSH/g31Pl+uBYG/4mFx5JzWX85nM1Kbpvc2nS3XG8rylV2cYeBw2Kzns+nUsx3VVV3UbL4st/GcsIhgQOi9oevvbQflr7xfwvEZIAxEAKTvO0nmW5blZ6ehN33VQ8DjX721z6jSbO8Mfz3wJwPFo8N2OS/1SV7cUMUl9fvD6Z3wpBVnRLiBAdKn19stx/eaX/NT3wMBvYg5fxwBFwDP7dsJtEWWA5Jdb9lKWKB5CB7uoXTwDoCfk/1rkecXcpEIC0tYeBzjgnMApp7r9LJC7D/f50AVqf2PhYd7CCjEfwHQgxSAa2qhlTMBeBxCcA/RUZAhEJfsmt+K6yWxXAJQH6KHABEi2tiX9nlRFLdrlmfF5ZIy2/XeSgcPAWd+H0TXYml+uRQIMS/y7ENxXJpGauRDwIKXrwLtgaVZDgL8px/M6rve/b1+CAiP4jChSbDYxz4tZxl6R8zi+mkG5/txAgs2Q31QMabYMPBGO3jWhfM5EOcBLDjQSwqKno4rXqcXZpmGudyEq2Bh23bIidQfen/m6NmREEYlYT6VoEPZTGGSO53eDcTRk/cZe+BlDBqzPG+ILDRFIv/lGPLHLxNZKK+17Vpmzgwno81sSZr9Xg/8+f0SBriWQWgyc4nD3Wamps032624Jl852hchIeJDk7VxN65lpWNprYO4Il84VO8M3I66zNqQDaCWNSMWch68fEGGgW6xNv4iGJpsNCUDnngVPUwYGjP1Y9CSmjoAxDxW+7PTUpiKR1cxdVVqVVHeq6uwpt5odJROox6gw5gMQFvpNkylDqCtKBYAJlZv1wKoiobsRIDkonJBKWNhHTOA3XRqAGRNxcK6hSAoyOoAS25DZ2jNmgBDU0nXkkxqZY0MWr12t9dudHtYvNOrAYASjFJbCwDRwJ802j2MwKgOwPRbhq/qE38A2H5UHTDxDX31pX+tMI2jfXUHpNRXKwMMAlR38AklIK3TpEGAcWXAgJSTUzfZESCpDhiTcnLaJaOagBEpd8lESOsAdqTZJV/JoDZgQMLTj14P8PlNynGS/HzWBPyQcpyk37UB33+hl0lKXawDGIj+AzCqCRgnI13XjR/xqAMYnVS12ZT3e7nZVE31NPjPX/4Nn/q/fvfMF0QAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
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
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
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
          enemyId: "080",
          enemyName: "狂乱のネコノトリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQQCAQQCAQQEAQUFAAgFBAcIAQ0OBRgMDAwZADcaAzQeAEAfAEMiAEcfDCwoAVEsAForAGM0AHM8AWQgICA7AXdBAIZBAIREAIlDAI5RAJ4wJjlTAKNTAKNVAKsAAP5iALVjALdjALczMzNqAKx/AH9rAL9tAMFnAMtwAMVzAMdzAMp0AMh/AL0+OkB/ANF1AP9HR0dMSk6oAN1XV1dnZ2f/AP98fHybm5u3t7fPz8/j4+P09PT+/v5SmGLKAAAAQHRSTlMAigxOcaOw9STj/8PQtn+QUKidbrYE/12GkXmfT+phbAMBVDtF/wYCLDMFJB0MFAbtCgL/8wP//gH/////////+dBKSAAAA9tJREFUWIXtVmmTokgQHRuV4egD2wORUy7FAwEFqzj8//9qMovejZlYUXsi9psvDCXU9+plVmVm/fjxv8E5n8MW57+ih3YctYjt0PkLegT8HSLZRXYaOt/TOAN/t9u32IGLNDx/R+Fs2wHQtxvEdg8u4jhNH1eA9aMd0FcttmAiCaJT+mgy2/WR77qe67qrDUrE0aO5dGwMf4t0XZ/NdB0lQCGI7IcsQP4Zf+16yEfozMTODiYPrY/8zQrpwP9EzHTPXWEuAzu8u34ax7i+6y2Xpvn5+Yb4nC29Now4uKcQnlj+1t7StCztTX1HqJoFCmsM465CGCf/8DV1PhoNFEUZjeaqZS69ViHuVvjJcR8Ms5lmWep8oby2GCuLOZjQZ+3PHxzHXRXo87xxRBwOhsL4giAxjGUJFJQDwj/wPC9cd9ATRL/I8rwghbxYjF+lQyHIDEdjMZ8bhOR55meiKPevx/DS48Wpn+WEkKM0HkvysToIiGNpjBcSfF/k/lQU+f5LRxY4CRQKcJAXBjiXD8AAVlZQYzw+5Ox5KvLD6ylAC31eFH0/J3mWC5JskKpumkvTVPQgGxAcKXxfFAWu+0RyQx4lCljUF4qquVzgdUGJ3M8zCAD8CwPO7hSY/OwPQQFcZHlRA7Wk8N5Q2tTEzyB94P9tte8+TWGw/xhIsgA+8gqXpgQEagLvdQaLy9JwBlWRdFpwkt3WNbW5IhmUma/rpqyqGs1QQXnXTB3LKok7HUS77Vo3LVUxKDrA8GlGK3wujyNVM9u67BRIoRKwEDQQqJkALWlGihKUqqPSCmxuOEi/Stka8aRucAuqoiiLku1lrkBN3RHAZgjNRAeBloX70EAKm6qmhqKZbWPoDAHaMeumnqkKfgmHiAlUpGqqivr8CHLorW86gHaACu5Sk8S8hOw3l5JQFCgLUXi3oLetbybxnEa7ZA8NxRzx05yWzAWgpsWUf0UD2JiS7nMAFuK2pVkSPy0IZYcA4s+nvKS2KQADSdopcA7bmbaGIPgpFAUhlBICp1CGlgLHiPW1oHvCOGyqtWlQBKyKqT/FFiDBFn71xSTujoDNlRgVVnCe1FcsChE6mAQbsPy3M8e3JpQTBmyyQxTucmlpI+jK0NZhcdwA5CfRLQPsbhHYLJM43TwYMMD9YrM5Hd0bT6AwOcFm4vVgtUYAdcPYe7wqnO7PaGdyggOFmWDAyQwXHYY4iB+7aNhh1Grg1QLSDnGlSRIF8YN82I0JZBMosW23FyzHOafx6VsXNuc/f4ar4+P0J5544oknfsPLn/gum+v3eoPBYIiAz16vz13X+AVW2dD/ykborQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1180000,
            ap: 12000,
            dps: 2130.18,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 169,
            foreswing: 10,
            backswing: 4,
            tba: 80
          },
          stageStats: {
            actualHp: 1180000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "100%",
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
            magnification: "100%",
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
          enemyId: "082",
          enemyName: "狂乱のネコトカゲ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 600000,
            ap: 1300,
            dps: 795.92,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 15,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 1300,
            actualDps: 795.92,
            magnification: "100%",
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
          enemyId: "083",
          enemyName: "狂乱の巨神ネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2560000,
            ap: 17000,
            dps: 6296.3,
            speed: 4,
            range: 320,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2125,
            freq: 81,
            foreswing: 47,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2560000,
            actualAp: 17000,
            actualDps: 6296.3,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1208Data;

