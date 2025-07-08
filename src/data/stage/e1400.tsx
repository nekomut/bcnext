// Stage 1400 Data
import type { StageData } from '../../app/stage/types';

export const e1400Data: StageData = {
  eventId: 1400,
  eventName: "蒼船来航",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 400,
  specialRule: {
    name: "",
    explanation: "",
    ruleTypes: {
      "0": {
        "Parameters": [4500]
      }
    },
    contentsType: 1
  },
  crownData: {
    crownCount: 2,
    magnifications: [100, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "水面に映る蒼い影",
      baseHp: 50000,
      width: 5200,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "207",
          treasureName: "初期金額増加(戦国イベント)。最大数999999",
          probability: "100",
          amount: "250",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7800",
          treasureName: "キャラクタードロップ(7800)",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6900",
          treasureName: "キャラクタードロップ(6900)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "2000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3250",
          treasureName: "キャラクタードロップ(3250)",
          probability: "10000",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 450,
            actualAp: 75,
            actualDps: 54.88,
            magnification: "50%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 450,
            actualAp: 75,
            actualDps: 54.88,
            magnification: "50%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 150,
            actualDps: 91.83,
            magnification: "50%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "蒼き者たちの侵略",
      baseHp: 95000,
      width: 3900,
      enemyLimit: 12,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "207",
          treasureName: "初期金額増加(戦国イベント)。最大数999999",
          probability: "100",
          amount: "500",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7450",
          treasureName: "キャラクタードロップ(7450)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6900",
          treasureName: "キャラクタードロップ(6900)",
          probability: "2500",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3700",
          treasureName: "キャラクタードロップ(3700)",
          probability: "200000",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1250",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 7000,
            actualAp: 200,
            actualDps: 181.82,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 900,
            actualAp: 150,
            actualDps: 109.76,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "15.0-30.0s",
            delayFrames: "450-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "170",
          enemyName: "ゴマサーマン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIEBAQEBAQFBQYFBQUGBgYGBwcGBwgHBwgHCAkICwsJDAwKCwwNExIOFRQRGBkTHhsUIB4WIB4YIyMaJyYbKCcgMTAhMzIiNDEjNTUlNjUlOTcnPTotQ0ExTUk0Tks3U1A/YF0/YV5DZ2NNc3JOd3NVfIVZh4ZhlI5jlpJlm5ZnnJtvp6d0sa16urV/wb+GzMaM1tGR39WV5d6Z6+Gc8uef+Oyh/u7///+Aubl2AAAAQHRSTlMAAwkOhNoYlShBIF8wTHFW8KK4OmjDf1jRk2z7pbfT55LF+6nOd/7A3Or//+7//P7p9//9/v///f////////8A7QPXDAAAA71JREFUWIXtVml3qjoUFbCIVksLDsWhFuWiTEEIJAES3v//Vy9UtHrrxLpfe5YfxOXe2WefgbT++8do/RL8EvwS7AkeD2ky7QsN/v93iFMfbvR/IJAXiEbTxhIE8QARh5tdspab4vXP6QEjKp9wN2koobdJd9+y9S3e9JoR6D7F37KlNW4qobeJQmcq1k/CZIcbuiDo0zXYTg4Myibzm1ZSUDbQ6ta6pU+cGOJtwE+GiQ8XVQsKktQzImQqDQla8jyO5j1RGRrrzdJ2l22loQZBdQgwxpafkDzDMHDMsdKsFPI8zUFEaPkVrEhsTW/EIEwjxspDMBrMVuagSRryG9jjiyTlMlhsh4k1lB8WIb4s8f7wZDZLyzKPA8KwM1cfpZC1sE4A2S4uqTdbobLEgaMNHmPQP8gh/bxgjMaeDSlLPAzM/mMZ+LQ8DZa7dhC6gFJ/+IgEaZ6ewbl6N4FxUrASGtIDBD2TnOJRknpx7Uk6f4Sgb2WnClLXhYeUkocUdLcFO5WQ5cfHaPyIB6p/ij+lYr56Fy1I/UMb/ox8e2+5CPLAsFbxFXxJNrfXm9ibrB2Y2ugaAV7f8lDsj00fFQx6xbUU0I0iCPJ0E2HKoSS7Aq8UXE1B6M932bWDj5FZ10wU9AWAqCK4SULB+PJaEbpmBAPEGMlvS8CXN7Sgm7CACc1hkN4moP7zpVZUFhFllOahF+d3fACXelkc+8WXRQDew5excYFAtzDLimr73i0DXwgVgSCKwjeRbEQ0BaTMCb0HZyysUpAG4/FwoNRXGfHZyVmKuAPB9Q46ROHwtSqNnSgCjmmofUkQJNVC+7UVJHcVlMTqV/uCVK8rDH3LUFVji3L09cMxg6tO1DtxsE1IxueFURL6fpRRXv1zTE6uMOSOWlnwsnQ9D9eu8A/5yz0Wx5dFsFD7GiZ9Swi+UXHi4m/Rp/jUHil7ggSmrH79/uRh4eHFxs7nk7ixb/CLgtB9twHPmhYEk2p3nK1gfo5H6q8InLYWcYMijxZqq78AhBYo8p3lh7UFqDg7v0jcpB7rLIAnlwTkenxUaWq2Bg4h0Fm0n9WuoujDhROntYs8qwJ4+5KwPPHCoz6KwWoGEMZ4t+ata/EG6NXdLKmj19nKgzjLKWUsc8MUIZSmoedVdwtOyjNFweqVx3Lx58+E2ygpinQcBbHb1p6eXjmJbbteAMLQc3kEIE5iHiBw7dVsxtFPT1pncDpDx20iyr3+4Pml3e503jRt9P5Rx/toNNK0t7dOp91+eR7oirw/9n+sqydRIdA1ogAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 365.85,
            speed: 5,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 41,
            foreswing: 6,
            backswing: 12,
            tba: 18
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 500,
            actualDps: 365.85,
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
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 7000,
            actualAp: 200,
            actualDps: 181.82,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 900,
            actualAp: 150,
            actualDps: 109.76,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "押し寄せる蒼い波",
      baseHp: 300000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "207",
          treasureName: "初期金額増加(戦国イベント)。最大数999999",
          probability: "100",
          amount: "650",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5600",
          treasureName: "キャラクタードロップ(5600)",
          probability: "1",
          amount: "55",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4800",
          treasureName: "キャラクタードロップ(4800)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "2500",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2250",
          treasureName: "キャラクタードロップ(2250)",
          probability: "400000",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1250",
          amount: "52",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 8709.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1836.7,
            magnification: "1000%",
            count: "8",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2000,
            actualDps: 1818.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "723",
          enemyName: "アンドロメ・ダ長官",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQHCAgOExMOFBQPFhUTHBwTHRwXKCcdKigiLCsfLy0lMDApPDsqRUMsRkM7VlQ3W1ZDZmFJcWxKdG1Of3pXhX1Uh4JckIlSmpOIhYZon5lrraVnvbV7t6+HvrpvysB11MqGzcN429B84dad09CA6N2V4NeF8eag7eaI+eyk9e7a3d2R/vqj/vCo/ve0/v/A/v/L/v/g/v////9VdWEVAAAAQHRSTlMADmHNIi47Tm5/l7b84F9+kf+n6L3/dYuu/8vE/uH/zf/o//7/////////////////////////////////////u7YFTQAAAzBJREFUWIWll1tjojoUhQPlolatUh2LDRlKaCLKRS5SycX+/391oj1zXs7DQMgLL37LhL2y9gaAfst4+1gBMJn2/Pn/l1t9U7A8N2+6AtZHE4AXcdtrbyHYG2BJ3x1d3sZLAFCg/f9giR1gx0t9gV+RDd6wMUbAGnUC8AtbINqNEFjGloXdEQI2cWxijRAAH789NBnBT0NWHY+Bto9cyAVcCwmXtl4pzUTy9bxpv77PnxutHWRcHaE+fn99fWrZcVLxjsnT5+diZ+vwwMKSsY4f11r0fU2pYKwKRjjBDJgccxfUHtqRAh4T76ME9pxrJ+pjBbJbjeFtIqsxlwmYhTwOygPLXHmL/ct/hfeYxANcYHvhIS9OZQH/NDMkRJ+mYkxs4M6MVVRe66KoL9dw+/S4v9NKtH3eoYHILECvxbVM07Q4xQeEqr35/NhA8vc0Uf+FZUZRWadFrXZw2IYRvYkwmXqcix4+nAR7zDFM67Q+hNGpqBGVIkMJQRVnrMcJJkwwAeNLcSUwjg9FkfptC2nTCN6JY488NLCgCS7qU+jTS12kFwI5iSTrOsZ61cBZVGcELwd/68dpkRa5f5aYcCXQyaSPi16zjncw9TEiZZ7mj1eA6V1AtF4PHjiwYgLHsR9e0jIvyTZLWkK54lm/KDbWjZQVoRjFJTkVKQ4hTlQaivO2Z5S67zSrkE+ibYjSPK+vNGSqCupIvcczxzWdVx/7h2tZl5fSJ6KCCJ/3Q9LUmMEI+jmFUXxCIeS8u/FB86EJKW4IQiFB5HpB+JZAOqyd7SBR1mP8lkTXK11zZNkD29HkpKzPeKv8HCahPzwKPeUdVTvfJ0lCdu7ghm4m6k5xBDPBj/vhc5GKIyk49SPWBJ7ORLJqZYU27oyJjd4wsun4RtnGpZ3mWGj+kG4jNAXc+kG6lbbAD+nkXLOTKfLl/sgazclWkaZ62FmmN07dyXv1rSPV/Dr4l7SSDz3+D2nR37oCP6SVjBRYdbqfiNPmQXptpjkSeW1yT0AnZ+h9t9SohKvItxfXppJkIlwMpO3p81PyIOdzH67X8/l8sXh6nvXOhbvAHKH19o7+rL8I/AM7cnITlN3ChAAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 700000,
            ap: 14000,
            dps: 22105.26,
            speed: 16,
            range: 290,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 19,
            foreswing: 4,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 14000,
            actualDps: 22105.26,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 15,
                distance: 800,
                duration_f: 200,
                duration_s: 6.67
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
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 8709.7,
            magnification: "1000%",
            count: "15",
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
            actualHp: 200000,
            actualAp: 8000,
            actualDps: 7500.0,
            magnification: "1000%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
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
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2000,
            actualDps: 1818.2,
            magnification: "1000%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "蒼色に染まる戦場",
      baseHp: 700000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "207",
          treasureName: "初期金額増加(戦国イベント)。最大数999999",
          probability: "100",
          amount: "750",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4200",
          treasureName: "キャラクタードロップ(4200)",
          probability: "1",
          amount: "56",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3650",
          treasureName: "キャラクタードロップ(3650)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3100",
          treasureName: "キャラクタードロップ(3100)",
          probability: "3000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1800",
          treasureName: "キャラクタードロップ(1800)",
          probability: "700000",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1500",
          amount: "53",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 16200,
            actualAp: 2700,
            actualDps: 1975.68,
            magnification: "1800%",
            count: "8",
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
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 30000,
            actualDps: 21951.2,
            magnification: "800%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "182",
          enemyName: "ハサミーマン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 24000,
            ap: 2800,
            dps: 1647.06,
            speed: 24,
            range: 199,
            rangeType: "範囲",
            kbLevel: 3,
            money: 700,
            freq: 51,
            foreswing: 12,
            backswing: 39,
            tba: 1
          },
          stageStats: {
            actualHp: 192000,
            actualAp: 22400,
            actualDps: 13176.48,
            magnification: "800%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            }
          }
        },
        {
          enemyId: "723",
          enemyName: "アンドロメ・ダ長官",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQHCAgOExMOFBQPFhUTHBwTHRwXKCcdKigiLCsfLy0lMDApPDsqRUMsRkM7VlQ3W1ZDZmFJcWxKdG1Of3pXhX1Uh4JckIlSmpOIhYZon5lrraVnvbV7t6+HvrpvysB11MqGzcN429B84dad09CA6N2V4NeF8eag7eaI+eyk9e7a3d2R/vqj/vCo/ve0/v/A/v/L/v/g/v////9VdWEVAAAAQHRSTlMADmHNIi47Tm5/l7b84F9+kf+n6L3/dYuu/8vE/uH/zf/o//7/////////////////////////////////////u7YFTQAAAzBJREFUWIWll1tjojoUhQPlolatUh2LDRlKaCLKRS5SycX+/391oj1zXs7DQMgLL37LhL2y9gaAfst4+1gBMJn2/Pn/l1t9U7A8N2+6AtZHE4AXcdtrbyHYG2BJ3x1d3sZLAFCg/f9giR1gx0t9gV+RDd6wMUbAGnUC8AtbINqNEFjGloXdEQI2cWxijRAAH789NBnBT0NWHY+Bto9cyAVcCwmXtl4pzUTy9bxpv77PnxutHWRcHaE+fn99fWrZcVLxjsnT5+diZ+vwwMKSsY4f11r0fU2pYKwKRjjBDJgccxfUHtqRAh4T76ME9pxrJ+pjBbJbjeFtIqsxlwmYhTwOygPLXHmL/ct/hfeYxANcYHvhIS9OZQH/NDMkRJ+mYkxs4M6MVVRe66KoL9dw+/S4v9NKtH3eoYHILECvxbVM07Q4xQeEqr35/NhA8vc0Uf+FZUZRWadFrXZw2IYRvYkwmXqcix4+nAR7zDFM67Q+hNGpqBGVIkMJQRVnrMcJJkwwAeNLcSUwjg9FkfptC2nTCN6JY488NLCgCS7qU+jTS12kFwI5iSTrOsZ61cBZVGcELwd/68dpkRa5f5aYcCXQyaSPi16zjncw9TEiZZ7mj1eA6V1AtF4PHjiwYgLHsR9e0jIvyTZLWkK54lm/KDbWjZQVoRjFJTkVKQ4hTlQaivO2Z5S67zSrkE+ibYjSPK+vNGSqCupIvcczxzWdVx/7h2tZl5fSJ6KCCJ/3Q9LUmMEI+jmFUXxCIeS8u/FB86EJKW4IQiFB5HpB+JZAOqyd7SBR1mP8lkTXK11zZNkD29HkpKzPeKv8HCahPzwKPeUdVTvfJ0lCdu7ghm4m6k5xBDPBj/vhc5GKIyk49SPWBJ7ORLJqZYU27oyJjd4wsun4RtnGpZ3mWGj+kG4jNAXc+kG6lbbAD+nkXLOTKfLl/sgazclWkaZ62FmmN07dyXv1rSPV/Dr4l7SSDz3+D2nR37oCP6SVjBRYdbqfiNPmQXptpjkSeW1yT0AnZ+h9t9SohKvItxfXppJkIlwMpO3p81PyIOdzH67X8/l8sXh6nvXOhbvAHKH19o7+rL8I/AM7cnITlN3ChAAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 700000,
            ap: 14000,
            dps: 22105.26,
            speed: 16,
            range: 290,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 19,
            foreswing: 4,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 1050000,
            actualAp: 21000,
            actualDps: 33157.89,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 15,
                distance: 800,
                duration_f: 200,
                duration_s: 6.67
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
            actualHp: 400000,
            actualAp: 5570,
            actualDps: 6962.5,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 16200,
            actualAp: 2700,
            actualDps: 1975.68,
            magnification: "1800%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "182",
          enemyName: "ハサミーマン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 24000,
            ap: 2800,
            dps: 1647.06,
            speed: 24,
            range: 199,
            rangeType: "範囲",
            kbLevel: 3,
            money: 700,
            freq: 51,
            foreswing: 12,
            backswing: 39,
            tba: 1
          },
          stageStats: {
            actualHp: 192000,
            actualAp: 22400,
            actualDps: 13176.48,
            magnification: "800%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            }
          }
        },
        {
          enemyId: "183",
          enemyName: "サイバーX",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 120000,
            ap: 2200,
            dps: 4125.0,
            speed: 4,
            range: 60,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 960000,
            actualAp: 17600,
            actualDps: 33000.0,
            magnification: "800%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "終局を迎える蒼船",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 2,
        magnifications: [100, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "207",
          treasureName: "初期金額増加(戦国イベント)。最大数999999",
          probability: "100",
          amount: "1000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4100",
          treasureName: "キャラクタードロップ(4100)",
          probability: "1",
          amount: "57",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2400",
          treasureName: "キャラクタードロップ(2400)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1000000",
          amount: "54",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 12500,
            actualDps: 10135.25,
            magnification: "2500%",
            count: "13",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
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
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
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
          enemyId: "723",
          enemyName: "アンドロメ・ダ長官",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQHCAgOExMOFBQPFhUTHBwTHRwXKCcdKigiLCsfLy0lMDApPDsqRUMsRkM7VlQ3W1ZDZmFJcWxKdG1Of3pXhX1Uh4JckIlSmpOIhYZon5lrraVnvbV7t6+HvrpvysB11MqGzcN429B84dad09CA6N2V4NeF8eag7eaI+eyk9e7a3d2R/vqj/vCo/ve0/v/A/v/L/v/g/v////9VdWEVAAAAQHRSTlMADmHNIi47Tm5/l7b84F9+kf+n6L3/dYuu/8vE/uH/zf/o//7/////////////////////////////////////u7YFTQAAAzBJREFUWIWll1tjojoUhQPlolatUh2LDRlKaCLKRS5SycX+/391oj1zXs7DQMgLL37LhL2y9gaAfst4+1gBMJn2/Pn/l1t9U7A8N2+6AtZHE4AXcdtrbyHYG2BJ3x1d3sZLAFCg/f9giR1gx0t9gV+RDd6wMUbAGnUC8AtbINqNEFjGloXdEQI2cWxijRAAH789NBnBT0NWHY+Bto9cyAVcCwmXtl4pzUTy9bxpv77PnxutHWRcHaE+fn99fWrZcVLxjsnT5+diZ+vwwMKSsY4f11r0fU2pYKwKRjjBDJgccxfUHtqRAh4T76ME9pxrJ+pjBbJbjeFtIqsxlwmYhTwOygPLXHmL/ct/hfeYxANcYHvhIS9OZQH/NDMkRJ+mYkxs4M6MVVRe66KoL9dw+/S4v9NKtH3eoYHILECvxbVM07Q4xQeEqr35/NhA8vc0Uf+FZUZRWadFrXZw2IYRvYkwmXqcix4+nAR7zDFM67Q+hNGpqBGVIkMJQRVnrMcJJkwwAeNLcSUwjg9FkfptC2nTCN6JY488NLCgCS7qU+jTS12kFwI5iSTrOsZ61cBZVGcELwd/68dpkRa5f5aYcCXQyaSPi16zjncw9TEiZZ7mj1eA6V1AtF4PHjiwYgLHsR9e0jIvyTZLWkK54lm/KDbWjZQVoRjFJTkVKQ4hTlQaivO2Z5S67zSrkE+ibYjSPK+vNGSqCupIvcczxzWdVx/7h2tZl5fSJ6KCCJ/3Q9LUmMEI+jmFUXxCIeS8u/FB86EJKW4IQiFB5HpB+JZAOqyd7SBR1mP8lkTXK11zZNkD29HkpKzPeKv8HCahPzwKPeUdVTvfJ0lCdu7ghm4m6k5xBDPBj/vhc5GKIyk49SPWBJ7ORLJqZYU27oyJjd4wsun4RtnGpZ3mWGj+kG4jNAXc+kG6lbbAD+nkXLOTKfLl/sgazclWkaZ62FmmN07dyXv1rSPV/Dr4l7SSDz3+D2nR37oCP6SVjBRYdbqfiNPmQXptpjkSeW1yT0AnZ+h9t9SohKvItxfXppJkIlwMpO3p81PyIOdzH67X8/l8sXh6nvXOhbvAHKH19o7+rL8I/AM7cnITlN3ChAAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 700000,
            ap: 14000,
            dps: 22105.26,
            speed: 16,
            range: 290,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 19,
            foreswing: 4,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 1050000,
            actualAp: 21000,
            actualDps: 33157.89,
            magnification: "150%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 15,
                distance: 800,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        },
        {
          enemyId: "365",
          enemyName: "キャプテン・モグー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEBAQJCQkMDAwODg0PDw8WFRUYGBgaGhsaGhoaGhoeHh4fHx8iIiIpKSguLi5NMwE3ODg4ODg9NzhDQEBCRUVERUdGSUn/AABNUlJQWVhYWFhgYGBoZ2hkbW2tVGSkWmx1dXWtUqp9fHxkioOpanyDhIaEhISjkCSKiorWaZRroJjdaZuSkpHga5fCiZScnJvIrQ59t67/f4e1tbaJz8PvzAiQ4dO90s+Y7+Gg/OzN5+Lo6erw9/b+/v7///+wjuAlAAAAQHRSTlMACiY9GE4xv2GL1artd0T/DrikYorI/tsB7P+5/OT/ncH9A//+/u7///8Q/DH/WP7///8C//7//v/+/v////8AApUKPwAABBNJREFUWIXtVWF3ojgULaAUrcqICmsM2aZRYmQyzbBhAIHu//9X+4K2a6ezU7Vf9kPv8RzQ5N7cd18Sb/7+IG4+BT4FPgX+LwLv4eGvd6f8hrx7eNjtPiBwszP4kMDXb193H6lh9w2w+/J+Ur+EZffn9wbzL9cJOLdxsnkExO5V/N6dzyQIbDYL949rBLyl7+PNZhP/ObmqBMub3g25fnyMZr1r+FCCd7cUkjIcT71rJOxBrJu2LbUQOgnsi/nuVDVPBg3fSsWCSz3YgW47fsm3P35sdeJdxrfG6sAHge8gUNeryyzYixrIrRGpt9+327JN+hcJ9BMTQGMEWsG00iUfWGfbdx3LU+UhwrYpOSEo9P2hc2M5/XNU3EXkzHRTN09trSlQjxhYzhBUzhFYjseiaRtNDmxEuMAERf3BaHjOfrCcwTBCstUdeU3WZd3WiqNwEY3ODKK3YAKX3A9FXtcV8JsMdLIiX5xTgRFYMUkE90nT1lm+b5osr6r9fp+Oz+yEFVBBCfeRLsu8rGud7fdVUeWrc0+ENcacMemHGVhPM1g/TwlJ4/P3kn0XYq18VO3zLKuqjCCEETqrBUc4Q6SQEajSvFr7YYgI8UcX7Ob+yPRwDcFVVYrWWV5U6ej2zB50Dm5DhNbFft9JdI8iuoB/05vnR94LqrMztHqu48VZsf8J6cDzPPf9a8EeT6N4DbmnP1lYj3CaJqt3LlirP13nhllk5LVC0SlWRRI4v5Gw+lH+TCvS7FQgR8dM02jl/deWtrwoP6Gkrx0cBTIsk9mvyO5sNhiFWVU8x1cQ6P+/XSDZwQDXVN+//bvtzWNBkdbEHNyqMMwUE/N+5BfLpXGXk/JJS/XmlrdmiZJYPzWEa0UIXZM8J0xSDBJZDiciZcslWadZisq2ITiYnXoA9+OFFAw3rcZwFYpQ1xpUhOBcSS4YEVIqwRmcKACrOaLJanKy+n2SCMkZqZXP2laHom2VjxkXR2DKBXzhjFL4wMESUqmX26HnRUpJKTgNMQau8n0BIphSwoAMtzqB08jADTWeMKEhAjWZjA/b0qQHbPAJ8wTicI8gXCKilGKIUs4ZZ4IhBuNIwkISFGlnLo67MqzJKoYfGBZmFMNiUoY4NGtICmUxeJrfcZeDAdjn4BgeatVF2XNg+4dESTMK0SvJQtLNFN16phBxqOcZSnazVRIcorTsgEp5GOkmdJkdlhOdXVgccy5eoQti/tyIVVfXgchfZhy/M0YxRiBw1Dg8oOxo7r5shfF0Cd2CzNhL+/gBNAqmw2EURUsTKaU0htc4jqfB2D09VXbfC1arxfRuuogxJibXyGAR9C3LdhzX6c+ni2Awnk1c25lM3J715lBaPYDVsx1vPAimwcxxXcexrdPxN6R/AAWtwIoGV1/TAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 16000,
            ap: 222,
            dps: 37.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 180,
            foreswing: 61,
            backswing: 45,
            tba: 60
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 5550,
            actualDps: 925.0,
            magnification: "2500%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "barrier": {
                hp: 2500
            },
            "warp": {
                chance: 30,
                distance: 250,
                duration_f: 40,
                duration_s: 1.33
            }
          }
        },
        {
          enemyId: "375",
          enemyName: "大夢くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIDAwMDAwMEAwMGBQQHBwgHBwcHBwcHCAkHCQkHDQwJDQsJDg4NDQ0NDw4fIR8lJhgYLyspLCUdNTA8PD0+QDsjTUX/AAAkYFNOUFFHWVY3cWVnbm6nZA9aenZYjoasewy1dR2eiAK3eB+Dg4RwmZPIlTeamppyrqfRmS7Roziur6+ExsHbtF7gtU/dtmK9wMD00AKX3tnuz4T2z3DN1NTt15mh8eug/PH//wHn5ePu8fL///////+vBgOqAAAAQHRSTlMAEwgipjFBk1BdhenNuNx0+pqv787+t+n/Af/V///oFf//Bzn7IPH+R/r/qB7+/kqqiv3//7Fc/9L//wH9/wD/ETCBVgAABGVJREFUWIXdV+t2skgQDCAIRiUI6HzDJTOuSpiNY0LYJRBm8/5v9fUAxvUSL9l/W788nqmiqulu4O6f/4i7/4HACTzOl8s/JJbL+fzUgfN4fHp9efmzxcvL6+b5Rv6vp7p+fVouHwHLp9d38XqrieXr+/v7Xy3kr83NKR6Xz5vN3xKbzeZ5/utWfouPj/n84+NnXAlV0XRd1zT1h3TdngZxHAdTx9R00+pgGrqiqldoanaQFkKIIivWsTcc37uzFp43cfoDy9CUcyqqMU1r8fkpMhJlQqQY46zuUGTrdBUHnmMb36ZTrSBr6Eno+zgpigiT+vPfEKCzCia2flrCDIrmFEUoDEPEQYB9HkHU2cqztRN8fZq1RxgKkR8icBAVh2yRJ5QmaTwxjkyog5X4EpAOMob58fUpliDEM44MeJ0BwSLIgCKKaS2+sBVIcAs0Okih2u7WrygYjtgaI7reIQMUdS2gMC18e19A6aFsZ7Qo5El5LzvU8gZkWZqudxb2BbQhYmIvLcOQoa2caDoBkK3XKQkRkgLDgxKMEcn3FGqoVyIZq3gWBNMveJ7r+iAxPhTAOOJ7fZMhfzxxbMuESdA1ZQtNN6z+0D0U0Lwk2nrehkhdSzk9Qao2cA8iKA7LGXSOqHc5RGyeYrfn+72Df6y4rBhOCCHpl4314PvZ0w87SZvyiiHCc07JtiOK6ame/waqFbOIlVVVlcl2CM9lOIYyCRs+KJB1ZyE9k+FYwElaflWxRGwzKLdEyDt+xUknUAfXF0HzWLUTqG8WgGnkXwJ51A1Wcb2ANkI7BxXrMqwnVxfRdDGVNcybQuYha9YzGVydoI9wlFcli5ogZeSThIt6dbUArAOMGYcJbnyUBMM+KURqX6Z2CWYwi5FcV9JCyXGSM0ixss771jVV0ZUmQUS7VQVUMIJkEiHio927B8Ob2pNmPysjzLbbEsxjRGQQkU3ON6IeLBaLmdn8oglYiBhr9mVjoKzyS7Oke29vb4s+9IoR84hFCaNMJkF+YyCP7fNdoDgLKTCDY2acw22jlBGZxMcwFSUL7AuTpE1mi7eFP4bFZ9GKRYTlZUIZmJABkhOPvwOoujEJXQLPa2dEq5zJJswJpQhaIafOVVNgjAZBkXNGaDcEJY2Qz0seDK6bIlVTbLkGOOl2CY8IQox45vWLRLEDuCIpS1m3PEIk9EPXuuUdTbFnvHXAQ0o4D1niXH99gOmlZStAfZJXCb3YPwfQnBiqCALcjaD8EecXGvgIiuV4QC3jXgy7CAycH8FTUE14rvGJFZTSwC2Poy2MuCxXth7kLMzJhQk4CR2u7Wmax8OQe/rt/DstyKmtKtPEndHb7mEHZcoguergoYf7P3nRVyYz2XyW6w794U8iqIO+NK4B3XV/UsQ7XW91fHfsH76DXmNAhZcv+NIxBq7/8HDf6w/g3Ux+91z5mWINer3RcAgfKA8+8n3QANzfj4ejUa9vX55s3e4DfTwe3x8CJHoD67tEvwG1pijNnjT0NwAAAABJRU5ErkJggg==",
          traits: ["天", "エ"],
          baseStats: {
            hp: 50000,
            ap: 3333,
            dps: 552.43,
            speed: 12,
            range: 240,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1250,
            freq: 181,
            foreswing: 32,
            backswing: 44,
            tba: 75
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 39996,
            actualDps: 6629.16,
            magnification: "1200%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            },
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYHCAgHCAgICAkJCgsKDQ4LEBAQFxcTHBsWICAYIyMdJyQVMx4fLi0kNjUlODQoOjgvPDM0SkhNShk4VFA/XFdFZ2JfY2N/bAVPdnJzdHVVg35fkYuDg4NonphvqqLCowN3tq5/v7jivgOEzMKT0cuT2dP90wOb3diX593T09Kh7uef+Oqh/u6n/PHu7e7///9k0IHSAAAAQHRSTlMABw0UGyM7TkV+LF1r24qil/fsvq/S38rU6/0L3fcx7P/+//P//f///////v///v//////////////////////03sm3QAABSdJREFUWIWdVwt3ojwQLb5QUVDBFyufiSQ1TQpCAyUlsvv//9UXqFpd33uPx8c53puZyeROeHl5CFqtq+tN7bE/n6PWaHWc8dgy/klCa7R61mzpEzS3jdrz9KY+UGzG0zhAVvfZCLSmYS0UW0iZhsHSeHb5um4tcJhKud3mUUSd7pPLdzszHAnFVkiDyO88l0Ct7SyD9Ju+lTwOZ/pzfGOK43y7Qx5z4jSf5JP98mUGEYfWM3uo+PSIv00498wnBDR9SrMjfs5Tvug9UcOWg9MDWwmJOA1m+uMCjYEf/yyv2iDjKZ22tPqDSdSMRfATv4zjPOOCTLvdjv6Qwq/2lIiDgIgQEZwLbBuDmVl/KAHL44flEwoB5FEs4GRG8KDxAF8zJjQ/NCCGQahekYAuS5n1iEBjcAhA8VEsBaZKAMG0CB5qxtb0EECq+EWRUxREgsBEBNMHzqPWW+63MGdQ8YsigDRU3xkljwg0LSx2/cMhSUqEABEeAuCCmV6/202tMftOQGbUhagEdF0XIddduSPbbN1R0PR5WAnkEQaQBDswRuFqswLUt+90tGaUJZBbEULAkqqaUgoeMgzWnxuAiWe3bgrUestyEwUDSNlJ8V3MAILVav3x+bFeqTQ6N9ux1vN5SQEoKX5Og1p+8/H5+fnxsQbQvrkVSiBRDAj5ga8UUlYGoLBZBcHiZg5VCoKA6IivFAQFmzKCNcriRftWGZVALCPI8u2JgAzA5mOz+Vjj/L5A2bb8JABVFAJUAVfrNUqj2yloxjyMATkJQBaFJC6kPEAuTO4IvOhzxkB4GoBI84jxXA1IxvidIr60JgSrk3vMV4cykrv+jhCY3Bbo2hAgccwvIne4z0my4bB/W6DpeC4+KUHBIdibbKE6/E4ETct1D46y7yOeV+NhW+RZcq8GpcC+C5SZHES2uRA5Z4SRea994a5U7/73a1eDg4DM0mN7V4cavb69weFkZp27gu441Q1K0yfA/c64yCjCLCuEqJpZeTsF4dfXO6DB8nxA9Dw87TXrDd2GZN8GIqKEJHmc7KuZYPT6Ckkmg/PbTm/JyMK2nLFLf/ooT2Kex5jvfKHYJsqawkwW0bm7GhMSUOh5LkmCg0CMSaisgRc/kHn5zs4j0McsLL1P3YqOBFicbSNAeZalB2RZllyYcV2HCnUNKRs+ODkKpRV8m/MB2J+eO2vN9HcD7S8BpRCqAfu+x5tnm+aFMa9GaigvCqjiCfL2e48vv9O4OF2ajp9W7XpJAL///rPDl29cNiTNmLGqY5RAIE8FUvi+5/9Jltfumw1zHpSdmzP33wReuoM5DqKIATf8SyBDPzVIlldSKO/2nfHc8+b90WkNVFIueN0Dudb1wVJvdyyr05moFE46gSB6hOXg+mzT6o1GvW2TvDjGVjnBEcLp7RGvNc1lnN1AMG13u9eDaBqGMYaEEIwxIdVn9Y52vxBeOKYyj6vr9/oze46VtbvKOBSwC5n6gCOv+knhfLLwqW9dFTA9ysKEQUTi0loFGZZ3JsnmcxKps5knURglgl4XMBZhLjNMk8oOZbgc+6UjpXjuQsh28yX1zes1GGCuBNROyvJq4TvVrqpHDsYC+D1xZEpvPD9pbduPUqouOFJmEeqbPRvGVTB55HlBmos0xLPejVZoDfoexi4gjGF3OOr3R0MYiVzmHI1GLiLqEdjRb1yTtFZvYPdHo+ExPEQogcPhaKQE7cGdRqo3um2jY5oDBauCY9vj8dS2zE7P0FvdxjH/f2+UbkUyrPizAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 12500,
            actualDps: 10135.25,
            magnification: "2500%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 14175,
            actualDps: 26578.0,
            magnification: "2500%",
            count: "2",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "86.7-90.0s",
            delayFrames: "2,600-2,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 6000
            }
          }
        },
        {
          enemyId: "723",
          enemyName: "アンドロメ・ダ長官",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQHCAgOExMOFBQPFhUTHBwTHRwXKCcdKigiLCsfLy0lMDApPDsqRUMsRkM7VlQ3W1ZDZmFJcWxKdG1Of3pXhX1Uh4JckIlSmpOIhYZon5lrraVnvbV7t6+HvrpvysB11MqGzcN429B84dad09CA6N2V4NeF8eag7eaI+eyk9e7a3d2R/vqj/vCo/ve0/v/A/v/L/v/g/v////9VdWEVAAAAQHRSTlMADmHNIi47Tm5/l7b84F9+kf+n6L3/dYuu/8vE/uH/zf/o//7/////////////////////////////////////u7YFTQAAAzBJREFUWIWll1tjojoUhQPlolatUh2LDRlKaCLKRS5SycX+/391oj1zXs7DQMgLL37LhL2y9gaAfst4+1gBMJn2/Pn/l1t9U7A8N2+6AtZHE4AXcdtrbyHYG2BJ3x1d3sZLAFCg/f9giR1gx0t9gV+RDd6wMUbAGnUC8AtbINqNEFjGloXdEQI2cWxijRAAH789NBnBT0NWHY+Bto9cyAVcCwmXtl4pzUTy9bxpv77PnxutHWRcHaE+fn99fWrZcVLxjsnT5+diZ+vwwMKSsY4f11r0fU2pYKwKRjjBDJgccxfUHtqRAh4T76ME9pxrJ+pjBbJbjeFtIqsxlwmYhTwOygPLXHmL/ct/hfeYxANcYHvhIS9OZQH/NDMkRJ+mYkxs4M6MVVRe66KoL9dw+/S4v9NKtH3eoYHILECvxbVM07Q4xQeEqr35/NhA8vc0Uf+FZUZRWadFrXZw2IYRvYkwmXqcix4+nAR7zDFM67Q+hNGpqBGVIkMJQRVnrMcJJkwwAeNLcSUwjg9FkfptC2nTCN6JY488NLCgCS7qU+jTS12kFwI5iSTrOsZ61cBZVGcELwd/68dpkRa5f5aYcCXQyaSPi16zjncw9TEiZZ7mj1eA6V1AtF4PHjiwYgLHsR9e0jIvyTZLWkK54lm/KDbWjZQVoRjFJTkVKQ4hTlQaivO2Z5S67zSrkE+ibYjSPK+vNGSqCupIvcczxzWdVx/7h2tZl5fSJ6KCCJ/3Q9LUmMEI+jmFUXxCIeS8u/FB86EJKW4IQiFB5HpB+JZAOqyd7SBR1mP8lkTXK11zZNkD29HkpKzPeKv8HCahPzwKPeUdVTvfJ0lCdu7ghm4m6k5xBDPBj/vhc5GKIyk49SPWBJ7ORLJqZYU27oyJjd4wsun4RtnGpZ3mWGj+kG4jNAXc+kG6lbbAD+nkXLOTKfLl/sgazclWkaZ62FmmN07dyXv1rSPV/Dr4l7SSDz3+D2nR37oCP6SVjBRYdbqfiNPmQXptpjkSeW1yT0AnZ+h9t9SohKvItxfXppJkIlwMpO3p81PyIOdzH67X8/l8sXh6nvXOhbvAHKH19o7+rL8I/AM7cnITlN3ChAAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 700000,
            ap: 14000,
            dps: 22105.26,
            speed: 16,
            range: 290,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 19,
            foreswing: 4,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 1050000,
            actualAp: 21000,
            actualDps: 33157.89,
            magnification: "150%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 15,
                distance: 800,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        }]
    }
  ]
} as const;

export default e1400Data;

