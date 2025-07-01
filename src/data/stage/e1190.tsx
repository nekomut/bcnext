// Stage 1190 Data
import type { StageData } from '../../app/stage/types';

export const e1190Data: StageData = {
  eventId: 1190,
  eventName: "極ムズカーニバル3！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 190,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "暴風カーニバル3 極ムズ",
      baseHp: 900000,
      width: 5800,
      enemyLimit: 7,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "377",
          enemyName: "スーパースペースサイクロン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 666666,
            ap: 555,
            dps: 3330.0,
            speed: 6,
            range: 275,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3333,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 666666,
            actualAp: 555,
            actualDps: 3330.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 30000,
            actualAp: 3600,
            actualDps: 2297.88,
            magnification: "200%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
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
            actualHp: 14000,
            actualAp: 1000,
            actualDps: 810.82,
            magnification: "200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "開眼カーニバル3 極ムズ",
      baseHp: 900000,
      width: 4500,
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
          enemyId: "127",
          enemyName: "ネコマッチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMDAwMEBAQFBAQHBwcMDAwNDQ0UFBQcHBwcHBwjIyMqKik3Njc7Ojs7Ozs/Pj1ERERERENWVVVeXl5gYGBnZ2dpaWlzc3N2dnZ+fn6EhISIiIiMjIyRkZGZmZmenp6lpaWurq60tLS7u7vDw8PLy8vU1NTd3d3m5ubw8PD29vb+/v6sXmXMAAAAQHRSTlMACBcrQ0pmlZ3AJTJRqLcQXG6JHtLjeTqv//IgKlX/RWN8lKzawoKp/cfr/7j+0v/w///w///+/vz/////////XWbyhQAABCxJREFUWIWdl1t7ojAQhuVoCyhgWqj1bNdzEYkhIQmE//+vdqi7++zVLunciD5+L5OZyUwyGPzH0vB///i3hR+rgeGY39evz6f9Zjf7rn52qOqmpuf5N/XGXrSdyYPxPYB5VW1dt3V7/6YLs2vTNoJzRdfa2hCZxmx/lm2Nc6HuK035fP95PW2vsiiUImUjzoleNayuolY1lTK7YCElu5S37Uqjouaw9LZtWIlzXmTZ5XIkhNLbYdU3F3vZ5a6mpCopxSQvM8xVq+q+kQg/FegVl62SFOOSECZF3f30iXoBZpD9VgnWYYCTVV+87gvt5wKCENacVF9F2Na5an8bW/cCrK6MEE7pl0YJ2jweoKb6BQHKT5W5EvhL17BfAFlIfu1V0WvwHdR19ktIHu6LY1HsegVxDTuQkbY+PoIgH57UuLhwtukDWFFVl0zxy4XVSkmS8aapBcZ10bTXPoDwQKtaiLzAWZ7lpGIYk+JyrBWBbd0HMNhkBZT/9kdVswtVtGxoSdilVpg3PQFlIeV9s7hxiZtW8FYQyo5YMs5OvQCrM5OtvM63pCFVRYigmJOPbUEJ7QcwDpJB0Sy2VFaS5pQWFT3N13eO2bYXAHajaBqyOYmKtW3VtLy8LWCDqLJnKQ/md8lrsrtJlnNRVJLgnbmqIBq8J8DYV6XAR9pUFBcFJLHcQoMXsn9rXGSEZEfWENFUTED4D+G2LFW16duS5leGs2XBJTTlUnIhduZHXlX73l3ROIiqWC6P5dd+khI/z08lP2lMl3Ul8fvrdJlXUvLiuByublxrNsyugt924/fpdLmcTt9HiwNlB53RYGyIUvdF/DoFe03QAUbEWkM/MNKzEGxtJO/L6Utkok8YC7YWAB2gHxyM2ej9LTXNxfnIK63xaEDe8+PWGCDbC0PT25H7p86EN4xwcTp9zDtSaJhmuPiRaB2TDFAhD3V19wCYvt4RBQChif4ChJpHnA6AUu8BAJSpC4A3hp5jhQYEA4GZpj7A9B0LfIdYIM/TB5ih5/sWuN454HmPcGiYaaLU93yvW4mHLMvTBiDL9n0n7fJnIcu3vO8AHNexEPLBAzv1NI/spodSK4gDHyFgWFFgaQNMy0ojB4Ernme5ugADAcBPnRSSkPqWFUW+JsCzvNRxbMsMkQ3RdCPNa4th+XYUBbbfpdP2bTey9a4shmUHbuQ4PniQBvAc6N55rMCNXSfwoZU4sQusoN8J84/5bjJJosiGMnAnSRw5kaUHSJPJ0zBJYiiGCXy6gasJsCfD0XCSJFEaDSdxHEe6AGc4ehtO3MS1gyTpVhNrAqLR23g0jJPYcdzJ02iYTHwtveG+jZ+BMBy6Ufw0Hr+NnlI9QDJ+fgZCt44hsJ7Hb1pjCQDPnY3h3ePx4zHQA0xeXl7/tpcXPcAg6Bx/+W2wgn/E4Cd2PbDRNAsESQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1200000,
            ap: 5500,
            dps: 10312.5,
            speed: 24,
            range: 275,
            rangeType: "範囲",
            kbLevel: 8,
            money: 8888,
            freq: 16,
            foreswing: 7,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 5500,
            actualDps: 10312.5,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "136",
          enemyName: "ネコボーン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 18000,
            dps: 17419.35,
            speed: 4,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 31,
            foreswing: 16,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 18000,
            actualDps: 17419.35,
            magnification: "100%",
            count: "10",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "134",
          enemyName: "イチリンリン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQACAQECAgIDAwMDAwMDAwIEAwMEBAQEBAMFBQUFBQQHBQYGBgUHBgYHBgcJCQkKCQoLCQkMCwwVFRQcGhseGxshISAiISEjIiMmJCQqKCgtKyw0MTM1NDU4NjY5Nzg6OTlDQUFGQ0NIRkdLSUpQUE9UUlJZV1dhX19hYWBxcXB9e3yDg4KTk5Oenp2rqqqysbC3t7fDw8PPz87Y2Njm5uby8vL6+vr///////9EX7PwAAAAQHRSTlMABgsPz+MTGySP7XksYVnYorM0bT/ASVKE/pdneeTxuMv/lTyv7v7/0Lv/5/y+1//+5////f2///7+/v///wD/KXpBqwAABC9JREFUWIXNlm1zqjgUxwVswIpPiGC11mItVEQIIbk8hCzf/1vtAWrbnb0zN8y+2fPCkZnkl/PwPycZ/fUfbfS/A4x+Y7qr/fiSBOjm1w51utKHA9yVdf/rxB/GcIBzPYMPKtKRcc5jazjATtnZ2Z8ut9tHRK/2cICVFsk1KyrOq4ImO1MZCjA/MOWi6UxwenEUWQAydViruNei3979ijJ2FTmAsYsvrqZYl35/3Xshmiq25QDWMWXx6flI+vPzhMP2nNZNcdalAIq+j4uC0aIPv2K1aATFvBHpXjKJqnvL6+ZuomZlzsGNpjyjkaIj5Y+AkWKfcVHfC1BnIeGVEKKObX1/Obt/BrQyJFUP4KSkPqEEeIK8XlJ23coA3LT+lECdRQmLkq4kLCvZxUUygFkqvlJAMo77jLKMni1FSonz9DuLJSak80fQ47MhKWUz5t9lYFn/IVJLke0F9VQ0/zJ+0+WbyfkRw5cnz4o8AJ1y8c/tTXUzh7SzdSt/NGMbQLpXhgAU+9b7ILp2FFX6fJ/McoDWh06MVVYDhMV7NHAijfQja88ucMFIeNh/3wyyAHMRVZABnnie5/tLXXqk3c0+eLgbJn4Q+IelobaDbggArTcHiL+psee/rHWkAWEQAIaHc4ZR1hQBxmtFQ9ogQB+xeYZE1gSTHWoByhBAt1bthnuVkFdzKEBtczZSrK4UNLk66jAAhNwttsablDccR88qJHEQQFe7Wi7Wu6wWLNmhgQCkt9JT5gvnLa6aklxaHQwGKOp6vP9V1U1FY0sZAlAAoLaYyQGUICrKunHWxyAFUDuAah0hAZxmJY+NzoMhAA2KeGY1Zzfo6/KE2hwOA6jOJa/L9GT9qgV1UVsGdQjAgFuas+sevf0S/GbCa0tV5QEasrZpWWJ/YWtvhShOCOngkzRARfYZLsIQGvl1eyrq1NVagCYPgPTn2IdR5EXhO60+TE3XdYRUSR0o+iTJgwAnMMvCMIrwCQHAGACYH5ISM858n7AoiN6nGjIMQ+/kLQPQj1FIaSYyP2AVScJoZeimaYIPkoD5e5QkOKmIH9C8zJPofW5YlmnIAtRdFJA8CZPA93FecxKGO2sIoI0grwuoAuSg5DUNo6NtAqF7w0oAjNcwyFiGQz8MkiwvSBC+AsC2LUMeQHNKIz/0EkhCC3BMZ+ZahioZQhjC27LAgR/gEjopCI+ONZ/ObFMOoO3CgJRFRkhCM8Y5hqvRtmdTcEEOoMzeQYYkK3JSVHlOo+Bl4s7W6/nc1uR0YG6gDRICAFZVOAi8xXI6BQfWcySpxMmL9/QUYrjTCNTCf9xMttvtdDZdSwKMyeIJDGQQeF4Qvqwmk+VqOZlOppIAczl+eLqb97KZrDbj8Xiz2Sx1OYC1WSweHj8Bjw/j8eLTVpJPXXMJJwKis4feFgvwYfkbwN+rOKsrO4sQXgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 288000,
            ap: 5800,
            dps: 3702.13,
            speed: 10,
            range: 370,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1200,
            freq: 47,
            foreswing: 16,
            backswing: 31,
            tba: 4
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 5800,
            actualDps: 3702.13,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "137",
          enemyName: "ネコパティシエ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1400000,
            ap: 7200,
            dps: 9000.0,
            speed: 6,
            range: 235,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1900,
            freq: 24,
            foreswing: 18,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1400000,
            actualAp: 7200,
            actualDps: 9000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 777,
            actualDps: 932.4,
            magnification: "100%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1190Data;

