// Stage 1051 Data
import type { StageData } from '../../app/stage/types';

export const e1051Data: StageData = {
  eventId: 1051,
  eventName: "開眼のパンツ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 51,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "パンツ進化への道 激ムズ",
      baseHp: 500000,
      width: 4400,
      enemyLimit: 12,
      requiredCost: 150,
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
          treasureId: "10016",
          treasureName: "ネコぺろきゃんへの進化権(ネコパンツの第3形態)",
          probability: "5",
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
            actualHp: 720,
            actualAp: 64,
            actualDps: 40.88,
            magnification: "800%",
            count: "0",
            spawnTime: "3.0s",
            spawnTimeFrames: "90f",
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
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 358.24,
            magnification: "800%",
            count: "0",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            count: "4",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "80.0-100.0s",
            delayFrames: "2,400-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 1800,
            actualDps: 2000.0,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "46.7-60.0s",
            delayFrames: "1,400-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 777,
            actualDps: 932.4,
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
        }]
    },
    {
      stageId: 1,
      stageName: "パンツ進化への道  超激ムズ",
      baseHp: 750000,
      width: 4800,
      enemyLimit: 12,
      requiredCost: 150,
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
          treasureId: "10016",
          treasureName: "ネコぺろきゃんへの進化権(ネコパンツの第3形態)",
          probability: "100",
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
            actualHp: 1080,
            actualAp: 96,
            actualDps: 61.32,
            magnification: "1200%",
            count: "0",
            spawnTime: "3.0s",
            spawnTimeFrames: "90f",
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
            actualHp: 2400,
            actualAp: 240,
            actualDps: 240.0,
            magnification: "1200%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
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
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 1165,
            actualDps: 1398.6,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1051Data;

