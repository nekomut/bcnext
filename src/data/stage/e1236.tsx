// Stage 1236 Data
import type { StageData } from '../../app/stage/types';

export const e1236Data: StageData = {
  eventId: 1236,
  eventName: "大乱闘 秋イベスペシャル",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 236,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "秋の祭典 序位 超激ムズ",
      baseHp: 500000,
      width: 4600,
      enemyLimit: 20,
      requiredCost: 120,
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
          amount: "500000",
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
            actualHp: 1080,
            actualAp: 96,
            actualDps: 61.32,
            magnification: "1200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1200,
            actualAp: 180,
            actualDps: 145.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 6000,
            actualDps: 9473.7,
            magnification: "500%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "108",
          enemyName: "バトルクマッチョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 83000,
            ap: 8300,
            dps: 3233.77,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 77,
            foreswing: 18,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 332000,
            actualAp: 33200,
            actualDps: 12935.08,
            magnification: "400%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1600,
            actualDps: 1548.4,
            magnification: "800%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 499995,
            actualAp: 11250,
            actualDps: 10887.1,
            magnification: "500%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 30000,
            actualAp: 1800,
            actualDps: 2347.8,
            magnification: "1200%",
            count: "5",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEDAgMEAwEEAwQGAwEEBAMEBAMFBQQGBQQLBQMHBwcKBwULBgUNBgMKCQkQCAQoGBE4EwAiISBEFgBGGAAkJCRJGQElJSVgIAA0NDQ2NjZiKAw7Ojk9PDw9PT19KwKJLgBzPCJNSkhLS0uYNQRXV1ewPQFdWFbBQgDTRwBra2ptbGvqTgB4eHf/VACDg4KOjY2ZmZmkpKSxsbG7u7vHx8fPz8/W1tbg4ODp6enz8/P7+/v///////8RYI8RAAAAQHRSTlMABxQhPy6hrc/dW5P7TL5q7Xyou/3szY7+2+GyU/7y/8r/8v/+5f6v///+/+n///7///7///7//////////wD/TwNUIQAABn9JREFUWIXdV2t3qjgULeDbay1WW2uHIoIMD0MkIYHwGP7/v5qToNW23tu77nybvVwikrOzc7LPid798x9x9z8g+CNo/Yn+Z5Gn8Pn94D8QGObTzhlofxzff9zFx/jxGwXabPaTEcbCT47H+Mn4NYE+WC1m+geZmrrTzB3EH5NN/xsF5i7YLOa9swzdMCbznqFps42Kdx6/UXDX2yRJtNuYHYNu3t+vVuP7ee8xOkqC1fy7JOqPMQyMFYM+mW5833FxdhivpYCj/9T7Jl4qOCqGuWaYKycKXMTLLHSiOIiSoz/8bgWQg6NCtDEXu8h3EStz5EaJbzmOE6xGs19G60Z/4McnhpXlu5iLPHWD5BhbQWSt18PeL2yg9c3F09Nq7XcEx2CNeE5D11oHcOPHlh8546k5+euv/i0WCH/aRXESWScFkLEwDX0QrygT30kCyw+sA2OH50smtM4md9rkcZfI9AVWciZIgiCGmyTqHBAkVpAEadU0JVmcGfS5OTfUdRN3gbHldB8g7p1KsSUBaPCKFlBh82QHfTYZDvqabm7OwmENnWUc5zpeJQXyQJuqbsui2PbfJQxHQ/MSD3B8EJM4a8uJPxLEse+VdZo1LCzI/OybaW86Gayuh0aW5YD/4jj+LCEBAWyZNoWX8sWZYGBOTz6/jIsjx/o0e0ftiTr1eNPwrNhestib776O/Tx5lwRUN2XZtG1Tl2cC2Efj8dZstxCFVdu0jcir9kLwXj6/gcTlbVuz7euB08WFYHZjBT9RsA55QV57+myxuJS1Nve/D1UAJztvW1MZ76rraWbw2/HBejSdf64kzfw9BfF6DQbZraZfSvHWLn4FVCOUVrSZfm1Js9/bBSitxH/6sgDAT33woRihpuPdozm50ZS1+e6jhMSXZ1ASuJfsxr7lJ9Z4sd/eaqrG4sM+xG7owiHoYuxfviKZmzgvabG/2ZV7T9F1fFbiIHFJlfmXr2rhRlZaVYdbJ5s+G63f05DA4Ib6Pq4a5pyXRKq6RI5X1OXhxsFiTPeUuGcGP+R5TiyLyPdYZjKB9owx9pY2vL8tep/TaCywaGrSNTBIVogAYffuwtJiJyT8BMYysp3pH05v/TmFGoUmIxMZWHCOVRKl4CyjyAoCC4u6lS1AcJoCwv3ff1+5QZschMgZTW1HdmRayaZbC5ZinNKMwgsxGV5SjNKMi7IsqzK/2kxjiHAIQ1nmxolL66auSo5DRFghqhpuBaEFz0hohzgllPJcCDhYLgpm+4xAGMxBfMgfoyTFKETYgxRABMGeLfkzxjn2gACY3l6vfuppJqmpOivawl6HKMxyIZMgEIapqO3ZKWaKH1ZBYGtLRA6zqxzqC1alpSKoPBvy1qjP0DQJaxqWZViQ7nHN8yqv2zrP9tdW0F+5SGs5QVtjXFOuwpsMFbD+tqY2zuVjgLBDleDcfjgRaPKoN7bgF5DX1HWNaZV2q6lTm6krXqKMdqIqmimmkpwV9O+hNI1twWlTM4KyEl6pmgRGF2rry5xiwrqvYJK2ripO0r3ZV0nov7wasAQB6665nCpkBcgFKXJ0W4k8Q8izPdJULAOvAoPgmZem9n6ruoKxTZ/1jqAVaQjm5TmpYfmkggMYDFAglKGQoqKimJd5dyBBOaCCv+pd/g5z40wAxB6kA45uxqqslIobQdK0qFPe5EywcyryvGxyRXD3zIrtpCNoM8K9jkBQXqKiUairuqlw3uR5xREv3kGeVRJmh4q9bqFEID0ZKVGoCCCoJigFEwLgglGljEGRrSoUhW/b5/7JA6yinpDb2PK0zmxFoHTyEFEF6c2Tt/KwUHXKXt9/pPVfDyQUQu5diXnh5cXJNI38GSLTUGFOz9tYoG6P+fPFycbM3ApYJAzliIa5OPmgqXEXVqH8nD1JoBJzTSCXUTRMebkgXl7hzolgQVpKCJQXuKuFlsliBODFdWPWnonIEZV9okB5Q0/Tia6lgZGwSLskNKyLpxQ9X59O/UcvXNr2FvCSNQI2sLOy6FDgjCHeNbnqhM5GZwWaifE43E56vZ65h8Fhxq6RhR50Y28v8ebBTeidjAyxRm82mZvDt7fRw/geMHqwpZjlD4ll6C1D+LwkcF2Ox+PRaGzj5RK/DM3JTG0k/B25Hz88PPy4IEx/2Pb5sy1fcAWS8/OlfMFsA/XzuFMwN83pdDAYDqWGl5eRmuodow7y2XA4GAym06k5n8x6UsG/cnQW3InnQYcAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1600,
            actualDps: 1548.4,
            magnification: "800%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1600,
            actualDps: 1548.4,
            magnification: "800%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1600,
            actualDps: 1548.4,
            magnification: "800%",
            count: "1",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "秋の祭典 中位 極ムズ",
      baseHp: 600000,
      width: 3200,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "750000",
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
            actualHp: 23400,
            actualAp: 1440,
            actualDps: 1800.0,
            magnification: "1800%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 84000,
            actualAp: 16000,
            actualDps: 17777.78,
            magnification: "200%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 6000,
            actualDps: 9473.7,
            magnification: "500%",
            count: "10",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 3250,
            actualDps: 2708.35,
            magnification: "500%",
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
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAEBAAECAAICAQECAQICAgMCAgMDAwQEAwUFAwYFBAYGBQgIBgoJBwsLCA4LCA4PChIQCxQSDRUaEh8gGCcjFi4iGiglGyomGy4tHDkvIzY4JkY5KUJAL0pIL1tKNlpfO3lPTFJmQnxgW2R0R5WETK1xaXSUWb1+en+gYc6PiJKtaeG2b+u6cfyek6O/dvvEi+q2pL7OlfzGsM/Vp/DWu+LU1NToxvzuzvvh4eHw8PD7+/u5+FqNAAAAQHRSTlMABAsVICkzPEZRXGl2gOi1ydmLmqvy/ee1w6D/9tL/3v/+7P////b//v/8//7//v////7//////////////////5/jygAABZBJREFUWIWdV4tyqkoQDC81AipCRIMisCuyvIUg4PP//+rOouZYp65wkqlKaaXcpqenZ3Z4e2sNptdj2n/REdx0ysEHy/3mMMsCgDrpM2/MUGR/cV4UOWCgAwVhrP0GQFYkjpvaqwEr6uovAJh3RZf5qetOe/Pl9BcAb7yG1qLqRSvVcWVO6P0Qg+0JkuOtFZLjJXFVaazyPwPgZG2qYGJ4uYdTrDvK+w8NwfQnjmVFHtklyY4Ahx9bgZWcIEh3NNI0Wt8JMP/Gg+1x4OI5hufT8x6y7wTY9373ab7HCWOR60kTEwcNQISXmkAfzQwmUicFZjBWJWUyXThedMtgt8sjR+tDGQVtNO0LXQjC+EOfzT68x+kmEncxBF9+zJTJsIsDJ+qGYRooyZ8A8pSsJEk3DWMkd1Bg3scfpmVbBv6mkASQTB7oI9O2jdlI7gAQRzM4DwjenUJCCIlAB9Og/x1p710MdMugFEwjuCFEFCBPkGHbpj4W+Q4NBM1NPNOgbK0ofzBIdtiwLCpAV0+BAZM8j7ABfA10d2IEbjZM07D17o7g5yRvRLchDwM/ihCA/qaXeJ0twQzWN947modhkJySyBN7ZmAq5KrLyqzsPh6aEGTMzEbIFM8MFIAxUqfLyrcMaBDbxp41s+C5kABGaIPgq6d1zJX+6pZBHtlhsfESbJEcNA0CO6u3HkAteu0A7+vkrppVnLc43yVpQjySBnZx2HqgzLq9Dozk3A2coI1vE4qENluEA7zZ2hEVQWwF4FTw7w0iwoikTSqHc+0jz7t1tyO1OonXCDg3SB6VyAPbP1+v13NsAxxVx5VbAYRFQI1L0nsPeyg8XC/X6+VcxhsKkXvTViv11wltHZLcKoE32eV6Kc7XQ3a5HEKQIietXmTenZQyaKZxSpBfw9PPxeFyKM8QBUB4n20ArOjACA8atRIPxYdDWWRxHIb+polwY9hdAI/8d9jKsnCz2fp+SCOG8A0Tux0AS4vczqfYtDdhUZ8vkAWNywFkDCJXawf4+J6EYL5NeT8MpwtaBVAYtwNIy+h7FucRQj4Qz7IYNLCQl8CUAIC2bmLVRzPfpymybUQD08LktEJIaZsI/II8Xwa7/AtiX1ZlVe3z23REo7ZmGKweGST0JtjXZbx1/DijxSwoREDsWcu+xIiPXkxJsNvXp2w9l4eyNl/DQEVxBc0doNn8tQjs1L0TgDlcHet4LfIsw3KCOIIBawBCnmKrZaQ0zQzxBWz3x3q7ku8l49UPy55tjxXYA68HrzXUmpGeV3Hydazdcf87W34K19X2WMP95DnD1wDzZgbvCxRVp2LVf5Jb0ECGsP6KrNAR2wGAgI9yEHDxfI2z8hJuy6yC4YqllwBCwwAIBPvjqVg/bxL0yrVBRoIK9/X13ltEIEHl43R/BA2f91t2qFuWWVTepvSmrxlQAEogB4Cj/+cSYvjheElVrPC2bgOYB7u83kJD3gAeDGDv0pewL2Snykal/xqAilhlVpA3AOFiwLIcz1KDLS1QwCpO+6UStgFopCodndwASnchy5o2FPrDCawbppUdT18rcYVeA3AqKbefdMOgAMc6XH4Yhj5RdDhvGSFlpfHy6DUAO/X9ea+3CBoGEDFdEUwI+LCL0/EIlRHU10ZiRH3eZ1jZSW8Ap2ORhQjOW3Q8Uk7OkGH4lpHUl6l9ewvyVYMGcXmCqIusKOu6LsrjX+78vxxYWnpWXEcVAGyQnzUBA91FKIbK/uO7E6e6X9QIE3UO8fn5qU5VHWpQdiwHf7Tor4Iafg7rNc9xLA1BdctT2LXf/ElFcvJj+HyNMoCQOZ2L+nfwqhNTvsw9GgR9/G8EGE7oD8TJciKJ0iPE4XAojeFlo2tRpsGJ6ng8UUYjBf4eoSjKZDKBd5m/L7b/ADruCpEVaSAhAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 84000,
            actualAp: 16000,
            actualDps: 17777.78,
            magnification: "200%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 84000,
            actualAp: 16000,
            actualDps: 17777.78,
            magnification: "200%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 84000,
            actualAp: 16000,
            actualDps: 17777.78,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
            actualHp: 23400,
            actualAp: 1440,
            actualDps: 1800.0,
            magnification: "1800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 3250,
            actualDps: 2708.35,
            magnification: "500%",
            count: "3",
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
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQFBQUFBQUFBQUFBgcGBgcGBgcGBwcHBwgJCwsPFhYXISAXIyIXIyIYJSUaKCcdLiwhMzAnPzwqREEuRkMtSkcyUk41WlZVVyQ+aGNCZ2JxbCBJfXdXjYFcmZCnkA5lp51ssafNrgptv7Vuyb99w7h8zsPkvwp118x628+J2cuC4tb60QmP4dSL6dyU7+KZ9Oad+eqh/u64owfNAAAAQHRSTlMAAwoSFyYeML7UPsdWS2R5gfKOtm2eqZeyytXA3v/vytn1/+r////v//39///9//////7//////v//////////6/EoKAAABNZJREFUWIWlVolim0oMLGCblGDjgu8rNhAwu4VwxEDZg///q2rBSdy8voRQ5TKONauRRlp9+/ahSSNdkz/+yMemmDtL/ReA4QN2jH8IQRr7Rbgd9geQDURzR5d6AyiriBE0V3oDqA8Fp+m6dxqliUM5rZxJXw6yGbCaUrTsy2FkYV5T1p+Duklrzijpy0HSj0XNOeN9OciGT8Gf8rgnB2Ue8LrmtO5bh5GFOFCgnAVmr37QNnEtIuB11KsfpMmh4MCBsrro1Q+yeQqjmAIAT0/m1+sgafd7L8xYzSCCYKN/NQuKvnWjChjURQpyDI/G6Ev+o+kON+41R24BvzNnOfxCHkbmIWKNe115jwj0BAjz7ggD8xQ3x9ecRI9PZxRFmUDoykI2nLQNP8Po/PPX0/n8iEQtOs5XSduE1/PDx5/Pv8Cezhk8RZtxJxKDRUBbgLrC5ycBcBaIIOn5oEsA+i6rr8YpPj8/Pz2fo+Yx3WgdABTTawPgQsjp48/z4/mMRQSc+tMOWRhuXzIgcGLbizLsYppWQhPWx4WQJEmWxy8MCg8CLzB0FCuqzBaw6W4sy/LfMykpQ1WfGVPTOlU3AOCdRVFKSShgq5O1XE4n2nDwDkWS1cl8e3R8YZhdKVTiBcWu59pBwRtS3j5AgX9cL6a6+pYO2AKWD36YFkKyTepeq1AzbOM4wbaXCmlz7BKIqUoj5GxnL/7yeOWHBbvxezOCXHwBiwI3EBChTRpcTgu0fE373K9a9/cYvAi88BLHlwTHkeeigke2SBBnpEwc/S2ChzAvCYHRw/9AYbEXRJcLxlkMNGLseVFoFzV455cMLd9UKU+OoYgzBxgqYmlxKuwi8AtRAOa5rmvbe8/OSA4fzdBKvamDMmsRGhQAaYKgnh0EjZvtuh5guHs7QHYkPpSgrfZHHQEBJZdXDCK4VO5+b3sojJMEvpMY2V7BYluclATv/IGFvvWj7AWhFCVjRWh7wh2cIwwUMBQgtaEokb967w9aUM2jHyYtxrWbeQoUPDDXdoN2wgJAgp2l+jc1K+P5xgnC5BpAg8CyEOMwSrNrnet47zrr2eD/ukEzrJ2DEnqrRWjikry+ke6/Lz/aXeWRZqzDP7TMSQmVodfneKcrn4w1eeazm/NpmeeEwA9v1BFtPl0VJM2p3gBAdCUVyhV/BMD683t6uE5ftSyOZ7QsKYMgRG7DDgCDBW47mrPyUhImpAswkAqgEd5/frnIU7dNGad5TiGIqzjJBYSE7z4f7JJ+KF4YXAiANNoSkcC8wVaHm0Fdhy8pBE2Rtj0oy0vQRKfNu93OmoYEDjRvu0MEAHO9y8UgTfxrITlkETZVIoZNCUWACDotfOruWkiRRkIbawKomT/u4P9WSJHGvGy+8ly0E3G6XI7fJNhxX6V0tYoIgOqh29KrHZvbrUgZvxojKYL3sm23JaXlADM8SIsKrEixd4B5zMNlxx1l4oj7Iz3cbw4nsMNuNTXWmDLf6LhnDbfiYvbnqqpPZrPZRBvBrb1FmfPfWfh3g6FAMl9shuLCb29iSVudVp1SAFuCpG6D00IbDAajxuCFoijjO0OG/312+HA8mRnm/Y8f95Z1d3ff2N2dZS0Wc2tuzCZj9eNEDnTDNOcLS/h9vzEBYy3mpjnVb3n8BrALOVaaqX1/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 14000,
            actualAp: 750,
            actualDps: 937.5,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 14000,
            actualAp: 750,
            actualDps: 937.5,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 500,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "209",
          enemyName: "アルパッカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIEBAUEBAQKCgoOERELExMQERIZHR0hISEaJiUnJycoLC0iNDIuOjg9PT01QUA5QkE/TUs8UE0/Tk1LUlFPY2BSY2FVYmFVcW1be3djeHR1dXVchX98g4OBgYF1kYxul5FlnJOPj4+YmJhzrKNytKifn596ubClpaV8wraurq5/xru4uLi5ubmH1MeP4NPHx8eW6t3R0dGc9Obb29uh/e3n5+fx8fH6+vr///+1CE5JAAAAQHRSTlMACGueQ8dTrI0ULg4hN0L/JVTHfEyiZ8z5tIeo5sP81uyc/v233P/tz/7+8Nz++/X+/v/x+v7///z//v//////kiNXkAAABFRJREFUWIWdV1t7ojAQlXa3LYpu8YLKLRYUjQICcg0k/P9/teFaug8l3XkyfpnDzJmTyWQyYTSOFyR5KggzVod/jJcul0cAbPu4/i//mXxAhKRFWSJt/h/+3AJEMEAlNYIu4s8B1rZnmW5BjULgC/N3+18yIrjA0DBMXCDPZfV/+TVtf4o2KctU3/3ZWZYJVowAcw3sW4R3m4aeWsbOSrJI49n8Z0qSh0qz+f1CSoKh6SR5nt8WjAHcqs3zzwhK7OnXLM98xhSku+/n90Y267SsEQroZ4mxYfLnlCSJ8lBqAOIaoESqYfhnNh0IJ5pBHjXhSi1AvAGOsWEhcbbehDWAXItBRg1AqixkSWD5/vxkOlkFoMrVfqnhoCwfjDLmlRR5luNcqYApC/wRk58BLB7VqYljKn6PuvCX1p+cpuPOtADCqguZ8kZZ4OSi8ceAhYD1x+UQ9wBYm4rSpl0Te7wZcOtLQRDErQcJTPXgqQ0AKZE0/v0HDZdA2BaugBjpZkq61SgA91ETXsRB7YPdgJC4i6ckYJTEtU369GkCboVDgo4S8hg7icIRlwMA3Hy78FpUBMZIFA9DAMpF2uB0Ul5x3/uvNfgFoEwbCaZBuxy5FN6PsOijT0nPBsGICYD7QLCXIIlx+QlRkloFx/fvAZQCer0LBcB9Pk1tR/wn/CZ2ew1XBYhRt0LV/6NHUXSxGQwBgo4RKgUcuMpYK5pvgxiSYQReT0IAD6vRkyhoRQE74lKTktYDYDe9jBBQpQA76dUawiVyOwB6NC7jvVTYpwMAD6Gil0XhlY/xCCYLOzY7F2RAVdt3ssDe+DmaVM1kuzt35wZie6F0cKmLGVKgtlLVtgHTZFxR6YSAAsKSwmS2MfQWIDUxmC5ObVGwy5TCRNjuOinGLgE8r7Wc0s7G1JAFLcafWQO+6+elFyB5pBXUJj66IhYQniSOdsh6RWv6GO/HtIygIy02PbCgN0rb4WgGNsud9NG3Ezd4SFx9wFsANg4/WgKQB49SPRSLdpODi5kAqiuRlg256NJSzjW3ZOymo2e5ssWpwIQg17R7yhd2fbBQysLhhBO3BjQNfTXth/paCcRFAeNoNgeRdU0G4XLSCeFYh3umwWZSDXeRHt4H8XJzGRzezgqLjCqbKdHVSL7IllNuq/OJNQI6XiW6E37R7crfgzv7I2EV+npyGl6i4v2gRkxlrE0AiXGNlMHjSryHevKDEKQwovsHPE5PmXXNNGYWBJBdr9mAR06mkFHI+s6gg22UGMl9sL+CtLIfFOKcO86X/dI90cOQqaVUxmtZZkXD/TzInGvGNqZWJke5b/iHjdhBUMjE8B1t/HpsbOXTh41hOGo3Egkgz33L8I0lWxCr6q3g69ZVbWOYnqvRX9d9Y/P945ub/np5enpa+hl9LDi6YyyfK3t7PdePB91ydi/fMsm/PL09P7++bjVwu52X2+Xv1pYA3O53dbl/e/lH0n8BA9EgToTjv3wAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 175000,
            ap: 1750,
            dps: 583.33,
            speed: 6,
            range: 550,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1200,
            freq: 90,
            foreswing: 11,
            backswing: 36,
            tba: 40
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 5250,
            actualDps: 1749.99,
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
            "base-destroyer": {
                enabled: true
            },
            "strengthen": {
                trigger_hp: 1,
                power: 900
            },
            "survive": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "秋の祭典 上位 極ムズ",
      baseHp: 700000,
      width: 4300,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "3",
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
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUFBQUGBgYICAgJCQkPDw8VFRUbGxscHBweHh4hISEqKiovLy8wMDA2NjY6OjpHR0dOTk5ZWVlkZGRubm55eXmFhYWQkJCZmZmjo6Otra21tbW9vb3Hx8fR0dHa2trh4eHp6enw8PD6+vr///////8/ZZojAAAAQHRSTlMAAwgQFh4lMTtBSlNbYmhygZF6ieWc+a67xNHZp+60/uD9yvDl/d7p9//z/f/+/f7//////////////////wD/7nKhtQAABLdJREFUWIXtl1l7olgQhgPIpiyyCigKKhE47AgHXCb//191mUy6dWYSsOdunqlLpF7Pqe0rXv74l/byP+A/B3h5MIKiGRaMoUji4YeRAIJi+Jkky+KMpX4HQE54SVmtLWttyFOafBZAkAyvLhxvB+at51Pm/hZjABQjrZx9jLIsS+K9s5AZ6hkAQbLiyguTojo2TV0k4X4hsiRBkGCjACQt2V5YtP35crmcT20RepYIuZjQNDUKQM8MN87b8/XtZtdzm8e6wrOcKMszZkIOAzjF8Yvu8uEPhAvOfWuuao6rLwSWGgKQtGgfkuP50/92hhrtbcs+hOHWENkhAMVrLqq6t3vDeWSafpKlB1ubDgEmwmqXdecHQFch0wzKYxE7ymwIQMvrsLxeHwD9MdlsorYrxwAYdRtWj/5vfZNsfIS7PB5xBWYOgLe/A4K0w9nrWuUHAe9XeAScABDlPU5eV9JgFmhxtSvOf4lBjTZJ3Tdoq8zowSxMFTd9yML1rSuiTY77OrBlbrCQKFZdxgW+vv2sxOulRlFUd3W2W0FnDwEIambto+p0+ZnKS1f4UdZ2eehp0E6DAJJVLR8V+DMO165Am7RpqsgzBBhvQwCIAqc5u6houtP51PcdruACRVclO0tkx80DildtM0B5dayKPEWRj8q6Bn+VGTMPCJJipgAw/QilCfx5EKG8KaGP5jw1ZqQRFCtq1tI0Nzfzb+4tbtONrXAf8/17AElzorbYvsYozbI0SfOirI9tnR0cbTohhocqQfFzW99EaQkhPHUtzKXr9XRMfcfgP0f7NwBQE9mw93FetbjDTVXV3QXXZYZuc4T+lIavAXD8ue0GqIT89bjOk7TElzoJd7qtTH9Jy9cAVlo4+wTy3zdFhsJwh8r2nAfeWhNY+pc0fQ0QVm6YVLjvjnm8X9q2HpbtKXWtOU/fy+vXAG0bFPh0aopop6/nomwfyrZPdejgkeJqbKFiIWWxZxkSzwpWDMdJdI2nXsYBlG2UVVnk62uZmVCM6MRH3CX6nBsLgFEUooNnKSA/JPTkEkEJoqXMkiMBrOrorrOSuZsDNVX0pMM1ciRmLGAC8qmKU/ZWsgQtW7v8jEEJRHosAPqY/lypKNbw4vKCy/CJE7y8rxAfKWcEOEB77eroiSzcvURMtSWM0XPXJruF9DtLFlRRinvcn8rYMx7zOAYwYRUPeqotjv0xD22JHVfKv96BCPgFiHGQ4a5BS2NGPgcgeMWBCBzTDSpxlx1s9T4KwwCCFO19gnvQMz9pTiVyDW7yDIBiNT0uO5wGrhuUMByCD0EYDWCExQaU7Bh59tLN2v4YbRX+CQDBKdugOjX5zpIN5/0or2uBGDHS/vQHcT2kzRkKQOGk1WtyW42W8oQcCyAZeYnqrk8Pa2nCyXZQ4yYzFZZ6AgDDsK5jZ86TNG/ss7JMTIOdDAMm7FSQZFWx3BBEyXcd27KspRtESWQ6hjJXZUmAZv8a8PGNYttLfRcGgenq7+aafuC7umPbtrVeKRL3NUDQLAccXNf8B4PHQHQs7ZtFk53JmmGsFosFnMO5N/hveLoyDE2dfbPmUQw3nQmiKMHH2lxT7mwuy5IkCcJsyjGPW9oPptaT3VzATtMAAAAASUVORK5CYII=",
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
            actualHp: 1000,
            actualAp: 400,
            actualDps: 800.0,
            magnification: "200%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
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
          enemyId: "255",
          enemyName: "キョセーヌ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgICAgEDAwMDAwIEBAQEBAQEBAQGBQMGBQQGBgYGBgUHBgYKBgQICAgLBwcJCQkJCQgOCAYKCgoLCwsfCwATEA8SEhIhDgUnDQAnDQEbEw8kEQgYFhUaGBYgHx5EFwBQHQFSHQJYHwEuLi5hIgA3NzdsKgU+Pj5JSUmYNgB1RS2cOwewPgFiX17ARABpaWnVSwDpUgD9VAB+fn7sg0qin57IwLzhz8Xr6Ob59/b///////+8Ns7vAAAAQHRSTlMACf8RGSJR+ajl8DowfopIWf9mx9mZdbj80v99iMGwpPfr/rL5wtH135/75v30///7/PzY/f//+v/+/f7//wD/piZJ2AAAA3NJREFUWIXtlttyokoUhqGbg5xpAgjo9kBIVKKBVgyjxu37v9V0N6gzGty9a27mIr+xTFm1vnVeKPz7hxK+Ad+Ab8A34O8BdAuabmiFrglFCKFEBaEoPjC4kRn4WZ5Ppn5gB+PRP1SjcTBwHUOGPBh5NMnLoiwipKpRsW5VlqvV/PV56BnSf0DEcJKV7xgXhADyj9+0rdar+fPAfIgwY1QUOF2+ryMQrT9utC3zPH8dmg8CsCaoKPESU0C2vQUUEUBRlr24nUHITyjd/Sje36uiyWDLXucASFpEKJt3EpwpwsfPw4+PkmawvagBVBFgQlFsdJVQRfXpdDruMwCyVVmWTQtK9l9V5Qg1CNX+GgADlOxOlIARibT6pXxb0oNylUVqQ3jqKEHcAk77FIAov6vidt0ytC/9K70JQvXxSEPYJZRQ0QJU1SUPmlKZR18D5EBDCULLTxbCZ42Aqk7n89eX53EwHA4HVMNhMH6Z55Hqf2HfY+mRNh4bAu5bnmKYMtuldpvIJ5RMN/DvayAFbXmS5YEBTrth57iISnj3VaiDtskJbpPYyF0AQYS33zg+uACSmiVxrN1OwH0CPfUKOJdhP+QHuPrFHiWEUdMsDgvuOwR7F3MCIOOa1of/BTC0q3nC5h3hw3E34LUXLfXqvgGQbu7eHF6A1G/tiXuGaYoZd7fxRqYGmG/yB64A1LtrdpcUnXb/nH3S7Hwy5R8DT00a720bGWZicwdAapik51vTRIESPeCugCAG6cUeNPapH0rc9qQJyXkOWQWI/7j7cN/7N+zLHANaSJSofYd/iI3FZnn1zpqRxA8ePbfeF5v9565tHHWekm6oFq9/eUDMyeVYNoUnHApIeQMQnT7bWga4jDFAE84AoOej5njRZwBpPN1ICvH5AhA9sgAzFsKOWCWaZ6uATuHE5gyAHjFyvA7HY03jDqCrI6QjwF0BT2vXfv9GAFOFXBWk9VXeCpDnaDs+6oI8EZKRJMg+6nlTQuKUaWm6pgG9ZygamHqiAMfLkfmCOUtAY3AUw/JtU4C22qer42zeHA/z3yEq2aFLr/jsdsAFDswNDkkIUOI+BlSSAkXJ8ZwxfrNGy9gOrX48Ch//nPs1CsWz7OBpOpnNlpi80zSlG6X6QegaHFdBdIN+rBHpM4xrjPFMZ9I0/6lndfyYEoSfYUqpvJtp5sAAAAAASUVORK5CYII=",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 250000,
            ap: 12000,
            dps: 2748.09,
            speed: 10,
            range: 240,
            rangeType: "単体",
            kbLevel: 4,
            money: 950,
            freq: 131,
            foreswing: 32,
            backswing: 44,
            tba: 50
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 12000,
            actualDps: 2748.09,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 7200,
            actualDps: 11368.44,
            magnification: "600%",
            count: "3",
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
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 2400,
            actualDps: 2322.6,
            magnification: "1200%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 36000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "300%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 7200,
            actualDps: 11368.44,
            magnification: "600%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "255",
          enemyName: "キョセーヌ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgICAgEDAwMDAwIEBAQEBAQEBAQGBQMGBQQGBgYGBgUHBgYKBgQICAgLBwcJCQkJCQgOCAYKCgoLCwsfCwATEA8SEhIhDgUnDQAnDQEbEw8kEQgYFhUaGBYgHx5EFwBQHQFSHQJYHwEuLi5hIgA3NzdsKgU+Pj5JSUmYNgB1RS2cOwewPgFiX17ARABpaWnVSwDpUgD9VAB+fn7sg0qin57IwLzhz8Xr6Ob59/b///////+8Ns7vAAAAQHRSTlMACf8RGSJR+ajl8DowfopIWf9mx9mZdbj80v99iMGwpPfr/rL5wtH135/75v30///7/PzY/f//+v/+/f7//wD/piZJ2AAAA3NJREFUWIXtlttyokoUhqGbg5xpAgjo9kBIVKKBVgyjxu37v9V0N6gzGty9a27mIr+xTFm1vnVeKPz7hxK+Ad+Ab8A34O8BdAuabmiFrglFCKFEBaEoPjC4kRn4WZ5Ppn5gB+PRP1SjcTBwHUOGPBh5NMnLoiwipKpRsW5VlqvV/PV56BnSf0DEcJKV7xgXhADyj9+0rdar+fPAfIgwY1QUOF2+ryMQrT9utC3zPH8dmg8CsCaoKPESU0C2vQUUEUBRlr24nUHITyjd/Sje36uiyWDLXucASFpEKJt3EpwpwsfPw4+PkmawvagBVBFgQlFsdJVQRfXpdDruMwCyVVmWTQtK9l9V5Qg1CNX+GgADlOxOlIARibT6pXxb0oNylUVqQ3jqKEHcAk77FIAov6vidt0ytC/9K70JQvXxSEPYJZRQ0QJU1SUPmlKZR18D5EBDCULLTxbCZ42Aqk7n89eX53EwHA4HVMNhMH6Z55Hqf2HfY+mRNh4bAu5bnmKYMtuldpvIJ5RMN/DvayAFbXmS5YEBTrth57iISnj3VaiDtskJbpPYyF0AQYS33zg+uACSmiVxrN1OwH0CPfUKOJdhP+QHuPrFHiWEUdMsDgvuOwR7F3MCIOOa1of/BTC0q3nC5h3hw3E34LUXLfXqvgGQbu7eHF6A1G/tiXuGaYoZd7fxRqYGmG/yB64A1LtrdpcUnXb/nH3S7Hwy5R8DT00a720bGWZicwdAapik51vTRIESPeCugCAG6cUeNPapH0rc9qQJyXkOWQWI/7j7cN/7N+zLHANaSJSofYd/iI3FZnn1zpqRxA8ePbfeF5v9565tHHWekm6oFq9/eUDMyeVYNoUnHApIeQMQnT7bWga4jDFAE84AoOej5njRZwBpPN1ICvH5AhA9sgAzFsKOWCWaZ6uATuHE5gyAHjFyvA7HY03jDqCrI6QjwF0BT2vXfv9GAFOFXBWk9VXeCpDnaDs+6oI8EZKRJMg+6nlTQuKUaWm6pgG9ZygamHqiAMfLkfmCOUtAY3AUw/JtU4C22qer42zeHA/z3yEq2aFLr/jsdsAFDswNDkkIUOI+BlSSAkXJ8ZwxfrNGy9gOrX48Ch//nPs1CsWz7OBpOpnNlpi80zSlG6X6QegaHFdBdIN+rBHpM4xrjPFMZ9I0/6lndfyYEoSfYUqpvJtp5sAAAAAASUVORK5CYII=",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 250000,
            ap: 12000,
            dps: 2748.09,
            speed: 10,
            range: 240,
            rangeType: "単体",
            kbLevel: 4,
            money: 950,
            freq: 131,
            foreswing: 32,
            backswing: 44,
            tba: 50
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 12000,
            actualDps: 2748.09,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 10800,
            actualDps: 3306.12,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 10800,
            actualDps: 3306.12,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "108",
          enemyName: "バトルクマッチョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 83000,
            ap: 8300,
            dps: 3233.77,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 77,
            foreswing: 18,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 498000,
            actualAp: 49800,
            actualDps: 19402.62,
            magnification: "600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "秋の祭典 最上位 超極ムズ",
      baseHp: 800000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 180,
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
          amount: "1500000",
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
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 1600,
            actualDps: 1714.29,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 544500,
            actualAp: 3370,
            actualDps: 6741.0,
            magnification: "150%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "119",
          enemyName: "マンボーグ鈴木",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYICAgJCQkKCgoMDAwTExMeHh4iIiImJiYnJycoKCgzMzM0NDRGRkZISEhNTU1SUlJcW1t3d3d8fHyGhoabm5ucnJzIqguioqLWtx+xsbG2trblwxvlwyDixCbjxh7oxifjyDjxwi/BwcHrzTbbz2vez2fJycns1Erv2lnU1NTy3l/e3t716YH//wH364z07JXo6Ojv7+//+sb29vb7+/r///86574sAAAAQHRSTlMABwxIpbnI2OswPhMehCdCV2elGzx9X5jltYCz0ejL6wX/Ef7tQyMXUGF/Bv4f4cX9Onr+n//fAbj6////////5XCcigAAAmZJREFUWIXtltly2jAUhm2apV5IgADGi1giFydEbQWq2kaKpPd/q8imrKEzknzTi/5X4Jnz+Sw6v+x5lxSH0cXnxhpPBnetAMMSpa0Id4ChpE0VDwUVs14LQFRwRdMWKXRSKFQ5bANgSrHssVo2qh7nv2wBWMi3b6vnpy9aT8+rzXpuBfB1BvLtdbVeVlrL9ebn78oaoMTr9x87bdYvVgBdAlWK6yZ81aqql7lVuAbkXColc98ybq9oquMZzZ1PQlxwKSma5f3ALQm/B3QPdBcQSEInRJQz1UjQWeKwl35G1E6SFD3rJOJCqIP4bNSxTKAPsDwiyNLSHEKgh6COCdiOMMLqXDizqWIEqZBnhHJsHt9JIPkDkIoT2vwURWwMCMDh9RxBvG0o6hsD4oLte4jRZEGaQ8XS0BxA9i3ABJLtPw6AKeC+rKtnlFChS0C4WQspSGkDkGiBKeF14O5Qiql5CZQLsCBCHc+SC+MMOinS9wqEdQJ7CZBnpoCokEpKRhA7AqBBZLyTfnLy7kZsEpiGa91v/eikAKurthnDyTaWfStPuSsYP/WDkZ0naU89NhRR2jpSM4dD/6Zja0/0MyS326wEzl2+E8JJY8uSk+nY5XqKUgwFIxCk4weHcP2RVUohKUxD2+btAdN6Cixxvp39tG4BTVzjPT+vTQCbu+AHZfU2wRafmhmhSgKbBTxTHzDFU9cZaPWgbsHIPV4vtGxVgTecEex+CmoAYEWbBLwhhpYe8iGDgfllfElBt12857fK/7/+CfmdKI6DMPxUKwyDOI7sNjvsXl3f3H7e6fbm+qr7t814B6c1kYwVXmyVAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 1200000,
            ap: 9260,
            dps: 1076.74,
            speed: 3,
            range: 840,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3333,
            freq: 258,
            foreswing: 59,
            backswing: 62,
            tba: 100
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 9260,
            actualDps: 1076.74,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 4550,
            actualDps: 3791.69,
            magnification: "700%",
            count: "8",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 13500,
            actualDps: 4132.65,
            magnification: "500%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "80.0-86.7s",
            delayFrames: "2,400-2,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 2800,
            actualDps: 2709.7,
            magnification: "1400%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 2800,
            actualDps: 2709.7,
            magnification: "1400%",
            count: "5",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "秋の祭典 王位 超極ムズ",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 8,
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
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 8400,
            actualDps: 13263.18,
            magnification: "700%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16200,
            actualDps: 4959.18,
            magnification: "600%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "266",
          enemyName: "ヒカル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000000,
            ap: 2500,
            dps: 375.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 200,
            foreswing: 27,
            backswing: 66,
            tba: 87
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 3750,
            actualDps: 562.5,
            magnification: "150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 650,
                ld_range: [650, 1300]
            },
            "freeze": {
                chance: 100,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        },
        {
          enemyId: "108",
          enemyName: "バトルクマッチョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 83000,
            ap: 8300,
            dps: 3233.77,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 77,
            foreswing: 18,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 664000,
            actualAp: 66400,
            actualDps: 25870.16,
            magnification: "800%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5200,
            actualDps: 4333.36,
            magnification: "800%",
            count: "5",
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
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16200,
            actualDps: 4959.18,
            magnification: "600%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 3200,
            actualDps: 3096.8,
            magnification: "1600%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEDAgMEAwEEAwQGAwEEBAMEBAMFBQQGBQQLBQMHBwcKBwULBgUNBgMKCQkQCAQoGBE4EwAiISBEFgBGGAAkJCRJGQElJSVgIAA0NDQ2NjZiKAw7Ojk9PDw9PT19KwKJLgBzPCJNSkhLS0uYNQRXV1ewPQFdWFbBQgDTRwBra2ptbGvqTgB4eHf/VACDg4KOjY2ZmZmkpKSxsbG7u7vHx8fPz8/W1tbg4ODp6enz8/P7+/v///////8RYI8RAAAAQHRSTlMABxQhPy6hrc/dW5P7TL5q7Xyou/3szY7+2+GyU/7y/8r/8v/+5f6v///+/+n///7///7///7//////////wD/TwNUIQAABn9JREFUWIXdV2t3qjgULeDbay1WW2uHIoIMD0MkIYHwGP7/v5qToNW23tu77nybvVwikrOzc7LPid798x9x9z8g+CNo/Yn+Z5Gn8Pn94D8QGObTzhlofxzff9zFx/jxGwXabPaTEcbCT47H+Mn4NYE+WC1m+geZmrrTzB3EH5NN/xsF5i7YLOa9swzdMCbznqFps42Kdx6/UXDX2yRJtNuYHYNu3t+vVuP7ee8xOkqC1fy7JOqPMQyMFYM+mW5833FxdhivpYCj/9T7Jl4qOCqGuWaYKycKXMTLLHSiOIiSoz/8bgWQg6NCtDEXu8h3EStz5EaJbzmOE6xGs19G60Z/4McnhpXlu5iLPHWD5BhbQWSt18PeL2yg9c3F09Nq7XcEx2CNeE5D11oHcOPHlh8546k5+euv/i0WCH/aRXESWScFkLEwDX0QrygT30kCyw+sA2OH50smtM4md9rkcZfI9AVWciZIgiCGmyTqHBAkVpAEadU0JVmcGfS5OTfUdRN3gbHldB8g7p1KsSUBaPCKFlBh82QHfTYZDvqabm7OwmENnWUc5zpeJQXyQJuqbsui2PbfJQxHQ/MSD3B8EJM4a8uJPxLEse+VdZo1LCzI/OybaW86Gayuh0aW5YD/4jj+LCEBAWyZNoWX8sWZYGBOTz6/jIsjx/o0e0ftiTr1eNPwrNhestib776O/Tx5lwRUN2XZtG1Tl2cC2Efj8dZstxCFVdu0jcir9kLwXj6/gcTlbVuz7euB08WFYHZjBT9RsA55QV57+myxuJS1Nve/D1UAJztvW1MZ76rraWbw2/HBejSdf64kzfw9BfF6DQbZraZfSvHWLn4FVCOUVrSZfm1Js9/bBSitxH/6sgDAT33woRihpuPdozm50ZS1+e6jhMSXZ1ASuJfsxr7lJ9Z4sd/eaqrG4sM+xG7owiHoYuxfviKZmzgvabG/2ZV7T9F1fFbiIHFJlfmXr2rhRlZaVYdbJ5s+G63f05DA4Ib6Pq4a5pyXRKq6RI5X1OXhxsFiTPeUuGcGP+R5TiyLyPdYZjKB9owx9pY2vL8tep/TaCywaGrSNTBIVogAYffuwtJiJyT8BMYysp3pH05v/TmFGoUmIxMZWHCOVRKl4CyjyAoCC4u6lS1AcJoCwv3ff1+5QZschMgZTW1HdmRayaZbC5ZinNKMwgsxGV5SjNKMi7IsqzK/2kxjiHAIQ1nmxolL66auSo5DRFghqhpuBaEFz0hohzgllPJcCDhYLgpm+4xAGMxBfMgfoyTFKETYgxRABMGeLfkzxjn2gACY3l6vfuppJqmpOivawl6HKMxyIZMgEIapqO3ZKWaKH1ZBYGtLRA6zqxzqC1alpSKoPBvy1qjP0DQJaxqWZViQ7nHN8yqv2zrP9tdW0F+5SGs5QVtjXFOuwpsMFbD+tqY2zuVjgLBDleDcfjgRaPKoN7bgF5DX1HWNaZV2q6lTm6krXqKMdqIqmimmkpwV9O+hNI1twWlTM4KyEl6pmgRGF2rry5xiwrqvYJK2ripO0r3ZV0nov7wasAQB6665nCpkBcgFKXJ0W4k8Q8izPdJULAOvAoPgmZem9n6ruoKxTZ/1jqAVaQjm5TmpYfmkggMYDFAglKGQoqKimJd5dyBBOaCCv+pd/g5z40wAxB6kA45uxqqslIobQdK0qFPe5EywcyryvGxyRXD3zIrtpCNoM8K9jkBQXqKiUairuqlw3uR5xREv3kGeVRJmh4q9bqFEID0ZKVGoCCCoJigFEwLgglGljEGRrSoUhW/b5/7JA6yinpDb2PK0zmxFoHTyEFEF6c2Tt/KwUHXKXt9/pPVfDyQUQu5diXnh5cXJNI38GSLTUGFOz9tYoG6P+fPFycbM3ApYJAzliIa5OPmgqXEXVqH8nD1JoBJzTSCXUTRMebkgXl7hzolgQVpKCJQXuKuFlsliBODFdWPWnonIEZV9okB5Q0/Tia6lgZGwSLskNKyLpxQ9X59O/UcvXNr2FvCSNQI2sLOy6FDgjCHeNbnqhM5GZwWaifE43E56vZ65h8Fhxq6RhR50Y28v8ebBTeidjAyxRm82mZvDt7fRw/geMHqwpZjlD4ll6C1D+LwkcF2Ox+PRaGzj5RK/DM3JTG0k/B25Hz88PPy4IEx/2Pb5sy1fcAWS8/OlfMFsA/XzuFMwN83pdDAYDqWGl5eRmuodow7y2XA4GAym06k5n8x6UsG/cnQW3InnQYcAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 3200,
            actualDps: 3096.8,
            magnification: "1600%",
            count: "2",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1236Data;

