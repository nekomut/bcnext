// Stage 1140 Data
import type { StageData } from '../../app/stage/types';

export const e1140Data: StageData = {
  eventId: 1140,
  eventName: "黄金週間ゴールデンウィーク",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 140,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "待ち焦がれた連休",
      baseHp: 5000,
      width: 3600,
      enemyLimit: 7,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-7.3s",
            delayFrames: "120-220f",
            baseHpRatio: "90%",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "20",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 0,
            actualDps: 0.51,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
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
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "ネバーエンディング渋滞",
      baseHp: 20000,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
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
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "9",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
            magnification: "100%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "96.7-100.0s",
            delayFrames: "2,900-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "96.7-100.0s",
            delayFrames: "2,900-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
            magnification: "100%",
            count: "0",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "96.7-100.0s",
            delayFrames: "2,900-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1000,
            actualDps: 638.3,
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
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "旅行会社倒産",
      baseHp: 60000,
      width: 3200,
      enemyLimit: 12,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1000,
            actualDps: 638.3,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "6",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "9",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.0-8.0s",
            delayFrames: "180-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
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
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "やっぱり家が一番",
      baseHp: 120000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "40",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAQECAQEDAgIDAwIFBAMGBQQGBQQIBQQKCAULCAUMCQUOCwUODAgZFQwnHQMnIQ4yLRw1NCRCMgw+NRhDNw86OShYQAVMRCxSTi5PTElnUgNlWzp1XwOoXAJybF2OcAd/flahgAeEgGvbeAK4kQOtlT6alojNowO4qWHdsga3s6O+voTuwgHZwFr/ywPMx6nuzDT+0Bb61kXY15rX08ft3p7+4Gz567Hy8av8+7L+/LT//qv99+D//rV2elb3AAAAQHRSTlMAGQsuTz7rY3b4nYHTjqu93vvPE//f8WH//57p+/////z+Hv/+/////f////7N/////v///3H/////0SmKCf5V3eR0qwAABRRJREFUWIWdl2uXokgMhoebIFehCxZGoGFhkaLcUoSxYWaH/f//agNqaytg977HD3gOeSqVpJLi27dpsQwn8KIocjPvzBgLoqIb1nq9tiX2f1hLurWO8m15PB5T7eWL5pwoW+u02NUNqO223//8/RV7RtTtaLM7VNUeVDVdqjFfWV6Q7bg4DMaDmi7/CoARjRDT/Y0AIH8e8KLYCdnv7wD6pwGsaCd0fw/YGp8HSA6+s9/X3db6fCVxenzvQd0dbf7TAJa3sjvAoW3X4lCKUNnPS5JRnA9BpDjO21Rje3NRlj+xF86I6bUISOwir8wNgRNEeeWtNOFpPCER+B2AQzfZeFG0sCx15WeF51jKUwKjJ5c6xL6P92WAojSPUEiqXZCmq6cBffkj3Q0AmvkhodVbGhS7jReSfVV68eZJRn6Dfvy9g3NEshDB+vu6zd0sc30IbX0MwmC2rMH6169///n5Vh82YYBQdqoj5Lru8HgMHEOYX3+w79qySPMiCAlod9yi5dLF8HgoPYOfrYTfgws/fpZgvglM5HuDzOXSBCdceFKlp7XECt+LXbEJkRelj4rWhjifR5Y34t0uQSjGh/qjmre2646pJc75wIhWQkiC3Oz+TIGqGhpkm1ozcYQyzAhOIGlVVT0S+qR2x7Uy7YIA64N9SJq2HrMfCOl0KbCig3HmurjpumYc8KTDCYYf+yipu+6DB5TQ6+NxDsDymr7wCUS7vg0B9i+dkiZ+PttjWYZfJVXTNh9CCF0hJid70ww8Y66tQFsldVPfpYD2ge1dQSZ0h/VcY2L08NDeRZDSvrOdAMH2rS3nEgkdrb5LQRb2xkMQsFdAgrp8fBNs3+8ENWk+hpC4SzO+sLwCCqEtxotR0KHKhVUGb9yGYACckwAeVHAqNqOThtEWMIX51eYuBH1nu4wrGgbF4VCMx4CzAtjaI2AI4jsMTWeBd/I1zw6AsXNAKSEYytQ0l6omjrUVyd9FGnMFUHpdeV+RJA4Cz0u329wz17Yx0pu1sM4tYQBUp+yFcYJP/lfNWwmKPOgyZRCUx1QfAcR1uZYAcE4CjsMQopcNx6AaehJ2/TgOvKyf+GMAmCG6+A4Ydk1peDPvKU5i8IpWbWmPbYE2pS2/AyjJ4hATPxmJaDMGkPx+jC3MCyDzwWFC/YcbRw8Y2wLvkKopPXPTngAkw/0RiFGYZPgsclYRyY8AAe4m4AK6AM6CCY9A7lXIsW195DAwckj3deFdAadQ4CxG7utV/koSBGakkOB6lNBq42bNpZKr+hxM9PrXVf5kQ2JFK8YJyi5nuWrOnQm7twB3uqszvG476P2WBoPohPoIcLTpdgQtVTdvrnlnVzIAvL7eAthJBpzG+3viAHiFPLxeAByvTF8TRgAUZi1CeeqdkmkasuXIXwFg3+0vi29bz3Q9AJjRNp2eLcKIB1B6sQvTovCQB7/02ObT93fOGjs8+8QlFG8CD25OQVHsZqYbI/uYPipBmPb3PnqIkJ/s0ukYwBXHcf0HIcguhY1k0FMwPaRztcCrbuibph+ahgLS4G9oqmpMSQLRdFZORg7R3KcoDDcSr1ZJZossiIFPkGwlSjZQw8zRRcXyY1ucdoDldHhP1h3fEAfpIfFVSVEXxioGEsMIijF5nhheVGTVRIvFYrlcLgYtUWjCY/8PIVXXFFHkhakdcJImGyq8vBzXQlUNWZMm7YfPIo4XJUWTQfqN+v+aIok8x901k/8AwpNE+yajjWkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 1200,
            actualDps: 972.96,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 1200,
            actualDps: 972.96,
            magnification: "400%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 1200,
            actualDps: 972.96,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            count: "0",
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
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "200%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "200%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "200%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "発症！５月病",
      baseHp: 180000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "40",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 1459.44,
            magnification: "600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 1459.44,
            magnification: "600%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4000,
            actualDps: 2553.2,
            magnification: "400%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4000,
            actualDps: 2553.2,
            magnification: "400%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4000,
            actualDps: 2553.2,
            magnification: "400%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 1459.44,
            magnification: "600%",
            count: "30",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-23.3s",
            delayFrames: "300-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1800,
            actualDps: 1459.44,
            magnification: "600%",
            count: "15",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-23.3s",
            delayFrames: "300-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4000,
            actualDps: 2553.2,
            magnification: "400%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 3600,
            actualDps: 6352.94,
            magnification: "150%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "24.0-24.0s",
            delayFrames: "720-720f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 150,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "10%",
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
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1140Data;

