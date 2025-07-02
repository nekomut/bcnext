// Stage 2042 Data
import type { StageData } from '../../app/stage/types';

export const e2042Data: StageData = {
  eventId: 2042,
  eventName: "月夜のオールドシティ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 42,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "収束する光",
      baseHp: 100000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 100,
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
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "200000",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 9000,
            actualAp: 5000,
            actualDps: 3658.54,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-28.3s",
            delayFrames: "800-850f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-28.3s",
            delayFrames: "800-850f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-28.3s",
            delayFrames: "800-850f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 9000,
            actualAp: 5000,
            actualDps: 3658.54,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "319",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 400000,
            ap: 13333,
            dps: 990.07,
            speed: 6,
            range: 520,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 404,
            foreswing: 71,
            backswing: 50,
            tba: 167
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 3333,
            actualDps: 247.52,
            magnification: "25%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "フィーバータイム！",
      baseHp: 200000,
      width: 4800,
      enemyLimit: 20,
      requiredCost: 120,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "1",
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
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "320",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 4000,
            dps: 991.74,
            speed: 33,
            range: 320,
            rangeType: "範囲",
            kbLevel: 8,
            money: 900,
            freq: 121,
            foreswing: 56,
            backswing: 65,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 16000,
            actualDps: 3966.96,
            magnification: "400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 50
            }
          }
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "3",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "3",
            spawnTime: "143.3s",
            spawnTimeFrames: "4,300f",
            delay: "1.7-1.7s",
            delayFrames: "50-50f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1920.0,
            magnification: "400%",
            count: "0",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "50.0-66.7s",
            delayFrames: "1,500-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "ALICE大戦争",
      baseHp: 400000,
      width: 4200,
      enemyLimit: 9,
      requiredCost: 150,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "12",
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
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "30",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2994,
            actualDps: 3905.22,
            magnification: "200%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "320",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 4000,
            dps: 991.74,
            speed: 33,
            range: 320,
            rangeType: "範囲",
            kbLevel: 8,
            money: 900,
            freq: 121,
            foreswing: 56,
            backswing: 65,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 8000,
            actualDps: 1983.48,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 50
            }
          }
        },
        {
          enemyId: "321",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAACUAAX/AACsJR+yNDRrRpu+Nze3Q0K2RD6qSkzcNza7ST2qU0O8SkazU0anXUy8WE2OdWy6Ymm9aU/AbEuQgGbQZWifgV3Cbma/c12zfluMlWu7hF+MjK+1iHDad3J6r3LJjHTMkXKomq7Jl3z/f3+Zp82Fw4POoIbRpne9rJ7Rp4fCq7CV0ZXWs5Kmvu7ZvpzDwsnmu7WU66O80urhzr/z6kPC4fPu1NLq5M/z7ev8/PxueFNzAAAAQHRSTlMAHXakzQQBDCL/xzdR/vcMZX2asNX+/kwv1q7qYHOT/sD+/P3/4qn//gL//nbuzf/+//3//v60//7////g/v//2XLhLQAABbhJREFUWIXtVWuTqkgSdXsXi7ZQechLELAQqcWGQoQr1Szw///VZmH33bm92DPzcSLmhKEGmidPnsrKXCy+Youx48jLL08lhMTHUsbo/yK+AO+SPNekxQIpMlaw9GA9BIr4hg3D/p34pULq4gD/XuJ9kOeqbAOHfC5sBKJkQwv83xVAE9XX0ALvk7zO9X2yR9Iht7GqYqRtVpEDer4rAyc00fe+tFUSmke6KmO8kAI3ulxOnrHbbM5bqEeTZmOFT5JGWKJsEfITxuKVPrmJVO96vVyuDdkkYAGO7K8eP6r34UdksCpCWDdyXu93q52hYYRU93IH8PRCAkii7OdLcApfWqCo5gnee27dn/FeWW02O13zrpd7192vFzNUF9utrMuzBDaPFAlFvK9Xnp70vY/8MxS90nany0kouF9Ppo4PgaPhuXjpwHNDkwPe98RV8+E/zmLpHM5RdAYCCh6GlIRhpCa1P69gqeW1F+ND3Q+1q1z6xhEPkePY7uXKSUhobJknT9uRaDdfgp9XcazivB96orn3u/9hNfYEAat7Rsxwp8DxBvMmYo8xqsreve/vrnu9F87EsDXS8Mqrqh84NamGkJLMN+NSsWJWnbF7unf3ewi2FbaMkByc0pBUdc05r0xSvNmHRJklQPt4R/r+7HrToV9Ol0voGoZ7AoKQ1SyOKZRAaZI/aQMJa0rEhz7xzOnQoPeaC5gP9hMwp4qtjUXMNdyGt/lGFnder/qeE5OcJhGilMvpBOdXbWgdxxvLWq/Xq8iXnzBIigp9WFWMhKZ5aqD7L9frRMB5X8HVsCwzDL29up8/xoWkK4pL+TiU5RUyQ/jkRfjwsK+qqqGRqu6ifLYTYVzosqzTYRx5er1/Aqw0LVb148iscqhIZMTxExeRpqrg4jiOQ5ZBdogExeHJW5sWaYH2NRsopSR/cowwr3SPjxPKLLteRbi5XpvGznx9NZtxPGZDHkWB/Wyuyisi9AvwLE3JWlwg83iE/K/A0I38NvyQ0bMzBIKE0qGbKIb0dAw36/AIgP6kIOE1HcZGXNHn2BZx2mZZIyjK4zE0N5u1eVzHFDo8NU0hoR++m8koIiFId1tRA6R2dWibtbgg/TAMnJRD3w7n5xUsnKTS3TLAxSBqAAL3eEwtK+UQPtTEIt3Ahx/fTHSc9AH2ZRQJCU2WWWkGsMyS1wzukWU149B/Z4Ic9TlsJDvNQEKfpXXTAcHRXK9WFimJt0v78VuCpVNwD27kLW1FL5U977pbdrQ8RaUWgX0VCQnfubh0ftTEu90ykDA04BznDXhhyH6yc1kdyAFMpbfZnfLTx7covQEDpBpGmI2MpNktK6LIxxGvdKUY+XcuiqFi3G5te8u6qR9LIujarm3ONg7qSAuEiwg97UbYYdlNhNyEj2BABtEPtIVqnyO97XkBq8L+93z6PTmKcEBZdtCU2a37jG+bQMa6lcLEqisWbWfiZc1N04cAEJ2K71P6piknJEWRM9qUlAX7wwyBbJC0nOInDXX93rQic0spq2AiPQDzrqrUWQ+Qm5bpMfskeH9/56KWrivZbxggvq70WQ8ljYLYqQaRGQjem6l8xmCeVp8CxFuizDLISdP3QCHydy0XCib7KJtAxWviYVUx288oKKH5hGUP76GR2w8CmMfxBkA/yuDn2W7COewloCiPyefp/1QwEVhsImCU5/MSohYIujrRsf3jQdH+r4R4E394yWjNgjmCpcpgARcHGfRt/eLhQNfQqXom/Af1D4LCmCNYyEUJ4Q+Hlx8UbUMZfdjweYwUCLRZAkn97dqUnLcCGEoq4gXBRwEVJfX5yWqRfj3fiaKkDxMmhirP88Qjtf/NaP0FyHlLYBbtgyA4HHzftm3HwRo7z92lZxQ4KGwJ8HMQIf38ZLs/wdb5NZ+s/In8c5D+aP1/42/85fGPOfzR2JeXfwL+9RXi4cvLywzNfwFUqB14OnFfOQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 480.0,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 75,
            foreswing: 38,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 2400.0,
            magnification: "500%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "319",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 400000,
            ap: 13333,
            dps: 990.07,
            speed: 6,
            range: 520,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 404,
            foreswing: 71,
            backswing: 50,
            tba: 167
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 13333,
            actualDps: 990.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2042Data;

