// Stage 1357 Data
import type { StageData } from '../../app/stage/types';

export const e1357Data: StageData = {
  eventId: 1357,
  eventName: "極悪のトカゲ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 357,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "悪色吐息 超極ムズ",
      baseHp: 2500000,
      width: 5200,
      enemyLimit: 15,
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
          treasureId: "10689",
          treasureName: "洗脳されしネコキングドラゴンへの進化権(洗脳されしネコトカゲの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 40000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "4000%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEKCgoUFBQbGxsmJiYsLCwzMzM6OjpAQEBISEhNTU1TU1NcXFxkZGRtbW11dXWAgICMjIyXl5eenp6lpaWpqamvr6+1tbW5ubm/v7/FxcXKysrPz8/U1NTY2Njc3Nzf39/i4uLm5ubp6ens7Ozw8PD09PT39/f6+vr8/Pz+/v7///+fLMmLAAAAQHRSTlMACBMcJS88RllmcXuMn7XB09/q9v////7/////////////////////////////////////////////////////VAf9PwAABkhJREFUWIXtVtl2qkoQNWdITJy1aEABmREZBBVBEPr//+pWN8SoOcm9L/ft9FoqtF3zrl3d6/1df9f/un4+99+Go/Fk/Otu+/fr8Pk/SL8Mp4Ks6qZheDb0P7ZHM3llwK9vJFsr06UdnWm3YnhFf4bMMHGTKKPu7F/knxYqvV178XUAsF7OxhKlJ9xYDb9XMFmVdwqoDLYhU5pYRInYewaj/s+v5YdqQ8vmQ9wW1ISuA7aTqaAk+KsSnUwGXyVznl7ioqGXCxcPCfHw26KHNhwFjLT0RNpsRZj92Y2+zY+WBX4VCvA3N66zzqEMwKFCWgTeRn39LI3VH0J4RA/qPXpPxDWX8vd1l5fYUE3iK06G2dyOH6SfR1NhpdtOkJ7qgxfUshg0JnOEBrvOvifaDU2IaLGX4/zBOhh+cq75wWMcJopCaa1z0V3Syvs6T4UDJn+Vft+nf8V364o2+MHqOfhleWyvagPIvS4QWPKf9X0SFj7bxHLlVfs3i//oXz4qesWHB7TBLDt3iHqVWufP+b5FAfCNvKB/WLJNy0PuT28VzPwOOEGbBlc0Yh5SG/1Kv1VwkBimnVsFL4S7T2OpM0mcXOO5q5gyQZFISvfvaKDqlvnxcqNgjJUpA7qX0vZEBBca2TzpCAdnF1MNvMjH/vboBrGdxlvzFgc/gPl0NEmEPteYOElhWcsaWmgEy5FgODasraUhSPLKOoiqCvDjRsGgbWELfERgcqEn6EqPzcSKUrBiENvaY5bNXQRr07lhGpZC51I1jD2goAeUtYT3aG2lzQNygeB0eyd8cO6A/LRwA9apDoDiyCl70P0cNTalKXj6Sg2Ol8hWVzeFMN7uYSiXtnSmJlFXoDM6A3OzQ7vVwVFVTQBnf8noBVJa+KdWwfpeQW8RHkA0xSBlMK3rfK3wY3XGtK2dliJFk+odjKnav1fwtspAEIDuQMWIdZNCCyNMXm5F9MLtWoQ6gt158NjMU1vWJCAAsNRkfU/XiCzaYBrqAFXVoY+dsERqfKfro/DAJwNYKlweNTAvK9jSco9Abgpmvdmoaw2uSMS1u8NBry+ZAKquyQIIB27agjpmYLjs8takC/5tP1BjxASfuznzotGtuFQ1QwQBkEXQLOhpwGy/512T7+TpEZ5QEDpADQiGDYoiCLqCvOl7GQ3AZAqoz6cBdeF8r4CqA/R86UiT370fYzmjIcagAoLFlATCfWx9zjUW+uEhAFzJ4qk3TWloQv9VppUrazZIBLvwFKbLoIpPlJD0lJ8bR4izWNAf5bHjXnqLBPskWM5JVURoYQmiohxoTs2VgeDZiZIgEiID5oU8CLP2MAa9V8L5wwKvVUmSUvCxh83yiCcKGjpJHIVJnBjSg4I9KamHdZhxiqciB2iIhS4YpUVtM9c0fj8fwcPIbTTBESdYRsJb1YGGVpkMjAGrKje37akivwqA9ZgBe7lmpDg2WTgl4q44+eDy8KpkUz4eN+FzEpMJJzO/OncURvVrqi+fToP9acvhWOyTEgeaB0zECj+b4avM8UTy8b5VlspqRVpOGK2xbtxALG/rO7mrH9me4cpOyw6NnumYbgDdcBybRUU1odrFcbi9Cz7r2oCmjOBtbDRh/dGR7nWwTPQEW8M84uYxqW4UnN+9jtKK+ZaGoSqYnY305sI3kRMqtMxeFjcXpMu2q2OwveqNJKI7myh2hcENHYwlG5gD7Shsp1t9jAO77US6v0lgMuoPx7P59J6RRsBJv7mw2byPTme85ZzPVeG2luurAyd/xQng6YESe+MN/lsVNN6zJIfnLhC3a+LyvSDG/O2TLF8/GA3nGT0wRcdrqiurLVz+HoPw5VW5DyEOPrSJhNZcySciRvvg4bw65ztz/pU83lHAPWWeLnStzVaszoaL1huX9XMCo+/u6s8zmZCVu4FV0IojOz73hu0o0sFO3CX84XJ5s54mvGfX44nmnvYrWB4sFJgZnmNqOC+IZIXTbxX0JjxV7qD3NhVBwajdEUsOIZK2BI/FQr65p2MlxAMju2j2NhgsNgxV0Xw0GtusqdK2GdffxfBzoHWlms8X3RQRFotFy0USz2087f/+UsHLVPE9z3E8NiLljee5rsunrY9rK6v+xvcdmAy+VPCMCF8s4JuF7szHtzeLfwAvl/MUo48f5QAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 39000,
            actualDps: 14810.13,
            magnification: "100%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "667",
          enemyName: "極悪なネコキングドラゴン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 700000,
            ap: 4850,
            dps: 2969.39,
            speed: 7,
            range: 785,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 5,
            tba: 20
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 4850,
            actualDps: 2969.39,
            magnification: "100%",
            count: "1",
            spawnTime: "18.7s",
            spawnTimeFrames: "560f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 70000
            },
            "counter-surge": {
                enabled: true
            }
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
            actualHp: 40000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "4000%",
            count: "9",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 39000,
            actualDps: 14810.13,
            magnification: "100%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
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
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "667",
          enemyName: "極悪なネコキングドラゴン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 700000,
            ap: 4850,
            dps: 2969.39,
            speed: 7,
            range: 785,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 5,
            tba: 20
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 4850,
            actualDps: 2969.39,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 70000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 39000,
            actualDps: 14810.13,
            magnification: "100%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
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
            actualHp: 540000,
            actualAp: 27282,
            actualDps: 19962.42,
            magnification: "600%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "667",
          enemyName: "極悪なネコキングドラゴン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 700000,
            ap: 4850,
            dps: 2969.39,
            speed: 7,
            range: 785,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1350,
            freq: 49,
            foreswing: 10,
            backswing: 5,
            tba: 20
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 4850,
            actualDps: 2969.39,
            magnification: "100%",
            count: "1",
            spawnTime: "123.3s",
            spawnTimeFrames: "3,700f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 70000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 39000,
            actualDps: 14810.13,
            magnification: "100%",
            count: "6",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "032",
          enemyName: "ダチョウ同好会",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgICAgIGBgYGBgYJCQkKCgoLCwsNDQ0WFhYdHR0dHR0gICAhISEkJCQkJCQlJSUlJSUmJiYmJiYyMjI2NjY4ODg5OTk7Ozs/Pz8/Pz9FRUVSUlJUVFRaWlpgYGBjY2NnZ2dsbGxtbW13d3d7e3t+fn5/f3+CgoKJiYmKioqMjIyXl5ednZ2jo6Onp6evr6++vr7CwsLLy8vT09Pc3Nzj4+Ps7Oz19fX5+fn///+Xho0TAAAAQHRSTlMAB3YVvtqMoB/zXyk2Qw9RZHOOMMna9aCyvYVX7nWdy/+0/5b/88rg///Z//D//+LE//L/3fn98fz+////////oApklgAAA8RJREFUWIWlV22TmjwUNcu+UIGKu1t17cpLRAgi2MAmhRCS//+vnov26XSmUxX2zugnz8m5Lzk3TiYDAtnGkJ//FZazWptoPN64S0oWe645Eo+mPu8Eb1hojSOw3riSeFFrHn5/+fp1OIHpSy2DL0zV/OfHj+0Igr3SitO2aTrBDt5wAuuoIZSqanrYb8eksO96go7mPtRgOH6C1hzwWtXJbAT6JCHkSksWz0bPkhlKzZYjp6APtAUCdzx+YoCCcvoJAuiDOjqfILCPWu0/UYKJy7QMP+EIaN1o4d3eQ4QM2/nzPCOWut7cADx9mdPn1du397e59ftI+6h0eXkKTTAse4oAPvd3JMvSNNv5U+P/DLjuLtcQPftz2/Mtw/V3aX4Oslg8midVFmRwpQTIq1lSlnfL3/Asy3Bx8GzXOd+li3No2rYnZNuxd5L12P4T4AhXqvaT0JwduytT4Cb7Q9tyQcgJnfUMOOccjIzxwyputW7DSxm4XHW6q1I4P8tTHOAUqhgJrUVe0IIC/spNco5Ktori/ngSRNCBXkKlFeWd6t3sWg8svwGteZTnaRRE2bmIuNaykGe8rteXMrBWB+gzi6KcQOUCcqpjRJVu6C98t7cvCTCXJZimJDjFOcYn/TkhkHlTnfGKbS7fA+u1UrKhmAQ0Ss9DgDm4aP2LgHtXrNjyoQ1tQ1LI4JRABlpoIRp6LkB4bakiJyx5Xe8wZgVO+2nI4RtXbSFBP9/dYOaG42427luQU5iCEwEUhKuqEqIqbiE4x3QRQBbnacARaTtJCWH58lYrQvYqiEiQ5hkhNMI4yqRqW1XebKbG47cIUxpFpBItzGPaz1JVl/NbCSaOT6Kma0WrlEyhEiSVbLle327nyFlhoTrZwdUgKcz1gib2ZNA+dBKppAIC2o/Ebrl6HrZO0ZypPgSNCsYOa8McuAtsMD+luzqvWsljd+gyh4Gs4ebVRVELFq+twfjNse5ElRWcHcL5YDhcKdjAZfjKusZzjDFPEWsvZWy4Zcu/j0BP+kcEE1v0chQ/RxKgsJVA8KHHE8hPEmxlu0XWUX28jCUQ8AaA19DYtwxaCzabmDG0YixBDd5hxOLiGrwUmxrEG/HlLXSRgIN4I2a3O9BfBOGJYPSTdsOAwBxPgDwO5bOPownMuAEFc8aXI4toJfLgolnZJoOt6BzIa3jiOomgibeZjfiTijzBs8MxTYuU14eVhdAAIchypnevlUjzmsJajNJgcf/09PT4eDd1btKCpk/3Dw+L9/fF4suf8fBw/+T8S8h/jtWr7rL2CkwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 340000,
            ap: 7200,
            dps: 12705.88,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 18000,
            actualDps: 31764.7,
            magnification: "250%",
            count: "1",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 39000,
            actualDps: 14810.13,
            magnification: "100%",
            count: "3",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "2.0-2.3s",
            delayFrames: "60-70f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
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
            actualHp: 540000,
            actualAp: 27282,
            actualDps: 19962.42,
            magnification: "600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "75%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEKCgoUFBQbGxsmJiYsLCwzMzM6OjpAQEBISEhNTU1TU1NcXFxkZGRtbW11dXWAgICMjIyXl5eenp6lpaWpqamvr6+1tbW5ubm/v7/FxcXKysrPz8/U1NTY2Njc3Nzf39/i4uLm5ubp6ens7Ozw8PD09PT39/f6+vr8/Pz+/v7///+fLMmLAAAAQHRSTlMACBMcJS88RllmcXuMn7XB09/q9v////7/////////////////////////////////////////////////////VAf9PwAABkhJREFUWIXtVtl2qkoQNWdITJy1aEABmREZBBVBEPr//+pWN8SoOcm9L/ft9FoqtF3zrl3d6/1df9f/un4+99+Go/Fk/Otu+/fr8Pk/SL8Mp4Ks6qZheDb0P7ZHM3llwK9vJFsr06UdnWm3YnhFf4bMMHGTKKPu7F/knxYqvV178XUAsF7OxhKlJ9xYDb9XMFmVdwqoDLYhU5pYRInYewaj/s+v5YdqQ8vmQ9wW1ISuA7aTqaAk+KsSnUwGXyVznl7ioqGXCxcPCfHw26KHNhwFjLT0RNpsRZj92Y2+zY+WBX4VCvA3N66zzqEMwKFCWgTeRn39LI3VH0J4RA/qPXpPxDWX8vd1l5fYUE3iK06G2dyOH6SfR1NhpdtOkJ7qgxfUshg0JnOEBrvOvifaDU2IaLGX4/zBOhh+cq75wWMcJopCaa1z0V3Syvs6T4UDJn+Vft+nf8V364o2+MHqOfhleWyvagPIvS4QWPKf9X0SFj7bxHLlVfs3i//oXz4qesWHB7TBLDt3iHqVWufP+b5FAfCNvKB/WLJNy0PuT28VzPwOOEGbBlc0Yh5SG/1Kv1VwkBimnVsFL4S7T2OpM0mcXOO5q5gyQZFISvfvaKDqlvnxcqNgjJUpA7qX0vZEBBca2TzpCAdnF1MNvMjH/vboBrGdxlvzFgc/gPl0NEmEPteYOElhWcsaWmgEy5FgODasraUhSPLKOoiqCvDjRsGgbWELfERgcqEn6EqPzcSKUrBiENvaY5bNXQRr07lhGpZC51I1jD2goAeUtYT3aG2lzQNygeB0eyd8cO6A/LRwA9apDoDiyCl70P0cNTalKXj6Sg2Ol8hWVzeFMN7uYSiXtnSmJlFXoDM6A3OzQ7vVwVFVTQBnf8noBVJa+KdWwfpeQW8RHkA0xSBlMK3rfK3wY3XGtK2dliJFk+odjKnav1fwtspAEIDuQMWIdZNCCyNMXm5F9MLtWoQ6gt158NjMU1vWJCAAsNRkfU/XiCzaYBrqAFXVoY+dsERqfKfro/DAJwNYKlweNTAvK9jSco9Abgpmvdmoaw2uSMS1u8NBry+ZAKquyQIIB27agjpmYLjs8takC/5tP1BjxASfuznzotGtuFQ1QwQBkEXQLOhpwGy/512T7+TpEZ5QEDpADQiGDYoiCLqCvOl7GQ3AZAqoz6cBdeF8r4CqA/R86UiT370fYzmjIcagAoLFlATCfWx9zjUW+uEhAFzJ4qk3TWloQv9VppUrazZIBLvwFKbLoIpPlJD0lJ8bR4izWNAf5bHjXnqLBPskWM5JVURoYQmiohxoTs2VgeDZiZIgEiID5oU8CLP2MAa9V8L5wwKvVUmSUvCxh83yiCcKGjpJHIVJnBjSg4I9KamHdZhxiqciB2iIhS4YpUVtM9c0fj8fwcPIbTTBESdYRsJb1YGGVpkMjAGrKje37akivwqA9ZgBe7lmpDg2WTgl4q44+eDy8KpkUz4eN+FzEpMJJzO/OncURvVrqi+fToP9acvhWOyTEgeaB0zECj+b4avM8UTy8b5VlspqRVpOGK2xbtxALG/rO7mrH9me4cpOyw6NnumYbgDdcBybRUU1odrFcbi9Cz7r2oCmjOBtbDRh/dGR7nWwTPQEW8M84uYxqW4UnN+9jtKK+ZaGoSqYnY305sI3kRMqtMxeFjcXpMu2q2OwveqNJKI7myh2hcENHYwlG5gD7Shsp1t9jAO77US6v0lgMuoPx7P59J6RRsBJv7mw2byPTme85ZzPVeG2luurAyd/xQng6YESe+MN/lsVNN6zJIfnLhC3a+LyvSDG/O2TLF8/GA3nGT0wRcdrqiurLVz+HoPw5VW5DyEOPrSJhNZcySciRvvg4bw65ztz/pU83lHAPWWeLnStzVaszoaL1huX9XMCo+/u6s8zmZCVu4FV0IojOz73hu0o0sFO3CX84XJ5s54mvGfX44nmnvYrWB4sFJgZnmNqOC+IZIXTbxX0JjxV7qD3NhVBwajdEUsOIZK2BI/FQr65p2MlxAMju2j2NhgsNgxV0Xw0GtusqdK2GdffxfBzoHWlms8X3RQRFotFy0USz2087f/+UsHLVPE9z3E8NiLljee5rsunrY9rK6v+xvcdmAy+VPCMCF8s4JuF7szHtzeLfwAvl/MUo48f5QAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 39000,
            actualDps: 14810.13,
            magnification: "100%",
            count: "3",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "2.0-2.3s",
            delayFrames: "60-70f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e1357Data;

