// Stage 2210 Data
import type { StageData } from '../../app/stage/types';

export const e2210Data: StageData = {
  eventId: 2210,
  eventName: "週末ライブ DAY1",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 210,
  stages: [
    {
      stageId: 0,
      stageName: "バーチャル・シンガーの軌跡",
      baseHp: 4000,
      width: 3600,
      enemyLimit: 12,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "100",
          amount: "20",
          times: "1",
          limitText: "1"
        },
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
            count: "6",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAaHR4aHx8bHiIcIiIYJiQdJicwKjYhODcAAP4RSj0tRD8tSUeRAb5lNWcTZVITbjQLbWd3OXl7N35RXF0YflrYA93gBOQTh4SQRZP5APkKm5zBPsR7eIIspnkDtbfVW/zmVuoB/gGWiM+RmoySmJrtWu9cvXID2dfuXPMu6h4Z2dAP3N36Yf4C5ub5ZP75Zf77Zf1T8TFG9zufsrYC/foC/f0C//7/f/+7xcj4s/hy/f6p/ofX6ez9/f3///8fh31xAAAAQHRSTlMATCgPoXOK/ckB++MzAo6IrxCx+vz8cDViSQO7//7/DQV8AQUu/ekNcmBc+MgJTxxCL874/xQpBAP///////8An0H/zgAABJRJREFUWIXtllt32jgUhfEVY5mLsWiBREDGIxJCTDtBDVYamv//r2Yf2dxsSDJt36b7gbXQ8v60dXRsqfH6i2r8AfwuQONEm52OB1vjUq390AXA5ljH/tc0zdNXQrTeAGw2ZwBw57MszUmzLM/H40uATVVmFJPmmH02y7IM/j2hDtj7vhmVgNd0XGIKvVGDE7tB/AWlBjBuj/NsRin2jBqgajch4hjpGw2zAlpDRpQLNTj4n4wIML29vU3TBhUR+gJRHbKzNTgEeHraEaYb8qdjBMiN/R9C5DkRWmcBx34CpCkAMxMAbiMT4i3A00ElIM2zwv+VZAiIMK4ANhcBtAoASv9XZEAh260PATbo3ltSegCYCPnHAXDfPz7eYwXwLhYl4N0Eq9Xdage4f1y/PP5NgMXNzeKDgLuH5cMKgA0B1i8FYHEzn998DLB6+P59eYcingLmz8/zxS8Abv4A/peA4XAYRfFPAe6WAFwxyPWj/wL4Np1O94AJNBiEbne9Xn8A4MSbaWz5rj9cPa2uCLBcrwkRBoPBgI3eAziWHdt+EHLOesPh1WS5nBBgMJmEzSbnzf4IgOv5/BLA9gLf8tnAxGY052Cgti8iFBx+IUTSHwFwfd03gNonzbH8kAXkX2LqQYilhwP9Q8PdbCbXpKS/6CdJ0r/wPbA91myGE6mg5SQ0Ultx8BMhMQD6qNYAjuWyJld6a6RFATABEqH0M0mQP+mc/6w7XhCGYvujlEItQ64NQD6XwzJJwPhU+lsVADageQDIUGrO9VaCoPaDiXwW/ZHxz9qN6sGCRXC9f5ZmD7lS2ANZjm0FBpPSn7dqABACWUbQXG5l0KWmCJs7LAaV6Hw253tubgwVAOrACgKSa8W6QwDQAKgtRlFY/OlEM3PLKa4sVQAakaHiGrml4r1uj0utqZBcSEn9lHRG5n6QmfN9XE9g+9S0HM8rHvQCwJTQilqBRpusMzKHe8HI0irA9lxGkSX50JVCox24Qi8JKQSGzPxfSgDd1E63EZ1EU0q91ZIHrvEHjEuO9UgshvsHP121UIdjgOUWiTm6UQSeFyA7dy0X6RWFkIpZh+lnuG+2TwBUPgruugyPerFHfeBGkUt+7rtMySDKDsJlE614DHC5ksy1bCugR2NfaOFGsYXu1NyzLU5/zT11Z6c792kCFni241iYqx/FHuOBFdOuCOHaDY8wTnFPnM3OXnUtz7Mc7KRv5pranm85CIDdDyyMUgmccnpcWc/dVB0zRN2MKWMHih3f7ITdsPsKhXFql+VqIxUBtpJZe5pWNDVKoGklVdUA9DopvDFITY3topKobeAChE31a4QagPZC0JbTs/RqoY0FvQuKQFjEOwAKgMcxL0UwtCBgQAozir56BwCLRmBG646nkUult31hZqdWqkWoAkwAz6Ym8uOpB0vPnloM30ZRjLp2u92+tAuOjWaSgnmRTzN2hz04elHksVDoSW/YDSW2Z7eR7Voj2ZaHryo+Gqh5yCd0LpkTKmA4YOgvozOv89mIAO0qAATP930Pv91e78qoC3n4Z9TtdDqfSAWCCMb6L0hfZEu9JtWNAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-33.3s",
            delayFrames: "400-1,000f",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-50.0s",
            delayFrames: "600-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-8.3s",
            delayFrames: "100-250f",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-8.3s",
            delayFrames: "100-250f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "656",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 1171.88,
            speed: 10,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3900,
            freq: 128,
            foreswing: 49,
            backswing: 57,
            tba: 40
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 50,
            actualDps: 11.72,
            magnification: "1%",
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
      stageId: 1,
      stageName: "これから生まれる未来",
      baseHp: 30000,
      width: 4000,
      enemyLimit: 45,
      requiredCost: 75,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "100",
          amount: "30",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "15",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "15",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
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
            actualHp: 200,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "200%",
            count: "25",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.3-4.0s",
            delayFrames: "40-120f",
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
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "35",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "99%",
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
            actualHp: 160,
            actualAp: 60,
            actualDps: 112.5,
            magnification: "200%",
            count: "45",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "656",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 1171.88,
            speed: 10,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3900,
            freq: 128,
            foreswing: 49,
            backswing: 57,
            tba: 40
          },
          stageStats: {
            actualHp: 19200,
            actualAp: 400,
            actualDps: 93.75,
            magnification: "8%",
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
      stageName: "広がる創作の輪",
      baseHp: 120000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "100",
          amount: "50",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "656",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 1171.88,
            speed: 10,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3900,
            freq: 128,
            foreswing: 49,
            backswing: 57,
            tba: 40
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 2500,
            actualDps: 585.94,
            magnification: "50%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 600,
            actualDps: 1000.0,
            magnification: "40%",
            count: "15",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
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
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "15.0-20.0s",
            delayFrames: "450-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 1280,
            actualDps: 2400.0,
            magnification: "40%",
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
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 1280,
            actualDps: 2400.0,
            magnification: "40%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 1280,
            actualDps: 2400.0,
            magnification: "40%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgEDAwMEBAQEBAQTDQ8LExMTExQcGRkRJScWKCoXMjZCIDJiEDMWPD0zMjM8Ozo7PEAjS1BFRURuNE0gW15QUFAxbHNfW1oye4NpaGinRnc9hYx4c3I2kppFmKCEg4NKqbNNs72Zl5dWw82tqqpg0t5i1eBk3Odo4u7Av79r6fXKychw9f/T09N2/v/e3Nzm5eXv7u349/b///////9HEw6sAAAAQHRSTlMAKU1wg5epE1/T8v7mPbr/38v+nPrQ///+/v8A///////+/////////////////////////////////////wD/SfdDDwAABfxJREFUWIXtVmuTqjgQxbcQFYfLvQMsCogX5A3hEaOy+f//ajuIOrMz42zVftvaVE0NKuek+3SfToQ//+US/if4n+A/QvD5Gk5W0/FAEAYrcdl/NZsv//ji7Q9rubCCOPa06VjXf/0aXL8Uf62AcPBP8FMtpZQQSiOkrLfbHvPy+2X+0zGl0XfwweJASV4URV5QrEy22/GPn+ufP0bib8UFXuxMv8GjlGKO5xQ0l7ZbzQ08J440WXZIndfUeRrDbJHSHt4xHF5frSgnkUeJFThaCQy1MntCIEY9HuclheUipyY4r3FaFnGqqnWZU2/8NX4V0H7vghaec7CQRUv+uSSkxHmEHJqXtfplCGOnxxeYBookole9LnIIgKSuV2ACSqQQwuGrEEbmdTuInwaSLG9/v3pxDB9i1Ux2UYk96jikwOUXIYxNULkXL54u0fZV18ygzkmK9i0LDzRGODIhpC9UGJv0hq+xPBNWhnFwLFKUWM0YY35Ena2XWyUuQIVPOnJyx+OCWnNhaLPGCXJI2fIB3+5rx2e7g1PyAIPJB/zUuuHh9wjafn1mJweqVkcbwLPKO9gQhuaSriba8m940bv3X9HVaZQAah+BAhZ/YiHicSQINIAtSLx6B5+JwQPfaTRQO5RFcQwbn1mr+y1rWaJ5EWeAJIdv8YvoVn8QoCyhV6WGE7R6RF2fnUJ2ObEMKM6OdSCdzPniUcqBFN/weR1HPIBFh2csU6mTsGzPnxO9YhddDcg1zGD62P/uH4xzF5fK6OXI+hVaTsZsOzNkpOg6UlTkkL5VrZsr7/7h4ngH6kk2eywfNSwLdwgZoIGdhKpb4+7dulavMozde/4FTh1cyz57u8Ium6pJbJCgCk2Cb5thmbfTQCUl9P41BuJ6YKKWfbYaHbWh0mxSnOO+WqnIDeSBQdMUXz3spNTcfQaHQrTJ5dgw2yVx37CYuuCJaUqK9FB0BHXkEaxVD9jldI0GrMTt0MBPvkkj3goYp3nNbbmGxguC+pqBF9DAuMMTY2Nv7K4gZ96NrQ/lTDQaH7iO9cEj1B0JalnWHli962E3ptY9g5Pun9hph/je7QX+Mn8H7aSR1MtBhjI1ueuBAOfeVQKoQUG05EZwvnT/Ks7QtqxRZEVRLolGsMvfh7EC8r0Ia1ymbm+iyCVYfSNBnwmUJTk1wHNkoQKHQ+1GfHAR1aF4LaxSGptXWevAheF1/lCB3YbtkXxsdcVgvmRR4nSaEdXkBCOXpmrMv8Cc4KDecdWlf2hVqF7CfCWzK3uk1cQFAgwdp9F0BU6oCR/WPIXYpa5yJ9jc1fDvvb2fQNlIl0KdSxqvgjDSqIkwPw0xdrD3IHjAzvqp+98Y4MB1UTjQNjA1pg5dc09PnWChdfMMYosfBM1DDttuL01mS3N4fU0P3JBl/XPoeVdDTlURJirEgLEVac1DvHtPJci2d3Y3xWZmbuaQAfXmM/WlN/RwMR9rBQRBYkf12d1M6s2XRwN6uu1enztORODcjERhjt4MJWGEzBjuFIUmn9iN4ozCWw5c0B2fxGsrpjWlnjgThu8m80D3VdV04QRGR3bpGSqlL2Voc0PBYSGaJcVpoH28ZQwg4Wy/0c2NnLBK75XY9CGcDRC0mQorpFmaIk4+OZhmfQddN8+U7Fr3/S0H/gDmnQ0Ggy8O9/W7QZSh0zuCSuedMf8cel3T9y7yuxru7vPRABmzjyfimzXfvyNgenZT/9oKEEK7fkYgiO9D2O3ZKZOzB2HSF/LLtZRP7yJQNpsdeoz4EA7p6mkOwvJllzza34AjNZuubp5mpw08Ps9BWErG3k84pFHgIGL7qTC/WzLjqurProjCkLdPCKmebWimNkRzYQ4HYp+YGn5XhmshM92Ag3QXbhBYdbiBi0WnYwvjjB2lpwEIQyWsKtZWVWXssyRcwTUlu2w6EU4KqOkvvr3sz0ZT49KFwZsP/K83/EA4+gguCerTGsJazofL4UhU9rosy75tGNJk9GKEvo4QknUkTZbD+dMQxquFhNBiId0XIG+Pi4UoSuLqoxn+AsC3We/eG16JAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 1280,
            actualDps: 2400.0,
            magnification: "40%",
            count: "1",
            spawnTime: "108.3s",
            spawnTimeFrames: "3,250f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2210Data;

