// Stage 14046 Data
import type { StageData } from '../../app/stage/types';

export const e14046Data: StageData = {
  eventId: 14046,
  eventName: "大狂乱のフィッシュ降臨",
  typeId: 14,
  typeName: "ネコビタン",
  prefix: "B",
  mapId: 46,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "鬼ヶ島ＤＸ 極ムズ",
      baseHp: 999999,
      width: 4400,
      enemyLimit: 20,
      requiredCost: 4,
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
          treasureId: "10098",
          treasureName: "大狂乱のネコ島への進化権(狂乱のネコフィッシュの第3形態)",
          probability: "100",
          amount: "1",
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
            actualHp: 2100,
            actualAp: 900,
            actualDps: 1500.0,
            magnification: "3000%",
            count: "0",
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
            actualHp: 2100,
            actualAp: 900,
            actualDps: 1500.0,
            magnification: "3000%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "34.0s",
            spawnTimeFrames: "1,020f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "34.7s",
            spawnTimeFrames: "1,040f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "134.3s",
            spawnTimeFrames: "4,030f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "135.0s",
            spawnTimeFrames: "4,050f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "0",
            spawnTime: "135.7s",
            spawnTimeFrames: "4,070f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "248",
          enemyName: "大狂乱のネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 227000,
            ap: 10200,
            dps: 17000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 227000,
            actualAp: 10200,
            actualDps: 17000.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 3
            }
          }
        },
        {
          enemyId: "206",
          enemyName: "バトルコアラッキョ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 920000,
            ap: 7444,
            dps: 3722.0,
            speed: 5,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 920000,
            actualAp: 7444,
            actualDps: 3722.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 12
            }
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
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
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
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "3",
            spawnTime: "250.0s",
            spawnTimeFrames: "7,500f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "4",
            spawnTime: "316.7s",
            spawnTimeFrames: "9,500f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "5",
            spawnTime: "400.0s",
            spawnTimeFrames: "12,000f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "10",
            spawnTime: "500.0s",
            spawnTimeFrames: "15,000f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e14046Data;

