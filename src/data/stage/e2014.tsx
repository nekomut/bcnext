// Stage 2014 Data
import type { StageData } from '../../app/stage/types';

export const e2014Data: StageData = {
  eventId: 2014,
  eventName: "消滅都市 ～第２章～(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 14,
  stages: [
    {
      stageId: 0,
      stageName: "GOOD CATS，BAD CATS",
      baseHp: 120000,
      width: 4800,
      enemyLimit: 12,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1119",
          treasureName: "タクヤとユキ(179)",
          probability: "4",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "250000",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 134.34,
            magnification: "300%",
            count: "2",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
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
            actualHp: 3000,
            actualAp: 240,
            actualDps: 450.0,
            magnification: "300%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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
            actualHp: 270,
            actualAp: 24,
            actualDps: 15.33,
            magnification: "300%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            actualHp: 600,
            actualAp: 60,
            actualDps: 60.0,
            magnification: "300%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 12000,
            actualAp: 750,
            actualDps: 624.99,
            magnification: "300%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
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
            actualHp: 3900,
            actualAp: 240,
            actualDps: 300.0,
            magnification: "300%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
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
            actualHp: 3000,
            actualAp: 240,
            actualDps: 450.0,
            magnification: "300%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
          }
        },
        {
          enemyId: "159",
          enemyName: "ユキ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgMDAwQDAwQHBgUJCAgNDQ8REBAQExkVEhETFRcXGh4+EwYmIB8jIiMgJSgmLztcIRFLKSI8MSZpIBMsN0MxOUk2QEQ+Pz85QUsyQ11fOCBGTlRHTlNPTk09UW2QNxq8MhBLXGdSXmFtV0ZHYH2XTSixRB9laWzYQRRXcY9xd3xhfpx4enfdVySSfWZtjKuGjZCgjHiimY2CpMGjo5/BoX/GuKmswci6yc3jx6TJ0dTT19fg3tjn5uVQTY0TAAAAQHRSTlMABg8XpyAtSjyPYXODjMSds9jl/3v/9P7H6I//r6Ty/P/6/+P7///k/f///9z//v7/////7v////7/////////+KcgqwAAAmZJREFUWIXtl1tzmzAQhRGEu2PAxiaEcHMwQQXLBFzul///ryKctjPtTBtLffV55nysjnZ3gGG+ksR++ci/xCnrR+F/EMLmEL698NTv5x+T5PDt/EJZAzDfwvP5nBzeJE5UKSDATA4HXEASrtd7DdxuFKRPv2gftzusreUElkxQgfokAQYI2muaxoGz3TpBEMeeeDtASTP32X09nU5pHDs7K4hhGlur2wG88X3R+/snIAhQXkJDuh3APjinH4A0cCwI66aHCkGIjGQ4cXo6LRU4jnNE/TwVMoGfYcQrYYkQy8r7qc+IKsA3KRt7C3v3hi6v/WOdb0jbGfCiKq9UkWfN8rjbhgnBLf4uLuvzMDmEj7QzKV4aVIa7jcbR+cFzU1ZNuBGpCmABw2cNmsYmo1oJkq5IZl1V8zxnNAfg9Ki6oL4Yp2mmqkDZV2NVNcWICReCSfgpXo+6sezLdsSEziT2C2uvHdq8qYYBE4ZncoBdVAUqy7bD9mF0yUaBWZYCPOZlnXfjFZARhwBUzz/mqBrGaei6oVJJAQy78mBRddO8ADqKFDHBjlA3z1PXtd1AHsKy1zWvGOehxRoyqmHAQRRXf9sisp32i6D5EKGiQNDXqQCsW0Pb8317rdLtA+nSX5Sszqg/M8y6d/msp7mCq1i3v4hS1lM0wVVgFTUup0GkUZ6AWyOkczqMnmgBBoxUoEWeSpcBbiOoc0CDT5QrXbJhpCxzTQtQ/QgDOCN6Faj8QN7vI51ndT8y6TLgRdn2dU7QbdozLAONvw9Zie4InwjaJr7rrrvu+lNgEbUZ/3M8LJLVv+60D33ITQPXhnLtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 289.47,
            speed: 5,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 342,
            foreswing: 43,
            backswing: 58,
            tba: 150
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 3300,
            actualDps: 289.47,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "面倒なネコって思ったでしょ？",
      baseHp: 180000,
      width: 5200,
      enemyLimit: 10,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1119",
          treasureName: "タクヤとユキ(179)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "450000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "150000",
          amount: "4",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "50.0-50.0s",
            delayFrames: "1,500-1,500f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "14.0s",
            spawnTimeFrames: "420f",
            delay: "50.0-50.0s",
            delayFrames: "1,500-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1000,
            actualDps: 909.09,
            magnification: "100%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYGBgYGBgYICAgJCQkKCgoNDQ0PDw8YGBgaGhodHR0dHR0eHh4hISElJSUpKSksLCwvLy8wMDAzMzM1NTU7Ozs9PT1ERERFRUVJSUlOTk5PT09YWFhZWVlbW1toaGhwcHB3d3eCgoKFhYWRkZGWlpabm5unp6e0tLTFxcXU1NTd3d3n5+fy8vL6+vr////hNFWuAAAAQHRSTlMABgwS8qXX+yOXshkqwOcxO0VqjHZcT4Kp3nr3a4yX7P61wabU8f3dzP/0rv3o0v7q/vL///T+/f7/////////tVrXHAAABXJJREFUWIWdV4t2qjoQLXDaYwteRBQf+EQUsWB4SRIg8f//6k6wPedqkdo7y7VQZHbmsbMzPD09aJI2nM4sTZUedbj1N9bR6RQdN0Ptf7l3LAczzquSRGPt50FI1jo8VfwMxstw3PsxQs/JS177A0KRLJQf+sujhF2WB3dSUqfzQ4DOmHwsX1GMUOYa9W3p0UzUkVd8hI9RjIM0GYrbSn/0mL80dD8D4IwGGYprAKX/8vIgwCiq6vzFh6WBH3j9nmHNPfvtMQAZACpSY/BzGaxW/tZ1vfCU743HAJRxzvJdTAilhKZBhmlZFGVVRDP5QYC3vPBXq9UuyHyU5nFWiXaWyfRRNkh9L7bBH2KPiwIhCu6MRFP1QX9o43C8hAjswCdnRgvOSxy5/Z+wUeqMtnmKMiQqeWYkdAa9B/P/k0XEWJmmgtAMuwOtwV1qI6ayyPm5QFS0krjDJnd9Nh/c3+e6SwWNRQbUGzRFr68THG2MO4kpo4gBBzNBpHDeVH1pllS8yvdWUwyyPoAAzhUiUIBs3Kho2lqkx/LFV3S5N3KWonrUh2cKr3GNp6HYLvxMnKF+k4U03J/SQOxmssoYz7vNkgoA9U7rmq+DztUS+p4UCDzPPF/5pEKTYWME2joijOWOofSen/v632ckK6yICIDzNEAp9VfdpiZCF0fuKXEBXTGXy791UqzNgWYX/qCVH2RLG90RRNmam5YClAsJjcwPnkuzIykqABBqiFaxv1tO/EljCPCwLEPkmkM4p96HUqgboWUkIEwA+D5sx60duL1GgIsNo7pem0s71UVccuhugKsKBxgFCCEAaBEiaYqFfJZhXevObB/D4pxh8AxyuOx2O9ueWPcB5DmpxTd3dCjsIiqYqB/IR5riCvZxgCANe3AfQN3Qy/mRjA3jHVfnT7uca5ygnY8mLSmoNaWBk2XieqJ0N8ZKGu+eW7SoBuBivQrF1Rf/+mjB6zaAOgWGSVmitOJNCOfq2DJhXIpYBiiOUdHoDvBRCw+kqRCNAhUYtt4dgCr8hkigWjGjNgDwc1MS7dOB4UHpaMqIs8eUNJWRJWabomsOqCfJGJ5aCy9jXyPgdN+WgThIOc9zlliSdfxaRmhv1G89UqRRzFiMy2OvPgq+AFRZg2xeAQzDskKUrjXjWH5x50XaxuPadLcooYtzdXr6HGs+r+JUjL8d0NQFiGiZDJUF+fRiH/6sJPG28Vi6ymF2oqiIDHlRKwNMVbmoJYPhJI/juE1MPsyKQMKOOjSBFAXFMcphIClPWz/GtKqS2bezob4/HfC+8yQbi/d3Z5vSsqSn49xc1pMJ2Xw7l/SOWXDaiB2rqKq+8MLQW097su7GCAQC+vuNvzJNEDr+Ub2OYVmGGCe0YxFv84qdZq3usmG6qe/ekk3tqFaIvcE6KVtzkDoz117t7Bt/yRg778fdzlS0eYSX5vAuFeClJkhJvr0B6IxjqD85jKQndbr1Ubi4g6C8ohTDJJLvrxF6Hkx20IC1CiwBpS+jebOoqeOgFlKGr/nacephXQiJ/i4O6iJq3lHywE6FDMEYc/W/uhak5KeFLJv1mwvH6+YkOm9xBQjYMa7opmwovK1V2VyWx0IpOT3c2RFSfxljxpL+DV2tMEO7EKYHaRCSgrN42TymiCd3O5y7+g2u5aKg2xczYGfkRAVFaN4cgTzHSfdwGN38qzk5/hwAZX1x9A73aqCuyamb4I0mgyl/zPBIOFPhi7gtq5p1pMfmYU9ZJHgSFNHYNF9fn8HeusJeDqndFT9fX01z0B/2J2l+U+cPM95s37bTfPX72uy/N36B/fPLDpavTSes1jdhzcnyH2G//mO/Lxdx++Wl2317Nvt/X5//BUlcOtC5guMJAAAAAElFTkSuQmCC",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "159",
          enemyName: "ユキ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgMDAwQDAwQHBgUJCAgNDQ8REBAQExkVEhETFRcXGh4+EwYmIB8jIiMgJSgmLztcIRFLKSI8MSZpIBMsN0MxOUk2QEQ+Pz85QUsyQ11fOCBGTlRHTlNPTk09UW2QNxq8MhBLXGdSXmFtV0ZHYH2XTSixRB9laWzYQRRXcY9xd3xhfpx4enfdVySSfWZtjKuGjZCgjHiimY2CpMGjo5/BoX/GuKmswci6yc3jx6TJ0dTT19fg3tjn5uVQTY0TAAAAQHRSTlMABg8XpyAtSjyPYXODjMSds9jl/3v/9P7H6I//r6Ty/P/6/+P7///k/f///9z//v7/////7v////7/////////+KcgqwAAAmZJREFUWIXtl1tzmzAQhRGEu2PAxiaEcHMwQQXLBFzul///ryKctjPtTBtLffV55nysjnZ3gGG+ksR++ci/xCnrR+F/EMLmEL698NTv5x+T5PDt/EJZAzDfwvP5nBzeJE5UKSDATA4HXEASrtd7DdxuFKRPv2gftzusreUElkxQgfokAQYI2muaxoGz3TpBEMeeeDtASTP32X09nU5pHDs7K4hhGlur2wG88X3R+/snIAhQXkJDuh3APjinH4A0cCwI66aHCkGIjGQ4cXo6LRU4jnNE/TwVMoGfYcQrYYkQy8r7qc+IKsA3KRt7C3v3hi6v/WOdb0jbGfCiKq9UkWfN8rjbhgnBLf4uLuvzMDmEj7QzKV4aVIa7jcbR+cFzU1ZNuBGpCmABw2cNmsYmo1oJkq5IZl1V8zxnNAfg9Ki6oL4Yp2mmqkDZV2NVNcWICReCSfgpXo+6sezLdsSEziT2C2uvHdq8qYYBE4ZncoBdVAUqy7bD9mF0yUaBWZYCPOZlnXfjFZARhwBUzz/mqBrGaei6oVJJAQy78mBRddO8ADqKFDHBjlA3z1PXtd1AHsKy1zWvGOehxRoyqmHAQRRXf9sisp32i6D5EKGiQNDXqQCsW0Pb8317rdLtA+nSX5Sszqg/M8y6d/msp7mCq1i3v4hS1lM0wVVgFTUup0GkUZ6AWyOkczqMnmgBBoxUoEWeSpcBbiOoc0CDT5QrXbJhpCxzTQtQ/QgDOCN6Faj8QN7vI51ndT8y6TLgRdn2dU7QbdozLAONvw9Zie4InwjaJr7rrrvu+lNgEbUZ/3M8LJLVv+60D33ITQPXhnLtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 289.47,
            speed: 5,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 342,
            foreswing: 43,
            backswing: 58,
            tba: 150
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 4950,
            actualDps: 434.21,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "にゃんこ計画",
      baseHp: 250000,
      width: 5600,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1119",
          treasureName: "タクヤとユキ(179)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "159",
          enemyName: "ユキ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgMDAwQDAwQHBgUJCAgNDQ8REBAQExkVEhETFRcXGh4+EwYmIB8jIiMgJSgmLztcIRFLKSI8MSZpIBMsN0MxOUk2QEQ+Pz85QUsyQ11fOCBGTlRHTlNPTk09UW2QNxq8MhBLXGdSXmFtV0ZHYH2XTSixRB9laWzYQRRXcY9xd3xhfpx4enfdVySSfWZtjKuGjZCgjHiimY2CpMGjo5/BoX/GuKmswci6yc3jx6TJ0dTT19fg3tjn5uVQTY0TAAAAQHRSTlMABg8XpyAtSjyPYXODjMSds9jl/3v/9P7H6I//r6Ty/P/6/+P7///k/f///9z//v7/////7v////7/////////+KcgqwAAAmZJREFUWIXtl1tzmzAQhRGEu2PAxiaEcHMwQQXLBFzul///ryKctjPtTBtLffV55nysjnZ3gGG+ksR++ci/xCnrR+F/EMLmEL698NTv5x+T5PDt/EJZAzDfwvP5nBzeJE5UKSDATA4HXEASrtd7DdxuFKRPv2gftzusreUElkxQgfokAQYI2muaxoGz3TpBEMeeeDtASTP32X09nU5pHDs7K4hhGlur2wG88X3R+/snIAhQXkJDuh3APjinH4A0cCwI66aHCkGIjGQ4cXo6LRU4jnNE/TwVMoGfYcQrYYkQy8r7qc+IKsA3KRt7C3v3hi6v/WOdb0jbGfCiKq9UkWfN8rjbhgnBLf4uLuvzMDmEj7QzKV4aVIa7jcbR+cFzU1ZNuBGpCmABw2cNmsYmo1oJkq5IZl1V8zxnNAfg9Ki6oL4Yp2mmqkDZV2NVNcWICReCSfgpXo+6sezLdsSEziT2C2uvHdq8qYYBE4ZncoBdVAUqy7bD9mF0yUaBWZYCPOZlnXfjFZARhwBUzz/mqBrGaei6oVJJAQy78mBRddO8ADqKFDHBjlA3z1PXtd1AHsKy1zWvGOehxRoyqmHAQRRXf9sisp32i6D5EKGiQNDXqQCsW0Pb8317rdLtA+nSX5Sszqg/M8y6d/msp7mCq1i3v4hS1lM0wVVgFTUup0GkUZ6AWyOkczqMnmgBBoxUoEWeSpcBbiOoc0CDT5QrXbJhpCxzTQtQ/QgDOCN6Faj8QN7vI51ndT8y6TLgRdn2dU7QbdozLAONvw9Zie4InwjaJr7rrrvu+lNgEbUZ/3M8LJLVv+60D33ITQPXhnLtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 289.47,
            speed: 5,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 342,
            foreswing: 43,
            backswing: 58,
            tba: 150
          },
          stageStats: {
            actualHp: 187500,
            actualAp: 8250,
            actualDps: 723.67,
            magnification: "250%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2400,
            actualDps: 712.88,
            magnification: "200%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3600,
            actualDps: 1069.32,
            magnification: "300%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1425.76,
            magnification: "400%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "2",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7200,
            actualDps: 2138.64,
            magnification: "600%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 8400,
            actualDps: 2495.08,
            magnification: "700%",
            count: "1",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1425.76,
            magnification: "400%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1425.76,
            magnification: "400%",
            count: "0",
            spawnTime: "80.7s",
            spawnTimeFrames: "2,420f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4800,
            actualDps: 1425.76,
            magnification: "400%",
            count: "0",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "33.3-66.7s",
            delayFrames: "1,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2014Data;

