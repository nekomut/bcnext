// Stage 1198 Data
import type { StageData } from '../../app/stage/types';

export const e1198Data: StageData = {
  eventId: 1198,
  eventName: "絶・ローリングデッド",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 198,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "進撃の業渦 極ムズ",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 10,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "1000000",
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
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "100%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "294",
          enemyName: "アンデッドサイクロン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 1222222,
            ap: 44444,
            dps: 266664.0,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1222222,
            actualAp: 44444,
            actualDps: 266664.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "100%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 4000,
            dps: 2105.26,
            speed: 3,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 57,
            foreswing: 28,
            backswing: 5,
            tba: 15
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4000,
            actualDps: 2105.26,
            magnification: "100%",
            count: "8",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            },
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3600,
            actualDps: 2037.74,
            magnification: "100%",
            count: "8",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3789,
            actualDps: 7104.38,
            magnification: "100%",
            count: "8",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 4500,
            actualDps: 6428.57,
            magnification: "100%",
            count: "8",
            spawnTime: "213.3s",
            spawnTimeFrames: "6,400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "291",
          enemyName: "スカルボクサー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 100000,
            ap: 7997,
            dps: 8272.76,
            speed: 18,
            range: 175,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 29,
            foreswing: 1,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7997,
            actualDps: 8272.76,
            magnification: "100%",
            count: "8",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6800, 400, 797],
                timings: [1, 8, 16]
            },
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "絶撃の業渦 超極ムズ",
      baseHp: 1000000,
      width: 5000,
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
          treasureId: "10274",
          treasureName: "にゃんこそばへの進化権(チアにゃんこの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "294",
          enemyName: "アンデッドサイクロン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 1222222,
            ap: 44444,
            dps: 266664.0,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1222222,
            actualAp: 44444,
            actualDps: 266664.0,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "294",
          enemyName: "アンデッドサイクロン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 1222222,
            ap: 44444,
            dps: 266664.0,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1222222,
            actualAp: 44444,
            actualDps: 266664.0,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "294",
          enemyName: "アンデッドサイクロン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 1222222,
            ap: 44444,
            dps: 266664.0,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1222222,
            actualAp: 44444,
            actualDps: 266664.0,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "12",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "12",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "418",
          enemyName: "ゲコック",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 700,
            ap: 100,
            dps: 7.92,
            speed: 6,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 150,
            freq: 379,
            foreswing: 20,
            backswing: 21,
            tba: 180
          },
          stageStats: {
            actualHp: 8400,
            actualAp: 1200,
            actualDps: 95.04,
            magnification: "1200%",
            count: "8",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 550]
            },
            "barrier": {
                hp: 65000
            },
            "warp": {
                chance: 100,
                distance: 250,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIEBAQEBAQFBQUFBQUFBQUGBgcGBwcICgsJDAwNERETHBsVHBsXICEZISAYIyIcJiUfMC4iMzEiNTMoPDotQ0AuRkMxRkQ1REMxSEdcTwM8W1ZEWVdZYzRFZmJJb2xPb2hQeHR3dCNagXxcjIaahgxhlo5nn5iRkpO+ogdwrqZ6vLOByL64uLjpxgeI0smM2M2Q39P70gmT5dmX7N/V1dWc9Oef+uyh/u7x8fH+/v7///9pxp3BAAAAQHRSTlMABQwXJy84QEqE28VZZXKIp+yZs//D16fvvOj+3czf/ub//+P//f////7+///9/v///f////////////////8Ab/kakwAABFdJREFUWIXtV2t3ojoUVfBVq2ixWr3qgEBKStqEFlJoknb+/7+6CSDiA53hfr17LRcuydk573Ns/f6PaP1P8Lt1Ex3D6Nw+VY/eFgXzrtZYXpsSwdG90Zihu0mFiHe/+k0JRj5LE/TyNu129HYD+fYEB7vn54/Pl1+/pnoDAn1F8e7tU+Lj2WiiQc9lnOw+JMGb2ciP40AI5rx9ShuMJvLaUyhEunt73r00I+hsUs4TyyMxfLxr4oIR5EJwmnJBl4MG8ioNC3C/iQYDW95dIFr0/lq+MysVkCqg2V8WZbs/Q/xAIBic9//Yiram6eMNqcpLBmIbf5TNWs8wV6v5A6RcHFHwJFgNNEmuXdNEHz25OKRJTAIfJeIYPHKn09XqyajtMNJwELH9hRjzU4YUWiSJsWv2LmrRHiwQE1fBiRMKzshmfEmJ/oKc3nmBASjLInt8rkNnflteMgSBOkXtk+TWuqNK4HnxuYTEi9UjWlUzq92b2kvnkLkijdJaHRDKyPHk4Ib2YEtiKyyPMOSAqJYg9BQ5T+1DefS2kcB+GQAGnZDVuoOnVk5OJns/6rJsGNgrwAV2aHmah2ee5QDlRNvCC+0xYCJySqNTp1KGdP0YnhAI5POMNBgVCqykWzE81L5X8WayfjzzRujlBkZmZoNmBJxzH5fvcVBR+oIJgubaShv0zABXXsi88h4O8anECVInzk+6XUnQ3YbSosQpS495Z0YfgzOnOIFGavwhVbaxx5T/ecZPr8qrMCgvy2uJoQZ4rKqDAKmFtDalgnr1SVgQZEZKR0Zmq20ECZA+wFCSQOVAGYT6JCoQwJAJEolk1dLnCDksy+/sE6AySFeAPT8WBIl02+rdT02bycEBaQJwZh3xbhY18QIiIp8zt6XpWlfOcIEsy1kDTCxMsX+TIHQQ4rGDg4VKpK4r/clT2Ucx9CzLWqM6uUOuWsAC9r1pDAqCwxGWxFF6QQP5Ah+CEz8O70bd/daUaVCL7BUj0AfrQ4nRtW32yymT+aDe3FD1B+/968s/ZDu1vt7tcuvq2NdaOQUyYP73z8/PlwX2B+laEpSNvbO9mnkERPD9R+F1HRZ+pOtNZbTo29MRduwE4qxzgu9XUFQJXQwqc0VbXS8eHgHv/TtnKLohnVfntPZU34D3Snj+q4TnBEneimZVArnP3iCQJR4GPsTOftpi82iuyTjeZFDlXzZuDsZHU+2GFw+GgLwVinh7vC9p5o0elonFaD+sUnC6eBv78rmSkdhDST5yGTRPd6V+Vg2cJMcUvPLk/r4SUjg527X0Lc1tJJVC5FR9ZzRhGTskGREL3Qt/oIpA8hhakMQ0SRIah1g1ep4gzwI+DAJHDRMWgdnFbbFfBDLdmEvgSTjr2WSWs4aLu6UPYQAAwe5sfHlV1FdhqhBvRwsSxXEUuUbPsKn6DU8Hi1g+qb+Y9Os2Tf1u8Y/Ecjm8Hz4sFR6Gw/Lb/XApX24W0/H5uvwv+8U5kstTgwAAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 27528,
            actualDps: 4416.24,
            magnification: "2400%",
            count: "4",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "50.0-50.0s",
            delayFrames: "1,500-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 40000
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwQEBAQFAwYFBAcFBAUFBAUGBAcHBQgLCA0MBxEMBxAMCQ4QDBQXEhwcESYfHSAnHy4rHTcwHUAzIUItKy42NjZEKVpAPUNBPUNSMm5JSUlgOoFSUVNvQ5dgWGZ5SaZoaGiFULSSWcR+fn6fYdisaemQkJC0bvO5cfyfn5+tra29vb3IyMjV1dXi4uLr6+vy8vL6+vr///////8njIcUAAAAQHRSTlMABAscIigwQ0r0N2RVFH+OcJ/rmLbQ2qnF/OHS3un68v/q/GP//fP9//8T//7///7//////////////////wD/ZP1q3QAABbhJREFUWIXFV2uXqsgOPYCCLQgqIKAoyuU5IE9BnuP//1eTAu2mPQfbu+bDZC1diGRXsrOTKn79/S/t138P8JbhxHROUdR8Sizw9zwGhi0mc2bJSYIgrDiWnpEEjv1f7iTDSru9ZliWddL2qswvZ9PFuxDYYr6UdifLT/KiLMtrnoW+pe5Wy/l7EPiElnZWCM5V07a3W9vUVXnNQmsn0dM3yMBJdmcl16q5Da2ty2t4klnyRwSM5FQ/r9pPz8/vpsx9lad+QMCmrOoXTTtcGqXSXTZXf7/6AWFB7/zrl/utKYDBMCvvgRShypGvmMTmknUdrl/4x6NhOGHZ9kGU/m5JvAxADasBd3VyVPwsD52s5xSysITZiyRI3homcCt95ZjXkHtY3+9U2YmbjCaBUYJTDqtXAMC1bcvwMy5IQmZGQ8CZ3bcMUARKUlaZnzwigKxO7CgLOH3K6oF/W+eGYvi+M6hMe7Wk+SiHy1PeDDloYXEogp/XXwCVL8zeBgDaizzLy+HNGkh4CXD7bm3zHfLWhDL9Lge3rgu++9/qcDwC7LkKiEeUflNVj656ycEvpOSBkJu6LrOsAv2FIOZbg8DawhmvAiIh+QyhqfIwSwwjq8rw2AkyTAAMSXEUAKT4GUJ7DY0jMj9P4CIsobGMvKnCHf2iGYjlLizv3Z87iqIcfcdwHCc0/Cw0DMMvkI5eNDRG8iiJtlNM4vuGf01AjNnVNxzAgN++ulyM+0MlZ4J1L2WLhmlRXx0jrCroayevsqOy5l8FgHikZQtmYls3SEIwl+scKbFwHNBz4axfjoMuCWIpW1lVZdfiiuZQ21Z124Kkixo6w5LpVwPpjkALpzAD5gzUxG1Tlt3uAGMhOclL4o3NhWBWqnHUTR2irovETyrYW5qmCE8CPT6NhjRQ/EbRveBsO0nom0cnz5Mwz3x1xby3uRGMtNXd+JIGtmGYrgkVPCrWSWDnb27RaHNV7SAFBNcL4sA2dWUjsLN30u8N9mdOtaPL5ZKmABNHriK/vXxv+FzQAvAHBICJXeWn+mM4MuxrDYJVPXCPzkF8uUT2Xl5OXwSAEyTFMMxsPlk84sQZGWiMzp4XQQB7iZmMB4AtKFaSkQkrdnZ/ECMFM0ojz/Xg296MbwVgC0ZSddt1XdvUtgJH9c024YGEODhH8DG33IsOXNCC5gZxmsZxHLj6VurVtkAkpDGUwHNNTRofQtC/GmR7Qf4pLGlrPV9Agt3dPnuurQvjPUxwW1TxOArOQQQe8VkXWThMYXMgAQF4kNtBHC0iTsk6FDwOPHjQQzWLA3MHRGCTlXYGgAj9oYvMGAnEcosSgESRdQhpZG4lhiC4vYd+nF0E8L+/RgDIxzpujxClKB0ThEN1ACg2ANiNAeAzscu0W6cLAWk3DUxFFEQE3f1l65uxSbqguwwuqFi2bSOAy6Vj8qAoZnC5I5ijAECBF8cRlNvVD4eD7kZ3ANfUdbdHS6PAHgWYsPtz1zFnfSsL8lb34n5Rr6e0R4htkR4HCBBAoIvcjGI4UfPSTj0dI+eo879Epvh8sHo07pTbB2hi2Fs4R+P4dCkeUNx9VbqiIovMZyXiE3gFQRdQRVSEs9Y/AUdlUe8RoJEfGVwCTXrqxikrsRSB44sZEnyaupv7ARYj2S3UtZtjUTeN0FjzVPaJApJfbwSOphgeOEQhyo9DOE7yqDd618sjg9/OlgS7Vg57UZDVrm5naNdHjjgl7bt5+mmpu+ef5xn0sGLCADF76QKFXyHijLS2g0EIgf6Hwy2x3By8IOpkE3vatzPDottXoLd7CgMTBtpv0wCfrzYHG+YVyBANAHIyMJJeiVsNdA36CDx9y/1hmuDEjN+sDzAKbfOwllc8z68ehq4FebP+UA6apu03K+b3V0bYemhO2Hx8wClI+fhY/8k+OluvRVSu5xy6V9MVWuW1rdcbUZY4+vmV8x8ZR4WF69dhEQAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 4000,
            actualDps: 3243.24,
            magnification: "200%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 4000,
            actualDps: 3243.24,
            magnification: "200%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        }]
    }
  ]
} as const;

export default e1198Data;

