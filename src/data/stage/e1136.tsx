// Stage 1136 Data
import type { StageData } from '../../app/stage/types';

export const e1136Data: StageData = {
  eventId: 1136,
  eventName: "開眼のちびネコフィッシュ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 136,
  stages: [
    {
      stageId: 0,
      stageName: "ちびネコフィッシュ進化への道 極ムズ",
      baseHp: 999999,
      width: 4400,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10312",
          treasureName: "ちびネコ島への進化権(ちびネコフィッシュの第3形態)",
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
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "34.0s",
            spawnTimeFrames: "1,020f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "34.7s",
            spawnTimeFrames: "1,040f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "134.3s",
            spawnTimeFrames: "4,030f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "135.0s",
            spawnTimeFrames: "4,050f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "0",
            spawnTime: "135.7s",
            spawnTimeFrames: "4,070f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "328",
          enemyName: "ちびネコ島",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 247000,
            ap: 8400,
            dps: 8689.66,
            speed: 8,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 320,
            freq: 29,
            foreswing: 10,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 247000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "054",
          enemyName: "超メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 8000,
            ap: 3000,
            dps: 1914.89,
            speed: 18,
            range: 170,
            rangeType: "範囲",
            kbLevel: 16,
            money: 999,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 9000,
            actualDps: 5744.67,
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
          }
        }]
    }
  ]
} as const;

export default e1136Data;

