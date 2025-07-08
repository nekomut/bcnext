// Stage 2128 Data
import type { StageData } from '../../app/stage/types';

export const e2128Data: StageData = {
  eventId: 2128,
  eventName: "MIKU CHERRY",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 128,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "春色ポップスター",
      baseHp: 20000,
      width: 4400,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "23.3-23.3s",
            delayFrames: "700-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 750,
            actualAp: 375,
            actualDps: 625.0,
            magnification: "25%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 5000,
            actualDps: 657.89,
            magnification: "25%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "花の色香",
      baseHp: 150000,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "2",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1500,
            actualAp: 750,
            actualDps: 1250.0,
            magnification: "50%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 900,
            actualDps: 870.97,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "172",
          enemyName: "デカメガネル",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 20000,
            ap: 800,
            dps: 750.0,
            speed: 18,
            range: 249,
            rangeType: "単体",
            kbLevel: 7,
            money: 250,
            freq: 32,
            foreswing: 9,
            backswing: 6,
            tba: 12
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 800,
            actualDps: 750.0,
            magnification: "100%",
            count: "4",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 25,
                power: 300,
                duration_f: 20,
                duration_s: 0.67
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6500,
            actualDps: 1523.44,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 10000,
            actualDps: 1315.79,
            magnification: "50%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "桜舞う音色",
      baseHp: 400000,
      width: 6000,
      enemyLimit: 15,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "4",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "2",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3000,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
          enemyId: "503",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAQEBAQEBAQEBAQEBAQADAAACAQEDAQIEAgMNDQ4NDQ4WFRYcHB0lJSYtLS81NDUoOj07PUAvR0FBQkVGSEtoPlpNTlBWVVSBQWRdXFylQHdsZ1/CQYZ4eHjcQZLtQZqEhIT9QaaOjo6YmJi7nlSfn5+np6ezs7PCwsLKysr9zlvW1tbd3d3/7V3l5eXs7Ozx8fH29vb7+/v///+QVKxqAAAAQHRSTlMAmrC94e0WI2N7x/YApNT/jQBCCTAA////////////////////////////////////////////////////////6TrfLQAABcZJREFUWIWVlwmXojgQgFHx4GgKUcMlQsdhbO/1alwv/v+/2kpADDbOOtXv+YhNvtSVqlLSRek+S19pF896x2j8eKEr/QnQ/wBi3hcdGQB6fwVQAAJbzRd1IOuJ1voLQLsB3i4NmtmXKtBTuoD++4C+BtM0TSdgsVWDLxbZ4i1AS4MNbkm30OHGxGyxAeltgAE7tiU9Qh1pYPPFntPeAihcZSaB3O1+5LTD2wC9SfL96IReF/zsOQHlTYCVOSBTu23BIV+A+SagDnE8HtPA930PDBnwIQjCKAS59qxDFUAxMOeAQCYEBQQxrP8BWAZucPE0WB3P5/PlcsHP8+l0Oh6PSZJMoezJHwAFiAv+mIKbpJVyIKV8fAaY4G9sl0bgXKv3M7carwE1iNIIKCVwerU/TamY0QLAMhUFKB4QUB9Wr/enOzGaD8AH9/E0IQQNsP+wHxOyVgFoFYEL4gAWfwLsKzXogEsDBxnECZ0i9ZgkMBG3T7dHqD0MLwAN8KNhEPrIwD9v+gjiCcP6WFGYXqsAPQ3CcEKDKAi9zJTt49AJ5NcxvWKI0koNLNQ8+v439gIvioYuU2OT3u6ELUCmQ8zMOVQBTPCoN/4nHH//Ew5Ho9AnpVQ4ri6ctl/jx7kKYEAQAbH9+Pt79Pn1OaQBZL7bTjapKJcx3dkiACPBgojR9wEDQexg+LVc/h5SlyfDDr2xFgF4ycD+EMKYATrgjdHwCCEOnc3my19DfPPA/QehCOAOfgJ0WRoGlBB7jEEc/lrOZ8uvILJZIPZQRCBPA8xW5yegSagH4KEb3NFvBMxnYeTwSCaL/VMeJheuwcMHHatrETdGQMQhM5Q5auCUj34IJlJXcGIbZKzbTkhDD7WG4ed8PpuhF6N77EvHT+l4tYN6u/UAmKB1O2ipE1Aa2M7oazmfL+fRyAci7LwctqvFKniUxnrrDsAKaulWTcMEdiOsxL9mqAImgpO1s0zplW/zbZPD7boPMVIuGDmgjUlrokl1wiLs+OEo+vwMR8ynR+axjJAkWF1vcdYuJsy7Y1AyQAd2lNW4hp0ep4QzhqMwdIHVhGNwFj1wIlnR8G8snzMVJBOwa+Mc0yDXW3rdRIWRrDmGftmHp4VHSMAz80rkDKDaWdNtkAt/57iO8XSbsujfBDc8S6FBM8D3jAeA7bvkit/w8t9eAA5QzwBaxKpMWwQ8xH1d3Sl0HoAdtm0RcF0s1ts9PwYmKybr9Xqz2QoyATkPY9NnqsrdugA4cS+yyryGCuElr9nPAYZ9Y5Htm6IJyW6zXvHKfN6uXVisV6vFYjHNhAKoktQb6PqAAWpo5u0CDVGDsuMcKFu/YS1eHwwGRSKl/JYLUcBzJ/a9LF/hKRlYjQHN7HMFdKkFAfvWhmcfhIf7gv7wv9VgZSm/TB88wbHyCHkQTQ/FKnnOpkjr6Xq/joSarLYkNlIyIzyoyINKQGjwcoSTNPGIIbGRjDXzAM5/AxgMTHDD2Oeza7+JBr8ElH2AAaIaAnoGdqKI2iovqi02G5AXgJT4x/0hSY6n0/mCNxYjJukDhbhYwRxo59Nzv9Z8BdgLKUiyPNQUXXFYCSWWXozf9ReAI9ieF4U4cbquY3MEVje1pbk2GH1dBFRG4XbZP13o2/V68KDTl2WTJWMBaLwKY5XsoKGzqyACOsWA/xaAV5OSBl25NBhVyxXn3uNht3EhGwsG+XyQBQIgppTGOKdH41iU8dh3fT+iIYH73K3qhQZ5h2J9tlQzmoVoRRlhgw/IsmyY+fkCgBGazuWS8IIeQrv3kDq7bjGwXrliv1mKxipqwBAm9qKJ1ja9A76mC/8wHPZjpY9kX9O7IqEE0Nva9ABq28SzFKlzF0myajCN0W0qmfAuWBIG6FmSUmuohsGs1arKKK9BWpP9Xml8KB2rXQb0jVebXojcKQNwSOujyor5oaqoh4F+ztyPh3JhjjdUtVGvKUpHslo9wYT/AGzNChFQx2HLAAAAAElFTkSuQmCC",
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
            actualHp: 3000,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "100%",
            count: "15",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
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
            actualHp: 3000,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "100%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
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
            actualHp: 72000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "100%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
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
            actualHp: 72000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "100%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
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
            actualHp: 72000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "100%",
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 15000,
            actualDps: 6923.08,
            magnification: "100%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 13000,
            actualDps: 3046.88,
            magnification: "200%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 20000,
            actualDps: 2631.58,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
            }
          }
        }]
    }
  ]
} as const;

export default e2128Data;

