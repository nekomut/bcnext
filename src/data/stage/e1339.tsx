// Stage 1339 Data
import type { StageData } from '../../app/stage/types';

export const e1339Data: StageData = {
  eventId: 1339,
  eventName: "ちびネコ大試練",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 339,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "＋Lv45解放への道",
      baseHp: 360000,
      width: 4500,
      enemyLimit: 20,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 600,
            actualDps: 1200.0,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "322",
          enemyName: "ちびネコモヒカン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3200000,
            ap: 10880,
            dps: 18133.33,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1980,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 3200000,
            actualAp: 10880,
            actualDps: 18133.33,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 720000,
            actualAp: 36000,
            actualDps: 21600.0,
            magnification: "1200%",
            count: "3",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "7",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 5
            }
          }
        },
        {
          enemyId: "329",
          enemyName: "ちびネコキングドラゴン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 3500,
            dps: 2234.04,
            speed: 7,
            range: 755,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3500,
            actualDps: 2234.04,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "5",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "5",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "5",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "＋Lv50解放への道",
      baseHp: 420000,
      width: 5600,
      enemyLimit: 20,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "327",
          enemyName: "天空のちびネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIDAwMFBQUFBQUFBQUGBgYTExMcHBwlJSUmJiYnJycsLCwwMDA4ODg5OTk6Ojo9PT1FRUVKSkpTU1NWVlZgYGBkZGRnZ2dvb29ycnJ5eXl7e3uEhISIiIiMjIyOjo6WlpaXl5egoKCsrKy1tbW+vr7JycnOzs7U1NTd3d3m5ubz8/P9/f1IGfGuAAAAQHRSTlMAAwcNQUlUXGZ4hZSgrb/L1ekTIBkuN28nRVV0hUmfYuCVzIa1/s6m6Mf+1//1///g9v//7//+////////////T0go2AAAA/dJREFUWIWdl1t7qjoQhg1ntB52AojWlqVVqhjBJoRwUPn//2pP6rrYN7sP6eiDXDhvvjlkIKPRD4bfkreYGD/95UcLPktZpqf1ah3+BkLWm7Jt2rY+XqvzGmn74215EZKyRkHaE9b1D7aXps4zmsnbrWu6c6jpj5KyaRoOhKIBBTfxrpkHY1sBoKY5rboOCOxSauXBWJ9FC4SKN10LIQhWt9UuHh7A6th24AQIwLRdQakU9dfrYECYio5TmgOhu7WNKGjGRE43gwFvF97mkECVh6ZrJBSjqPL6NBhA0rqVNOPNX2PQDl1enQcD8AnyV4mnt4RA1JfX+8EAtE7P+1NZfQnJeJpWdfV1kVW6HgwYIRKT5Wuyft3l+Xv08bnZLD8+Ir39QNL9Kl7vZb1fEZLsVkh3O5Ez/3MuZdtW5en9eo003UejeFe0j/ujfzzuN5mnw7vwr5kf5aO/F7e+7yvR3466AwGtwb9/1I+HfNy6vr+f9CSg1U7A2r3g4sC5uhXvWgRjWxxY3fc3aMG8uPeNyC6JHiA/0OwOC8sH47LJsqxMdMZBsmMHesjy6lYURZYdsipn6dtgAlofWaYAlN47WcPyWZEVdTp4Loa7gnHBiyKnnDNQQAsuKva1HQp4zUA3ICTsSKgBXJngkrPjUMAHBE4LJmQBbjDMcn7gDLR8DQUkJRUqBvZ9UVEwznJRXYcCzORUZnVBa1bVMFplUdVMHi6nt6GAEYqT7fVwkPBQELSRVIjLaeMEOtsBxWe+3/yhheqD3fvxkpiauym5fsbGanukWboJg9fz1tTzR1ESQEcGW55G2DCCVaT5hoCQAZKRsUq3AcYGNg3deYBMUwGMKDaDwPwVACsJI8PEATFNE2kSEMJPAICCwAAB2hIwlB1GOTLMALKoDzAUAPyUBFgf/QoAiVQSAGBoA9ATgNXS+Jtg6DWCAhgqkeBoAgEQvwEoBYYJAIy1AVA9E6JXVcCqkqY2QAnH5jfKVM2ouRufwgn+DkYpwLoADA0UhcGzCgEhugAzMDBxLGIqEAELsC7AJJEVxWonEhKHMdEaaAAgxLLCKILkkRAAQNAExLFtR64bkiCM4hDEaJ58cEysyFp6VkxCUGB5dqwFQDgMwjBy3BCDgjC0fEfvuIBIGEe249gEB5FtRbbv6k1VBCn0PNexoAyhY1uu71pacx0Rx/V9VykgkbeEj2PrHbvI0p9Mlp4XkdCZTMa+53iBFiAcT6bTyXi8tOyx+vW9pR4gepnOpi++P3ZtfzIGDUtfD2BPZ/PZDFyXjjuezmYvLxOiBXBni8ViPgMZk8l0Ple3Wi+ayFsomz/t+36md3Z15ot//muL+cv/hPAvDR6RdIcVUUsAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 1780000,
            ap: 22000,
            dps: 3952.1,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1999,
            freq: 167,
            foreswing: 18,
            backswing: 16,
            tba: 75
          },
          stageStats: {
            actualHp: 1780000,
            actualAp: 22000,
            actualDps: 3952.1,
            magnification: "100%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "615",
          enemyName: "大天使チビネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUNDA0ZGBkZGRkiIiIoKCgoKCgpKSkzMzM3NzdKSkpOTk5WVlZ0dHSCgoKWlpaoqKjcvBDcvA/cvRHdvQ/dvQ7evhDevxPgwBq4uLjhwh7jwxzjwx7jwyTlxB/mxy/nyDPoyzbu0U7Ly8vv01Dz12H12mnc3Nz54YHl5eX96Jvv7+/19fX7+/v///9ZamMEAAAAQHRSTlMABxMtOEVod9ZZiyGAmer/pPe3xf+t0P+64///2vf+/v//ByEVQDdLXW7/fZmPhqG3qsjS/+Pr9f/6////////a1ZfFAAAAudJREFUWIXtV9l2qjAUdcIBpXFAEWLCIE44tFZqcyOQ//+rGxCs1nY18b7ch26XrsTF3tk55+RES6Vv4Hm+Pz3D933P++65r8nTxWq33TxzbNLPzXa7Xs6moiLefHN4e31er5aLxWw+my0Wy9V2z79aT8UE/JfT6WXh36znTZevp9NWzIO3O57+HPY77mA255hxB7v94c/puBLchD9b7w/H9/f34/GN45gND/v1XCKS3nTO112tM6y4l7lwCP9PKP2BWpHktJX2ZVxFNHa7cvwGwqZymQSMMSRloYYYiwbFrOVwAbMsI1DnayajYlYeJRGqy/BLCmYsvghUECOaFL9UViFhgZpPOi4jqpwA92Az5iilal3rmzB+QKA0SSM/wG5IEx6PaNKRLYRxwmkRJ+dwP9IqBpWwG/BEtGT4yuRq9VwCVsX5bfOOzxjpiwv0yR2dA9eEN4Dvl+fFGQqXk1YYiMJiJxAQFg9+pp4xYheak48cyKNiCvIrkw8B93ofwgKoYNAwS2DxHv3MzVA2P0WQulEWSOG21L3KYuJgB7t26sAWrsXrNNKABmlVJYyOxLuSFtyXUYQkSrncv1Mgcsex3MHh1WlIiDOUawiVVtPAeShJWkZP9VpNOAStwXDi0ihOMg/EiFmSRIFjCXtouYX7OAgptuw4m4zF/U/OlceBgaUb0LYpY4HE1VBDNK9epAMAHGy5LBrJRLE6tEnCYhamfOAi2wlN4W6SS3TGOAqtTAAAjLT2z5xPqNjUAgbQLUMHqClN5x4cRrkDC/IXEu5F1wI2v050oOsWBFDy90WGtK0QgwcAQmDI342lrDMSC0DDsIAudSsV6AQMQ2jzROg9+RxwVMyYsgjrABJT9m4+Q0FpOYYgZI8kIUUL8WZKUSJzK96iNnZiRmP6sEDaG3AYMyR5EG5dNIaTUeMfBH7xi8dRrtSUer2jalq329U0tVFvKVWZPy1VddB86vVAgV7vqdn/qi39BRfSoyqQRkI0AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4500,
            actualDps: 849.06,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "colossus": {
                enabled: true
            }
          }
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "30",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUHBwcICAgKCgoNDQ0YGBgZGRkaGhocHBwdHR0hISEiIiImJiYpKSkrKystLS02NjY+Pj5BQUFPT09SUlJSUlJhYWFjY2NtbW1wcHB2dnaAgICCgoKMjIyWlpaenp6tra27u7vHx8fT09Pd3d3h4eHl5eXq6urv7+/z8/P39/f8/Pz///8jvj9xAAAAQHRSTlMAAwcME7ocK9cjOYOwRVRfmslMa+bueIqYt/9p8IXUpsH9suP+wtjw///k/+7+//H+/v//////////////////rPQz2gAABfJJREFUWIWVlwlzqkoThsMSiBjEaAKekxh3BJF1NhiW/P9/9fUM5ny37i0hZ6oELehnut/u6RkfHsaGZi3dpaU9PCjaZGKoo+//exien+ap7+qqvTr5p7Wp/J29vrpSXtf06jp+QUua782/slcWZ1oyVnJ6PqCSlVVdrPS/MFfUdQH2goBzcWdVebF/ai7Uc/aYEkmoBQgTxuPlD1WYeIdrej2iPMCCwAGAgpxV8XxmGz9g6KsQl1WFURLFRPrOSJQlrIzP6WXraGP2inPuXS9jVCSE4BzRJKMxrSg4gy/vYwWhrnrRGIswCcIoCsPwiFiESikp9a0RgLZBvT0N47ggJeclKeIsyFiflGw5DpD5Y0VQVO2XHG1ZHHu/yhKtxzRwMwlAMem+vkfXogj3hFGA5hxwKYT/Yy/vHYqpBKTO8PyTtZ8gzmmSg/st4cKYo+rrq0kK6dh+MggwNhnEWVZZwMCSBUgASIDFNSIlzQ6LwVJS3tNKKlBEDdjUiH61tG6kI1WI6hKd3cFK0vb4BshaCL3DiKNjUeYUAE0M2nB6mQ1GcKJlD8i7TjofhEkYhCKeJhEFwtF+CKCfaF8EKGl77QPawkfAeCwSWbLDYAgb1IdAokqmkEWsTnKZSBrJPA4DFOfCZM3jIxJWXZPFScSkM7ks5pJ8DgEe9PVVLmFyM/uqioLdHJClWOarQcCDvjxdrqIP5En1z0JksXSAFqex1agalieipVlChZAyGy2JYWXhLLns7fGepPUdgRZRTuu261pOsghSyOnBW/yop+1vHYFkQZTkeRIFOZFL+boYtxaATdEDoIPhoigQRn0Cq3SsmfRDca+9QV31oOr7y3WwjP8/zG1ORc2hvofA1nALyf/h7qbY2yv4HR9voZSsEC6R63q0p38TTHez35yT5AZAh2uOsrNn/NBeIDTdTqH4ZF0T31muNuvF+Oaq/CPJmpe3BNJfMXSeaoqmqeMVAG/9eUlzfPrVkTiKo/AwUr1/5lV1XZG/4UzjHjDUYMspJuQ0Evs3QNEMXZ3Ytr1wvO0Zt7AbtLItbUbEV27Tqpphvp8uKYwc81asI9kY0XokerB9UFRVA7+3KWvarmnkEuxu15GtRAIgak2feB9507U3SzG9bAXt1ZZzDANUTTfW54S3TQOBg+ddd1Pgq7nYyg8Auj67xKSuqroWkE4qKAHct1VlECEeGu/uKU9KsavVtQDICCSA+ZY2CFCEgOs0DYK4qioAyChkEH03PVn6EEAKMDkRirKMc17x+uZ7C0NkgWxNXR0MQFX195RShvO6rnnd9L5DMnst8GaiqwMLQQCMPbQOGscV2Is2KgJoG84bkdPMM3RtwAUIQNXeLxkmx7AE+7oFHzgQahFN1/HLDADaIEBTdXvtX7ZXCSjhVIhKcIHBGZ22IIEA3I9BaCjK0F4sryAA5zgswoBAAWVhkjOeusJ+qBuIItJ1wzCWV6gBXsJZyN9ikf8DYpycTFBAg899AFSxbkwm5jzGpOIkpHi/JkJ9H1OWrWGNwyv6AACsjYlpLQ85JiVLYpavNqStU8+HZuIvdOGBMfCfSdEnpmkulp8JphR2M8Ri71Q21J+eobr2JgSn6xNDu6+iblqWNZufEcFFdIQz+sEDOdHeu9IydcE324QI78oIjcyyLcuG+QiKd1GBznNoyE0+XSUUzmQT23Es05zc9UAFB6APztwDQvluV2C0td28bVPvV4zR58JaLB2YwLzbFwGwmM0c1/tMiuzzM0PF1nLSui28X1FRHJaOA4DFwtLvrkbNclzX9eYvQZx9Pod5trUXPquKXy9BFB08d+nM7NnSmdwVUbPd+Xz+/PiyC6LD8wGMps4W4eTj9RjFx+fp1F2Cg8v7AN0B68eXl5ePY3B8/Yii4NP7BXtpsDtG0fH1cT6futP59P4/X30qrJ+ent52x91uB5Td00sI5xogHHe/3+Dh4+Pj8/3DlTF/6sfb791vGHB5e/0NqNv3/uHL7L4Gs1sIT69vr9/j7e3jrf/1JBx4nv9Xg/8BuTFKKHzgmv8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "615",
          enemyName: "大天使チビネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUNDA0ZGBkZGRkiIiIoKCgoKCgpKSkzMzM3NzdKSkpOTk5WVlZ0dHSCgoKWlpaoqKjcvBDcvA/cvRHdvQ/dvQ7evhDevxPgwBq4uLjhwh7jwxzjwx7jwyTlxB/mxy/nyDPoyzbu0U7Ly8vv01Dz12H12mnc3Nz54YHl5eX96Jvv7+/19fX7+/v///9ZamMEAAAAQHRSTlMABxMtOEVod9ZZiyGAmer/pPe3xf+t0P+64///2vf+/v//ByEVQDdLXW7/fZmPhqG3qsjS/+Pr9f/6////////a1ZfFAAAAudJREFUWIXtV9l2qjAUdcIBpXFAEWLCIE44tFZqcyOQ//+rGxCs1nY18b7ch26XrsTF3tk55+RES6Vv4Hm+Pz3D933P++65r8nTxWq33TxzbNLPzXa7Xs6moiLefHN4e31er5aLxWw+my0Wy9V2z79aT8UE/JfT6WXh36znTZevp9NWzIO3O57+HPY77mA255hxB7v94c/puBLchD9b7w/H9/f34/GN45gND/v1XCKS3nTO112tM6y4l7lwCP9PKP2BWpHktJX2ZVxFNHa7cvwGwqZymQSMMSRloYYYiwbFrOVwAbMsI1DnayajYlYeJRGqy/BLCmYsvghUECOaFL9UViFhgZpPOi4jqpwA92Az5iilal3rmzB+QKA0SSM/wG5IEx6PaNKRLYRxwmkRJ+dwP9IqBpWwG/BEtGT4yuRq9VwCVsX5bfOOzxjpiwv0yR2dA9eEN4Dvl+fFGQqXk1YYiMJiJxAQFg9+pp4xYheak48cyKNiCvIrkw8B93ofwgKoYNAwS2DxHv3MzVA2P0WQulEWSOG21L3KYuJgB7t26sAWrsXrNNKABmlVJYyOxLuSFtyXUYQkSrncv1Mgcsex3MHh1WlIiDOUawiVVtPAeShJWkZP9VpNOAStwXDi0ihOMg/EiFmSRIFjCXtouYX7OAgptuw4m4zF/U/OlceBgaUb0LYpY4HE1VBDNK9epAMAHGy5LBrJRLE6tEnCYhamfOAi2wlN4W6SS3TGOAqtTAAAjLT2z5xPqNjUAgbQLUMHqClN5x4cRrkDC/IXEu5F1wI2v050oOsWBFDy90WGtK0QgwcAQmDI342lrDMSC0DDsIAudSsV6AQMQ2jzROg9+RxwVMyYsgjrABJT9m4+Q0FpOYYgZI8kIUUL8WZKUSJzK96iNnZiRmP6sEDaG3AYMyR5EG5dNIaTUeMfBH7xi8dRrtSUer2jalq329U0tVFvKVWZPy1VddB86vVAgV7vqdn/qi39BRfSoyqQRkI0AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4500,
            actualDps: 849.06,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "colossus": {
                enabled: true
            }
          }
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "326",
          enemyName: "ちびネコライオン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5900,
            dps: 17700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5900,
            actualDps: 17700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "300.0s",
            spawnTimeFrames: "9,000f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "＋Lv55解放への道",
      baseHp: 600000,
      width: 4600,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 161250,
            actualAp: 21000,
            actualDps: 16153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 950,
                level: 3
            }
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
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "3",
            spawnTime: "14.7s",
            spawnTimeFrames: "440f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "325",
          enemyName: "ちびムキあしネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 5990,
            dps: 3993.33,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5990,
            actualDps: 3993.33,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "330",
          enemyName: "ちびネコジャラミ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2560000,
            ap: 12000,
            dps: 4675.32,
            speed: 4,
            range: 320,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2125,
            freq: 77,
            foreswing: 18,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 2560000,
            actualAp: 12000,
            actualDps: 4675.32,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 90,
                level: 7
            }
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
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "325",
          enemyName: "ちびムキあしネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 5990,
            dps: 3993.33,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5990,
            actualDps: 3993.33,
            magnification: "100%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 161250,
            actualAp: 21000,
            actualDps: 16153.85,
            magnification: "500%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 950,
                level: 3
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "7",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "＋Lv60解放への道",
      baseHp: 700000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "323",
          enemyName: "ちびゴムネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2400000,
            ap: 30240,
            dps: 15915.79,
            speed: 2,
            range: 390,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2370,
            freq: 57,
            foreswing: 8,
            backswing: 8,
            tba: 25
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 30240,
            actualDps: 15915.79,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "4",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 20000,
            actualDps: 37500.0,
            magnification: "4000%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "20",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 20000,
            actualDps: 37500.0,
            magnification: "4000%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 449955,
            actualAp: 16875,
            actualDps: 16330.65,
            magnification: "1500%",
            count: "8",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "324",
          enemyName: "ちび暗黒ネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 2100000,
            ap: 5500,
            dps: 10312.5,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2100000,
            actualAp: 5500,
            actualDps: 10312.5,
            magnification: "100%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 36000,
            actualDps: 9310.32,
            magnification: "1200%",
            count: "2",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 36000,
            actualDps: 9310.32,
            magnification: "1200%",
            count: "1",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1339Data;

