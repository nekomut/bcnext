// Stage 1023 Data
import type { StageData } from '../../app/stage/types';

export const e1023Data: StageData = {
  eventId: 1023,
  eventName: "狂乱のフィッシュ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 23,
  stages: [
    {
      stageId: 0,
      stageName: "お魚地獄 超激ムズ",
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
          treasureId: "1109",
          treasureName: "狂乱のネコフィッシュ(97)",
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
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
          enemyId: "081",
          enemyName: "狂乱のネコフィッシュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 87000,
            ap: 4200,
            dps: 7000.0,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 620,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 87000,
            actualAp: 4200,
            actualDps: 7000.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
            actualHp: 8000,
            actualAp: 3000,
            actualDps: 1914.89,
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "016",
          enemyName: "ブラックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgICAgECAgEDAgIDAgICBAEDAwMDAwMEAwMEBAQEBAQEBAMEBAMEBAMEBAMFBAQFBAQOAAEFBQUFBQMGBgYGBgYGBgUGBgUHBgYHBwcHCAUICAgICAcHCwEmAABLAQEfHh57AAAuLS0AAP6nAQE8PDzZAAFVVVVsbGt7enqIiIeRkJCfn56wr6/GxsbR0dHa2tnj4uLx8fH8/Px35odEAAAAQHRSTlMAAwcLEcD/LUHL1vP9Gls53SBs7o6r+ElSeeiGxf+hJ7PjYJm8f2b/0BX//////wL/////////////////////x4QrTgAAA0BJREFUWIWVl32fqUAUx0vtUE0bInpQEgZr3WuRx/L+39WdmuR+rJmmn39MnK/zNGeGIPynP+U7calL5WI5nLlDSagj3Z56blAs5J4JYfgp1rCXXA0Aq6+TVdAGWFO9BqCZmziGpOudTjDIV2pQbVfKcDITzfc/lIXablvZIqqThI6SAQAEhUYjMO7UsBcacxNbPc1XI+DVAuQujL6+Csb3zzcwa1VBaDlgtPr5+SoBI+jXyYFo47ytvv+uchfQKHNlUacK8pgYIoQAfqFsZQ5qAIwQZIab/XGH0Do+7jYIWDZ/EsQujgBtT7f0fo23h+SeXvdrMJa5AY0IIrS/Xu9Yt935fk/PSYxqtGKAi7hNbnGSJpc4Ppwu50Ny3ZhD7gjmGo7/kp7jOD5e0uR8Ol0uewR7DU4AqcHmeEuSNMX+J5fTbo0rwd2MrXwrIbTdx8f4sN9t13kdAW8MjV65iXAtASoXkHNDNlXwXpx1yJvgvbQJTy+RFL4V34ZqhVQA11jLNyJNPHVgRIBj4OglMpBpqu6lrI0Zqh5scp9lz1EHo4gAUQhqsyICehcRVfWS9IiA5kFVDMWRRLWv7CWD0YZFDOw6DLQqD9h7WpywckioHuueIM4sugfFs9BgAPA8B3RCkYQJAyCx+rBgMjfU8uPl2+/EOqGCRbUHoM3o5udeZnjAmirVfYRl2XQAOVIqQoA9OmBocngA+nQAaxw9s+IxANbvr5dP0OOZygP4LUsr68gFeHUBhYvHo5AOmGjU+qPFtPgMOXTA4FmF12DgePyAMwD/NRJ8BUTRA2DSAYy9YNluzrRUjQHQPWoOtE87B6gtd0EHFCerVfoP4SMYp2XDtgfxWJfndIDko9DE+VIKAvRcP/LzzKpNW5sZijMUBcZAEW3TneKhNXFIKNqkITX0fMp4+mfUEQduxX3X8IO5qTalLilHfppL2aCEfUle4l+oOlvFpSjbXUmQ/SwIa5Z5S87LiPeaig3ELBkZQCUTPJsS0K31j4cANJv8qu5hZxipf6f8gJgW95ns6lrr/4pA7mrh8OE1HlSsUfzOXupqVhTohQwFKE1ZliXOPDSMrts3TeWjVFtzpn0/crvGb8Q/a31jQfSg9tAAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 550,
            ap: 3000,
            dps: 11250.0,
            speed: 150,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 8,
            foreswing: 6,
            backswing: 2,
            tba: 0
          },
          stageStats: {
            actualHp: 550,
            actualAp: 3000,
            actualDps: 11250.0,
            magnification: "100%",
            count: "0",
            spawnTime: "966.7s",
            spawnTimeFrames: "29,000f",
            delay: "300.0-300.0s",
            delayFrames: "9,000-9,000f",
            baseHpRatio: "1000%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1023Data;

