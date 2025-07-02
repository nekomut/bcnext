// Stage 1376 Data
import type { StageData } from '../../app/stage/types';

export const e1376Data: StageData = {
  eventId: 1376,
  eventName: "大乱闘極悪ファミリーズ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 376,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "悪逆無道 神ムズ",
      baseHp: 3000000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
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
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
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
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
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
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
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
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 70000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
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
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "661",
          enemyName: "極悪なゴムネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBgcLERYQGiAKIDUWIywnIBsaKjUgM0AgOEgmPU4pRVhIPTUtTWNbRjk0Vm85YHo8Z4RmW1NBbItGdJVJeZxLfqFPg6hRh61UjbZXkrtZl8Fbm8VdnspeoMxfoc5go9FiptShlo9kqdhmrd5rt+p0xPy7tbF6z/+D3//Wz8rz6uT////AWu13AAAAQHRSTlMACxspN0NQWmJrc4iYq7/P4//58P//////////////////////////////////////////////////////////2QIHPgAABSNJREFUWIWVl4lW2zoQhqGBBMhClEiu6w3XDvEmW5Ll2uFCy/u/VUeyCeG2lcOcwImM9Gk088/IXFz8w1b3H8fXy8t/Tf2r3VjO6nR8uSH3/5r7N7vcpE/47tQh70BuPgGY24enFE2O4ynmL7vNJw6B2cvhJXp3epO/PD3bs/MWT+/uligMgshHi7veliiAMVmr7zcjfszuMbYcm2CMiO14b+bAAxvMcfC1cfcV9hMSMkpTVlesa+vBZEN5x4q8KCwTYIr9fVlhnyY050IUtBZvJiX84jRLiQlwa1MqAFAkDObLqnoHiLoWXMrSDLixadUI7JbN+67iA2MMYJWwJ3hQSlmxWshGcLWSD57UkiUjAAqziEdTWnIuGrpr+6VNmNUaQPcjR6hgMnHqlhZSyNJ9iPQp6vDxW6JB9VgMYFKGd7xVx5fh95+2doBbv757+lvLjIAZqWFzHJay9zxwc9gePqkb9FHozIAbi9GW4WAA1FJAOnzOovYtH400Cmkdy+KQo1g2b1GHg3gIkaMeOm704H7XlnWLnaYH6BS2HkZBKxo9UAc0HsF9KllH/MOwI2OSkW+/fqKMxvpRAzq4MgXR7WTLsd/1R645dtHD6+vrfwiF2inZZHhq8sDrREeRV7dDDChBrwqAq6aPCS08U2+88VoBHnj14AIo8EED0OAS49S+GwHIlvgNL3sFNuSHArw+fm30MCsonhgAMw3AQVfmAwA9/ngEe+hdkFVuLqZl1IHcsVfxeiii+Cv5CubtmyEtZsAihIRnyM/LN+XUUjbK+rHkhRkwdSGIFAUVZccWcNKUhGR0pBodWcscBYf6w7r3liSqzAwADxrwQHI4smzZh9V9gZUjHoDiO+zlede2WR+4Rg5VkaseXbcj5Vx1fOfbluW4BFO9Mc1E2sfUciPX8saOEGMUOQjM46oYRBfawkpVWQuO1XNkbmkWzIhshCM4f8OhQ2Yo3CEL9k/hxx8F6C1Cx6Gqpe98WJMg10MYvElUUyt9fA4g9KMoDCyig7BDsas7suVVTDDvDEAfA4TLPnuxyPs8wiP1ORtQqH4s0qQMqkSzkjOCeARgO+uzH7sB2rmF1iH5BAC5vO+pkbpabHUIWe7s8wFhpVUIMcT7NNLhhBJv4/MANsq19CVQUh3PSrStFnZ6FoBAypsy8XAILSQHo40I3XCvghqdAQicoilc2DdW+iEW2kfgCmhcXf7mm2kABFEAGXN4DV5TZEWZrbLAIQk7uKjP1YE1VHGI926vKVVM2DVebdMTANPrExHC97hRCRFM/9l0tS3eARFcq52MHZGELYD8QEUwGAMsjwCLs7qGSAqxr5nSBHHzskmVmFcGwLsHnk8sCFoC5RyHgVuqUgJ9KzGb7sblSQyUJXWn69Cmx1JCaGsAzD4CoJ4K1Zn3juroQ0dDCwPgQzmDnlnItZTBgZDJvCeYLtdTAE7EHvldEcWxejtJcBC5nylnRKD9kaq/peGtg0e6IY0AbodaGGJA0nJfsDSpiny3z8MhBqZXnGv0wbDtnAzesmAS0sWXyWQdSdB+Xu62k8nd4moymUzRnhbIq/KM3E4mX0zrlS2ilwplz8/JUTCXiL9QRJ6eW+PrzZvNyHOGcPfsH/P9BbUtul2FLwUa3V5Pz53bZfBkHYN1uc2sxcUVOtCz/vu9vMfr6xly0Xy+6G2O0f1ser3yw+Xo6qv56n692W7Qn7bZIrRezY3/NV5cTG7nS0Bs/0Bsttv1er2c3/0/ib8BKckm/gmx7WQAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 5500000,
            ap: 20000,
            dps: 5607.48,
            speed: 2,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 5500000,
            actualAp: 20000,
            actualDps: 5607.48,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 550,
                level: 2
            }
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 12492,
            actualDps: 23422.48,
            magnification: "400%",
            count: "0",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
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
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "3",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
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
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "93.3-93.3s",
            delayFrames: "2,800-2,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 70000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 481851,
            actualAp: 16851,
            actualDps: 31595.62,
            magnification: "150%",
            count: "3",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
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
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "5",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "4",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "極悪非道 神ムズ",
      baseHp: 3000000,
      width: 5500,
      enemyLimit: 6,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "2",
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
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 7826.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "660",
          enemyName: "極悪なネコモヒカン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIJCw0SEhIVEQ4NFh0RHCQSICkhISEhISEdLzstLCwiPU87OTcpSmEpU29NSklRUVE4X3lcXFw9aIZFdJRwb25JfqJOhqtTjLKHfXdXlb6MjItcnMdeoMxhpNJjqNdmrd1qs+Wnp6Ztue1zw/iysbG8vLzLysrV1dTd3d3k4+Hs7Oz09PT7+/v///8igFDtAAAAQHRSTlMAJzxRXmp1lKHNCRWH4/j/tO7/yv//bf+q///9//7///61////////////////////////////////////////9umcZwAABYdJREFUWIWdV9miokgMdVdUCNSVoUW2QVYFCpB2V/7/r7oKcJuLcnvygAjk1ElykoJW66NN6KE3HH9+6oMN+VZ70Fuw7f8LMEFMH9hgx45b097fuba7ff5r1HUcWBqrfNFuAfqrQEbIWMzUYG5cYbN38mW/vwr6fwPQF7b5OThdt/kqP2wuCNR8M/q5+6Q3YCDIqV3z/JwfVvs8X0x/7N8VkOosjUv+bA5MfuwP6qFa/GH7OQx/CtBh0fJcuh135zvEccn/EGCw2OwL+ntjqc5vWAdnwbRaTaXsd8ih96WWPluS+4PhFGDXw2bW6fCdBgAOpt1ul1ndaBtLQr2isFcXS9SkaWa+AKRuHrkz9tUJpXF2mObw88s9f8XxUAGcDGM555qbindIuHS1QDWc/YNJfgmWM2jop86UNBCozoZw2IOTH54BCi01iLk7U+dqcCxKeDkGwYsSr5tgn88/i3Eye1nvdHr6c5gzPGMsGtQ8XT48tscXtBVHFND/WIR+t9USnJv+rzB/cj8fD1t20pDCLzTljcMN4AKwegCcdsa/vxj4XMRfR9V4uByRCE852C1abYDPOuafc0bK6IuL+78l224LitT9CNBfPJdtBzgSgxudWa/FSKnUkARmttrcWWwgjDy4lEPlZPS7EEVa01RlIbiPjwCSKEVqvi964SSAF0V2w1BsC09ZWCFPkQCMs0MuXncAZhTrDQC0jx5pAxA1L1ZUQ82P6sLSEShyw1DkHr2znYPux1GE8VqB1VJZpzG2JWA+KrmPbiLaqWCGMY5KszUvpb9x4orc+0IORrC96RaksHKOcUhYVKeEkA7Td1N1ON/m+2IGnUCKK/9ojZMKC4f0BLtIeKfnqbqAIgkg3vxT/Y6V+AAWRYjFN5tDpzdgi2FuoCwuV03c2dGQyvUj8XCC4rIN7LAulwO0DEoBKeG6yp8726pKCYCVYIXKUx1Q3QvLBAXH7YmUHyGw0yoGS9RJIJRM6svaugpMkhShhkOXBdgYoMehHz0sjhLTjCLTztJbWSOXNGpdV4w73AzWKclT9GypAr4PepYk90uSotRrkgc3eXEOMeGPFQANx7p2v2eDVD/fR3L24k+KJ5PAMwByVOBGLfWRWAsw4ewyzpItUWCyBiUmY2EGtomkFJeiJFfrh9u0qFNIMm5T/4RWUwPdBOds0CgScg8Xoq4n0GI1yjG2ZTATIh3ZogXUgOxxZEJS6NQu8oBjaVAbAVgUAJuFDmxERlIU0owVAy4u9UwQ4ixCtQBtKFNgg+e5JPOVHPTZlQIUGcxkkE0rXNfv0h1wqyIVZpX+WDOKDnULCmFxS6oHGIilh0yfQTc5Y6UYdHO9YJd6BUL9FjmQY1rB4hGdzAG/LKYCM2Ig03PfTX16m60dbSOFLGKZqKS/Fq2Sgy1ruq5rNKI4RG5mUX7ctGa2MSaOQjI5AeQsfIySOElSYriiY2USiU9E8K0QY84i1ceY5pCwkKI6C+lwB0/zMg3+C9BDUVJVQdaIlmoBIpPAr31IiCS+AYg4K0eZn5mkEvUANIc2URy22G8hsHKahkULY9c16xAKXZoKaFSp3wCIEqW44pCkv7EofwPAkS0qqSnThJo1WugIYlghROFvjPxX7zh2EctKqBwaqG6oTRgU/66eTy3w4nLZCpJUmLRxlzMJQKoJtTvUmBW9LMOUBRkaSHELPjj0bZPoA8XeF/2c00NPefe6NGFIu2UZyYEC9lrhkCKJkkjFqVkgJ5E0bo0HAmmG9y87XR60MPRl+kbhD9vTfq/X67Y7kLkcuGuRNsGk9/lt7R+Obi7CCJnyaDiiNhxOWVmcDkgfdxo+eTq8wBUdL8I744RPnz2TXn/I8wwjEOO4ZzdOEFiWYXh+OOi97Ix/AIhKaJB1HvlqAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 3600000,
            ap: 18000,
            dps: 33750.0,
            speed: 25,
            range: 240,
            rangeType: "範囲",
            kbLevel: 30,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 18000,
            actualDps: 33750.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            "aku-shield": {
                hp: 48000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-46.7s",
            delayFrames: "600-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "665",
          enemyName: "極悪な天空のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAgMQDxYQFRoXGR8XIiwYJTEgIygdJi4eMUEpMjokPVApR1w6QktETVU3VWpJVV5RW2M8ZoNWY2xCcZJcanZicn9IfJ9Kg6ppeodugI10hJFTjrZbl8F7j5+MjI1ensiBlaVgpNJkq9yLpLXJzM3////yB0MbAAAAQHRSTlMACRohRFJ0fY6cr8XL0tzk7/n/ESs5XmmGpb11/6TUA7T8/9v9//3///7/////////////////////////////K2NawwAAAtFJREFUWIXtl2tzmkAUhhe5L7DA4U40DQRRECEiapDY/v9/1bVm2kw7zbDkq8/4xXHe13PzHEToM3wr/PTzTxEixIMB8WQDR1MwQREgJGJvgh5jW/aJoElItXVgdYhIAJaEEGj0jWpwjIlwph0DYFEjpqiaEhJiEJkMsOVjRQOKhrwYaC1FxLMYgBRg4gNxBFvzQUIYNANkbryBRdzI9sBzFFmHwDEgiIkMs/EGPCFUDb5nYNpDmomKkIJZckAzhxYfdFOj+eu8CAJymPQ3VIAQyeAKHqbd9A2NwcSJCC/YtgmRBbqh87SSBjGs8QY41iyfBMY1f0ybqIIqiBjGBwCCp/B6pNB5ihEnYGSCqYM/PgIfbMOKpRDpQAvIW5rFiQaDHiFPlunkeFeDgP6yFYFFfOPX4LkAhF16I0o95BFaAzqB8ZSt8rCbP2+X62WyWWibxwkGcnp8649vQ38cXpIJBm527Ie8GoZDcux3j99Y9X6SHY9b+uWb3dD3wyaWmJqIULJ+Wc63/bCFTd9vICvKBZPeLVdJstz2m3W37vusSaqG7UC42bmrYdvvXn8c+i1c2mbusui5vM6rat4Ph9fvL4cMmnxePrHo4/a8qtrV+rBNs2W+T4t8dcmD8QZ+lZfdvm3rsmqauq679nTKi3z8PgnquqiavKmLfVO1ZVvkbbNqV+M3u5+fOurRVHVFA6CvsqnOp2R8BA6ui66r6nNzabrT/lJUl7oopNF6ihc+PefFfnWtZdnl+fMiYDpNN0xI02WWzgnDTfoDH0UgPzym6SIEX2K4Su9wlkXPMgqBDqBkg8UcRHxd4Rwi7wuN/UEH0x2uyQLQiyhjNAOGm/LbwYaQt+lOViEGfcJpVHXJQa4NjhOBOaGH7+gwqYcfDJSv6Wd4ynPBBwL5a3okMO7if3DYZ/jOnTt3/oL3xCBU1CuhHAge82qULfiI8f9/rj8B811G5DmjmH0AAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 1820000,
            ap: 53000,
            dps: 9408.28,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1999,
            freq: 169,
            foreswing: 20,
            backswing: 6,
            tba: 75
          },
          stageStats: {
            actualHp: 1820000,
            actualAp: 53000,
            actualDps: 9408.28,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 50,
                level: 2
            },
            "aku-shield": {
                hp: 1340000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "12",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "662",
          enemyName: "極悪な暗黒ネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAABAAEBAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQADAwMFBgcKDRAMExgUGBsRGiMcGxsWIywXKjYnJyceMT8xNTckPE0+PTsrRVgrUGlGTFIxWXQ6YX1aWVg8Z4Y0cJldZm5EbopFdZZqcHVHfKBPhqx8f4BnhZpVk71bmsV8kqNen8xhpdOQnqhnrt+Pqbuwq6eiw9nEvLfPzcu32O/a1dLk5OPr8PP///+btd57AAAAQHRSTlMAJXK6DlPJG2XWNUF9j53/quj////T////////////////////////////////////////////////////////ixzs2gAABkFJREFUWIWdV4l2okoQxX0jFnT3NDSLbBJRERU0xmz8/1+9ajATnadOMnWOB/BQt2u5taAoP5BB/3TTb/xE7UsYaVfXFgz/Sb83O2h4aXQXwb9Z0JiVxoPa1Ffl9J8A2q1FeQSU4BD0/kG/o8OuLGcSAcjPYjAaDRtKH/WOZbmqAGDwIxPAMKgu1ZyZAyfRx61f+uibAE2nLA04F2u6OnysBu3vmtB9e7/Qh0NZlm/6t/WVhmFdAkzL8kX/SSAfTorkE+H4QcY/0Fd6QGqB4LiqcBi0vqssPR3ioVTqW+i8g2gIMrino57FpzmWFqASoxQCBDjgPaWke+9U6H/dd6CNFhxfCGWMsOP72w4opYxC5x6A9nU/hPHQeS/LKXDOKXoCTApM4XZF9fivr4cG4WT68vYxAxOFM8alEAMTeZMIKqVn6LpJBioYQgBwYdYiYHI4WvpND+C85YyR+UoDTL5acS6EzYCYXG+h3IqjZopz7B7I5w4YSD8qbG4cVnCXxh0g9IJmXc5grPQlAHNt+lG+63erWVZu//yPpiRvT5mUO4xCVUk3na9fx2w9XJhETEEelMkMghlxFjArZ/cKSbeFyS5yrBHTtvURqK2nd2f7YY2n0/5NdaWBHJEd54tnHVmDhKpDpZu9Otmz0R7BnVKUDuOBgml1w+powG0b/1TRuO2rlT2bI6Vxp60/AHU9wRke21ROnYB5PpVx1XcI8GrdKwLUoDavegeSvqk0CePSJdOlHaVNracJenErAMOKHCqV7cJ1XUEBRgOC7HXRA0qHSg/7SZC9Bs0bAOOqRYzwcNtFvgI/NTCTuy5DNiPDwHSy19mtXtSEsSQYEGGimhsmZqVP41BW/7CtIsOYtX3NbtEID4BuU1EJEM8Fdxl7tQVeKrit96vRQhEguJLDDuYIC05Ka6RzM0ooeMmyQqBJAnzpntyZbJ/plRw2ZZZxb6htZqgcMuDuXKr5eOvF8xphEWyfrnnQcXi77r1SDMuLoliGHk0gqOnFUQ3gvDrb3bV2rM4CyY7T/Fg4ZhIn8+gUAxItI19yUe9OX63d9loSWsmsSm6NkAXIXteL0qh6jJKaWjBoTT+c56cKoD1unvWUHqxnVQGPKgeirHqf2Ym0QUS0epwcJ+AsSDCtALrkvK2PeRGolSV2wnYL9nSapdRDXVPyibnkIPsJMSl0kS0aY9qXBT0SZobE69tF4eLwSxfgn8yWwsM0L/wpjiSwhfA5PGjcI2cR0OwkI83GqA/2fE5XU4h2xuN+6c89CWIuw8d9nq+tcoGd/fnAI8/kPj+vKPDC7YIYjud5juUQ8PztRGyCIC2KNFzu18HELfLcPRibOTxnNJkniX1BBsC077IkicIwSrI4jN2niRCHo53nBWp6L2+Q4wXCfQpCuHh+BBdNs2XOQ198ekzcMHuCcG1Yy7ySpWVFeEmjIl9jfunDA/Mud922biYm+9w+BA13Bi/yNEWlDf6K9Tr/FMwKnk3YH3Ru6CGN8pP+XgQTKOr3Q55HtCh+66+JyzFd3fPpXechJCHaJ2s33/M6aJUIStM8TU5PxRxiE8M/GvzZFjWfY8RSTDmewiLHl697GIMNsKLwyCdADKF5tSOqngfmuhCAOgDLKmi5TYrctyzbQ7Nq2fsQXQfoCKwb2TUSFxeQzEjl6xsQLnyUBOaV+9ICii5cbeo9FtNqDZSpcBe8CsF+YwKuNpPHOv5hUchTYHDVhG5k/94lswBtL3J3XizlVjdZ5umyWGN6qihPjKv7XUfEBLs58TnlW0KKtQd2XoQTCRDmG0L5bhZ7mo5dlarXABSIXOJ5EbbjzA4WSEuKLrsLBFiIoogJvL0AUXqDP1aHMxMYjgGkKPZTkIUP63xTeHQymRhsvtwLwK1CdmPt5mDURCIjaGdASlzuzf1a5Jvk0Q8f5ym4wii3d1dTGUc75uAmhqbTAIESZstc2EjKPY4oYnX/9qXW7ooo9mmzwaN6Koo0jXFEMowOlsD10P3hBbNxonfs/Z6Zv6tbNkRi7/1bI/lC+mMsc9UtlhDvTbXVxV1y3GyFe0Ly6JvfF73haGwXdEB9Mj5Jy3YHuGa1hn//Wh2q44GuQ71l/U/0gab+5TOp0VHHWku/qq23tLHauWLEf97D2vR0+M2WAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 2100000,
            ap: 8750,
            dps: 16406.25,
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
            actualAp: 8750,
            actualDps: 16406.25,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 34,
                power: 100
            },
            "aku-shield": {
                hp: 700000
            },
            "counter-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "668",
          enemyName: "極悪なネコジャラミ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIDAwMDAwMDAwMDAwMDBAQEBQUTGBsQGiASGh8THycbKDIbKzYeNkYiOksrSFwuSFkaT3PrBgQyUmgiXYY2W3RWWVs3Y4BCbIjuKCJlZWZCc5Q3fKpJeptrc3hIhKx9d3L2RD9Qia9Tj7eGgHx2h5NYlb+KiYhbm8deoMyAmapgo9Bip9Znr+ChoJ5suOz4jIyura3FxcT5urnW1tbo393x7ez39vX///+wzDt8AAAAQHRSTlMADR4vRVX/umd7jtfqov+Zu+L6wdv/4/3//////P/////+////////////////////////////////////////UQ4uoQAABMNJREFUWIWdV2t3qjoQ9RkRlSotRimQFiMeYoE0CanWR/7/v7oT2/Ph3nXWubHzAWUtZrOzM7MzdDp/j94MLt7gf576S8wQXKaznwPES7hE4Y/z+89Pg35/lXd/lN0d+JO6rff7mng/ebn/Wten9o2x97fd7rF/79t9FJyOl90zV1JWm91p69+VP5gi1BqzWylKhMjw896EozuEGAQIhcYcVoqTWMo4kMn5gkbuANEeodSY/bPgXFVxKUW2MzvkLKWfnhEKjKlXkosco4jxzdYc0dQxvwv0t7CG6xkXnK/wBReCHIABcizpIUIX06bBzhyiShWvpy0vU9PCqhx3wkcoMhDHizni583zKsvT07Wuj7WjjHMECpzMLa7t29t2u7/Y/63rPryed3XdXo051a3NPH9hnaKtY1cuzXfUKE3T6+87wBk7MvidgpFN+/ww5tNcgcvBcRfmKTC3vIPgcDCX9frXr/XH5WDMu2NH+c/Z9nK+mEuYHpA5r1/WgHEE0NYRYCZ1np4P1+PrfgsMXtYvL+uP9nhuF275nTkU8CbdQzWaHRT0JxD4OLWXdDVxBHhUgquoNgHaggaA8PJpjvvtpnq6A0Bu9ubQpml9qyZjooiJJrmHQRFuj8Zu3vVyPUEjVdDZzgAaAEjC4tf2qwjP+9lYgDD3MNBJosQmo+/v728kWw16pbgXIIYMJVhRFI3Mup2M3wPAhYwSCqsWqqikkI+dzhPgLR0BngCgRCVlsoGXE6UYmOH8TgAypTnjvIozyjSGEp417gBLEHw54iWsgCRZI3TQgwaplHIspO43gOCMNko2ik8AYMyUenQEwIrLx5lQLGqgJCmr7JnkFUo6AnSmTAr/QaooF7wRBbMaWgaNYzP1Uai4/yhLYMKzXOjM2sBCCYp6TgAjhBoZhSqzBMpG3MTvxZLnaOiS3wVTZ7zA2h5LNKa8sgD9THCCnFx5AACUC9wUpWgYrTjDFhZbBk6H4xgAcjjScy0azkglWGQHg7kEDZCLKc6iAAVcJgQk5E3RNCyy2vkNjAmxywE/CqssIsBAwQ5KDRUdWe28UhCduIgwQRj6hmMohqoSMmMM2yNxQKQskUslLEJUCCgC28ywj1xybu3cg+4uYxdjXygNbQijEUgglQQcjUHFhYZ7FTsATEP7UhaCi4qygixuS3Gc5xYQOwBMELqNVmElVTZaAAXZPHSeGBQCcHEAGAUo06IqM6wV7Q5K2E391FlqTAHWBWCm4ljDo3EiVTHoJLB2HfceNMGCli6eNAbKXGgSZUKVHogHFk26wwJMNuEujuAVdvM0ibNSlePOMFdc510/jpoiUS5j2pAqWEDBs4TIwrsZgSZzHBJOs8qllPtYkYoRHoe5pFDE40LqGGdRXmGZOTnKgsSEZ02FmKQwFI2sIKgoo5BKtwnDC2hSNonMiYISHFIN2+gtQxVXpZMjgQoL6IQKaBfD24mk8wEYCg2064jT6T5EAQVXhIQeCtgtcT6L3RT4ir4PrlQN7eBdKPbFfO44Zn6Fhym9dTHOyU++GrtT+OixjD34dZTu3wTAWW9FM0NuXv7fgDw08j04pRCa+P071Ov0hmPfn4Ep2JhMv34BzB97bjjj79w/xOhPnfAPhJbLax+bSKQAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 2500000,
            ap: 33000,
            dps: 30937.5,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2125,
            freq: 32,
            foreswing: 18,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2500000,
            actualAp: 33000,
            actualDps: 30937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "213.3s",
            spawnTimeFrames: "6,400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 320,
                omni_range: [-320, 320]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            },
            "aku-shield": {
                hp: 500000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "260.0s",
            spawnTimeFrames: "7,800f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "0",
            spawnTime: "366.7s",
            spawnTimeFrames: "11,000f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 40000
            },
            "counter-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e1376Data;

