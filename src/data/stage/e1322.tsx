// Stage 1322 Data
import type { StageData } from '../../app/stage/types';

export const e1322Data: StageData = {
  eventId: 1322,
  eventName: "第2部 敵軍団行進",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 322,
  stages: [
    {
      stageId: 0,
      stageName: "2012年デビュー",
      baseHp: 2000,
      width: 4000,
      enemyLimit: 5,
      requiredCost: 80,
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
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "10000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "5000",
          amount: "3",
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
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "2013年デビュー",
      baseHp: 60000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 80,
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "20000",
          amount: "3",
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 800,
            actualAp: 80,
            actualDps: 80.0,
            magnification: "400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 4000,
            actualAp: 400,
            actualDps: 179.12,
            magnification: "400%",
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
            actualHp: 4000,
            actualAp: 400,
            actualDps: 179.12,
            magnification: "400%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 4000,
            actualAp: 400,
            actualDps: 179.12,
            magnification: "400%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 800,
            actualAp: 80,
            actualDps: 80.0,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "15.0-45.0s",
            delayFrames: "450-1,350f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 4000,
            actualAp: 320,
            actualDps: 600.0,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "031",
          enemyName: "師匠",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMEBAQGBgYGBgYICAgICAgICAgMDAwNDQ0PDw8TExMUFBQWFhYYGBgYGBgbGxshISEiIiIjIyMpKSkqKiorKyssLCw2NjY4ODg6Ojo9PT1CQkJKSkpQUFBRUVFWVlZhYWFnZ2d1dXV3d3eAgICKioqLi4uVlZWdnZ2oqKi3t7fCwsLKysrV1dXc3Nzj4+Po6Oju7u719fX5+fn8/Pz////mL9pFAAAAQHRSTlMABAgM4x1+khMo1ThCyTBRWWKucYJ7p5fBiZ+8yqzbte/IvuDU+tH+797q/v/v//b///3//v//////////////LaXl6QAABG9JREFUWIWdVmtjojoQXeDiwsqtb63WR7WKhfAwJOGd8P//1Qa1KyCg7XyhWnOYOXPmTH79agmlr6kDte0X7SEO1svpx0L+MYC6Q+CAjd6PAXpmZMHEHgk/PC9M3Ahg5k01VRF/BDB34IFk/vvHdjHS5G9jCPLsAI6IxRbysWtsJl3lW+dFbWqiyLMiSlBKaURcfaZ9A0Lqb2FEs8BygiSiLGOMBp4+f3mWUKmv45RlGQ1JwJ85QMbSwN31nktC6u8xf+0tUkzY+WFMntGV2N+j0vksBlaaP6lvz9SHZQjdN5iUzmc0CC5fsNBdPSRCXVXPF6HihwjyzG0+f0aYtk6oNLKjwu8vDcifNwS7bUKFnhGU3k+JnzIeNA7iK1Bkz5u72d1hWjzPKAIOwshzzQ8Tc23lEKE5kpoIWMC0UnTqO+9vi1mn1x2sDBjkEMw3+vVEKnM7vqON+dsXSRQEPl/aXL9A4N1LLYEDM6whnmz+lSxxCJerO3VndQRqOqlrYKAXXid1x1vb572sI2CFaM35LLEHxYqll9HO3Go1CQzMOEBJhYC8Ed6i3DZR7Ws1DiVvcOKcKgBx/pmsn9kOQt+MfRBU0g8xR4iNmoTvQlmh9HRKyyyy1ENpRt1nvF0zogiQ+xYAnzE0a1LeLcSRmxLwT0ZnH8vODDpx5m8eG5G8IRQWKqDhVdP5egr1WuGVomtEcaECRrF/NSEfwMB8yKIwsNOw2ANGnGtHKQGO2TA8t5DmHvVBcZJyRr+M0Dn8frTa5BVhyCqMMqMQflkzjU9L7UEK8i5gnlMyc2LdVJl4mwc0qnrIYBnAB4XZTtwHVxXNjKlzYkWAkqy4lbYYYe6lZkItr6Tj1EFFwNDotdAgDFxKLVQE4CyeivbA8KZlJsWxyyoAXAlWySD5dam5l9ICsbyEEkJYHm5Gds0pKBucUQeWAFhilUhgidnMgrz1syqJGRdGcUkw6o4ba1D3Ac+46sklJXAEtGi0hZd9xJVcXSoxwFkRE68apaDuQxaGlQTyRpYWXQuAvCQJvt9KuZ89CfAKvTtH5pYKuZ99QXBrXDXMg6B0Xw+A0Pu9FgJ0K4Ke1oN6FuXO8hMGdWuREX7fvv7J0U56vRKkwQdJ8xzvAVJ0pYFlKTwiMK1nQRl/4pjWAPAJgMA/z1SK3t9Ws36DlOTh0YIeur9d5AhHFKZJCA9DVVGatCzNIYYQRjUAWXg8AgAOwFm1rCdxDIsVVIwFwsP7H+A2C5kDTNybBcflawZDAJzc4XTdtmHFsXcBYLFnmi72w5AgD19sOQBWFOj9XpurKgt8eVtgL3q9yWar69u36cbmDeD9CyJ+q5q0Lmh5559LD8yJLPwSZVVVZVlRR7oXXSvzd6223jXOk5S6Ze+Wugv7qtCkdT2KfLWeq71b4/LEuNx9qTtrWY/KzKVnvheKUAllsEcJ/ydFby2LhQsREd/Hx2Gn0/l9i04ew3fLw9j7bLvmKKPh63K9Xv/J479b5B//z2P5OhzVevpfN9iiR9TF8T8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 557,
            dps: 696.25,
            speed: 4,
            range: 451,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 557,
            actualDps: 696.25,
            magnification: "100%",
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
      stageId: 2,
      stageName: "2014年デビュー",
      baseHp: 90000,
      width: 4000,
      enemyLimit: 15,
      requiredCost: 80,
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 21.34,
            magnification: "200%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 46.16,
            magnification: "200%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgIDAwMDAwMFBQUGBgYHBwcHBwcICAgKCgoLDA0MDAwNDQ0MEBIaGxsVICQcHyIjJSYpKSktLS0pNDgzNDU1ODouQEU2RkwtS1JOTk4/VFo3W2VAZnFeXl5KaXBcY2ZsbGxPgpB5eXlqgIeHh4dplKCJiYlena5wn6uUlJRpr8Cenp6goaN4tcRwvM6srKx6zOG5ubnCwsLLy8vX19fa4OLf39/m5ubv7+/5+fn///8Vj6Y9AAAAQHRSTlMACt8TG7Buzy8nOKKOXr5HUH9toIjJc1ipy5e568XMtsrTzO+zy8zM8MLizMzyzMzL3vXOy8zLzMzM8MzMzMzMSMznwAAABOlJREFUWIXtV393ojoQlQftAhVBFAVUUEpMbRCza8qPJQnf/1u9Qetbt8Wz3e05768dz/GgZC53bmYmw2Dw26Yav+9zbYp1r3wKwJhMtE8B2OvY/iTAdqx+BkBfZPHY/ASEOl4ftrH7pwiKZo69w8vxT3VQrMlivT2+HBc9AOoHtledgPcLEHB7ttKx+vZX0XTb1DVFNXQDvsfrDBAOvtmz1Lmb2m+lUXQ3THexH7rDOE1D1zQfggMwWI17HqaNF7F7CUNRuivD9aNScEQrEuFGVNQfepvDET4r6x1VwxmvtucsVUxrNptZphPuKBJthZpWVigXdZ4sl4+b9Xp9OIRv/S1/tVr4ltJFbfk7VrCdn5bgx9sil62scVDWlD3t91GWbdbH+A2A7mfrqW2Av+r6KZWyFSQoZFtj3grRSpYQQoTIn77vt9vV9gaA2cVt+oWQbSuLBKNSikq0YIKVosE1RV8BIFutssx/G4ITLla+pammuyg6lwYVgsHjX01KyQlJCvH9aXM8ZNninYgDzVpk68k0zasTgRwDcS5qxoCC7DiQKKCy5ckoThcT610tqM5k+3J8XFby9MQ6SmgtBUUoKWRnDcuDpG5bntq6Don11t8YxxkkyP6xPBOmmGHSEFRyTAqaE4JxFFEgU816M15xIcez7fO3p68nAgIxKThDVZFHQZQzVhQkwJWUgs37/Aeqfzxu1pvlfn8GqBMIRWCao5zlCOdAIUKUlRWN+6oAFIyPm032/PjtFaAIEK1rRBPGIXwcoCSJEgSCBMP+jqr623W2eny8hMAQI6wDSHAtK0hCITgXvClvEBgo09X2uFzuvz1VJxEZgXA5KnidE16QhMkSd3dEequlO6Ptyx78v553kWEhIXFxAzXQNJxQSTwGwCLVbwBow1W23z89v6ZelTCKaY0RwQQyEFNZs3N+TW9R0MfecvncvGauSCLQQPKSFbWsScAuKc137q3Op5jDoP4v9SkG+cumi6OEUrwAQ42kN2QcKHbM5I91qJAFqhvSwIagqxuSTW8cCWZc/VgG6xAFP44qgQMsru7wGxTU6dVjOhVohGrYyZxFQXF9Q9J+FcyUt9cIkPUIdRWECeJXuKWowj4AZZxQ3v5kkldFUdaiwOIqAKiIsE8EdfglYKLtswpfIcsSJZM+AMUaeV3D6bEGVT/zSvsAtClBXtHn30rSActX77JkfRqoLuYsKHsB2hL6KzQ1wOAESjp430+hltK6wR7rDaHLCUxIp5BoOK/8vnqy4AQdeVWvPyDULM8j6I/AQ+x6m6JmO/YwafoZnDCa+B7OaUrRzXJU7BC67lmri9dVavFYV3XHdd9NAFcI9wsKYtVNJ9gZQFzwZNvEv55w9XFUlGUSIcJKuOASalGeTjWAIreK8NqMEAWBd3c/9ALPC9BuF2EmoC3WDUv8j4xlyoxEORmquo+DLw+W445HHqU0iCLvwfzQhG3voHYmmhqWZUdZ0YYRShYPHsnDjw3YegoDDSTKHJroycXZwVHghNWtLvLWtLCG/bKhOYiz6kbK5c62csFmH5ptldmuYAtzoIa7nW+c/6BoboQ09z/2nmLM53Mb5DIc56ya4cxhcrJd1/nUiP/X/tr/bZpu2rbjWGD3F+t+OI7dvTr90l9xhg93d6PRF7B/Ltb9GI3u7h6Gzvuu8i8pdTIVUawkxwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 117.64,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 650,
            actualDps: 541.67,
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
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 14000,
            actualAp: 999,
            actualDps: 1665.0,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 14000,
            actualAp: 999,
            actualDps: 1665.0,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 21.34,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 46.16,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 117.64,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "102",
          enemyName: "ハシル君",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 600,
            dps: 947.37,
            speed: 25,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 19,
            foreswing: 12,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 600,
            actualDps: 947.37,
            magnification: "100%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
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
            actualHp: 135400,
            actualAp: 2555,
            actualDps: 8516.67,
            magnification: "100%",
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
      stageId: 3,
      stageName: "2015年デビュー",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 15,
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
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "100000",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBwcICAkICQoICQoJCwoJDAwLDA4RFxYRGBgZJSUeLCsfLCwlNzUpOjk0QUAuRUMzS0g4VVE6WFZAXltFaWReXl9Sd3NXhoBdjYdimJGLi4tuqqJ0sqt8vLasrKyBxr+3traI0MiN2dCV4tyZ6OKb7+XX19eg9euj+u+h/u719fX///9OZ5qiAAAAQHRSTlMABQoQGSMsNkJOXGh0/IWPfqCXvN2vp+fD88391uLz/+f///L+//b/////////////////////////////////aKaeZQAABZBJREFUWIWVV4l2okAQXAFFUfGKyI0gVwYJkAnXzpj9/7/aRo0XmpiK79kQu5ieqT748+dbMD2ePdndgdD9/ue36DD8dNLrHGyWn8qLQedX/l1hpssDZm9zgrT2DYH5hT/Di+raNUSu8e9N5U0cG0P2R7ezf39uhEniL3qNv6j7aZmuf0HA9GcGykmJ9H6n053qISYkW4+459c/W0cF3dWxIbDsUA0yQgleT589hk5vYkQF2e1ICk68tEnApvlm3nuSgBvpKKc7AN5I/ZG+rRq7eJqgwy83SVk1wL48ko4XDRn7jBI63PDFRvG2QeSuZLjY28hUxUHvZykwXWGhaJZ9hGWa1sk09Hn/p6Nk+xPZdFGcHJECTmaC1tLgW4YON5BWbpQVhFK6a/2RMoaN+CaKTne4MMO0IrsHoGV8UPcj/5Fqorx+5N4gD5f8w6NgBdlExcPH71Fv9Ycp0eFnSngQ0GOQxJg+ioGb6gH+/vmwC9n60SYwg4Wb1D8soCGYPCDgIIPKH9yBIH20AmYgu+lPz98TPNgDTlyh4mf/xwS9pZmQ2xWA+q5vUZLeOQWux3WYvurj9vMqnJUXFCRPozYBMxAFhhX0qB1BlQReXJ75cuTaLy0CTlQnLDc14qpFUASa5uGvJVCS2ONxi6DTXypStzdX7oigCDUtOBGADG1NaxEwQ12T+/zMTFsqpHUaeEn5dR9CiMKgtQfcZO3qw75kZq0IYNFFUdG9b1Mf6jLP4xZBT/KjtdhfmudDoBeH11jQFQB1nsRxEhkTvstdZnR/GWZoKdwQXG0HKXOc4ySwHcexFHUpjS6L62CBykSfLDYnghpnWQ6R08Pzd3WRxts4cpzo/f3tVdM2pi7yZwZBjercl1U//yIoked5CFOIea9NWuUY48R23v7+/UBWAE1XHZ3bHCiIVFtD9790BIUPhQHKaJXh88nSKnIChF7dICUkMSX+kqAmqbk6EexIVRYYl3Bo6YU0SBGHIRCnFaV4s+hfhbArfOVMABmQJllVJ95VetGqKPL93tBsszwTDOSw3FWR5p1CIBiFKC6q2EluKvTxdEhszs4h8JKPKYkt7xwC3iZFRerEQfjQZG9QIP1iVuDEdUx2mROck5FUTew0D20PRS1sI7SeX/QnKKZ+TrAX3GYzrTPIXstq5HOCbSmGoc+uOiRkMsrvEDSZkCWu/fZ+gTdTHg0F/qq3dPi54Ud3CJpgyjD4+Pz8/Pf1eV/Pu+ztnAEjqWxadwl2Zfj68e8C73cbE3T1+cq7S1B4r38v/D/fH7RGpi/79wjoLcHbo97aW35L8Hn8/JqgCaHZxBN+S0Cw67x9XAAZX68ATxHQIrwVkgYqvscABHnbn+Qo3MZXiHz1bhDd+Toju9uxDGpRcZNOZbKZdVnmdhEw0xtxSZ8B9hfD4ZC/HvaY3mj54sbZE0gjU5V1Vbwe/WG+U1aK7QVQs6CgNt8NwN5/uft/BEFzw7UUM4wuK9J+C2eK67leGEWeBdseHMZruHAaC7kwOztwO4pQ4AUoKQq0uCboigbCuKjqIoTZPC1q6EOkxoG1LcGs0sAGfiuEH1RlWRFa+DcrYPdFpRFeiIpDJaa7cmtpcVMUaY3jOIvtY75SeJO5ffloDmELL0kwEECFPVTiOtm8GP5hcKR1XcY2KvdVFfqF3xI0DAlmlNe0Qm7atGMYzBNHUVUF3tcOhThzIR4Y4qHHxq4utvTMDmXTi/Nia3sxLss8QTCMKOOxFiSgpbLMYNSwUZrjdOuZK0loyZkZzF7Glus5mma5Qeja2viI5jIMnMbU7KaqjserxbTfkiIvTBbqy6qBcsQXxVgDNmV1xIu6WIpCOyUZluMHwmg0morz2UySlssFQAY034ulNJtPJhNxOhIGfI9jD0r+D1j96EEM7X0mAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 900,
            actualAp: 150,
            actualDps: 109.76,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "197",
          enemyName: "わんぷきん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 540,
            ap: 24,
            dps: 13.33,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 90,
            freq: 54,
            foreswing: 15,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 2160,
            actualAp: 96,
            actualDps: 53.32,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 12600,
            actualAp: 1600,
            actualDps: 1090.9,
            magnification: "200%",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 12600,
            actualAp: 1600,
            actualDps: 1090.9,
            magnification: "200%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 12600,
            actualAp: 1600,
            actualDps: 1090.9,
            magnification: "200%",
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
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 300,
            actualDps: 183.67,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "197",
          enemyName: "わんぷきん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 540,
            ap: 24,
            dps: 13.33,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 90,
            freq: 54,
            foreswing: 15,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 540,
            actualAp: 24,
            actualDps: 13.33,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "213",
          enemyName: "ナカイサンタ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 122500,
            ap: 5963,
            dps: 3650.82,
            speed: 20,
            range: 300,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1225,
            freq: 49,
            foreswing: 20,
            backswing: 21,
            tba: 15
          },
          stageStats: {
            actualHp: 122500,
            actualAp: 5963,
            actualDps: 3650.82,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 7000,
            actualAp: 200,
            actualDps: 181.82,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "198",
          enemyName: "まゆげ伯爵",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 166000,
            ap: 6600,
            dps: 1706.9,
            speed: 12,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 249000,
            actualAp: 9900,
            actualDps: 2560.35,
            magnification: "150%",
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
      stageId: 4,
      stageName: "2016年デビュー",
      baseHp: 240000,
      width: 3600,
      enemyLimit: 12,
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
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "55",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "282",
          enemyName: "売り子エル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 96000,
            ap: 3600,
            dps: 1770.49,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 2,
            money: 480,
            freq: 61,
            foreswing: 32,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 3600,
            actualDps: 1770.49,
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
            actualHp: 7500,
            actualAp: 900,
            actualDps: 574.47,
            magnification: "50%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "282",
          enemyName: "売り子エル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 96000,
            ap: 3600,
            dps: 1770.49,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 2,
            money: 480,
            freq: 61,
            foreswing: 32,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 3600,
            actualDps: 1770.49,
            magnification: "100%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 25000,
            actualAp: 1894,
            actualDps: 3552.19,
            magnification: "50%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "263",
          enemyName: "ぼったくラッコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 2497,
            dps: 3256.96,
            speed: 9,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1052.63,
            magnification: "50%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "262",
          enemyName: "やぐらわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAHBgURDAkRDAkUDAYSDgcbDQscFxQnFxIkGhMpHRg7GhMmIx8vIBkrIhwsJiMzJBpFKh48MipBMyQ/PDRROCdDQkFGQjxTSjdYSDtxQyxUTkupLydiXVWVSjJpYlN3X0q4RCzLRjLlPC5wbWyvWkN4cWaFb07oRzqLclKIdViAfXybfV7baE2ni1+Qj4+akYLtd223mGeenZysqanoonO0srHGxMH5xWf2v7nY19P+34Tp5uX58uv///9vMCoTAAAAQHRSTlMAsEck/NcRZDNz7VOGG7+vn/9q3PI4/4NMZO/+2P53/6L97v3//v/n0//5wv7+//391P/4//v///////7/////+3nS8gAAA95JREFUWIXVl2t3sjgQxy0qIl4RxQtYyIpFESQsiYlGwvf/VjvYnmdfbFujvtpRTkIO8+M/kyuNxq+mL5eD35/43X0WZEWw0J91XwRFVsD/8JSKwfJQFMjJChdlRf5uPOhuvOdFhhx7hOKR7bhpkQcz9Ugg9LxI3el02jFWSNPs6dSNC+Vk1KEXseNMu51usxllM73X7dmOg9SSoUPooH06Ho2bcNuMilnd2h/2p7dI3u8BBofYndruStNver8AgGjaCNrj6K4Eo9PvdbMYALUZUdb7rDW9Ymz0u0q9Mdml8e5ws138by2NJireYPPsB5srAjTTarUsuNpm68vqO8vsKAJ0D1n+sXBbb20rO/rg6x6LuIV2qkNJ36Xu+Xw9W2/tQp7PqGWdztermz4CQNervDpv7ZO8XrOWc75KiV4BXB8GOCD6BCGk1/PJbVkFBOQ8BGhZrmtBElur1bTuBBc5rfgRQL9Tm2YYWnc8NB3HdSwT7ZrqAK2hNwbwQn2eUxZ/3Ayt5ooS9F3cWwSLA0yjHhWcEf/LtopDUfe2nhd5eL4IPC4E57Wza7k+OiguKTuEyTZJEpQkogbEvu9YFhDwTFFBkjCMGfEOtFYg0hrgAICqAYwIM4qZZF5+A9QKIATH9xM1wHiFhaClwAnFdQgC3ZLg+yhX68j3hArKhGD0PQAAYzAOgOA4iWISZxETZUkEfx8soBt5YlmOCyPTiZZK/pBEXlWSchY0GssIg/+nmR3lgUQozXOM6zVcM6em1R6ZpmnZqnOh6SHb64/gmkwmfbM9soZ9czi0bNW50FtvNuE3v79Ud9jOOvzW/leA0+Vy2YfhEYpTGO5Pn0WhNpBrwAXGwTEM/66q6gKeJRT7/Z4ungPsbwDgKAO63ymAgr0EgBCeBXyGsH9ZAQAUJ+OPIXBVQP+HEJ4FvKzgTw743TPeryHsnwa8rCB8VcGfXri8quABgJDf5UARoDfGPmPyBiiFZJvNpgbAokoDFYIRLPI4JbwEwAfGhPlZKipJ4jXBWGFvHASRtwVLWA1Ikm2y3SIqRbJF0IoOd1c1AMCbYFvmADgSRkiCMS4lxQTaSXR/WZxxWQouCShYf8AeWTLBiJSsrCTnZXT3m8eYQ8CiPhtsQv9DVGWdRwK7fSXr5ujumrLYCcnhSco2YZqUUJeiPu2QSvCyZCS/G0EOCjjhnB7DDQbdjDIGOz2pZEkZv//RpS9vZwPBsb9e+7KqX0whpxjGFOciv7/DD/ISDkgEr+ojMmEcFGCoruC0ReHUoLA5zVer0Wg46mqa1h3Zo6HtBT1N69j2eGzbk/8o+AcF7vxDHx8aNQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 100,
            dps: 11.95,
            speed: 0,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 251,
            foreswing: 52,
            backswing: 27,
            tba: 100
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 150,
            actualDps: 17.93,
            magnification: "150%",
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
      stageId: 5,
      stageName: "2017年デビュー",
      baseHp: 360000,
      width: 6000,
      enemyLimit: 18,
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "150000",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 7200,
            actualDps: 5268.3,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 86400,
            actualAp: 5760,
            actualDps: 4670.16,
            magnification: "2400%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3000,
            actualDps: 2571.42,
            magnification: "200%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "356",
          enemyName: "ガリゴリくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 1500,
            dps: 2812.5,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "5",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "3",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 6,
      stageName: "2018年デビュー",
      baseHp: 480000,
      width: 3600,
      enemyLimit: 12,
      requiredCost: 160,
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "8",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 591.84,
            magnification: "1200%",
            count: "4",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "389",
          enemyName: "合格野郎",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 937.5,
            speed: 10,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 32,
            foreswing: 24,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "2",
            spawnTime: "15.0s",
            spawnTimeFrames: "450f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 591.84,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMDAwMDAwMEAwMGBgYHBwcHBwcIBwcJCQkKCgoKCgoKCwwPDg0QEBAREA8RExMTEhIeHyAvGhMfISAgJCYjJCQfJykoJycsLSk0Ny42NjcvOjs/Pj1CQUFgNytDQ0NGTUFSTkxUUjc0XWYwZnJ1YT1taUVybkhNfINgeHV5c0yHcUtOiZGfgRqHi3SelVydlmK0nySooGZbtsWcoaS4rW/HtibMv3i+vr3e0j/ezoHq2Yf24oz+6I/q6upT2GY/AAAAQHRSTlMACM//FO2IxClhNnGhH9lPQP2xCVrqzf6agmb9xenY//+x/5H71/9zsOj+3/////7/uP/p//////3///7/////FJ6hHwAABSZJREFUWIWdV2tjqjgQLQUVecijKmpEMSJV5JHqNcYG7P//VztB726tV+Hu2A9qOSczZ17x5aXOFGsy7pu1jz0yqb/eM04X6v/Em8t9cQZjY9v6aw5JtbUFO1dWbPf7hfKXh4+3W/+KB4ZzMVsul5PmbphrVnJ6/s9KxgvO1k0ZpCUHzPmnldumBOb2AviBpwt70iyl6rZSvyxLVlzB5bkg+WaTLxoxmJX+JclJlJBCnJ3nnKZxfDht7AZ4ZSnwNCO7hGYZoyRPD3kcp1F04Gm/Hi8tL+cfj5/wlyQYTv46hL9SPJ8nG62eoL8X1Ueiz+Mu2x2PxzmOktMhzGNgiBsUlLQQwtHdMUuSJMqOxwzN51GclzxP002DCJQFL88svxAk0fEzCvEcx+xcMJb7DSJ4sXx+ZtnnMakIdrsoSNM0LiAXJRcRSLUuTOG0JNsllxA+dxGlhBW8JCUZSy+KUesBlBGFHGQRGGgQiaQUtGAJBw/MdqsGr85ARJ6Rz12WQRYyElHoJcJoEOX5zHh1OnUOkHOVBZHB3bHYRYSSCEcRRg5Cniz36mrRXOxFGkgEVURASVCAMYJznMQyWKtdL6ItWqFMoiSDVqCVAjg6zOcY8D29wWgy16KBOCeEQ+iiqZmHTzF2ZMe1a88H0xOYYdc+JtVc4xR7AI/oewM45GEKlXQhoAG9DOZAlp2k2DeoZLAJdFPlOeA8B0FWCILwo4JNngSgqOb1v+YWwHAwpCJwAJicOWRPduh5r749xGuuP9Qv48qu2hlc4FjgEQgSeXJrCHF9vD9ikEY4CJBbMahbyosC0peLg2WUkLJM5M66KMry49FI1GZAEPhVkUlqf5EUnBaVA47jIE49WX9fL/d8/EgEPRA20LXqAXvNRQyJIPAQJALLLU2S3mG1vD8YCF0EeGRoVleChoVCKgtSCA0hCRGDSdJTX94+CsbZ6M8+KO0hQkNYPFbb0DUxk85QiCRAKEryU8LYQFekyfuC7iePVFS7uiYmMghnWMstLEbiUc4Yjr9OlOaBP1JflI+PulLupyE0XFeyYSjwBDYkj/HpkBdfhwN2TWm5rFlMkhuGUPQdRdvyohRVXB5CjPPTCTZDPpLezJpeVDqOg7HT6prtWUA4ZUXB8zDGAT59HU7b+r2ovMpygD351erPEGJ5gEV5pGmIYvBiVT8KlFdIvRdC4fqQ1Si4Goz1MAzTVQMPOqJ4vdBBOLixXym8NvX3C9BAMDjyT4IAhUEwbbAXDUfAZecnvrJFg3HWvjgAT99T4AdVfGPdiwcA/wNBk3mmtSoXWq5/R4AHjW43oKLjyMOuf+cAajUhkIxKQ2N0j3c6jW673cv6mv30H0aD3gR/EaGn30WA5F6za2pVi67liyZA/x6PIK7XZpdUEEGW2+aoYhBgPDTcnqjPRhpeCXT4qaPrHYjDn45VSamUbaSBpGgihG71wbT6li3WFYTVgj43agtRstpDH8kt4yZa09JbLV01Wj1LrRuIPjQhRu5Nvq0ZCsS8VgzHnz1bruJ6d5F99t0B6VJSY6l64/efMUiuVz08vSUQrHiq9P078jvrVgSoe+OWe/VgdO/dnelwj0PBTdNJWk/gYOtWBOjpFc1ehb2BN2h/01CarLzB0J2NFbhADILAe1oL/XCgr0L9+xnKKphaimKKa4ViDQfe01qwN8P+6nZq2JtvnyVzHA6fdZSy8MEDQ9f19m8zwoHx+z18b4SBaz+ZClrbcKfD14fW6XRWK+P7DeMfm5HwhQGR9CMAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 9000,
            actualDps: 6585.37,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 15000,
            actualDps: 7031.24,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 15000,
            actualDps: 7031.24,
            magnification: "200%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "421",
          enemyName: "大天使エルファント",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 12000,
            dps: 7200.0,
            speed: 6,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 50,
            foreswing: 29,
            backswing: 11,
            tba: 11
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 12000,
            actualDps: 7200.0,
            magnification: "100%",
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
      stageId: 7,
      stageName: "2019年デビュー",
      baseHp: 600000,
      width: 4800,
      enemyLimit: 20,
      requiredCost: 160,
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "250000",
          amount: "56",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 48000,
            actualDps: 28800.0,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
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
            count: "3",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
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
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 6500,
            actualDps: 5131.58,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 17000,
            actualDps: 19615.38,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-15.0s",
            delayFrames: "300-450f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "434",
          enemyName: "獅子姉妹",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUHBwcHBwcLCwsLCwsMDAwMDAwZGRkbGxseHh4gICAlJSUmJiYpKSksLCwtLS00NDQ0NDQ6Ojo9PT0+Pj5LS0tLS0tQUFBSUlJaWlpiYmJjY2NnZ2doaGhra2twcHB6enp+fn6Li4uQkJCXl5ebm5uhoaGlpaWpqamxsbG4uLjExMTNzc3T09Pa2trh4eHn5+ft7e309PT8/Pz///9702Q6AAAAQHRSTlMACOeFtRLW/mHGO3Mfky9RR6Fv/1U747mA/pZmq//P6pir/dvA/6nP9OD/2P//7v////H//v////7/////////4EsvLQAABmZJREFUWIWdV4t2okgQ1SREY4gaceIjYkYioyLQ3dLdPPrB///VVmF2NzNxVnbKA+Lx1O163aqi0/ksbv+xPx663W7nD2W4jtP0uN3Mx+6fYTibwhpd5TzdfZ/+EcY0VYXIMi6r4rSbD/8vRNd1lqzIRUaJMFaL3cT59GeLyAxXr+NtYa3OM1bV1lbp0v3QHk6Wqyf3qgOn049VKCtrFZe2rmtNVm6jvjycZPLsXAN4za2MgphKbasGwJp06XS6053QVr0PrrrwKg0n7BwBZS04Uev9pDveldZavrweg8lJMVronNKqxvNB6mLd3xbwwxzGV/U747RiNLdGEHTAFILnxrIXjt5U26shhCy8K0GYVA2AzSkh8KBCCEBt+bxFUbizXHNCGKVgtM7gKcsqS6NMGpuOrut3Jy/UaskzsLyuCwrZMErXeUiYModhC4ClKMFYYwxeEnOBsaxCQkv93iIE3bmsz9GvBOMZ+oFiYikr1SaGUIm2ORPdhwCoM5wmQNFqe7UMQYY7XSNCAfGnNNPN+QVPwLCyFYCzklg7VhIqyqpCc4ykLMkBYN0GoDM6SJErKKSP+AEWJTyBYJSzVgDOilPKBGPnUjY6Z0QoUgLAphVAZ3po4sehDoCQGYPztaX/A8CdUdYUcK0lPhAK/YUBXrFqBzBcy0oyOBLiQGjGmlxmkVBtLXBmeW0qoZBJWa4lycAZqOVMtkoj0iHFYrZQSkAjyCdGQ4UJyVoCAKNLTEBJSd4URBPOBFjZFqAxAXoBOm+BUFmptRG0Em0Auu5w1J+/lVg/AKBgQEAkWSZEbNTWcdz/nlXd4Xx7SE9c6PpczAy1GaNJHAW83E02u+3cdYe/G1fOZIcNqOnm6AJmUZZKVXkcc0HiYF8afVptj8fvF1uLu0wrBRaLZhwgHxlMB3wWBL4NDQLorUYq6DSbC60B9GF0AHM+OAy9tTQQxbLIkYvQU33fp/pMsHT61f55amwJE+U8EWxBGTa3kpMoDKva5Hnse94iEhIlmX8b/JKT6VHXMJQwaoVtzBaoz5IwlqU1FI73eiAe9FcgWJoe5j8hDLeQOs0IRs2cWxr2dTg/0Thhg3jhLXpnBMpJzI1K+5+S0Z3j7FEMmIs9CALfeFLQJELgJEz8nhctep7Xaz5eUP7MTmyFaEGO1pcC5gqhCv2giYFx7cd4OmELz/cWHqD0/LKuPrGzO88wX4ZXGD6G1UPAAhzUiZGBjyo9jxvmgzr64lH7E4CzhW1ElzpXjfe8VDCUSgSIYy38xvmFL6xMvEUSAkaosUP9WwzDNefpISiNQRZiO6wYkUaxMCqtTgLfDxkNI5lnXmhU6GFkNHn/Pv07jM54Mhn1X3iljSm5KKF48PAo8AVOKQWZsTwKs4p7gbbEI7HgSZSXx+nnVLqPs/X74Xg8vK/X67cgjGKWROfKQxFxxHUZeKSIPCiuBIaolen852oEoqEM5uuYAJE5je0ngCROJMc0+FmclAUzOsl3XznR6X7bpExyBOCRquuP+ZLRSgnACPyAJFJBs1RVdgkAFjLGOdAar4iojwFVEqAGlCbEJQgSksSNRKuvAO6aSVhUqRCwZmRxFDcd0lBsE5YtFiFIFH1cQf8rwHgvMuQErClCZlkcNiO+QkrUOZQQh0W4KCRcQubHC51lDq4DRJYJ/JZxU6PgAfZmCgUVwNFRc+33+wuLY3dJwHTeDCUGW3t0XlkURYAMeERzWP1yLnKZiUuLozNLOJjO8MOFoBFtLDDN3ghFuCAQnyyD5slIemnvc2ZAoCQMkDVBlES+L3DlqosY5wPwm/wj+9Wlpcl5Xr81refcPZBFYRQKIDlNKPaiRpL9jx8/Xi8uXd3h8Ln3RQjmEAZUI7qsxHfX+f2Iebz5AhBA4WvWvMMoI3e7zX/unO6oj0bcP93D/eYe4e7foYZfVsd0t9rBWHGvTcnuLSjduneg2R/D/aY/Bpg7d/jNvTYeP2xA1cEYLHjqDu5RdQAAt23f4NxX9OBpco9Hjx7wPkAzWrxuNOJsTlHv5m6b+r2Hx9XB6908zdegf9tyv+h8O5nkoT896ePt8PWk9nej11Px9tBvq9+Z7tlm4Ez2BFaBJc83A3cuIO+tX2Gdydvi7un5wV/cPzy8hEFzf3t+HP06TX8LMOg/9h8fb59uQZ5mz3B/nj31+6PB714X/gKiQ36rrcf3rAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 2727.27,
            speed: 10,
            range: 375,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 16000,
            actualDps: 5454.54,
            magnification: "200%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "442",
          enemyName: "マドンナ先生",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 2400,
            dps: 605.04,
            speed: 10,
            range: 200,
            rangeType: "範囲",
            kbLevel: 6,
            money: 2000,
            freq: 119,
            foreswing: 16,
            backswing: 20,
            tba: 52
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 4800,
            actualDps: 1210.08,
            magnification: "200%",
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
      stageId: 8,
      stageName: "2020年デビュー",
      baseHp: 720000,
      width: 4500,
      enemyLimit: 12,
      requiredCost: 160,
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 2700,
            actualDps: 3521.7,
            magnification: "1800%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2000,
            actualDps: 1818.2,
            magnification: "1000%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 90000,
            actualAp: 6300,
            actualDps: 2147.76,
            magnification: "1800%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 2700,
            actualDps: 3521.7,
            magnification: "1800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2000,
            actualDps: 1818.2,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "515",
          enemyName: "ギガガガ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 12000,
            ap: 800,
            dps: 272.73,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 192000,
            actualAp: 12800,
            actualDps: 4363.68,
            magnification: "1600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 585000,
            actualAp: 16250,
            actualDps: 14771.25,
            magnification: "32500%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "499",
          enemyName: "ヒュージゴマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQACAQEFAgADAwIPBwEmDwAwEAAhIyVCGQFkJAE+NTCCLgCWNwGcNABKU1m2PwDMRwBtbnDcTQHvUgD/VAD+XAD/ZgD/dgLL09f////JwIncAAAAIHRSTlMAGTZNn2SFvND/5P8A////////AP//////////////AM1aLGUAAAP2SURBVFiF7VfbluMoDBzHV5k1MmwggOSe///LFdiZTpx42n1mH0cPOTndUSFVSUL8+PmH9uMvwF+A/wXgnFVt0w/jOPRdXZ10eXLvlHEhphicxbH5NkStLDGJJSJmcqr9nn+riZNYFAQxsqi67/hfFK+O5KJ8YXP9QPxODGMs56eI19nnIOzVsT4fQ2u2ANz0cUVOlIwROsxYnw1gzVzMzCg0GADMmYSTQdwDyDGE/IEK7ELkLetTcvbh7n+HYQcmsIHFnmGyUrQDSGw1aq0cu+YEQI385B2IPQSOoiiFMwCd5ccISGsEy2tZ+DMAjX/OIBgMW0xsun/FvgB44ZDvKRFj+4/YFwBDTIemzsio9hp80uH7E/6VflHxVwbmTBnsVXwS5EwGOxWfbDjh/6Lig8VTAIciyHQ7JYI+CCB4Yvt1IVaNOaCAjMymr0KoGgXvKZA+ssj8RSF0ygdzcD47VC6xvhy7X4ZyFbxjL0UbF5S5RuFYiFrLKH71Fx9pLjI6aIhywxyG0KIVBKf2HFpPRiYJAcCEKaE9YKFGC1pGH7hdDEEbiVzm4XS7XWf5zftyroCtYdbK7xuBvIBGB9MEcL0BLu8bqvcLlfxfOSTWOXzxh4+Pq3LqXQ41Lj4kOuhjksyyP9zm2wROvwsgeXDslX3XyUSiYAEQiJtZ3pBQ6UUpZnipQqIsQGZwgmmeJ2HBM96FbMf74iF3mZceNDsFKGjPzmpdKBANJIWrW+4AeXS5sSB0roj/0kXRKIcokat5FozpBvNVB9xSaGTYb5o0L+LdBXDZW64FzByIihKJXUmsRxUkuzWcJgYIbyFSCLnCCwnzdBX3iEXGi2a0otq4BhM1HE1iaykFSWP+mLOYZrFlRxjCog2nuBZF6+y+gj8jkGNyJvl4UABsLoVAlv5i2qZkK+vDe/9UFrWoVLQAGjBqHLcMKDqRWRU9xt9cZil6siouTimMZgnbutehy2XPrq/rRh0P8lzHJt/u0utSazFuzVh1gMVL/i3ls6+/9BSR9ChFz1aFrGuzxuzKDlvspXwYnxiV3YrKzY6LuIxb83LegJnXXfj5eKH8uSbitu3qFNmsrIMc6521zvlYQvjEyMPL8fZ1R2aeeK4sm602Y9PWdds1w6jlwuBfo4AYyu0s4vvdpiJyglsCDgJxeRitVTsoWQJ5TYaUzqtt3gVgD8Ba6oWXVfu7d931/SiNom3I7wLWepFPilbGYwFM66NB3EmD98E783hB1vBpCmWEWxRqLCK6QvGqU6Y7WLX97nmoVm3XDw8oKNNDaS2vHTktm3fOWYPF+/D9VFWXuhVGm6bv+2EYRnlrrTYM8pe+abq2rS/V3fc/1doCbln1SBAAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 300,
            dps: 321.43,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2500,
            freq: 28,
            foreswing: 6,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 705000,
            actualAp: 14100,
            actualDps: 15107.21,
            magnification: "4700%",
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
      stageId: 9,
      stageName: "2021年デビュー",
      baseHp: 840000,
      width: 4000,
      enemyLimit: 25,
      requiredCost: 200,
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
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "500000",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 6600,
            actualDps: 5351.34,
            magnification: "300%",
            count: "5",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 6600,
            actualDps: 5351.34,
            magnification: "300%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 12000,
            actualDps: 2383.2,
            magnification: "24000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8B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",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 6000,
            actualDps: 1192.08,
            magnification: "2400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 120,
            actualAp: 15000,
            actualDps: 2980.14,
            magnification: "600%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAADAQIOBwgXCwwaDQwdDg4dDg4dDg4dDg4dDg4dDg4fEREvIyQ2Mzc8OkBAP0dHRk1MS1JQT1dVVFxbWV9cWV1hXmNjYmlsZGRlZm9uZmdqbHV0a2twcXp6cnB1dHWBcm53d36Fd3V9fH58fIOFenh/f4aEhIiNgoCLhIaIiI2Sh4aLi5CNjZKQkJWTk5iXl5ydnaCioqWnp6qsrK+ztLa8vL7ExMbLy8zS0tPZ2drf39/m5ufv7/APT0CGAAAAQHRSTlN3ncTi9UYkAGZ+lLfi/////////////wD//wD///////8AAP8AAP//////AP//////////////////////////g6wJ+QAAB4xJREFUWIWFmIlC4swShZk7wyrZFxNDCBohCYQAYVXUef+3+s+pDsJ4ZykGB5D6+tTSlY6t7u+t0+4P7obK7ga9zh++1u22Hi/2cP/w+Dh9nE6nj53enaYbluN6nheOAs82dG3Q7t7DHv4KUIT2QDOcIIriOEn5TNMkGUe2rvU7/wLAf9q+092EXrO8KPJ8Nksbi30TiH8BOgPdT1O4rtbr1WpVFYAUDSgZBUD8HdDX3DTPy3Vdr+ttvSakqkoaILNkHPrGXfvPgM7AiPOyWm9hO1i9WYsQagEiT5M4CrwvIm4Abc1K8mqz3W33h+PxuN/vtnW9gSklZTEjIQr0we8BPc2d5Pm63u0Ox5fXl9PxsANB3CUflDBJ4lEUGlrnN4Ce5qVFUcH/eHo9n88vFLETwEqsKnNIGMdx5BuDzv8BelowycvNbrvD8m/v72/n08vpsNtuN42/ioGEKA7MaxStqVhHC9IZ1kfwp/MbAW8SxR4EOvOBGNgUcRj40PAJWMCmXc3NWXzIf3k5v79/gPD6AgIzCQ1VVbGeqh1Cz3NdvX8LWAxMuJfV9sD1P2Dvb6KBadiymqVqhjzPocD3HMfR2hfAdLFo63lZVmW9Px5fz+8fPyng4+PtLKXYgsA2KKSbAAh813FsU7vmoKsFBTRudvvD6fXt4+fPd5Fwfn09HVUzrIVAy2cRFdiO07QDq9A3imq1RgcdTpIAMD6QxzNCYBZZSqbwQggIsB1XdQMA3WFaoV9rNCAATME7nxRwUOuvVRLEv8gZgw1TlQCgb0I//CUChED/n+9nEbCr100TNDsKlZQsAuCIhBYygAZYbbCB9sfTiUlkGd/ofzxgS4pvVV73ZIwsUIIjElrTtlEVFTYwUoAuQgxn9uHr+cRe3taMvvxkEBCFaCXHtmxbE8DAKwlgBAf0AfYRNsIr+vCgOvmSvpKkIqd/CAkWY2gzB8MUM6Cu693hAMSRKtCDJ/FnAT8rKP+nsQBCARh3AHR0jiCkYL8/7Pk8COWALqb/uskg81eUKgMCYB3YTK2Bi+m5qmUEwbYo/I4cDoO6boZBJW2ML8pIkRDQS7aBGFrDGNuwXKshhlJwCNWcafSXcSIymD4Y5jwAgepm2zJ63ZaWJumspIIt214WFYRMs81lpFWFbGYlIAg87CfLstDOLT3BtaOJgQBpnPVl8SuAezmVFGJ9n61kmaZ+120ZSRTJLBWrVdawMxRoozqZCghIkqjx91woMI0hAHEYxml5AdCxkublECFAErlS4yhJYgXwAbBB0LotMwqCCDHgq5e0K/8SBAGozSTjjDlAG3p4qCwSAGCIGPDdTb35nOLVRUEjqlD+CWugImAdBeC5XhAX5Uq5StUkafQXAPOqBOBaHXMr0Z+7ycFuaBmO7foxeqksZXZeCl9JDlUIK7kq0RkX/QZgwd91CMArL0Ir5JzL2HSrlSio5MVGylBJD8eqCUOVQc4kAegmCGEyo8YZtgU3biXtXzUi4M+rIpdXRcS5RWaa61lDAkzLcqM45aFCThXUIXJwpSurDXtI6Q/DJoEUwAOQa6KRNMMwTduPkJ8EJ5MZVOS59L1YsVrlTF4SsQMQvuuKPxIAw0xqDU2a5fohDkU8ETX1EsM7qInxK6j3sQVcKb/SDyncTAMIMA0mwpVzlRgDjgWY5HmCtPFy5qnqi9EfwejYzh0Nu4JhWLbHNKlsM16+IzBSvnCGoX9hKBwAOK1goNwP2dMCcDxEGUNwFPiBH/ohznohR7DErda2FAAf+EFoc6TdDwzuTMNkXC6wUAsXz0W+2POiGymzOYa5hWEMARkZ6Ryq923dU7/lOhR2yZMA+SFeQyT+mQyWReNKYTAacqw/dLUmPlGKZWWbWRYvoPyUziYdG2PbeG4QhmOjL4CHvhGo8no3kZrMlK1yJrKVt27wCE3549FYXdoeHh6GHvrLv4yJa66ajBFhfWqAfvEfTxw5pBDQ0318RvskiL8tP5hipYPuBloO7pNJljWXdwC6mg0mTBEc+7o0SuPciEKuXX8E/yybm+qURADOqCOKIoJhuAphyvqqDMSwUJ4sn2XZcqTdHLKmA2MyGdPUfmsQ0t+ezGB0hkzCIKT/PFsu9fYNYIFjXpFNxnhAhbpugGFaDl3Y1CNOklE4UtHP1/X1mPc8fV48Lzp3o7LI0kk6mTAWCoFqrB6O4nHM6MYSI5bPy+V6dXPQfFbW1gJEls2y2SRNx+NYGNga0Yj+k4TyuHq5LJfLpX1z1H3+JPgT8jPOExyJWRWopheQcJ2lRbmsVnPYjf8VAIKL72ZkyHkCwwQTBTMqy1OZbwUWp/v8csb8Anhqa6YiZFkxx4linucURNd5iUdj2ZcbjivgqTvQR9nF5lku4cwLPhC3rL5cBvqXW54bwNNTT7PFGesoCpznF2faxBh8vel6/oWA2z6P/ssG0fg1gImt9brdPwHo//T8DISbLW9XFT34MbZww7b4J2Cx6PQ1IxAG3JZNSkaO/qPXZdP+DdBuffv2P9j37z803fJGmQQy4s33jx/fv/NX3761fk1C6/ZNp926ImiaGF99urfav/4p4D9cNuJx3ahWdgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 120,
            actualAp: 15000,
            actualDps: 2980.14,
            magnification: "600%",
            count: "4",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8B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",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 6000,
            actualDps: 1192.08,
            magnification: "2400%",
            count: "4",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 12000,
            actualDps: 2383.2,
            magnification: "24000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.7-5.3s",
            delayFrames: "80-160f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 85000,
            actualAp: 6868,
            actualDps: 12877.5,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "15.0-20.0s",
            delayFrames: "450-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 6600,
            actualDps: 5351.34,
            magnification: "300%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-15.0s",
            delayFrames: "300-450f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGBwkJDhENFRoRHCMWIy0aKzYhN0YlP1AqRlgvT2Q0V245YHtAa4lEcpNHeJpKfqFOhKlTi7FXk71dnspeoMxgpNJjqNdmrd5oseJqtOduu/Bxv/VzxPp3yf9+1v+D3/+I5/////+XYJ/1AAAAQHRSTlMAChEXHiczRlF2kaayvcfb5Or3/z5faG9/iJzO1PD///////////////////////////////////////////8A1ty23wAABkhJREFUWIWlVodywkgMBQIEEoqxgCSUXTeMG+CGO9z//9VpbWPAQObmoslkmJX3rfRUG//8URqv5GvYfKn7T/IBXOtPAHOAcfsvAFMA4P6C0AaG8PYHhAlDmCAPrcnP/wIYQ24DxgLg85fvFrMXiiUUCK3GCGD4GgBg8TxcgwIAxo0+/h+9zIoPdLT3QlHIMP81fpUVb0z7+QT/C+7lZURysibvD+e9GgBMXmTFd6H+qJ936wDAdZ4CtPhCPZo+8a2G8NyG4UU/vz/nHhHGb41m+4GLfqW/z5fhIwCslxPgV7WXLj6wF7o355/loaht6jjde4Tbp/o1AKJoliWTGkCNzf6t7rNImO7PiBlGhJ0u07oByxoJd3wTDlOidzEfqEKA3BhAgRI+D0Zr2pv1evfeolqQCFms7hABJHqBIIIswUfzfb4YrfODospml48F1TTFusHyLlWKX+JGswxN4Pgb7Z0PirlTaZ0wM4piNb++NS1dqREyufGBajtdIpXdpU1O7Dmxhr82prXN1beUXKLGfBANfJ6dSZqxhfIh0Ysc10UAqu+2UolJoTJjVMahg8emKbOjzS6I41QrP1Azx3PcSAet0MJGP3jBRQtQdcslMZA9AnSXRHjDT0raQA9d14kMKJJh48Rx4B8LUoWjUVmA3WMroG+yjx677IrNaFBUIJ7veKmRg9F9Enqo9UKHadWzee2V7SJgUciuo/iBhDFPQgDbDxKdMlrFEh3xky0zJzOuAHkgpfBy33UjjJyS7YA6ib/JzZeP0UXrRFbOj1650Mpz75A4FUCsA2j4hJQ5YhE2+0abAxinLSxKgPz+JnavwkJvnjQQrUvIDuFVG+0wwtGRwvS2FsykesF1YvTykKk3KWPFldpJkFX7pAJ3W850E13v+4iOOQDrcQUghf4FwQ9F2J4PlyZYtV8rLb3E5EUK3Ewh6+XVBC3FiKLSdVLUpi69xKAqXoxz8YiTOIBPGMDPJ6WK/W3DyHVcz09tAqaNDbAYR+83fmpx7B2DKPEkoOgAfJUzmkqSiokme1EcHp29CDKGYdWqdURuMCHK3rMPFsv1o09g0PiiIOrWQd/GRwLYBlRDkSglrCCrFl5O4WGv3RuzhMurVfBSVmo4VrXwnOhEPpmwuvAhsqr+vnbEwXj089586zMuCDoryFsrjQUYdnAxMNPEEIqk4Vkt6rp22MuEqzV2XMpQLWs7N/BsL8kyWyKj7giEfVZ0Iz9GZGmHiq11Viv3K5nh6xsrPqXRQbPDvYWXRu0lSG7mSsB/woYV8DY8HxSW8CKpzfK3D4L9JD255gY7In4AjKIBpk6GAVt3e6Dmic2Sg4pY6ev7+x3G7jE7Wuwijw0A6Z/iekDs7CDApMMWAAz8yceWNoHNycDo3MkA22GSOqhef78jgEfWeXppGUJN3lipEMzrQCT8bARmtq3vEiM4nBMNI9NvNZoEXJ/wTdZhWLWwPZHtrHKSSgjWJMRJFdq/BxgSRceOOWSlOcNPD2w57ABxMFun+QPI3HnLRuocxPAo1Gdrnsv8T+mOjk2A+TiGMtu6IIigmnnpfecUjOs50P0c9ou1Aw3fZ5vcx86I54cs3EvQXWSRX5T4KlbIS/kAMYjkstu/tUr79pktA9/IO6cdCb8A4K6yS7CZcTdnHCiJHWEifjEPhDCQYf1yh2cfhIyl63reZdGQN6w3NBtrMJIoEB4WjMoA/CBTdaSJVDyPsP3vgcYhhe8eCJG9yw6EvljQkYHUBwgSuco1HJp2hjHWTgcWFQ1D5LDCfL56c1i1GutlFvBluf3gdNmzMDsMhrqJBFIcStU8uJM+hSDAZ+gR3SxMQNp3GLfBgCiZjU0R7cB5izORPNt6J2hh/pp+xrmRG/kFQoxo3SaAF1GwTmwmEh/teMLjHCnCHOjPiBjGUtHyV6DjABwzLg0HaOgQmI5APeHsfuRxjS8bLF84tMTIc6FNwItFhvUOsoF0sOMeyyykqt6UpkSMcJIsWDZI6ZEwL+cgRQFli22TtQTm/JK1cTl7yMdWZwbSESvm62eBk9I+yjBcLJZoLXahBQorSS1QyGo2w0m490RyBZjfjK+LVIul/Ki7yrKYje3pbP69WAzGkwk3Xq1/u4FNa4XCccvh4ns+m+LO+y/b6DKvTymJYAAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 7500,
            actualDps: 4326.93,
            magnification: "300%",
            count: "16",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "560",
          enemyName: "デビルサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQECAgICAgIDBAQEBAQEBAQEBQUECAoHCAkKDhIQFyIPGiQSGyMTHyoXIzAYJTAZJzMZKzkhK1kaNkscKHkkOkwkO00hPlMmPlIsO2ArOW4sQ1UnO4csTmkzS2gxTncxT5I9WnMzW6Y9YIs+X5ZTVK01aK9MbYlXX7aFayM6dLJReqA+gsBbecVYhqxEkcZblL5yd+52lKhUodBwh+pjo81dstuAkf+5qTCurKuBwt/LxsLt7Ov+/v7///+XVdrGAAAAQHRSTlMAEMLaqSlPb/w6iUb+YOa9f57/AP7+qsn+5XE8//z/yuX+////5QT+/kX/+///q/7+/wD//1L//x7///////8AImiyyAAABdlJREFUWIXNl3t7ojoQh6UV5RIvpKixGyK5WNICAmsadnvxfP9vdQbtnna76rHnrzM+PgoyL5OZ30yw99feekfM94+dfbc3z9OAUfCRNvg6YLr4cBCMvg6I0g8Hk/8AWKyd94PV9MsAJ/0IWM+/DPCLA8A9ANIvAwKz3n+6+2KsC/ergEW7OnyZdtGvmuHFAMftQve1fcubkwJhbhaXAwbRfOREpvmlnYBNe6Om+CzMM0twIrHU5q0IjjNENHSr9nMdzuZggG2TgnZcF2hLhJbuqj2k0XEvArjKVghPQgcU6BKGUDRtTNT94g8vATgT2wiMEI76sP4hioFQWN3dfBRdAnALWyAPDE08MneuPYTGqbWdbzT/d8AgWFir+x1g/NhBrveswhQQ/vICQC+orBWTLoTxPcYI4w5wraxl/X58HuC4fjgaQQCWgA+mYq0kvARF81tibUO8+HQO3NF8ldIYYwwBWOrFQvFEJrzkWSb5ZkmMscrD0xMAdxitlhh5EDI1xjSVkMlsNjNl/lzLLCslL5rGNAiNTgAOrTtmMfKUaRprpSzz2axsy7LOpGnzUja2sRSH53LgTiZXVx4xcCuZGdPyGc+kzHOZ16UBgjEMnVUihOGMxkjbRtbGlLB6CKW1RVEArzVZZdHYOQfohfMU1sAMTwAgwb3QjdVCMF3Jos2zAvd7g8MinCMAf6IpVB8pXpbgXxSk0VhVetsoKqpMlkaK2+FyH8PAPwIAFfSvPI+pWda2vLJNVTWFVUTTyuq4yMs6Xa/Q/JCtYxGABsdBuFJQPymLl2cgNEZjQmJmNWZVV1hOwl7Q86HXjwDcCULedSpms2TGq0Y0WVVQFDPGtNYUUzXLa76+CcgVXh1L4gi6FnlIJFlrkoYhUT03lDASx3HxpBuKGa/bbDNFGInwCGBE4RdoAAUVKPnLVj+3Fd47P21pXOmK6UIauYarSHSkjFOGMITgETGTOa+erTUwFOLt6+7l6eV1G9Om0RVvjQKx7wvxCTBVCDEUXCHGclgBALQmlD3tdk8PDw9Puy0WwhOyLCXxiP+nkEI1GcZL18cepAA0XDFKYRKA/+7h58+fD7udQEQjBX1F8OhPJboL2AQCx4EBLBKIkxu13RKEXt4BOlYMqyzLxe0RKQ8OCo9iD62TrK6lLRpbFUgA4AWW8LJ7pZrGSIEYN3eOc6IXQnZ1fbtJyzLnbdEZQ/p1t3t9ed29alRBllTd5uly4h4HOMHAByEznhnebLdCC6gi2XbuTyKOKfGwhLGgIudEN0JkMEkpy9rnrNBUaE41AyGAlOFddVqUdZ0/3pxuZx+UFKsEJohsM9DvVmMcEwaxdIr2PJW1cnM/DU4CItiNkE6ypOSNFowSTJQSGJpBEZgThJctZ5j0XdcfHm3nJYq9ueJ5xjNeCZgjMSNYKU44ZxQC4HUNPA9RAWU/AhgRRPohU52UEq0ZYfCGILhUTNHOP+cKOiGd+8eXsMCYuqOY8bTu1KwpoZpglsMSIAA4XdacLaPRySqw62ACYkKbNIeGTEAHMEyYEAR70ME8SZL15v7MUA2XLjzUzccB3c+0OskqCjndCticKdQmm802P77fnAZM97vWPAwRpMGU0FKJUkWhWQp55LkxidK37w+ffwKCw7jthbgjzEpT5zOIm/M1l7J+zvLN47fBOcCvPSeEkZFuEsnzWgKkhppIDkNm/XjX+2DHhHQwF3boyWMBN8/L1uRtVhuecw4lDZyLAKAnNrlbs03OkyxLMi7X61wxmJe/Pe6eBvQWKF72Ruz+UYGtN5uievxxHy1JPPYvA8xxH4JdfPt+i2ESbn48zr99/95zwukijQbnN9eDTWl31cC9u4ERhRfh3Y3TO+TP8f1LAH766ypnQT0YEyCeu95nOwNwFv/cxlmxwzP3lwC94Yd0z1f/AeB+rNc06B21c4DfbfDHv50vAk7Y/xbgDIZBv9+/Art+t+4QzgbDs+18AID/m6/3bm8UIHwG/A1Jwn8wrM9p8gAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 1666666,
            ap: 6666,
            dps: 33330.0,
            speed: 3,
            range: 200,
            rangeType: "範囲",
            kbLevel: 4,
            money: 6666,
            freq: 6,
            foreswing: 1,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 1666666,
            actualAp: 6666,
            actualDps: 33330.0,
            magnification: "100%",
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
      stageId: 10,
      stageName: "2022年デビュー",
      baseHp: 960000,
      width: 4800,
      enemyLimit: 16,
      requiredCost: 200,
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
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "57",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "1",
          amount: "0",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 400,
            actualDps: 255.32,
            magnification: "400%",
            count: "8",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 16500,
            actualDps: 10531.91,
            magnification: "100%",
            count: "8",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 400,
            actualDps: 255.32,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAQEBAQADAAACAgICAgIJCAgSEhIdHBwkJCQtLCw5OTlCQUFMTEtXVlZkZGRwcHB6enqAgICFhYWLi4uQkJCWlpabm5ugoKCrq6uxsbG3t7e/v7/GxsbLy8vNzc3Ozs7Q0NDS0tLV1dXY2Nja2trc3Nzh4eHm5ubr6+vv7+/19fX4+Pj8/Pz///////9X7B7fAAAAQHRSTlMAECk1TFh2j5yqu8nbBhxAZvT/ANPq///////+/////////////////////////////////////////////wD/r8zJTgAABtBJREFUWIWVl4mWojoQhl1a3BciuyDgviCQsItM3v+tbgXU1lZ77pTn2IZOvlQqlb9C7U/tr8Zxj62vxmPrT+3vgAkSHlotNPlHQJO3+NH3/JL65M/fAfXBgqqtW6shrpbtfwO0lZzqtzHD3oxue/8EaKAdpdZtDCc7dC8M/wXQVS+0WIn1sjESFzl1ro2PgPrjBA20pTQ/Sl8VTQ/PFIujhw5vAF+9hw4d+QyAYFYGYYx2MaUx/5gIbwATWWhWv8b1Oj+nlJ4jswxCzwgTSjO50aj/BuBma7H0eCgKHXRggGDD1t2UDkEG/ijt6v8fAWq0kliyDGcrJOcFAIgjg1NdI8KXgl4UecYNfwFMZCfZyN1RvSOme5syD7wQMqHOb4MQWoV2MPn2L4AxWkfRXhm0xNmO0goQ271aS/GClDUP1NK4XwB10Yz90DEQb1bjaRGEa77Z04/7U5wk6TnLZs1fAENBC7CPw42CjjD6knkrXZXQt0mSxDenV3uXiV1pzwiRs7DTNHL2m9VqvdluwNbr1Wq1XCwslec+AobNLrJi4vuAwK7r+SQInyyKotido8lbQL3dG4CTKsH+e/M87Hm+H4SGWH8LEOe79XppbIMP4+PETSJwLzxI3NsltFQ3CWN39cEDLy6yIgYX/MjovY9BTw8wJszNH4ZZWHw3pZkLf0k0778HNJEdQ+/X8adjiH0vKeDj+QGJPwFgE3fR6/x+uJasIPDCwCXEi7eaYz4Bxt376RiJypG8AvBpjnQnhG31vHiNNPIEGPFiCSgfcWgZvSwB+wR8kLcsw4IV0k/JE6CrVzpXPuqo7msIAti7+KivQrYae46T1BRqd0BD3kiNG2AkWnE16QMm2C+PxCMhKaMTxI61MQXofD1MnO5WqskAE7QvswhH92QiwU6SFOceGUxmSFKFIYyvAP1lrHA3QEcrNxGf7EN4Q8Qm5Pc2vLlEHHY4vwEj/pTMejdAz4jKWTwFGc41muEWobsHHnigI9UQprXGsAQ05SSxSq1mgL5ZAiBXJVW2/MqJYGdVe4thuOsRd3eyBuMeDGKAlprHh7Jos7AIZhXDyJbw0Zjt8H0XYHKXpJdLloRhkllIseVRCeC0S0i0fgUYlgAPZnEki1KydYhbJabn+vGFKVy+NbSZZUiLnTi8Aoo4tNFXSSgBXpoFXqTLTEOLPGUIz8VJFh1Wlj5TkKwqpbjxkxIwUYvUPym9KwDSwLsUGEdbZF1F9Uz8KLvQaGNblqWj+XK5tGR1D6o5rgCXHISbReHmQR65BDuKFFeEQ3ahdwuRYswNDS0pdaVuGUQooARjjW1E5QFJ/MAEJZaX5RDHoI+2n0EaqDaULKr1GWAMEyVutEb9YQmIXNisYItskrHCRun8GUBp4gQ5W9oVMOL39IL9cI66DGCmaeDBmZ2r+bW//hNws7NcLqE2gGDFsGgdtWtTwYQIepgErjy/9jPl5D1ggzgA1IcdDWou8QJ3htoAyGPPOxdpuEOrqh+RZKssLrvdfn84HG+2ksQRADrCAJ1YBQWCjroDK/E9XGSgwCbaV4Sjgt6aOGZ58KVsl6eyBoPcwbGzIjj5qU8OmorgUlYt9nSUdVna7ldI3W41ZG4tJE6+RtVp7FRrLfLQ9aO1ZMZl+cGBIZ9weltuLu12aE23zNkTZJiJqlsKA9T76i6vMi4JA8WMgwCU0ydEN7/jFUCpnktEK5PTkHdIYHp0FZR6V1Kt62UiV8wozzwSYI/4+uIOOMHUl5kyu1RRRRDu6V2R2NWO1689FTPJsJfnmPlgHm4AB2FIIO0ak7ks/azOAxNn5yyArbFTSIO8LICErMkjoKgyE4J6/AkYdgReliV+0ONtKH4kwVf5POW0qJbgPqZQwopzrfZ0xRk1ms3RcCosCpcJ312SzyUhRvskCuCuEcVxcj6nSrdW+wEoDSRtQUP3oaR47pltkP2cQhLi+5OPgEvkuZXBocIR2+JkZi0WoCNLe7FcgKyYpiGj1itgWgIgWFnKLDuf8wv9YLHSfwGUsj7/NOKnzVlBfQJUxVk6/b/xF5W9urwChn3tFATkbpgZXMviMAALoyTNsiyNvYNRnoaXGEB5HjwG+/GCWt1SwWT2c/B2F2plfbbZkYVvuTe+W4uHg7yR4bEN2se1msO3ecAQI94uThIn2A4a367E09q0hTaXJZqIFrXEX99YatPOrNCFKSdrvenj464WKm14fFK46UfAcNT8anVkA/XaPVhmt/dt3b6kSN12G8mIG9/fmp4Bk774XvxejR906q+A0bg14dodmLffF4TBQHyywWAg9PvgSqfd5lpfjTKKf/4DH5XKa5488bUAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 16500,
            actualDps: 10531.91,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "604",
          enemyName: "超鳥獣アヒルジョー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 1200000,
            ap: 19500,
            dps: 8863.64,
            speed: 15,
            range: 250,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 19500,
            actualDps: 8863.64,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "600",
          enemyName: "トロリンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQMCAgMCAgMDAgQDAgQFAwcFBAcHBQkIBAoJBgwVDBsWDB0YDiEjFC8lFTMmFzMmFzMpGTcvGkA/I1M9JVNGKV9JLGNSMG5cNn1tPZF4RKCARqqESbCHSrSJTbeNUL6RU8OWVsqaWtGgXtemYuGrZumwavG2bvm5cf66cv68dP/Adv7EeP8iGKcaAAAAQHRSTlMACg8YICsyOEJOWWZseIGMlfD23Z//w+qo5L2x0/T+3fn/ze/i///i//P/////////////////////////////i0f0MgAAA9hJREFUWIXtVmtX4jAQLaIiKAiKgMCCyBZrSvPoO2ke//9f7aRFkZUF9Nue4/0gHMy9ydyZzMRxfvCDH/zgB/8LJvMW/L0ajy++x7/0BOo49V8pm9a+JXDlGxN0mm6eut2rq/rZl1UavpGavXoI+T5Cry+/B7et+hf49ZFnikK/wWiRUbQcd5pnp/FrAz+URQlZfUqljUgDb969PEWg7xtd8rQupN5IwTdjOF0Nro8ZUmu5qiKpwF0sPC6Kdygj82De2XuM2vnVzW13NH5+8TNVLdfUnS18XuxAmdx/GjR3yWeNzmT+tEL+GuPUGPW2WCsBe+4KFDKhOHBHWz9rzcnvdRJjyihjlIQ7BPk3vSgEI4SFi/bb5u25nxdGZ6QCztQnyi6fwyqGVqOK35oHEtIsBS3ZmKXiML+QglEaeLgSuEXc5FEq4VcM/CgXR/YHqBTjdZBMLL+NjM4xDu3BIkojrj6HvOcMeZzk6hn4F080sXqJqtza49j+MwD0CwhM1pSInMSiJJ5Kr2AFGm5oTefFl5gbmFdwcM0Ijk8Ke69AbQ6pswZ+T+DFaaxCEEiO520v9LNzgyCCSHyKQChpbT4cmpDPTp9QqLvPy1QWJWkcpUIdKEqVdZ1nwcWebVQOFQ2xEZodUDBBy1lKoMMJ/tJQMT7hXhnv0llaqsxY+lEBQo/eBf6dIZ0PHGdqL46KMNv6IGSabk9ACP+HkcJ411BHxBRKUEy3kaoMM5mRrcB+E4TBY7gJN9AueUjJhxOoHEeKkyMhSMOGdmQ2FwwKAUqh/LHyS+YcWhbd8N/aqVCb/5auGelPy5F79hhQW8ypvcx8UxFgIsRBrA1QCFWWhco4rBFacjsp/GV301DbbtmGcutlElQ5E3HEZYihEjKl8rR0UbP7JcjrZDldsHTVOX9vx1MU4irbKoEPKaU1gHIeJ1leCMGCMjz1VO/GMKqeGk5zcH/7YRw0hqAAF7oUiJSIchDAJIKLUAjrKLEZUpDzFox71i933RkojUd7oTIN5UtIaJsDpNWaLzkHPVxmSMddp/64Xs/3zffz+4ASN842voMAD1kOXZ6RiBHGUKTLsnfOb9r73wddxNhi4QcMhhK2CbEpsZ2bYEZhBiKjDDr0Tmq5LPQmj7OVB3ORZpv2rDLKAuTOBs4k5GxygO9czEjoNUcIzebTO9fX0K/Bb71euTPX9/tOvT/uH3zbnA1x7HbGfuINYLQ/rnmO4Hlklv2+G8erziEqvIQur29Hw4U36909uA9bxIY83PVmaPUw6Lab50cEBvfDXg8UPmC2eACBXm84nRwS+APRJZVyP9ZC2gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 390000,
            ap: 38000,
            dps: 34545.45,
            speed: 15,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 550,
            freq: 33,
            foreswing: 14,
            backswing: 17,
            tba: 10
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 38000,
            actualDps: 34545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "606",
          enemyName: "超甲獣シザーレックス",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 1400000,
            ap: 37000,
            dps: 5362.32,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 207,
            foreswing: 17,
            backswing: 28,
            tba: 83
          },
          stageStats: {
            actualHp: 1400000,
            actualAp: 37000,
            actualDps: 5362.32,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1322Data;

