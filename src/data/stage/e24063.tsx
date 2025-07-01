// Stage 24063 Data
import type { StageData } from '../../app/stage/types';

export const e24063Data: StageData = {
  eventId: 24063,
  eventName: "ことよろにゃ強襲！(ΦωΦ)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 63,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "辰年 Lv.1",
      baseHp: 2024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEHDAgHGQwTEhIgDBodHBwJLRMnJycMORgsLCwRRiI5LzU+PD0VWCpLRUgVZy8YdzddWFsdgz8fjkJlZWVoZ2cjlUh1c3MnolApqFIrr1aBgYEtt1qKiYkxxmGQkJCamZqmpqaysrK5ubjDw8POzs7U1NTZ2dng4ODn5+fx8PD39vf////F9GEqAAAAQHRSTlMADSg1QE1cc4WUr9nl+BykvM7t///////+////Q/////////////88////////////////////////////////F4csVwAABgFJREFUWIWVV+uaokgMFS/YraBAgAZZQQRdpUAdwQav9f5vtalybFFwxs2Png/GnMrlnKRoNF7a4KPmpfj52uHZWtCrggIIbwO0ASoxKADttwE6pv/86w54lvg/IjhH8uMraXQyu28DtOBAH5NoQ0arab20AaR0C83Smx5Qav6PNvQjSkfK/VmAkF7eBhDanX5I6Q5a18emgCXM6dl8MwVsOBql1FW5v2bKimpSetbfBBC0UZ55O0pz3koBomIBHqWnt4vYBKxAjiFYvApd80LTFaUHeLuNSJoz+tPsWoU+IlwoLd4HaHRkc8MQTC6JgTzaU1bUHyYKgxqnQXeoqMrH9b8GChToE8nN5kBotGTMgKa/2S0OVRn+rQKIOoAxMeTh9Wca8ylYPzRJkcPvE91wZnUlcByAf6oAbT1PXYcEwFJtfWgjlsMIptPJ2DYQxx+hOjp9cAgxXKtVBRDkgl58+EXG8DlkJ19YH2zCLF5ObHzT7YI9J8R2j3qzCtDo+SxrWJMZwHhJwN2lFsTkakkSz8YA+ppgjJcDqMNKAJ0+D5rFMIEpYTDAzo9vGITMx2DMCcriEJnyM0ALVrz3FCYxcSDAQ5dJzAHiO8YSg7NYbnpVWGrK/ekKErK2AYNOyN1uGOsxbHhxq0xo886jZtjpDouD+SXxDecGYbgsz05NEYfmkSP4NpkaM+aC/7J2OME9ljiZw27xgtQ9fUc5ZVmv8bcTgC8/Ct0vgMlviDnAFBv6arpK8BXt9inrAfrb4OfXsuQLgNkVMtyALr0a7x3ZZnS5+hODifpmRx/GrDIZpd7rsSADD3ROWLkcWNGyZWBPgUUUynUsZPYBk/VyvebVI1Oky80K9/sqLCzRNo+qW+9qAugxCebBcs3iAPN++MGCLUPYMKbvNq8ARJiQZD4NEIOgoPJy/BFYnKYe7otQeQHQB2Qvno0IGID7UACauScOgGxdvABog7Mmay48/Au7H9/LJivHsnkGaHVvJZyReBxwBhAb7i4hQFrKBeAJYPh7Bao6utrAOUzAvwO4UGooMsp6BBiMQl5VQWban+o2OEsEKEW99xeXez5RGj0CdBfUbDUGuEyQaWSGncRmBLjdX9qqDNBu9FIafTRUoYV+qHZG+Rgn0rnWtwgtK/T74l0Lmqic6EH9hEGHK8BhMAmy4Nl1v134nge655lMLT8DUQOL7nG8eE0RgqWj23yCrY0vdAHTXeCAOPECFOl2mwIgGS7gHdMfPQ3DVTGi2S4URJhNYPzrKgQGcFy4lrWnx+hewSOAiQHg4AqlG31DVFlBz32kQYCpT7gOOAAzPDAMS4kcV54XsfputJ8cigxl54pMimziX/cIAzinyKAz1Rd11Vz0bwBN2QoMRo0OjJHJBgJMCCdiDhBmF+qO6gCsuyJbUhLIArtUOEwCY1wdTIsnerlO2AJG0Wa7Wm2wiNwyNB9Kq7E3SxwFEWQjYYtVZ1QO4PvnsEyHiknlofqJU8DWuoICSzK5TmOMpDQO6dkzT6fj8XDYox1CUB5Hmoj7ch7YmsSYFHMekFj/Kmc88koP4fNOEmCWoIhx9RoxW2e4iXChwL7kA+VWjtTGk30YSN7ZmuiYA5nFCS4fzKHcvfLDpebGrWLm8xmeijQKZsk0QDZN4VQPcK7ZSgPJiRM2BPA2EQfTecBWYXkoPoQzqlmLg74+S1j3cSQs8fzpjHX03oiRm3/neVHsD8fT2a/UgNcB1w5JDJjzfR5Pl0zSt0G2eWKBWrdaW599sHW2WrCPCe+nc4t8EWW7712Wpel2s4pWKwvqd9ugLSpgJBwhYWwYg/VNayx/ud3ZlxmjcrJGPuB2wAuRXzMciz8AND7xZhYssRLJGu3XFCW52xdFvvvGMmIS6XYVWTX3o7t1VFYnwzDAtp3xxKgq6VFKNSb7Ie6SrxD6vd82lMy8wHfZ0VVbrdbfvl+VBY0U0U1LgTaRl7rY21L9b9+uQlvs9swVqIoMsqRdTZL6mutpvR5Ymvin87tqTcJVk1/dDxrNTvdD6UuSjFbjJ8uaLOEXSfcnjf8A64J7LaElTegAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 12,
            actualDps: 20.0,
            magnification: "2%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "辰年 Lv.2",
      baseHp: 22024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 90,
            actualDps: 150.0,
            magnification: "15%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "辰年 Lv.3",
      baseHp: 52024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 50,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 750.0,
            magnification: "75%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "辰年 Lv.4",
      baseHp: 92024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 1050,
            actualDps: 1750.0,
            magnification: "175%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "辰年 Lv.5",
      baseHp: 162024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "300%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "辰年 Lv.6",
      baseHp: 272024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEHDAgHGQwTEhIgDBodHBwJLRMnJycMORgsLCwRRiI5LzU+PD0VWCpLRUgVZy8YdzddWFsdgz8fjkJlZWVoZ2cjlUh1c3MnolApqFIrr1aBgYEtt1qKiYkxxmGQkJCamZqmpqaysrK5ubjDw8POzs7U1NTZ2dng4ODn5+fx8PD39vf////F9GEqAAAAQHRSTlMADSg1QE1cc4WUr9nl+BykvM7t///////+////Q/////////////88////////////////////////////////F4csVwAABgFJREFUWIWVV+uaokgMFS/YraBAgAZZQQRdpUAdwQav9f5vtalybFFwxs2Png/GnMrlnKRoNF7a4KPmpfj52uHZWtCrggIIbwO0ASoxKADttwE6pv/86w54lvg/IjhH8uMraXQyu28DtOBAH5NoQ0arab20AaR0C83Smx5Qav6PNvQjSkfK/VmAkF7eBhDanX5I6Q5a18emgCXM6dl8MwVsOBql1FW5v2bKimpSetbfBBC0UZ55O0pz3koBomIBHqWnt4vYBKxAjiFYvApd80LTFaUHeLuNSJoz+tPsWoU+IlwoLd4HaHRkc8MQTC6JgTzaU1bUHyYKgxqnQXeoqMrH9b8GChToE8nN5kBotGTMgKa/2S0OVRn+rQKIOoAxMeTh9Wca8ylYPzRJkcPvE91wZnUlcByAf6oAbT1PXYcEwFJtfWgjlsMIptPJ2DYQxx+hOjp9cAgxXKtVBRDkgl58+EXG8DlkJ19YH2zCLF5ObHzT7YI9J8R2j3qzCtDo+SxrWJMZwHhJwN2lFsTkakkSz8YA+ppgjJcDqMNKAJ0+D5rFMIEpYTDAzo9vGITMx2DMCcriEJnyM0ALVrz3FCYxcSDAQ5dJzAHiO8YSg7NYbnpVWGrK/ekKErK2AYNOyN1uGOsxbHhxq0xo886jZtjpDouD+SXxDecGYbgsz05NEYfmkSP4NpkaM+aC/7J2OME9ljiZw27xgtQ9fUc5ZVmv8bcTgC8/Ct0vgMlviDnAFBv6arpK8BXt9inrAfrb4OfXsuQLgNkVMtyALr0a7x3ZZnS5+hODifpmRx/GrDIZpd7rsSADD3ROWLkcWNGyZWBPgUUUynUsZPYBk/VyvebVI1Oky80K9/sqLCzRNo+qW+9qAugxCebBcs3iAPN++MGCLUPYMKbvNq8ARJiQZD4NEIOgoPJy/BFYnKYe7otQeQHQB2Qvno0IGID7UACauScOgGxdvABog7Mmay48/Au7H9/LJivHsnkGaHVvJZyReBxwBhAb7i4hQFrKBeAJYPh7Bao6utrAOUzAvwO4UGooMsp6BBiMQl5VQWban+o2OEsEKEW99xeXez5RGj0CdBfUbDUGuEyQaWSGncRmBLjdX9qqDNBu9FIafTRUoYV+qHZG+Rgn0rnWtwgtK/T74l0Lmqic6EH9hEGHK8BhMAmy4Nl1v134nge655lMLT8DUQOL7nG8eE0RgqWj23yCrY0vdAHTXeCAOPECFOl2mwIgGS7gHdMfPQ3DVTGi2S4URJhNYPzrKgQGcFy4lrWnx+hewSOAiQHg4AqlG31DVFlBz32kQYCpT7gOOAAzPDAMS4kcV54XsfputJ8cigxl54pMimziX/cIAzinyKAz1Rd11Vz0bwBN2QoMRo0OjJHJBgJMCCdiDhBmF+qO6gCsuyJbUhLIArtUOEwCY1wdTIsnerlO2AJG0Wa7Wm2wiNwyNB9Kq7E3SxwFEWQjYYtVZ1QO4PvnsEyHiknlofqJU8DWuoICSzK5TmOMpDQO6dkzT6fj8XDYox1CUB5Hmoj7ch7YmsSYFHMekFj/Kmc88koP4fNOEmCWoIhx9RoxW2e4iXChwL7kA+VWjtTGk30YSN7ZmuiYA5nFCS4fzKHcvfLDpebGrWLm8xmeijQKZsk0QDZN4VQPcK7ZSgPJiRM2BPA2EQfTecBWYXkoPoQzqlmLg74+S1j3cSQs8fzpjHX03oiRm3/neVHsD8fT2a/UgNcB1w5JDJjzfR5Pl0zSt0G2eWKBWrdaW599sHW2WrCPCe+nc4t8EWW7712Wpel2s4pWKwvqd9ugLSpgJBwhYWwYg/VNayx/ud3ZlxmjcrJGPuB2wAuRXzMciz8AND7xZhYssRLJGu3XFCW52xdFvvvGMmIS6XYVWTX3o7t1VFYnwzDAtp3xxKgq6VFKNSb7Ie6SrxD6vd82lMy8wHfZ0VVbrdbfvl+VBY0U0U1LgTaRl7rY21L9b9+uQlvs9swVqIoMsqRdTZL6mutpvR5Ymvin87tqTcJVk1/dDxrNTvdD6UuSjFbjJ8uaLOEXSfcnjf8A64J7LaElTegAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "600%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 6,
      stageName: "辰年 Lv.7",
      baseHp: 402024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 12000.0,
            magnification: "1200%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 7,
      stageName: "辰年 Lv.8",
      baseHp: 552024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 100,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 9600,
            actualDps: 16000.0,
            magnification: "1600%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 8,
      stageName: "辰年 Lv.9",
      baseHp: 752024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEHDAgHGQwTEhIgDBodHBwJLRMnJycMORgsLCwRRiI5LzU+PD0VWCpLRUgVZy8YdzddWFsdgz8fjkJlZWVoZ2cjlUh1c3MnolApqFIrr1aBgYEtt1qKiYkxxmGQkJCamZqmpqaysrK5ubjDw8POzs7U1NTZ2dng4ODn5+fx8PD39vf////F9GEqAAAAQHRSTlMADSg1QE1cc4WUr9nl+BykvM7t///////+////Q/////////////88////////////////////////////////F4csVwAABgFJREFUWIWVV+uaokgMFS/YraBAgAZZQQRdpUAdwQav9f5vtalybFFwxs2Png/GnMrlnKRoNF7a4KPmpfj52uHZWtCrggIIbwO0ASoxKADttwE6pv/86w54lvg/IjhH8uMraXQyu28DtOBAH5NoQ0arab20AaR0C83Smx5Qav6PNvQjSkfK/VmAkF7eBhDanX5I6Q5a18emgCXM6dl8MwVsOBql1FW5v2bKimpSetbfBBC0UZ55O0pz3koBomIBHqWnt4vYBKxAjiFYvApd80LTFaUHeLuNSJoz+tPsWoU+IlwoLd4HaHRkc8MQTC6JgTzaU1bUHyYKgxqnQXeoqMrH9b8GChToE8nN5kBotGTMgKa/2S0OVRn+rQKIOoAxMeTh9Wca8ylYPzRJkcPvE91wZnUlcByAf6oAbT1PXYcEwFJtfWgjlsMIptPJ2DYQxx+hOjp9cAgxXKtVBRDkgl58+EXG8DlkJ19YH2zCLF5ObHzT7YI9J8R2j3qzCtDo+SxrWJMZwHhJwN2lFsTkakkSz8YA+ppgjJcDqMNKAJ0+D5rFMIEpYTDAzo9vGITMx2DMCcriEJnyM0ALVrz3FCYxcSDAQ5dJzAHiO8YSg7NYbnpVWGrK/ekKErK2AYNOyN1uGOsxbHhxq0xo886jZtjpDouD+SXxDecGYbgsz05NEYfmkSP4NpkaM+aC/7J2OME9ljiZw27xgtQ9fUc5ZVmv8bcTgC8/Ct0vgMlviDnAFBv6arpK8BXt9inrAfrb4OfXsuQLgNkVMtyALr0a7x3ZZnS5+hODifpmRx/GrDIZpd7rsSADD3ROWLkcWNGyZWBPgUUUynUsZPYBk/VyvebVI1Oky80K9/sqLCzRNo+qW+9qAugxCebBcs3iAPN++MGCLUPYMKbvNq8ARJiQZD4NEIOgoPJy/BFYnKYe7otQeQHQB2Qvno0IGID7UACauScOgGxdvABog7Mmay48/Au7H9/LJivHsnkGaHVvJZyReBxwBhAb7i4hQFrKBeAJYPh7Bao6utrAOUzAvwO4UGooMsp6BBiMQl5VQWban+o2OEsEKEW99xeXez5RGj0CdBfUbDUGuEyQaWSGncRmBLjdX9qqDNBu9FIafTRUoYV+qHZG+Rgn0rnWtwgtK/T74l0Lmqic6EH9hEGHK8BhMAmy4Nl1v134nge655lMLT8DUQOL7nG8eE0RgqWj23yCrY0vdAHTXeCAOPECFOl2mwIgGS7gHdMfPQ3DVTGi2S4URJhNYPzrKgQGcFy4lrWnx+hewSOAiQHg4AqlG31DVFlBz32kQYCpT7gOOAAzPDAMS4kcV54XsfputJ8cigxl54pMimziX/cIAzinyKAz1Rd11Vz0bwBN2QoMRo0OjJHJBgJMCCdiDhBmF+qO6gCsuyJbUhLIArtUOEwCY1wdTIsnerlO2AJG0Wa7Wm2wiNwyNB9Kq7E3SxwFEWQjYYtVZ1QO4PvnsEyHiknlofqJU8DWuoICSzK5TmOMpDQO6dkzT6fj8XDYox1CUB5Hmoj7ch7YmsSYFHMekFj/Kmc88koP4fNOEmCWoIhx9RoxW2e4iXChwL7kA+VWjtTGk30YSN7ZmuiYA5nFCS4fzKHcvfLDpebGrWLm8xmeijQKZsk0QDZN4VQPcK7ZSgPJiRM2BPA2EQfTecBWYXkoPoQzqlmLg74+S1j3cSQs8fzpjHX03oiRm3/neVHsD8fT2a/UgNcB1w5JDJjzfR5Pl0zSt0G2eWKBWrdaW599sHW2WrCPCe+nc4t8EWW7712Wpel2s4pWKwvqd9ugLSpgJBwhYWwYg/VNayx/ud3ZlxmjcrJGPuB2wAuRXzMciz8AND7xZhYssRLJGu3XFCW52xdFvvvGMmIS6XYVWTX3o7t1VFYnwzDAtp3xxKgq6VFKNSb7Ie6SrxD6vd82lMy8wHfZ0VVbrdbfvl+VBY0U0U1LgTaRl7rY21L9b9+uQlvs9swVqIoMsqRdTZL6mutpvR5Ymvin87tqTcJVk1/dDxrNTvdD6UuSjFbjJ8uaLOEXSfcnjf8A64J7LaElTegAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 20000.0,
            magnification: "2000%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 9,
      stageName: "辰年 Lv.MAX",
      baseHp: 1002024,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.0s",
            delayFrames: "300-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "676",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 15000,
            actualDps: 25000.0,
            magnification: "2500%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e24063Data;

