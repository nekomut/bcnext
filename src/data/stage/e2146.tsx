// Stage 2146 Data
import type { StageData } from '../../app/stage/types';

export const e2146Data: StageData = {
  eventId: 2146,
  eventName: "New Challenger",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 146,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "VSベガ 中級",
      baseHp: 50000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 100,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "150000",
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
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 600,
            actualDps: 86.54,
            magnification: "10%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
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
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
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
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "2",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
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

export default e2146Data;

