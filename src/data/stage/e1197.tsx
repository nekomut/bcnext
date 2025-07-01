// Stage 1197 Data
import type { StageData } from '../../app/stage/types';

export const e1197Data: StageData = {
  eventId: 1197,
  eventName: "コイの五月病アゲイン",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 197,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "コイの胸騒ぎ",
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
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 15,
            actualAp: 13500,
            actualDps: 14464.29,
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
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 300,
            actualDps: 169.8,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 15,
            actualAp: 13500,
            actualDps: 14464.29,
            magnification: "100%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 50,
            actualAp: 5,
            actualDps: 2.83,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "登録！マッチングアプリ",
      baseHp: 250000,
      width: 5200,
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
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 15,
            actualAp: 13500,
            actualDps: 14464.29,
            magnification: "100%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "15",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 15,
            actualAp: 13500,
            actualDps: 14464.29,
            magnification: "100%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 541600,
            actualAp: 10220,
            actualDps: 34066.68,
            magnification: "400%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "新鮮！お見合いデート",
      baseHp: 350000,
      width: 5800,
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 439.08,
            magnification: "1200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "4",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "4",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 439.08,
            magnification: "1200%",
            count: "7",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "2.0-3.0s",
            delayFrames: "60-90f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 24000,
            actualAp: 3600,
            actualDps: 6750.0,
            magnification: "200%",
            count: "3",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAACAQEEAQAHAwANAQAJBAEKAwEQBgIRCAMVBwEUCAMXCQMcDAQeDAMoDgAtEgYwEgU0EgE6EwE/FQBBFAA/FgA8GAc7HAJFGAF0AAFMGgJQGQBRGwBUGwBdIANiIQBkIwI4ODhuKAF3KQF9JwB7KQF9LAODKwBYPTBGRUSPMQGWMAD/AACiNwC0PQFoWlTCQgDCQQG4TgHUSAHkTQCAcWvuUQD2UwD8VQCRj460tLPV1dXq6ur+/v7///9WSDj+AAAAQHRSTlMA2rwVLAnrNk5tIV6SfdMTneyxv4Y2Zv4JzgLfIXJW8v/qvA7/J4v0Rf7f/wwB///8/0kE/////////fv///8AZ6Q1BQAABPtJREFUWIXtVmtz2jgUdQMEG/N2Esd1CHKi1A2iEmqkSOa1//9f7b0yNoakbHf22041g8YSukf3ea68v/7j8P4A/AH4A/C/Abg4Om0/8Hudy4cuiQ+SLM+i4OEeFj0/CPyHr/9CfhRGuTLWyHk0CMNBlOV5On758dvyvX4mjC1gaJHnOZPGWjW/ef5d+e44V04chzUGsGAp08fl78m3p7l2ojWGkvBt2fgB//5Hv47GuVPfFtocUBTjGoxI/a/e8jboXZbvhJkuL9aUSgdhNY8JY5z0R8tZMgku69COxEFzRQih4EzFCAVxRuOhP0s5G48uyd8PSgNQA8IVJ0wQilEAb8o8TbkRFwF+3Cai9h1j1igaM10HhBNp8sElE55vagWKQlCNnmDmGFJGedL1On731wrIoj6uiHSzsPa4NfQ7rfAq/AXAqKkA2EA12O4Uqbb4tNcdL4aowcfM7vj99KgA3kcp14WRDVCVDp7W63ELzT2X7w3SnNuiObSgRBhz3DD8dbXZvYfuujP5NlSA0acAcDuhqgEgXje7/fapjeevzuSnzJxJOzNk0wDD1vv9fo2B7AwmJ+G7HeefyRfWHpWCb7rZ77cLdKG/WDe817uL5voTcRiSm7oulWLv290aU7H9tNk0vB9lvGQAW5ypYRmRVVEWiiu2Wr1e9bxWf72rAe79hFd6WntuB49jqCiHAKnMlZQi/T4KVtv9AWD5cpeKSsoI9RFgvX6lqkSAxGBSzb+Fi+2+BHh+mE0nx+DLj5GQ8ft2HRNZ7mshtWKTxQaDgdc/RnNGeKW3ZfzcBVaTeAVWgA6HoSV/Rfndu+e9fU+YtpweGUCcywOfUEK5VOZYUE5+v1uAAt+QPhWp0GX9VckrBZ4Dw5uuEasdAmyfPO8F2cMaKmqA01QGEoIAKC4aOQIE+Y7y+83Ye3t0/GlZBdAsXJcSmMhnTgWGft85F4TIf2X7qZzIaTMNsIwlP0tQoBT+ukUFnnpeb3rqMyTBpq5MFRwBmmaBwYyBCttF2PG6SdNn9gMAMJqIhdWn2SmIoKv1CjnFT2v98IxxAC7jXEYjgEJqN00dkFgFNIkpNKhwoqvLodCsVIJoMBLSGSeDWWEYEYSd+AHCQKUkETTKW8eA1mjnXCOZgrOcYmXBgjlS1thZzvLTKq3IGFr1S+SS2FW8YUpDwhHgwLKu8VOXzIyKnSJoPb97g0QEEq/ov4CUEVRJGssqJDFCwb9MHqulHErI5Na1kQh7huWYwQbqjDINv8PhKq8lhSZ7muJKiMg1yOc78ILF7qWUYFQpsF+SgwpVZYEFcSxPAiFkfnNfdqIgQ6oQMTRyRolUQDn0kAxlUMGp4IyYNkMJp5KqObYGWA4SrtBWTlLQBDq6rjNGsPkE+oLGUNYJAr0u8e8rQnyIAFwOcRbJXT/NcxrzyoY4mc4GSNfYX4ATNLwTQKd0fFvLe2/f5qqQySzF+WHUDYLBsCopAe+yZXfofIKmxBm8F/NkHI4ab863n5koVOJHOOPzqXMfZCX7WJPPll7rUHHWiHTmh0HYbZ10tB8/U2510u1zACg9061KBHr5M7SwQx5anT1+9tp9i5hVSXvgZrfTq4sUjPK8ID9YZPJPnxXLm7nkw7CPc+DjCIfQ0d2QKez057pcaTpoffI8aveHk8mX4ZfryfX1l3JcT+blmLgdt8oyWF71T16ZfwOzNaVJaritSwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 5000,
            actualDps: 9375.0,
            magnification: "1000%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.0-3.0s",
            delayFrames: "60-90f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "5",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "全力！結婚相談所",
      baseHp: 350000,
      width: 5200,
      enemyLimit: 10,
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 262500,
            actualAp: 9745,
            actualDps: 12711.52,
            magnification: "150%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 22,
            actualAp: 20250,
            actualDps: 21696.44,
            magnification: "150%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "最期の時までコイしたい！",
      baseHp: 450000,
      width: 4500,
      enemyLimit: 10,
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
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 27000,
            actualDps: 28928.58,
            magnification: "200%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "43.3-43.3s",
            delayFrames: "1,300-1,300f",
            baseHpRatio: "99%",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 27000,
            actualDps: 28928.58,
            magnification: "200%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 812400,
            actualAp: 15330,
            actualDps: 51100.02,
            magnification: "600%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1350,
            actualDps: 1446.43,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1197Data;

