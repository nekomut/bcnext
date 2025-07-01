// Stage 1048 Data
import type { StageData } from '../../app/stage/types';

export const e1048Data: StageData = {
  eventId: 1048,
  eventName: "開眼の猫縛り襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 48,
  stages: [
    {
      stageId: 0,
      stageName: "猫縛り進化への道 激ムズ",
      baseHp: 750000,
      width: 5200,
      enemyLimit: 6,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10013",
          treasureName: "猫縛り極上への進化権(猫縛りの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 800,
            actualAp: 300,
            actualDps: 562.5,
            magnification: "1000%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-60.0s",
            delayFrames: "900-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAACAAACAQACAQACAQADAQEFAQAEAgAFAgAFAgAGAQAIAwAIAwAKAwENBAATBgAZCAAZCAAbCAEbCQAcCQAiCwArDwAsDwAyEAA2EQA+FABAFQFAFQBJGABRGwBUHABgIABwJgCAKgCQMACbNACnOACyOgC3PgDDQgDPRQDaSgDkTQDsUADzUwD5VQH+VAD////E1vc8AAAAQHRSTlMABAgNExkfJiwyO0TS2eBKVWFqcsmE/33tmI2ksL+2x+HR//PZ5/7y2+j1/u7/9vz9/v7+//////////////8APSBW2gAABdxJREFUWIXFV2uTqjgQvQq+UEcQHQdQEN+KEgiEhADu//9X20GdUefiTNV+2K6ySiN90q/T3fz55z/Kn/8f4EepSXJLUfWxaZqToTboNKR67WetL3W5o06smbvbH4/7/W7lTs3hoCX9FgLUh5azO6IwJkmSkBgH/t61Da39O4h6WzPcY4ATxvPifD4XRZ7SOER7x1Bb9Z/1JWXsHEOSlsqfknMWB/uZ3vkRoa6YKxSn+flZwI7Id01F+sH/1ngV0OxZubSmyBI0N5TXNjR0F7EH/YKnN3uKjAUrs/0KQerafpLde5/TEAWEny9nGUWu3nwB0JqsMX+4nwab94VHbkblxJ+p1WGoCQMeop/hzfv7+wKx2wGP1ma7shwkbRU+JKBI0bsQ7xM2p8hR5SoAebKOHiKYs1MJcPqyK4vX404VQNPYJvmTC94CXAg/XYCoHKdaFUB76rMHffABnzwP3cOmgTOuBLD99PwoBackYfn9AV4ZrwCK87MUj0dZtLaqAFrWgRbfER7hXgFAEMkjjYrb5xM353hX6YL8WIhCJyuZwCnlF2cKCKJbGcS6OvM/EwaNhLOUBAEr8viEoBI4FTxjgT2sAvjTHu9vlVQUPMEoRBsPc4Y2mzADmABClByNQSWArDr+NYxFTk6bxWIDVRCFnrcJGEOLDeYQghd8hH6yC6+lUJQAHgZtL8DoBF9OHooT3+6+6Ah1xRJOlIHnMQ4RZpEHdE7DzcYLYsBAq8mrhgBO2P6V/WU7TnMWnCKeR5vFiXJyWnxYr5taraE7fnyfS0hhVkBjQYQXDC1n1WS+OtGeOMeYF/lXOkVUc8aygkeH2bDx03SpN7XpHrPnxg4wKd7+Ql+Mtq65Q2DEA5+KjIZ7W2v+arpJbd31MRUQQrUQRUmxv7LUxm/U/5T1sA4IZbzMBKUkDv2dPVF+iN+dQEmihFHoDhkJ0Om4c6bjQfMXo/UmdcVGNIf78zRG3nJmat3mq+FekyRZlu+2kFrLOpJCTNSERMHSUKRXt9ektqrp+lDrtuTbNfJkF+WQ/YTAgnGwu6+CLzaKmeu6vZFt6DdHJc0JsiKlhJAkRqvhi/BJiunsT0iIv1+JUIvb6l0bxjQjpYTbV+MMNgo/jGMSxwmNg23fKJNdaxtQ0DQpAfBhWukDZHzuY7ATuj8QIMXefFqWm6zvMKMXC4ACalUQJdU54Fg8lYiGB/UOSRMI9YEd0KS0IIl9pxKgZa6DSDyWJGKvyjOK0XamtyVoLeiiD9ahnVYBABvBAZOrAVD6GRNle3DNQaNjHOKbD0ElgKS50OaSm36RQeIS6Fzzqdo1tnGZRrCgGqAFfZwxSlma5WKSFGnpDkZr2xodSJYmVwuGFQCK5dM847CTwuUcjMig9hKa0vCw3AYMqACBpCRcVwDUBteBDu0iCsMIWkCWMrHjpnGIYV8scvidMlxlQU11glSYzmN/7rpQEWmeX3pgnpdBAfMY59ELgBB2wBy6pWNq2ni2DmESioYOctFnNGEs/BbEa2FKw1XAC1ikfVdvy3JLtdY4LUo3GMS1uNDxL4UkN0vGQMFvI86BbjuzJQ7kwXQPBxcKiNoWMRVceOazOh4C6WoSjHMKlMPebf2EwXTEVwpBNrjgYwJsNDqPAJO+a+mDjmKsQ57TJDxaN7o2hs4hJFeB6krFKwta6U/teNhbLle2Ya0QBYcJWo1vD4h938OkLCdhAocg4u23gaxMl6fAPx4QzFGYwr6jfS7Q8MYx9y78JISmGdgABjwPZHgt8CIKCYKkn3m4vp+4kmLMD8GV4sDQFK+tznM7qSvGh4ev/CG+/TBxpc5k9uGhEEdxzDgDBwbfF3ypa7xtEU7ACgw10KzX7kRqqUbvAzaKEwoC9PeBWm+qxmi+Pvr+Yfs2Gw9B9Hsxp6O3D5Dl8m1kDlrycyGXb6ajfvnMx0e/1+v1+29f0u+Ln5c/30ZTY6w9v6w1FG1sTO3ZaNT7lP6XfB32RjPbMkx98DgX/gXXD7WFIVc3ZQAAAABJRU5ErkJggg==",
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "0",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "46.7-93.3s",
            delayFrames: "1,400-2,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
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
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "170.0s",
            spawnTimeFrames: "5,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "220.0s",
            spawnTimeFrames: "6,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 9643,
            actualDps: 4317.76,
            magnification: "100%",
            count: "1",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "猫縛り 進化への道 超激ムズ",
      baseHp: 1500000,
      width: 5600,
      enemyLimit: 8,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10013",
          treasureName: "猫縛り極上への進化権(猫縛りの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-80.0s",
            delayFrames: "1,200-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 40000,
            actualAp: 400,
            actualDps: 545.45,
            magnification: "100%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "60.0-120.0s",
            delayFrames: "1,800-3,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
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
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "1",
            spawnTime: "170.0s",
            spawnTimeFrames: "5,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "1",
            spawnTime: "220.0s",
            spawnTimeFrames: "6,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "1",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "0",
            spawnTime: "310.0s",
            spawnTimeFrames: "9,300f",
            delay: "80.0-100.0s",
            delayFrames: "2,400-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
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
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
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
          enemyId: "130",
          enemyName: "猫縛り極上",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 9643,
            dps: 4317.76,
            speed: 5,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 960,
            freq: 67,
            foreswing: 6,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 14464,
            actualDps: 6476.64,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1048Data;

