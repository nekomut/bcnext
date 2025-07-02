// Stage 2027 Data
import type { StageData } from '../../app/stage/types';

export const e2027Data: StageData = {
  eventId: 2027,
  eventName: "まもるよネコさん",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 27,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "にゃんパズルと一緒にまもるよ",
      baseHp: 3000,
      width: 4000,
      enemyLimit: 5,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "15",
          treasureName: "まもるよチケット",
          probability: "30",
          amount: "1",
          times: "0",
          limitText: "0"
        }],
      enemies: [
        {
          enemyId: "239",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQGBgYJCQkJCQkLCwsMDAwMDAwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDw8PDw8PDw8QEBAREREXFxcXFxcfHx4jIyMnJycoKCgpKSkqKSksLCw0NDQ0NDQ2NjY2NjY3Nzc7OztBQEBERERFRUVHR0dISEhJSUlJSUlKSkpKSkpKSkpLS0tLS0tMTExMTExMTExNTU1bW1tjYDuFgj6ZlzqwrTzDwFr///+5RUNPAAAAQHRSTlMACGz3g/8pqxdYjucwO0lieZ3By9ohuPbu/w3//9caM5z/v2D/3+5M//8/CRuRUX1l6/+z+Z/P3C4I//z///8AVEW4wAAAA+1JREFUWIXtlut2qkgQhQUVEOSigNJKjCTE0N4liAkI8/5vNdXFRT0resKa+ZlyiTb2/qjeVQ22/vmP0foF/AJ+Ab+A/w3ws5hp0vVw8kPZRWA86VeimdHjmgFmL654SYHTnZdZM8Dzm/uk1iN75D49N9J/vS68hV4PezB6bwbYBL43r0yYzD1/8doIsPqg1K+X/fzkB9H+qwlgHYc0eCuXvXpdUBrtVk0An6cwDKusV8eAhtGuUQbbAwDo5vkdYvl+omEYbZoAvvYRAyze3hYLOAQhAzRZwtcuooHvexAuvH2f0vDYJIM1KwKI3SmEC4yA0o/PBvrdAdqAyUmXEEBAEvSwWT9IebX+ZLFer1bMgQO7/pSQLgYBgh/Qw906rD73m4/4dIrjj+Nuv11uY1ok0O1eCGDkafn91Zeb+BAx15nXUXQ4nSKKBrqkJrhBmp2TY1EITu0JF/1sF5fiq4AVBOcsS6sciHfO0iyLCx810xmp1e2hP4c2vdGyQxD454zSLKkASR5O/TzdokYmhJi6BAjO1l+8AErEIsQXpdC2YAHNU0LScyHvdpM8IF5WAcZAcEaGbshDB5rEDyoGiFn/BJABzc4eKJh+Cl7Q/Jyc82SPifdFRiDjMXywCmMERbDmAcPBgyTPssxn+nNOiZvkeZ4e5rwmAEOQFVIEdlnFYOF6rOSM5Cdp6hfrTz24UJgkYaxpvMFDDlJv5BQAIJQMfHnYvtC4rA+mVRUhUcDCjn7hVUnqow92b2AqimmOsdcRgeHi2AcbWRuQUl90Ynh67RkdvWqBia2qAvpZ5lHFlCAACADDPN1SP+9ottC73GqhjHLlRYVAydTFShbbEfMDW6J4P+vzhipdP2A4Y1wTyiiGLtwA/OJ+UJgcHI7LFWti/vYJpVeAioNHLD6WptQv4s12XWxFSWh9C+iyjY8fVzEtzX16X9+5nXFGpX8QhIyk7+VXJpZz2067DBwppiiyfvkrYDy08NMyeL4jywNRHLVhMVZPkHrKTwCmJiKnw7GQIFSmM214qiLg7r8LroNCQxogp1//IFg3gLsZtNBEqz9BwNW8voLnoUzMg+F9AJbRsjls6bsA8z5AcxBQzLsC2GYJ0KzHGQg4UWip1i1AGpWe9M3HAJwIAGHIAPblvFhmYI/+AhgUgGLeBTCRYVdYakl6AED74UqYgXnZJxNWXwbACQ9MxCUoaktjritafR4bhI2LtQjfqznJRpPbA33AytgWO3Uw78YizxtsgmOofcGW/virymmyOLSg50m33Dx/7EHYYewH9qWtWOZQlNUbBCfoHYZQFAveEE69FVnAU6PtFOdBbY5Eub6d/guRZ8VteyDeOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 12000,
            ap: 3000,
            dps: 2903.23,
            speed: 15,
            range: 150,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 31,
            foreswing: 11,
            backswing: 12,
            tba: 6
          },
          stageStats: {
            actualHp: 120,
            actualAp: 30,
            actualDps: 29.03,
            magnification: "1%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-25.3s",
            delayFrames: "400-760f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1500, 1500],
                timings: [11, 19]
            }
          }
        },
        {
          enemyId: "238",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 8000,
            dps: 3200.0,
            speed: 12,
            range: 175,
            rangeType: "単体",
            kbLevel: 3,
            money: 500,
            freq: 75,
            foreswing: 16,
            backswing: 51,
            tba: 30
          },
          stageStats: {
            actualHp: 350,
            actualAp: 80,
            actualDps: 32.0,
            magnification: "1%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "239",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQGBgYJCQkJCQkLCwsMDAwMDAwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDw8PDw8PDw8QEBAREREXFxcXFxcfHx4jIyMnJycoKCgpKSkqKSksLCw0NDQ0NDQ2NjY2NjY3Nzc7OztBQEBERERFRUVHR0dISEhJSUlJSUlKSkpKSkpKSkpLS0tLS0tMTExMTExMTExNTU1bW1tjYDuFgj6ZlzqwrTzDwFr///+5RUNPAAAAQHRSTlMACGz3g/8pqxdYjucwO0lieZ3By9ohuPbu/w3//9caM5z/v2D/3+5M//8/CRuRUX1l6/+z+Z/P3C4I//z///8AVEW4wAAAA+1JREFUWIXtlut2qkgQhQUVEOSigNJKjCTE0N4liAkI8/5vNdXFRT0resKa+ZlyiTb2/qjeVQ22/vmP0foF/AJ+Ab+A/w3ws5hp0vVw8kPZRWA86VeimdHjmgFmL654SYHTnZdZM8Dzm/uk1iN75D49N9J/vS68hV4PezB6bwbYBL43r0yYzD1/8doIsPqg1K+X/fzkB9H+qwlgHYc0eCuXvXpdUBrtVk0An6cwDKusV8eAhtGuUQbbAwDo5vkdYvl+omEYbZoAvvYRAyze3hYLOAQhAzRZwtcuooHvexAuvH2f0vDYJIM1KwKI3SmEC4yA0o/PBvrdAdqAyUmXEEBAEvSwWT9IebX+ZLFer1bMgQO7/pSQLgYBgh/Qw906rD73m4/4dIrjj+Nuv11uY1ok0O1eCGDkafn91Zeb+BAx15nXUXQ4nSKKBrqkJrhBmp2TY1EITu0JF/1sF5fiq4AVBOcsS6sciHfO0iyLCx810xmp1e2hP4c2vdGyQxD454zSLKkASR5O/TzdokYmhJi6BAjO1l+8AErEIsQXpdC2YAHNU0LScyHvdpM8IF5WAcZAcEaGbshDB5rEDyoGiFn/BJABzc4eKJh+Cl7Q/Jyc82SPifdFRiDjMXywCmMERbDmAcPBgyTPssxn+nNOiZvkeZ4e5rwmAEOQFVIEdlnFYOF6rOSM5Cdp6hfrTz24UJgkYaxpvMFDDlJv5BQAIJQMfHnYvtC4rA+mVRUhUcDCjn7hVUnqow92b2AqimmOsdcRgeHi2AcbWRuQUl90Ynh67RkdvWqBia2qAvpZ5lHFlCAACADDPN1SP+9ottC73GqhjHLlRYVAydTFShbbEfMDW6J4P+vzhipdP2A4Y1wTyiiGLtwA/OJ+UJgcHI7LFWti/vYJpVeAioNHLD6WptQv4s12XWxFSWh9C+iyjY8fVzEtzX16X9+5nXFGpX8QhIyk7+VXJpZz2067DBwppiiyfvkrYDy08NMyeL4jywNRHLVhMVZPkHrKTwCmJiKnw7GQIFSmM214qiLg7r8LroNCQxogp1//IFg3gLsZtNBEqz9BwNW8voLnoUzMg+F9AJbRsjls6bsA8z5AcxBQzLsC2GYJ0KzHGQg4UWip1i1AGpWe9M3HAJwIAGHIAPblvFhmYI/+AhgUgGLeBTCRYVdYakl6AED74UqYgXnZJxNWXwbACQ9MxCUoaktjritafR4bhI2LtQjfqznJRpPbA33AytgWO3Uw78YizxtsgmOofcGW/virymmyOLSg50m33Dx/7EHYYewH9qWtWOZQlNUbBCfoHYZQFAveEE69FVnAU6PtFOdBbY5Eub6d/guRZ8VteyDeOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 12000,
            ap: 3000,
            dps: 2903.23,
            speed: 15,
            range: 150,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 31,
            foreswing: 11,
            backswing: 12,
            tba: 6
          },
          stageStats: {
            actualHp: 120,
            actualAp: 30,
            actualDps: 29.03,
            magnification: "1%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1500, 1500],
                timings: [11, 19]
            }
          }
        },
        {
          enemyId: "238",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 8000,
            dps: 3200.0,
            speed: 12,
            range: 175,
            rangeType: "単体",
            kbLevel: 3,
            money: 500,
            freq: 75,
            foreswing: 16,
            backswing: 51,
            tba: 30
          },
          stageStats: {
            actualHp: 350,
            actualAp: 80,
            actualDps: 32.0,
            magnification: "1%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "237",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 1004.18,
            speed: 7,
            range: 450,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 239,
            foreswing: 50,
            backswing: 26,
            tba: 95
          },
          stageStats: {
            actualHp: 1400,
            actualAp: 80,
            actualDps: 10.04,
            magnification: "1%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 75,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ねば～る君も一緒にまもるよ",
      baseHp: 100000,
      width: 3500,
      enemyLimit: 8,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "15",
          treasureName: "まもるよチケット",
          probability: "1",
          amount: "2",
          times: "0",
          limitText: "0"
        },
        {
          treasureId: "15",
          treasureName: "まもるよチケット",
          probability: "70",
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
            actualHp: 360,
            actualAp: 32,
            actualDps: 20.44,
            magnification: "400%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "9.0-12.0s",
            delayFrames: "270-360f",
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
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "12.0-23.3s",
            delayFrames: "360-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 400,
            actualDps: 545.45,
            magnification: "100%",
            count: "3",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "12.0-22.0s",
            delayFrames: "360-660f",
            baseHpRatio: "99%",
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
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "17.3-25.3s",
            delayFrames: "520-760f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "241",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 5000,
            dps: 724.64,
            speed: 10,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 207,
            foreswing: 28,
            backswing: 73,
            tba: 90
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2500,
            actualDps: 362.32,
            magnification: "50%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 75,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "みんなでまもるよネコさん",
      baseHp: 200000,
      width: 4200,
      enemyLimit: 8,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "15",
          treasureName: "まもるよチケット",
          probability: "5",
          amount: "3",
          times: "0",
          limitText: "0"
        },
        {
          treasureId: "15",
          treasureName: "まもるよチケット",
          probability: "15",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "15",
          treasureName: "まもるよチケット",
          probability: "90",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "239",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQGBgYJCQkJCQkLCwsMDAwMDAwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDw8PDw8PDw8QEBAREREXFxcXFxcfHx4jIyMnJycoKCgpKSkqKSksLCw0NDQ0NDQ2NjY2NjY3Nzc7OztBQEBERERFRUVHR0dISEhJSUlJSUlKSkpKSkpKSkpLS0tLS0tMTExMTExMTExNTU1bW1tjYDuFgj6ZlzqwrTzDwFr///+5RUNPAAAAQHRSTlMACGz3g/8pqxdYjucwO0lieZ3By9ohuPbu/w3//9caM5z/v2D/3+5M//8/CRuRUX1l6/+z+Z/P3C4I//z///8AVEW4wAAAA+1JREFUWIXtlut2qkgQhQUVEOSigNJKjCTE0N4liAkI8/5vNdXFRT0resKa+ZlyiTb2/qjeVQ22/vmP0foF/AJ+Ab+A/w3ws5hp0vVw8kPZRWA86VeimdHjmgFmL654SYHTnZdZM8Dzm/uk1iN75D49N9J/vS68hV4PezB6bwbYBL43r0yYzD1/8doIsPqg1K+X/fzkB9H+qwlgHYc0eCuXvXpdUBrtVk0An6cwDKusV8eAhtGuUQbbAwDo5vkdYvl+omEYbZoAvvYRAyze3hYLOAQhAzRZwtcuooHvexAuvH2f0vDYJIM1KwKI3SmEC4yA0o/PBvrdAdqAyUmXEEBAEvSwWT9IebX+ZLFer1bMgQO7/pSQLgYBgh/Qw906rD73m4/4dIrjj+Nuv11uY1ok0O1eCGDkafn91Zeb+BAx15nXUXQ4nSKKBrqkJrhBmp2TY1EITu0JF/1sF5fiq4AVBOcsS6sciHfO0iyLCx810xmp1e2hP4c2vdGyQxD454zSLKkASR5O/TzdokYmhJi6BAjO1l+8AErEIsQXpdC2YAHNU0LScyHvdpM8IF5WAcZAcEaGbshDB5rEDyoGiFn/BJABzc4eKJh+Cl7Q/Jyc82SPifdFRiDjMXywCmMERbDmAcPBgyTPssxn+nNOiZvkeZ4e5rwmAEOQFVIEdlnFYOF6rOSM5Cdp6hfrTz24UJgkYaxpvMFDDlJv5BQAIJQMfHnYvtC4rA+mVRUhUcDCjn7hVUnqow92b2AqimmOsdcRgeHi2AcbWRuQUl90Ynh67RkdvWqBia2qAvpZ5lHFlCAACADDPN1SP+9ottC73GqhjHLlRYVAydTFShbbEfMDW6J4P+vzhipdP2A4Y1wTyiiGLtwA/OJ+UJgcHI7LFWti/vYJpVeAioNHLD6WptQv4s12XWxFSWh9C+iyjY8fVzEtzX16X9+5nXFGpX8QhIyk7+VXJpZz2067DBwppiiyfvkrYDy08NMyeL4jywNRHLVhMVZPkHrKTwCmJiKnw7GQIFSmM214qiLg7r8LroNCQxogp1//IFg3gLsZtNBEqz9BwNW8voLnoUzMg+F9AJbRsjls6bsA8z5AcxBQzLsC2GYJ0KzHGQg4UWip1i1AGpWe9M3HAJwIAGHIAPblvFhmYI/+AhgUgGLeBTCRYVdYakl6AED74UqYgXnZJxNWXwbACQ9MxCUoaktjritafR4bhI2LtQjfqznJRpPbA33AytgWO3Uw78YizxtsgmOofcGW/virymmyOLSg50m33Dx/7EHYYewH9qWtWOZQlNUbBCfoHYZQFAveEE69FVnAU6PtFOdBbY5Eub6d/guRZ8VteyDeOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 12000,
            ap: 3000,
            dps: 2903.23,
            speed: 15,
            range: 150,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 31,
            foreswing: 11,
            backswing: 12,
            tba: 6
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 3000,
            actualDps: 2903.23,
            magnification: "100%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "4.0-18.7s",
            delayFrames: "120-560f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1500, 1500],
                timings: [11, 19]
            }
          }
        },
        {
          enemyId: "238",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 8000,
            dps: 3200.0,
            speed: 12,
            range: 175,
            rangeType: "単体",
            kbLevel: 3,
            money: 500,
            freq: 75,
            foreswing: 16,
            backswing: 51,
            tba: 30
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 8000,
            actualDps: 3200.0,
            magnification: "100%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-40.0s",
            delayFrames: "60-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "240",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 70000,
            ap: 6000,
            dps: 1208.05,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 1,
            money: 750,
            freq: 149,
            foreswing: 30,
            backswing: 51,
            tba: 60
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 6000,
            actualDps: 1208.05,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-60.0s",
            delayFrames: "60-1,800f",
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
          enemyId: "239",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQGBgYJCQkJCQkLCwsMDAwMDAwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDw8PDw8PDw8QEBAREREXFxcXFxcfHx4jIyMnJycoKCgpKSkqKSksLCw0NDQ0NDQ2NjY2NjY3Nzc7OztBQEBERERFRUVHR0dISEhJSUlJSUlKSkpKSkpKSkpLS0tLS0tMTExMTExMTExNTU1bW1tjYDuFgj6ZlzqwrTzDwFr///+5RUNPAAAAQHRSTlMACGz3g/8pqxdYjucwO0lieZ3By9ohuPbu/w3//9caM5z/v2D/3+5M//8/CRuRUX1l6/+z+Z/P3C4I//z///8AVEW4wAAAA+1JREFUWIXtlut2qkgQhQUVEOSigNJKjCTE0N4liAkI8/5vNdXFRT0resKa+ZlyiTb2/qjeVQ22/vmP0foF/AJ+Ab+A/w3ws5hp0vVw8kPZRWA86VeimdHjmgFmL654SYHTnZdZM8Dzm/uk1iN75D49N9J/vS68hV4PezB6bwbYBL43r0yYzD1/8doIsPqg1K+X/fzkB9H+qwlgHYc0eCuXvXpdUBrtVk0An6cwDKusV8eAhtGuUQbbAwDo5vkdYvl+omEYbZoAvvYRAyze3hYLOAQhAzRZwtcuooHvexAuvH2f0vDYJIM1KwKI3SmEC4yA0o/PBvrdAdqAyUmXEEBAEvSwWT9IebX+ZLFer1bMgQO7/pSQLgYBgh/Qw906rD73m4/4dIrjj+Nuv11uY1ok0O1eCGDkafn91Zeb+BAx15nXUXQ4nSKKBrqkJrhBmp2TY1EITu0JF/1sF5fiq4AVBOcsS6sciHfO0iyLCx810xmp1e2hP4c2vdGyQxD454zSLKkASR5O/TzdokYmhJi6BAjO1l+8AErEIsQXpdC2YAHNU0LScyHvdpM8IF5WAcZAcEaGbshDB5rEDyoGiFn/BJABzc4eKJh+Cl7Q/Jyc82SPifdFRiDjMXywCmMERbDmAcPBgyTPssxn+nNOiZvkeZ4e5rwmAEOQFVIEdlnFYOF6rOSM5Cdp6hfrTz24UJgkYaxpvMFDDlJv5BQAIJQMfHnYvtC4rA+mVRUhUcDCjn7hVUnqow92b2AqimmOsdcRgeHi2AcbWRuQUl90Ynh67RkdvWqBia2qAvpZ5lHFlCAACADDPN1SP+9ottC73GqhjHLlRYVAydTFShbbEfMDW6J4P+vzhipdP2A4Y1wTyiiGLtwA/OJ+UJgcHI7LFWti/vYJpVeAioNHLD6WptQv4s12XWxFSWh9C+iyjY8fVzEtzX16X9+5nXFGpX8QhIyk7+VXJpZz2067DBwppiiyfvkrYDy08NMyeL4jywNRHLVhMVZPkHrKTwCmJiKnw7GQIFSmM214qiLg7r8LroNCQxogp1//IFg3gLsZtNBEqz9BwNW8voLnoUzMg+F9AJbRsjls6bsA8z5AcxBQzLsC2GYJ0KzHGQg4UWip1i1AGpWe9M3HAJwIAGHIAPblvFhmYI/+AhgUgGLeBTCRYVdYakl6AED74UqYgXnZJxNWXwbACQ9MxCUoaktjritafR4bhI2LtQjfqznJRpPbA33AytgWO3Uw78YizxtsgmOofcGW/virymmyOLSg50m33Dx/7EHYYewH9qWtWOZQlNUbBCfoHYZQFAveEE69FVnAU6PtFOdBbY5Eub6d/guRZ8VteyDeOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 12000,
            ap: 3000,
            dps: 2903.23,
            speed: 15,
            range: 150,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 31,
            foreswing: 11,
            backswing: 12,
            tba: 6
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 3000,
            actualDps: 2903.23,
            magnification: "100%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1500, 1500],
                timings: [11, 19]
            }
          }
        },
        {
          enemyId: "241",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 5000,
            dps: 724.64,
            speed: 10,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 207,
            foreswing: 28,
            backswing: 73,
            tba: 90
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 5000,
            actualDps: 724.64,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 75,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "239",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQGBgYJCQkJCQkLCwsMDAwMDAwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDw8PDw8PDw8QEBAREREXFxcXFxcfHx4jIyMnJycoKCgpKSkqKSksLCw0NDQ0NDQ2NjY2NjY3Nzc7OztBQEBERERFRUVHR0dISEhJSUlJSUlKSkpKSkpKSkpLS0tLS0tMTExMTExMTExNTU1bW1tjYDuFgj6ZlzqwrTzDwFr///+5RUNPAAAAQHRSTlMACGz3g/8pqxdYjucwO0lieZ3By9ohuPbu/w3//9caM5z/v2D/3+5M//8/CRuRUX1l6/+z+Z/P3C4I//z///8AVEW4wAAAA+1JREFUWIXtlut2qkgQhQUVEOSigNJKjCTE0N4liAkI8/5vNdXFRT0resKa+ZlyiTb2/qjeVQ22/vmP0foF/AJ+Ab+A/w3ws5hp0vVw8kPZRWA86VeimdHjmgFmL654SYHTnZdZM8Dzm/uk1iN75D49N9J/vS68hV4PezB6bwbYBL43r0yYzD1/8doIsPqg1K+X/fzkB9H+qwlgHYc0eCuXvXpdUBrtVk0An6cwDKusV8eAhtGuUQbbAwDo5vkdYvl+omEYbZoAvvYRAyze3hYLOAQhAzRZwtcuooHvexAuvH2f0vDYJIM1KwKI3SmEC4yA0o/PBvrdAdqAyUmXEEBAEvSwWT9IebX+ZLFer1bMgQO7/pSQLgYBgh/Qw906rD73m4/4dIrjj+Nuv11uY1ok0O1eCGDkafn91Zeb+BAx15nXUXQ4nSKKBrqkJrhBmp2TY1EITu0JF/1sF5fiq4AVBOcsS6sciHfO0iyLCx810xmp1e2hP4c2vdGyQxD454zSLKkASR5O/TzdokYmhJi6BAjO1l+8AErEIsQXpdC2YAHNU0LScyHvdpM8IF5WAcZAcEaGbshDB5rEDyoGiFn/BJABzc4eKJh+Cl7Q/Jyc82SPifdFRiDjMXywCmMERbDmAcPBgyTPssxn+nNOiZvkeZ4e5rwmAEOQFVIEdlnFYOF6rOSM5Cdp6hfrTz24UJgkYaxpvMFDDlJv5BQAIJQMfHnYvtC4rA+mVRUhUcDCjn7hVUnqow92b2AqimmOsdcRgeHi2AcbWRuQUl90Ynh67RkdvWqBia2qAvpZ5lHFlCAACADDPN1SP+9ottC73GqhjHLlRYVAydTFShbbEfMDW6J4P+vzhipdP2A4Y1wTyiiGLtwA/OJ+UJgcHI7LFWti/vYJpVeAioNHLD6WptQv4s12XWxFSWh9C+iyjY8fVzEtzX16X9+5nXFGpX8QhIyk7+VXJpZz2067DBwppiiyfvkrYDy08NMyeL4jywNRHLVhMVZPkHrKTwCmJiKnw7GQIFSmM214qiLg7r8LroNCQxogp1//IFg3gLsZtNBEqz9BwNW8voLnoUzMg+F9AJbRsjls6bsA8z5AcxBQzLsC2GYJ0KzHGQg4UWip1i1AGpWe9M3HAJwIAGHIAPblvFhmYI/+AhgUgGLeBTCRYVdYakl6AED74UqYgXnZJxNWXwbACQ9MxCUoaktjritafR4bhI2LtQjfqznJRpPbA33AytgWO3Uw78YizxtsgmOofcGW/virymmyOLSg50m33Dx/7EHYYewH9qWtWOZQlNUbBCfoHYZQFAveEE69FVnAU6PtFOdBbY5Eub6d/guRZ8VteyDeOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 12000,
            ap: 3000,
            dps: 2903.23,
            speed: 15,
            range: 150,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 31,
            foreswing: 11,
            backswing: 12,
            tba: 6
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 3000,
            actualDps: 2903.23,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1500, 1500],
                timings: [11, 19]
            }
          }
        },
        {
          enemyId: "238",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 8000,
            dps: 3200.0,
            speed: 12,
            range: 175,
            rangeType: "単体",
            kbLevel: 3,
            money: 500,
            freq: 75,
            foreswing: 16,
            backswing: 51,
            tba: 30
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 8000,
            actualDps: 3200.0,
            magnification: "100%",
            count: "4",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-40.0s",
            delayFrames: "300-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "240",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 70000,
            ap: 6000,
            dps: 1208.05,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 1,
            money: 750,
            freq: 149,
            foreswing: 30,
            backswing: 51,
            tba: 60
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 6000,
            actualDps: 1208.05,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
          enemyId: "239",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQGBgYJCQkJCQkLCwsMDAwMDAwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PDw8PDw8PDw8QEBAREREXFxcXFxcfHx4jIyMnJycoKCgpKSkqKSksLCw0NDQ0NDQ2NjY2NjY3Nzc7OztBQEBERERFRUVHR0dISEhJSUlJSUlKSkpKSkpKSkpLS0tLS0tMTExMTExMTExNTU1bW1tjYDuFgj6ZlzqwrTzDwFr///+5RUNPAAAAQHRSTlMACGz3g/8pqxdYjucwO0lieZ3By9ohuPbu/w3//9caM5z/v2D/3+5M//8/CRuRUX1l6/+z+Z/P3C4I//z///8AVEW4wAAAA+1JREFUWIXtlut2qkgQhQUVEOSigNJKjCTE0N4liAkI8/5vNdXFRT0resKa+ZlyiTb2/qjeVQ22/vmP0foF/AJ+Ab+A/w3ws5hp0vVw8kPZRWA86VeimdHjmgFmL654SYHTnZdZM8Dzm/uk1iN75D49N9J/vS68hV4PezB6bwbYBL43r0yYzD1/8doIsPqg1K+X/fzkB9H+qwlgHYc0eCuXvXpdUBrtVk0An6cwDKusV8eAhtGuUQbbAwDo5vkdYvl+omEYbZoAvvYRAyze3hYLOAQhAzRZwtcuooHvexAuvH2f0vDYJIM1KwKI3SmEC4yA0o/PBvrdAdqAyUmXEEBAEvSwWT9IebX+ZLFer1bMgQO7/pSQLgYBgh/Qw906rD73m4/4dIrjj+Nuv11uY1ok0O1eCGDkafn91Zeb+BAx15nXUXQ4nSKKBrqkJrhBmp2TY1EITu0JF/1sF5fiq4AVBOcsS6sciHfO0iyLCx810xmp1e2hP4c2vdGyQxD454zSLKkASR5O/TzdokYmhJi6BAjO1l+8AErEIsQXpdC2YAHNU0LScyHvdpM8IF5WAcZAcEaGbshDB5rEDyoGiFn/BJABzc4eKJh+Cl7Q/Jyc82SPifdFRiDjMXywCmMERbDmAcPBgyTPssxn+nNOiZvkeZ4e5rwmAEOQFVIEdlnFYOF6rOSM5Cdp6hfrTz24UJgkYaxpvMFDDlJv5BQAIJQMfHnYvtC4rA+mVRUhUcDCjn7hVUnqow92b2AqimmOsdcRgeHi2AcbWRuQUl90Ynh67RkdvWqBia2qAvpZ5lHFlCAACADDPN1SP+9ottC73GqhjHLlRYVAydTFShbbEfMDW6J4P+vzhipdP2A4Y1wTyiiGLtwA/OJ+UJgcHI7LFWti/vYJpVeAioNHLD6WptQv4s12XWxFSWh9C+iyjY8fVzEtzX16X9+5nXFGpX8QhIyk7+VXJpZz2067DBwppiiyfvkrYDy08NMyeL4jywNRHLVhMVZPkHrKTwCmJiKnw7GQIFSmM214qiLg7r8LroNCQxogp1//IFg3gLsZtNBEqz9BwNW8voLnoUzMg+F9AJbRsjls6bsA8z5AcxBQzLsC2GYJ0KzHGQg4UWip1i1AGpWe9M3HAJwIAGHIAPblvFhmYI/+AhgUgGLeBTCRYVdYakl6AED74UqYgXnZJxNWXwbACQ9MxCUoaktjritafR4bhI2LtQjfqznJRpPbA33AytgWO3Uw78YizxtsgmOofcGW/virymmyOLSg50m33Dx/7EHYYewH9qWtWOZQlNUbBCfoHYZQFAveEE69FVnAU6PtFOdBbY5Eub6d/guRZ8VteyDeOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 12000,
            ap: 3000,
            dps: 2903.23,
            speed: 15,
            range: 150,
            rangeType: "単体",
            kbLevel: 4,
            money: 150,
            freq: 31,
            foreswing: 11,
            backswing: 12,
            tba: 6
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 3000,
            actualDps: 2903.23,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1500, 1500],
                timings: [11, 19]
            }
          }
        },
        {
          enemyId: "237",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 1004.18,
            speed: 7,
            range: 450,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 239,
            foreswing: 50,
            backswing: 26,
            tba: 95
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 8000,
            actualDps: 1004.18,
            magnification: "100%",
            count: "1",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 75,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    }
  ]
} as const;

export default e2027Data;

