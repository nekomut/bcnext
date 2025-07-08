// Stage 2186 Data
import type { StageData } from '../../app/stage/types';

export const e2186Data: StageData = {
  eventId: 2186,
  eventName: "対決！玉狛第２のリーダー",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 186,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 150, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "逃げるわけにはいかない！",
      baseHp: 1500,
      width: 3600,
      enemyLimit: 9,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1177",
          treasureName: "三雲修＆ネコ(677)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7700",
          treasureName: "キャラクタードロップ(7700)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6700",
          treasureName: "キャラクタードロップ(6700)",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "25000",
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
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
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
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
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
            baseHpRatio: "100%",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "617",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 1000,
            dps: 297.03,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 101,
            foreswing: 50,
            backswing: 51,
            tba: 0
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 10,
            actualDps: 2.97,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "wave": {
                chance: 100,
                level: 3
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
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "もうひと勝負お願いします",
      baseHp: 12000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1177",
          treasureName: "三雲修＆ネコ(677)",
          probability: "10",
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
          treasureId: "7100",
          treasureName: "キャラクタードロップ(7100)",
          probability: "75000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "37500",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
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
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
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
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 5000,
            actualAp: 350,
            actualDps: 119.32,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "617",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 1000,
            dps: 297.03,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 101,
            foreswing: 50,
            backswing: 51,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 120,
            actualDps: 35.64,
            magnification: "12%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "wave": {
                chance: 100,
                level: 3
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
            "immune-surge": {
                enabled: true
            }
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
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "ぼくのやるべきことをやる",
      baseHp: 45000,
      width: 4800,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1177",
          treasureName: "三雲修＆ネコ(677)",
          probability: "15",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7400",
          treasureName: "キャラクタードロップ(7400)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5700",
          treasureName: "キャラクタードロップ(5700)",
          probability: "100000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 8000,
            actualAp: 500,
            actualDps: 416.66,
            magnification: "200%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
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
            actualHp: 8000,
            actualAp: 500,
            actualDps: 416.66,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 2000,
            actualDps: 560.74,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "617",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 1000,
            dps: 297.03,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 101,
            foreswing: 50,
            backswing: 51,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 1000,
            actualDps: 297.03,
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
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "wave": {
                chance: 100,
                level: 3
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
            "immune-surge": {
                enabled: true
            }
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
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "反省は全部終わってからだ",
      baseHp: 160000,
      width: 4500,
      enemyLimit: 30,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1177",
          treasureName: "三雲修＆ネコ(677)",
          probability: "25",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7100",
          treasureName: "キャラクタードロップ(7100)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3200",
          treasureName: "キャラクタードロップ(3200)",
          probability: "200000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "100000",
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
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
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
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
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
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "4",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
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
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
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
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
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
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "99%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "99%",
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
            actualHp: 800,
            actualAp: 80,
            actualDps: 80.0,
            magnification: "400%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "617",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 1000,
            dps: 297.03,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 101,
            foreswing: 50,
            backswing: 51,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 2000,
            actualDps: 594.06,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "wave": {
                chance: 100,
                level: 3
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
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "ぼくはヒーローじゃない",
      baseHp: 240000,
      width: 4800,
      enemyLimit: 12,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1177",
          treasureName: "三雲修＆ネコ(677)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5200",
          treasureName: "キャラクタードロップ(5200)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3400",
          treasureName: "キャラクタードロップ(3400)",
          probability: "300000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "150000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "1",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "617",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 1000,
            dps: 297.03,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 101,
            foreswing: 50,
            backswing: 51,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 3000,
            actualDps: 891.09,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-300, 150]
            },
            "wave": {
                chance: 100,
                level: 3
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
            "immune-surge": {
                enabled: true
            }
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
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2186Data;

