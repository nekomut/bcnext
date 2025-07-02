// Stage 2043 Data
import type { StageData } from '../../app/stage/types';

export const e2043Data: StageData = {
  eventId: 2043,
  eventName: "開眼のケリ姫襲来！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 43,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "ケリ姫進化への道 超上級",
      baseHp: 200000,
      width: 4000,
      enemyLimit: 9,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10027",
          treasureName: "ウェディングケリ姫への進化権(ケリ姫の第3形態)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "2700",
          treasureName: "キャラクタードロップ(2700)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1800",
          treasureName: "キャラクタードロップ(1800)",
          probability: "75000",
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
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 20000,
            actualDps: 10714.2,
            magnification: "2000%",
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
          enemyId: "029",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 803.57,
            speed: 6,
            range: 130,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 112,
            foreswing: 56,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 6000,
            actualDps: 1607.14,
            magnification: "200%",
            count: "1",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "060",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 180,
            dps: 79.41,
            speed: 6,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 68,
            foreswing: 33,
            backswing: 35,
            tba: 1
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 3600,
            actualDps: 1588.2,
            magnification: "2000%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 120000,
            actualAp: 6000,
            actualDps: 3600.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
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
            actualHp: 700,
            actualAp: 300,
            actualDps: 500.0,
            magnification: "1000%",
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
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
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
            actualHp: 800,
            actualAp: 300,
            actualDps: 562.5,
            magnification: "1000%",
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
            actualHp: 700,
            actualAp: 300,
            actualDps: 500.0,
            magnification: "1000%",
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
            actualHp: 800,
            actualAp: 300,
            actualDps: 562.5,
            magnification: "1000%",
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
            actualHp: 700,
            actualAp: 300,
            actualDps: 500.0,
            magnification: "1000%",
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
            actualHp: 800,
            actualAp: 300,
            actualDps: 562.5,
            magnification: "1000%",
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
            actualHp: 700,
            actualAp: 300,
            actualDps: 500.0,
            magnification: "1000%",
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
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1818.18,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "334",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEBAQACAgICAgICAgIDAwMEAwMEBAQGBQMIBwcKCQgKCQgSEA4XFhYfGhYgHRoiHx0sIhokJSYyLSgxLi0yLis0LiY9MyQ8Ni5NQDNSPypNTENjSjJoSC1ZU0tbU0thXlZlY1qBXDeJWzJwbF52dmyQcUiAfmqDf26xeUOIhnySjIDFiEuZlonIh42loZG+pFu0rZjlrGq8t6XDwbPRy7f91Fza18ri4dX636fp6Nvv7uD18+f7+etRaDzxAAAAQHRSTlMAeKgIh5e4zmfeUx4UOyr6oUZtvNVUe/uQ4qv+zJXx/uL+sv3/8/7+/+3///////////7/////////////////e8FUXwAABaBJREFUWIWdVg1v4jgQhQYoByH9oEAhgWCc2sHYuMa1sw5J+v//1Y1Z3WpPWkq6U7WqoszL+L03M+50bkUQ3Xzli+RxED2vojAK/hIgWq1XGzVfv4Z/W8FaYK7wfvaX+Z3OZIsJQ5u/BAiCTrRlUojtE/z/XRqCaPY6H88SbohKJs+rx9fvqTGeb5GgyenjdDqeTvsNkzx5+k7+akMxpezjx8848bIk03F7gBnGTEhJ/gM4W64EmbcHmMdE6MYKn/szhG1ke4BwioSsG3X88StOqtavrZUInvdW144cf1zOcPj4+HHEznzDDuFOKk1IfszyPD9kWZplROy+QWKUZIjkhRDvgklbKKVOdvUNIwTrwyHNTvWJE4Tt+Uwx127dPr8zWR6h7o/6hLlkBUhAyem8a2/mcBVnaZoe3YlKKr2GnGfspT0Fs32exukiRjHVQp/PTr+/I9a+qcPd8ei5PxqTf3y8v7/r4iM/novWPhptAOBwzE7nc5YrAQBmv/kGQDiNs0OWH9NMyzSLY4RQulymOXptCTA7AIOLGFhACNIxRjEyNMtFSxkCYAAKyFJycmdoSIZypiQ7ns/7dqM1So6egoMUkHM0kAydjdChKLbtrDhPMyDwkFuREsospRQTzv1h0uc2+WGSxtPpMk0NQ4gKTovSubrhec5wK4Aoyd+S12UaE5LmKiesbJq6LnVM2LLVEYZxunl7S/MsXngFY2a0huGGQZV2AK9ZOvVH2GwoSEjQgoCM8QLQ8HLSIj94jKGA6SZdJpsYI5SlQuF4gQinBE8nt50wTjbTx+fRMn17S1ZCxdOEF4gRIpSUim5nNxHC1+0meZosl9PHycyc1UZYhigTQisGc2m7vtnTQTSJgih52ySTp33hZFFSLqRShRIcRN23W0/BZPQUzXbWKFI4wqVWRmIhYTi0dKM/y1rXn5+1NgoJA0ISWNOMyZYVAJnr4tNHbS3zPpCGWaDRyJZjKdz9zIeoCKZKCMEoVapsy8H6V36pQAPFhOZcAk4rM3U6T6ppmsvnrbQUwWjlDAtFMWsHEO3KpipdYYyxZSUVkRwuOoIyTLcAcNNMPr9pSoCooBO1raEGJQ3HWDm3vj2WgnXpq78c4bMpbFOzmCsuMKFV3cCKvlFB+Cw/PQFNDX/qEoowHCGCSYxEVdXl7uuOCoL5Rn+WRVXXdQU/cIaCEs0k9koAQH3jshWEOyXrz9q5qoKPfzalhQuagYkisOJlVTuq51+VEIRzyqW7EABMVoWighilFeEYHMG45NuvlAyC8Zww8Iy2RVFY6GEQUZfSKgkbGu59XOPeF5dWuNBO9hbuppJQQqgUBkyo6wr6WOmCcoCRehdeRwiCcO2tA53PCGaKgYtV0dTOaqtKYAAGdCMnVwGggBm8V8AeqK0ysA+qxmp30aNUZVWBueqmeP4CINy5whUgXuNsWXsmrVcU5KsAoCxLeOrW1wHGT3vwv1cQ1pG7ADhvBf9h7crSlcZU5e6am0HCLbgF3nSXA/iOqEHRpoZPV7oATOep2F8brMF4DbQxpbXRCmR0l0LgAL4cB0+cKyy35upcDMazHbQ/xhSmKIQpXFkUvq89mjTWGpiyMNufrnAQjKPJfLeFSyGmjBJwJBSjjQ9wFVNGMYJiWHXJ+I8IQRhNJuPx824PyQzWGqawEGCewjCR/prBcAyB6P4Ki0E48TEa9qbLJYX0mFKuCcWCejT4pQgtX15W82sNDetkOBz2IPq9x/50+QJ1qO0Ka4xgQ5N4AWuz61+5BhCOuv1+/24wuLvrX2DuEX4cjh6ngwdY74v7u7tedzgadrvXAMbd/mAwuL+/9xj9brf38rDojUaQMvAAD//A01631++P/pzfGfcH9//8CgB68Ek+7h9+xuXp/WB47QjDywF8Db8B/Q9y4GvrjX4D+BdQsRqMt8oP7QAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 5200,
            dps: 861.88,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 181,
            foreswing: 4,
            backswing: 177,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 5200,
            actualDps: 861.88,
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
            "knockback": {
                chance: 100
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
      stageId: 1,
      stageName: "ケリ姫進化への道 超激ムズ",
      baseHp: 400000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10027",
          treasureName: "ウェディングケリ姫への進化権(ケリ姫の第3形態)",
          probability: "100",
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
          treasureId: "3400",
          treasureName: "キャラクタードロップ(3400)",
          probability: "150000",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 200.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 200.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "12.7-13.3s",
            delayFrames: "380-400f",
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "80.7s",
            spawnTimeFrames: "2,420f",
            delay: "12.7-13.3s",
            delayFrames: "380-400f",
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 9600,
            actualDps: 9931.04,
            magnification: "400%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 9600,
            actualDps: 9931.04,
            magnification: "400%",
            count: "1",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 9600,
            actualDps: 9931.04,
            magnification: "400%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "60.0-100.0s",
            delayFrames: "1,800-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 5988,
            actualDps: 7810.44,
            magnification: "400%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMDAwMDAwMEBAQFBQUFBQUFBQUHBwcHBwcHBwcHBwcICAgKCgoLCwsNDQ0XFxcbGxsbGxsdHR0iIiIqKiorKysuLi4zMzM0NDQ6Ojo+Pj5BQUFNTU1PT09ZWVlkZGRlZWVwcHB6enqBgYGLi4uVlZWfn5+mpqaqqqqxsbG4uLjAwMDIyMjOzs7V1dXe3t7l5eXq6ury8vL39/f7+/v+/v7///94dlvkAAAAQHRSTlMAAwcOFvIdJc0tO0a2UV2QcYLB+2l52KSYreH7vOfJ9/+/zt3+//D///D//v//////////////////////////yZJCLQAABaZJREFUWIWVVwt3ojwQXR+frlpfba3PKqtgMAkJhEcCAfz//+obUHe3Vmh3zumxqLmZmTt3Zvzxo9Ya7f5oNp3ORoNus1H/1Uenm93heHM4gh2288mg/Y8Qzd7r8kC8UColQ5+d9othp/kP13deN0cudZZfLE0CelgOW9++vr84MpXm5z+W6dDZzzrfi6PRX56iD8dLiEQcx93vIDR6S6ISGWd3COc0OI473zjfXZykZhYO0nuEzD9MOt2v4mhPT1GmqWnb8h4g13w7fvrCi9brIcjOeYAIV/cA5zwh6/W8FqAx2LqF6ylHwackQBCh+TasrYfunCTlXQq79zyUbJJltzaA2TG6nEtD+QDgnIlNry6A/lbccp/dR5CXb8jDsIaF9uISwCPLs7RASPCsuqIbw0Pw2W/gpDwvw7h4Yot2dQYWVH9yPE/L9/JUAK8A5m0qaWz09/5n6jTDZTozGSUgCOVtK2loTk7x59CVufZKF0Db54Qguq2koTN3PkUAWWP0N6G5sgxcDdDfPogAaucPaq4F55UhNEbHT/L5C6foTAUcX1YlsTU7PSqCMoHwEkdKJflZ02lVHbQX7K4DXHKXJglUZeaapsl0VlOJvY2Xf7g5z7SKfOFxoeExMF5esFakUgtFFXxwXYceZ9z1PC/Q4Iyma9PXwW7erwgB6ji8nS0si7gXKhUKTv1Y51nMDaYCsp1OBo8R/iLhMgukSqGZc9dl0mc+xwRhar1PB6Nh/yFAc3JUv9NeFJAjUuUGcZFD6aC15VPTep8P253240JoTi8s5vk1BZTqhGIBA6b0H3GEdvNe9Yy8AzhnHMeZpMhmIohkSAyw1aCmmdwDQGMOM6CC2agw0zAp29e1sytAdgM4x7aTwFMayyjwmcmVjuoBZse46ISJvgKkzKRhAiksmoqwQZKyFqDxWrKQsFtbzSUybYJxJCMZOzg55/UeNEaHqFAbs2/yh+Hihp5VGEYOyCGobkYFwOAQlPfa7BaEwjhghkUcbBlUZZlbP1SuYko9dOsrWWAahs1ADcy2bKHoonZHATmXwyShdnhByLSzRtxzHQZ/tomPk9qx2JoSfUkeviHAhCwAbBs06RKzto6Ax9HpIoZMGChMr0FYgEAth4Pht8cq+m397WUuxQTZyE+vQRiOxzGyEHHoalAP0FmWPQ2yGEhsXRDywMSuxx0CPjBzVr/dNGflYFG2o7WPkSgzopBJOfDgQmNA4/pdszHYB1l+9k2RSqkcxGFRyxV4j13X5dhx7XoaCyIp3OqbXEY6TxyLBCpyDNOyoTO6BLu4eq5eXYBqzs8xeJ/keRIKy7BMw0bsEgLhpLaUC+sueQqLFCLxuWiJzhpmATJJAQAIHFUOpZs1X6EU8tS3fZgIqWaGYUIxI8xKBLKqX9AKAz2kxfzDDpPQz6hhOYxxajtFEt5n1bvJzWA+qhwQAsdmPnRU23TKuxHznPfpdxbl3qbcM7PEp4RQitYmVJDHKefHef2q3uz2eu12uwOLYimkLImTOCKrN6ARM87w9gslDZfb/X7/69dm9acjRXS3et+BGeZuVbPdFdZZnlxP+L5gIGBdDDfYCKhNuRDCc+zd06h+y2/P3jGkW+gs01AAuY7j9Fz8l+XS5cyxNoN6BocHFkQqLn+lwOWa2zgsV5pzgQW/28gXNTQ5hTIKfSGzS086vq0cXaZCB8IPI+nWdvQfP0bvBCpe+AVAnkZkM3g9MJUVe0UghMsce1Mvg9ExjOPId0FFqQLKB8326/YUwHIkPRHIWPFf9QDDg+sxh/thLPlpO+u1Wq32YHEgQqlAwAeC1iq52R48WyyALLjYXP2cj6/29LZDVERRJOhu3Ou0KonsTuZvBmgGGeuXl//+tpeXl7UJUsLrn0/jaibbg9Fkvtk+Pz09Pz///GDPpW0348lo2PsE8D9ZZaakEgJH4gAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 5988,
            actualDps: 7810.44,
            magnification: "400%",
            count: "0",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "60.0-80.0s",
            delayFrames: "1,800-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 50000,
            actualDps: 26785.5,
            magnification: "5000%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "106.7-160.0s",
            delayFrames: "3,200-4,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "334",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 5200,
            dps: 861.88,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 181,
            foreswing: 4,
            backswing: 177,
            tba: 0
          },
          stageStats: {
            actualHp: 105000,
            actualAp: 15600,
            actualDps: 2585.64,
            magnification: "300%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
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

export default e2043Data;

