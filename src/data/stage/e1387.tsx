// Stage 1387 Data
import type { StageData } from '../../app/stage/types';

export const e1387Data: StageData = {
  eventId: 1387,
  eventName: "合戦！武将般若我王",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 387,
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
      stageName: "鬼面の猛将 超上級",
      baseHp: 160000,
      width: 4500,
      enemyLimit: 10,
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
          amount: "200",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8100",
          treasureName: "キャラクタードロップ(8100)",
          probability: "1",
          amount: "55",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3900",
          treasureName: "キャラクタードロップ(3900)",
          probability: "1250",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2200",
          treasureName: "キャラクタードロップ(2200)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "2500",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "702",
          enemyName: "足軽わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQACAgICAgICAgIDAwMDAwMGBgYMDAwNDQ0REBATEhITExMYFxYYGBgZGRkdHBwgICAiIiIkIyMlJSUnJSYpKSk0MzI1NTU3NjdBP0BFRERQUFBZWVldXV1gYGBxcXF6enqAgICGhoWNjY2OjY2cnJynp6eoqKi3t7fGxsbV1dXe3t7l5eXw8PD4+Pj///8TzGEPAAAAQHRSTlMABxAWHSgvXZ7F/zdnhKvpQlGU9nB5uP/Pm9eCrv+N6fP/l9i6/6j/58b+/73/6v/U///m///Q////////////9NHM2AAAAvRJREFUWIXVl912ojAUhfFfo9Zi1ahTatOa0sJEBkoGEMh5/7dqgradqnUIXsyafcNayP6yk5wc0DC+1d2m8/2P3+h6MplOf0jdSXnwoA1gaRj6aZrGQRYmIdxpAx4cSoltU4IpJkzoA+pICqOdKNcHtAoni4uLk+uvQUuNz1K+LRIEC21AWw2cMoerDE5WIQFGNrgh0K3M4MCTPkBOnOWxJ6Igk6gKAGznrpOnCYmjSoAmQiQNU+DSXwnQuEHIEpGTSz8iXB9QlwBkJVtebGOuD6iNlJMERUFaFRIYI/QpklVN8H4W4OdlAHIhAP+fgKIOPgjhy0UAbOWXJuCXJUA41gc0vgDg14UJ/gXgfQoYYYxRJUBhVbKsKgmaIRQSeS5EkJ4G9M8AWjZTcl1HiorXU8+M8RlAH/0pOAXo+OeqozEcDqfT6WQw6HQ6V6cA7QAmZwBfZMJr7WiEZ4ivywIGx4D6o4DNEVUDYLgA67J+CeD1g1vmRrDyX14d4DVjMNzT1O7XKPjt0n4JiAwz2pjzZb/x4hegOVuV90vA77YHoWyO5CYDBWiT2eGk/gIY51B87WDbG8s7S9LU8Ks6GEHi7s/namC06UzHb5iOhZ2Purbo7fxeZwLGZPTlYCBM7bmGvd9DR8L2Y9kyrs+O7RKAKZm3ygHGU+rZzGVUtQZGkeMSbPe643G3bCG1Eshkawp2HSoUkGzjcoPvI2yUT34xqv6GikbHUOlzrAK4icgYI74CsFgBIqaTwOwPFqsoT7LdFLKYhzHrnmunBxrJyr0tZs9FLmAbeYhZ3C1fyS/y2bVMLzw3CfYhcuDlV+FBrI0ntYx+lLlhzDlPkiyh5Uu5k2eTxW7+sHWJp4TGGqtYsyEiYk9I/OKicxLkP0g389M9gO9WYagFMJrTZ3gHWL5STw9gqF3YL0IYBr4f8MfSb4SdFttM7iN8ytYE1FcBdZ211L1nO2w5M/XsfXPm9/CyK3XlzZfMbDe0ANeHLenm6mQdvgHavYlrTfnkxAAAAABJRU5ErkJggg==",
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
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "60.0-66.7s",
            delayFrames: "1,800-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 480,
            actualDps: 197.28,
            magnification: "400%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 3750.0,
            magnification: "400%",
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 480,
            actualDps: 197.28,
            magnification: "400%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 12000,
            actualAp: 4000,
            actualDps: 1121.48,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "705",
          enemyName: "武将般若我王",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 240000,
            ap: 5760,
            dps: 904.71,
            speed: 3,
            range: 800,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 191,
            foreswing: 24,
            backswing: 17,
            tba: 84
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 5760,
            actualDps: 904.71,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "鬼面の猛将 超激ムズ",
      baseHp: 300000,
      width: 4700,
      enemyLimit: 10,
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
          amount: "300",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7200",
          treasureName: "キャラクタードロップ(7200)",
          probability: "1",
          amount: "56",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5750",
          treasureName: "キャラクタードロップ(5750)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4300",
          treasureName: "キャラクタードロップ(4300)",
          probability: "1500",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2400",
          treasureName: "キャラクタードロップ(2400)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "3000",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "100.0-106.7s",
            delayFrames: "3,000-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "052",
          enemyName: "シャドウボクサー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 80000,
            ap: 4997,
            dps: 9369.38,
            speed: 22,
            range: 158,
            rangeType: "範囲",
            kbLevel: 10,
            money: 600,
            freq: 16,
            foreswing: 2,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "2",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "100.0-106.7s",
            delayFrames: "3,000-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 6497,
            actualDps: 8474.35,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "100.0-106.7s",
            delayFrames: "3,000-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "705",
          enemyName: "武将般若我王",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 240000,
            ap: 5760,
            dps: 904.71,
            speed: 3,
            range: 800,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 191,
            foreswing: 24,
            backswing: 17,
            tba: 84
          },
          stageStats: {
            actualHp: 624000,
            actualAp: 14976,
            actualDps: 2352.25,
            magnification: "260%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "鬼面の猛将 極ムズ",
      baseHp: 470000,
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
          amount: "400",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5100",
          treasureName: "キャラクタードロップ(5100)",
          probability: "1",
          amount: "57",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "702",
          enemyName: "足軽わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQACAgICAgICAgIDAwMDAwMGBgYMDAwNDQ0REBATEhITExMYFxYYGBgZGRkdHBwgICAiIiIkIyMlJSUnJSYpKSk0MzI1NTU3NjdBP0BFRERQUFBZWVldXV1gYGBxcXF6enqAgICGhoWNjY2OjY2cnJynp6eoqKi3t7fGxsbV1dXe3t7l5eXw8PD4+Pj///8TzGEPAAAAQHRSTlMABxAWHSgvXZ7F/zdnhKvpQlGU9nB5uP/Pm9eCrv+N6fP/l9i6/6j/58b+/73/6v/U///m///Q////////////9NHM2AAAAvRJREFUWIXVl912ojAUhfFfo9Zi1ahTatOa0sJEBkoGEMh5/7dqgradqnUIXsyafcNayP6yk5wc0DC+1d2m8/2P3+h6MplOf0jdSXnwoA1gaRj6aZrGQRYmIdxpAx4cSoltU4IpJkzoA+pICqOdKNcHtAoni4uLk+uvQUuNz1K+LRIEC21AWw2cMoerDE5WIQFGNrgh0K3M4MCTPkBOnOWxJ6Igk6gKAGznrpOnCYmjSoAmQiQNU+DSXwnQuEHIEpGTSz8iXB9QlwBkJVtebGOuD6iNlJMERUFaFRIYI/QpklVN8H4W4OdlAHIhAP+fgKIOPgjhy0UAbOWXJuCXJUA41gc0vgDg14UJ/gXgfQoYYYxRJUBhVbKsKgmaIRQSeS5EkJ4G9M8AWjZTcl1HiorXU8+M8RlAH/0pOAXo+OeqozEcDqfT6WQw6HQ6V6cA7QAmZwBfZMJr7WiEZ4ivywIGx4D6o4DNEVUDYLgA67J+CeD1g1vmRrDyX14d4DVjMNzT1O7XKPjt0n4JiAwz2pjzZb/x4hegOVuV90vA77YHoWyO5CYDBWiT2eGk/gIY51B87WDbG8s7S9LU8Ks6GEHi7s/namC06UzHb5iOhZ2Purbo7fxeZwLGZPTlYCBM7bmGvd9DR8L2Y9kyrs+O7RKAKZm3ygHGU+rZzGVUtQZGkeMSbPe643G3bCG1Eshkawp2HSoUkGzjcoPvI2yUT34xqv6GikbHUOlzrAK4icgYI74CsFgBIqaTwOwPFqsoT7LdFLKYhzHrnmunBxrJyr0tZs9FLmAbeYhZ3C1fyS/y2bVMLzw3CfYhcuDlV+FBrI0ntYx+lLlhzDlPkiyh5Uu5k2eTxW7+sHWJp4TGGqtYsyEiYk9I/OKicxLkP0g389M9gO9WYagFMJrTZ3gHWL5STw9gqF3YL0IYBr4f8MfSb4SdFttM7iN8ytYE1FcBdZ211L1nO2w5M/XsfXPm9/CyK3XlzZfMbDe0ANeHLenm6mQdvgHavYlrTfnkxAAAAABJRU5ErkJggg==",
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
            actualHp: 2700,
            actualAp: 240,
            actualDps: 153.3,
            magnification: "3000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "702",
          enemyName: "足軽わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQACAgICAgICAgIDAwMDAwMGBgYMDAwNDQ0REBATEhITExMYFxYYGBgZGRkdHBwgICAiIiIkIyMlJSUnJSYpKSk0MzI1NTU3NjdBP0BFRERQUFBZWVldXV1gYGBxcXF6enqAgICGhoWNjY2OjY2cnJynp6eoqKi3t7fGxsbV1dXe3t7l5eXw8PD4+Pj///8TzGEPAAAAQHRSTlMABxAWHSgvXZ7F/zdnhKvpQlGU9nB5uP/Pm9eCrv+N6fP/l9i6/6j/58b+/73/6v/U///m///Q////////////9NHM2AAAAvRJREFUWIXVl912ojAUhfFfo9Zi1ahTatOa0sJEBkoGEMh5/7dqgradqnUIXsyafcNayP6yk5wc0DC+1d2m8/2P3+h6MplOf0jdSXnwoA1gaRj6aZrGQRYmIdxpAx4cSoltU4IpJkzoA+pICqOdKNcHtAoni4uLk+uvQUuNz1K+LRIEC21AWw2cMoerDE5WIQFGNrgh0K3M4MCTPkBOnOWxJ6Igk6gKAGznrpOnCYmjSoAmQiQNU+DSXwnQuEHIEpGTSz8iXB9QlwBkJVtebGOuD6iNlJMERUFaFRIYI/QpklVN8H4W4OdlAHIhAP+fgKIOPgjhy0UAbOWXJuCXJUA41gc0vgDg14UJ/gXgfQoYYYxRJUBhVbKsKgmaIRQSeS5EkJ4G9M8AWjZTcl1HiorXU8+M8RlAH/0pOAXo+OeqozEcDqfT6WQw6HQ6V6cA7QAmZwBfZMJr7WiEZ4ivywIGx4D6o4DNEVUDYLgA67J+CeD1g1vmRrDyX14d4DVjMNzT1O7XKPjt0n4JiAwz2pjzZb/x4hegOVuV90vA77YHoWyO5CYDBWiT2eGk/gIY51B87WDbG8s7S9LU8Ks6GEHi7s/namC06UzHb5iOhZ2Purbo7fxeZwLGZPTlYCBM7bmGvd9DR8L2Y9kyrs+O7RKAKZm3ygHGU+rZzGVUtQZGkeMSbPe643G3bCG1Eshkawp2HSoUkGzjcoPvI2yUT34xqv6GikbHUOlzrAK4icgYI74CsFgBIqaTwOwPFqsoT7LdFLKYhzHrnmunBxrJyr0tZs9FLmAbeYhZ3C1fyS/y2bVMLzw3CfYhcuDlV+FBrI0ntYx+lLlhzDlPkiyh5Uu5k2eTxW7+sHWJp4TGGqtYsyEiYk9I/OKicxLkP0g389M9gO9WYagFMJrTZ3gHWL5STw9gqF3YL0IYBr4f8MfSb4SdFttM7iN8ytYE1FcBdZ211L1nO2w5M/XsfXPm9/CyK3XlzZfMbDe0ANeHLenm6mQdvgHavYlrTfnkxAAAAABJRU5ErkJggg==",
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
            actualHp: 2700,
            actualAp: 240,
            actualDps: 153.3,
            magnification: "3000%",
            count: "6",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 20250,
            actualAp: 2400,
            actualDps: 2571.43,
            magnification: "150%",
            count: "5",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 98000,
            actualAp: 2800,
            actualDps: 2545.48,
            magnification: "1400%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "86.7-90.0s",
            delayFrames: "2,600-2,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 98000,
            actualAp: 2800,
            actualDps: 2545.48,
            magnification: "1400%",
            count: "1",
            spawnTime: "170.0s",
            spawnTimeFrames: "5,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "171",
          enemyName: "レディ・ガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIFBgYHCAkLDg8MGxAVIB4WHx8VISAXISEYJSQcKCkcKycfKywfLy0fLy0hLiwgMS8BQDsiNDMjNjQlOTUmOzgnPTopPTsqQT4tQj4vRj4vR0QvS0YxSkYwTEczT0s1Uk42Uk45WlRLWVk/YVxAYl5BY18Bf39DfkNLdG5MdnBPfHVSgHpSgnlVhX1Zi4Njl49imI9oo5lqp51vraN2uK1+xbqF0cWK2c2Q4tSX7N6c9Oag/OxUEvQ8AAAAQHRSTlMASYT/cWD/CVL/rSWHLzwXR1z/CwSheiTLajKv/guRguzen8z+sQTo/8ECBP/U8P/N4///7P7z//3/////////BlNmiwAAA/ZJREFUWIXtVmtT6joUxVuMVgFpqyBYHkrQcE5KDgmhO0nb/P9/dXfRGWfueA/Bz67hA9POXt2PlbXT6XyBq+skGY6zX1+9C0LW2x72xXr0fZLBrvGNg33xMunPvhF/15+Db5QylYNiMf54+jp7DYz/PVmNVrZhUUyhaWAzaB9m/cnL5CqM4HUO+yW1PIqiWNTebW47ndtFAWZ1F0Ywm1tfadMSRITX3rxkgw24Bkb3gQQL6xFIQPCnvN8na6O5K8anY9+RQEsgolipNMor754lI9wsslCCwa4lkBFrvIkJsqmcRPIwDI3vDJcVEgDJqwYJSu9NytJyPw2Nzx54W0PNCGVpRAAlxRR1xW0wwYtt2hps3nYxtqUsWcrdn8AhIibHJtaVoThIFATVnKnyDIL+rs0AjK84Nk/nseSMQ3gJWINrp4B51DIuGSGCkdTs+sEEneu99w2D2rlGmzyKOMde7oKncGyjr/PSSu19lUYROxIECxHFPAIkEJaLytqYRLkkBM5o4nEODaM2z41AKZFUE6L+nGMt/aLxMkUh4AixhBjw31kEV3PjXV5i6YRiEwnwiBXhJWS3w9G28aUoSXQEKWU4wewueSn2qCLflEcptpCa0ECCWbLavx8FRAPxOwEzcSDBLHlz/hONjqOYETwQKduMQwwl2bVWUIOSnHNZ2kqjIbAoh5Rveten4/tF3X7XlqVuyycklzKVJuU8lS9PTydtPcPpeacY5U6lpHWDiFApa15Cvp2sd4NTBO1Kgxy/C+I4QMrRDFNoFHhYDtawOJFC1i4EpUuwKo1TPANEVyhEBhS9/TBfn3S1WxRw5XxtcS26ygJP0dMhThkVuGwPSwOTvxP0V/vdSjS1/Zhk44S0UkilJG440MJs/p7C/Xg67T9tlUYc9rutNiXlUEswzLk8ZYptJ6e3290wGfV6o2TYv76hVFY1trASrkwNF4w/Bhnj6+9XvApkkxVVVnGjS68EpEYxbpYBYvpANjpYipbcCtKDrmWeC+F0L3BDdzrjojacacZZqdCdhVbKosPdhCewLRnNmVYVKJwuU1oK0diHwPj7yRujlCotSqMpCtzgNKFqYBF4URoXQjrLK2+wD1yjQVQGBN8+ha6nhHKUr7K+keiOWD7qym0fhqG++DqXVjjfVo+d87Viuq4Oi3Bb/TUpdqvN/rCUxkqmDR4LwR7O2SzZdDq+mw4GD5wJBsBKDrvwK84nZmsjagVAgeeP5yTwSWCFVcvlDX18W3/n1nyfvNF8+fA8eps/nvCC/0GWPD89j3qDXn8afEv8D0N32BtcdQKv2V/hqpMFH8Af/OAHX+Dq4uKy2+3+06Lbvby8+NrQ/wUXS7r9c8boxAAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 17777,
            ap: 777,
            dps: 264.89,
            speed: 15,
            range: 370,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1555,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 213324,
            actualAp: 9324,
            actualDps: 3178.68,
            magnification: "1200%",
            count: "2",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "60.0-66.7s",
            delayFrames: "1,800-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "2",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "73.3-76.7s",
            delayFrames: "2,200-2,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "1",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "705",
          enemyName: "武将般若我王",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 240000,
            ap: 5760,
            dps: 904.71,
            speed: 3,
            range: 800,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 191,
            foreswing: 24,
            backswing: 17,
            tba: 84
          },
          stageStats: {
            actualHp: 1128000,
            actualAp: 27072,
            actualDps: 4252.14,
            magnification: "470%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    }
  ]
} as const;

export default e1387Data;

