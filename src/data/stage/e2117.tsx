// Stage 2117 Data
import type { StageData } from '../../app/stage/types';

export const e2117Data: StageData = {
  eventId: 2117,
  eventName: "New Challenger(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 117,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "VSザンギエフ 激ムズ",
      baseHp: 300000,
      width: 5600,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "400000",
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
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 8000,
            actualDps: 6000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
        },
        {
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 6000,
            actualDps: 1682.22,
            magnification: "600%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2117Data;

