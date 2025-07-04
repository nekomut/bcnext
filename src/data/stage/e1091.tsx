// Stage 1091 Data
import type { StageData } from '../../app/stage/types';

export const e1091Data: StageData = {
  eventId: 1091,
  eventName: "開眼のカンフーにゃんこＧ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 91,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "カンフーG進化への道 激ムズ",
      baseHp: 600000,
      width: 4200,
      enemyLimit: 5,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10133",
          treasureName: "剛拳にゃんこＧへの進化権(カンフーにゃんこＧの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 1666.64,
            magnification: "800%",
            count: "2",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "5.0-7.7s",
            delayFrames: "150-230f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 1666.64,
            magnification: "800%",
            count: "2",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "6.3-8.3s",
            delayFrames: "190-250f",
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
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "1",
            spawnTime: "27.3s",
            spawnTimeFrames: "820f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 960,
            actualDps: 1800.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "034",
          enemyName: "コアラッキョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 700.0,
            speed: 7,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 2800,
            actualDps: 1400.0,
            magnification: "200%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "2",
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "2",
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
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "2",
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
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "2",
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
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
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
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "カンフーG進化への道 超激ムズ",
      baseHp: 800000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10133",
          treasureName: "剛拳にゃんこＧへの進化権(カンフーにゃんこＧの第3形態)",
          probability: "100",
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
            actualHp: 30000,
            actualAp: 12000,
            actualDps: 8780.46,
            magnification: "600%",
            count: "3",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
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
            actualHp: 30000,
            actualAp: 12000,
            actualDps: 8780.46,
            magnification: "600%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
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
            actualHp: 30000,
            actualAp: 12000,
            actualDps: 8780.46,
            magnification: "600%",
            count: "25",
            spawnTime: "33.7s",
            spawnTimeFrames: "1,010f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "13",
            spawnTime: "49.7s",
            spawnTimeFrames: "1,490f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "7",
            spawnTime: "83.0s",
            spawnTimeFrames: "2,490f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "149.7s",
            spawnTimeFrames: "4,490f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 8300,
            actualAp: 1200,
            actualDps: 818.18,
            magnification: "100%",
            count: "3",
            spawnTime: "50.7s",
            spawnTimeFrames: "1,520f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
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
            actualHp: 8300,
            actualAp: 1200,
            actualDps: 818.18,
            magnification: "100%",
            count: "3",
            spawnTime: "84.3s",
            spawnTimeFrames: "2,530f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
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
            actualHp: 8300,
            actualAp: 1200,
            actualDps: 818.18,
            magnification: "100%",
            count: "3",
            spawnTime: "136.3s",
            spawnTimeFrames: "4,090f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "17.0s",
            spawnTimeFrames: "510f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "18.0s",
            spawnTimeFrames: "540f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "19.0s",
            spawnTimeFrames: "570f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "21.0s",
            spawnTimeFrames: "630f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "22.0s",
            spawnTimeFrames: "660f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "265",
          enemyName: "剛拳にゃんこG",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 40000,
            dps: 19672.13,
            speed: 6,
            range: 410,
            rangeType: "単体",
            kbLevel: 5,
            money: 2200,
            freq: 61,
            foreswing: 11,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 19672.13,
            magnification: "100%",
            count: "1",
            spawnTime: "23.0s",
            spawnTimeFrames: "690f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8000, 2000, 30000],
                timings: [11, 15, 35]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    }
  ]
} as const;

export default e1091Data;

