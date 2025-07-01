// Stage 1391 Data
import type { StageData } from '../../app/stage/types';

export const e1391Data: StageData = {
  eventId: 1391,
  eventName: "超拳獣ブンナグリオス大降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 391,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "百獣王Ⅰ 極ムズ",
      baseHp: 1200000,
      width: 4300,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "30",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 800000,
            actualAp: 11140,
            actualDps: 13925.0,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "714",
          enemyName: "超拳獣ブンナグリオス",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 3600000,
            ap: 48000,
            dps: 9056.6,
            speed: 11,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5050,
            freq: 159,
            foreswing: 40,
            backswing: 11,
            tba: 60
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 48000,
            actualDps: 9056.6,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "百獣王Ⅱ 超極ムズ",
      baseHp: 1300000,
      width: 6200,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "640",
          enemyName: "超豚獣ピーギィ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwQEBAUKEA8LFRQOHxwUKicXMy0kMjAWPDQgS0IhWk4jXVEkYlVFUlAnaFwpbmEqdGVHaWYte2wxhnZUf3k0j342lYM5nYphj4yJh4dAs51noZhpubBqycF9xrpwz8Z81cvBv7+F4daO6t3W1NWY8eWc+O+h/u7i4uKn/vWv/v65/v/B/v/M/v/x8PDh/v////9vSoQDAAAAQHRSTlMAChUjPFNllKZ+t9n2/3Lpyv6t/P/a////////////////////////////////////////////////////////f25c2QAABbNJREFUWIXtVtuWojoQtb0rRMiEgQByEy/doqI20CTY+v9/dSrghbaZnofzOrVwEcOqnV27KpW0Wv/sn/2z/2mdyVCVJg0fJoNe++/uXRX7URap37/09Mgn0nDS+dFd0teHND+HowaA6blIt2ufqJOXP5Efa1GWHjZpghqW6eCUHY4pY1uKerXpB9oErTiLd7sDp00StNR1AV93aVHEZCAmXoSvCtF2uuLvQE9OLN5sDtwfNhKc0CLZxbs4y08x6ouZoTRq/fLV1kgWnzVWZPkxPnJ/0BxhW45O4L9L8qwIIch2dxhuscKi8W+90+qiuMiyNGfcR8N+txGhTzIeb3ZpnjGmD1svEg05i44nfbXqtQZTWD/ZHNPDdhuv6yrdCXRHiBzZMcnAirXSU/E2PzCesZitey054jCfJJsoOZ/W0vdE9dA0DMWSTACwnCAU8Twv/xTRsIcTVs4nOdtq4wb+XZSceQbrp6UTqEB0Vg7BeIQwL5HzJNSlZgUmlPPd5nDcJMKNxwhND+wKkBUHTAEhT+JYv+awp6q/RnWoCdJzBgjxrlyJoekpe1jBCMl5mqUsxVUVqialJr2z6SrExChM4jQ9VqypX1QDXgnBV+tDEfoHvqoUmKiD0S/D0brX5Q33zUVTzvJKuIyvQl46rsJKivwUoeh3fzAmjxQMkGZjBYpuhC0vmOF1kRyzr8ZX+/cVv45jpPZrYbcVamKDUm04wZ5nzdH0zDbRMc8qChUT7n98hleAIkb+x7s/vnWNAf3dHRmGsSAoCExnQRHd5iKCQ5LfGeSZSa+IRYReL2B73LsB/GqNKJEMbC5N01u82QjpUcYLxlh+h8ivImYsqfwvl/drN+gSqlFj0lK0pWtZwWLmBhQBRhgd0yR90iLLC216udrrtRJ7xCB92ITe0rLs2SIwbddzDMBAZBom7CtAsUKf4Pp+eQce+NaQhBxDbRmYljNfeKZtW/O3hWUStH1yvwYQou1lD4Ow1pHasr30TMudz13LtoHIzA5s9NgGNwK+BvIhcP5A6LKv7aY+DhaOZXmLuVMBBJZrEPpMgWlAYIqmnwJmf5EeAENtPrdtEzS0LduqADSNPxFgR/wOEVRp2H98Ko9+INH5DDwFAEjgXAHyZ4Ad/rg87OMB0JbNLwDzMoTvAAneV777d1EJyp1AB90BrBuAY5D0OQvcKKvgUxc6Xl6HPwDMLIfiwzeALUh3eYU+d0D6K6ntqOcQ5vB20Jo/VyL0uFBHdnGONXVQ78lqKeIjC3NIp4evzaRupy1C2zOncr/1xQZVGu91IArKbRKBGbQ4J+TbqdbDM1FI10qEUERJO2j1RIGnRE+2K03udZ8YtGVHbMZqM5VMICJP09gXCvyI0VQnhK599HwyDgzYTLU0CBFsD/n1nswyjayjIzudEvPb1aKLnLl1F8GaldvSpSiqBZEfYugzRbHVpYZDcagtHPu2n8sYIBuBUZ7GdwQm9sNUaXAXKrjgagbLMgbIQ6lGoKHtqV7QeW40XWyETbADMtYozJ0KYV3U6olx2nCzugUB8VuCQqmCSAQMIAqaFLeNzU6rpjP5amPNAYTZsuxqNiSiQrDLA7YoODwsVH66RY4Nzzad5UJwN90FbCkbhHWBBNLh3hD6U6z+eIGcaB6s7UItWE6FEFAHZrwZdNjSfuAvrIMdx3ZI8DYzoZChsBcLDRAc03Bd1wtM3Hyxq5lKPcdCxFksXMHBmb1RLYCSNmaBpSGMmi8l9RiI49FxdygbBtEotIT5jJiuTeDsRUizlD/dfh8xIBpo4riQMMYy/DBBmkdladhTyYz+NQLRFzxZ5KlPAmhY7U6n3cXV9aOa+at1iFEu08b0dmqMDRi9tF4UQ/rBsdWGW8tYlVQZKYoso+oRdhuJtyIriiJJkjoeD/pPBdWelADwTZKFA8BUmRdu5VuRALlCEACTEuA/ksk8d+Nsa1IAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 980000,
            ap: 4500,
            dps: 3648.65,
            speed: 8,
            range: 200,
            rangeType: "範囲",
            kbLevel: 2,
            money: 700,
            freq: 37,
            foreswing: 14,
            backswing: 17,
            tba: 12
          },
          stageStats: {
            actualHp: 980000,
            actualAp: 4500,
            actualDps: 3648.65,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "714",
          enemyName: "超拳獣ブンナグリオス",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 3600000,
            ap: 48000,
            dps: 9056.6,
            speed: 11,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5050,
            freq: 159,
            foreswing: 40,
            backswing: 11,
            tba: 60
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 48000,
            actualDps: 9056.6,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "110.0-113.3s",
            delayFrames: "3,300-3,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "586",
          enemyName: "ミッドナイトナカイ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 300000,
            ap: 23000,
            dps: 16829.27,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23000,
            actualDps: 16829.27,
            magnification: "100%",
            count: "1",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "640",
          enemyName: "超豚獣ピーギィ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwQEBAUKEA8LFRQOHxwUKicXMy0kMjAWPDQgS0IhWk4jXVEkYlVFUlAnaFwpbmEqdGVHaWYte2wxhnZUf3k0j342lYM5nYphj4yJh4dAs51noZhpubBqycF9xrpwz8Z81cvBv7+F4daO6t3W1NWY8eWc+O+h/u7i4uKn/vWv/v65/v/B/v/M/v/x8PDh/v////9vSoQDAAAAQHRSTlMAChUjPFNllKZ+t9n2/3Lpyv6t/P/a////////////////////////////////////////////////////////f25c2QAABbNJREFUWIXtVtuWojoQtb0rRMiEgQByEy/doqI20CTY+v9/dSrghbaZnofzOrVwEcOqnV27KpW0Wv/sn/2z/2mdyVCVJg0fJoNe++/uXRX7URap37/09Mgn0nDS+dFd0teHND+HowaA6blIt2ufqJOXP5Efa1GWHjZpghqW6eCUHY4pY1uKerXpB9oErTiLd7sDp00StNR1AV93aVHEZCAmXoSvCtF2uuLvQE9OLN5sDtwfNhKc0CLZxbs4y08x6ouZoTRq/fLV1kgWnzVWZPkxPnJ/0BxhW45O4L9L8qwIIch2dxhuscKi8W+90+qiuMiyNGfcR8N+txGhTzIeb3ZpnjGmD1svEg05i44nfbXqtQZTWD/ZHNPDdhuv6yrdCXRHiBzZMcnAirXSU/E2PzCesZitey054jCfJJsoOZ/W0vdE9dA0DMWSTACwnCAU8Twv/xTRsIcTVs4nOdtq4wb+XZSceQbrp6UTqEB0Vg7BeIQwL5HzJNSlZgUmlPPd5nDcJMKNxwhND+wKkBUHTAEhT+JYv+awp6q/RnWoCdJzBgjxrlyJoekpe1jBCMl5mqUsxVUVqialJr2z6SrExChM4jQ9VqypX1QDXgnBV+tDEfoHvqoUmKiD0S/D0brX5Q33zUVTzvJKuIyvQl46rsJKivwUoeh3fzAmjxQMkGZjBYpuhC0vmOF1kRyzr8ZX+/cVv45jpPZrYbcVamKDUm04wZ5nzdH0zDbRMc8qChUT7n98hleAIkb+x7s/vnWNAf3dHRmGsSAoCExnQRHd5iKCQ5LfGeSZSa+IRYReL2B73LsB/GqNKJEMbC5N01u82QjpUcYLxlh+h8ivImYsqfwvl/drN+gSqlFj0lK0pWtZwWLmBhQBRhgd0yR90iLLC216udrrtRJ7xCB92ITe0rLs2SIwbddzDMBAZBom7CtAsUKf4Pp+eQce+NaQhBxDbRmYljNfeKZtW/O3hWUStH1yvwYQou1lD4Ow1pHasr30TMudz13LtoHIzA5s9NgGNwK+BvIhcP5A6LKv7aY+DhaOZXmLuVMBBJZrEPpMgWlAYIqmnwJmf5EeAENtPrdtEzS0LduqADSNPxFgR/wOEVRp2H98Ko9+INH5DDwFAEjgXAHyZ4Ad/rg87OMB0JbNLwDzMoTvAAneV777d1EJyp1AB90BrBuAY5D0OQvcKKvgUxc6Xl6HPwDMLIfiwzeALUh3eYU+d0D6K6ntqOcQ5vB20Jo/VyL0uFBHdnGONXVQ78lqKeIjC3NIp4evzaRupy1C2zOncr/1xQZVGu91IArKbRKBGbQ4J+TbqdbDM1FI10qEUERJO2j1RIGnRE+2K03udZ8YtGVHbMZqM5VMICJP09gXCvyI0VQnhK599HwyDgzYTLU0CBFsD/n1nswyjayjIzudEvPb1aKLnLl1F8GaldvSpSiqBZEfYugzRbHVpYZDcagtHPu2n8sYIBuBUZ7GdwQm9sNUaXAXKrjgagbLMgbIQ6lGoKHtqV7QeW40XWyETbADMtYozJ0KYV3U6olx2nCzugUB8VuCQqmCSAQMIAqaFLeNzU6rpjP5amPNAYTZsuxqNiSiQrDLA7YoODwsVH66RY4Nzzad5UJwN90FbCkbhHWBBNLh3hD6U6z+eIGcaB6s7UItWE6FEFAHZrwZdNjSfuAvrIMdx3ZI8DYzoZChsBcLDRAc03Bd1wtM3Hyxq5lKPcdCxFksXMHBmb1RLYCSNmaBpSGMmi8l9RiI49FxdygbBtEotIT5jJiuTeDsRUizlD/dfh8xIBpo4riQMMYy/DBBmkdladhTyYz+NQLRFzxZ5KlPAmhY7U6n3cXV9aOa+at1iFEu08b0dmqMDRi9tF4UQ/rBsdWGW8tYlVQZKYoso+oRdhuJtyIriiJJkjoeD/pPBdWelADwTZKFA8BUmRdu5VuRALlCEACTEuA/ksk8d+Nsa1IAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 980000,
            ap: 4500,
            dps: 3648.65,
            speed: 8,
            range: 200,
            rangeType: "範囲",
            kbLevel: 2,
            money: 700,
            freq: 37,
            foreswing: 14,
            backswing: 17,
            tba: 12
          },
          stageStats: {
            actualHp: 980000,
            actualAp: 4500,
            actualDps: 3648.65,
            magnification: "100%",
            count: "1",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "640",
          enemyName: "超豚獣ピーギィ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwQEBAUKEA8LFRQOHxwUKicXMy0kMjAWPDQgS0IhWk4jXVEkYlVFUlAnaFwpbmEqdGVHaWYte2wxhnZUf3k0j342lYM5nYphj4yJh4dAs51noZhpubBqycF9xrpwz8Z81cvBv7+F4daO6t3W1NWY8eWc+O+h/u7i4uKn/vWv/v65/v/B/v/M/v/x8PDh/v////9vSoQDAAAAQHRSTlMAChUjPFNllKZ+t9n2/3Lpyv6t/P/a////////////////////////////////////////////////////////f25c2QAABbNJREFUWIXtVtuWojoQtb0rRMiEgQByEy/doqI20CTY+v9/dSrghbaZnofzOrVwEcOqnV27KpW0Wv/sn/2z/2mdyVCVJg0fJoNe++/uXRX7URap37/09Mgn0nDS+dFd0teHND+HowaA6blIt2ufqJOXP5Efa1GWHjZpghqW6eCUHY4pY1uKerXpB9oErTiLd7sDp00StNR1AV93aVHEZCAmXoSvCtF2uuLvQE9OLN5sDtwfNhKc0CLZxbs4y08x6ouZoTRq/fLV1kgWnzVWZPkxPnJ/0BxhW45O4L9L8qwIIch2dxhuscKi8W+90+qiuMiyNGfcR8N+txGhTzIeb3ZpnjGmD1svEg05i44nfbXqtQZTWD/ZHNPDdhuv6yrdCXRHiBzZMcnAirXSU/E2PzCesZitey054jCfJJsoOZ/W0vdE9dA0DMWSTACwnCAU8Twv/xTRsIcTVs4nOdtq4wb+XZSceQbrp6UTqEB0Vg7BeIQwL5HzJNSlZgUmlPPd5nDcJMKNxwhND+wKkBUHTAEhT+JYv+awp6q/RnWoCdJzBgjxrlyJoekpe1jBCMl5mqUsxVUVqialJr2z6SrExChM4jQ9VqypX1QDXgnBV+tDEfoHvqoUmKiD0S/D0brX5Q33zUVTzvJKuIyvQl46rsJKivwUoeh3fzAmjxQMkGZjBYpuhC0vmOF1kRyzr8ZX+/cVv45jpPZrYbcVamKDUm04wZ5nzdH0zDbRMc8qChUT7n98hleAIkb+x7s/vnWNAf3dHRmGsSAoCExnQRHd5iKCQ5LfGeSZSa+IRYReL2B73LsB/GqNKJEMbC5N01u82QjpUcYLxlh+h8ivImYsqfwvl/drN+gSqlFj0lK0pWtZwWLmBhQBRhgd0yR90iLLC216udrrtRJ7xCB92ITe0rLs2SIwbddzDMBAZBom7CtAsUKf4Pp+eQce+NaQhBxDbRmYljNfeKZtW/O3hWUStH1yvwYQou1lD4Ow1pHasr30TMudz13LtoHIzA5s9NgGNwK+BvIhcP5A6LKv7aY+DhaOZXmLuVMBBJZrEPpMgWlAYIqmnwJmf5EeAENtPrdtEzS0LduqADSNPxFgR/wOEVRp2H98Ko9+INH5DDwFAEjgXAHyZ4Ad/rg87OMB0JbNLwDzMoTvAAneV777d1EJyp1AB90BrBuAY5D0OQvcKKvgUxc6Xl6HPwDMLIfiwzeALUh3eYU+d0D6K6ntqOcQ5vB20Jo/VyL0uFBHdnGONXVQ78lqKeIjC3NIp4evzaRupy1C2zOncr/1xQZVGu91IArKbRKBGbQ4J+TbqdbDM1FI10qEUERJO2j1RIGnRE+2K03udZ8YtGVHbMZqM5VMICJP09gXCvyI0VQnhK599HwyDgzYTLU0CBFsD/n1nswyjayjIzudEvPb1aKLnLl1F8GaldvSpSiqBZEfYugzRbHVpYZDcagtHPu2n8sYIBuBUZ7GdwQm9sNUaXAXKrjgagbLMgbIQ6lGoKHtqV7QeW40XWyETbADMtYozJ0KYV3U6olx2nCzugUB8VuCQqmCSAQMIAqaFLeNzU6rpjP5amPNAYTZsuxqNiSiQrDLA7YoODwsVH66RY4Nzzad5UJwN90FbCkbhHWBBNLh3hD6U6z+eIGcaB6s7UItWE6FEFAHZrwZdNjSfuAvrIMdx3ZI8DYzoZChsBcLDRAc03Bd1wtM3Hyxq5lKPcdCxFksXMHBmb1RLYCSNmaBpSGMmi8l9RiI49FxdygbBtEotIT5jJiuTeDsRUizlD/dfh8xIBpo4riQMMYy/DBBmkdladhTyYz+NQLRFzxZ5KlPAmhY7U6n3cXV9aOa+at1iFEu08b0dmqMDRi9tF4UQ/rBsdWGW8tYlVQZKYoso+oRdhuJtyIriiJJkjoeD/pPBdWelADwTZKFA8BUmRdu5VuRALlCEACTEuA/ksk8d+Nsa1IAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 980000,
            ap: 4500,
            dps: 3648.65,
            speed: 8,
            range: 200,
            rangeType: "範囲",
            kbLevel: 2,
            money: 700,
            freq: 37,
            foreswing: 14,
            backswing: 17,
            tba: 12
          },
          stageStats: {
            actualHp: 980000,
            actualAp: 4500,
            actualDps: 3648.65,
            magnification: "100%",
            count: "0",
            spawnTime: "340.0s",
            spawnTimeFrames: "10,200f",
            delay: "133.3-133.3s",
            delayFrames: "4,000-4,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "586",
          enemyName: "ミッドナイトナカイ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 300000,
            ap: 23000,
            dps: 16829.27,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23000,
            actualDps: 16829.27,
            magnification: "100%",
            count: "0",
            spawnTime: "420.0s",
            spawnTimeFrames: "12,600f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "百獣王Ⅲ 超極ムズ",
      baseHp: 1400000,
      width: 5900,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "714",
          enemyName: "超拳獣ブンナグリオス",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 3600000,
            ap: 48000,
            dps: 9056.6,
            speed: 11,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5050,
            freq: 159,
            foreswing: 40,
            backswing: 11,
            tba: 60
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 48000,
            actualDps: 9056.6,
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
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 200000,
            actualAp: 14000,
            actualDps: 4772.8,
            magnification: "4000%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "86.7-100.0s",
            delayFrames: "2,600-3,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1799982,
            actualAp: 40500,
            actualDps: 39193.56,
            magnification: "1800%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "百獣王決戦 神ムズ",
      baseHp: 2000000,
      width: 5800,
      enemyLimit: 6,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1069",
          treasureName: "ネコボウラー(780)",
          probability: "100",
          amount: "1",
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
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 3000,
            actualAp: 1200,
            actualDps: 2400.0,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "636",
          enemyName: "デヴィル夫人",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 9500,
            ap: 8000,
            dps: 5853.66,
            speed: 18,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 850,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 57000,
            actualAp: 48000,
            actualDps: 35121.96,
            magnification: "600%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "6",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "714",
          enemyName: "超拳獣ブンナグリオス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQECAgIDAgMDAwMEBAQGBwgHCAkHCAkOFRkRFxwSGR4RICESHyETIyMZJiwbMDMfMTYlO0IfP0AsREwhTlIyT1cnYWY5WmMmcHM6aWhCanEpfoFBdXg0hIgokJVYhoIsmZ0wmJ1hl5E8rK8vs7VrqqJGu75Hw8VAzM97tK9PycpXy816xLxj2Ndn19iK2NF55uNu6+2O5eCH7u9x+vqZ6uOc9Oyw7uuj/vHI9PKy/v/B/v/a/P38/v/BpmwLAAAAQHRSTlMAJjvV/FdzoYu7x+P/hrAa/+f//2z//v/////P/2H//5D/Ivr//2H//NI2//+N///B//8D/47/////////////+WzdFAAABfBJREFUWIXtVm1bozgULS0tpY01TQwBRBABQWGpsCjQJvD//9XetNaZVXemH/fD3OexRdJzcl/Ovclk8sf+2B/7/9vfL6/P3y68vv79K9x8MddOT8/tcKSYTn9ef36V3/N+EJgIk9VCgZ67cXh5nGj65gfFQz++/M53bYkpA47J5LEex8PLg4bJ8oyvxv7xdwRgS8wZWS+ODGN9Z1BqnBYSKbOHCwgm0xVhjJiTu6KR+52LCDky3GXtLrgED6nAlFKmT2+Tot4VNrGQcXU9eSp22f1F8A1hQLBdzq+DJCuKBAX2cmtM7rMsuYBAMxEBOCVr+OfGToIk0re7+SKY3CWBe3eBA5qmTRfG1qYrkIQZBJaNzSiaJTfXrh1cQnCyVZFxyN00iIgb6SSz3FsDW8HNxQTzjRUU1mRiudSyGbEtUBiz6Pxi/NVmawfuXDMZIUpaBEM1GVlciN/E0b6LAtsKCGKQUwBTRUSXv8cqW4k669oErEgwosQL4xABnFzogVGJqkvqtgyiJEuITrxG5qGjU6prl+C1eNjt961okjKLoiKhJBZlXOUhovbqEoKlkHtl3V5mrpvsRMmqtCobGceeD2WYT3+Nn4Z5fGIQVVbaWTFUZdqGce6nflmZ0xXDvwBDA+QlRqmUAhjatrLrrkJ5A2yi24shhYz43Fyuvk+GhhnnMXYcVOasFADwQyEd3SvbsmpLv4xRkOqUY+asv2UA1Tiejj2P6brugw+hVckKepMTpGMEL/VQ+jojjONvFbFm1PGAxKEIM9YJznshUhshxlFYNZXHbNIIimBYEOM7AtCc4znUcUB0Hi5bDzIhfMsrhWwhCcp4PMQ6BV2aX+ELA1Pi+Ax5DsaOj/wyh2q0DnzmZVVVjSrMvpENaJN8I2qNcEXgYAIhwzdCGPK47zr46ONYlqk41lakMHEINYzPnTknHsPEodgnsAUHL5B3hBwVkco8PhGEiCkGxD/7YEBxVMcqLDl6wln7ziC6XKbggZBCEAbcEITzWdYmbMtU13LIIfMo5r6enyQpW54OXjzINOxjnXN8/Nn6swcQGECBmkMO4ckhVCUBKhB6YRjqGHoaYdXWVDHw7SeCKfjFYEn5QTiFSpIuj9u2BHgnW6KDkEAPSO1BMQS4+SIjNcyhAqpIqg6Iiy4MfT/uIBCZ6gADASkPMAcxsS/DBZJwzB7sDbVwuO6AcKCKp+Q7uvIb/jwPUkRsTj53w5QyhCG/4ALn1GLk2A1nE5sZwBHFdsqwRYjLv8yWKWOQO2YR24PwbW5B43zgZalp8BbObcThfHFdl3yVogECYb5DY6UDmnjnIh7lBymfroEd4kt8x48s/J6C5cb4iEVpnHlOSLhNKQxRT551JB31ozWnUWAVgY7i0Hrv5yn2/A9BLAgY9VIfu9SBUP2yfpe/d9xkgXGY0DIiOo4CdCLQ1JbL+fxcSIsgEpa5h/3cz+qyAAYhSvo+Rpco8K2yKRPb5ucQVjBDMGLLY28tiBV4voVzh4YEd/WuSqD5vDA/N95t3+2ElPItsbEi1a42JlbqgPY4BrKGM8TRScxJnAdV39a7gMXNMLyL7vmpHsZ9d+jbt0QJ2aCeQ3QlS0gu2S4m2oxwHw7ivPLbUe76odnfbNqmSk/uPstuN4zD4dAeKnql3OegXQwk0EUIpL6xXJ0yXnow1fvDMAzjob65jRfnk+RlGNq679um3yf6MYJTY3Fu+xC67UZ1E2ALxaLvYJtOjuNQPEz8j0vFkxxhpPV91zbF7JRVcwX3BsKyJHoT+zrZdUMV2EF3APyhG8ZRNs+TxdWZ4LGH+IFWdHVyfXqlGTCiIfW226mzqG7E0GW7FjbpIVi5H5qfr8YPBSzVh0NVJOe70lodAxbDyPbzcg/12VeplbVN3R7G8W3XNf++2T7cZ0X0lEX35/uqyWCOQhVhzMC5s7293W7gon1XFLv+0IMM/vpyNX8A6E+33bmJKYyYlbkyF8aP+fD4lBVPT09f4d/YfAmXwuPTdGnOZjP9P2w2M5dfrgX/AGoI5uYZ99jqAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3600000,
            ap: 48000,
            dps: 9056.6,
            speed: 11,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5050,
            freq: 159,
            foreswing: 40,
            backswing: 11,
            tba: 60
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 48000,
            actualDps: 9056.6,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "655",
          enemyName: "超牙獣クロコックス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQOAAAGBAUEBQYFBQUGBgcGBgYGBgYGBgYHBwgJCQkLCwsvAAEPDw8QEBAQEBAVFRUVFRUWFhYWFhYYFhcXFxdQAgIaGhoaGhocGxsdHR03ExMgICAiJSUlJSV7AQApKSguLi4wMDAxMTExMTFKJiZoGhqkAgI0NDSUFRU8PDzwAQK9GRlLS0tQUFBpaWlra2t7e3uMjIyfn5/Ly8v7+/sOk3ijAAAAQHRSTlMACu0WICv/N9lEyv9lq1aCkb3/dpv//7Xr/1R4oP/Esv/e7P/R/v//8f///92Bqf/8////////t/7E4f3/7f//6GrlYQAAAudJREFUWIXtVFt74iAQJU0yMWpiJFJlW7yhUEPthdqtl2r+/79ayKV2637b3fecFwLfnMMwcyYINWjQoEGDBg0aNGjwDbyWWPRCr9q156n31/A/wB1v9JLEldxck/5/JxG9rK5JUn6nT880NauTTsa38T8KdF9epx0Wlfk8PQMLkD/XgjE5jMezRfq9wvip0wE2LL4HFOgELTYYALDgjFAx/FbAz5YmXEyQLYLEQNqawOoZgDJCAEj4rUJPGgHIht1uPOecAqEAr68do5BlSvFeFeaG7pnj+Mh3PjZ33GacUXshpVYNrqdQgko1jm1onAmapIuq3ChKBn1US9woG0qk4WK4AMkkny1aRBQpyUFBCRfZnRr2ffvtdRPFissUsOxSwGrY3BjFmGA6N5Tucmnqw4S6m9yEqMuIUGWcEkycaZgazqet5MC1GCG3tXykZGQ0gXEhmH24phXFlP6DkeV5tM+P7cNpSw+aKmEisel33PNdx22LjJzVszJ1e4LrS1l0OqJ1fkC7fJfmuyR/279v3tv1tISDZHROl+pi4cVJpSCChxvkb3+gcB8gsxyC9cPD/lP7u4xWPTNQvKBmlsxqAcdFTugYAyAUOChGnud+sgIKQ2+mbNJSKcbLMpo6AeaVQHj7AwX3PgrvHTRwnQmK4+B3WzrpYM4g07ZLZRmptDNQCvDotDM1eENv+do7rcP8ZrfbHb/a2Buz8m7xOL027n3kGMuyCFjnp3SXH5Njvm/n+1m+PbwfTslXBTSxDSAc9Mv0GjpTjUHVReA6UyKTAjNBTXsJNtAX03lrR4lzYNIIgPUi33zY5+wjXNAJ09GFgH0yG45A/lwV7RfAjSOpDaeUWBJjnA3T3mA8m40//WAczw/CMO7bEeLJCPDjqvIEEwWkFMRoydEgSUPP+XozCnr91pX9bZj3EaDW2GWyW611cWDz2W42Eq5a/SS4EPDTqH1lrYtr99aLnbr67fYNRiDq+TXvFyuYVMqsEw+aAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 2900000,
            ap: 30000,
            dps: 7438.02,
            speed: 40,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 3500,
            freq: 121,
            foreswing: 8,
            backswing: 113,
            tba: 0
          },
          stageStats: {
            actualHp: 2900000,
            actualAp: 30000,
            actualDps: 7438.02,
            magnification: "100%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "614",
          enemyName: "超爆獣アリアント",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 135000,
            dps: 9396.75,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 280,
            freq: 431,
            foreswing: 160,
            backswing: 47,
            tba: 134
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 270000,
            actualDps: 18793.5,
            magnification: "200%",
            count: "4",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "93.3-100.0s",
            delayFrames: "2,800-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1391Data;

