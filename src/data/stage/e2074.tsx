// Stage 2074 Data
import type { StageData } from '../../app/stage/types';

export const e2074Data: StageData = {
  eventId: 2074,
  eventName: "地下鉄に乗るっ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 74,
  stages: [
    {
      stageId: 0,
      stageName: "四条",
      baseHp: 4000,
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
          probability: "10",
          amount: "10000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "50000",
          amount: "2",
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
          enemyId: "402",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 16000,
            ap: 1650,
            dps: 426.72,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 116,
            foreswing: 56,
            backswing: 60,
            tba: 0
          },
          stageStats: {
            actualHp: 320,
            actualAp: 33,
            actualDps: 8.53,
            magnification: "2%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "京都",
      baseHp: 20000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
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
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "75000",
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
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 1000,
            actualAp: 80,
            actualDps: 150.0,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "402",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 16000,
            ap: 1650,
            dps: 426.72,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 116,
            foreswing: 56,
            backswing: 60,
            tba: 0
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 825,
            actualDps: 213.36,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "403",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 6000,
            dps: 1621.62,
            speed: 26,
            range: 260,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 55,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 600,
            actualDps: 162.16,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
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
            actualHp: 1000,
            actualAp: 80,
            actualDps: 150.0,
            magnification: "100%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 7,
            actualAp: 3,
            actualDps: 5.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "十条",
      baseHp: 60000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "50000",
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
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "100000",
          amount: "4",
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
          enemyId: "404",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 4000,
            dps: 714.29,
            speed: 6,
            range: 480,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 168,
            foreswing: 39,
            backswing: 67,
            tba: 65
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1200,
            actualDps: 214.29,
            magnification: "30%",
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
            actualHp: 200,
            actualAp: 75,
            actualDps: 140.62,
            magnification: "250%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 10000,
            actualAp: 625,
            actualDps: 520.83,
            magnification: "250%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "403",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 6000,
            dps: 1621.62,
            speed: 26,
            range: 260,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 55,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2400,
            actualDps: 648.65,
            magnification: "40%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "くいな橋",
      baseHp: 100000,
      width: 3600,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "100000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "150000",
          amount: "4",
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
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "402",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 16000,
            ap: 1650,
            dps: 426.72,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 116,
            foreswing: 56,
            backswing: 60,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 4950,
            actualDps: 1280.16,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "404",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 4000,
            dps: 714.29,
            speed: 6,
            range: 480,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 168,
            foreswing: 39,
            backswing: 67,
            tba: 65
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2800,
            actualDps: 500.0,
            magnification: "70%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
            actualHp: 50,
            actualAp: 5,
            actualDps: 3.66,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "竹田",
      baseHp: 250000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "150000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "250000",
          amount: "1",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "200%",
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
            actualHp: 15000,
            actualAp: 6000,
            actualDps: 4390.23,
            magnification: "300%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "402",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 16000,
            ap: 1650,
            dps: 426.72,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 116,
            foreswing: 56,
            backswing: 60,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 8250,
            actualDps: 2133.6,
            magnification: "500%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "403",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 6000,
            dps: 1621.62,
            speed: 26,
            range: 260,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 55,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9000,
            actualDps: 2432.43,
            magnification: "150%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "404",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 4000,
            dps: 714.29,
            speed: 6,
            range: 480,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 168,
            foreswing: 39,
            backswing: 67,
            tba: 65
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 4000,
            actualDps: 714.29,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2074Data;

